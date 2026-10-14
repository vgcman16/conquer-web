import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { clone as cloneSkeleton } from "three/addons/utils/SkeletonUtils.js";
import { zoneDefs } from "../shared/world.js";
import { createEnvironment } from "./world3d.js";

const TAU = Math.PI * 2;
const clamp = THREE.MathUtils.clamp;
const list = (value) =>
  Array.isArray(value) ? value : Object.values(value || {});
const color = (value) => new THREE.Color(value || "#8aa69a");
const BASE = {
  trojan: "#477c71",
  warrior: "#536d7b",
  archer: "#657750",
  fire: "#994c3e",
  water: "#588392",
};
let avatarTemplate = null;
let avatarAnimations = [];
const geometryCache = new Map();
const geo = (key, fn) => {
  if (!geometryCache.has(key)) geometryCache.set(key, fn());
  return geometryCache.get(key);
};
const sphere = geo("sphere", () => new THREE.SphereGeometry(1, 18, 14));
const box = geo("box", () => new THREE.BoxGeometry(1, 1, 1));
const cylinder = geo("cylinder", () => new THREE.CylinderGeometry(1, 1, 1, 16));
function material(c, metalness = 0, roughness = 0.8, extra = {}) {
  return new THREE.MeshStandardMaterial({
    color: c,
    metalness,
    roughness,
    ...extra,
  });
}
function mesh(
  parent,
  geometry,
  mat,
  x = 0,
  y = 0,
  z = 0,
  sx = 1,
  sy = 1,
  sz = 1,
) {
  const m = new THREE.Mesh(geometry, mat);
  m.position.set(x, y, z);
  m.scale.set(sx, sy, sz);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}
function group(parent, x = 0, y = 0, z = 0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}
function ellipsoid(parent, mat, x, y, z, sx, sy, sz) {
  return mesh(parent, sphere, mat, x, y, z, sx, sy, sz);
}
function rod(parent, mat, a, b, radius = 0.03) {
  const va = new THREE.Vector3(...a),
    vb = new THREE.Vector3(...b),
    d = vb.clone().sub(va);
  const m = mesh(
    parent,
    cylinder,
    mat,
    ...va.clone().add(vb).multiplyScalar(0.5).toArray(),
    radius,
    d.length(),
    radius,
  );
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  return m;
}
function lathe(points, sides = 20) {
  return new THREE.LatheGeometry(
    points.map((p) => new THREE.Vector2(...p)),
    sides,
  );
}
function clothPanel(width, height, taper = 0.82) {
  const s = new THREE.Shape();
  s.moveTo(-width * 0.5, 0);
  s.lineTo(width * 0.5, 0);
  s.lineTo(width * taper * 0.5, -height);
  s.quadraticCurveTo(0, -height - 0.1, -width * taper * 0.5, -height);
  s.closePath();
  return new THREE.ExtrudeGeometry(s, {
    depth: 0.025,
    bevelEnabled: true,
    bevelSegments: 1,
    steps: 1,
    bevelSize: 0.015,
    bevelThickness: 0.015,
  });
}
function equipment(player, slot) {
  const id = player.equipment?.[slot];
  return list(player.inventory).find((i) => i.id === id && i.slot === slot);
}
function appearance(player, slot) {
  return equipment(player, slot)?.appearance;
}
function wardrobeKey(player) {
  return JSON.stringify([
    player.classId,
    player.equipment,
    list(player.inventory)
      .filter((i) => Object.values(player.equipment || {}).includes(i.id))
      .map((i) => [i.id, i.appearance, i.plus]),
  ]);
}
function disposeObject(object, geometries = false) {
  object.traverse((o) => {
    if (o.isMesh) {
      if (geometries && ![...geometryCache.values()].includes(o.geometry))
        o.geometry?.dispose();
      for (const m of Array.isArray(o.material) ? o.material : [o.material])
        m?.dispose();
    }
  });
  object.removeFromParent();
}

function makeBlade(parent, descriptor = {}, shorter = false) {
  const g = group(parent),
    steel = material(descriptor.color || "#c4d2cf", 0.8, 0.27),
    gold = material(descriptor.trim || "#a4864c", 0.72, 0.36),
    leather = material("#3b3026");
  const bladeLength = shorter
    ? 0.68
    : descriptor.type === "cleaver"
      ? 1.15
      : 1.3;
  const width = shorter ? 0.1 : descriptor.type === "cleaver" ? 0.22 : 0.12;
  const shape = new THREE.Shape();
  shape.moveTo(-width * 0.5, 0.14);
  shape.lineTo(width * 0.52, 0.14);
  shape.lineTo(width * 0.65, bladeLength * 0.77);
  shape.lineTo(descriptor.type === "saber" ? width * 0.85 : 0, bladeLength);
  shape.lineTo(-width * 0.48, bladeLength * 0.86);
  shape.closePath();
  const bladeGeo = new THREE.ExtrudeGeometry(shape, {
    depth: 0.035,
    bevelEnabled: true,
    bevelSize: 0.016,
    bevelThickness: 0.012,
    bevelSegments: 1,
  });
  mesh(g, bladeGeo, steel, 0, 0, -0.017);
  rod(g, gold, [-0.24, 0.1, 0], [0.24, 0.1, 0], 0.035);
  rod(g, leather, [0, -0.2, 0], [0, 0.08, 0], 0.042);
  for (let i = 0; i < 5; i++) {
    const wrap = mesh(
      g,
      new THREE.TorusGeometry(0.043, 0.007, 4, 12),
      gold,
      0,
      -0.18 + i * 0.046,
    );
    wrap.rotation.x = Math.PI * 0.5;
  }
  ellipsoid(g, gold, 0, -0.22, 0, 0.062, 0.055, 0.055);
  if (descriptor.glow) {
    const gem = material(descriptor.glow, 0.35, 0.2, {
      emissive: descriptor.glow,
      emissiveIntensity: 0.75,
    });
    ellipsoid(g, gem, 0, 0.1, 0.055, 0.045, 0.065, 0.025);
  }
  return g;
}
function makeWeapon(parent, descriptor = {}) {
  if (["sword", "dagger"].includes(descriptor.model || "sword"))
    return makeBlade(parent, descriptor, descriptor.model === "dagger");
  const g = group(parent),
    wood = material(descriptor.color || "#745239", 0.13, 0.6),
    gold = material(descriptor.trim || "#c6a76a", 0.65, 0.3),
    steel = material("#b8c4bd", 0.8, 0.28);
  if (descriptor.model === "bow") {
    const pts = [
      new THREE.Vector3(0, -0.8, 0.04),
      new THREE.Vector3(0.26, -0.5, 0),
      new THREE.Vector3(0.13, 0, 0),
      new THREE.Vector3(0.26, 0.5, 0),
      new THREE.Vector3(0, 0.8, 0.04),
    ];
    mesh(
      g,
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(pts),
        36,
        0.033,
        8,
        false,
      ),
      wood,
    );
    rod(g, material("#b9b19b"), [0, -0.8, 0.04], [0, 0.8, 0.04], 0.009);
    rod(g, gold, [0.13, -0.13, 0], [0.13, 0.13, 0], 0.044);
    g.rotation.z = -0.18;
  } else {
    const long = ["glaive", "spear"].includes(descriptor.model);
    rod(g, wood, [0, -0.72, 0], [0, long ? 1.38 : 1.05, 0], 0.035);
    for (const y of [-0.67, -0.28, 0.25, long ? 1.28 : 0.92])
      rod(g, gold, [0, y, 0], [0, y + 0.07, 0], 0.05);
    if (long) {
      const blade = makeBlade(g, descriptor, true);
      blade.position.y = 1.31;
      if (descriptor.model === "glaive") {
        const blade2 = makeBlade(g, descriptor, true);
        blade2.position.set(0.12, 1.2, 0);
        blade2.rotation.z = -0.6;
        blade2.scale.set(0.8, 0.7, 0.8);
      }
    } else {
      const glow = descriptor.glow || descriptor.trim || "#8bbfaa";
      const jewel = material(glow, 0.25, 0.17, {
        emissive: glow,
        emissiveIntensity: 0.75,
      });
      const y = descriptor.model === "wand" ? 0.65 : 1.14;
      rod(g, gold, [-0.17, y - 0.1, 0], [0, y + 0.29, 0], 0.023);
      rod(g, gold, [0.17, y - 0.1, 0], [0, y + 0.29, 0], 0.023);
      mesh(
        g,
        new THREE.OctahedronGeometry(0.15),
        jewel,
        0,
        y + 0.12,
        0,
        0.7,
        1.4,
        0.7,
      );
      if (descriptor.model === "wand") g.scale.y = 0.65;
    }
  }
  return g;
}

/** An articulated, adult-proportioned adventurer. Every visible item is a separate mesh attached to a joint. */
function makeProceduralHumanoid(player = {}, kind = "player") {
  const root = new THREE.Group(),
    body = group(root),
    hips = group(body, 0, 1.25),
    torso = group(hips, 0, 0.16),
    neck = group(torso, 0, 0.81),
    head = group(neck, 0, 0.21);
  const npc = kind === "npc",
    bandit = player.type === "bandit",
    armor = appearance(player, "armor"),
    classColor =
      armor?.color ||
      (npc
        ? player.role === "shop"
          ? "#847761"
          : "#365d68"
        : bandit
          ? "#6a4338"
          : BASE[player.classId] || "#55796d");
  const trimColor = armor?.trim || "#bda16a",
    heavy = armor?.model === "heavy-armor";
  const skin = material("#bd9474", 0, 0.85),
    skinLight = material("#c9a182", 0, 0.83),
    hair = material("#231f1a", 0, 0.91),
    cloth = material(classColor, 0.04, 0.88),
    darkCloth = material(color(classColor).multiplyScalar(0.62), 0.02, 0.9),
    metal = material(trimColor, 0.62, 0.39),
    plate = material(classColor, heavy ? 0.55 : 0.24, heavy ? 0.4 : 0.63),
    leather = material("#453c30", 0, 0.84),
    black = material("#292723");
  // Tailored coat, narrow waist, overlapping lapels and lamellar plates.
  mesh(
    torso,
    lathe([
      [0.27, -0.18],
      [0.31, 0],
      [0.38, 0.38],
      [0.42, 0.57],
      [0.28, 0.68],
    ]),
    cloth,
    0,
    0,
    0,
    1,
    1,
    0.65,
  );
  ellipsoid(torso, cloth, 0, 0.4, 0, 0.43, 0.29, 0.25);
  const chest = mesh(
    torso,
    lathe([
      [0.31, 0.03],
      [0.36, 0.3],
      [0.4, 0.49],
      [0.32, 0.56],
    ]),
    plate,
    0,
    0,
    0,
    1,
    1,
    0.75,
  );
  const lapel1 = rod(
      torso,
      metal,
      [-0.25, 0.57, 0.21],
      [0.1, 0.1, 0.28],
      0.032,
    ),
    lapel2 = rod(
      torso,
      darkCloth,
      [0.24, 0.57, 0.21],
      [-0.12, 0.06, 0.28],
      0.051,
    );
  lapel1.scale.z = 0.55;
  lapel2.scale.z = 0.55;
  for (let row = 0; row < 4; row++)
    for (let col = 0; col < 6; col++) {
      const angle = (col / 5 - 0.5) * 2.3;
      const p = mesh(
        torso,
        box,
        row % 2 ? plate : darkCloth,
        Math.sin(angle) * 0.34,
        0.39 - row * 0.11,
        Math.cos(angle) * 0.27,
        0.105,
        0.118,
        0.027,
      );
      p.rotation.y = angle;
      ellipsoid(
        torso,
        metal,
        Math.sin(angle) * 0.353,
        0.415 - row * 0.11,
        Math.cos(angle) * 0.29,
        0.012,
        0.012,
        0.012,
      );
    }
  mesh(
    hips,
    lathe([
      [0.29, -0.07],
      [0.34, -0.015],
      [0.34, 0.09],
      [0.3, 0.13],
    ]),
    leather,
    0,
    0.03,
    0,
    1,
    1,
    0.82,
  );
  mesh(hips, box, metal, 0, 0.08, 0.295, 0.15, 0.115, 0.04);
  const waistPanels = [];
  for (const [x, z, rz] of [
    [-0.25, 0.13, -0.09],
    [0.25, 0.13, 0.09],
    [0, 0.26, 0],
    [0, -0.26, 0],
  ]) {
    const p = mesh(hips, clothPanel(0.3, 0.52), cloth, x, -0.03, z);
    p.rotation.z = rz;
    if (z < 0) p.rotation.y = Math.PI;
    waistPanels.push(p);
    rod(p, metal, [-0.13, -0.43, 0.04], [0.13, -0.43, 0.04], 0.012);
  }
  // Collar and head: cheekbones, ears, brow, nose and tied hair remain three-dimensional.
  mesh(neck, cylinder, skin, 0, -0.025, 0, 0.105, 0.25, 0.105);
  const collar = mesh(
    neck,
    lathe([
      [0.17, -0.2],
      [0.16, -0.05],
      [0.12, 0],
    ]),
    darkCloth,
    0,
    -0.02,
    0,
    1,
    1,
    0.85,
  );
  ellipsoid(head, skin, 0, 0, 0.015, 0.175, 0.235, 0.169);
  ellipsoid(head, skinLight, 0, -0.072, 0.047, 0.153, 0.143, 0.149);
  ellipsoid(head, hair, 0, 0.11, -0.026, 0.181, 0.153, 0.167);
  ellipsoid(head, hair, 0, 0.24, -0.05, 0.115, 0.115, 0.11);
  mesh(head, cylinder, metal, 0, 0.22, -0.05, 0.118, 0.035, 0.115);
  ellipsoid(head, skin, -0.174, -0.008, 0, 0.035, 0.065, 0.03);
  ellipsoid(head, skin, 0.174, -0.008, 0, 0.035, 0.065, 0.03);
  const nose = mesh(
    head,
    new THREE.ConeGeometry(0.039, 0.12, 4),
    skinLight,
    0,
    -0.01,
    0.183,
    1,
    1,
    1,
  );
  nose.rotation.x = Math.PI * 0.5;
  for (const side of [-1, 1]) {
    ellipsoid(head, black, side * 0.071, 0.028, 0.159, 0.04, 0.012, 0.012);
    const brow = rod(
      head,
      hair,
      [side * 0.035, 0.063, 0.166],
      [side * 0.111, 0.071, 0.144],
      0.013,
    );
    brow.scale.z = 0.6;
    ellipsoid(head, skinLight, side * 0.1, -0.047, 0.137, 0.058, 0.04, 0.027);
  }
  rod(
    head,
    material("#7a5747"),
    [-0.04, -0.112, 0.154],
    [0.04, -0.112, 0.154],
    0.009,
  );
  // Each joint has a genuine transform hierarchy, including separate elbow and knee pivots.
  const arms = [],
    legs = [];
  for (const side of [-1, 1]) {
    const shoulder = group(torso, side * 0.46, 0.49, 0),
      elbow = group(shoulder, 0, -0.5, 0),
      hand = group(elbow, 0, -0.44, 0.015);
    const sleeve = mesh(
      shoulder,
      lathe([
        [0.14, 0],
        [0.158, -0.16],
        [0.125, -0.4],
        [0.115, -0.5],
      ]),
      cloth,
    );
    sleeve.scale.z = 0.88;
    ellipsoid(
      shoulder,
      plate,
      0,
      0.005,
      -0.005,
      heavy ? 0.245 : 0.19,
      0.135,
      0.22,
    );
    if (heavy) {
      const edge = mesh(
        shoulder,
        new THREE.TorusGeometry(0.18, 0.022, 5, 16, Math.PI),
        metal,
        0,
        0.005,
        0.03,
      );
      edge.rotation.x = Math.PI * 0.5;
    }
    mesh(
      elbow,
      lathe([
        [0.11, 0.04],
        [0.104, -0.18],
        [0.075, -0.42],
      ]),
      skin,
    );
    mesh(
      elbow,
      lathe([
        [0.113, -0.13],
        [0.107, -0.27],
        [0.08, -0.37],
      ]),
      darkCloth,
    );
    rod(elbow, metal, [-0.08, -0.15, 0.084], [0.08, -0.15, 0.084], 0.016);
    ellipsoid(hand, skin, 0, -0.045, 0.005, 0.083, 0.11, 0.072);
    arms.push({ shoulder, elbow, hand, side });
    const thigh = group(hips, side * 0.185, -0.12, 0),
      knee = group(thigh, 0, -0.55, 0),
      foot = group(knee, 0, -0.5, 0);
    mesh(
      thigh,
      lathe([
        [0.164, 0],
        [0.16, -0.23],
        [0.112, -0.54],
      ]),
      darkCloth,
      0,
      0,
      0,
      1,
      1,
      0.91,
    );
    ellipsoid(knee, darkCloth, 0, 0.015, 0.015, 0.12, 0.12, 0.12);
    mesh(
      knee,
      lathe([
        [0.115, 0],
        [0.11, -0.24],
        [0.075, -0.49],
      ]),
      darkCloth,
    );
    const boots = appearance(player, "boots"),
      bootMat = material(
        boots?.color || "#493d32",
        boots?.type === "iron" ? 0.6 : 0.03,
        0.64,
      ),
      bootTrim = material(boots?.trim || "#9a8058", 0.35, 0.48);
    mesh(
      knee,
      lathe([
        [0.119, -0.18],
        [0.127, -0.23],
        [0.096, -0.5],
      ]),
      bootMat,
    );
    ellipsoid(foot, bootMat, 0, -0.025, 0.065, 0.101, 0.08, 0.18);
    mesh(foot, box, leather, 0, -0.067, 0.065, 0.195, 0.04, 0.32);
    mesh(knee, cylinder, bootTrim, 0, -0.218, 0, 0.126, 0.035, 0.125);
    if (boots?.type === "iron")
      ellipsoid(knee, bootTrim, 0, -0.27, 0.094, 0.09, 0.17, 0.03);
    legs.push({ thigh, knee, foot, side });
  }
  // A weapon is attached to the hand, never painted onto a fixed character image.
  const weaponDesc = appearance(player, "weapon") || {
    model: npc && player.role !== "quest" ? "staff" : "sword",
    color: "#bec7be",
    trim: "#ac8d52",
    type: "saber",
  };
  const weapon = makeWeapon(arms[1].hand, weaponDesc);
  weapon.position.set(0.015, -0.02, 0.1);
  weapon.rotation.x = -0.13;
  weapon.rotation.z = -0.09;
  if (weaponDesc.grip === "dual" && !appearance(player, "offhand")) {
    const second = makeBlade(arms[0].hand, weaponDesc);
    second.position.set(0, -0.03, 0.1);
    second.rotation.z = 0.12;
  }
  const off = appearance(player, "offhand");
  if (off?.model === "dagger") {
    const dagger = makeBlade(arms[0].hand, off, true);
    dagger.position.set(0, -0.02, 0.08);
  } else if (off?.model === "shield") {
    const shield = group(arms[0].elbow, -0.06, -0.22, 0.17),
      bm = material(off.color, 0.65, 0.4),
      tm = material(off.trim, 0.7, 0.3);
    const plate = mesh(
      shield,
      new THREE.CylinderGeometry(0.32, 0.32, 0.06, 24),
      bm,
    );
    plate.rotation.x = Math.PI * 0.5;
    const edge = mesh(
      shield,
      new THREE.TorusGeometry(0.3, 0.028, 6, 32),
      tm,
      0,
      0,
      0.04,
    );
    ellipsoid(shield, tm, 0, 0, 0.06, 0.11, 0.11, 0.07);
    for (let i = 0; i < 8; i++)
      ellipsoid(
        shield,
        tm,
        Math.cos((i / 8) * TAU) * 0.24,
        Math.sin((i / 8) * TAU) * 0.24,
        0.054,
        0.016,
        0.016,
        0.016,
      );
  } else if (off?.model === "orb") {
    const om = material(off.color, 0.15, 0.2, {
      emissive: off.glow || off.color,
      emissiveIntensity: 0.8,
    });
    ellipsoid(arms[0].hand, om, 0, 0.14, 0.1, 0.135, 0.135, 0.135);
  } else if (off?.model === "quiver") {
    const quiver = group(torso, -0.23, 0.3, -0.3);
    quiver.rotation.z = -0.25;
    mesh(
      quiver,
      lathe([
        [0.105, -0.38],
        [0.12, 0.25],
        [0.13, 0.31],
      ]),
      leather,
    );
    for (let i = 0; i < 5; i++) {
      const x = ((i % 3) - 1) * 0.05;
      rod(
        quiver,
        metal,
        [x, -0.1, (i % 2) * 0.06],
        [x, 0.53, (i % 2) * 0.06],
        0.008,
      );
      mesh(quiver, box, cloth, x, 0.46, (i % 2) * 0.06, 0.055, 0.13, 0.009);
    }
  }
  const helmet = appearance(player, "helmet");
  if (helmet) {
    const hm = material(helmet.color || "#aa824e", 0.7, 0.35),
      ht = material(helmet.trim || "#dec382", 0.75, 0.29);
    const crown = mesh(
      head,
      lathe([
        [0.178, 0.08],
        [0.183, 0.18],
        [0.11, 0.27],
        [0.03, 0.29],
      ]),
      hm,
      0,
      0,
      -0.008,
      1.1,
      1,
      1.05,
    );
    mesh(
      head,
      lathe([
        [0.18, 0.08],
        [0.187, 0.105],
        [0.185, 0.13],
      ]),
      ht,
      0,
      0,
      0,
      1.1,
      1,
      1.04,
    );
    const crest = mesh(head, clothPanel(0.08, 0.3, 1.3), ht, 0, 0.37, 0.04);
    crest.rotation.x = -0.2;
    ellipsoid(head, hm, -0.19, -0.02, -0.03, 0.035, 0.16, 0.11);
    ellipsoid(head, hm, 0.19, -0.02, -0.03, 0.035, 0.16, 0.11);
  }
  const necklace = appearance(player, "necklace");
  if (necklace) {
    const nm = material(necklace.trim || "#cdb178", 0.75, 0.35),
      jm = material(necklace.color || "#99bfa9", 0.2, 0.2);
    rod(torso, nm, [-0.12, 0.61, 0.25], [0, 0.38, 0.31], 0.012);
    rod(torso, nm, [0.12, 0.61, 0.25], [0, 0.38, 0.31], 0.012);
    mesh(
      torso,
      new THREE.OctahedronGeometry(0.065),
      jm,
      0,
      0.36,
      0.32,
      0.7,
      1.2,
      0.3,
    );
  }
  let cape = null;
  const garment = appearance(player, "garment");
  if (garment || npc) {
    const capeGeo = new THREE.PlaneGeometry(0.92, 1.58, 12, 18),
      positions = capeGeo.attributes.position;
    const base = positions.array.slice();
    const capeMat = material(garment?.color || classColor, 0.02, 0.87, {
      side: THREE.DoubleSide,
    });
    const capeMesh = mesh(torso, capeGeo, capeMat, 0, -0.1, -0.31);
    capeMesh.rotation.x = -0.08;
    cape = { mesh: capeMesh, base };
    for (const side of [-1, 1])
      ellipsoid(torso, metal, side * 0.25, 0.6, 0.18, 0.06, 0.045, 0.025);
  }
  return {
    root,
    body,
    hips,
    torso,
    neck,
    head,
    arms,
    legs,
    waistPanels,
    cape,
    weapon,
    weaponDesc,
    height: 2.82,
    phase: Math.random() * TAU,
  };
}

function makeHumanoid(player = {}, kind = "player") {
  if (!avatarTemplate) return makeProceduralHumanoid(player, kind);
  const root = new THREE.Group(),
    model = cloneSkeleton(avatarTemplate);
  root.add(model);
  model.scale.setScalar(1.55);
  const bones = {},
    nodes = {},
    armor = appearance(player, "armor"),
    boots = appearance(player, "boots"),
    helmet = appearance(player, "helmet"),
    garment = appearance(player, "garment");
  const clothColor =
    armor?.color ||
    (kind === "npc"
      ? player.role === "shop"
        ? "#c0b58f"
        : player.role === "compose"
          ? "#ae7050"
          : "#4f7293"
      : player.type === "bandit"
        ? "#8c5548"
        : BASE[player.classId] || "#567c6d");
  model.traverse((node) => {
    if (node.isBone) bones[node.name] = node;
    nodes[node.name] = node;
    // GLTF nodes with multiple materials are groups containing several skinned
    // primitives. Toggle the named garment node as well as individual meshes.
    if (node.name.startsWith("Gear_"))
      node.visible = node.name.startsWith("Gear_Armor_")
        ? !!armor || kind === "npc"
        : node.name === "Gear_Boots"
          ? !!boots
          : node.name === "Gear_Hood"
            ? !!helmet
            : false;
    if (["Base_Tunic", "Base_Sleeves", "Base_Trousers"].includes(node.name))
      node.visible = !armor && kind !== "npc";
    if (node.name === "Base_Shoes") node.visible = !boots;
    if (node.name === "Hair_Cap") node.visible = false;
    if (node.name === "Hair_Topknot") node.visible = !helmet;
    if (
      kind === "npc" &&
      player.role !== "quest" &&
      /Gear_Armor_Pauldron|Gear_Armor_Sash/.test(node.name)
    )
      node.visible = false;
    if (!node.isMesh) return;
    node.castShadow = true;
    node.receiveShadow = true;
    node.frustumCulled = false;
    node.material = Array.isArray(node.material)
      ? node.material.map((m) => m.clone())
      : node.material.clone();
    const mats = Array.isArray(node.material) ? node.material : [node.material];
    for (const m of mats) {
      m.roughness = Math.max(0.55, m.roughness || 0.7);
      m.envMapIntensity = 0.6;
      if (
        /Tunic|Sleeves|Trousers|Pauldron|Bracers/.test(node.name) &&
        !/Regular_Male|Superhero|Eyes|Hair/.test(m.name)
      ) {
        m.color
          .copy(color(clothColor).lerp(new THREE.Color("#ffffff"), 0.12))
          .multiplyScalar(1.2);
        m.metalness = 0.03;
        // Keep the original weave/seam detail while allowing equipped dye to
        // replace the source outfit's fixed green hue.
        m.onBeforeCompile = (shader) => {
          shader.fragmentShader = shader.fragmentShader.replace(
            "#include <map_fragment>",
            `
            #ifdef USE_MAP
              vec4 clothTexel = texture2D( map, vMapUv );
              float clothValue = dot(clothTexel.rgb, vec3(0.2126, 0.7152, 0.0722));
              diffuseColor.rgb *= clamp(clothValue * 2.1, 0.42, 1.15);
              diffuseColor.a *= clothTexel.a;
            #endif
          `,
          );
        };
        m.customProgramCacheKey = () => "jade-dyed-cloth-v1";
        if (
          armor?.model === "heavy-armor" &&
          /Pauldron|Bracers|Tunic/.test(node.name)
        ) {
          m.metalness = 0.35;
          m.roughness = 0.48;
        }
      }
      if (/Shoes|Boots/.test(node.name) && boots) {
        m.color.multiply(
          color(boots.color).lerp(new THREE.Color("#ffffff"), 0.25),
        );
        if (boots.type === "iron") {
          m.metalness = 0.5;
          m.roughness = 0.45;
        }
      }
    }
  });
  const mixer = new THREE.AnimationMixer(model),
    actions = {};
  for (const clip of avatarAnimations)
    actions[clip.name] = mixer.clipAction(clip);
  const rig = {
    root,
    model,
    bones,
    nodes,
    mixer,
    actions,
    height: 2.95,
    phase: Math.random() * TAU,
    animation: null,
    animationTime: 0,
    cape: null,
    licensed: true,
  };
  const weaponDesc =
    appearance(player, "weapon") ||
    (kind !== "player"
      ? {
          model:
            kind === "npc" && player.role === "shop"
              ? "staff"
              : kind === "npc" && player.role === "quest"
                ? "glaive"
                : "sword",
          color: "#b7c2bd",
          trim: "#b59a60",
          type: "saber",
        }
      : null);
  rig.weaponDesc = weaponDesc;
  const right = bones.hand_r || bones.Hand_R,
    left = bones.hand_l || bones.Hand_L,
    chest = bones.spine_03 || bones.Spine2,
    head = bones.Head;
  if (right && weaponDesc) {
    const handMount = group(right);
    handMount.rotation.x = Math.PI * 0.5;
    handMount.scale.setScalar(0.66);
    const weapon = makeWeapon(handMount, weaponDesc);
    weapon.position.set(0, 0.01, 0.02);
    rig.weapon = weapon;
  }
  const off = appearance(player, "offhand");
  if (
    left &&
    (off?.model === "dagger" || (!off && weaponDesc?.grip === "dual"))
  ) {
    const mount = group(left);
    mount.rotation.x = Math.PI * 0.5;
    mount.scale.setScalar(0.66);
    makeBlade(mount, off || weaponDesc, !!off);
  }
  if (left && off?.model === "shield") {
    const mount = group(left, 0, 0.02, -0.06);
    mount.scale.setScalar(0.65);
    mount.rotation.x = Math.PI * 0.5;
    const pm = material(off.color, 0.65, 0.4),
      tm = material(off.trim, 0.7, 0.3);
    mesh(
      mount,
      new THREE.CylinderGeometry(0.38, 0.38, 0.065, 28),
      pm,
    ).rotation.x = Math.PI * 0.5;
    mesh(mount, new THREE.TorusGeometry(0.35, 0.03, 6, 36), tm, 0, 0, 0.045);
    ellipsoid(mount, tm, 0, 0, 0.065, 0.11, 0.11, 0.08);
  }
  if (left && off?.model === "orb") {
    const om = material(off.color, 0.25, 0.2, {
      emissive: off.glow || off.color,
      emissiveIntensity: 1,
    });
    ellipsoid(left, om, 0, 0.08, 0.1, 0.1, 0.1, 0.1);
  }
  if (chest && off?.model === "quiver") {
    const q = group(chest, -0.17, 0.04, -0.18);
    q.rotation.z = -0.3;
    mesh(
      q,
      lathe([
        [0.07, -0.22],
        [0.09, 0.17],
      ]),
      material(off.color || "#77543e"),
    );
    const am = material("#cab68d", 0.35, 0.6);
    for (let i = 0; i < 5; i++)
      rod(
        q,
        am,
        [((i % 3) - 1) * 0.035, -0.1, (i % 2) * 0.04],
        [((i % 3) - 1) * 0.035, 0.32, (i % 2) * 0.04],
        0.006,
      );
  }
  if (head && helmet) {
    const hm = material(helmet.color || "#b38b58", 0.7, 0.35),
      tm = material(helmet.trim || "#dec382", 0.75, 0.3);
    // The fitted headpiece is independently equipped in addition to the tailored hood.
    const mount = group(head);
    mesh(
      mount,
      lathe([
        [0.115, 0.02],
        [0.12, 0.075],
        [0.085, 0.115],
      ]),
      hm,
      0,
      0,
      0.005,
      1,
      1,
      0.9,
    );
    mesh(
      mount,
      lathe([
        [0.12, 0.027],
        [0.125, 0.04],
        [0.12, 0.05],
      ]),
      tm,
      0,
      0,
      0.005,
      1,
      1,
      0.9,
    );
  }
  const necklace = appearance(player, "necklace");
  if (chest && necklace) {
    const nm = material(necklace.trim || "#cfac6e", 0.7, 0.35);
    rod(chest, nm, [-0.08, 0.08, 0.14], [0, -0.06, 0.19], 0.008);
    rod(chest, nm, [0.08, 0.08, 0.14], [0, -0.06, 0.19], 0.008);
    mesh(
      chest,
      new THREE.OctahedronGeometry(0.045),
      material(necklace.color || "#a5cbb9", 0.2, 0.25),
      0,
      -0.08,
      0.19,
      0.7,
      1.3,
      0.4,
    );
  }
  const ring = appearance(player, "ring");
  if (right && ring) {
    const finger = bones.ring_01_r || bones.index_01_r || right;
    const ringMat = material(ring.trim || "#d0b678", 0.8, 0.26),
      gemMat = material(ring.color || "#91c9b1", 0.3, 0.18, {
        emissive: ring.glow || ring.color || "#82c1a4",
        emissiveIntensity: 0.65,
      });
    const mount = group(finger, 0, finger === right ? 0.075 : 0.018, 0);
    mesh(
      mount,
      new THREE.TorusGeometry(0.014, 0.0035, 5, 14),
      ringMat,
    ).rotation.x = Math.PI * 0.5;
    mesh(mount, new THREE.OctahedronGeometry(0.01), gemMat, 0, 0, 0.017);
  }
  if (chest && garment) {
    const geometry = new THREE.PlaneGeometry(0.63, 1.05, 12, 18),
      cape = mesh(
        chest,
        geometry,
        material(garment.color || "#a64e48", 0, 0.88, {
          side: THREE.DoubleSide,
        }),
        0,
        -0.37,
        -0.18,
      );
    rig.cape = { mesh: cape, base: geometry.attributes.position.array.slice() };
    rod(
      chest,
      material(garment.trim || "#c5a66b", 0.5, 0.55),
      [-0.2, 0.07, 0.13],
      [0.2, 0.07, 0.13],
      0.014,
    );
  }
  setAnimation(rig, "Idle_Loop", 0);
  mixer.update(Math.random() * 1.5);
  return rig;
}

function setAnimation(rig, name, fade = 0.13, once = false) {
  if (rig.animation === name) return;
  const next = rig.actions[name] || rig.actions.Idle_Loop;
  if (!next) return;
  const previous = rig.actions[rig.animation];
  next.reset();
  next.enabled = true;
  next.setLoop(once ? THREE.LoopOnce : THREE.LoopRepeat, once ? 1 : Infinity);
  next.clampWhenFinished = once;
  next.setEffectiveWeight(1).setEffectiveTimeScale(1);
  next.play();
  if (previous && fade > 0) {
    previous.fadeOut(fade);
    next.fadeIn(fade);
  } else previous?.stop();
  rig.animation = name;
}

function makeBird() {
  const root = new THREE.Group(),
    body = group(root, 0, 0.48),
    brown = material("#785c39"),
    wingMat = material("#9d8050"),
    cream = material("#d9b77e"),
    red = material("#a54c3c"),
    dark = material("#282c24"),
    bronze = material("#977443");
  ellipsoid(body, brown, 0, 0, 0, 0.28, 0.29, 0.42);
  ellipsoid(body, cream, 0, 0.04, 0.27, 0.21, 0.26, 0.2);
  const neck = group(body, 0, 0.19, 0.28),
    head = group(neck, 0, 0.19, 0.04);
  ellipsoid(neck, brown, 0, 0, 0, 0.11, 0.21, 0.12);
  ellipsoid(head, brown, 0, 0, 0, 0.14, 0.15, 0.15);
  const beak = mesh(
    head,
    new THREE.ConeGeometry(0.055, 0.19, 6),
    bronze,
    0,
    -0.025,
    0.19,
  );
  beak.rotation.x = Math.PI * 0.5;
  for (const side of [-1, 1])
    ellipsoid(head, dark, side * 0.115, 0.028, 0.07, 0.024, 0.024, 0.024);
  for (let i = 0; i < 3; i++)
    ellipsoid(
      head,
      red,
      0,
      0.14 + Math.sin(i) * 0.015,
      -0.06 + i * 0.06,
      0.035,
      0.06,
      0.035,
    );
  const wings = [],
    legs = [];
  for (const side of [-1, 1]) {
    const wing = group(body, side * 0.22, 0.04, 0);
    wings.push(wing);
    ellipsoid(wing, wingMat, side * 0.035, -0.025, -0.09, 0.11, 0.21, 0.29);
    for (let i = 0; i < 5; i++) {
      const feather = ellipsoid(
        wing,
        i % 2 ? cream : brown,
        side * 0.065,
        -0.1 - i * 0.023,
        -0.05 - i * 0.045,
        0.025,
        0.13,
        0.2,
      );
      feather.rotation.x = -0.3;
    }
    const leg = group(root, side * 0.11, 0.33, 0.02);
    legs.push(leg);
    rod(leg, bronze, [0, 0, 0], [0, -0.28, 0.03], 0.025);
    for (let i = -1; i <= 1; i++)
      rod(leg, bronze, [0, -0.27, 0.02], [i * 0.06, -0.28, 0.14], 0.014);
  }
  const tail = group(body, 0, 0.04, -0.32);
  tail.rotation.x = -0.5;
  for (let i = -2; i <= 2; i++) {
    const feather = ellipsoid(
      tail,
      i % 2 ? wingMat : brown,
      i * 0.045,
      0.07,
      -0.23,
      0.055,
      0.05,
      0.42,
    );
    feather.rotation.y = i * 0.12;
  }
  return {
    root,
    body,
    neck,
    head,
    wings,
    birdLegs: legs,
    tail,
    height: 1.2,
    phase: Math.random() * TAU,
  };
}
function makeGuardian() {
  const p = {
      type: "bandit",
      classId: "warrior",
      equipment: {},
      inventory: [],
    },
    rig = makeHumanoid(p, "enemy");
  rig.root.scale.setScalar(1.35);
  rig.height *= 1.35;
  rig.root.traverse((o) => {
    if (o.isMesh && o.material?.isMeshStandardMaterial) {
      o.material.color.lerp(new THREE.Color("#747a69"), 0.7);
      o.material.roughness = 0.95;
      o.material.metalness = 0.12;
    }
  });
  return rig;
}

export class GameRenderer {
  constructor() {
    this.supportsUnrenderedStep = true;
    this.width = 1;
    this.height = 1;
    this.clock = 0;
    this.zone = null;
    this.entities = new Map();
    this.effects = new Map();
    this.pointer = null;
    this.lastState = null;
    this.cameraReady = false;
    this.zoom = 1;
    this.raycaster = new THREE.Raycaster();
    this.ground = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this.target = new THREE.Vector3(24, 0, 24);
    this.screenOffset = { x: 0, y: 0 };
  }
  async init(container) {
    this.container = container;
    try {
      const asset = await new GLTFLoader().loadAsync(
        `${import.meta.env.BASE_URL}models/jade-warrior.glb`,
      );
      avatarTemplate = asset.scene;
      avatarAnimations = asset.animations;
      this.modelLoaded = true;
    } catch (error) {
      console.warn(
        "The character model could not load; using the articulated fallback.",
        error,
      );
      this.modelLoaded = false;
    }
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.13;
    this.renderer.setClearColor("#b6c1ac");
    this.canvas = this.renderer.domElement;
    this.canvas.style.cssText =
      "display:block;width:100%;height:100%;touch-action:none";
    this.canvas.setAttribute(
      "aria-label",
      "Jade Realm three-dimensional game world. Click to travel, right click to jump, Space to attack.",
    );
    container.appendChild(this.canvas);
    this.app = { canvas: this.canvas };
    this.onWheel = (event) => {
      event.preventDefault();
      this.zoom = clamp(
        this.zoom * Math.exp(-event.deltaY * 0.00075),
        0.7,
        1.8,
      );
    };
    this.canvas.addEventListener("wheel", this.onWheel, { passive: false });
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#b8c2ac");
    this.scene.fog = new THREE.Fog("#b8c2ac", 82, 132);
    this.camera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.1, 180);
    this.scene.add(new THREE.HemisphereLight("#dce9ec", "#867c59", 2.0));
    const fill = new THREE.DirectionalLight("#c0d8e5", 0.55);
    fill.position.set(-15, 12, 5);
    this.scene.add(fill);
    this.sun = new THREE.DirectionalLight("#fff0d1", 3.2);
    this.sun.position.set(12, 30, 4);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    Object.assign(this.sun.shadow.camera, {
      left: -28,
      right: 28,
      top: 28,
      bottom: -28,
      near: 1,
      far: 80,
    });
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.035;
    this.sun.shadow.radius = 3;
    this.scene.add(this.sun, this.sun.target);
    this.entityGroup = new THREE.Group();
    this.effectGroup = new THREE.Group();
    this.scene.add(this.entityGroup, this.effectGroup);
    this.selection = this.makeRing("#f5dd94", 0.53, 0.025);
    this.scene.add(this.selection);
    this.hoverRing = this.makeRing("#dbe9bf", 0.47, 0.017);
    this.scene.add(this.hoverRing);
    this.pointerRing = this.makeRing("#f4e1a2", 0.29, 0.02);
    this.scene.add(this.pointerRing);
    this.pointerRing.visible = false;
    this.labels = document.createElement("div");
    this.labels.style.cssText =
      "position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:2";
    container.appendChild(this.labels);
    this.resize();
  }
  makeRing(c, radius, width) {
    const m = new THREE.Mesh(
      new THREE.RingGeometry(radius - width, radius + width, 48),
      new THREE.MeshBasicMaterial({
        color: c,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    );
    m.rotation.x = -Math.PI * 0.5;
    m.position.y = 0.025;
    m.visible = false;
    return m;
  }
  resize() {
    if (!this.renderer) return;
    this.width = this.container.clientWidth || window.innerWidth;
    this.height = this.container.clientHeight || window.innerHeight;
    this.renderer.setSize(this.width, this.height, false);
    // ~64 x 32 pixel diamonds, retaining enough space around an adult-sized hero.
    const scale = this.width < 650 ? 37 : 45;
    this.camera.left = -this.width / scale / 2;
    this.camera.right = this.width / scale / 2;
    this.camera.top = this.height / scale / 2;
    this.camera.bottom = -this.height / scale / 2;
    this.camera.updateProjectionMatrix();
  }
  rebuildZone(zone) {
    this.environment?.dispose?.();
    this.zone = zone;
    this.environment = createEnvironment(
      this.scene,
      zoneDefs[zone] || zoneDefs.city,
      zone,
    );
    this.cameraReady = false;
  }
  setPointer(x, y) {
    this.pointer = { x, y };
  }
  worldToScreen(x, y, height = 0) {
    const p = new THREE.Vector3(x, height, y).project(this.camera);
    return {
      x: ((p.x + 1) * this.width) / 2,
      y: ((1 - p.y) * this.height) / 2,
    };
  }
  screenToWorld(clientX, clientY) {
    const r = this.canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(
      ((clientX - r.left) / r.width) * 2 - 1,
      (-(clientY - r.top) / r.height) * 2 + 1,
    );
    this.raycaster.setFromCamera(ndc, this.camera);
    const p = new THREE.Vector3();
    this.raycaster.ray.intersectPlane(this.ground, p);
    return { x: p.x, y: p.z };
  }
  entityPosition(entity) {
    if (!entity.jump) return { x: entity.x, y: entity.y, lift: 0 };
    const j = entity.jump,
      t = clamp(j.progress ?? j.t / j.duration, 0, 1);
    return {
      x: j.fromX + (j.toX - j.fromX) * t,
      y: j.fromY + (j.toY - j.fromY) * t,
      lift: Math.sin(t * Math.PI) * 2.5,
    };
  }
  pickEntity(clientX, clientY, state = this.lastState) {
    if (!state || !this.canvas) return null;
    const r = this.canvas.getBoundingClientRect(),
      sx = ((clientX - r.left) * this.width) / r.width,
      sy = ((clientY - r.top) * this.height) / r.height;
    let best = null,
      nearest = 47;
    for (const entity of [
      ...list(state.enemies),
      ...list(state.npcs),
      ...list(state.players),
      ...list(state.drops),
    ]) {
      if (
        entity.id === this.self?.id ||
        entity.zone !== this.zone ||
        entity.hp === 0
      )
        continue;
      const p = this.entityPosition(entity),
        rig = this.entities.get(entity.id)?.rig,
        screen = this.worldToScreen(
          p.x,
          p.y,
          p.lift + (rig?.height || 0.6) * 0.48,
        );
      const d = Math.hypot(sx - screen.x, (sy - screen.y) * 0.78);
      if (d < nearest) {
        nearest = d;
        best = entity;
      }
    }
    return best;
  }
  makeLabel(entity, kind) {
    const el = document.createElement("div");
    const c =
      kind === "npc"
        ? "#ffe2a1"
        : kind === "enemy"
          ? "#ffdfc8"
          : kind === "drop"
            ? "#f6d892"
            : "#e4f1de";
    el.style.cssText = `position:absolute;transform:translate(-50%,-100%);text-align:center;white-space:nowrap;color:${c};font:500 11px/1.35 'Trebuchet MS',sans-serif;text-shadow:0 1px 3px #17271a,0 0 5px #17271a;letter-spacing:.3px`;
    const title = document.createElement("div");
    title.textContent = entity.name || "Wanderer";
    el.appendChild(title);
    if (kind === "npc") {
      const sub = document.createElement("div");
      sub.textContent =
        entity.role === "quest"
          ? "QUEST"
          : entity.role === "compose"
            ? "FORGEMASTER"
            : "HERBALIST";
      sub.style.cssText =
        "font-size:8px;letter-spacing:1.5px;color:#d1c7a0;margin-top:1px";
      el.prepend(sub);
    }
    const bar = document.createElement("div");
    bar.style.cssText =
      "width:40px;height:3px;background:#111d18bb;border:1px solid #1d261c;margin:4px auto 0;border-radius:2px;overflow:hidden";
    const fill = document.createElement("div");
    fill.style.cssText = `height:100%;background:${kind === "enemy" ? "#c38463" : "#94b887"};width:100%`;
    bar.appendChild(fill);
    if (["enemy", "player"].includes(kind)) el.appendChild(bar);
    this.labels.appendChild(el);
    return { el, title, fill, bar };
  }
  makeEntity(entity, kind) {
    let rig;
    if (kind === "drop") {
      const root = new THREE.Group(),
        gold = material(
          entity.icon === "stone" ? "#94c8b4" : "#d4af62",
          0.7,
          0.3,
          {
            emissive: entity.icon === "stone" ? "#609b81" : "#8d682c",
            emissiveIntensity: 0.2,
          },
        );
      mesh(root, new THREE.OctahedronGeometry(0.14), gold, 0, 0.18, 0);
      rig = { root, height: 0.45, phase: 0 };
    } else
      rig =
        entity.type === "pheasant"
          ? makeBird()
          : entity.type === "guardian"
            ? makeGuardian()
            : makeHumanoid(entity, kind);
    this.entityGroup.add(rig.root);
    const label = this.makeLabel(entity, kind),
      record = {
        rig,
        label,
        kind,
        key: wardrobeKey(entity),
        lastX: entity.x,
        lastY: entity.y,
        angle: Math.PI / 2 - ((entity.facing || 0) * Math.PI) / 4,
        motion: 0,
        attack: 0,
        previousCooldown: 0,
        previousSkill: 0,
        landing: 0,
        jumping: false,
      };
    this.entities.set(entity.id, record);
    return record;
  }
  updateRig(record, entity, dt, state) {
    const rig = record.rig,
      p = this.entityPosition(entity),
      dx = p.x - record.lastX,
      dy = p.y - record.lastY,
      distance = Math.hypot(dx, dy);
    const speed =
        dt === 0
          ? record.speed || 0
          : distance < 5
            ? distance / Math.max(dt, 0.001)
            : 0,
      moving = speed > 0.08 || entity.path?.length > 0;
    record.speed = speed;
    record.lastX = p.x;
    record.lastY = p.y;
    if (
      (entity.cooldown || 0) > record.previousCooldown + 0.08 ||
      (entity.skillCooldown || 0) > record.previousSkill + 0.08
    )
      record.attack = 0.48;
    record.previousCooldown = entity.cooldown || 0;
    record.previousSkill = entity.skillCooldown || 0;
    record.attack = Math.max(0, record.attack - dt);
    if (record.jumping && !entity.jump) record.landing = 0.22;
    record.jumping = !!entity.jump;
    record.landing = Math.max(0, record.landing - dt);
    let aim = Math.PI / 2 - ((entity.facing ?? 2) * Math.PI) / 4;
    if (distance > 0.001 && distance < 5) aim = Math.atan2(dx, dy);
    if (entity.jump)
      aim = Math.atan2(
        entity.jump.toX - entity.jump.fromX,
        entity.jump.toY - entity.jump.fromY,
      );
    if (record.attack) {
      const target = list(state.enemies).find((e) => e.id === entity.target);
      if (target) aim = Math.atan2(target.x - entity.x, target.y - entity.y);
    }
    const delta = Math.atan2(
      Math.sin(aim - record.angle),
      Math.cos(aim - record.angle),
    );
    record.angle += delta * Math.min(1, dt * 15);
    rig.root.position.set(p.x, p.lift, p.y);
    rig.root.rotation.y = record.angle;
    record.motion += ((moving ? 1 : 0) - record.motion) * Math.min(1, dt * 12);
    rig.phase += Math.min(speed, 10) * dt * 2.4;
    if (rig.licensed) {
      let animation;
      const j = entity.jump
        ? clamp(entity.jump.t / entity.jump.duration, 0, 1)
        : 0;
      if (entity.jump) animation = j < 0.16 ? "Jump_Start" : "Jump_Loop";
      else if (record.landing > 0) animation = "Jump_Land";
      else if (record.attack > 0)
        animation = ["staff", "wand", "bow"].includes(rig.weaponDesc?.model)
          ? "Spell_Simple_Shoot"
          : "Sword_Attack";
      else if (moving)
        animation =
          entity.running === false
            ? "Walk_Loop"
            : speed > 6
              ? "Sprint_Loop"
              : "Jog_Fwd_Loop";
      else animation = "Idle_Loop";
      setAnimation(
        rig,
        animation,
        entity.jump || record.attack ? 0.07 : 0.12,
        /Jump_Start|Jump_Land|Sword_Attack|Spell_Simple_Shoot/.test(animation),
      );
      const action = rig.actions[animation];
      if (action && moving && !entity.jump && !record.attack)
        action.setEffectiveTimeScale(
          clamp(speed / (entity.running === false ? 4.5 : 7.5), 0.7, 1.3),
        );
      if (action && /Sword_Attack|Spell_Simple_Shoot/.test(animation))
        action.setEffectiveTimeScale(action.getClip().duration / 0.5);
      if (action && animation === "Jump_Start")
        action.setEffectiveTimeScale(2.6);
      if (action && animation === "Jump_Land")
        action.setEffectiveTimeScale(action.getClip().duration / 0.27);
      rig.mixer.update(dt);
      rig.animationTime = action?.time || 0;
      if (rig.cape) {
        const pos = rig.cape.mesh.geometry.attributes.position,
          original = rig.cape.base;
        for (let i = 0; i < pos.count; i++) {
          const x = original[i * 3],
            y = original[i * 3 + 1],
            t = (0.525 - y) / 1.05;
          pos.setXYZ(
            i,
            x * (0.8 + t * 0.4),
            y,
            original[i * 3 + 2] -
              t * t * (0.08 + record.motion * 0.3 + (entity.jump ? 0.3 : 0)) +
              Math.sin(this.clock * 3.4 + x * 6 - t * 4) *
                t *
                (0.025 + record.motion * 0.05),
          );
        }
        pos.needsUpdate = true;
        rig.cape.mesh.geometry.computeVertexNormals();
      }
      rig.root.updateMatrixWorld(true);
      return;
    }
    if (rig.birdLegs) {
      rig.body.position.y =
        0.48 +
        Math.sin(this.clock * 2.4 + rig.phase) * 0.018 +
        Math.abs(Math.sin(rig.phase * 2)) * 0.03 * record.motion;
      rig.head.rotation.x = Math.sin(this.clock * 1.7 + rig.phase) * 0.09;
      rig.wings.forEach((w, i) => {
        w.rotation.z =
          Math.sin(this.clock * 2 + i * Math.PI) * 0.08 + record.motion * 0.2;
      });
      rig.birdLegs.forEach(
        (leg, i) =>
          (leg.rotation.x =
            Math.sin(rig.phase + i * Math.PI) * 0.6 * record.motion),
      );
      return;
    }
    if (!rig.arms) {
      rig.root.children[0].rotation.y += dt * 0.9;
      rig.root.children[0].position.y = 0.2 + Math.sin(this.clock * 2) * 0.035;
      return;
    }
    const motion = record.motion,
      stride = Math.sin(rig.phase),
      run = entity.running === false ? 0.55 : 0.86,
      breathing = Math.sin(this.clock * 2.25 + rig.phase * 0.04),
      j = entity.jump ? clamp(entity.jump.t / entity.jump.duration, 0, 1) : 0;
    const jumpTuck = entity.jump ? Math.sin(j * Math.PI) : 0,
      land = record.landing / 0.22;
    rig.body.position.y =
      Math.abs(Math.cos(rig.phase * 2)) * 0.055 * motion +
      breathing * 0.014 -
      land * 0.13;
    rig.body.rotation.x = motion * 0.11 - jumpTuck * 0.2 + land * 0.12;
    rig.hips.rotation.y = stride * 0.085 * motion;
    rig.torso.rotation.y = -stride * 0.11 * motion;
    rig.torso.rotation.z = Math.cos(rig.phase) * 0.025 * motion;
    rig.head.rotation.y =
      Math.sin(this.clock * 0.48 + rig.phase * 0.05) * 0.045 * (1 - motion);
    rig.head.rotation.x = -0.025 + breathing * 0.018;
    for (let i = 0; i < 2; i++) {
      const phase = rig.phase + i * Math.PI,
        s = Math.sin(phase),
        leg = rig.legs[i],
        arm = rig.arms[i];
      leg.thigh.rotation.x =
        s * run * motion - jumpTuck * (i ? 0.95 : 0.6) + land * 0.3;
      leg.knee.rotation.x =
        Math.max(0, -Math.cos(phase)) * 0.95 * motion +
        jumpTuck * 1.25 +
        land * 0.36;
      leg.foot.rotation.x = -0.12 * motion + jumpTuck * 0.2;
      arm.shoulder.rotation.x = -s * 0.57 * motion - 0.05 - jumpTuck * 0.82;
      arm.shoulder.rotation.z =
        -arm.side * (0.08 + breathing * 0.012 + jumpTuck * 0.22);
      arm.elbow.rotation.x =
        -0.18 - motion * (0.28 + Math.max(0, s) * 0.23) - jumpTuck * 0.55;
      arm.elbow.rotation.z = 0;
    }
    if (rig.weaponDesc?.model === "bow") {
      rig.arms[1].shoulder.rotation.x -= 0.35;
      rig.arms[0].shoulder.rotation.x -= 0.18;
    }
    if (record.attack > 0) {
      const a = 1 - record.attack / 0.48,
        strike = Math.sin(a * Math.PI);
      rig.torso.rotation.y += Math.sin(a * TAU - 1.1) * 0.7;
      rig.arms[1].shoulder.rotation.x = -1.7 + a * 2.7;
      rig.arms[1].shoulder.rotation.z = -0.25 - strike * 0.85;
      rig.arms[1].elbow.rotation.x = -0.5 + strike * 0.35;
      rig.arms[0].shoulder.rotation.x = -0.6 - strike * 0.35;
      rig.body.rotation.z = Math.sin(a * TAU) * 0.08;
    } else rig.body.rotation.z *= 0.85;
    rig.waistPanels.forEach((panel, i) => {
      panel.rotation.x =
        Math.sin(rig.phase + i) * motion * 0.11 + jumpTuck * 0.25;
    });
    if (rig.cape) {
      const pos = rig.cape.mesh.geometry.attributes.position,
        original = rig.cape.base;
      for (let i = 0; i < pos.count; i++) {
        const x = original[i * 3],
          y = original[i * 3 + 1],
          t = (0.79 - y) / 1.58;
        pos.setXYZ(
          i,
          x * (0.8 + t * 0.4),
          y,
          original[i * 3 + 2] -
            t * t * (0.15 + motion * 0.48 + jumpTuck * 0.5) +
            Math.sin(this.clock * 3.1 + x * 5 - t * 4) *
              t *
              (0.045 + motion * 0.07),
        );
      }
      pos.needsUpdate = true;
      rig.cape.mesh.geometry.computeVertexNormals();
    }
  }
  draw(state, selfId, dt = 1 / 60, renderNow = true) {
    if (!this.renderer || !state) return;
    dt = clamp(dt > 1 ? dt / 1000 : dt, 0, 0.06);
    this.clock += dt;
    const self =
      list(state.players).find((p) => p.id === selfId) ||
      list(state.players)[0];
    if (!self) return;
    this.self = self;
    this.lastState = state;
    const zone = self.zone || "city";
    if (zone !== this.zone) this.rebuildZone(zone);
    const actual = this.entityPosition(self),
      target = new THREE.Vector3(actual.x, 0, actual.y);
    if (!this.cameraReady) {
      this.target.copy(target);
      this.cameraReady = true;
    }
    this.target.lerp(target, 1 - Math.exp(-dt * 10));
    // A 30-degree elevated orthographic camera gives the classic 2:1 world diamond.
    const focus = this.target.clone();
    focus.y = 0.8;
    const intro = state.sceneMode === "intro";
    if (intro && this.width > 800) {
      const offset = (this.width / 45) * 0.145;
      focus.x -= offset * Math.SQRT1_2;
      focus.z += offset * Math.SQRT1_2;
    }
    const desiredZoom = this.zoom * (intro ? 1.32 : 1);
    if (Math.abs(this.camera.zoom - desiredZoom) > 0.0001) {
      this.camera.zoom = desiredZoom;
      this.camera.updateProjectionMatrix();
    }
    this.camera.position.copy(focus).add(new THREE.Vector3(40, 32.66, 40));
    this.camera.lookAt(focus);
    this.camera.updateMatrixWorld();
    this.sun.position.set(this.target.x - 12, 30, this.target.z - 8);
    this.sun.target.position.copy(this.target);
    this.sun.target.updateMatrixWorld();
    this.environment?.update?.(this.clock, actual);
    const seen = new Set();
    for (const [collection, kind] of [
      [state.players, "player"],
      [state.enemies, "enemy"],
      [state.npcs, "npc"],
      [state.drops, "drop"],
    ])
      for (const entity of list(collection)) {
        if ((entity.zone && entity.zone !== zone) || entity.hp === 0) continue;
        seen.add(entity.id);
        let record = this.entities.get(entity.id),
          key = wardrobeKey(entity);
        if (record && key !== record.key) {
          disposeObject(record.rig.root, true);
          record.label.el.remove();
          this.entities.delete(entity.id);
          record = null;
        }
        if (!record) record = this.makeEntity(entity, kind);
        record.rig.root.visible = true;
        this.updateRig(record, entity, dt, state);
        const p = this.entityPosition(entity),
          screen = this.worldToScreen(
            p.x,
            p.y,
            p.lift + record.rig.height + 0.17,
          );
        record.label.el.style.display =
          screen.x < -100 ||
          screen.x > this.width + 100 ||
          screen.y < -40 ||
          screen.y > this.height + 80
            ? "none"
            : "block";
        record.label.el.style.left = `${screen.x}px`;
        record.label.el.style.top = `${screen.y}px`;
        record.label.fill.style.width = `${clamp(entity.hp / (entity.maxHp || 1), 0, 1) * 100}%`;
        record.label.bar.style.display =
          (kind === "player" && entity.id !== selfId) ||
          (kind === "enemy" && entity.hp < entity.maxHp)
            ? "block"
            : "none";
      }
    for (const [id, record] of this.entities)
      if (!seen.has(id)) {
        record.rig.root.visible = false;
        record.label.el.style.display = "none";
      }
    const selected = state.selectedTarget || state.targetId || self.target,
      targetEntity = [...list(state.enemies), ...list(state.npcs)].find(
        (e) => e.id === selected && e.hp > 0 && e.zone === zone,
      );
    this.selection.visible = !!targetEntity;
    if (targetEntity)
      this.selection.position.set(targetEntity.x, 0.04, targetEntity.y);
    const hover = this.pointer
      ? this.pickEntity(this.pointer.x, this.pointer.y, state)
      : null;
    this.hoverRing.visible = !!hover && hover.id !== selected;
    if (hover) this.hoverRing.position.set(hover.x, 0.035, hover.y);
    this.pointerRing.visible = !!this.pointer && !hover;
    if (this.pointer) {
      const p = this.screenToWorld(this.pointer.x, this.pointer.y);
      this.pointerRing.position.set(p.x, 0.032, p.y);
    }
    this.drawEffects(list(state.effects), state.time ?? 0);
    if (renderNow) this.renderer.render(this.scene, this.camera);
  }
  drawEffects(effects, time) {
    const seen = new Set();
    for (const e of effects) {
      if (e.zone && e.zone !== this.zone) continue;
      const t = clamp((time - (e.start || 0)) / (e.duration || 0.65), 0, 1);
      if (t >= 1) continue;
      const id = e.id || `${e.kind}:${e.x}:${e.y}:${e.start}`,
        type = e.kind || e.type || "hit";
      seen.add(id);
      let fx = this.effects.get(id);
      if (!fx) {
        const root = new THREE.Group();
        this.effectGroup.add(root);
        const c =
          e.color ||
          (/fire|magic/.test(type)
            ? "#efad65"
            : /heal|shield/.test(type)
              ? "#8bd0b9"
              : "#fff2ba");
        const mat = new THREE.MeshBasicMaterial({
          color: c,
          transparent: true,
          opacity: 0.8,
          side: THREE.DoubleSide,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        });
        if (
          /damage|text/.test(type) ||
          e.amount !== undefined ||
          e.damage !== undefined
        ) {
          const label = document.createElement("div");
          label.textContent = e.text || String(e.amount ?? e.damage ?? "");
          label.style.cssText =
            "position:absolute;color:#ffe6ac;font:bold 19px Georgia,serif;text-shadow:0 2px 3px #3a2416;transform:translate(-50%,-50%);pointer-events:none";
          this.labels.appendChild(label);
          fx = { root, label, mat };
        } else if (/slash|line/.test(type)) {
          const slash = mesh(
            root,
            new THREE.TorusGeometry(0.85, 0.026, 4, 42, Math.PI * 1.15),
            mat,
            0,
            1.3,
            0,
          );
          slash.rotation.set(0.4, 0.2, -0.4);
          fx = { root, mat, slash };
        } else if (/arrow|magic/.test(type)) {
          const ball = mesh(
            root,
            new THREE.SphereGeometry(type === "arrow" ? 0.05 : 0.13, 8, 6),
            mat,
            0,
            0.85,
            0,
          );
          fx = { root, mat, ball };
          if (type === "arrow")
            rod(root, mat, [0, 0.85, -0.28], [0, 0.85, 0.3], 0.018);
        } else {
          const ring = mesh(
            root,
            new THREE.TorusGeometry(0.65, 0.025, 5, 48),
            mat,
          );
          ring.rotation.x = -Math.PI * 0.5;
          if (/fire|circle/.test(type))
            for (let i = 0; i < 12; i++)
              ellipsoid(
                root,
                mat,
                Math.cos((i / 12) * TAU) * 0.8,
                0.15,
                Math.sin((i / 12) * TAU) * 0.8,
                0.05,
                0.25,
                0.05,
              );
          fx = { root, mat, ring };
        }
        fx.root.position.set(e.x ?? e.fromX ?? 0, 0.07, e.y ?? e.fromY ?? 0);
        this.effects.set(id, fx);
      }
      fx.mat.opacity = Math.sin(t * Math.PI) * 0.85;
      if (fx.label) {
        const p = this.worldToScreen(e.x, e.y, 1.8 + t * 1.6);
        fx.label.style.left = `${p.x}px`;
        fx.label.style.top = `${p.y}px`;
        fx.label.style.opacity = String(1 - t);
      }
      if (fx.slash) {
        fx.slash.rotation.z = -0.8 + t * 3.6;
        fx.root.rotation.y = Math.atan2(
          (e.toX ?? e.x + 1) - e.x,
          (e.toY ?? e.y) - e.y,
        );
        fx.root.scale.setScalar(0.7 + t * 0.8);
      }
      if (fx.ball) {
        fx.root.position.x = THREE.MathUtils.lerp(e.x, e.toX ?? e.x, t);
        fx.root.position.z = THREE.MathUtils.lerp(e.y, e.toY ?? e.y, t);
        fx.root.rotation.y = Math.atan2(
          (e.toX ?? e.x) - e.x,
          (e.toY ?? e.y) - e.y,
        );
      }
      if (fx.ring) {
        fx.root.scale.setScalar(
          0.5 + t * (/circle|hercules/.test(type) ? 6 : 2.4),
        );
        fx.root.position.y = /shield/.test(type)
          ? 0.8 + Math.sin(t * Math.PI) * 0.4
          : 0.04;
      }
    }
    for (const [id, fx] of this.effects)
      if (!seen.has(id)) {
        disposeObject(fx.root, true);
        fx.label?.remove();
        this.effects.delete(id);
      }
  }
  equipmentPreview(player) {
    if (!this.renderer) return "";
    const key = wardrobeKey(player);
    if (this.previewKey === key) return this.previewData;
    if (!this.previewRenderer) {
      this.previewRenderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      });
      this.previewRenderer.setSize(380, 420);
      this.previewRenderer.setPixelRatio(1);
      this.previewRenderer.outputColorSpace = THREE.SRGBColorSpace;
      this.previewRenderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.previewRenderer.toneMappingExposure = 1.2;
    }
    const scene = new THREE.Scene(),
      rig = makeHumanoid(player);
    scene.add(rig.root);
    rig.root.rotation.y = -0.35;
    if (rig.licensed) {
      setAnimation(rig, "Idle_Loop", 0);
      rig.mixer.update(0.4);
    }
    scene.add(new THREE.HemisphereLight("#edf4ef", "#687563", 2.8));
    const light = new THREE.DirectionalLight("#fff1d4", 3.4);
    light.position.set(-3, 5, 5);
    scene.add(light);
    const camera = new THREE.PerspectiveCamera(30, 380 / 420, 0.1, 50);
    camera.position.set(3.5, 2.6, 6.1);
    camera.lookAt(0, 1.38, 0);
    this.previewRenderer.render(scene, camera);
    const result = this.previewRenderer.domElement.toDataURL("image/png");
    disposeObject(rig.root, true);
    this.previewKey = key;
    this.previewData = result;
    return result;
  }
  getDebugState() {
    const record = this.self ? this.entities.get(this.self.id) : null,
      rig = record?.rig;
    const bone = (name) => {
      const b = rig?.bones?.[name];
      return b
        ? {
            position: b.position.toArray().map((n) => +n.toFixed(4)),
            quaternion: b.quaternion.toArray().map((n) => +n.toFixed(4)),
          }
        : null;
    };
    return {
      engine: "three",
      modelLoaded: !!this.modelLoaded,
      avatarCount: [...this.entities.values()].filter((e) => e.rig.root.visible)
        .length,
      cameraZoom: this.camera?.zoom || 1,
      projection: this.camera
        ? {
            origin: this.worldToScreen(0, 0),
            x: this.worldToScreen(1, 0),
            y: this.worldToScreen(0, 1),
            elevation: this.worldToScreen(0, 0, 1),
          }
        : null,
      player: record
        ? {
            animation:
              rig.animation ||
              (record.jumping
                ? "procedural jump"
                : record.motion > 0.1
                  ? "procedural run"
                  : "procedural idle"),
            animationTime: +((rig.animationTime || this.clock) % 100).toFixed(
              4,
            ),
            rootPosition: rig.root.position.toArray().map((n) => +n.toFixed(3)),
            boneRotations: {
              hand_r: bone("hand_r"),
              calf_r: bone("calf_r"),
              thigh_r: bone("thigh_r"),
              spine_03: bone("spine_03"),
            },
            gearSlots: { ...this.self.equipment },
            visibleEquipmentMeshes: rig.nodes
              ? Object.values(rig.nodes)
                  .filter(
                    (n) => n.isMesh && n.visible && n.name.startsWith("Gear_"),
                  )
                  .map((n) => n.name)
              : [],
          }
        : null,
      drawCalls: this.renderer?.info.render.calls || 0,
      triangles: this.renderer?.info.render.triangles || 0,
    };
  }
  destroy() {
    this.environment?.dispose?.();
    for (const e of this.entities.values()) {
      disposeObject(e.rig.root, true);
      e.label.el.remove();
    }
    this.entities.clear();
    this.canvas?.removeEventListener("wheel", this.onWheel);
    this.labels?.remove();
    this.renderer?.dispose();
    this.canvas?.remove();
    this.previewRenderer?.dispose();
  }
}
