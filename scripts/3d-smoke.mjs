import { chromium } from "playwright";
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";

await mkdir("artifacts/3d", { recursive: true });
const browser = await chromium.launch({
  channel: process.env.BROWSER_CHANNEL || undefined,
  headless: process.env.BROWSER_HEADED !== "1",
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const state = () =>
  page.evaluate(() => JSON.parse(window.render_game_to_text()));
const step = (ms) => page.evaluate((ms) => window.advanceTime(ms), ms);
const reports = {};
try {
  await page.goto(process.env.PREVIEW_URL || "http://127.0.0.1:8787");
  await page.locator("#start-btn").waitFor();
  await page.click("#start-btn");
  await step(120);
  reports.idle = await state();
  assert.equal(reports.idle.renderer.engine, "three");
  assert.equal(
    reports.idle.renderer.modelLoaded,
    true,
    "Licensed skinned GLB loads",
  );
  assert.match(reports.idle.renderer.player.animation, /Idle/);
  assert.ok(
    reports.idle.renderer.player.boneRotations.calf_r,
    "Real skeleton is present",
  );
  await page.keyboard.down("ArrowRight");
  await step(160);
  reports.strideA = await state();
  await page.screenshot({ path: "artifacts/3d/run-a.png" });
  await step(160);
  reports.strideB = await state();
  await page.screenshot({ path: "artifacts/3d/run-b.png" });
  await page.keyboard.up("ArrowRight");
  assert.match(reports.strideB.renderer.player.animation, /Walk|Jog|Sprint/);
  assert.notDeepEqual(
    reports.strideA.renderer.player.boneRotations.calf_r.quaternion,
    reports.strideB.renderer.player.boneRotations.calf_r.quaternion,
    "Walking bends the skinned legs across frames",
  );
  assert.ok(
    reports.strideB.player.x > reports.idle.player.x,
    "Animated character actually travels",
  );
  await step(600);
  const box = await page.locator("#game canvas").boundingBox();
  await page.mouse.click(
    box.x + box.width / 2 + 125,
    box.y + box.height * 0.56 + 25,
    { button: "right" },
  );
  await step(170);
  reports.jump = await state();
  assert.ok(reports.jump.player.jump, "Jump is active");
  assert.match(reports.jump.renderer.player.animation, /Jump/);
  assert.ok(
    reports.jump.renderer.player.rootPosition[1] > 0.4,
    "Character rises in real 3D space",
  );
  await page.screenshot({ path: "artifacts/3d/jump.png" });
  await step(1000);
  await page.mouse.move(box.x + box.width * 0.6, box.y + box.height * 0.5);
  await page.click("#skill-btn");
  await step(90);
  reports.attack = await state();
  assert.match(reports.attack.renderer.player.animation, /Sword_Attack|Spell/);
  await page.screenshot({ path: "artifacts/3d/attack.png" });
  await step(800);
  await page.click("#bag-btn");
  await page.screenshot({ path: "artifacts/3d/equipment.png" });
  await page.click("#close-modal");
  await page.click("#travel-btn");
  await step(7000);
  reports.wilds = await state();
  assert.equal(reports.wilds.player.zone, "wilds");
  assert.equal(reports.wilds.renderer.modelLoaded, true);
  await page.screenshot({ path: "artifacts/3d/wilds.png" });
  assert.deepEqual(errors, []);
  await writeFile(
    "artifacts/3d/animation-report.json",
    JSON.stringify(reports, null, 2),
  );
  console.log(
    "PASS: skinned GLB, changing leg poses while moving, airborne 3D jump, attack clip, equipment preview and 3D wilds; no page errors.",
  );
} finally {
  await browser.close();
}
