import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

// The world is built entirely from three-dimensional geometry. Logical x/y map
// directly to Three's x/z; the authoritative collision footprints stay intact.
export function createEnvironment(scene, zoneDef, zoneId = zoneDef.id) {
  const group = new THREE.Group();
  group.name = `world-${zoneId}`;
  const landscape = new THREE.Group();
  const animated = new THREE.Group();
  group.add(landscape, animated);
  const random = seeded(zoneId === "city" ? 4294 : 5065);
  const city = zoneId === "city";
  const gardenAreas = city
    ? [
        { x: 8.8, z: 20.7, w: 5.0, d: 2.1, angle: -0.11 },
        { x: 23.1, z: 14.8, w: 5.8, d: 3.0, angle: 0.12 },
        { x: 37.5, z: 27.5, w: 6.6, d: 2.6, angle: -0.16 },
        { x: 27.1, z: 33.4, w: 3.1, d: 5.0, angle: -0.12 },
        { x: 20.0, z: 33.0, w: 2.2, d: 5.1, angle: 0.08 },
        { x: 11.9, z: 25.5, w: 1.5, d: 3.7, angle: -0.08 },
      ]
    : [];
  const animatedWater = [],
    lanterns = [],
    petals = [],
    koi = [],
    occluders = [],
    banners = [],
    bannerPaintings = [];
  const textures = [];
  const material = (color, extra = {}) =>
    new THREE.MeshStandardMaterial({ color, roughness: 0.84, ...extra });
  const palette = {
    stone: material("#aab3b8"),
    stoneDark: material("#59666e"),
    stoneLight: material("#d4d3c5"),
    plaster: material("#d4cdc0"),
    plasterWarm: material("#bbb4a7"),
    plasterGray: material("#b5c1c4"),
    red: material("#98382f"),
    redLight: material("#c6533c"),
    wood: material("#4e3531"),
    woodDark: material("#262f35"),
    roof: material("#293f52", { roughness: 0.35, metalness: 0.22 }),
    roofLight: material("#3d5263", { roughness: 0.58 }),
    roofDark: material("#192d40", { roughness: 0.64 }),
    roofRust: material("#4a424e", { roughness: 0.78 }),
    gold: material("#d2a15c", { metalness: 0.47, roughness: 0.43 }),
    moss: material("#486454"),
    bark: material("#574637"),
    barkPale: material("#7c7053"),
    bamboo: material("#6e8651"),
    bambooJoint: material("#a3a66f"),
    leaf: material("#3c665a"),
    leafLight: material("#648e70"),
    leafDark: material("#244e45"),
    cherry: material("#dca7af"),
    cherryLight: material("#f1c9cc"),
    grass: material("#7b9056"),
    grassDark: material("#557748"),
    earth: material("#5a625d"),
    sand: material("#7b817b"),
    ceramic: material("#5d847c", { roughness: 0.58 }),
    cloth: material("#bf9c6b"),
    clothRed: material("#b1332a"),
    iron: material("#4c5350", { metalness: 0.55, roughness: 0.5 }),
    lantern: material("#d84d2e", {
      emissive: "#ff6d2c",
      emissiveIntensity: 1.05,
      roughness: 0.7,
    }),
    lampPaper: material("#ebce91", {
      emissive: "#efad59",
      emissiveIntensity: 0.5,
      roughness: 0.6,
    }),
    window: material("#dcb47d", {
      emissive: "#eea550",
      emissiveIntensity: 0.55,
      roughness: 0.65,
    }),
    water: material("#244d55", {
      metalness: 0.2,
      roughness: 0.25,
      transparent: true,
      opacity: 0.91,
    }),
    waterDeep: material("#172f3d", { roughness: 0.7 }),
  };
  // Fine grain remains visible on close camera zooms instead of presenting
  // completely uniform plastic walls and beams.
  const stucco = canvasTexture((ctx, n) => {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, n, n);
    for (let i = 0; i < 17000; i++) {
      ctx.fillStyle = i % 4 ? "rgba(109,103,81,.07)" : "rgba(87,90,68,.10)";
      ctx.fillRect(
        random() * n,
        random() * n,
        0.5 + random() * 2.3,
        0.5 + random() * 1.5,
      );
    }
    for (let i = 0; i < 80; i++) {
      ctx.strokeStyle = "rgba(132,121,91,.025)";
      ctx.lineWidth = 1 + random() * 2;
      const x = random() * n;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + random() * 25, n);
      ctx.stroke();
    }
  });
  const grain = canvasTexture((ctx, n) => {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, n, n);
    for (let i = 0; i < 230; i++) {
      const x = random() * n;
      ctx.strokeStyle = i % 3 ? "rgba(84,66,47,.05)" : "rgba(67,49,32,.12)";
      ctx.lineWidth = 0.4 + random() * 1.6;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.bezierCurveTo(x + 5, n / 3, x - 4, (n * 2) / 3, x + 2, n);
      ctx.stroke();
    }
  });
  textures.push(stucco, grain);
  for (const key of [
    "plaster",
    "plasterWarm",
    "plasterGray",
    "stone",
    "stoneDark",
    "stoneLight",
  ])
    palette[key].map = stucco;
  for (const key of ["red", "redLight", "wood", "woodDark"])
    palette[key].map = grain;
  const helper = new THREE.Object3D();
  const mesh = (parent, geometry, mat, x = 0, y = 0, z = 0, shadow = true) => {
    const object = new THREE.Mesh(geometry, mat);
    object.position.set(x, y, z);
    object.castShadow = shadow;
    object.receiveShadow = true;
    parent.add(object);
    return object;
  };
  const box = (p, w, h, d, mat, x, y, z, shadow = true) =>
    mesh(p, new THREE.BoxGeometry(w, h, d), mat, x, y, z, shadow);
  const cyl = (p, r1, r2, h, mat, x, y, z, segments = 10) =>
    mesh(p, new THREE.CylinderGeometry(r1, r2, h, segments), mat, x, y, z);
  const ball = (p, rx, ry, rz, mat, x, y, z, segments = 8) => {
    const o = mesh(
      p,
      new THREE.SphereGeometry(1, segments, Math.max(4, segments / 2)),
      mat,
      x,
      y,
      z,
    );
    o.scale.set(rx, ry, rz);
    return o;
  };
  const beam = (p, a, b, r, mat, r2 = r) => {
    const start = new THREE.Vector3(...a),
      end = new THREE.Vector3(...b),
      dir = end.clone().sub(start);
    const o = mesh(p, new THREE.CylinderGeometry(r2, r, dir.length(), 7), mat);
    o.position.copy(start.add(end).multiplyScalar(0.5));
    o.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.normalize(),
    );
    return o;
  };
  const torus = (p, radius, tube, mat, x, y, z) =>
    mesh(p, new THREE.TorusGeometry(radius, tube, 6, 42), mat, x, y, z);
  const stoneBlock = (p, w, h, d, mat, x, y, z) =>
    mesh(p, beveledBox(w, h, d, 0.055), mat, x, y, z);

  // Subtle color variations and aggregate give the stone a tactile surface at
  // close range without loading a single texture image from another game.
  const paving = canvasTexture((ctx, n) => {
    ctx.fillStyle = "#26333b";
    ctx.fillRect(0, 0, n, n);
    for (let j = 0; j < 8; j++)
      for (let i = 0; i < 8; i++) {
        const v = Math.floor(random() * 20);
        ctx.fillStyle = `rgb(${70 + v},${83 + v},${89 + v})`;
        const x = i * 64 + (j % 2) * 32;
        for (const offset of [-512, 0]) {
          ctx.fillRect(x + offset + 2, j * 64 + 2, 60, 60);
          ctx.strokeStyle = "rgba(158,174,177,.10)";
          ctx.lineWidth = 1;
          ctx.strokeRect(x + offset + 3, j * 64 + 3, 58, 58);
          for (let k = 0; k < 35; k++) {
            ctx.fillStyle =
              k % 2 ? "rgba(69,74,57,.09)" : "rgba(241,227,198,.12)";
            ctx.fillRect(
              x + offset + random() * 60 + 2,
              j * 64 + random() * 60 + 2,
              random() * 3 + 1,
              1,
            );
          }
        }
      }
  });
  paving.repeat.set(4, 4);
  textures.push(paving);
  const earthTex = canvasTexture((ctx, n) => {
    ctx.fillStyle = city ? "#46534e" : "#8a8374";
    ctx.fillRect(0, 0, n, n);
    for (let k = 0; k < 20000; k++) {
      ctx.fillStyle = k % 3 ? "rgba(208,197,142,.05)" : "rgba(43,76,42,.09)";
      ctx.fillRect(
        random() * n,
        random() * n,
        random() * 12 + 1,
        random() * 3 + 1,
      );
    }
    for (let k = 0; k < 45; k++) {
      const x = random() * n,
        y = random() * n,
        r = random() * 50 + 10;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      grad.addColorStop(0, "rgba(194,181,130,.16)");
      grad.addColorStop(1, "rgba(194,181,130,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
  });
  earthTex.repeat.set(8, 8);
  textures.push(earthTex);
  const groundMat = material(city ? "#ffffff" : "#8da77b", {
    map: earthTex,
    roughness: 1,
  });
  const ground = mesh(
    landscape,
    new THREE.PlaneGeometry(112, 112, 32, 32),
    groundMat,
    24,
    -0.09,
    24,
    false,
  );
  ground.rotation.x = -Math.PI / 2;
  let brocadeImage = null;
  let slateTexture = paving;
  if (typeof window !== "undefined") {
    slateTexture = new THREE.TextureLoader().load(
      `${import.meta.env.BASE_URL}art/materials/worn-slate.webp`,
    );
    slateTexture.colorSpace = THREE.SRGBColorSpace;
    slateTexture.wrapS = slateTexture.wrapT = THREE.RepeatWrapping;
    slateTexture.anisotropy = 8;
    textures.push(slateTexture);
    const brocadeTexture = new THREE.TextureLoader().load(
      `${import.meta.env.BASE_URL}art/materials/dragon-brocade.webp`,
      (texture) => {
        brocadeImage = texture.image;
        for (const painting of bannerPaintings) {
          paintBanner(painting.canvas, painting.text, brocadeImage);
          painting.texture.needsUpdate = true;
        }
      },
    );
    brocadeTexture.colorSpace = THREE.SRGBColorSpace;
    textures.push(brocadeTexture);
  }
  const pavingMat = material("#ffffff", {
    map: slateTexture,
    bumpMap: slateTexture,
    bumpScale: 0.055,
    roughness: 0.91,
  });
  const groundUV = (object) => {
    object.updateMatrix();
    const position = object.geometry.attributes.position;
    const uv = object.geometry.attributes.uv;
    const point = new THREE.Vector3();
    for (let i = 0; i < position.count; i++) {
      point.fromBufferAttribute(position, i).applyMatrix4(object.matrix);
      uv.setXY(i, point.x / 4.4, point.z / 4.4);
    }
    uv.needsUpdate = true;
  };
  if (city) {
    // The citadel grew around two slate causeways, with mossed ground between
    // them. Narrow flagstone approaches lead to each hall rather than one giant
    // uniform tiled square.
    const causeway = (ax, az, bx, bz, width) => {
      const dx = bx - ax,
        dz = bz - az;
      const road = box(
        landscape,
        width,
        0.045,
        Math.hypot(dx, dz),
        pavingMat,
        (ax + bx) / 2,
        -0.037,
        (az + bz) / 2,
        false,
      );
      road.rotation.y = Math.atan2(dx, dz);
      groundUV(road);
    };
    causeway(5, 24, 44, 24, 5.3);
    causeway(24, 5, 24, 44, 4.8);
    causeway(14.5, 20, 24, 23, 3.2);
    causeway(30.5, 18.5, 26, 23, 3.0);
    causeway(15, 29, 23, 26, 3.0);
    causeway(33, 29.5, 26, 26, 3.1);
    // Planted courtyards interrupt the paved expanse. Beds are shallow and
    // traversable; their silhouettes never imply a new collision obstacle.
    const soil = material("#30473c", { roughness: 1 });
    for (const garden of gardenAreas) {
      const outline = new THREE.Shape();
      const w = garden.w / 2,
        d = garden.d / 2;
      outline.moveTo(-w, -0.2 * d);
      outline.bezierCurveTo(
        -w * 1.08,
        -d * 0.92,
        -w * 0.4,
        -d,
        0.05 * w,
        -d * 0.83,
      );
      outline.bezierCurveTo(
        w * 0.55,
        -d * 1.09,
        w * 1.03,
        -d * 0.62,
        w,
        0.12 * d,
      );
      outline.bezierCurveTo(
        w * 0.92,
        d * 0.8,
        w * 0.37,
        d * 1.05,
        -0.12 * w,
        d * 0.91,
      );
      outline.bezierCurveTo(-w * 0.64, d, -w * 1.08, d * 0.4, -w, -0.2 * d);
      const bed = mesh(
        landscape,
        new THREE.ShapeGeometry(outline, 16),
        soil,
        garden.x,
        -0.005,
        garden.z,
        false,
      );
      bed.rotation.set(-Math.PI / 2, 0, garden.angle);
      // A few embedded stones and ferns, with deliberately incomplete borders.
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 + 0.2;
        const x = garden.x + Math.sin(a) * w * 0.85,
          z = garden.z + Math.cos(a) * d * 0.8;
        rock(landscape, x, z, 0.13 + random() * 0.09, false);
      }
      for (let i = 0; i < 12; i++) {
        const x = garden.x + (random() - 0.5) * garden.w * 0.7,
          z = garden.z + (random() - 0.5) * garden.d * 0.66;
        const length = 0.14 + random() * 0.15;
        for (let j = 0; j < 5; j++) {
          const a = (j / 5) * Math.PI * 2,
            tip = new THREE.Vector3(
              x + Math.sin(a) * length,
              0.12 + random() * 0.14,
              z + Math.cos(a) * length,
            );
          const leaf = ball(
            landscape,
            0.055,
            0.023,
            length * 0.65,
            j % 2 ? palette.leafLight : palette.leaf,
            (x + tip.x) / 2,
            tip.y,
            (z + tip.z) / 2,
            5,
          );
          leaf.rotation.set(-0.4, a, 0);
        }
      }
    }
    // A single world-scaled slate material runs continuously across the court
    // and causeways. The asymmetric perimeter dissolves into mossed earth.
    const court = new THREE.Shape();
    court.moveTo(-6.5, -5.9);
    court.bezierCurveTo(-7.6, -5.6, -7.5, -2.6, -7.15, -0.8);
    court.lineTo(-7.0, 3.9);
    court.quadraticCurveTo(-6.9, 5.7, -4.4, 6.15);
    court.lineTo(3.0, 6.45);
    court.quadraticCurveTo(6.8, 6.5, 7.4, 4.4);
    court.lineTo(7.1, -3.6);
    court.quadraticCurveTo(7.0, -6.2, 4.5, -6.0);
    court.lineTo(-2.4, -6.3);
    court.closePath();
    const courtyard = mesh(
      landscape,
      new THREE.ShapeGeometry(court, 16),
      pavingMat,
      24.5,
      -0.007,
      24.5,
      false,
    );
    courtyard.rotation.x = -Math.PI / 2;
    groundUV(courtyard);
    // Low channel edges and courtyard stone boundaries frame the architecture.
    for (let z = 3; z <= 45; z += 1.25) {
      stoneBlock(landscape, 0.35, 0.16, 1.17, palette.stone, 5.1, 0.02, z);
      stoneBlock(landscape, 0.35, 0.16, 1.17, palette.stone, 44.9, 0.02, z);
    }
  } else {
    // Worn earth sits on the same terrain grain as the meadow. Three vertex
    // rows give it a slight crown, with feathered low edges and uneven width.
    const pathTexture = earthTex.clone();
    pathTexture.repeat.set(1, 1);
    pathTexture.needsUpdate = true;
    textures.push(pathTexture);
    const pathMaterial = material("#b18f6e", {
      map: pathTexture,
      bumpMap: pathTexture,
      bumpScale: 0.055,
      roughness: 1,
      vertexColors: true,
    });
    const pathGeometry = new THREE.BufferGeometry();
    const positions = [],
      uvs = [],
      indices = [],
      colors = [];
    const steps = 86;
    for (let i = 0; i <= steps; i++) {
      const x = 3 + i * 0.5,
        z = 24 + Math.sin((x - 4) * 0.12) * 1.1;
      const width = 2.3 + Math.sin(i * 0.53) * 0.17 + Math.sin(i * 0.19) * 0.24;
      const left = width + (random() - 0.5) * 0.19,
        right = width + (random() - 0.5) * 0.19;
      for (const [zz, height, color] of [
        [z - left, -0.08, [0.69, 0.78, 0.66]],
        [z, -0.031 + Math.sin(i * 0.37) * 0.006, [1, 1, 1]],
        [z + right, -0.08, [0.69, 0.78, 0.66]],
      ]) {
        positions.push(x, height, zz);
        uvs.push(x / 3.8, zz / 3.8);
        colors.push(...color);
      }
      if (i < steps) {
        const n = i * 3;
        for (let j = 0; j < 2; j++)
          indices.push(
            n + j,
            n + j + 1,
            n + j + 3,
            n + j + 1,
            n + j + 4,
            n + j + 3,
          );
      }
    }
    pathGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );
    pathGeometry.setAttribute(
      "normal",
      new THREE.Float32BufferAttribute(new Float32Array(positions.length), 3),
    );
    pathGeometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    pathGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3),
    );
    pathGeometry.setIndex(indices);
    pathGeometry.computeVertexNormals();
    mesh(landscape, pathGeometry, pathMaterial, 0, 0, 0, false);
    for (let i = 0; i < 90; i++) {
      const x = 4 + random() * 40,
        z =
          24 +
          Math.sin((x - 4) * 0.12) * 1.1 +
          (random() > 0.5 ? 1 : -1) * (2.2 + random() * 1.4);
      rock(landscape, x, z, 0.08 + random() * 0.12, false);
    }
  }

  function roof(parent, width, depth, base, rise, roofMat, detail = true) {
    const geometry = new THREE.BufferGeometry();
    const vertices = [],
      uv = [],
      indices = [],
      nx = 24,
      nz = 20;
    const height = (x, z) => {
      const edge = Math.abs(z) / (depth / 2),
        end = Math.abs(x) / (width / 2);
      return (
        base +
        rise * Math.pow(1 - edge, 1.55) +
        0.2 * Math.pow(edge, 6) +
        0.27 * Math.pow(end, 7) * Math.pow(edge, 4)
      );
    };
    for (let j = 0; j <= nz; j++)
      for (let i = 0; i <= nx; i++) {
        const x = (i / nx - 0.5) * width,
          z = (j / nz - 0.5) * depth;
        vertices.push(x, height(x, z), z);
        uv.push(i / nx, j / nz);
        if (i < nx && j < nz) {
          const n = j * (nx + 1) + i;
          indices.push(n, n + nx + 1, n + 1, n + 1, n + nx + 1, n + nx + 2);
        }
      }
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3),
    );
    geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const surface = mesh(parent, geometry, roofMat);
    surface.material.side = THREE.DoubleSide;
    // Individual half-round tile channels follow the curved roof surface.
    if (detail) {
      const spacing = width > 5 ? 0.34 : 0.29;
      const segmentGeometry = new THREE.CylinderGeometry(0.036, 0.036, 1, 5);
      const countX = Math.floor(width / spacing),
        steps = 8,
        count = (countX + 1) * steps * 2;
      const tileLines = new THREE.InstancedMesh(
        segmentGeometry,
        roofMat,
        count,
      );
      let n = 0;
      for (let i = 0; i <= countX; i++)
        for (let side of [-1, 1])
          for (let k = 0; k < steps; k++) {
            const x = (i / countX - 0.5) * (width - 0.12),
              z1 = (side * (k / steps) * depth) / 2,
              z2 = (side * ((k + 1) / steps) * depth) / 2;
            const a = new THREE.Vector3(x, height(x, z1) + 0.035, z1),
              b = new THREE.Vector3(x, height(x, z2) + 0.035, z2),
              direction = b.clone().sub(a);
            helper.position.copy(a.add(b).multiplyScalar(0.5));
            helper.quaternion.setFromUnitVectors(
              new THREE.Vector3(0, 1, 0),
              direction.clone().normalize(),
            );
            helper.scale.set(1, direction.length(), 1);
            helper.updateMatrix();
            tileLines.setMatrixAt(n++, helper.matrix);
          }
      tileLines.castShadow = false;
      tileLines.receiveShadow = true;
      parent.add(tileLines);
    }
    // Curved fascia and finials make the eave silhouette legible from any angle.
    for (const side of [-1, 1]) {
      const points = [];
      for (let i = 0; i <= 18; i++) {
        const x = (i / 18 - 0.5) * width;
        points.push(
          new THREE.Vector3(
            x,
            height(x, (side * depth) / 2) - 0.025,
            (side * depth) / 2,
          ),
        );
      }
      mesh(
        parent,
        new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3(points),
          18,
          0.045,
          5,
          false,
        ),
        palette.roofDark,
      );
    }
    beam(
      parent,
      [-width / 2 - 0.08, base + rise + 0.035, 0],
      [width / 2 + 0.08, base + rise + 0.035, 0],
      0.11,
      roofMat,
    );
    for (const end of [-1, 1]) {
      const x = end * (width / 2 - 0.02);
      const points = [
        new THREE.Vector3(x - end * 0.1, base + rise + 0.03, 0),
        new THREE.Vector3(x + end * 0.16, base + rise + 0.13, 0),
        new THREE.Vector3(x + end * 0.3, base + rise + 0.45, 0),
      ];
      mesh(
        parent,
        new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3(points),
          8,
          0.075,
          6,
          false,
        ),
        palette.gold,
      );
      ball(
        parent,
        0.09,
        0.11,
        0.08,
        palette.gold,
        x + end * 0.29,
        base + rise + 0.43,
        0,
      );
    }
    if (width > 3.8)
      for (const side of [-1, 1])
        ridgeCreature(
          parent,
          side * (width / 2 - 0.13),
          base + rise + 0.1,
          0,
          side,
          width > 7 ? 0.95 : 0.68,
        );
    return surface;
  }

  function lantern(parent, x, y, z, size = 0.42) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    parent.add(g);
    cyl(g, 0.016, 0.016, 0.34, palette.iron, 0, 0.23, 0, 5);
    const body = ball(
      g,
      size * 0.56,
      size * 0.73,
      size * 0.56,
      palette.lantern,
      0,
      -0.18,
      0,
      12,
    );
    cyl(g, size * 0.34, size * 0.34, 0.075, palette.gold, 0, 0.1, 0, 10);
    cyl(g, size * 0.32, size * 0.32, 0.065, palette.gold, 0, -0.47, 0, 10);
    for (let i = 0; i < 8; i++) {
      const a = (i * Math.PI) / 4;
      beam(
        g,
        [Math.sin(a) * size * 0.24, 0.075, Math.cos(a) * size * 0.24],
        [Math.sin(a) * size * 0.49, -0.21, Math.cos(a) * size * 0.49],
        0.009,
        palette.gold,
      );
      beam(
        g,
        [Math.sin(a) * size * 0.49, -0.21, Math.cos(a) * size * 0.49],
        [Math.sin(a) * size * 0.24, -0.45, Math.cos(a) * size * 0.24],
        0.009,
        palette.gold,
      );
    }
    for (let i = 0; i < 3; i++)
      cyl(g, 0.012, 0.009, 0.22, palette.clothRed, (i - 1) * 0.04, -0.6, 0, 4);
    g.userData.dynamic = true;
    lanterns.push({ group: g, phase: random() * 6, body });
    consolidate(g);
    return g;
  }

  function lattice(parent, x, y, z, width = 1.2, height = 1, side = false) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    if (side) g.rotation.y = Math.PI / 2;
    parent.add(g);
    box(g, width, height, 0.06, palette.window, 0, 0, 0);
    for (const sign of [-1, 1]) {
      box(
        g,
        width + 0.12,
        0.1,
        0.12,
        palette.red,
        0,
        (sign * height) / 2,
        0.03,
      );
      box(
        g,
        0.1,
        height + 0.12,
        0.12,
        palette.red,
        (sign * width) / 2,
        0,
        0.03,
      );
    }
    for (let i = -1; i <= 1; i++)
      box(g, 0.035, height, 0.1, palette.woodDark, (i * width) / 4, 0, 0.06);
    for (let i = -1; i <= 1; i++)
      box(g, width, 0.035, 0.1, palette.woodDark, 0, (i * height) / 4, 0.06);
    const diamond = box(g, width * 0.38, 0.035, 0.1, palette.wood, 0, 0, 0.075);
    diamond.rotation.z = Math.PI / 4;
    const diamond2 = box(
      g,
      width * 0.38,
      0.035,
      0.1,
      palette.wood,
      0,
      0,
      0.075,
    );
    diamond2.rotation.z = -Math.PI / 4;
  }

  function ridgeCreature(parent, x, y, z, direction = 1, scale = 1) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = direction < 0 ? Math.PI : 0;
    g.scale.setScalar(scale);
    parent.add(g);
    ball(g, 0.24, 0.14, 0.12, palette.gold, -0.13, 0.15, 0, 10);
    ball(g, 0.14, 0.18, 0.12, palette.gold, 0.11, 0.33, 0, 10);
    ball(g, 0.15, 0.09, 0.1, palette.gold, 0.25, 0.36, 0, 10);
    for (const side of [-1, 1]) {
      ball(g, 0.025, 0.025, 0.018, palette.woodDark, 0.19, 0.39, side * 0.1, 8);
      beam(
        g,
        [-0.23, 0.13, side * 0.08],
        [-0.29, 0.015, side * 0.13],
        0.037,
        palette.gold,
        0.025,
      );
      beam(
        g,
        [0.02, 0.13, side * 0.08],
        [0.08, 0.015, side * 0.13],
        0.032,
        palette.gold,
        0.022,
      );
      const horn = [
        new THREE.Vector3(0.06, 0.43, side * 0.07),
        new THREE.Vector3(0.025, 0.6, side * 0.13),
        new THREE.Vector3(-0.07, 0.64, side * 0.14),
      ];
      mesh(
        g,
        new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3(horn),
          7,
          0.024,
          5,
          false,
        ),
        palette.gold,
      );
    }
    const tail = [
      new THREE.Vector3(-0.28, 0.15, 0),
      new THREE.Vector3(-0.44, 0.21, 0),
      new THREE.Vector3(-0.53, 0.46, 0),
      new THREE.Vector3(-0.7, 0.43, 0),
    ];
    mesh(
      g,
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(tail),
        12,
        0.043,
        6,
        false,
      ),
      palette.gold,
    );
    for (let i = 0; i < 5; i++)
      ball(
        g,
        0.045,
        0.06,
        0.026,
        palette.gold,
        -0.35 + i * 0.1,
        0.3 + Math.sin(i * 0.7) * 0.035,
        0,
        8,
      );
  }

  function paintBanner(canvas, text, image) {
    const c = canvas.getContext("2d"),
      w = canvas.width,
      h = canvas.height;
    c.fillStyle = "#152637";
    c.fillRect(0, 0, w, h);
    if (image) {
      c.save();
      c.globalAlpha = 0.52;
      c.drawImage(image, 0, 0, w, h);
      c.restore();
    }
    c.fillStyle = "rgba(9,24,33,.28)";
    c.fillRect(w * 0.18, h * 0.045, w * 0.64, h * 0.91);
    c.strokeStyle = "#b99759";
    c.lineWidth = 8;
    c.strokeRect(7, 8, w - 14, h - 16);
    c.strokeStyle = "rgba(215,179,103,.45)";
    c.lineWidth = 2;
    c.strokeRect(20, 22, w - 40, h - 44);
    c.font = 'bold 176px "Songti SC", "Noto Serif CJK SC", serif';
    c.textAlign = "center";
    c.textBaseline = "middle";
    [...text].slice(0, 4).forEach((char, i) => {
      c.fillStyle = "rgba(10,15,22,.65)";
      c.fillText(char, w / 2 + 3, 163 + i * 219 + 5);
      c.fillStyle = "#e1be78";
      c.fillText(char, w / 2, 163 + i * 219);
    });
    c.fillStyle = "#a43a30";
    c.fillRect(w * 0.66, h * 0.895, w * 0.19, h * 0.05);
    c.strokeStyle = "#d09b58";
    c.lineWidth = 2;
    c.strokeRect(w * 0.69, h * 0.902, w * 0.13, h * 0.036);
  }

  function banner(parent, x, y, z, width, height, text, rotation = 0) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = rotation;
    parent.add(g);
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 1024;
    paintBanner(canvas, text, brocadeImage);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    textures.push(texture);
    bannerPaintings.push({ canvas, texture, text });
    const mat = material("#ffffff", {
      map: texture,
      side: THREE.DoubleSide,
      roughness: 0.92,
    });
    const cloth = mesh(
      g,
      new THREE.PlaneGeometry(width, height, 8, 20),
      mat,
      0,
      -height / 2,
      0,
      false,
    );
    const original = cloth.geometry.attributes.position.array.slice();
    beam(
      g,
      [-width * 0.64, 0.035, 0],
      [width * 0.64, 0.035, 0],
      0.038,
      palette.gold,
    );
    beam(
      g,
      [-width * 0.54, -height, 0],
      [width * 0.54, -height, 0],
      0.026,
      palette.gold,
    );
    for (const side of [-1, 1]) {
      beam(
        g,
        [side * width * 0.47, -height, 0],
        [side * width * 0.47, -height - 0.28, 0],
        0.012,
        palette.gold,
      );
      ball(
        g,
        0.035,
        0.07,
        0.035,
        palette.clothRed,
        side * width * 0.47,
        -height - 0.29,
        0,
        8,
      );
    }
    banners.push({ group: g, cloth, original, height, phase: random() * 6 });
    return g;
  }

  function festoon(a, b, count = 7, size = 0.42) {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(...a),
      new THREE.Vector3(
        (a[0] + b[0]) / 2,
        (a[1] + b[1]) / 2 - 0.7,
        (a[2] + b[2]) / 2,
      ),
      new THREE.Vector3(...b),
    ]);
    mesh(
      landscape,
      new THREE.TubeGeometry(curve, 32, 0.018, 5, false),
      palette.woodDark,
    );
    for (let i = 0; i < count; i++) {
      const p = curve.getPoint((i + 0.5) / count);
      lantern(animated, p.x, p.y - 0.14, p.z, size * (i % 2 ? 0.95 : 1.12));
    }
  }

  function ceremonialGate() {
    const g = new THREE.Group();
    g.position.set(24, 0, 18);
    landscape.add(g);
    for (const side of [-1, 1]) {
      stoneBlock(g, 0.9, 0.28, 0.9, palette.stoneDark, side * 3.1, 0.12, 0);
      stoneBlock(g, 0.62, 0.46, 0.62, palette.stoneLight, side * 3.1, 0.46, 0);
      cyl(g, 0.23, 0.27, 3.9, palette.red, side * 3.1, 2.56, 0, 12);
      cyl(g, 0.29, 0.29, 0.12, palette.gold, side * 3.1, 0.83, 0, 12);
      cyl(g, 0.3, 0.3, 0.14, palette.gold, side * 3.1, 4.37, 0, 12);
      for (const dz of [-0.25, 0.25])
        beam(
          g,
          [side * 3.1, 3.43, 0],
          [side * 2.34, 4.4, dz],
          0.08,
          palette.redLight,
        );
      const sign = banner(
        animated,
        24 + side * 2.6,
        4.35,
        18.24,
        0.64,
        2.5,
        side < 0 ? "龍門武院" : "天道酬勤",
      );
      lantern(animated, 24 + side * 1.94, 4.17, 18.17, 0.48);
    }
    box(g, 6.9, 0.28, 0.42, palette.red, 0, 4.47, 0);
    box(g, 6.95, 0.07, 0.49, palette.gold, 0, 4.65, 0);
    box(g, 2.0, 0.64, 0.2, palette.woodDark, 0, 4.19, 0.18);
    const seal = torus(g, 0.23, 0.027, palette.gold, 0, 4.22, 0.3);
    box(g, 0.06, 0.4, 0.035, palette.gold, 0, 4.22, 0.33);
    const diagonal = box(g, 0.4, 0.06, 0.035, palette.gold, 0, 4.22, 0.33);
    diagonal.rotation.z = 0.43;
    roof(g, 7.6, 2.6, 4.74, 0.92, palette.roofDark);
    for (const side of [-1, 1]) {
      const curve = [
        new THREE.Vector3(side * 3.5, 4.74, 1.25),
        new THREE.Vector3(side * 2.7, 4.91, 1.25),
        new THREE.Vector3(side * 1.4, 4.98, 1.25),
        new THREE.Vector3(0, 4.99, 1.25),
      ];
      mesh(
        g,
        new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3(curve),
          20,
          0.025,
          5,
          false,
        ),
        palette.gold,
      );
    }
    const light = new THREE.PointLight("#ff9445", 8, 7, 2);
    light.position.set(24, 3.5, 18.8);
    group.add(light);
  }

  function merchantProps() {
    const chest = (x, z, width = 1.05) => {
      const g = new THREE.Group();
      g.position.set(x, 0, z);
      landscape.add(g);
      box(g, width, 0.4, 0.59, palette.wood, 0, 0.25, 0);
      box(g, width + 0.06, 0.07, 0.64, palette.woodDark, 0, 0.07, 0);
      const lid = mesh(
        g,
        new THREE.CylinderGeometry(
          0.305,
          0.305,
          width,
          16,
          1,
          false,
          0,
          Math.PI,
        ),
        palette.red,
        0,
        0.45,
        0,
      );
      lid.rotation.z = Math.PI / 2;
      for (const side of [-1, 1]) {
        box(g, 0.07, 0.4, 0.025, palette.iron, side * width * 0.32, 0.25, 0.31);
        box(
          g,
          0.07,
          0.4,
          0.025,
          palette.iron,
          side * width * 0.32,
          0.25,
          -0.31,
        );
        const arc = [];
        for (let i = 0; i <= 14; i++) {
          const a = (i / 14) * Math.PI;
          arc.push(
            new THREE.Vector3(
              side * width * 0.32,
              0.45 + Math.sin(a) * 0.315,
              Math.cos(a) * 0.315,
            ),
          );
        }
        mesh(
          g,
          new THREE.TubeGeometry(
            new THREE.CatmullRomCurve3(arc),
            14,
            0.018,
            5,
            false,
          ),
          palette.gold,
        );
      }
      box(g, 0.14, 0.18, 0.035, palette.gold, 0, 0.36, 0.33);
      const lock = torus(g, 0.04, 0.012, palette.iron, 0, 0.35, 0.36);
      for (const side of [-1, 1]) {
        const handle = torus(
          g,
          0.065,
          0.016,
          palette.iron,
          side * (width / 2 + 0.016),
          0.31,
          0,
        );
        handle.rotation.y = Math.PI / 2;
      }
    };
    const sack = (x, z, size = 0.26) => {
      const points = [
        [0.1, 0],
        [0.76, 0.2],
        [1, 0.65],
        [0.86, 1.2],
        [0.39, 1.43],
        [0.3, 1.64],
        [0.47, 1.75],
      ].map(([r, y]) => new THREE.Vector2(r * size, y * size));
      const body = mesh(
        landscape,
        new THREE.LatheGeometry(points, 12),
        palette.cloth,
        x,
        0.02,
        z,
      );
      body.rotation.y = random() * 5;
      const tie = torus(
        landscape,
        size * 0.32,
        0.012,
        palette.woodDark,
        x,
        size * 1.55,
        z,
      );
      tie.rotation.x = Math.PI / 2;
      beam(
        landscape,
        [x, size * 1.52, z],
        [x + 0.13, size * 1.36, z + 0.06],
        0.01,
        palette.woodDark,
      );
    };
    const table = (x, z, w = 1.45) => {
      for (const dx of [-w * 0.41, w * 0.41])
        for (const dz of [-0.27, 0.27])
          box(landscape, 0.07, 0.78, 0.07, palette.red, x + dx, 0.41, z + dz);
      box(landscape, w + 0.12, 0.1, 0.76, palette.wood, x, 0.85, z);
      box(landscape, w - 0.1, 0.07, 0.54, palette.woodDark, x, 0.27, z);
      for (let i = 0; i < 4; i++)
        box(
          landscape,
          0.02,
          0.015,
          0.73,
          palette.woodDark,
          x - w * 0.35 + i * w * 0.23,
          0.906,
          z,
          false,
        );
    };
    // Herbalist Lin's portable apothecary: stoppered medicine vessels, a herb
    // tray and tied linen stock, placed beside the street rather than across it.
    table(18.6, 27.0, 1.35);
    for (let i = 0; i < 4; i++)
      jar(landscape, 18.14 + i * 0.3, 0.91, 26.88, 0.1 + (i % 2) * 0.035);
    box(landscape, 0.48, 0.055, 0.32, palette.red, 18.73, 0.94, 27.16);
    for (let i = 0; i < 9; i++) {
      const a = i * 2.4;
      const leaf = ball(
        landscape,
        0.09,
        0.018,
        0.025,
        palette.leafLight,
        18.73 + Math.sin(a) * 0.15,
        0.99 + random() * 0.035,
        27.16 + Math.cos(a) * 0.09,
        6,
      );
      leaf.rotation.y = a;
    }
    sack(17.74, 27.22, 0.22);
    sack(17.9, 27.6, 0.27);
    sack(18.29, 27.65, 0.2);
    chest(19.12, 28.16, 0.94);
    // Master Wu's frontage has a working anvil and a tied rack of unfinished
    // spears. Their forged steel catches the warm key without magical effects.
    table(29.45, 18.25, 1.55);
    box(landscape, 0.37, 0.14, 0.31, palette.iron, 29.32, 1.01, 18.26);
    box(landscape, 0.18, 0.18, 0.19, palette.iron, 29.32, 1.12, 18.26);
    box(landscape, 0.66, 0.11, 0.29, palette.iron, 29.29, 1.26, 18.26);
    const horn = mesh(
      landscape,
      new THREE.ConeGeometry(0.15, 0.34, 8),
      palette.iron,
      29.8,
      1.27,
      18.26,
    );
    horn.rotation.z = -Math.PI / 2;
    box(landscape, 0.15, 0.09, 0.15, palette.iron, 28.97, 1.3, 18.25);
    beam(
      landscape,
      [28.89, 0.94, 18.4],
      [29.12, 0.98, 18.4],
      0.025,
      palette.wood,
    );
    for (const dx of [-0.54, 0.54])
      beam(
        landscape,
        [31.18 + dx, 0.05, 18.05],
        [31.18 + dx, 1.93, 17.87],
        0.038,
        palette.wood,
      );
    beam(
      landscape,
      [30.58, 0.56, 17.99],
      [31.8, 0.56, 17.99],
      0.035,
      palette.red,
    );
    beam(
      landscape,
      [30.58, 1.58, 17.91],
      [31.8, 1.58, 17.91],
      0.035,
      palette.red,
    );
    for (let i = 0; i < 3; i++) {
      const x = 30.83 + i * 0.34;
      beam(landscape, [x, 0.12, 18.04], [x, 2.2, 17.85], 0.021, palette.wood);
      const blade = mesh(
        landscape,
        new THREE.ConeGeometry(0.085, 0.32, 4),
        palette.iron,
        x,
        2.32,
        17.84,
      );
      blade.scale.z = 0.3;
      cyl(landscape, 0.04, 0.04, 0.09, palette.gold, x, 2.13, 17.85, 8);
    }
    chest(32.26, 18.05, 1.07);
  }

  function willow(parent, x, z) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    parent.add(g);
    const trunk = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(-0.15, 1.3, 0.06),
      new THREE.Vector3(0.1, 2.3, 0),
      new THREE.Vector3(0.4, 3.25, 0.1),
    ];
    mesh(
      g,
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(trunk),
        14,
        0.16,
        8,
        false,
      ),
      palette.bark,
    );
    const leaves = new THREE.InstancedMesh(
      new THREE.SphereGeometry(1, 6, 4),
      palette.leafLight,
      1400,
    );
    let index = 0;
    for (let branch = 0; branch < 14; branch++) {
      const a = branch * 2.399,
        reach = 1.2 + random() * 0.8;
      const end = new THREE.Vector3(
        Math.sin(a) * reach,
        2.9 + random() * 0.65,
        Math.cos(a) * reach,
      );
      const stem = [
        new THREE.Vector3(0.15, 2.3, 0),
        new THREE.Vector3(end.x * 0.6, end.y + 0.45, end.z * 0.6),
        end,
      ];
      mesh(
        g,
        new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3(stem),
          12,
          0.035,
          6,
          false,
        ),
        palette.bark,
      );
      for (let strand = 0; strand < 5; strand++) {
        const start = end
          .clone()
          .add(
            new THREE.Vector3(
              (random() - 0.5) * 0.65,
              0,
              (random() - 0.5) * 0.65,
            ),
          );
        const length = 0.95 + random() * 1.35;
        const curve = new THREE.CatmullRomCurve3([
          start,
          new THREE.Vector3(
            start.x + 0.12,
            start.y - length * 0.55,
            start.z + 0.07,
          ),
          new THREE.Vector3(start.x + 0.2, start.y - length, start.z + 0.12),
        ]);
        mesh(
          g,
          new THREE.TubeGeometry(curve, 9, 0.008, 4, false),
          palette.leafDark,
          0,
          0,
          0,
          false,
        );
        for (let leaf = 0; leaf < 20; leaf++) {
          const p = curve.getPoint(leaf / 20);
          helper.position.set(p.x + (leaf % 2 ? 0.065 : -0.065), p.y, p.z);
          helper.rotation.set(0.4, a + leaf * 0.2, 0.2);
          helper.scale.set(0.065, 0.035, 0.125);
          helper.updateMatrix();
          leaves.setMatrixAt(index++, helper.matrix);
        }
      }
    }
    leaves.receiveShadow = true;
    leaves.castShadow = false;
    g.add(leaves);
    consolidate(g);
  }

  function scholarRock(parent, x, z, scale = 1) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.scale.setScalar(scale);
    parent.add(g);
    rock(g, 0, 0, 0.7);
    const loop = mesh(
      g,
      new THREE.TorusGeometry(0.45, 0.16, 10, 28),
      palette.stoneLight,
      0,
      0.92,
      0,
    );
    loop.scale.set(0.8, 1.55, 0.68);
    loop.rotation.z = -0.17;
    ball(g, 0.36, 0.58, 0.25, palette.stoneDark, -0.32, 0.56, 0.04, 12);
    ball(g, 0.24, 0.38, 0.19, palette.stoneLight, 0.25, 1.42, 0.01, 12);
    ball(g, 0.39, 0.09, 0.24, palette.moss, -0.04, 0.38, 0.06, 10);
  }

  function building(o, variant) {
    const g = new THREE.Group();
    const x = o.x + (o.w - 1) / 2,
      z = o.y + (o.h - 1) / 2;
    g.position.set(x, 0, z);
    group.add(g);
    const w = o.w - 0.35,
      d = o.h - 0.35,
      h = variant === 0 ? 4.05 : variant === 1 ? 3.1 : 2.65;
    const wall = [
      palette.plaster,
      palette.plasterGray,
      palette.plasterWarm,
      palette.plaster,
    ][variant];
    stoneBlock(g, w + 0.25, 0.34, d + 0.25, palette.stoneDark, 0, 0.11, 0);
    stoneBlock(g, w, 0.2, d, palette.stone, 0, 0.32, 0);
    box(g, w - 0.42, h - 0.5, d - 0.45, wall, 0, h / 2 + 0.25, -0.1);
    // A recessed front porch, raised within the obstacle rather than the street.
    box(g, w - 0.32, 0.12, 1.1, palette.wood, 0, 0.48, d / 2 - 0.35);
    for (let i = 0; i < 3; i++) {
      box(
        g,
        2.3 - i * 0.15,
        0.1,
        0.33,
        palette.stoneLight,
        0,
        0.07 + i * 0.11,
        d / 2 - 0.12 - i * 0.27,
      );
    }
    const columns = variant === 0 ? 5 : 4;
    for (let i = 0; i < columns; i++) {
      const px = (i / (columns - 1) - 0.5) * (w - 0.45);
      cyl(g, 0.2, 0.24, 0.22, palette.stoneDark, px, 0.57, d / 2 - 0.33, 8);
      cyl(
        g,
        0.12,
        0.15,
        h - 0.5,
        palette.red,
        px,
        h / 2 + 0.4,
        d / 2 - 0.33,
        10,
      );
      cyl(g, 0.19, 0.19, 0.1, palette.gold, px, h - 0.06, d / 2 - 0.33, 8);
      box(g, 0.42, 0.19, 0.3, palette.red, px, h + 0.08, d / 2 - 0.33);
      // Cantilevered dougong brackets with stacked cross blocks.
      box(g, 0.66, 0.11, 0.25, palette.wood, px, h + 0.25, d / 2 - 0.32);
      box(g, 0.23, 0.12, 0.65, palette.redLight, px, h + 0.35, d / 2 - 0.24);
      beam(
        g,
        [px, h - 0.6, d / 2 - 0.33],
        [px + 0.4, h + 0.02, d / 2 - 0.33],
        0.045,
        palette.gold,
      );
      beam(
        g,
        [px, h - 0.6, d / 2 - 0.33],
        [px - 0.4, h + 0.02, d / 2 - 0.33],
        0.045,
        palette.gold,
      );
    }
    for (const side of [-1, 1]) {
      box(
        g,
        0.15,
        h - 0.5,
        d - 0.35,
        palette.red,
        side * (w / 2 - 0.25),
        h / 2 + 0.3,
        -0.1,
      );
      lattice(g, side * (w / 2 - 0.14), h * 0.61, -0.5, 1.6, 1.1, true);
      lattice(g, side * (w * 0.31), h * 0.6, d / 2 - 0.3, 1.3, 1.15);
      box(
        g,
        0.15,
        h - 0.2,
        0.15,
        palette.red,
        side * (w / 2 - 0.2),
        h / 2 + 0.3,
        -d / 2 + 0.2,
      );
    }
    box(g, w + 0.1, 0.22, 0.24, palette.red, 0, h + 0.08, d / 2 - 0.23);
    box(g, w + 0.1, 0.18, 0.24, palette.gold, 0, h + 0.24, d / 2 - 0.23);
    // Paneled double doors and brass hardware.
    for (const side of [-1, 1]) {
      box(g, 0.73, 2.0, 0.09, palette.red, side * 0.39, 1.48, d / 2 - 0.24);
      for (let i = 0; i < 3; i++) {
        box(
          g,
          0.57,
          0.38,
          0.035,
          palette.redLight,
          side * 0.39,
          0.86 + i * 0.55,
          d / 2 - 0.175,
        );
        for (let j = 0; j < 2; j++)
          ball(
            g,
            0.027,
            0.027,
            0.03,
            palette.gold,
            side * 0.39 - 0.18 + j * 0.36,
            0.86 + i * 0.55,
            d / 2 - 0.14,
          );
      }
      const handle = torus(
        g,
        0.065,
        0.015,
        palette.gold,
        side * 0.16,
        1.48,
        d / 2 - 0.11,
      );
      handle.rotation.x = 0.15;
    }
    const signMat = palette.woodDark;
    box(g, 1.85, 0.48, 0.12, signMat, 0, h - 0.12, d / 2 - 0.1);
    // Carved seal motifs are geometry, so the sign still reads in a real camera.
    for (let i = -1; i <= 1; i++) {
      const seal = box(
        g,
        0.16,
        0.16,
        0.03,
        palette.gold,
        i * 0.5,
        h - 0.12,
        d / 2 - 0.025,
      );
      seal.rotation.z = Math.PI / 4;
      box(g, 0.035, 0.27, 0.04, palette.gold, i * 0.5, h - 0.12, d / 2 + 0.005);
    }
    const roofMat =
      variant === 2
        ? palette.roofRust
        : variant === 1
          ? palette.roofLight
          : palette.roof;
    roof(g, w + 1.05, d + 0.95, h + 0.36, variant === 0 ? 1.65 : 1.18, roofMat);
    if (variant === 0) {
      // Three receding galleries give the martial hall a recognizable citadel
      // silhouette. Its base remains inside the original collision footprint.
      box(g, 5.6, 1.55, 3.75, palette.red, 0, h + 1.85, -0.12);
      for (const side of [-1, 1]) {
        box(g, 5.9, 0.18, 0.18, palette.gold, 0, h + 2.48, side * 1.9);
        for (let i = 0; i < 7; i++)
          lattice(g, (i - 3) * 0.72, h + 1.92, side * 1.91, 0.5, 0.84);
      }
      roof(g, 6.6, 4.9, h + 2.53, 1.2, palette.roofDark);
      box(g, 3.45, 1.13, 2.45, palette.red, 0, h + 3.8, -0.1);
      for (let i = -1; i <= 1; i++)
        lattice(g, i * 0.88, h + 3.83, 1.18, 0.6, 0.64);
      roof(g, 4.65, 3.65, h + 4.35, 1.05, palette.roof);
      cyl(g, 0.07, 0.12, 1.05, palette.gold, 0, h + 5.8, -0.05, 10);
      for (let i = 0; i < 4; i++)
        ball(
          g,
          0.15 - i * 0.025,
          0.06,
          0.15 - i * 0.025,
          palette.gold,
          0,
          h + 5.45 + i * 0.18,
          -0.05,
          10,
        );
      ball(g, 0.11, 0.16, 0.11, palette.gold, 0, h + 6.32, -0.05, 10);
      for (const s of [-1, 1]) {
        stoneBlock(
          g,
          0.74,
          0.3,
          0.74,
          palette.stoneDark,
          s * (w / 2 - 0.15),
          0.47,
          d / 2 - 0.15,
        );
        // Compact carved guardian lions on the porch plinths.
        ball(
          g,
          0.3,
          0.38,
          0.43,
          palette.stone,
          s * (w / 2 - 0.15),
          0.91,
          d / 2 - 0.15,
        );
        ball(
          g,
          0.26,
          0.28,
          0.24,
          palette.stoneLight,
          s * (w / 2 - 0.15),
          1.36,
          d / 2 + 0.02,
        );
        for (let i = 0; i < 6; i++)
          ball(
            g,
            0.09,
            0.11,
            0.09,
            palette.stoneDark,
            s * (w / 2 - 0.15) + Math.cos(i) * 0.22,
            1.35 + Math.sin(i) * 0.2,
            d / 2 - 0.01,
          );
      }
    } else if (variant === 1) {
      // Apothecary: tall side balcony, jars and medicine cabinet.
      box(g, w - 0.9, 0.16, 0.65, palette.wood, 0, h - 0.25, d / 2 - 0.15);
      for (let i = 0; i < 11; i++)
        box(
          g,
          0.045,
          0.43,
          0.045,
          palette.red,
          (i / 10 - 0.5) * (w - 1),
          h,
          d / 2 + 0.13,
        );
      box(g, w - 0.9, 0.06, 0.08, palette.gold, 0, h + 0.23, d / 2 + 0.13);
      for (let i = 0; i < 4; i++)
        jar(g, -w / 2 + 0.65, 0.5, -1.3 + i * 0.58, 0.25 + random() * 0.1);
    } else if (variant === 2) {
      // Smith: masonry furnace and a tapering chimney, all within its footprint.
      stoneBlock(
        g,
        1.3,
        1.15,
        1.1,
        palette.stoneDark,
        -w / 2 + 0.9,
        0.95,
        d / 2 - 1.0,
      );
      const mouth = mesh(
        g,
        new THREE.CircleGeometry(0.33, 18),
        palette.woodDark,
        -w / 2 + 0.9,
        0.9,
        d / 2 - 0.43,
      );
      box(
        g,
        0.6,
        0.24,
        0.04,
        palette.lantern,
        -w / 2 + 0.9,
        0.75,
        d / 2 - 0.395,
      );
      box(
        g,
        0.65,
        3.5,
        0.65,
        palette.stoneDark,
        -w / 2 + 0.9,
        2.5,
        -d / 2 + 0.9,
      );
      box(g, 0.83, 0.17, 0.83, palette.stone, -w / 2 + 0.9, 4.32, -d / 2 + 0.9);
      box(g, 0.95, 0.19, 0.45, palette.iron, w / 2 - 0.9, 0.88, d / 2 - 0.9);
      box(g, 0.36, 0.49, 0.33, palette.iron, w / 2 - 0.9, 0.6, d / 2 - 0.9);
      box(g, 0.6, 0.14, 0.5, palette.wood, w / 2 - 0.9, 0.37, d / 2 - 0.9);
    } else {
      // Tea house: a fabric shade and hand-built tables on the veranda.
      const awning = box(
        g,
        w - 1,
        0.07,
        0.85,
        palette.clothRed,
        0,
        2.15,
        d / 2 - 0.15,
      );
      awning.rotation.x = 0.12;
      for (let i = 0; i < 9; i++)
        box(
          g,
          0.26,
          0.025,
          0.84,
          palette.cloth,
          (i / 8 - 0.5) * (w - 1.6),
          2.2,
          d / 2 - 0.15,
        );
      for (let side of [-1, 1]) {
        cyl(
          g,
          0.43,
          0.43,
          0.1,
          palette.wood,
          side * 1.8,
          1.1,
          d / 2 - 0.65,
          12,
        );
        cyl(
          g,
          0.07,
          0.12,
          0.62,
          palette.red,
          side * 1.8,
          0.74,
          d / 2 - 0.65,
          8,
        );
        jar(g, side * 1.8, 1.17, d / 2 - 0.65, 0.12);
      }
    }
    // Hanging lanterns are separated from the merged static architecture.
    const lanternGroup = new THREE.Group();
    lanternGroup.position.copy(g.position);
    animated.add(lanternGroup);
    lantern(lanternGroup, -w * 0.38, h - 0.05, d / 2 + 0.13, 0.42);
    lantern(lanternGroup, w * 0.38, h - 0.05, d / 2 + 0.13, 0.42);
    if (variant === 0) {
      banner(
        animated,
        x - w * 0.35,
        h - 0.1,
        z + d / 2 + 0.11,
        0.7,
        2.85,
        "龍門武院",
      );
      banner(
        animated,
        x + w * 0.35,
        h - 0.1,
        z + d / 2 + 0.11,
        0.7,
        2.85,
        "萬古長青",
      );
    } else if (variant === 1)
      banner(
        animated,
        x + w * 0.4,
        h - 0.05,
        z + d / 2 + 0.13,
        0.58,
        2.05,
        "百草生香",
      );
    else if (variant === 3)
      banner(
        animated,
        x - w * 0.39,
        h - 0.06,
        z + d / 2 + 0.13,
        0.55,
        1.9,
        "清風明月",
      );
    consolidate(g);
    // Hide an obstructing roof gracefully if the player passes behind it.
    const fadedMaterials = [];
    g.traverse((child) => {
      if (!child.isMesh) return;
      if (!Array.isArray(child.material)) {
        child.material = child.material.clone();
        child.material.transparent = true;
        child.material.userData.baseOpacity = child.material.opacity;
        fadedMaterials.push(child.material);
      }
    });
    occluders.push({
      group: g,
      materials: fadedMaterials,
      x,
      z,
      w,
      d,
      opacity: 1,
    });
  }

  function jar(parent, x, y, z, size = 0.3) {
    const points = [
      [0.18, 0],
      [0.36, 0.12],
      [0.4, 0.4],
      [0.28, 0.65],
      [0.18, 0.7],
      [0.2, 0.78],
    ].map(([r, h]) => new THREE.Vector2((r * size) / 0.4, (h * size) / 0.4));
    mesh(parent, new THREE.LatheGeometry(points, 12), palette.ceramic, x, y, z);
    cyl(
      parent,
      size * 0.5,
      size * 0.5,
      0.04,
      palette.wood,
      x,
      y + size * 1.98,
      z,
      10,
    );
  }

  function rock(parent, x, z, size, moss = true) {
    const geom = new THREE.DodecahedronGeometry(size, 1);
    const pos = geom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const factor = 0.9 + random() * 0.2;
      pos.setXYZ(
        i,
        pos.getX(i) * factor,
        pos.getY(i) * factor * 0.64,
        pos.getZ(i) * factor,
      );
    }
    geom.computeVertexNormals();
    const m = mesh(parent, geom, palette.stoneDark, x, size * 0.37, z);
    m.rotation.y = random() * 7;
    m.scale.set(1.2, 1, 0.8 + random() * 0.4);
    if (moss && size > 0.4)
      ball(
        parent,
        size * 0.55,
        size * 0.1,
        size * 0.5,
        palette.moss,
        x - size * 0.15,
        size * 0.82,
        z + size * 0.05,
      );
  }

  function tree(parent, x, z, cherry = false, scale = 1) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.scale.setScalar(scale);
    parent.add(g);
    const trunk = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.1, 1.1, 0.03),
      new THREE.Vector3(-0.12, 2.0, -0.06),
      new THREE.Vector3(0.08, 3.25, 0.05),
    ];
    mesh(
      g,
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(trunk),
        10,
        0.14,
        7,
        false,
      ),
      palette.bark,
    );
    const leaves = new THREE.InstancedMesh(
      new THREE.SphereGeometry(1, 8, 5),
      cherry ? palette.cherry : material("#c3ccb0", { roughness: 1 }),
      cherry ? 900 : 540,
    );
    let index = 0;
    for (let limb = 0; limb < 9; limb++) {
      const angle = limb * 2.4 + random() * 0.4,
        height = 1.7 + limb * 0.18,
        length = 1.25 + random() * 0.65;
      const end = new THREE.Vector3(
        Math.sin(angle) * length,
        height + 0.7 + random() * 0.4,
        Math.cos(angle) * length,
      );
      const fork = new THREE.Vector3(end.x * 0.48, height + 0.32, end.z * 0.48);
      beam(
        g,
        [0, height - 0.35, 0],
        fork.toArray(),
        0.075,
        palette.bark,
        0.045,
      );
      beam(g, fork.toArray(), end.toArray(), 0.045, palette.bark, 0.018);
      for (let branch = 0; branch < 2; branch++) {
        const tip = end
          .clone()
          .add(
            new THREE.Vector3(
              (random() - 0.5) * 0.9,
              0.25 + random() * 0.25,
              (random() - 0.5) * 0.8,
            ),
          );
        beam(g, fork.toArray(), tip.toArray(), 0.025, palette.bark, 0.008);
      }
      for (let j = 0; j < (cherry ? 100 : 60); j++) {
        const a = random() * Math.PI * 2,
          r = Math.sqrt(random()),
          yy = (random() - 0.5) * 0.95;
        helper.position.set(
          end.x + Math.sin(a) * r * (cherry ? 0.92 : 0.8),
          end.y + yy,
          end.z + Math.cos(a) * r * (cherry ? 0.78 : 0.66),
        );
        helper.rotation.set(random() * 2, random() * 6, random() * 2);
        const s = cherry ? 0.14 + random() * 0.075 : 0.11 + random() * 0.075;
        helper.scale.set(
          s,
          s * (cherry ? 0.7 : 0.26),
          s * (cherry ? 0.9 : 0.45),
        );
        helper.updateMatrix();
        leaves.setMatrixAt(index, helper.matrix);
        leaves.setColorAt(
          index++,
          new THREE.Color(cherry ? "#e9b4bf" : "#6e8e63").multiplyScalar(
            0.82 + random() * 0.34,
          ),
        );
      }
    }
    leaves.receiveShadow = true;
    leaves.castShadow = true;
    g.add(leaves);
    const roots = 6;
    for (let i = 0; i < roots; i++) {
      const a = (i / roots) * Math.PI * 2;
      beam(
        g,
        [0, 0.26, 0],
        [Math.sin(a) * 0.45, 0.03, Math.cos(a) * 0.45],
        0.07,
        palette.bark,
        0.015,
      );
    }
    if (cherry) {
      for (let i = 0; i < 14; i++)
        petals.push({
          x: x + (random() - 0.5) * 4,
          z: z + (random() - 0.5) * 4,
          y: random() * 4,
          phase: random() * 8,
        });
    }
    consolidate(g);
  }

  function bamboo(parent, x, z, count = 13) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    parent.add(g);
    const leafCount = count * 24;
    const leaves = new THREE.InstancedMesh(
      new THREE.SphereGeometry(1, 5, 3),
      palette.leafLight,
      leafCount,
    );
    let index = 0;
    for (let i = 0; i < count; i++) {
      const a = random() * 6.28,
        r = random() * 0.85,
        px = Math.sin(a) * r,
        pz = Math.cos(a) * r,
        h = 2.5 + random() * 1.8;
      beam(
        g,
        [px, 0, pz],
        [px + 0.18, h, pz + 0.1],
        0.033,
        palette.bamboo,
        0.018,
      );
      for (let y = 0.4; y < h; y += 0.44)
        cyl(
          g,
          0.042,
          0.042,
          0.025,
          palette.bambooJoint,
          px + (0.18 * y) / h,
          y,
          pz + (0.1 * y) / h,
          6,
        );
      for (let branch = 0; branch < 3; branch++) {
        const y = h - 0.4 - branch * 0.53,
          direction = branch % 2 ? -1 : 1,
          tx = px + direction * (0.5 + random() * 0.3),
          tz = pz + (random() - 0.5) * 0.8;
        beam(g, [px, y, pz], [tx, y + 0.25, tz], 0.015, palette.bamboo, 0.006);
        for (let j = 0; j < 8; j++) {
          helper.position.set(
            tx + (random() - 0.5) * 0.54,
            y + 0.15 + random() * 0.25,
            tz + (random() - 0.5) * 0.5,
          );
          helper.rotation.set(random() * 2, random() * 6, random() * 2);
          helper.scale.set(0.2, 0.018, 0.035);
          helper.updateMatrix();
          leaves.setMatrixAt(index++, helper.matrix);
        }
      }
    }
    leaves.receiveShadow = true;
    leaves.castShadow = false;
    g.add(leaves);
    consolidate(g);
  }

  function pond(o) {
    const cx = o.x + (o.w - 1) / 2,
      cz = o.y + (o.h - 1) / 2,
      w = o.w - 0.08,
      d = o.h - 0.08;
    const shape = roundedRect(w, d, city ? 0.65 : 1.15);
    const bottom = mesh(
      landscape,
      new THREE.ShapeGeometry(shape, 12),
      palette.waterDeep,
      cx,
      -0.015,
      cz,
      false,
    );
    bottom.rotation.x = -Math.PI / 2;
    const water = mesh(
      animated,
      new THREE.ShapeGeometry(shape, 18),
      palette.water,
      cx,
      0.036,
      cz,
      false,
    );
    water.rotation.x = -Math.PI / 2;
    water.userData.dynamic = true;
    animatedWater.push(water);
    const perimeter = 2 * (w + d);
    for (let i = 0; i < perimeter / 0.44; i++) {
      const a = (i / (perimeter / 0.44)) * Math.PI * 2;
      // Superellipse follows the pond's generous corner radius.
      const xx =
        Math.sign(Math.sin(a)) *
        Math.pow(Math.abs(Math.sin(a)), 0.4) *
        w *
        0.49;
      const zz =
        Math.sign(Math.cos(a)) *
        Math.pow(Math.abs(Math.cos(a)), 0.4) *
        d *
        0.49;
      rock(landscape, cx + xx, cz + zz, 0.22 + random() * 0.16, true);
    }
    for (let i = 0; i < (city ? 7 : 13); i++) {
      const x = cx + (random() - 0.5) * w * 0.65,
        z = cz + (random() - 0.5) * d * 0.65;
      const pad = cyl(
        landscape,
        0.13 + random() * 0.09,
        0.13,
        0.025,
        palette.leaf,
        x,
        0.065,
        z,
        12,
      );
      pad.rotation.y = random() * 6;
      if (i % 3 === 0) {
        for (let j = 0; j < 5; j++) {
          const a = j * 1.256;
          const petal = ball(
            landscape,
            0.07,
            0.055,
            0.12,
            palette.cherryLight,
            x + Math.sin(a) * 0.06,
            0.13,
            z + Math.cos(a) * 0.06,
          );
          petal.rotation.y = a;
        }
        ball(landscape, 0.045, 0.05, 0.045, palette.gold, x, 0.15, z);
      }
    }
    for (let i = 0; i < 3; i++) {
      const fish = new THREE.Group();
      animated.add(fish);
      ball(
        fish,
        0.07,
        0.045,
        0.25,
        i % 2 ? palette.clothRed : palette.gold,
        0,
        0,
        0,
      );
      const tail = mesh(
        fish,
        new THREE.ConeGeometry(0.1, 0.2, 3),
        palette.clothRed,
        0,
        0,
        -0.24,
      );
      tail.rotation.x = -Math.PI / 2;
      koi.push({
        group: fish,
        cx,
        cz,
        w: w * 0.32,
        d: d * 0.3,
        phase: random() * 6,
        speed: 0.1 + random() * 0.08,
      });
    }
    // Thin rushes along two sheltered edges.
    for (let i = 0; i < 18; i++) {
      const x = cx + (random() - 0.5) * w * 0.78,
        z = cz - d * 0.43 + random() * 0.23;
      for (let j = 0; j < 3; j++) {
        const xx = x + random() * 0.15,
          zz = z + random() * 0.15,
          h = 0.4 + random() * 0.5;
        beam(
          landscape,
          [xx, 0.02, zz],
          [xx + 0.07, h, zz],
          0.013,
          palette.grassDark,
          0.005,
        );
        if (j === 0)
          cyl(landscape, 0.035, 0.035, 0.16, palette.wood, xx + 0.07, h, zz, 5);
      }
    }
  }

  function portal() {
    const { x, y: z } = zoneDef.portal;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = Math.PI / 2;
    landscape.add(g);
    const postMat = city ? palette.red : palette.stoneDark;
    for (const side of [-1, 1]) {
      stoneBlock(g, 0.72, 0.22, 0.72, palette.stone, side * 2.05, 0.1, 0);
      stoneBlock(g, 0.5, 0.35, 0.5, palette.stoneDark, side * 2.05, 0.36, 0);
      cyl(g, 0.19, 0.22, 3.5, postMat, side * 2.05, 2.2, 0, 12);
      cyl(g, 0.25, 0.25, 0.12, palette.gold, side * 2.05, 0.65, 0, 10);
      for (const zz of [-0.3, 0.3])
        beam(
          g,
          [side * 2.05, 2.6, 0],
          [side * 1.4, 3.55, zz],
          0.075,
          palette.wood,
        );
    }
    box(g, 4.7, 0.26, 0.34, postMat, 0, 3.95, 0);
    box(g, 4.7, 0.07, 0.38, palette.gold, 0, 4.1, 0);
    box(g, 1.5, 0.56, 0.17, palette.woodDark, 0, 3.72, 0.12);
    for (let i = -1; i <= 1; i++) {
      const seal = box(g, 0.13, 0.2, 0.03, palette.gold, i * 0.36, 3.72, 0.22);
      seal.rotation.z = 0.2;
    }
    roof(g, 5.3, 1.85, 4.16, 0.76, city ? palette.roof : palette.roofDark);
    const an = new THREE.Group();
    an.position.set(x, 0, z);
    an.rotation.y = Math.PI / 2;
    animated.add(an);
    lantern(an, -1.5, 3.6, 0.1, 0.4);
    lantern(an, 1.5, 3.6, 0.1, 0.4);
    const glowMat = new THREE.MeshStandardMaterial({
      color: "#baae72",
      emissive: "#8eaf8a",
      emissiveIntensity: 0.5,
      metalness: 0.55,
      roughness: 0.4,
    });
    const ring = torus(animated, 1.18, 0.045, glowMat, x, 0.08, z);
    ring.rotation.x = Math.PI / 2;
    const inner = torus(animated, 0.97, 0.018, glowMat, x, 0.08, z);
    inner.rotation.x = Math.PI / 2;
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const glyph = box(
        landscape,
        0.1,
        0.025,
        0.24,
        palette.gold,
        x + Math.sin(a) * 1.4,
        0.055,
        z + Math.cos(a) * 1.4,
        false,
      );
      glyph.rotation.y = a;
    }
  }

  for (const [i, obstacle] of zoneDef.obstacles.entries()) {
    if (obstacle.type === "building") building(obstacle, Math.min(i, 3));
    else if (obstacle.type === "water") pond(obstacle);
    else if (obstacle.type === "tree") {
      const x = obstacle.x + 0.5,
        z = obstacle.y + 0.5;
      if (city && obstacle.y > 34 && obstacle.x > 30)
        bamboo(landscape, x, z, 17);
      else tree(landscape, x, z, city, city ? 1.12 : 1.25);
      for (let k = 0; k < 5; k++)
        rock(
          landscape,
          x + (random() - 0.5) * 1.3,
          z + (random() - 0.5) * 1.3,
          0.12 + random() * 0.13,
          false,
        );
    } else if (obstacle.type === "rock") {
      for (let k = 0; k < 4; k++)
        rock(
          landscape,
          obstacle.x + random() * 1.1,
          obstacle.y + random() * 1.1,
          0.4 + random() * 0.4,
        );
    }
  }
  portal();

  if (city) {
    ceremonialGate();
    merchantProps();
    festoon([18.4, 4.55, 19.0], [29.3, 4.55, 18.3], 8, 0.38);
    festoon([18.0, 3.95, 28.8], [29.6, 3.95, 30.6], 7, 0.34);
    willow(landscape, 7.35, 23.35);
    scholarRock(landscape, 10.25, 24.9, 0.85);
    const pondLight = new THREE.PointLight("#e8ad61", 4, 5, 2);
    pondLight.position.set(9.4, 1.7, 22.3);
    group.add(pondLight);
    // Lamps and quiet garden details sit at the blocked building corners.
    for (const [x, z] of [
      [11, 13],
      [34, 12],
      [12, 36],
      [37, 35],
    ]) {
      stoneBlock(landscape, 0.52, 0.2, 0.52, palette.stoneDark, x, 0.11, z);
      cyl(landscape, 0.07, 0.1, 2.35, palette.wood, x, 1.3, z, 8);
      const cap = box(
        landscape,
        0.65,
        0.07,
        0.08,
        palette.gold,
        x + 0.15,
        2.5,
        z,
      );
      lantern(animated, x + 0.32, 2.2, z, 0.34);
    }
    for (const [x, z] of [
      [10.8, 17],
      [18, 13.5],
      [28.3, 13],
      [31.3, 34.5],
    ]) {
      jar(landscape, x, 0.02, z, 0.32);
      bamboo(landscape, x, z, 4);
    }
    // Perimeter walls are outside the playable one-cell boundary.
    for (let i = 0; i < 24; i++)
      for (const side of [0, 47.5]) {
        stoneBlock(
          landscape,
          1.95,
          0.8,
          0.45,
          palette.stoneDark,
          i * 2 + 0.5,
          0.32,
          side,
        );
        box(
          landscape,
          1.98,
          0.1,
          0.57,
          palette.roofDark,
          i * 2 + 0.5,
          0.78,
          side,
        );
        stoneBlock(
          landscape,
          0.45,
          0.8,
          1.95,
          palette.stoneDark,
          side,
          0.32,
          i * 2 + 0.5,
        );
        box(
          landscape,
          0.57,
          0.1,
          1.98,
          palette.roofDark,
          side,
          0.78,
          i * 2 + 0.5,
        );
      }
  } else {
    // Forest margins give the playable clearing depth without blocking paths.
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2,
        r = 31 + random() * 6;
      tree(
        landscape,
        24 + Math.sin(a) * r,
        24 + Math.cos(a) * r,
        false,
        1.25 + random() * 0.35,
      );
    }
    bamboo(landscape, 15.4, 13.3, 8);
    bamboo(landscape, 29.5, 27.4, 8);
    // A broken roadside shrine lies within an existing rock footprint.
    stoneBlock(landscape, 1.6, 0.18, 1.4, palette.stoneDark, 35.4, 0.12, 34.5);
    stoneBlock(landscape, 0.3, 1.45, 0.32, palette.stone, 35.0, 0.84, 34.5);
    const fallen = stoneBlock(
      landscape,
      0.3,
      1.4,
      0.32,
      palette.stone,
      35.7,
      0.57,
      34.5,
    );
    fallen.rotation.z = 0.7;
    const lintel = stoneBlock(
      landscape,
      1.8,
      0.23,
      0.45,
      palette.stoneDark,
      35.5,
      0.35,
      35.2,
    );
    lintel.rotation.y = -0.25;
  }

  // Grass blades and small flower heads are instanced real volume meshes.
  const blades = [],
    flowers = [];
  const vegetationCount = city ? 1500 : 700;
  for (let i = 0; i < vegetationCount; i++) {
    const x = 1 + random() * 46,
      z = 1 + random() * 46;
    const blocked = zoneDef.obstacles.some(
      (o) =>
        x > o.x - 0.5 &&
        x < o.x + o.w - 0.5 &&
        z > o.y - 0.5 &&
        z < o.y + o.h - 0.5,
    );
    const path = Math.abs(z - (24 + Math.sin((x - 4) * 0.12) * 1.1)) < 2.8;
    const inGarden = gardenAreas.some(
      (g) =>
        ((x - g.x) / (g.w * 0.47)) ** 2 + ((z - g.z) / (g.d * 0.47)) ** 2 < 1,
    );
    const atFoundation =
      city &&
      zoneDef.obstacles.some(
        (o) =>
          o.type === "building" &&
          x > o.x - 0.85 &&
          x < o.x + o.w - 0.15 &&
          z > o.y - 0.85 &&
          z < o.y + o.h - 0.15,
      );
    const keep = city
      ? inGarden
      : !path &&
        (Math.sin(x * 0.54 + z * 0.21) + Math.sin(z * 0.63 - x * 0.13) > 0.28 ||
          zoneDef.obstacles.some(
            (o) => o.type === "tree" && Math.hypot(x - o.x, z - o.y) < 3.5,
          ));
    if (blocked || !keep) continue;
    for (let j = 0; j < (city ? 3 : 1); j++)
      blades.push({
        x: x + (random() - 0.5) * 0.15,
        z: z + (random() - 0.5) * 0.15,
        h: city ? 0.12 + random() * 0.3 : 0.22 + random() * 0.22,
        a: random() * Math.PI * 2,
      });
    if (i % (city ? 12 : 65) === 0) flowers.push({ x, z });
  }
  const grassGeometry = city
    ? new THREE.SphereGeometry(1, 6, 4)
    : grassTuftGeometry();
  const grass = new THREE.InstancedMesh(
    grassGeometry,
    palette.grass,
    blades.length,
  );
  blades.forEach((b, i) => {
    helper.position.set(b.x, city ? b.h / 2 : -0.074, b.z);
    helper.rotation.set(0.13, b.a, 0.13);
    helper.scale.set(
      city ? 0.1 : 0.9,
      city ? b.h * 0.32 : b.h,
      city ? 0.08 : 0.9,
    );
    helper.updateMatrix();
    grass.setMatrixAt(i, helper.matrix);
    grass.setColorAt(
      i,
      new THREE.Color().setHSL(
        0.22 + random() * 0.05,
        0.22,
        0.35 + random() * 0.12,
      ),
    );
  });
  grass.material.side = THREE.DoubleSide;
  grass.receiveShadow = true;
  landscape.add(grass);
  for (const f of flowers) {
    ball(
      landscape,
      city ? 0.05 : 0.028,
      city ? 0.05 : 0.028,
      city ? 0.05 : 0.028,
      city ? palette.cherry : palette.gold,
      f.x,
      city ? 0.3 : 0.15,
      f.z,
      5,
    );
  }
  const petalMesh = new THREE.InstancedMesh(
    new THREE.SphereGeometry(1, 5, 3),
    palette.cherryLight,
    petals.length,
  );
  animated.add(petalMesh);
  // Outlying landforms provide a layered silhouette and real parallax.
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2,
      r = 64 + random() * 8;
    const hill = mesh(
      landscape,
      new THREE.SphereGeometry(1, 12, 8),
      material(i % 2 ? "#72816f" : "#84917b"),
      24 + Math.sin(a) * r,
      -2.8,
      24 + Math.cos(a) * r,
      false,
    );
    hill.scale.set(13 + random() * 8, 7 + random() * 8, 13 + random() * 8);
  }
  consolidate(landscape);
  scene.add(group);

  let lastTime = 0;
  return {
    group,
    update(time = 0, player) {
      const dt = Math.min(0.1, Math.max(0, time - lastTime));
      lastTime = time;
      lanterns.forEach((l) => {
        l.group.rotation.z = Math.sin(time * 0.9 + l.phase) * 0.04;
        l.body.material.emissiveIntensity =
          1.05 + Math.sin(time * 2.4 + l.phase) * 0.06;
      });
      banners.forEach((b) => {
        const p = b.cloth.geometry.attributes.position;
        for (let i = 0; i < p.count; i++) {
          const x = b.original[i * 3],
            y = b.original[i * 3 + 1],
            t = (b.height * 0.5 - y) / b.height;
          p.setXYZ(
            i,
            x,
            y,
            b.original[i * 3 + 2] +
              Math.sin(time * 1.45 + b.phase + x * 5 - t * 3) * 0.065 * t * t,
          );
        }
        p.needsUpdate = true;
        b.cloth.geometry.computeVertexNormals();
        b.group.rotation.z = Math.sin(time * 0.55 + b.phase) * 0.008;
      });
      animatedWater.forEach((w, i) => {
        w.position.y = 0.037 + Math.sin(time * 1.1 + i) * 0.006;
        w.material.roughness = 0.26 + Math.sin(time * 0.5) * 0.03;
      });
      koi.forEach((f) => {
        const a = time * f.speed + f.phase;
        f.group.position.set(
          f.cx + Math.sin(a) * f.w,
          0.075,
          f.cz + Math.cos(a) * f.d,
        );
        f.group.rotation.y = Math.atan2(Math.cos(a) * f.w, -Math.sin(a) * f.d);
      });
      petals.forEach((p, i) => {
        const y = (((p.y - time * 0.22) % 4.2) + 4.2) % 4.2;
        helper.position.set(
          p.x + Math.sin(time * 0.4 + p.phase) * 0.4,
          y,
          p.z + Math.cos(time * 0.3 + p.phase) * 0.25,
        );
        helper.rotation.set(time * 0.6 + p.phase, p.phase, time * 0.7);
        helper.scale.set(0.065, 0.018, 0.045);
        helper.updateMatrix();
        petalMesh.setMatrixAt(i, helper.matrix);
      });
      if (petals.length) petalMesh.instanceMatrix.needsUpdate = true;
      if (player)
        occluders.forEach((o) => {
          // The camera looks northwest. Fade only when a foreground building
          // obscures a nearby player, preserving the rest of the city silhouette.
          const dx = player.x - o.x,
            dz = player.y - o.z;
          const obscures =
            dx < o.w * 0.55 &&
            dz < o.d * 0.55 &&
            dx > -o.w * 0.7 - 2 &&
            dz > -o.d * 0.7 - 2 &&
            dx + dz < 0;
          const target = obscures ? 0.3 : 1;
          o.opacity += (target - o.opacity) * Math.min(1, dt * 8);
          for (const m of o.materials) {
            m.opacity = o.opacity * (m.userData.baseOpacity ?? 1);
            m.depthWrite = o.opacity > 0.8;
          }
        });
    },
    dispose() {
      scene.remove(group);
      const geometries = new Set(),
        materials = new Set();
      group.traverse((object) => {
        if (object.geometry) geometries.add(object.geometry);
        if (object.material)
          (Array.isArray(object.material)
            ? object.material
            : [object.material]
          ).forEach((m) => materials.add(m));
      });
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      textures.forEach((t) => t.dispose());
      Object.values(palette).forEach((m) => m.dispose());
    },
  };
}

function grassTuftGeometry() {
  const positions = [],
    uvs = [],
    indices = [];
  for (let leaf = 0; leaf < 7; leaf++) {
    const angle = leaf * 2.399,
      reach = 0.18 + (leaf % 3) * 0.055,
      height = 0.65 + (leaf % 4) * 0.12;
    const origin = positions.length / 3;
    for (let row = 0; row <= 5; row++) {
      const t = row / 5,
        spread = Math.sin(Math.PI * t) * 0.04 + 0.003;
      const r = reach * t * t;
      for (const side of [-1, 0, 1]) {
        const x = Math.sin(angle) * r + Math.cos(angle) * spread * side;
        const z = Math.cos(angle) * r - Math.sin(angle) * spread * side;
        positions.push(
          x,
          height * t - t * t * 0.17 + (side === 0 ? 0.018 : 0),
          z,
        );
        uvs.push((side + 1) / 2, t);
      }
      if (row < 5)
        for (let col = 0; col < 2; col++) {
          const n = origin + row * 3 + col;
          indices.push(n, n + 3, n + 1, n + 1, n + 3, n + 4);
        }
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function seeded(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function canvasTexture(paint) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 512;
  paint(canvas.getContext("2d"), 512);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 4;
  return texture;
}
function roundedRect(w, h, r) {
  const s = new THREE.Shape();
  const x = -w / 2,
    y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}
function beveledBox(w, h, d, radius) {
  const r = Math.min(radius, h / 3, d / 3, w / 3);
  const shape = roundedRect(w - r * 2, h - r * 2, r);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: Math.max(0.01, d - r * 2),
    bevelEnabled: true,
    bevelThickness: r,
    bevelSize: r,
    bevelSegments: 1,
    steps: 1,
    curveSegments: 2,
  });
  geometry.translate(0, 0, -d / 2 + r);
  return geometry;
}
// Static material batches keep the detailed timber, roof tiles and foliage
// inexpensive: only animated objects and instancing remain separate.
function consolidate(root) {
  root.updateMatrixWorld(true);
  const inverse = root.matrixWorld.clone().invert(),
    batches = new Map(),
    remove = [];
  root.traverse((object) => {
    if (
      !object.isMesh ||
      object.isInstancedMesh ||
      Array.isArray(object.material) ||
      object.userData.dynamic
    )
      return;
    let parent = object.parent;
    while (parent && parent !== root) {
      if (parent.userData.dynamic) return;
      parent = parent.parent;
    }
    const key = `${object.material.uuid}/${object.castShadow ? 1 : 0}/${object.receiveShadow ? 1 : 0}`;
    let batch = batches.get(key);
    if (!batch)
      batches.set(
        key,
        (batch = {
          geometries: [],
          material: object.material,
          cast: object.castShadow,
          receive: object.receiveShadow,
        }),
      );
    let geometry = object.geometry.clone();
    // Normalize all meshes to non-indexed position/normal/UV attributes.
    if (geometry.index) {
      const indexed = geometry;
      geometry = geometry.toNonIndexed();
      indexed.dispose();
    }
    if (!geometry.attributes.uv)
      geometry.setAttribute(
        "uv",
        new THREE.Float32BufferAttribute(
          new Float32Array(geometry.attributes.position.count * 2),
          2,
        ),
      );
    for (const attribute of Object.keys(geometry.attributes))
      if (!["position", "normal", "uv", "color"].includes(attribute))
        geometry.deleteAttribute(attribute);
    geometry.applyMatrix4(inverse.clone().multiply(object.matrixWorld));
    batch.geometries.push(geometry);
    remove.push(object);
  });
  for (const object of remove) {
    object.removeFromParent();
    object.geometry.dispose();
  }
  for (const batch of batches.values()) {
    if (!batch.geometries.length) continue;
    const geometry = mergeGeometries(batch.geometries, false);
    batch.geometries.forEach((g) => g.dispose());
    if (!geometry) continue;
    geometry.computeBoundingSphere();
    const object = new THREE.Mesh(geometry, batch.material);
    object.castShadow = batch.cast;
    object.receiveShadow = batch.receive;
    root.add(object);
  }
}
