import { chromium } from "playwright";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
await fs.mkdir("artifacts", { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } }),
  errors = [];
page.on("pageerror", (e) => {
  errors.push(e.message);
  console.log("PAGEERROR", e.message);
});
page.on("crash", () => console.log("PAGE CRASHED"));
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
const state = () =>
  page.evaluate(() => JSON.parse(window.render_game_to_text()));
const advance = async (ms) => {
  await page.evaluate((ms) => window.advanceTime(ms), ms);
  await page.waitForTimeout(150);
};
await page.goto(process.env.PREVIEW_URL || "http://127.0.0.1:5173", {
  waitUntil: "networkidle",
});
await page.waitForFunction(
  () => typeof window.render_game_to_text === "function",
);
await page.screenshot({ path: "artifacts/intro.png" });
await page.fill("#hero-name", "JadeTester");
await page.click("#start-btn");
assert.equal((await state()).mode, "play");
await page.click("#quest-btn");
await page.click("#accept-quest");
assert.equal((await state()).player.quest.accepted, true);
await page.click("#bag-btn");
assert.ok((await page.locator(".item").count()) >= 8);
await page.click("#compose-equipped");
assert.equal(
  (await state()).player.inventory.find((i) => i.slot === "weapon").plus,
  2,
);
await page.click("#close-modal");
const before = (await state()).player;
await page.keyboard.down("ArrowRight");
await advance(750);
await page.keyboard.up("ArrowRight");
await advance(400);
let after = (await state()).player;
assert.ok(after.x > before.x && after.y < before.y, "Screen right movement");
// Jump onto clear courtyard ground; camera baseline at viewport56%.
const box = await page.locator("#game canvas").boundingBox();
const point = { x: box.width / 2 + 120, y: box.y + box.height * 0.56 + 25 };
await page.mouse.click(point.x, point.y, { button: "right" });
await advance(200);
assert.ok((await state()).player.stamina < 100, "Jump consumes stamina");
await advance(900);
await page.click("#travel-btn");
await advance(6500);
assert.equal((await state()).player.zone, "wilds");
await page.screenshot({ path: "artifacts/wilds.png" });
for (let i = 0; i < 5; i++) {
  await page.click("#attack-btn");
  await advance(3000);
  console.log("kill", i, (await state()).player.quest.kills);
  await page.click("#interact-btn");
}
let hunted = await state();
assert.equal(hunted.player.quest.kills, 5, "Five quest creatures killed");
assert.ok(hunted.player.level >= 2, "Combat XP levels up");
await page.mouse.move(box.width / 2 + 110, box.y + box.height * 0.56 - 20);
await page.click("#skill-btn");
await advance(900);
await page.screenshot({ path: "artifacts/combat.png" });
await page.click("#travel-btn");
await advance(7500);
assert.equal((await state()).player.zone, "city");
await page.click("#quest-btn");
await page.click("#claim-quest");
assert.equal((await state()).player.quest.claimed, true);
assert.ok(
  (await state()).player.inventory.find((i) => i.name === "Phoenix ring"),
);
await advance(4500);
const saved = (await state()).player;
await page.reload({ waitUntil: "networkidle" });
await page.waitForFunction(
  () => typeof window.render_game_to_text === "function",
);
await page.click("#start-btn");
const restored = (await state()).player;
assert.equal(restored.quest.claimed, true);
assert.equal(restored.level, saved.level);
assert.equal(restored.nextXp, saved.nextXp);
await page.click("#help-btn");
assert.equal(await page.locator(".control-row").count(), 11);
await page.keyboard.press("Escape");
assert.equal((await state()).modal, false);
await page.screenshot({ path: "artifacts/final-city.png" });
await page.setViewportSize({ width: 390, height: 844 });
await page.waitForTimeout(200);
await page.screenshot({ path: "artifacts/mobile.png" });
assert.equal(
  await page.evaluate(() => document.documentElement.scrollWidth),
  390,
);
assert.deepEqual(errors, []);
console.log(
  "PASS: quest, composition, movement, jump, portal, five kills, loot, skill, reward, save reload, controls and mobile layout.",
);
await browser.close();
