import { chromium } from "playwright";
import assert from "node:assert/strict";
import path from "node:path";
import { mkdir, writeFile } from "node:fs/promises";

const base = process.env.PREVIEW_URL || "http://127.0.0.1:5173";
const realm = process.env.REALM_URL || "ws://127.0.0.1:8787";
const output = path.resolve("artifacts");
await mkdir(output, { recursive: true });
const browser = await chromium.launch({
  channel: process.env.BROWSER_CHANNEL || undefined,
  headless: process.env.BROWSER_HEADED !== "1",
});
const errors = [],
  reports = [],
  issues = [];
const report = (text) => {
  reports.push(text);
  console.log(text);
};
let contextA, contextB;
function monitor(page, label) {
  const seen = { state: null, sent: [], received: [] };
  page.on("pageerror", (error) =>
    errors.push({ label, message: error.message }),
  );
  page.on("websocket", (ws) => {
    ws.on("framesent", (frame) => {
      try {
        seen.sent.push(JSON.parse(String(frame.payload)));
      } catch {}
    });
    ws.on("framereceived", (frame) => {
      try {
        const message = JSON.parse(String(frame.payload));
        seen.received.push(message);
        if (message.type === "state" || message.type === "welcome")
          seen.state = message.state;
      } catch {}
    });
  });
  return seen;
}
const gameState = (page) =>
  page.evaluate(() => JSON.parse(window.render_game_to_text()));
async function eventually(check, label, milliseconds = 6000) {
  const deadline = Date.now() + milliseconds;
  while (Date.now() < deadline) {
    if (await check()) return;
    await new Promise((r) => setTimeout(r, 80));
  }
  throw new Error(`Timed out: ${label}`);
}
async function start(page, name, classId = "trojan") {
  await page.goto(base);
  await page.locator("#start-btn").waitFor({ state: "visible" });
  if (classId !== "trojan")
    await page.locator(`[data-class="${classId}"]`).click();
  await page.locator("#hero-name").fill(name);
  await page.locator("#start-btn").click();
  await eventually(
    async () => (await gameState(page)).mode === "play",
    `${name} started`,
  );
}
async function connect(page) {
  await page.locator("#connect-btn").click();
  await page.locator("#server-url").fill(realm);
  await page.locator("#join-server").click();
  await eventually(
    async () => (await gameState(page)).connection === "websocket",
    "shared realm joined",
  );
  await page.locator("#modal").waitFor({ state: "hidden" });
}
async function closeModal(page) {
  if (await page.locator("#close-modal").isVisible())
    await page.locator("#close-modal").click();
}
async function aimLogical(
  page,
  x,
  y,
  { click = false, button = "left", entity = false } = {},
) {
  const state = await gameState(page);
  const canvas = await page.locator("#game canvas").boundingBox();
  assert.ok(canvas);
  const p = state.renderer.projection;
  assert.ok(p, "Renderer reports its actual camera projection");
  const screen = {
    x:
      canvas.x +
      p.origin.x +
      x * (p.x.x - p.origin.x) +
      y * (p.y.x - p.origin.x),
    y:
      canvas.y +
      p.origin.y +
      x * (p.x.y - p.origin.y) +
      y * (p.y.y - p.origin.y) +
      (entity ? 1.4 * (p.elevation.y - p.origin.y) : 0),
  };
  assert.ok(
    screen.x >= canvas.x &&
      screen.x <= canvas.x + canvas.width &&
      screen.y >= canvas.y &&
      screen.y <= canvas.y + canvas.height,
    `Logical (${x},${y}) is visible from (${state.player.x},${state.player.y}): ${JSON.stringify(screen)}`,
  );
  await page.mouse.move(screen.x, screen.y);
  if (click) await page.mouse.click(screen.x, screen.y, { button });
  return screen;
}
async function jumpLogical(page, x, y) {
  await new Promise((r) => setTimeout(r, 500));
  await aimLogical(page, x, y, { click: true, button: "right" });
  await eventually(
    async () => {
      const p = (await gameState(page)).player;
      return !p.jump && Math.hypot(p.x - x, p.y - y) < 0.8;
    },
    `jump to ${x},${y}`,
    6000,
  );
  await new Promise((r) => setTimeout(r, 500));
}
async function walkLogical(page, x, y) {
  await new Promise((r) => setTimeout(r, 500));
  await aimLogical(page, x, y, { click: true });
  await eventually(
    async () => {
      const p = (await gameState(page)).player;
      return Math.hypot(p.x - x, p.y - y) < 0.8;
    },
    `walk to ${x},${y}`,
    10000,
  );
  await new Promise((r) => setTimeout(r, 500));
}
try {
  contextA = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  contextB = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  const a = await contextA.newPage(),
    b = await contextB.newPage();
  const observedA = monitor(a, "Alpha"),
    observedB = monitor(b, "Beta");
  await start(a, "Smoke Alpha");
  await start(b, "Smoke Beta", "archer");
  await connect(a);
  await connect(b);
  await eventually(
    () =>
      observedA.state?.players.length === 2 &&
      observedB.state?.players.length === 2,
    "both clients see two players",
  );
  assert.deepEqual(
    new Set(observedA.state.players.map((p) => p.name)),
    new Set(["Smoke Alpha", "Smoke Beta"]),
  );
  report(
    "Two clean browser contexts start distinct heroes and see both players in the shared realm.",
  );
  await a.locator("#chat-text").fill("Multiplayer smoke: hello from Alpha");
  await a.locator("#chat-text").press("Enter");
  await eventually(
    async () =>
      (await b.locator("#chat-log").innerText()).includes("hello from Alpha"),
    "cross-client chat",
  );
  report("Realm chat arrives in the other browser context.");
  await a.locator("#quest-btn").click();
  await a
    .locator("#accept-quest")
    .waitFor({ state: "visible", timeout: 10000 });
  await a.locator("#accept-quest").click();
  await eventually(
    async () => (await gameState(a)).player.quest.accepted,
    "authoritative quest accepted",
  );
  assert.match(
    await a.locator("#quest-title").innerText(),
    /Trouble in the fields/,
  );
  assert.equal((await gameState(b)).player.quest.accepted, false);
  report(
    "NPC quest acceptance updates Alpha through authoritative state while Beta keeps its own quest.",
  );
  await a.locator("#bag-btn").click();
  const armor = a.locator(".item").filter({ hasText: "Traveler armor" });
  await armor.locator("button").click();
  await eventually(
    async () => !(await gameState(a)).player.equipment.armor,
    "armor unequipped server-side",
  );
  try {
    await eventually(
      async () => (await armor.locator("button").innerText()) === "Equip",
      "inventory shows authoritative unequip",
    );
  } catch (error) {
    issues.push(error.message);
    await a.screenshot({
      path: path.join(output, "multiplayer-stale-inventory.png"),
    });
  }
  await armor.locator("button").click();
  await eventually(
    async () => !!(await gameState(a)).player.equipment.armor,
    "armor re-equipped server-side",
  );
  await eventually(
    async () => (await armor.locator("button").innerText()) === "Equipped",
    "inventory shows authoritative equip",
  );
  await a.screenshot({ path: path.join(output, "multiplayer-inventory.png") });
  await closeModal(a);
  report(
    "Inventory equip and unequip labels refresh after online acknowledgements.",
  );
  await a.screenshot({ path: path.join(output, "multiplayer-city.png") });
  await b.screenshot({
    path: path.join(output, "multiplayer-second-client.png"),
  });
  const before = (await gameState(a)).selfId;
  await a.locator("#travel-btn").click();
  await eventually(
    async () => (await gameState(a)).player.path.length > 0,
    "movement active before reconnect",
  );
  await connect(a);
  await eventually(
    () =>
      observedA.state?.players.length === 2 &&
      observedB.state?.players.length === 2,
    "two players after reconnect",
  );
  assert.notEqual((await gameState(a)).selfId, before);
  assert.equal((await gameState(a)).player.name, "Smoke Alpha");
  assert.equal((await gameState(a)).connection, "websocket");
  report(
    "Reconnecting during movement creates a fresh guest session without stale close/state handlers disrupting the new connection.",
  );
  // The gate uses only a UI button, then movement uses visible canvas clicks.
  await a.locator("#travel-btn").click();
  await eventually(
    async () => (await gameState(a)).player.zone === "wilds",
    "UI travel reaches hunting grounds",
    10000,
  );
  await a.screenshot({ path: path.join(output, "multiplayer-wilds.png") });
  // Follow visible waypoints to the guardian and wait for a natural combat death.
  for (const point of [
    [19, 28],
    [24, 33],
    [30, 36],
    [37, 40],
  ])
    await jumpLogical(a, ...point);
  await eventually(
    async () => (await gameState(a)).player.hp === 0,
    "natural death to hostile monsters",
    45000,
  );
  await a.locator("#respawn-btn").waitFor({ state: "visible" });
  await a.screenshot({ path: path.join(output, "multiplayer-defeated.png") });
  await a.locator("#respawn-btn").click();
  await eventually(
    async () => {
      const s = await gameState(a);
      return (
        s.mode === "play" &&
        s.player.zone === "city" &&
        s.player.hp > 0 &&
        !s.modal
      );
    },
    "authoritative respawn completes",
    10000,
  );
  await a.screenshot({ path: path.join(output, "multiplayer-respawn.png") });
  report(
    "Natural hostile combat opens the defeat modal; online respawn waits for living city state and then closes it.",
  );
  assert.deepEqual(errors, []);
  const summary = {
    ok: issues.length === 0,
    issues,
    base,
    realm,
    reports,
    pageErrors: errors,
    screenshots: [
      "multiplayer-city.png",
      "multiplayer-second-client.png",
      "multiplayer-inventory.png",
      "multiplayer-wilds.png",
      "multiplayer-defeated.png",
      "multiplayer-respawn.png",
    ],
  };
  await writeFile(
    path.join(output, "multiplayer-smoke.json"),
    JSON.stringify(summary, null, 2),
  );
  console.log(JSON.stringify(summary, null, 2));
  if (issues.length) process.exitCode = 1;
} catch (error) {
  for (const [context, label] of [
    [contextA, "alpha"],
    [contextB, "beta"],
  ]) {
    const page = context?.pages()[0];
    if (page)
      await page
        .screenshot({
          path: path.join(output, `multiplayer-failure-${label}.png`),
        })
        .catch(() => {});
  }
  const states = [];
  for (const context of [contextA, contextB]) {
    const page = context?.pages()[0];
    if (page) states.push(await gameState(page).catch(() => null));
  }
  const summary = {
    ok: false,
    base,
    realm,
    reports,
    issues,
    pageErrors: errors,
    error: error.message,
    states,
  };
  await writeFile(
    path.join(output, "multiplayer-smoke.json"),
    JSON.stringify(summary, null, 2),
  );
  console.error(JSON.stringify(summary, null, 2));
  process.exitCode = 1;
} finally {
  await contextA?.close();
  await contextB?.close();
  await browser.close();
}
