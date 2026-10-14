import http from "node:http";
import { randomUUID } from "node:crypto";
import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { WebSocketServer, WebSocket } from "ws";
import {
  createWorld,
  createPlayer,
  addPlayer,
  command,
  updateWorld,
  snapshot,
} from "../shared/world.js";

export function createGameServer({
  port = Number(process.env.PORT || 8787),
  host = "0.0.0.0",
  staticDir = process.env.STATIC_DIR,
} = {}) {
  const world = createWorld();
  const staticRoot = path.resolve(
    staticDir ||
      path.join(path.dirname(fileURLToPath(import.meta.url)), "../dist"),
  );
  const hasFrontend = existsSync(path.join(staticRoot, "index.html"));
  const types = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".webp": "image/webp",
    ".ico": "image/x-icon",
    ".woff2": "font/woff2",
  };
  const server = http.createServer(async (request, response) => {
    response.setHeader("Content-Type", "application/json");
    response.setHeader("Access-Control-Allow-Origin", "*");
    if (request.url === "/health" || (request.url === "/" && !hasFrontend)) {
      response.end(
        JSON.stringify({
          status: "ok",
          game: "Conquer Web",
          players: world.players.length,
          tickRate: 20,
        }),
      );
      return;
    }
    if (hasFrontend && ["GET", "HEAD"].includes(request.method)) {
      let pathname;
      try {
        pathname = decodeURIComponent(
          new URL(request.url, "http://localhost").pathname,
        );
      } catch {
        response.statusCode = 400;
        response.end(JSON.stringify({ error: "Invalid path" }));
        return;
      }
      let filename = path.resolve(
        staticRoot,
        `.${pathname === "/" ? "/index.html" : pathname}`,
      );
      if (
        !filename.startsWith(staticRoot + path.sep) ||
        pathname.includes("\0")
      ) {
        response.statusCode = 403;
        response.end();
        return;
      }
      try {
        let info;
        try {
          info = await stat(filename);
        } catch {
          if (path.extname(pathname)) throw new Error("Missing asset");
          filename = path.join(staticRoot, "index.html");
          info = await stat(filename);
        }
        if (!info.isFile()) throw new Error("Not a file");
        response.setHeader(
          "Content-Type",
          types[path.extname(filename)] || "application/octet-stream",
        );
        response.setHeader("Content-Length", info.size);
        response.setHeader(
          "Cache-Control",
          pathname.startsWith("/assets/")
            ? "public, max-age=31536000, immutable"
            : "no-cache",
        );
        response.setHeader("X-Content-Type-Options", "nosniff");
        if (request.method === "HEAD") response.end();
        else
          createReadStream(filename)
            .on("error", () => response.destroy())
            .pipe(response);
        return;
      } catch {}
    }
    response.statusCode = 404;
    response.end(JSON.stringify({ error: "Not found" }));
  });
  const wss = new WebSocketServer({ server, maxPayload: 4096 });
  const sessions = new Map();
  const send = (ws, payload) => {
    if (ws.readyState === WebSocket.OPEN && ws.bufferedAmount < 512 * 1024)
      ws.send(JSON.stringify(payload));
  };
  wss.on("connection", (ws, request) => {
    if (wss.clients.size > 100) {
      ws.close(1013, "Realm is full");
      return;
    }
    const session = {
      id: null,
      count: 0,
      window: Date.now(),
      chatAt: 0,
      alive: true,
    };
    sessions.set(ws, session);
    ws.on("pong", () => (session.alive = true));
    ws.on("message", (buffer) => {
      const now = Date.now();
      if (now - session.window > 1000) {
        session.window = now;
        session.count = 0;
      }
      if (++session.count > 45) {
        ws.close(1008, "Too many messages");
        return;
      }
      let message;
      try {
        message = JSON.parse(buffer.toString());
      } catch {
        send(ws, { type: "error", message: "Invalid message" });
        return;
      }
      if (!message || typeof message !== "object") return;
      if (message.type === "join") {
        if (session.id) return;
        const id = randomUUID();
        session.id = id;
        addPlayer(world, createPlayer(id, message.name, message.classId));
        send(ws, { type: "welcome", id, state: snapshot(world, id) });
        send(ws, { type: "state", state: snapshot(world, id) });
        return;
      }
      if (!session.id) {
        send(ws, { type: "error", message: "Join the realm first" });
        return;
      }
      if (message.type === "command") {
        const action = message.command ?? message.action ?? message.payload;
        const response = command(world, session.id, action);
        send(ws, { type: "result", result: response, command: action?.type });
        return;
      }
      if (message.type === "chat") {
        if (now - session.chatAt < 1200) return;
        session.chatAt = now;
        const text = String(message.text ?? "")
          .replace(/[<>\x00-\x1f]/g, "")
          .trim()
          .slice(0, 180);
        const player = world.players.find((p) => p.id === session.id);
        if (!text || !player) return;
        world.chat.push({
          id: randomUUID(),
          name: player.name,
          text,
          zone: player.zone,
          time: world.time,
        });
        if (world.chat.length > 60)
          world.chat.splice(0, world.chat.length - 60);
        for (const [client, s] of sessions)
          if (s.id) send(client, { type: "chat", ...world.chat.at(-1) });
        return;
      }
      if (message.type === "ping")
        send(ws, { type: "pong", timestamp: message.timestamp });
    });
    ws.on("close", () => {
      if (session.id)
        world.players = world.players.filter((p) => p.id !== session.id);
      sessions.delete(ws);
    });
    ws.on("error", () => {});
  });
  let last = performance.now();
  const tick = setInterval(() => {
    const now = performance.now();
    updateWorld(world, (now - last) / 1000);
    last = now;
    for (const [ws, session] of sessions)
      if (session.id)
        send(ws, { type: "state", state: snapshot(world, session.id) });
  }, 50);
  const heartbeat = setInterval(() => {
    for (const [ws, s] of sessions) {
      if (!s.alive) {
        ws.terminate();
        continue;
      }
      s.alive = false;
      ws.ping();
    }
  }, 30000);
  return {
    world,
    wss,
    server,
    listen: () =>
      new Promise((resolve) =>
        server.listen(port, host, () => resolve(server.address())),
      ),
    close: () =>
      new Promise((resolve) => {
        clearInterval(tick);
        clearInterval(heartbeat);
        for (const ws of wss.clients) ws.terminate();
        wss.close(() => server.close(resolve));
      }),
  };
}
if (import.meta.url === `file://${process.argv[1]}`) {
  const game = createGameServer();
  const address = await game.listen();
  console.log(
    `Conquer Web authoritative realm listening on ${address.address}:${address.port}`,
  );
  const stop = () => game.close().then(() => process.exit(0));
  process.on("SIGTERM", stop);
  process.on("SIGINT", stop);
}
