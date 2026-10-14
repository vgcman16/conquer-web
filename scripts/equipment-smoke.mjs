import { chromium } from "playwright";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
await mkdir("artifacts/equipment", { recursive: true });
// Installed Chrome can use the native GPU for the full 3D scene. The default
// remains bundled headless Chromium for environments without an installed browser.
const browser = await chromium.launch({
  ...(process.env.BROWSER_CHANNEL
    ? { channel: process.env.BROWSER_CHANNEL }
    : {}),
  headless: process.env.BROWSER_HEADED !== "1",
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } }),
  errors = [];
page.on("pageerror", (e) => errors.push(e.message));
const state = () =>
  page.evaluate(() => JSON.parse(window.render_game_to_text()));
const preview = () => page.locator("#equipment-preview").getAttribute("src");
const equip = async (item) => {
  await page.locator(`[data-equip="${item.id}"]`).click();
  await page.waitForTimeout(120);
};
try {
  await page.goto(process.env.PREVIEW_URL || "http://127.0.0.1:5173");
  await page.locator("#start-btn").waitFor();
  await page.fill("#hero-name", "Gear Tester");
  await page.click("#start-btn");
  await page.click("#bag-btn");
  const initial = (await state()).player,
    items = initial.inventory;
  assert.equal(await page.locator(".gear-slot").count(), 8);
  let before = await preview();
  assert.ok(
    before.startsWith("data:image/"),
    "Paperdoll uses actual modular renderer preview",
  );
  await page.screenshot({ path: "artifacts/equipment/initial.png" });
  const armor = items.find((i) => i.id === initial.equipment.armor);
  await equip(armor);
  let p = (await state()).player;
  assert.equal(p.equipment.armor, undefined);
  assert.equal(p.equipment.weapon, initial.equipment.weapon);
  assert.equal(p.equipment.boots, initial.equipment.boots);
  let after = await preview();
  assert.notEqual(after, before, "Removing armor changes visible preview");
  await page.screenshot({ path: "artifacts/equipment/no-armor.png" });
  const newArmor = items.find((i) => i.slot === "armor" && i.id !== armor.id);
  await equip(newArmor);
  assert.notEqual(await preview(), after);
  assert.equal((await state()).player.equipment.armor, newArmor.id);
  const helm = items.find((i) => i.slot === "helmet"),
    cape = items.find((i) => i.slot === "garment"),
    offhand = items.find((i) => i.slot === "offhand"),
    necklace = items.find((i) => i.slot === "necklace");
  for (const item of [helm, cape, offhand, necklace]) {
    const prior = await preview();
    await equip(item);
    assert.equal((await state()).player.equipment[item.slot], item.id);
    assert.notEqual(
      await preview(),
      prior,
      `Visible ${item.slot} layer changes`,
    );
  }
  const equippedState = (await state()).player;
  await page.screenshot({ path: "artifacts/equipment/fully-equipped.png" });
  const altWeapon = items.find(
    (i) => i.slot === "weapon" && i.id !== initial.equipment.weapon,
  );
  before = await preview();
  await equip(altWeapon);
  assert.notEqual(await preview(), before);
  assert.equal((await state()).player.equipment.garment, cape.id);
  const boots = items.find((i) => i.id === initial.equipment.boots);
  await equip(boots);
  assert.equal((await state()).player.equipment.boots, undefined);
  await page.locator('[data-slot="helmet"]').click();
  await page.click("#unequip-slot");
  assert.equal((await state()).player.equipment.helmet, undefined);
  assert.equal((await state()).player.equipment.weapon, altWeapon.id);
  await page.click("#close-modal");
  await page.waitForTimeout(200);
  await page.screenshot({ path: "artifacts/equipment/world-outfit.png" });
  await page.click("#bag-btn");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(150);
  await page.screenshot({ path: "artifacts/equipment/mobile.png" });
  assert.equal(
    await page.evaluate(() => document.documentElement.scrollWidth),
    390,
  );
  await page.keyboard.press("Escape");
  await page.waitForTimeout(4200);
  await page.reload();
  await page.locator("#start-btn").waitFor();
  await page.click("#start-btn");
  p = (await state()).player;
  assert.equal(p.equipment.weapon, altWeapon.id);
  assert.equal(p.equipment.garment, cape.id);
  assert.equal(p.equipment.armor, newArmor.id);
  assert.equal(p.equipment.helmet, undefined);
  assert.equal(p.equipment.boots, undefined);
  assert.deepEqual(errors, []);
  console.log(
    "PASS: eight slots, independent remove/equip, armor/weapon/cape/helmet/offhand/necklace preview changes, world appearance, mobile panel and persistence.",
  );
} finally {
  await browser.close();
}
