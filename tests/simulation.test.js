import test from "node:test";
import assert from "node:assert/strict";
import {
  createWorld,
  createPlayer,
  hydratePlayer,
  addPlayer,
  updateWorld,
  command,
  snapshot,
  findPath,
  canJump,
  isWalkable,
  zoneDefs,
  CLASSES,
} from "../shared/world.js";

function setup(classId = "trojan") {
  const world = createWorld();
  const player = createPlayer("test-player", "Test", classId);
  addPlayer(world, player);
  return { world, player };
}
function advance(world, seconds) {
  for (let i = 0; i < Math.ceil(seconds * 20); i++) updateWorld(world, 0.05);
}

test("all five class choices initialize distinct ranges and supplied names are bounded", () => {
  assert.equal(CLASSES.length, 5);
  for (const c of CLASSES) {
    const p = createPlayer(c.id, "<>Hero\x00", c.id);
    assert.equal(p.name, "Hero");
    assert.equal(p.classId, c.id);
    assert.ok(p.range >= 2);
  }
  assert.equal(createPlayer("p", "bad", "unknown").classId, "trojan");
});
test("A* routes around buildings without diagonal corner cutting", () => {
  const path = findPath("city", { x: 10, y: 15 }, { x: 20, y: 15 });
  assert.ok(path.length > 10);
  let previous = { x: 10, y: 15 };
  for (const point of path) {
    assert.ok(isWalkable("city", point.x, point.y));
    const dx = point.x - previous.x,
      dy = point.y - previous.y;
    assert.ok(Math.abs(dx) <= 1 && Math.abs(dy) <= 1);
    if (dx && dy) {
      assert.ok(isWalkable("city", previous.x + dx, previous.y));
      assert.ok(isWalkable("city", previous.x, previous.y + dy));
    }
    previous = point;
  }
  assert.deepEqual(previous, { x: 20, y: 15 });
});
test("server rejects invalid and obstructed movement and finite-coordinate exploits", () => {
  const { world, player } = setup();
  for (const point of [
    { x: 500, y: 0 },
    { x: 14, y: 15 },
    { x: NaN, y: 24 },
    { x: Infinity, y: 24 },
  ])
    assert.equal(
      command(world, player.id, { type: "move", ...point }).ok,
      false,
    );
  assert.equal(
    command(world, player.id, { type: "move", x: 26, y: 24 }).ok,
    true,
  );
  advance(world, 1);
  assert.equal(player.x, 26);
  assert.equal(player.y, 24);
});
test("jumps use stamina, finish at a legal destination, and cannot cross tall covers", () => {
  const { world, player } = setup();
  assert.equal(
    command(world, player.id, { type: "jump", x: 30, y: 24 }).ok,
    true,
  );
  assert.equal(player.stamina, 90);
  advance(world, 1);
  assert.equal(player.jump, null);
  assert.equal(player.x, 30);
  assert.equal(player.y, 24);
  assert.equal(canJump("city", { x: 10, y: 15 }, { x: 20, y: 15 }), false);
  assert.equal(canJump("wilds", { x: 19, y: 30 }, { x: 25, y: 30 }), true);
  assert.equal(canJump("wilds", { x: 14, y: 12 }, { x: 17, y: 15 }), false);
  assert.equal(
    command(world, player.id, { type: "jump", x: 47, y: 24 }).ok,
    false,
  );
  player.stamina = 0;
  assert.equal(
    command(world, player.id, { type: "jump", x: 31, y: 24 }).ok,
    false,
  );
});
test("portal traversal is authoritative and landing at the portal changes zones", () => {
  const { world, player } = setup();
  assert.equal(command(world, player.id, { type: "portal" }).ok, false);
  assert.equal(
    command(world, player.id, { type: "move", x: 34, y: 24 }).ok,
    true,
  );
  advance(world, 2);
  assert.equal(player.zone, "wilds");
  assert.equal(player.x, zoneDefs.wilds.spawn.x);
  assert.equal(snapshot(world, player.id).npcs[0].id, "scout");
});
test("basic attacks obey range and cooldown, kill creatures, and grant XP and loot", () => {
  const { world, player } = setup();
  player.zone = "wilds";
  player.x = 16;
  player.y = 23;
  const enemy = world.enemies[0];
  command(world, player.id, { type: "attack", targetId: enemy.id });
  const health = enemy.hp;
  assert.ok(health < enemy.maxHp);
  command(world, player.id, { type: "attack", targetId: enemy.id });
  assert.equal(enemy.hp, health);
  advance(world, 1);
  assert.equal(enemy.hp, 0);
  assert.ok(player.xp > 0);
  assert.ok(world.drops.some((d) => d.gold));
  advance(world, 12);
  assert.equal(enemy.hp, enemy.maxHp);
});
test("directional skill hits targets in its line and excludes off-axis targets", () => {
  const { world, player } = setup();
  player.zone = "wilds";
  player.x = 12;
  player.y = 24;
  const [inLine, offLine] = world.enemies;
  inLine.x = 18;
  inLine.y = 24;
  offLine.x = 18;
  offLine.y = 29;
  const offHp = offLine.hp;
  assert.equal(
    command(world, player.id, { type: "skill", x: 24, y: 24 }).ok,
    true,
  );
  assert.equal(inLine.hp, 0);
  assert.equal(offLine.hp, offHp);
  assert.equal(player.stamina, 85);
  assert.equal(
    command(world, player.id, { type: "skill", x: 24, y: 24 }).ok,
    false,
  );
});
test("magic and support skills consume mana and enforce cooldowns", () => {
  const { world, player } = setup("water");
  player.hp = 100;
  assert.equal(
    command(world, player.id, { type: "skill", x: 24, y: 24 }).ok,
    true,
  );
  assert.equal(player.hp, 185);
  assert.equal(player.shield, 100);
  assert.equal(player.mana, 80);
  assert.equal(command(world, player.id, { type: "skill" }).ok, false);
});
test("quest reward and composition are single-use validated transactions", () => {
  const { world, player } = setup();
  player.x = 22;
  player.y = 21;
  assert.equal(command(world, player.id, { type: "quest_accept" }).ok, true);
  assert.equal(command(world, player.id, { type: "quest_claim" }).ok, false);
  player.quest.kills = 5;
  assert.equal(command(world, player.id, { type: "quest_claim" }).ok, true);
  assert.equal(command(world, player.id, { type: "quest_claim" }).ok, false);
  assert.ok(player.equipment.ring);
  player.x = 29;
  player.y = 21;
  const weapon = player.inventory.find((i) => i.slot === "weapon");
  const gold = player.gold;
  assert.equal(
    command(world, player.id, { type: "compose", itemId: weapon.id }).ok,
    true,
  );
  assert.equal(weapon.plus, 2);
  assert.equal(player.gold, gold - 25);
  assert.equal(
    command(world, player.id, { type: "compose", itemId: weapon.id }).ok,
    false,
  );
});
test("loot requires proximity, potions restore bounded resources, snapshots cannot mutate simulation", () => {
  const { world, player } = setup();
  world.drops.push({
    id: "coin",
    zone: "city",
    x: 30,
    y: 30,
    gold: 10,
    expiresAt: 100,
  });
  assert.equal(
    command(world, player.id, { type: "pickup", dropId: "coin" }).ok,
    false,
  );
  player.x = 30;
  player.y = 30;
  assert.equal(
    command(world, player.id, { type: "pickup", dropId: "coin" }).ok,
    true,
  );
  assert.equal(player.gold, 135);
  player.hp = 290;
  player.mana = 99;
  const potion = player.inventory.find((i) => i.icon === "potion");
  assert.equal(command(world, player.id, { type: "potion" }).ok, true);
  assert.equal(player.hp, 300);
  assert.equal(player.mana, 100);
  assert.equal(potion.qty, 4);
  const snap = snapshot(world, player.id);
  snap.players[0].gold = 999999;
  assert.equal(player.gold, 135);
});

test("living players recover health in peaceful city while fallen players need respawn", () => {
  const { world, player } = setup();
  player.hp = 100;
  advance(world, 1);
  assert.ok(Math.abs(player.hp - 108) < 0.001);
  player.zone = "wilds";
  advance(world, 1);
  assert.ok(Math.abs(player.hp - 108) < 0.001);
  player.hp = 0;
  player.zone = "city";
  advance(world, 1);
  assert.equal(player.hp, 0);
  assert.equal(command(world, player.id, { type: "respawn" }).ok, true);
  assert.equal(player.hp, player.maxHp);
});

test("save hydration retains progress and never restores unsafe positions or extra authority fields", () => {
  const original = createPlayer("old", "Save", "archer");
  original.gold = 777;
  original.level = 5;
  original.zone = "wilds";
  original.x = -999;
  original.attack = 999999;
  const restored = hydratePlayer(original, "new");
  assert.equal(restored.id, "new");
  assert.equal(restored.gold, 777);
  assert.equal(restored.zone, "city");
  assert.equal(restored.x, 24);
  assert.equal(restored.attack, undefined);
});

test("WebSocket realm validates joins, synchronizes two players, and answers health", async () => {
  const { createGameServer } = await import("../server/index.js");
  const { default: WebSocket } = await import("ws");
  const game = createGameServer({ port: 0, host: "127.0.0.1" });
  const address = await game.listen();
  const connect = () =>
    new Promise((resolve, reject) => {
      const ws = new WebSocket(`ws://127.0.0.1:${address.port}`);
      ws.once("open", () => resolve(ws));
      ws.once("error", reject);
    });
  const next = (ws, type) =>
    new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        ws.off("message", listen);
        reject(new Error(`Timed out waiting for ${type}`));
      }, 2000);
      function listen(data) {
        const msg = JSON.parse(String(data));
        if (msg.type === type) {
          clearTimeout(timer);
          ws.off("message", listen);
          resolve(msg);
        }
      }
      ws.on("message", listen);
    });
  try {
    const a = await connect(),
      b = await connect();
    const aWelcome = next(a, "welcome");
    a.send(JSON.stringify({ type: "join", name: "Alpha", classId: "trojan" }));
    const joined = await aWelcome;
    const bWelcome = next(b, "welcome");
    b.send(JSON.stringify({ type: "join", name: "Beta", classId: "archer" }));
    await bWelcome;
    const state = await next(a, "state");
    assert.equal(state.state.players.length, 2);
    assert.equal(state.state.selfId, joined.id);
    const ack = next(a, "result");
    a.send(
      JSON.stringify({
        type: "command",
        command: { type: "move", x: 500, y: 0 },
      }),
    );
    assert.equal((await ack).result.ok, false);
    const chat = next(b, "chat");
    a.send(JSON.stringify({ type: "chat", text: "Hello realm" }));
    assert.equal((await chat).text, "Hello realm");
    const health = await fetch(`http://127.0.0.1:${address.port}/health`).then(
      (r) => r.json(),
    );
    assert.equal(health.players, 2);
    assert.equal(health.tickRate, 20);
    a.close();
    b.close();
  } finally {
    await game.close();
  }
});

test("single-container HTTP serves frontend assets and blocks traversal outside the build directory", async () => {
  const { mkdtemp, mkdir, writeFile, rm } = await import("node:fs/promises");
  const { tmpdir } = await import("node:os");
  const { default: path } = await import("node:path");
  const { createGameServer } = await import("../server/index.js");
  const directory = await mkdtemp(path.join(tmpdir(), "conquer-http-"));
  const staticDir = path.join(directory, "dist");
  await mkdir(path.join(staticDir, "assets"), { recursive: true });
  await writeFile(
    path.join(staticDir, "index.html"),
    "<html><body>Realm fixture</body></html>",
  );
  await writeFile(
    path.join(staticDir, "assets", "fixture.js"),
    "export const realm = true;",
  );
  await writeFile(path.join(directory, "private.txt"), "not public");
  const game = createGameServer({ port: 0, host: "127.0.0.1", staticDir });
  const address = await game.listen();
  const base = `http://127.0.0.1:${address.port}`;
  try {
    const home = await fetch(`${base}/`);
    assert.equal(home.status, 200);
    assert.match(await home.text(), /Realm fixture/);
    const asset = await fetch(`${base}/assets/fixture.js`);
    assert.match(asset.headers.get("content-type"), /javascript/);
    assert.equal(asset.headers.get("x-content-type-options"), "nosniff");
    assert.equal((await fetch(`${base}/missing.js`)).status, 404);
    assert.equal((await fetch(`${base}/..%2fprivate.txt`)).status, 403);
    assert.equal((await fetch(`${base}/journey`)).status, 200);
  } finally {
    await game.close();
    await rm(directory, { recursive: true, force: true });
  }
});
