import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

// Original martial-fantasy metalwork. Dimensions are in the licensed humanoid's
// 1.786-unit bind pose; bone.attach preserves that pose before animation starts.
const TAU = Math.PI * 2;
const PALETTES = {
  trojan: {
    plate: "#772e31",
    dark: "#231c26",
    cloth: "#34202d",
    metal: "#c5a15c",
    edge: "#f4d996",
    gem: "#cc6652",
  },
  warrior: {
    plate: "#526f83",
    dark: "#25313c",
    cloth: "#354b61",
    metal: "#acb8bd",
    edge: "#e3ded0",
    gem: "#79bacd",
  },
  archer: {
    plate: "#37756c",
    dark: "#243a31",
    cloth: "#355348",
    metal: "#bf9f5e",
    edge: "#f0d7a1",
    gem: "#82d2aa",
  },
  fire: {
    plate: "#953d35",
    dark: "#3a2029",
    cloth: "#b5a98e",
    metal: "#d3ad64",
    edge: "#f3dab0",
    gem: "#f5a160",
  },
  water: {
    plate: "#327d86",
    dark: "#153946",
    cloth: "#649b9d",
    metal: "#c4c4ac",
    edge: "#f0e2ba",
    gem: "#7de0d0",
  },
};
const mat = (c, metalness = 0, roughness = 0.7, extra = {}) =>
  new THREE.MeshStandardMaterial({ color: c, metalness, roughness, ...extra });
const desc = (value) => value?.appearance || value || null;
let brocade;
function brocadeTexture() {
  if (!brocade) {
    brocade = new THREE.TextureLoader().load(
      `${import.meta.env?.BASE_URL || "/"}art/materials/dragon-brocade.webp`,
    );
    brocade.colorSpace = THREE.SRGBColorSpace;
    brocade.wrapS = brocade.wrapT = THREE.RepeatWrapping;
    brocade.anisotropy = 4;
  }
  return brocade;
}
function add(parent, geometry, material, position = [0, 0, 0], scale = null) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...position);
  if (scale) mesh.scale.set(...scale);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}
function sphere(parent, material, p, s, segments = 14) {
  return add(
    parent,
    new THREE.SphereGeometry(1, segments, Math.max(8, segments - 4)),
    material,
    p,
    s,
  );
}
function line(
  parent,
  points,
  material,
  radius = 0.008,
  closed = false,
  segments = 32,
) {
  const curve = new THREE.CatmullRomCurve3(
    points.map((p) => new THREE.Vector3(...p)),
    closed,
  );
  return add(
    parent,
    new THREE.TubeGeometry(curve, segments, radius, 5, closed),
    material,
  );
}
function rod(parent, a, b, radius, material, endRadius = radius) {
  const va = new THREE.Vector3(...a),
    vb = new THREE.Vector3(...b),
    d = vb.clone().sub(va);
  const mesh = add(
    parent,
    new THREE.CylinderGeometry(endRadius, radius, d.length(), 10),
    material,
    va.add(vb).multiplyScalar(0.5).toArray(),
  );
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  return mesh;
}
function polygon(parent, points, material, depth = 0.012, bevel = 0.004) {
  const shape = new THREE.Shape();
  points.forEach((p, i) => (i ? shape.lineTo(...p) : shape.moveTo(...p)));
  shape.closePath();
  return add(
    parent,
    new THREE.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: bevel > 0,
      bevelSize: bevel,
      bevelThickness: bevel,
      bevelSegments: 2,
      steps: 1,
      curveSegments: 3,
    }),
    material,
  );
}
function shell(
  parent,
  rings,
  material,
  start = -Math.PI,
  end = Math.PI,
  segments = 40,
) {
  const positions = [],
    uv = [],
    indices = [];
  for (let j = 0; j < rings.length; j++) {
    const [y, rx, rz, z = 0] = rings[j];
    for (let i = 0; i <= segments; i++) {
      const a = start + ((end - start) * i) / segments;
      positions.push(Math.sin(a) * rx, y, Math.cos(a) * rz + z);
      uv.push(i / segments, j / (rings.length - 1));
      if (j < rings.length - 1 && i < segments) {
        const k = j * (segments + 1) + i;
        indices.push(
          k,
          k + 1,
          k + segments + 1,
          k + 1,
          k + segments + 2,
          k + segments + 1,
        );
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(indices);
  g.computeVertexNormals();
  return add(parent, g, material);
}
function torus(
  parent,
  radius,
  tube,
  material,
  p,
  rotation = [Math.PI / 2, 0, 0],
  scale = [1, 1, 1],
) {
  const m = add(
    parent,
    new THREE.TorusGeometry(radius, tube, 5, 28),
    material,
    p,
    scale,
  );
  m.rotation.set(...rotation);
  return m;
}
function ovalTrim(
  parent,
  y,
  rx,
  rz,
  material,
  start = -Math.PI,
  end = Math.PI,
  z = 0,
  radius = 0.006,
) {
  return line(
    parent,
    Array.from({ length: 33 }, (_, i) => {
      const a = start + ((end - start) * i) / 32;
      return [Math.sin(a) * rx, y, Math.cos(a) * rz + z];
    }),
    material,
    radius,
  );
}
function rivet(parent, p, material, r = 0.007) {
  return sphere(parent, material, p, [r, r, r * 0.5], 8);
}
function jewel(parent, p, materials, size = 0.026) {
  const setting = add(
    parent,
    new THREE.CylinderGeometry(size * 1.12, size * 1.12, 0.012, 8),
    materials.gold,
    p,
  );
  setting.rotation.x = Math.PI / 2;
  const gem = add(
    parent,
    new THREE.OctahedronGeometry(size),
    materials.gem,
    [p[0], p[1], p[2] + 0.011],
    [1, 1.3, 0.45],
  );
  return gem;
}
function feather(parent, x, y, width, height, material, z = 0, bend = 0) {
  const m = polygon(
    parent,
    [
      [x - width * 0.42, y],
      [x + width * 0.38, y + 0.012],
      [x + width * 0.5 + bend, y - height * 0.38],
      [x + bend, y - height],
      [x - width * 0.43 + bend, y - height * 0.55],
    ],
    material,
    0.009,
    0.004,
  );
  m.position.z = z;
  return m;
}
function materialsFor(player, kind, armor) {
  const key =
    player.classId ||
    player.class ||
    (kind === "npc"
      ? player.role === "shop"
        ? "water"
        : player.role === "compose"
          ? "fire"
          : "warrior"
      : "trojan");
  const palette = { ...(PALETTES[key] || PALETTES.trojan) };
  if (armor?.model === "heavy-armor")
    palette.plate = armor.color || palette.plate;
  const metals = key === "warrior" ? 0.78 : 0.65;
  return {
    palette,
    key,
    plate: mat(palette.plate, 0.44, 0.39),
    dark: mat(palette.dark, 0.14, 0.72),
    cloth: mat(palette.cloth, 0.02, 0.87, { side: THREE.DoubleSide }),
    gold: mat(palette.metal, metals, 0.34),
    edge: mat(palette.edge, 0.76, 0.28),
    steel: mat("#b4c7c8", 0.8, 0.27),
    gem: mat(palette.gem, 0.26, 0.19, {
      emissive: palette.gem,
      emissiveIntensity: 0.2,
    }),
    silk: mat("#ffffff", 0.02, 0.77, {
      map: brocadeTexture(),
      side: THREE.DoubleSide,
    }),
  };
}
// Merge all static parts sharing a material on an attachment into one draw call.
function consolidate(group) {
  group.updateMatrixWorld(true);
  const inv = group.matrixWorld.clone().invert(),
    batches = new Map(),
    old = [];
  group.traverse((m) => {
    if (!m.isMesh || m.userData.dynamic || Array.isArray(m.material)) return;
    let p = m.parent;
    while (p && p !== group) {
      if (p.userData.dynamic) return;
      p = p.parent;
    }
    let g = m.geometry.clone();
    if (g.index) {
      const indexed = g;
      g = g.toNonIndexed();
      indexed.dispose();
    }
    for (const key of Object.keys(g.attributes))
      if (!["position", "normal", "uv"].includes(key)) g.deleteAttribute(key);
    if (!g.attributes.uv)
      g.setAttribute(
        "uv",
        new THREE.Float32BufferAttribute(
          new Float32Array(g.attributes.position.count * 2),
          2,
        ),
      );
    const transform = inv.clone().multiply(m.matrixWorld);
    g.applyMatrix4(transform);
    if (transform.determinant() < 0) {
      // Baking a reflected shoulder removes Three's object-level front-face
      // correction, so preserve outward winding in the merged geometry itself.
      for (const attribute of Object.values(g.attributes)) {
        const data = attribute.array,
          size = attribute.itemSize;
        for (let i = 0; i < attribute.count; i += 3)
          for (let j = 0; j < size; j++) {
            const a = (i + 1) * size + j,
              b = (i + 2) * size + j,
              value = data[a];
            data[a] = data[b];
            data[b] = value;
          }
      }
    }
    if (!batches.has(m.material)) batches.set(m.material, []);
    batches.get(m.material).push(g);
    old.push(m);
  });
  old.forEach((m) => {
    m.removeFromParent();
    m.geometry.dispose();
  });
  for (const [material, geometries] of batches) {
    const geometry = mergeGeometries(geometries, false);
    geometries.forEach((g) => g.dispose());
    if (geometry) add(group, geometry, material);
  }
}

/** Dress the bind-pose character. Call BEFORE the first AnimationMixer.update(). */
export function dressMartialCharacter({
  model,
  bones,
  nodes,
  player = {},
  kind = "player",
  armor: armorValue,
  boots: bootsValue,
  helmet: helmetValue,
  garment: garmentValue,
}) {
  const armor = desc(armorValue),
    boots = desc(bootsValue),
    helmet = desc(helmetValue),
    garment = desc(garmentValue);
  const m = materialsFor(player, kind, armor),
    attachments = [],
    animated = [],
    robePanels = [],
    isCaster = ["fire", "water"].includes(m.key),
    heavy = armor?.model === "heavy-armor" || m.key === "warrior";
  model.updateMatrixWorld(true);
  function attach(name, bone, author) {
    if (!bone) return null;
    const group = new THREE.Group();
    group.name = `Martial_${name}`;
    model.add(group);
    author(group);
    consolidate(group);
    model.updateMatrixWorld(true);
    bone.attach(group);
    attachments.push(group);
    return group;
  }
  // Keep the licensed, skinned tunic, sleeves and trousers as a fitted foundation.
  // Only replace its generic accessories; hands remain on their original skin.
  for (const [name, node] of Object.entries(nodes || {})) {
    if (/Gear_Armor_(Pauldron|Bracers|Belt|Sash)|Gear_Hood/.test(name))
      node.visible = false;
  }
  if (helmet && nodes.Hair_Topknot) nodes.Hair_Topknot.visible = false;
  if (!helmet && nodes.Hair_Topknot) nodes.Hair_Topknot.visible = true;

  if (armor || kind === "npc" || kind === "enemy") {
    attach("Cuirass", bones.spine_03, (g) => {
      shell(
        g,
        [
          [1.045, 0.15, 0.112],
          [1.12, 0.175, 0.128],
          [1.27, 0.225, 0.15],
          [1.405, 0.242, 0.135],
          [1.455, 0.19, 0.11],
        ],
        m.dark,
      );
      // A separately raised, scalloped breastplate catches light over the brocade.
      shell(
        g,
        [
          [1.19, 0.19, 0.145],
          [1.29, 0.229, 0.158],
          [1.39, 0.237, 0.147],
          [1.425, 0.19, 0.12],
        ],
        m.plate,
        -1.37,
        1.37,
        26,
      );
      ovalTrim(g, 1.423, 0.193, 0.124, m.gold, -1.42, 1.42, 0, 0.008);
      ovalTrim(g, 1.195, 0.193, 0.15, m.gold, -1.42, 1.42, 0, 0.007);
      // Five true overlapping rows of small curved lamellae, with raised rivets.
      const rows = isCaster || m.key === "archer" ? 3 : 5,
        cols = heavy ? 12 : m.key === "archer" ? 8 : 10;
      for (let row = 0; row < rows; row++) {
        const y = 1.22 - row * 0.037,
          rx = 0.195 - row * 0.007,
          rz = 0.148 - row * 0.004;
        for (let col = 0; col < cols; col++) {
          const a = (col / (cols - 1) - 0.5) * 2.7;
          const panel = new THREE.Group();
          panel.position.set(Math.sin(a) * rx, y, Math.cos(a) * rz);
          panel.rotation.y = a;
          g.add(panel);
          feather(
            panel,
            0,
            0,
            0.049,
            0.052,
            (row + col) % 3 ? m.plate : m.dark,
            0,
          );
          rod(
            panel,
            [-0.02, -0.006, 0.014],
            [0.02, -0.006, 0.014],
            0.003,
            m.gold,
          );
          rivet(panel, [0, -0.013, 0.018], m.edge, 0.004);
        }
      }
      // The chest emblem is modeled, rather than printed on the underlying shirt.
      const emblem = new THREE.Group();
      emblem.position.set(0, 1.324, 0.166);
      g.add(emblem);
      for (const side of [-1, 1]) {
        const wing = polygon(
          emblem,
          [
            [side * 0.012, 0.017],
            [side * 0.055, 0.074],
            [side * 0.142, 0.084],
            [side * 0.104, 0.044],
            [side * 0.14, 0.014],
            [side * 0.077, 0.025],
            [side * 0.053, -0.031],
            [side * 0.018, -0.014],
          ],
          m.gold,
          0.008,
          0.003,
        );
        for (let i = 0; i < 3; i++)
          line(
            emblem,
            [
              [side * 0.03, 0.008 - i * 0.005, 0.015],
              [side * 0.062, 0.04 - i * 0.015, 0.018],
              [side * (0.12 - i * 0.012), 0.063 - i * 0.017, 0.012],
            ],
            m.edge,
            0.0025,
            false,
            12,
          );
      }
      jewel(emblem, [0, 0.012, 0.025], m, 0.027);
      // Crossed silk lapels and a gold standing collar give a martial silhouette.
      const collar = shell(
        g,
        [
          [1.415, 0.122, 0.095],
          [1.467, 0.112, 0.09],
          [1.49, 0.104, 0.085],
        ],
        m.silk,
        -2.5,
        2.5,
        28,
      );
      ovalTrim(g, 1.485, 0.107, 0.088, m.gold, -2.55, 2.55, 0, 0.004);
      line(
        g,
        [
          [-0.11, 1.45, 0.12],
          [-0.077, 1.405, 0.166],
          [0.045, 1.27, 0.168],
        ],
        m.gold,
        0.006,
      );
      line(
        g,
        [
          [0.11, 1.45, 0.12],
          [0.075, 1.4, 0.166],
          [-0.05, 1.27, 0.169],
        ],
        m.edge,
        0.004,
      );
      // Back seam and fan-shaped spinal plates remain visible when travelling away.
      for (let i = 0; i < 4; i++) {
        const p = feather(
          g,
          0,
          1.4 - i * 0.06,
          0.1 + i * 0.015,
          0.075,
          m.plate,
          -0.155,
        );
        p.rotation.y = Math.PI;
      }
    });
    for (const side of [-1, 1]) {
      const suffix = side < 0 ? "r" : "l";
      attach(`DragonShoulder_${suffix}`, bones[`upperarm_${suffix}`], (g) => {
        // The shoulder shell is layered like a wing, with an elevated dragon brow.
        const shoulder = new THREE.Group();
        shoulder.position.set(side * 0.235, 1.443, -0.059);
        shoulder.scale.set(
          side * (isCaster ? 0.72 : m.key === "archer" ? 0.8 : 1),
          isCaster ? 0.82 : 1,
          isCaster ? 0.86 : 1,
        );
        g.add(shoulder);
        sphere(
          shoulder,
          m.dark,
          [0.035, 0.012, 0],
          [heavy ? 0.195 : 0.17, 0.075, 0.15],
        );
        for (let layer = 0; layer < 3; layer++) {
          const x = 0.015 + layer * 0.045,
            y = 0.07 - layer * 0.037;
          polygon(
            shoulder,
            [
              [x - 0.095, y],
              [x - 0.02, y + 0.045],
              [x + 0.108, y + 0.034],
              [x + 0.203, y - 0.005],
              [x + 0.132, y - 0.029],
              [x + 0.162, y - 0.075],
              [x + 0.043, y - 0.043],
              [x - 0.072, y - 0.035],
            ],
            layer === 1 ? m.gold : m.plate,
            0.024,
            0.008,
          ).position.z = -0.065 + layer * 0.017;
          line(
            shoulder,
            [
              [x - 0.08, y + 0.012, 0.002],
              [x + 0.01, y + 0.046, 0.025],
              [x + 0.103, y + 0.029, 0.025],
              [x + 0.175, y - 0.004, 0.005],
            ],
            m.edge,
            0.005,
            false,
            18,
          );
        }
        // Sculpted dragon muzzle, eye, eyebrow and swept openwork horn.
        sphere(shoulder, m.gold, [0.055, 0.029, 0.103], [0.086, 0.04, 0.046]);
        sphere(shoulder, m.plate, [0.065, 0.014, 0.135], [0.06, 0.026, 0.029]);
        line(
          shoulder,
          [
            [-0.015, 0.023, 0.11],
            [0.025, 0.079, 0.125],
            [0.078, 0.075, 0.12],
            [0.13, 0.038, 0.105],
          ],
          m.edge,
          0.007,
          false,
          18,
        );
        line(
          shoulder,
          [
            [0.015, 0.069, 0.08],
            [-0.013, 0.117, 0.045],
            [-0.083, 0.14, -0.015],
            [-0.114, 0.11, -0.07],
          ],
          m.gold,
          0.011,
          false,
          20,
        );
        sphere(
          shoulder,
          m.gem,
          [0.027, 0.043, 0.147],
          [0.012, 0.008, 0.009],
          8,
        );
        for (let i = 0; i < 4; i++)
          rivet(
            shoulder,
            [0.015 + i * 0.037, -0.007 - i * 0.012, 0.106],
            m.edge,
            0.006,
          );
      });
      attach(`Bracer_${suffix}`, bones[`lowerarm_${suffix}`], (g) => {
        const a = side * 0.515,
          b = side * 0.69,
          y = 1.441,
          z = -0.067;
        rod(g, [a, y, z], [b, y, z], 0.058, m.dark, 0.049);
        for (const x of [a, b])
          torus(g, 0.059, 0.008, m.gold, [x, y, z], [0, Math.PI / 2, 0]);
        const brace = new THREE.Group();
        brace.position.set(side * 0.6, y, z + 0.055);
        g.add(brace);
        polygon(
          brace,
          [
            [-0.095, -0.038],
            [-0.078, 0.045],
            [0, 0.062],
            [0.092, 0.037],
            [0.081, -0.038],
            [0, -0.052],
          ],
          m.plate,
          0.016,
          0.006,
        );
        for (let i = 0; i < 3; i++)
          line(
            brace,
            [
              [-0.075 + i * 0.011, -0.025, 0.023],
              [-0.03 + i * 0.015, 0.015, 0.028],
              [0.045 + i * 0.012, 0.025, 0.026],
            ],
            i % 2 ? m.edge : m.gold,
            0.004,
            false,
            12,
          );
        jewel(brace, [0, 0.003, 0.033], m, 0.014);
        if (isCaster) {
          const sleeve = add(
            g,
            new THREE.CylinderGeometry(0.102, 0.061, 0.16, 24, 1, true),
            m.silk,
            [side * 0.63, y, z],
          );
          sleeve.quaternion.setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(side, 0, 0),
          );
          torus(
            g,
            0.103,
            0.006,
            m.gold,
            [side * 0.71, y, z],
            [0, Math.PI / 2, 0],
          );
          torus(
            g,
            0.094,
            0.003,
            m.edge,
            [side * 0.697, y, z],
            [0, Math.PI / 2, 0],
          );
        }
      });
      const tasset = attach(
        `Tassets_${suffix}`,
        isCaster ? bones.pelvis : bones[`thigh_${suffix}`] || bones.pelvis,
        (g) => {
          const x = side * 0.105,
            start = 0.97,
            length = isCaster ? 0.82 : heavy ? 0.38 : 0.33;
          const panel = new THREE.Group();
          panel.position.set(x, start, 0.146);
          panel.rotation.z = side * -0.045;
          g.add(panel);
          polygon(
            panel,
            [
              [-0.095, 0],
              [0.095, 0],
              [0.116, -length * 0.55],
              [0.064, -length],
              [0, -length - 0.035],
              [-0.09, -length * 0.9],
              [-0.113, -length * 0.47],
            ],
            m.silk,
            0.008,
            0.002,
          );
          for (let row = 0; row < 3; row++) {
            const y = -0.022 - row * 0.078,
              w = 0.19 + row * 0.012;
            feather(
              panel,
              0,
              y,
              w,
              0.124,
              row === 1 ? m.dark : m.plate,
              0.024 + (2 - row) * 0.005,
            );
            line(
              panel,
              [
                [-w * 0.4, y - 0.014, 0.045],
                [0, y - 0.026, 0.056],
                [w * 0.4, y - 0.014, 0.045],
              ],
              m.gold,
              0.005,
              false,
              18,
            );
            for (const s of [-1, 1])
              rivet(panel, [s * w * 0.27, y - 0.035, 0.047], m.edge, 0.005);
          }
          if (isCaster) {
            line(
              panel,
              [
                [-0.078, -0.26, 0.012],
                [-0.08, -length * 0.8, 0.012],
                [0, -length + 0.012, 0.012],
                [0.075, -length * 0.8, 0.012],
                [0.075, -0.26, 0.012],
              ],
              m.gold,
              0.006,
              false,
              24,
            );
            for (let i = 0; i < 3; i++)
              jewel(panel, [0, -0.32 - i * 0.085, 0.023], m, 0.013);
          }
        },
      );
      if (isCaster && tasset) {
        // Long silk hangs from the waist; attaching it to a thigh turns a
        // tucked jumping leg into a rigid horizontal board. Only its free hem
        // sways, while short martial plates continue to follow each thigh.
        tasset.traverse((mesh) => {
          if (!mesh.isMesh) return;
          robePanels.push({
            geometry: mesh.geometry,
            base: mesh.geometry.attributes.position.array.slice(),
            side,
          });
        });
      }
    }
    attach("Girdle", bones.pelvis, (g) => {
      if (isCaster) {
        // An ankle-length, flared back and side robe makes the Taoist outline
        // different from the short plated tabard of the two martial classes.
        shell(
          g,
          [
            [0.13, 0.29, 0.22],
            [0.4, 0.26, 0.2],
            [0.7, 0.21, 0.16],
            [0.95, 0.185, 0.145],
          ],
          m.cloth,
          1.42,
          4.86,
          34,
        );
        ovalTrim(g, 0.135, 0.292, 0.222, m.gold, 1.42, 4.86, 0, 0.007);
        for (const a of [1.45, 2.1, 3.15, 4.2, 4.82])
          line(
            g,
            [
              [Math.sin(a) * 0.183, 0.94, Math.cos(a) * 0.148],
              [Math.sin(a) * 0.22, 0.6, Math.cos(a) * 0.177],
              [Math.sin(a) * 0.289, 0.14, Math.cos(a) * 0.222],
            ],
            m.gold,
            0.004,
            false,
            24,
          );
      }
      shell(
        g,
        [
          [0.94, 0.175, 0.137],
          [0.982, 0.184, 0.14],
          [1.025, 0.175, 0.135],
        ],
        m.dark,
      );
      ovalTrim(g, 0.946, 0.179, 0.14, m.gold, -Math.PI, Math.PI, 0, 0.006);
      ovalTrim(g, 1.02, 0.178, 0.139, m.gold, -Math.PI, Math.PI, 0, 0.006);
      const buckle = new THREE.Group();
      buckle.position.set(0, 0.985, 0.16);
      g.add(buckle);
      polygon(
        buckle,
        [
          [-0.064, 0.018],
          [-0.034, 0.048],
          [0.034, 0.048],
          [0.064, 0.018],
          [0.052, -0.035],
          [0, -0.05],
          [-0.052, -0.035],
        ],
        m.gold,
        0.02,
        0.005,
      );
      polygon(
        buckle,
        [
          [-0.045, 0.013],
          [0, 0.033],
          [0.045, 0.013],
          [0.028, -0.025],
          [0, -0.034],
          [-0.028, -0.025],
        ],
        m.dark,
        0.025,
        0.002,
      );
      jewel(buckle, [0, 0, 0.034], m, 0.024);
      for (const side of [-1, 1]) {
        line(
          g,
          [
            [side * 0.08, 0.99, 0.158],
            [side * 0.14, 0.935, 0.15],
            [side * 0.185, 0.89, 0.11],
          ],
          m.gold,
          0.007,
          false,
          18,
        );
        for (let i = 0; i < 3; i++)
          torus(
            g,
            0.012,
            0.0035,
            m.gold,
            [side * (0.14 + i * 0.016), 0.92 - i * 0.014, 0.13 - i * 0.008],
            [0, 0, 0],
          );
      }
    });
  }

  if (boots)
    for (const side of [-1, 1]) {
      const suffix = side < 0 ? "r" : "l",
        bootMetal = boots.type === "iron" ? m.steel : m.plate;
      attach(`Greave_${suffix}`, bones[`calf_${suffix}`], (g) => {
        const leg = new THREE.Group();
        leg.position.x = side * 0.089;
        g.add(leg);
        shell(
          leg,
          [
            [0.15, 0.053, 0.058],
            [0.24, 0.066, 0.067],
            [0.37, 0.075, 0.071],
            [0.46, 0.067, 0.063],
          ],
          m.dark,
        );
        shell(
          leg,
          [
            [0.15, 0.056, 0.071],
            [0.28, 0.071, 0.08],
            [0.43, 0.071, 0.079],
            [0.5, 0.056, 0.067],
          ],
          bootMetal,
          -1.15,
          1.15,
          20,
        );
        line(
          leg,
          [
            [0, 0.17, 0.076],
            [0, 0.29, 0.09],
            [0, 0.43, 0.088],
            [0, 0.515, 0.057],
          ],
          m.gold,
          0.007,
          false,
          26,
        );
        for (const y of [0.2, 0.31, 0.43])
          ovalTrim(leg, y, 0.074, 0.084, m.gold, -0.94, 0.94, 0, 0.005);
        polygon(
          leg,
          [
            [-0.054, 0.48],
            [0, 0.535],
            [0.054, 0.48],
            [0.039, 0.438],
            [0, 0.42],
            [-0.039, 0.438],
          ],
          m.gold,
          0.015,
          0.006,
        ).position.z = 0.053;
        jewel(leg, [0, 0.48, 0.077], m, 0.018);
      });
      attach(`Sabatons_${suffix}`, bones[`foot_${suffix}`], (g) => {
        const foot = new THREE.Group();
        foot.position.x = side * 0.089;
        g.add(foot);
        sphere(foot, m.dark, [0, 0.068, 0.063], [0.067, 0.055, 0.145]);
        for (let layer = 0; layer < 3; layer++) {
          const toe = new THREE.Group();
          toe.position.set(0, 0.101 - layer * 0.012, 0.035 + layer * 0.055);
          foot.add(toe);
          polygon(
            toe,
            [
              [-0.063, 0],
              [0.063, 0],
              [0.058, -0.033],
              [0, -0.047],
              [-0.058, -0.033],
            ],
            bootMetal,
            0.045,
            0.009,
          ).rotation.x = Math.PI / 2;
        }
        ovalTrim(
          foot,
          0.12,
          0.063,
          0.071,
          m.gold,
          -Math.PI,
          Math.PI,
          -0.03,
          0.006,
        );
      });
    }

  if (helmet)
    attach("PhoenixCoronet", bones.Head, (g) => {
      const crownGold = mat(helmet.trim || m.palette.metal, 0.77, 0.3),
        crownDark = mat(helmet.color || m.palette.plate, 0.45, 0.4);
      shell(
        g,
        [
          [1.69, 0.105, 0.1],
          [1.72, 0.115, 0.105],
          [1.745, 0.106, 0.1],
        ],
        crownDark,
        -2.8,
        2.8,
        36,
      );
      ovalTrim(g, 1.698, 0.11, 0.105, crownGold, -2.8, 2.8, 0, 0.006);
      ovalTrim(g, 1.74, 0.11, 0.104, m.edge, -2.8, 2.8, 0, 0.004);
      for (const side of [-1, 1]) {
        const crest = polygon(
          g,
          [
            [side * 0.014, 1.706],
            [side * 0.051, 1.755],
            [side * 0.114, 1.782],
            [side * 0.177, 1.862],
            [side * 0.16, 1.76],
            [side * 0.124, 1.725],
            [side * 0.06, 1.718],
          ],
          crownGold,
          0.013,
          0.005,
        );
        crest.position.z = 0.102;
        line(
          g,
          [
            [side * 0.043, 1.725, 0.127],
            [side * 0.086, 1.753, 0.127],
            [side * 0.126, 1.777, 0.124],
            [side * 0.166, 1.831, 0.118],
          ],
          m.edge,
          0.004,
          false,
          22,
        );
        rod(
          g,
          [side * 0.09, 1.742, -0.03],
          [side * 0.18, 1.82, -0.14],
          0.009,
          crownGold,
          0.003,
        );
        sphere(g, m.gem, [side * 0.18, 1.82, -0.14], [0.012, 0.012, 0.012], 8);
      }
      const front = new THREE.Group();
      front.position.set(0, 1.733, 0.128);
      g.add(front);
      polygon(
        front,
        [
          [0, 0.105],
          [0.034, 0.039],
          [0.027, -0.025],
          [0, -0.045],
          [-0.027, -0.025],
          [-0.034, 0.039],
        ],
        crownGold,
        0.014,
        0.004,
      );
      jewel(front, [0, 0.017, 0.026], m, 0.022);
      line(
        g,
        [
          [-0.09, 1.72, -0.025],
          [0, 1.77, -0.13],
          [0.09, 1.72, -0.025],
        ],
        crownGold,
        0.007,
        false,
        24,
      );
    });

  let cape = null;
  if (garment)
    attach("BrocadeMantle", bones.spine_03, (g) => {
      const width = 0.63,
        length = 1.03,
        nx = 16,
        ny = 26,
        positions = [],
        uv = [],
        indices = [];
      for (let j = 0; j <= ny; j++)
        for (let i = 0; i <= nx; i++) {
          const u = i / nx,
            v = j / ny,
            w = width * (0.63 + v * 0.58),
            x = (u - 0.5) * w;
          positions.push(
            x,
            1.451 - v * length + Math.cos((u - 0.5) * Math.PI) * v * 0.035,
            -0.17 - 0.2 * v * v + Math.cos(u * Math.PI * 6) * v * 0.016,
          );
          uv.push(u, 1 - v);
          if (i < nx && j < ny) {
            const k = j * (nx + 1) + i;
            indices.push(k, k + nx + 1, k + 1, k + 1, k + nx + 1, k + nx + 2);
          }
        }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3),
      );
      geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
      geometry.setIndex(indices);
      geometry.computeVertexNormals();
      const capeMat = mat(garment.color || m.palette.cloth, 0.02, 0.78, {
        side: THREE.BackSide,
        map: brocadeTexture(),
      });
      capeMat.onBeforeCompile = (shader) => {
        shader.fragmentShader = shader.fragmentShader.replace(
          "#include <map_fragment>",
          `
        #ifdef USE_MAP
          vec4 brocadeTexel = texture2D( map, vMapUv );
          float goldThread = smoothstep(0.035, 0.18, brocadeTexel.r - brocadeTexel.b);
          vec3 dyedSilk = diffuseColor.rgb * (0.72 + brocadeTexel.b * 0.7);
          diffuseColor.rgb = mix(dyedSilk, brocadeTexel.rgb * 1.25, goldThread);
          diffuseColor.a *= brocadeTexel.a;
        #endif
      `,
        );
      };
      capeMat.customProgramCacheKey = () => "martial-dyed-brocade-v1";
      const mesh = add(g, geometry, capeMat);
      mesh.userData.dynamic = true;
      const liningMat = mat(garment.color || m.palette.cloth, 0.02, 0.9, {
        side: THREE.FrontSide,
      });
      // Embroidered brocade has actual volume and a colored inner lining.
      const lining = add(g, geometry.clone(), liningMat);
      lining.position.z = 0.004;
      lining.userData.dynamic = true;
      cape = {
        mesh,
        lining,
        base: geometry.attributes.position.array.slice(),
        rows: ny,
        columns: nx,
      };
      animated.push(cape);
      for (const side of [-1, 1]) {
        sphere(g, m.gold, [side * 0.13, 1.432, -0.163], [0.035, 0.024, 0.018]);
        line(
          g,
          [
            [side * 0.13, 1.43, -0.16],
            [side * 0.2, 1.4, -0.1],
            [side * 0.17, 1.39, 0.04],
          ],
          m.gold,
          0.006,
          false,
          16,
        );
      }
    });

  return {
    attachments,
    cape,
    classPalette: m.palette,
    update(time = 0, motion = 0) {
      for (const panel of robePanels) {
        const p = panel.geometry.attributes.position;
        for (let i = 0; i < p.count; i++) {
          const x = panel.base[i * 3],
            y = panel.base[i * 3 + 1],
            z = panel.base[i * 3 + 2];
          const weight = Math.pow(
            THREE.MathUtils.clamp((0.71 - y) / 0.59, 0, 1),
            2,
          );
          p.setXYZ(
            i,
            x + Math.sin(time * 2.1 + panel.side * 0.7) * weight * 0.008,
            y,
            z +
              Math.cos((x - panel.side * 0.105) * 22) * weight * 0.018 +
              Math.sin(time * 2.8 + panel.side * 0.6 - y * 2) *
                weight *
                (0.012 + motion * 0.02),
          );
        }
        p.needsUpdate = true;
        panel.geometry.computeVertexNormals();
      }
      for (const cape of animated) {
        for (const geometry of [cape.mesh.geometry, cape.lining.geometry]) {
          const p = geometry.attributes.position;
          for (let i = 0; i < p.count; i++) {
            const x = cape.base[i * 3],
              y = cape.base[i * 3 + 1],
              z = cape.base[i * 3 + 2],
              t = THREE.MathUtils.clamp((1.451 - y) / 1.03, 0, 1);
            p.setXYZ(
              i,
              x + Math.sin(time * 2.1 - t * 3) * t * 0.018,
              y + Math.sin(time * 2.8 + x * 8) * t * 0.008,
              z -
                motion * 0.18 * t * t +
                Math.sin(time * 3.2 - t * 5 + x * 7) *
                  t *
                  (0.016 + motion * 0.023),
            );
          }
          p.needsUpdate = true;
          geometry.computeVertexNormals();
        }
      }
    },
    dispose() {
      for (const attachment of attachments) attachment.removeFromParent();
    },
  };
}

/** Ornate weapons use +Y along the blade; the renderer mounts that axis to palm +Z. */
export function createMartialWeapon(parent, descriptor = {}) {
  const d = desc(descriptor) || {},
    root = new THREE.Group();
  root.name = `MartialWeapon_${d.model || "sword"}`;
  parent.add(root);
  const silver = mat(d.color || "#bdced1", 0.82, 0.26),
    edge = mat("#e3ece5", 0.9, 0.19),
    gold = mat(d.trim || "#c6a562", 0.76, 0.3),
    dark = mat("#2a252a", 0.1, 0.79),
    red = mat("#913c3c", 0.02, 0.85);
  const gem = mat(d.glow || "#7bc1b6", 0.3, 0.2, {
    emissive: d.glow || "#549b92",
    emissiveIntensity: 0.45,
  });
  const model = d.model || "sword",
    long = ["glaive", "spear"].includes(model),
    staff = ["staff", "wand"].includes(model);
  if (model === "bow") {
    const wood = mat(d.color || "#5b4838", 0.1, 0.6);
    for (const side of [-1, 1]) {
      const points = [
        [0, 0, 0],
        [0.12, side * 0.28, 0],
        [0.18, side * 0.57, 0.015],
        [0.06, side * 0.79, 0.04],
        [-0.02, side * 0.88, 0.065],
      ];
      line(root, points, wood, 0.038, false, 42);
      line(
        root,
        points.map((p) => [p[0] + 0.021, p[1], p[2] + 0.015]),
        gold,
        0.01,
        false,
        42,
      );
      for (let i = 0; i < 3; i++)
        feather(
          root,
          0.17,
          side * (0.4 + i * 0.09),
          0.1,
          0.14,
          gold,
          0.025,
          0.02,
        ).rotation.z = side < 0 ? Math.PI : 0;
    }
    rod(root, [-0.02, -0.88, 0.065], [-0.02, 0.88, 0.065], 0.004, edge);
    rod(root, [0, -0.13, 0], [0, 0.13, 0], 0.045, dark);
    jewel(root, [0, 0, 0.043], { gold, gem }, 0.04);
  } else if (staff) {
    const length = model === "wand" ? 1.2 : 1.8;
    rod(root, [0, -0.65, 0], [0, length - 0.55, 0], 0.025, dark, 0.027);
    for (const y of [-0.61, -0.22, 0.17, length - 0.6]) {
      torus(root, 0.03, 0.009, gold, [0, y, 0]);
      for (let i = 0; i < 2; i++)
        torus(root, 0.027, 0.003, edge, [0, y + 0.025 + i * 0.014, 0]);
    }
    const top = new THREE.Group();
    top.position.y = length - 0.45;
    root.add(top);
    for (const side of [-1, 1]) {
      line(
        top,
        [
          [0, -0.1, 0],
          [side * 0.12, 0.04, 0],
          [side * 0.14, 0.19, 0],
          [side * 0.055, 0.3, 0],
        ],
        gold,
        0.016,
        false,
        28,
      );
      polygon(
        top,
        [
          [side * 0.02, -0.025],
          [side * 0.09, 0.015],
          [side * 0.18, 0.13],
          [side * 0.14, -0.015],
          [side * 0.055, -0.08],
        ],
        silver,
        0.017,
        0.004,
      );
    }
    add(
      top,
      new THREE.OctahedronGeometry(0.11),
      gem,
      [0, 0.18, 0],
      [0.65, 1.4, 0.65],
    );
    torus(top, 0.09, 0.007, gold, [0, 0.18, 0], [0, 0, 0.4]);
  } else {
    if (long) {
      rod(root, [0, -0.85, 0], [0, 1.35, 0], 0.027, dark);
      for (const y of [-0.8, -0.2, 0.2, 1.25]) {
        torus(root, 0.03, 0.007, gold, [0, y, 0]);
        torus(root, 0.03, 0.003, edge, [0, y + 0.025, 0]);
      }
    }
    const bladeRoot = new THREE.Group();
    if (long) bladeRoot.position.y = 1.18;
    root.add(bladeRoot);
    const short = model === "dagger",
      length = short ? 0.65 : long ? 0.86 : 1.3,
      w = d.type === "cleaver" ? 0.23 : short ? 0.1 : 0.145;
    // A forged sweeping profile, raised fuller and bright cutting edge.
    const profile = [
      [-w * 0.42, 0.13],
      [w * 0.44, 0.13],
      [w * 0.45, length * 0.49],
      [w * 0.74, length * 0.8],
      [w * 1.5, length],
      [w * 0.13, length * 0.91],
      [-w * 0.41, length * 0.66],
    ];
    polygon(bladeRoot, profile, silver, 0.027, 0.008).position.z = -0.013;
    polygon(
      bladeRoot,
      [
        [w * 0.41, 0.17],
        [w * 0.42, length * 0.49],
        [w * 0.72, length * 0.8],
        [w * 1.5, length],
        [w * 0.4, length * 0.83],
        [w * 0.22, length * 0.49],
        [w * 0.22, 0.17],
      ],
      edge,
      0.006,
      0.001,
    ).position.z = 0.016;
    line(
      bladeRoot,
      [
        [-w * 0.11, 0.26, 0.021],
        [-w * 0.08, length * 0.62, 0.024],
        [w * 0.28, length * 0.84, 0.025],
      ],
      gold,
      0.005,
      false,
      28,
    );
    for (let i = 0; i < 3; i++)
      polygon(
        bladeRoot,
        [
          [-0.015, 0.3 + i * 0.085],
          [0, 0.33 + i * 0.085],
          [0.015, 0.3 + i * 0.085],
          [0, 0.286 + i * 0.085],
        ],
        gem,
        0.005,
        0.001,
      ).position.z = 0.022;
    const guard = polygon(
      bladeRoot,
      [
        [-0.24, 0.074],
        [-0.18, 0.14],
        [-0.085, 0.12],
        [0, 0.16],
        [0.085, 0.12],
        [0.18, 0.14],
        [0.24, 0.074],
        [0.14, 0.06],
        [0.065, 0.086],
        [0, 0.05],
        [-0.065, 0.086],
        [-0.14, 0.06],
      ],
      gold,
      0.045,
      0.007,
    );
    guard.position.z = -0.022;
    line(
      bladeRoot,
      [
        [-0.205, 0.091, 0.028],
        [-0.13, 0.113, 0.035],
        [0, 0.106, 0.042],
        [0.13, 0.113, 0.035],
        [0.205, 0.091, 0.028],
      ],
      edge,
      0.006,
      false,
      28,
    );
    jewel(bladeRoot, [0, 0.107, 0.05], { gold, gem }, 0.027);
    if (!long) {
      rod(root, [0, -0.23, 0], [0, 0.065, 0], 0.035, dark);
      for (let i = 0; i < 8; i++) {
        const y = -0.2 + i * 0.032;
        line(
          root,
          [
            [-0.033, y, 0.012],
            [0, y + 0.022, 0.035],
            [0.033, y, 0.012],
          ],
          red,
          0.006,
          false,
          10,
        );
      }
      sphere(root, gold, [0, -0.25, 0], [0.055, 0.045, 0.04]);
      for (const side of [-1, 1])
        line(
          root,
          [
            [0, -0.27, 0],
            [side * 0.04, -0.33, 0],
            [side * 0.025, -0.46, 0.01],
          ],
          red,
          0.009,
          false,
          20,
        );
      for (let i = 0; i < 5; i++)
        rod(
          root,
          [(i - 2) * 0.009, -0.44, 0.01],
          [(i - 2) * 0.013, -0.56 - Math.abs(i - 2) * 0.005, 0.012],
          0.004,
          red,
        );
    }
  }
  consolidate(root);
  return root;
}
