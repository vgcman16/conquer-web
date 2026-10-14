import {
  Application,
  Assets,
  Container,
  Graphics,
  Rectangle,
  Sprite,
  Text,
  Texture,
} from "pixi.js";
import { zoneDefs } from "../shared/world.js";

const TILE_X = 32;
const TILE_Y = 16;
const CHUNK = 8;
const TAU = Math.PI * 2;
const COLORS = {
  trojan: "#4b8b89",
  warrior: "#557f9b",
  archer: "#748c50",
  fire: "#ba6651",
  water: "#759fbd",
  taoist: "#759fbd",
};
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const project = (x, y) => ({ x: (x - y) * TILE_X, y: (x + y) * TILE_Y });
const list = (value) =>
  Array.isArray(value)
    ? value
    : value && typeof value === "object"
      ? Object.values(value)
      : [];

function random(seed) {
  let n = seed | 0;
  return () => {
    n += 0x6d2b79f5;
    let t = Math.imul(n ^ (n >>> 15), 1 | n);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeCanvas(width, height) {
  const canvas = document.createElement("canvas");
  canvas.width = Math.ceil(width);
  canvas.height = Math.ceil(height);
  return [canvas, canvas.getContext("2d")];
}

function polygon(ctx, points, fill, stroke, lineWidth = 1) {
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++)
    ctx.lineTo(points[i][0], points[i][1]);
  ctx.closePath();
  if (fill) {
    ctx.fillStyle = fill;
    ctx.fill();
  }
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }
}

function ellipse(ctx, x, y, rx, ry, fill) {
  ctx.beginPath();
  ctx.ellipse(x, y, rx, ry, 0, 0, TAU);
  ctx.fillStyle = fill;
  ctx.fill();
}

function line(ctx, x1, y1, x2, y2, color, width = 1) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
}

function shade(hex, amount) {
  const clean =
    typeof hex === "number"
      ? hex.toString(16).padStart(6, "0")
      : String(hex || "#56765d").replace("#", "");
  const n = parseInt(clean, 16);
  return `rgb(${clamp((n >> 16) + amount, 0, 255)},${clamp(((n >> 8) & 255) + amount, 0, 255)},${clamp((n & 255) + amount, 0, 255)})`;
}

function drawLantern(ctx, x, y, size = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size, size);
  line(ctx, 0, -21, 0, -9, "#523f31", 1);
  const glow = ctx.createRadialGradient(0, 0, 1, 0, 0, 19);
  glow.addColorStop(0, "#ffcf6955");
  glow.addColorStop(1, "#ffcf6900");
  ellipse(ctx, 0, 0, 19, 23, glow);
  ellipse(ctx, 0, 0, 8, 10, "#a74132");
  ellipse(ctx, -1, 0, 5, 8, "#eea755");
  ellipse(ctx, -2, -1, 2, 7, "#ffdc85");
  line(ctx, -5, -9, 5, -9, "#5b352c", 2);
  line(ctx, -5, 9, 5, 9, "#5b352c", 2);
  line(ctx, 0, 10, 0, 18, "#ad4733", 2);
  ctx.restore();
}

function drawGrass(ctx, x, y, rng, color = "#76895b") {
  const height = 3 + rng() * 6;
  line(ctx, x, y, x - 3, y - height, color, 0.75);
  line(ctx, x, y, x, y - height - 2, color, 0.85);
  line(ctx, x, y, x + 4, y - height + 1, color, 0.7);
}

function grassClump(ctx, x, y, rng, city = false) {
  const width = 3 + rng() * 7;
  ellipse(ctx, x + 1, y + 1, width * 0.7, 1.8, "#3549341b");
  for (let blade = 0; blade < 5; blade++) {
    const endX = x + (rng() - 0.5) * width * 1.7;
    const height = 2 + rng() * 7;
    ctx.beginPath();
    ctx.moveTo(x + (rng() - 0.5) * width * 0.45, y);
    ctx.quadraticCurveTo(endX - 1, y - height * 0.55, endX, y - height);
    ctx.strokeStyle = ["#587747a8", "#c4bc7980", "#87965cb5", "#465e3c80"][
      blade % 4
    ];
    ctx.lineWidth = blade === 2 ? 1.1 : 0.65;
    ctx.stroke();
  }
  if (rng() < 0.09) {
    ellipse(ctx, x - 1, y - 5, 1.1, 0.7, city ? "#e5ccb2" : "#e5d093");
    ellipse(ctx, x + 2, y - 3, 1, 0.6, "#d4bb9d");
  }
}

// Frame transparent margins at runtime so generated artwork has a reliable foot anchor.
function frameArtwork(texture, region = texture.frame) {
  try {
    const image = texture.source.resource;
    const bx = region.x,
      by = region.y,
      sw = region.width,
      sh = region.height;
    if (!sw || !sh) return texture;
    const factor = Math.min(1, 256 / Math.max(sw, sh));
    const [canvas, ctx] = makeCanvas(sw * factor, sh * factor);
    ctx.drawImage(image, bx, by, sw, sh, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let minX = canvas.width,
      minY = canvas.height,
      maxX = -1,
      maxY = -1;
    for (let y = 0; y < canvas.height; y++)
      for (let x = 0; x < canvas.width; x++) {
        if (pixels[(y * canvas.width + x) * 4 + 3] > 18) {
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
        }
      }
    if (maxX < 0) return texture;
    const x = Math.max(0, Math.floor((minX - 2) / factor)),
      y = Math.max(0, Math.floor((minY - 2) / factor));
    const width = Math.min(sw - x, Math.ceil((maxX - minX + 5) / factor));
    const height = Math.min(sh - y, Math.ceil((maxY - minY + 5) / factor));
    return new Texture({
      source: texture.source,
      frame: new Rectangle(bx + x, by + y, width, height),
    });
  } catch {
    return texture;
  }
}

function insideObstacle(x, y, obstacles, margin = 0) {
  return obstacles.some(
    (o) =>
      x >= o.x - margin &&
      x <= o.x + (o.w || 1) + margin &&
      y >= o.y - margin &&
      y <= o.y + (o.h || 1) + margin,
  );
}

function terrainType(x, y, zone, def) {
  const sx = def.spawn?.x ?? def.width / 2;
  const sy = def.spawn?.y ?? def.height / 2;
  if (zone === "city") {
    const dx = Math.abs(x - sx),
      dy = Math.abs(y - sy);
    if ((dx <= 6 && dy <= 6) || dx <= 1.7 || dy <= 1.7) return "stone";
    for (const o of def.obstacles || []) {
      if (
        o.type === "pond" &&
        x >= o.x &&
        x < o.x + o.w &&
        y >= o.y &&
        y < o.y + o.h
      )
        return "water";
    }
    return "grass";
  }
  if (
    Math.abs(x - y + 2) < 1.7 ||
    (Math.abs(x - (def.portal?.x ?? sx)) < 1.3 && y < sy + 5)
  )
    return "earth";
  return "grass";
}

function terrainTexture(cx, cy, zone, def) {
  const [canvas, ctx] = makeCanvas(548, 294);
  const ox = 274,
    oy = 25;
  for (let ix = 0; ix < CHUNK; ix++) {
    for (let iy = 0; iy < CHUNK; iy++) {
      const x = cx * CHUNK + ix,
        y = cy * CHUNK + iy;
      const pos = project(ix, iy);
      const px = pos.x + ox,
        py = pos.y + oy;
      const rng = random(x * 7919 + y * 104729 + 21);
      const type = terrainType(x, y, zone, def);
      const t = rng();
      // Grass uses one continuous field color; only the actual paving reveals the grid.
      const color =
        type === "stone"
          ? shade("#aaa990", Math.round(t * 10 - 5))
          : type === "earth"
            ? shade("#9e9472", Math.round(t * 6 - 3))
            : type === "water"
              ? shade("#729b96", Math.round(t * 15 - 8))
              : zone === "city"
                ? "#85936d"
                : "#788c62";
      polygon(
        ctx,
        [
          [px, py - 16.3],
          [px + 32.3, py],
          [px, py + 16.3],
          [px - 32.3, py],
        ],
        color,
      );
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(px, py - 16);
      ctx.lineTo(px + 32, py);
      ctx.lineTo(px, py + 16);
      ctx.lineTo(px - 32, py);
      ctx.closePath();
      ctx.clip();
      if (type === "stone") {
        const wear = rng() * 0.7;
        polygon(
          ctx,
          [
            [px + wear, py - 15],
            [px + 31, py - wear],
            [px - wear, py + 15],
            [px - 31, py + wear],
          ],
          null,
          "#566d4f4c",
          1.1,
        );
        line(ctx, px - 28, py, px, py - 14, "#dbd1ad6a", 0.9);
        line(ctx, px + 1, py + 14, px + 29, py, "#59634d40", 1.4);
        if (rng() < 0.36) {
          const crackX = px - 10 + rng() * 20,
            crackY = py - 9 + rng() * 9;
          line(
            ctx,
            crackX - 6,
            crackY - 6,
            crackX - 2,
            crackY,
            "#59664c60",
            0.65,
          );
          line(
            ctx,
            crackX - 2,
            crackY,
            crackX + 5,
            crackY + 2,
            "#59664c60",
            0.7,
          );
          line(
            ctx,
            crackX + 5,
            crackY + 2,
            crackX + 10,
            crackY + 7,
            "#59664c45",
            0.6,
          );
          if (rng() < 0.3)
            line(
              ctx,
              crackX - 2,
              crackY,
              crackX - 4,
              crackY + 5,
              "#64765350",
              0.6,
            );
        }
        for (let k = 0; k < 24; k++) {
          const a = rng(),
            b = rng(),
            dx = (a - b) * 29,
            dy = (a + b - 1) * 14;
          ellipse(
            ctx,
            px + dx,
            py + dy,
            0.5 + rng() * 3,
            0.3 + rng(),
            rng() > 0.5 ? "#e6d8ac24" : "#5c745227",
          );
        }
        if (rng() < 0.2) {
          for (let m = 0; m < 5; m++)
            ellipse(
              ctx,
              px - 27 + m * 4,
              py - 2 - m * 2,
              3 + rng() * 3,
              1.3,
              "#617c4f66",
            );
          grassClump(ctx, px - 24, py - 1, rng, true);
        }
        const boundary = [
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
        ].some(
          ([dx, dy]) => terrainType(x + dx, y + dy, zone, def) !== "stone",
        );
        if (boundary) {
          for (let m = 0; m < 8; m++) {
            const a = rng(),
              b = rng();
            if (Math.min(a, b, 1 - a, 1 - b) < 0.24) {
              const dx = (a - b) * 32,
                dy = (a + b - 1) * 16;
              ellipse(ctx, px + dx, py + dy, 3 + rng() * 4, 1.5, "#6c85545c");
              grassClump(ctx, px + dx, py + dy, rng, true);
            }
          }
        }
      } else if (type === "water") {
        line(ctx, px - 12, py - 2, px + 5, py - 2, "#c7ddc765", 0.8);
        line(ctx, px + 5, py + 5, px + 21, py + 5, "#bfd8c340", 0.7);
      } else {
        for (let k = 0; k < 26; k++) {
          const a = rng(),
            b = rng(),
            dx = (a - b) * 32,
            dy = (a + b - 1) * 16;
          ellipse(
            ctx,
            px + dx,
            py + dy,
            0.7 + rng() * 4.3,
            0.4 + rng() * 1.4,
            rng() > 0.5 ? "#d3c6841c" : "#344f3422",
          );
        }
        if (type === "grass") {
          for (let k = 0; k < 7; k++) {
            const a = rng(),
              b = rng();
            grassClump(
              ctx,
              px + (a - b) * 29,
              py + (a + b - 1) * 14,
              rng,
              zone === "city",
            );
          }
        }
        if (rng() < 0.07 && type === "grass") {
          const fx = px + rng() * 24 - 12,
            fy = py + rng() * 8 - 4;
          ellipse(ctx, fx, fy, 1.3, 0.7, "#ead0a5");
          ellipse(ctx, fx + 3, fy - 2, 1, 0.6, "#e9caca");
        }
        if (type === "earth")
          for (let k = 0; k < 3; k++)
            ellipse(
              ctx,
              px + rng() * 28 - 14,
              py + rng() * 9 - 4,
              1.5,
              0.8,
              "#8b927353",
            );
      }
      ctx.restore();
    }
  }
  return { texture: Texture.from(canvas), ox, oy };
}

function treeTexture(seed, variant = 0) {
  const [canvas, ctx] = makeCanvas(170, 214);
  const rng = random(seed);
  ellipse(ctx, 94, 192, 57, 15, "#304b3329");
  ellipse(ctx, 86, 188, 22, 8, "#61744835");
  polygon(
    ctx,
    [
      [72, 191],
      [79, 142],
      [74, 103],
      [83, 96],
      [92, 149],
      [98, 190],
    ],
    "#655947",
  );
  polygon(
    ctx,
    [
      [84, 183],
      [83, 140],
      [80, 117],
      [87, 127],
      [90, 180],
    ],
    "#937552",
  );
  line(ctx, 82, 147, 49, 120, "#635443", 6);
  line(ctx, 87, 134, 116, 104, "#6e5c44", 6);
  line(ctx, 78, 187, 64, 195, "#655947", 3);
  line(ctx, 91, 188, 106, 196, "#6d6046", 3);
  const pal =
    variant === 1
      ? ["#aeae6d", "#859a62", "#9ba771", "#637e52", "#bac080"]
      : ["#6b8957", "#557953", "#7f995e", "#93a56c", "#496f51"];
  const clusters = [
    [45, 104, 32],
    [109, 103, 34],
    [78, 65, 41],
    [44, 62, 29],
    [117, 68, 28],
    [80, 109, 39],
    [78, 35, 25],
  ];
  for (let ci = 0; ci < clusters.length; ci++) {
    const [x, y, r] = clusters[ci];
    const points = [];
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * TAU,
        rr = r * (0.87 + rng() * 0.25);
      points.push([x + Math.cos(a) * rr, y + Math.sin(a) * rr * 0.75]);
    }
    const grad = ctx.createLinearGradient(x - r, y - r, x + r, y + r);
    grad.addColorStop(0, pal[(ci + 2) % pal.length]);
    grad.addColorStop(1, pal[ci % pal.length]);
    polygon(ctx, points, grad, "#3e63411c", 1);
    for (let k = 0; k < 34; k++) {
      const a = rng() * TAU,
        rr = Math.sqrt(rng()) * r * 0.88;
      const lx = x + Math.cos(a) * rr,
        ly = y + Math.sin(a) * rr * 0.7;
      ellipse(
        ctx,
        lx,
        ly,
        2 + rng() * 4.5,
        1 + rng() * 2.1,
        pal[Math.floor(rng() * pal.length)] + "85",
      );
    }
  }
  for (let i = 0; i < 6; i++)
    drawGrass(ctx, 68 + rng() * 41, 197 + rng() * 3, rng, "#687b4f");
  return Texture.from(canvas);
}

function rockTexture(seed, small = false) {
  const [canvas, ctx] = makeCanvas(120, 88);
  const rng = random(seed);
  ellipse(ctx, 64, 69, 43, 12, "#44544127");
  polygon(
    ctx,
    [
      [22, 58],
      [33, 28],
      [56, 14],
      [86, 24],
      [101, 53],
      [81, 72],
      [40, 71],
    ],
    "#93988a",
    "#737f732f",
  );
  polygon(
    ctx,
    [
      [22, 58],
      [33, 28],
      [56, 14],
      [63, 44],
      [45, 62],
    ],
    "#b0b0a0",
  );
  polygon(
    ctx,
    [
      [63, 44],
      [56, 14],
      [86, 24],
      [101, 53],
      [78, 59],
    ],
    "#959f92",
  );
  polygon(
    ctx,
    [
      [22, 58],
      [45, 62],
      [78, 59],
      [101, 53],
      [81, 72],
      [40, 71],
    ],
    "#727f70",
  );
  line(ctx, 43, 26, 59, 21, "#d2cfb775");
  line(ctx, 63, 44, 80, 36, "#757f7080");
  for (let i = 0; i < 19; i++)
    ellipse(
      ctx,
      31 + rng() * 60,
      34 + rng() * 29,
      2 + rng() * 4,
      0.9 + rng(),
      "#6a8b5659",
    );
  for (let i = 0; i < 5; i++)
    drawGrass(ctx, 28 + rng() * 65, 75 + rng() * 3, rng, "#708253");
  return Texture.from(canvas);
}

function buildingTexture(obstacle, seed) {
  const w = obstacle.w || 4,
    h = obstacle.h || 4;
  const half = Math.max(112, (w + h) * 16);
  const floor = Math.max(60, (w + h) * 8);
  const W = half * 2 + 108,
    H = floor * 2 + 166;
  const [canvas, ctx] = makeCanvas(W, H);
  const cx = W / 2,
    by = H - 18,
    wall = 66;
  const rng = random(seed);
  ellipse(ctx, cx + 12, by - floor * 0.42, half + 19, floor * 0.7, "#4c604131");
  const A = [cx, by - floor * 2],
    B = [cx + half, by - floor],
    C = [cx, by],
    D = [cx - half, by - floor];
  const up = ([x, y], n = wall) => [x, y - n];
  polygon(ctx, [A, B, C, D], "#abae96", "#818d7438");
  polygon(ctx, [up(D), up(C), C, D], "#d1c7a7", "#7a755d", 1);
  polygon(ctx, [up(C), up(B), B, C], "#a7aa8b", "#75755d", 1);
  polygon(ctx, [[D[0], D[1] - 8], [C[0], C[1] - 8], C, D], "#79856f");
  polygon(ctx, [[C[0], C[1] - 8], [B[0], B[1] - 8], B, C], "#65776a");
  // Red timber columns are tied to the two visible faces of the isometric footprint.
  for (let face = 0; face < 2; face++) {
    const start = face ? C : D,
      end = face ? B : C;
    for (let i = 0; i <= 4; i++) {
      const t = i / 4,
        x = start[0] + (end[0] - start[0]) * t,
        y = start[1] + (end[1] - start[1]) * t;
      line(ctx, x, y - wall + 4, x, y - 9, "#823d32", 7);
      line(ctx, x - 1.5, y - wall + 5, x - 1.5, y - 10, "#b66f48", 2);
      ellipse(ctx, x, y - 9, 7, 3, "#929479");
      if (i < 4) {
        const nx = x + (end[0] - start[0]) / 8,
          ny = y + (end[1] - start[1]) / 8;
        const dir = face ? -1 : 1;
        polygon(
          ctx,
          [
            [nx - 10, ny - 45 - dir * 5],
            [nx + 10, ny - 45 + dir * 5],
            [nx + 10, ny - 23 + dir * 5],
            [nx - 10, ny - 23 - dir * 5],
          ],
          "#63736d",
          "#a58959",
          1.4,
        );
        line(ctx, nx, ny - 44, nx, ny - 24, "#c0a171", 1);
        line(
          ctx,
          nx - 9,
          ny - 34 - dir * 5,
          nx + 9,
          ny - 34 + dir * 5,
          "#c0a171",
          1,
        );
      }
    }
  }
  // A dark open doorway and its gold lintel make the building read at game scale.
  const dx = cx + half * 0.45,
    dy = by - floor * 0.45;
  polygon(
    ctx,
    [
      [dx - 14, dy - 50 + 6],
      [dx + 14, dy - 50 - 6],
      [dx + 14, dy - 9 - 6],
      [dx - 14, dy - 9 + 6],
    ],
    "#3b5149",
    "#936444",
    2,
  );
  line(ctx, dx - 17, dy - 52 + 7, dx + 17, dy - 52 - 7, "#c7a368", 3);
  // Tile roof: a swept diamond, warm ridge caps, and rows of glazed ceramic.
  const roofY = by - wall - floor;
  const left = [cx - half - 31, roofY + 3],
    right = [cx + half + 31, roofY + 3];
  const rear = [cx, roofY - floor - 18],
    front = [cx, roofY + floor + 9];
  ctx.beginPath();
  ctx.moveTo(rear[0], rear[1]);
  ctx.quadraticCurveTo(
    cx - half * 0.67,
    roofY - floor * 0.35,
    left[0],
    left[1] - 13,
  );
  ctx.quadraticCurveTo(
    cx - half * 0.55,
    roofY + floor * 0.55,
    front[0],
    front[1],
  );
  ctx.closePath();
  const roofLeft = ctx.createLinearGradient(
    cx - half,
    roofY - 50,
    cx,
    roofY + floor,
  );
  roofLeft.addColorStop(0, "#6b9484");
  roofLeft.addColorStop(0.45, "#5b8574");
  roofLeft.addColorStop(1, "#3f6d64");
  ctx.fillStyle = roofLeft;
  ctx.fill();
  ctx.strokeStyle = "#36574f";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(rear[0], rear[1]);
  ctx.quadraticCurveTo(
    cx + half * 0.67,
    roofY - floor * 0.35,
    right[0],
    right[1] - 13,
  );
  ctx.quadraticCurveTo(
    cx + half * 0.55,
    roofY + floor * 0.55,
    front[0],
    front[1],
  );
  ctx.closePath();
  const roofRight = ctx.createLinearGradient(
    cx,
    roofY - floor,
    cx + half,
    roofY + floor,
  );
  roofRight.addColorStop(0, "#527d73");
  roofRight.addColorStop(1, "#315e59");
  ctx.fillStyle = roofRight;
  ctx.fill();
  ctx.strokeStyle = "#36574f";
  ctx.lineWidth = 2;
  ctx.stroke();
  for (let side = -1; side <= 1; side += 2) {
    for (let i = 1; i < 17; i++) {
      const t = i / 17;
      const x = cx + side * (half + 25) * t;
      const y1 = rear[1] + (floor + 12) * t;
      const y2 = front[1] - (floor + 22) * t;
      ctx.beginPath();
      ctx.moveTo(x, y1);
      ctx.quadraticCurveTo(x + side * 3, (y1 + y2) / 2 + 2, x, y2);
      ctx.strokeStyle = i % 3 === 0 ? "#91aa8a60" : "#294e473f";
      ctx.lineWidth = i % 3 === 0 ? 2.1 : 1.5;
      ctx.stroke();
    }
    for (let row = 1; row < 8; row++) {
      const t = row / 8;
      line(
        ctx,
        cx,
        rear[1] + (front[1] - rear[1]) * t,
        cx + side * (half + 24),
        roofY - 9 + t * 14,
        "#adc09527",
        0.8,
      );
    }
    ctx.beginPath();
    ctx.moveTo(cx, front[1]);
    ctx.quadraticCurveTo(
      cx + side * half * 0.57,
      roofY + floor * 0.54 + 5,
      cx + side * (half + 31),
      roofY - 10,
    );
    ctx.strokeStyle = "#b8b486";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx, front[1] + 6);
    ctx.quadraticCurveTo(
      cx + side * half * 0.58,
      roofY + floor * 0.57 + 9,
      cx + side * (half + 31),
      roofY - 4,
    );
    ctx.strokeStyle = "#774b36";
    ctx.lineWidth = 4;
    ctx.stroke();
  }
  line(ctx, rear[0], rear[1], front[0], front[1] - 3, "#b6ad76", 5);
  line(ctx, rear[0] - 1, rear[1], front[0] - 1, front[1] - 3, "#ded19c", 1.4);
  // Raised ridge ornaments and tiny weathered paint details.
  polygon(
    ctx,
    [
      [cx - 7, rear[1] + 2],
      [cx - 5, rear[1] - 14],
      [cx + 2, rear[1] - 23],
      [cx + 7, rear[1] - 11],
      [cx + 7, rear[1] + 5],
    ],
    "#927a4f",
    "#d2b985",
    1,
  );
  for (let i = 0; i < 30; i++)
    ellipse(
      ctx,
      cx + (rng() - 0.5) * half * 1.5,
      roofY + (rng() - 0.5) * floor,
      1.5,
      0.6,
      "#bcc39420",
    );
  drawLantern(ctx, cx - half * 0.58, roofY + floor * 0.52 + 20, 0.85);
  drawLantern(ctx, cx + half * 0.6, roofY + floor * 0.48 + 20, 0.85);
  // Stone steps sit in front of the entrance without changing its collision footprint.
  for (let i = 0; i < 3; i++) {
    polygon(
      ctx,
      [
        [dx - 18 - i * 3, dy - 6 + i * 5],
        [dx + 20 + i * 3, dy - 22 + i * 5],
        [dx + 29 + i * 3, dy - 17 + i * 5],
        [dx - 9 - i * 3, dy - 1 + i * 5],
      ],
      shade("#a8ad97", -i * 6),
      "#dae0c035",
    );
  }
  return { texture: Texture.from(canvas), height: H, baseline: floor };
}

function pondTexture(obstacle) {
  const w = Math.max(4, obstacle.w || 5),
    h = Math.max(3, obstacle.h || 4);
  const [canvas, ctx] = makeCanvas((w + h) * 32 + 60, (w + h) * 16 + 64);
  const cx = canvas.width / 2,
    cy = canvas.height / 2;
  const rx = (w + h) * 15,
    ry = (w + h) * 7;
  ellipse(ctx, cx, cy, rx + 10, ry + 7, "#829176");
  ellipse(ctx, cx, cy - 1, rx + 3, ry + 3, "#beb8a0");
  const grad = ctx.createLinearGradient(0, cy - ry, 0, cy + ry);
  grad.addColorStop(0, "#54867d");
  grad.addColorStop(1, "#87aaa1");
  ellipse(ctx, cx, cy, rx, ry, grad);
  for (let i = 0; i < 16; i++) {
    const t = (i / 16) * TAU;
    ellipse(
      ctx,
      cx + Math.cos(t) * (rx + 6),
      cy + Math.sin(t) * (ry + 4),
      7 + (i % 3),
      4,
      i % 2 ? "#a5ad99" : "#c2bea6",
    );
  }
  for (let i = 0; i < 6; i++)
    line(
      ctx,
      cx - rx * 0.7 + (i * rx) / 4,
      cy - 8 + (i % 3) * 8,
      cx - rx * 0.5 + (i * rx) / 4,
      cy - 8 + (i % 3) * 8,
      "#c6d8bd70",
      1,
    );
  ellipse(ctx, cx - 15, cy + 6, 7, 3, "#557d56");
  ellipse(ctx, cx - 22, cy + 3, 5, 2, "#719268");
  ellipse(ctx, cx - 18, cy + 2, 2, 2, "#e5bcac");
  return Texture.from(canvas);
}

function portalTexture() {
  const [canvas, ctx] = makeCanvas(160, 204);
  ellipse(ctx, 86, 186, 63, 14, "#4b5c3426");
  const glow = ctx.createRadialGradient(80, 141, 7, 80, 141, 70);
  glow.addColorStop(0, "#e8d69a77");
  glow.addColorStop(0.5, "#e4d49a29");
  glow.addColorStop(1, "#e4d49a00");
  ellipse(ctx, 80, 143, 58, 48, glow);
  for (const x of [35, 125]) {
    polygon(
      ctx,
      [
        [x - 7, 184],
        [x - 5, 63],
        [x + 5, 63],
        [x + 7, 184],
      ],
      "#9d4d37",
      "#713f31",
      1,
    );
    line(ctx, x - 2, 67, x - 3, 177, "#d09562", 2);
    ellipse(ctx, x, 184, 14, 5, "#9fa28b");
    polygon(
      ctx,
      [
        [x - 12, 176],
        [x + 12, 176],
        [x + 14, 186],
        [x - 14, 186],
      ],
      "#b7b59e",
      "#7e8d74",
    );
  }
  polygon(
    ctx,
    [
      [21, 87],
      [139, 87],
      [139, 98],
      [21, 98],
    ],
    "#954d38",
    "#cbab74",
    1,
  );
  ctx.beginPath();
  ctx.moveTo(8, 53);
  ctx.quadraticCurveTo(29, 65, 80, 56);
  ctx.quadraticCurveTo(130, 66, 152, 52);
  ctx.lineTo(148, 67);
  ctx.quadraticCurveTo(80, 80, 12, 68);
  ctx.closePath();
  ctx.fillStyle = "#466e61";
  ctx.fill();
  ctx.strokeStyle = "#c2b782";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(5, 43);
  ctx.quadraticCurveTo(36, 52, 80, 42);
  ctx.quadraticCurveTo(124, 51, 155, 42);
  ctx.lineTo(153, 54);
  ctx.quadraticCurveTo(116, 64, 80, 55);
  ctx.quadraticCurveTo(43, 65, 8, 56);
  ctx.closePath();
  ctx.fillStyle = "#698b73";
  ctx.fill();
  ctx.strokeStyle = "#344f48";
  ctx.lineWidth = 2;
  ctx.stroke();
  polygon(
    ctx,
    [
      [67, 70],
      [93, 70],
      [93, 100],
      [67, 100],
    ],
    "#304b43",
    "#c0ad70",
    2,
  );
  ctx.font = "bold 15px serif";
  ctx.fillStyle = "#e0ce91";
  ctx.textAlign = "center";
  ctx.fillText("山", 80, 91);
  drawLantern(ctx, 41, 118, 0.95);
  drawLantern(ctx, 119, 118, 0.95);
  return Texture.from(canvas);
}

function propTexture(kind, seed) {
  const [canvas, ctx] = makeCanvas(100, 122);
  const rng = random(seed);
  ellipse(ctx, 54, 111, 29, 7, "#354e3227");
  if (kind === "lantern") {
    line(ctx, 52, 110, 52, 25, "#6d5d43", 4);
    line(ctx, 51, 26, 72, 27, "#655d43", 4);
    polygon(
      ctx,
      [
        [42, 112],
        [61, 112],
        [65, 118],
        [37, 118],
      ],
      "#a1a18a",
      "#6d8068",
    );
    drawLantern(ctx, 70, 45, 1.15);
    polygon(
      ctx,
      [
        [48, 21],
        [73, 21],
        [82, 28],
        [42, 28],
      ],
      "#506f5d",
      "#b6b78c",
    );
  } else {
    for (let i = 0; i < 12; i++) {
      const x = 28 + rng() * 40,
        y = 101 - rng() * 36;
      line(ctx, 49, 109, x, y, "#6b8551", 1);
      ellipse(
        ctx,
        x,
        y,
        7 + rng() * 4,
        3 + rng() * 3,
        i % 2 ? "#7c985e" : "#5c824f",
      );
      if (i % 3 === 0) ellipse(ctx, x, y - 3, 3, 2, "#d8bc93");
    }
  }
  return Texture.from(canvas);
}

function characterTexture(classId = "trojan", facing = 0, npc = false) {
  const [canvas, ctx] = makeCanvas(88, 112);
  const color = COLORS[classId] || "#598b7b";
  const flip = facing >= 4 ? -1 : 1;
  ctx.save();
  ctx.translate(44, 0);
  ctx.scale(flip, 1);
  const back = facing === 1 || facing === 2 || facing === 3;
  // Cloth, hair and armor share the same foot anchor, keeping equipment modular.
  const cape = ctx.createLinearGradient(-20, 43, 20, 94);
  cape.addColorStop(0, shade(color, -19));
  cape.addColorStop(1, shade(color, -49));
  polygon(
    ctx,
    [
      [-12, 45],
      [12, 43],
      [22, 86],
      [8, 96],
      [-6, 86],
      [-20, 90],
    ],
    cape,
    "#c1aa705c",
    1,
  );
  line(ctx, -12, 50, -16, 86, shade(color, 18), 1);
  polygon(
    ctx,
    [
      [-12, 78],
      [-1, 77],
      [-4, 100],
      [-14, 101],
    ],
    "#414b46",
    "#252e2d",
    0.8,
  );
  polygon(
    ctx,
    [
      [2, 78],
      [11, 75],
      [17, 96],
      [9, 100],
    ],
    "#4a5650",
    "#252e2d",
    0.8,
  );
  polygon(
    ctx,
    [
      [-14, 96],
      [-4, 98],
      [-4, 105],
      [-18, 105],
      [-20, 102],
    ],
    "#39463f",
  );
  polygon(
    ctx,
    [
      [9, 96],
      [17, 94],
      [22, 101],
      [19, 105],
      [7, 104],
    ],
    "#39463f",
  );
  line(ctx, -16, 98, -6, 99, "#b5a477", 2);
  line(ctx, 9, 98, 18, 98, "#b5a477", 2);
  const tunic = ctx.createLinearGradient(-13, 45, 16, 82);
  tunic.addColorStop(0, shade(color, 31));
  tunic.addColorStop(0.4, color);
  tunic.addColorStop(1, shade(color, -31));
  polygon(
    ctx,
    [
      [-14, 45],
      [8, 44],
      [16, 61],
      [12, 83],
      [0, 88],
      [-16, 81],
      [-18, 61],
    ],
    tunic,
    "#344e45",
    1,
  );
  polygon(
    ctx,
    [
      [-13, 54],
      [8, 52],
      [11, 72],
      [-2, 79],
      [-13, 70],
    ],
    "#abc0af",
    "#d6c18b",
    1,
  );
  polygon(
    ctx,
    [
      [-9, 58],
      [5, 56],
      [6, 68],
      [-3, 72],
      [-10, 67],
    ],
    shade(color, 3),
    "#d6c18b",
    0.8,
  );
  for (let i = 0; i < 3; i++)
    line(ctx, -10, 63 + i * 5, 6, 60 + i * 5, "#a5c0b760", 0.8);
  ellipse(ctx, -3, 63, 3, 3, "#c6ac6f");
  polygon(
    ctx,
    [
      [-16, 71],
      [13, 70],
      [13, 76],
      [-16, 78],
    ],
    "#73543c",
    "#c4a05f",
    0.8,
  );
  polygon(
    ctx,
    [
      [-4, 72],
      [2, 71],
      [3, 77],
      [-4, 78],
    ],
    "#c8b075",
  );
  polygon(
    ctx,
    [
      [-14, 45],
      [-21, 49],
      [-24, 62],
      [-16, 69],
      [-11, 58],
    ],
    shade(color, -6),
    "#d3be83",
    1,
  );
  polygon(
    ctx,
    [
      [8, 45],
      [18, 50],
      [20, 64],
      [12, 66],
      [6, 57],
    ],
    shade(color, 7),
    "#d3be83",
    1,
  );
  ellipse(ctx, -18, 47, 9, 5, "#9daea0");
  ellipse(ctx, 13, 48, 9, 5, "#bec6ad");
  line(ctx, -25, 52, -16, 48, "#d6c48d", 1.5);
  line(ctx, 7, 48, 20, 51, "#e0cd93", 1.5);
  ellipse(ctx, -21, 66, 3.2, 4, "#d5b38b");
  ellipse(ctx, 17, 66, 3.2, 4, "#d5b38b");
  // A slender polished blade is a readable directional silhouette in the world.
  if (classId === "archer") {
    ctx.beginPath();
    ctx.moveTo(22, 40);
    ctx.quadraticCurveTo(38, 64, 26, 88);
    ctx.strokeStyle = "#ad8253";
    ctx.lineWidth = 3;
    ctx.stroke();
    line(ctx, 22, 40, 26, 88, "#e6d8ac", 0.8);
    line(ctx, 20, 66, 36, 58, "#bbbda0", 1.2);
  } else if (
    classId === "fire" ||
    classId === "water" ||
    classId === "taoist" ||
    npc
  ) {
    line(ctx, 22, 34, 21, 100, "#856a44", 3);
    ellipse(ctx, 22, 34, 6, 7, classId === "fire" ? "#dcba79" : "#a6c8c0");
    ellipse(ctx, 20, 32, 2, 3, "#e9e2b8");
  } else {
    polygon(
      ctx,
      [
        [19, 67],
        [32, 41],
        [39, 26],
        [36, 46],
        [22, 71],
      ],
      "#d7e0d2",
      "#719187",
      1,
    );
    line(ctx, 23, 65, 36, 33, "#f7f0d5", 0.8);
    line(ctx, 14, 67, 27, 72, "#ccae69", 3);
    line(ctx, 19, 71, 16, 78, "#654734", 3);
    if (classId === "trojan") {
      polygon(
        ctx,
        [
          [-23, 68],
          [-31, 48],
          [-34, 36],
          [-29, 48],
          [-19, 67],
        ],
        "#b7cac1",
        "#6d8b82",
        0.8,
      );
      line(ctx, -26, 68, -17, 64, "#c9ac70", 2.5);
    }
  }
  // Head: neck, dark swept hair, warm face and a jade/gold crown.
  polygon(
    ctx,
    [
      [-6, 38],
      [4, 38],
      [6, 48],
      [-9, 47],
    ],
    "#bb946f",
  );
  ellipse(ctx, -2, 30, 12, 14, "#302f29");
  ellipse(ctx, -5, 18, 6, 6, "#36392f");
  line(ctx, -7, 17, -1, 16, "#c0a265", 2.5);
  if (!back) {
    polygon(
      ctx,
      [
        [-11, 28],
        [5, 26],
        [9, 33],
        [6, 42],
        [-3, 43],
        [-10, 36],
      ],
      "#d2b08c",
    );
    polygon(
      ctx,
      [
        [-11, 25],
        [-4, 19],
        [7, 24],
        [10, 32],
        [0, 29],
        [-8, 31],
      ],
      "#3e3d32",
    );
    line(ctx, -7, 32, -4, 31.5, "#423c31", 1);
    line(ctx, 2, 31, 4, 30.7, "#423c31", 1);
    line(ctx, 0, 35, 2, 35, "#987758", 0.8);
    line(ctx, -1, 39, 3, 38.5, "#916c53", 0.8);
  } else ellipse(ctx, -2, 32, 10, 11, "#3d3e31");
  polygon(
    ctx,
    [
      [-12, 27],
      [-6, 20],
      [5, 21],
      [10, 26],
      [2, 24],
      [-5, 25],
    ],
    "#b7bba1",
    "#d6c490",
    1,
  );
  ellipse(ctx, -3, 24, 2.3, 2.3, "#689787");
  line(ctx, -2, 18, 5, 4, "#b38848", 1.5);
  polygon(
    ctx,
    [
      [5, 4],
      [13, 7],
      [8, 10],
    ],
    color,
  );
  ctx.restore();
  return Texture.from(canvas);
}

function birdTexture(seed = 1) {
  const [canvas, ctx] = makeCanvas(98, 81);
  const rng = random(seed);
  // The long feather tail distinguishes a pheasant from a generic enemy token.
  for (let i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.moveTo(43, 50);
    ctx.quadraticCurveTo(19, 40 - i * 2, 4 + i * 4, 19 + i * 2);
    ctx.quadraticCurveTo(23, 48 + i, 44, 58);
    ctx.fillStyle = ["#766948", "#9d8855", "#545f41"][i % 3];
    ctx.fill();
    line(ctx, 8 + i * 4, 25 + i * 2, 43, 54, "#d0b07066", 0.7);
  }
  line(ctx, 47, 62, 44, 74, "#977345", 2);
  line(ctx, 62, 60, 66, 73, "#977345", 2);
  line(ctx, 44, 74, 39, 75, "#715940", 1);
  line(ctx, 65, 74, 72, 74, "#715940", 1);
  const body = ctx.createLinearGradient(36, 36, 68, 62);
  body.addColorStop(0, "#b18b53");
  body.addColorStop(1, "#775b3b");
  ellipse(ctx, 53, 52, 21, 14, body);
  ellipse(ctx, 49, 51, 15, 10, "#b69762");
  for (let i = 0; i < 20; i++)
    ellipse(
      ctx,
      39 + rng() * 27,
      43 + rng() * 15,
      1.6,
      1,
      i % 2 ? "#5f573f75" : "#d1b27a90",
    );
  polygon(
    ctx,
    [
      [65, 51],
      [66, 30],
      [77, 26],
      [82, 40],
      [76, 59],
    ],
    "#547c68",
  );
  ellipse(ctx, 74, 30, 9, 9, "#466b5b");
  ellipse(ctx, 80, 31, 4, 5, "#aa493c");
  polygon(
    ctx,
    [
      [82, 30],
      [93, 33],
      [83, 36],
    ],
    "#ccb071",
  );
  ellipse(ctx, 79, 27, 1.8, 1.8, "#eee7c9");
  ellipse(ctx, 79.5, 27, 0.9, 1, "#252e29");
  polygon(
    ctx,
    [
      [69, 22],
      [70, 15],
      [74, 19],
      [78, 15],
      [81, 21],
    ],
    "#a7483b",
  );
  line(ctx, 67, 38, 77, 42, "#e2d6a0", 2);
  return Texture.from(canvas);
}

function lootTexture() {
  const [canvas, ctx] = makeCanvas(60, 70);
  const glow = ctx.createRadialGradient(30, 45, 0, 30, 45, 25);
  glow.addColorStop(0, "#f8dda152");
  glow.addColorStop(1, "#f8dda100");
  ellipse(ctx, 30, 45, 25, 17, glow);
  polygon(
    ctx,
    [
      [17, 39],
      [30, 32],
      [44, 39],
      [44, 53],
      [31, 61],
      [17, 53],
    ],
    "#ae8150",
    "#e5ca89",
    1,
  );
  polygon(
    ctx,
    [
      [17, 39],
      [30, 32],
      [44, 39],
      [31, 46],
    ],
    "#d9bd7d",
    "#ead9a7",
    0.8,
  );
  line(ctx, 31, 46, 31, 61, "#ead9a7", 2);
  line(ctx, 17, 45, 31, 53, "#6d5636", 2);
  line(ctx, 31, 53, 44, 46, "#6d5636", 2);
  return Texture.from(canvas);
}

function foliageShadeTexture() {
  const [canvas, ctx] = makeCanvas(300, 140);
  const rng = random(8107);
  const broad = ctx.createRadialGradient(150, 67, 14, 150, 67, 132);
  broad.addColorStop(0, "#213c353b");
  broad.addColorStop(0.55, "#253e3424");
  broad.addColorStop(1, "#253e3400");
  ellipse(ctx, 150, 70, 144, 59, broad);
  for (let i = 0; i < 46; i++) {
    const a = rng() * TAU,
      r = Math.sqrt(rng());
    const x = 150 + Math.cos(a) * r * 112,
      y = 66 + Math.sin(a) * r * 41;
    const radius = 5 + rng() * 14;
    const grad = ctx.createRadialGradient(x, y, 1, x, y, radius);
    grad.addColorStop(0, "#27423932");
    grad.addColorStop(1, "#27423900");
    ellipse(ctx, x, y, radius, radius * 0.48, grad);
  }
  return Texture.from(canvas);
}

function lanternLightTexture() {
  const [canvas, ctx] = makeCanvas(148, 148);
  const gradient = ctx.createRadialGradient(74, 74, 2, 74, 74, 71);
  gradient.addColorStop(0, "#ffd48a66");
  gradient.addColorStop(0.18, "#ffb95832");
  gradient.addColorStop(0.58, "#e9b76413");
  gradient.addColorStop(1, "#e9b76400");
  ellipse(ctx, 74, 74, 72, 72, gradient);
  return Texture.from(canvas);
}

function vignetteTexture() {
  const [canvas, ctx] = makeCanvas(1024, 768);
  const grad = ctx.createRadialGradient(460, 340, 170, 512, 384, 670);
  grad.addColorStop(0, "#203c2b00");
  grad.addColorStop(0.72, "#203c2b00");
  grad.addColorStop(1, "#314f3736");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 768);
  const sun = ctx.createRadialGradient(60, 0, 10, 80, 0, 630);
  sun.addColorStop(0, "#fce8ab20");
  sun.addColorStop(1, "#fce8ab00");
  ctx.fillStyle = sun;
  ctx.fillRect(0, 0, 1024, 768);
  return Texture.from(canvas);
}

/** Original procedural artwork and a viewport-streamed diamond world. */
export class GameRenderer {
  constructor() {
    this.app = null;
    this.container = null;
    this.width = 1;
    this.height = 1;
    this.camera = { x: 0, y: 0 };
    this.cameraReady = false;
    this.zone = null;
    this.chunks = new Map();
    this.entities = new Map();
    this.assets = new Map();
    this.art = {};
    this.characterArt = {};
    this.scenery = [];
    this.pointer = null;
    this.clock = 0;
    this.self = null;
    this.lastState = null;
    this.screenOffset = { x: 0, y: 0 };
  }

  async init(container) {
    this.container = container;
    this.app = new Application();
    await this.app.init({
      background: "#a5ad88",
      antialias: true,
      resolution: Math.min(window.devicePixelRatio || 1, 2),
      autoDensity: true,
      preference: "webgl",
      powerPreference: "high-performance",
      preserveDrawingBuffer: Boolean(window.__vt_pending),
    });
    this.app.ticker.stop();
    this.app.canvas.style.cssText =
      "display:block;width:100%;height:100%;touch-action:none;";
    this.app.canvas.setAttribute(
      "aria-label",
      "Jade world: click to travel, right click or press J to jump, and aim your skills with the pointer.",
    );
    container.appendChild(this.app.canvas);
    const loaded = await Promise.allSettled(
      ["temple", "tree", "hero", "gate", "pheasant", "characters"].map(
        async (name) => {
          const filename =
            name === "tree"
              ? "tree-v2"
              : name === "characters"
                ? "characters-v2"
                : name;
          const texture = await Assets.load(
            `${import.meta.env.BASE_URL}art/${filename}.png`,
          );
          return {
            name,
            texture: name === "characters" ? texture : frameArtwork(texture),
          };
        },
      ),
    );
    for (const result of loaded)
      if (result.status === "fulfilled")
        this.art[result.value.name] = result.value.texture;
    if (this.art.characters) {
      const atlas = this.art.characters;
      ["trojan", "warrior", "archer", "fire", "water", "npc"].forEach(
        (classId, index) => {
          const column = index % 3,
            row = Math.floor(index / 3);
          const x = Math.round((column * atlas.width) / 3),
            y = Math.round((row * atlas.height) / 2);
          const right = Math.round(((column + 1) * atlas.width) / 3),
            bottom = Math.round(((row + 1) * atlas.height) / 2);
          this.characterArt[classId] = frameArtwork(
            atlas,
            new Rectangle(x, y, right - x, bottom - y),
          );
        },
      );
    }
    this.world = new Container();
    this.terrain = new Container();
    this.shadeLayer = new Container();
    this.lightLayer = new Container();
    this.ground = new Graphics();
    this.objects = new Container();
    this.objects.sortableChildren = true;
    this.effects = new Graphics();
    this.labels = new Container();
    this.world.addChild(
      this.terrain,
      this.shadeLayer,
      this.ground,
      this.objects,
      this.lightLayer,
      this.effects,
      this.labels,
    );
    this.app.stage.addChild(this.world);
    this.vignette = new Sprite(vignetteTexture());
    this.app.stage.addChild(this.vignette);
    this.resize();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(container);
    return this;
  }

  resize() {
    if (!this.app || !this.container) return;
    this.width = Math.max(1, this.container.clientWidth);
    this.height = Math.max(1, this.container.clientHeight);
    this.app.renderer.resize(this.width, this.height);
    this.vignette.width = this.width;
    this.vignette.height = this.height;
  }

  asset(key, factory) {
    if (!this.assets.has(key)) this.assets.set(key, factory());
    return this.assets.get(key);
  }

  rebuildZone(zone) {
    this.zone = zone;
    this.cameraReady = false;
    this.terrain.removeChildren().forEach((s) => s.destroy());
    for (const chunk of this.chunks.values()) chunk.texture.destroy(true);
    this.chunks.clear();
    for (const item of this.scenery) {
      item.sprite.destroy();
      if (item.label) item.label.destroy();
    }
    this.shadeLayer.removeChildren().forEach((s) => s.destroy());
    this.lightLayer.removeChildren().forEach((s) => s.destroy());
    this.scenery = [];
    for (const entity of this.entities.values()) {
      entity.sprite.destroy();
      entity.label.destroy();
    }
    this.entities.clear();
    const def = zoneDefs[zone] || zoneDefs.city;
    const add = (
      texture,
      x,
      y,
      scale = 1,
      kind = "tree",
      obstacle = null,
      anchorY = 0.92,
    ) => {
      const sprite = new Sprite(texture);
      sprite.anchor.set(0.5, anchorY);
      sprite.scale.set(scale);
      const p = project(x, y);
      sprite.position.set(p.x, p.y);
      sprite.zIndex = p.y;
      this.objects.addChild(sprite);
      const item = {
        sprite,
        x,
        y,
        kind,
        obstacle,
        halfWidth: (texture.width * scale) / 2,
        height: texture.height * scale,
      };
      this.scenery.push(item);
      if (kind === "tree" || kind === "building") {
        const shadow = new Sprite(
          this.asset("foliage-shade", foliageShadeTexture),
        );
        shadow.anchor.set(0.5);
        shadow.position.set(p.x + texture.width * scale * 0.12, p.y + 12);
        shadow.width = texture.width * scale * (kind === "tree" ? 0.92 : 1.03);
        shadow.height = Math.max(
          30,
          shadow.width * (kind === "tree" ? 0.31 : 0.36),
        );
        shadow.alpha = kind === "tree" ? 0.68 : 0.76;
        this.shadeLayer.addChild(shadow);
        item.shadow = shadow;
      }
      if (kind === "lantern" || kind === "portal") {
        const light = new Sprite(
          this.asset("lantern-light", lanternLightTexture),
        );
        light.anchor.set(0.5);
        light.position.set(
          p.x + (kind === "lantern" ? 14 : 0),
          p.y - (kind === "lantern" ? 63 : 67),
        );
        light.scale.set(kind === "portal" ? 1.2 : 0.65);
        light.blendMode = "add";
        this.lightLayer.addChild(light);
        item.light = light;
      }
      return item;
    };
    const obstacles = def.obstacles || [];
    for (let i = 0; i < obstacles.length; i++) {
      const o = obstacles[i],
        cx = o.x + (o.w || 1) / 2,
        cy = o.y + (o.h || 1) / 2;
      if (o.type === "pond" || o.type === "water") {
        add(
          this.asset(`pond-${zone}-${i}`, () => pondTexture(o)),
          cx,
          cy,
          1,
          "pond",
          o,
          0.5,
        );
      } else if (o.type === "tree" || o.type === "forest") {
        for (let ix = 0; ix < (o.w || 2); ix += 2.3)
          for (let iy = 0; iy < (o.h || 2); iy += 2.4) {
            const tree =
              this.art.tree ||
              this.asset(`tree-${i % 4}`, () =>
                treeTexture(91 + (i % 4) * 7, i % 3 === 0 ? 1 : 0),
              );
            const scale = this.art.tree
              ? (190 + (i % 3) * 15) / tree.height
              : 0.82 + ((i * 17 + ix * 7) % 8) / 25;
            const item = add(
              tree,
              o.x + ix + 0.7,
              o.y + iy + 0.7,
              scale,
              "tree",
              o,
              this.art.tree ? 0.965 : 0.92,
            );
            if (this.art.tree) {
              item.sprite.tint = i % 3 === 0 ? 0xe1ecc3 : 0xe2e5c9;
              if (i % 2) item.sprite.scale.x *= -1;
            }
          }
      } else if (
        o.type === "rock" ||
        o.type === "rocks" ||
        o.type === "boulder"
      ) {
        add(
          this.asset(`rock-${i % 3}`, () => rockTexture(91 + (i % 3))),
          cx,
          cy,
          Math.max(0.65, (o.w || 2) / 3),
          "rock",
          o,
          0.87,
        );
      } else {
        if (this.art.temple) {
          const width = (o.w + o.h) * TILE_X * 1.12;
          const item = add(
            this.art.temple,
            cx,
            cy,
            width / this.art.temple.width,
            "building",
            o,
            0.995,
          );
          item.sprite.y += ((o.w + o.h) * TILE_Y) / 2;
          item.sprite.zIndex = item.sprite.y;
          item.sprite.tint = i % 2 ? 0xeee5cf : 0xf8efd7;
          if (i % 2) item.sprite.scale.x *= -1;
        } else {
          const built = this.asset(`building-${zone}-${i}`, () =>
            buildingTexture(o, 181 + i),
          );
          const item = add(built.texture, cx, cy, 1, "building", o, 1);
          item.sprite.y += built.baseline;
          item.sprite.zIndex += built.baseline;
        }
      }
    }
    const rng = random(zone === "city" ? 991 : 5137);
    const count = zone === "city" ? 48 : 94;
    for (let i = 0; i < count; i++) {
      const x = 2 + rng() * (def.width - 4),
        y = 2 + rng() * (def.height - 4);
      if (
        insideObstacle(x, y, obstacles, 2) ||
        terrainType(x, y, zone, def) !== "grass"
      )
        continue;
      if (Math.hypot(x - def.spawn.x, y - def.spawn.y) < 5) continue;
      const kind = i % 6 === 0 ? "rock" : i % 4 === 0 ? "flowers" : "tree";
      const texture =
        kind === "rock"
          ? this.asset(`rock-${i % 3}`, () => rockTexture(91 + (i % 3)))
          : kind === "flowers"
            ? this.asset(`flowers-${i % 3}`, () =>
                propTexture("flowers", 26 + (i % 3)),
              )
            : this.art.tree ||
              this.asset(`tree-${i % 4}`, () =>
                treeTexture(91 + (i % 4) * 7, i % 3 === 0 ? 1 : 0),
              );
      const scale =
        kind === "tree"
          ? this.art.tree
            ? (150 + rng() * 65) / texture.height
            : 0.58 + rng() * 0.33
          : 0.5 + rng() * 0.2;
      const item = add(
        texture,
        x,
        y,
        scale,
        kind,
        null,
        kind === "rock"
          ? 0.88
          : kind === "tree" && this.art.tree
            ? 0.965
            : 0.92,
      );
      if (kind === "tree" && this.art.tree) {
        item.sprite.tint = zone === "wilds" ? 0xc9d5a9 : 0xe9e3bd;
        if (i % 2) item.sprite.scale.x *= -1;
      }
    }
    if (zone === "city") {
      const sx = def.spawn.x,
        sy = def.spawn.y;
      for (const [dx, dy] of [
        [-5, -5],
        [5, -5],
        [-5, 5],
        [5, 5],
        [-2, -8],
        [2, 8],
      ]) {
        if (!insideObstacle(sx + dx, sy + dy, obstacles, 0.6))
          add(
            this.asset("lantern", () => propTexture("lantern", 8)),
            sx + dx,
            sy + dy,
            0.87,
            "lantern",
            null,
            0.95,
          );
      }
    }
    const portals = Array.isArray(def.portal)
      ? def.portal
      : def.portal
        ? [def.portal]
        : [];
    for (const p of portals) {
      const texture = this.art.gate || this.asset("portal", portalTexture);
      const item = add(
        texture,
        p.x,
        p.y,
        this.art.gate ? 197 / texture.height : 1,
        "portal",
        null,
        this.art.gate ? 0.992 : 0.92,
      );
      const label = new Text({
        text:
          p.label ||
          p.name ||
          (zone === "city" ? "WINDMERE FIELDS" : "JADEHAVEN"),
        style: {
          fontFamily: "Georgia,serif",
          fontSize: 10,
          fontWeight: "bold",
          fill: "#fff2cc",
          stroke: { color: "#3a5349", width: 3 },
          letterSpacing: 2,
        },
      });
      label.anchor.set(0.5);
      label.position.set(
        item.sprite.x,
        item.sprite.y - (this.art.gate ? 208 : 158),
      );
      this.labels.addChild(label);
      item.label = label;
    }
  }

  worldToScreen(x, y) {
    const p = project(x, y);
    return { x: p.x + this.screenOffset.x, y: p.y + this.screenOffset.y };
  }

  screenToWorld(clientX, clientY) {
    const r = this.app.canvas.getBoundingClientRect();
    const sx =
      ((clientX - r.left) * this.width) / r.width - this.screenOffset.x;
    const sy =
      ((clientY - r.top) * this.height) / r.height - this.screenOffset.y;
    return {
      x: (sx / TILE_X + sy / TILE_Y) / 2,
      y: (sy / TILE_Y - sx / TILE_X) / 2,
    };
  }

  setPointer(clientX, clientY) {
    this.pointer = { x: clientX, y: clientY };
  }

  entityPosition(entity) {
    let x = entity.x,
      y = entity.y,
      lift = 0;
    const jump = entity.jump;
    if (jump) {
      let t = jump.progress ?? (jump.t || 0) / (jump.duration || 1);
      t = clamp(t, 0, 1);
      if (jump.fromX !== undefined) {
        x = jump.fromX + (jump.toX - jump.fromX) * t;
        y = jump.fromY + (jump.toY - jump.fromY) * t;
      }
      lift = Math.sin(t * Math.PI) * 70;
    }
    return { x, y, lift };
  }

  pickEntity(clientX, clientY, state = this.lastState) {
    if (!state) return null;
    const rect = this.app.canvas.getBoundingClientRect();
    const px = ((clientX - rect.left) * this.width) / rect.width,
      py = ((clientY - rect.top) * this.height) / rect.height;
    let best = null,
      distance = 44;
    for (const entity of [
      ...list(state.enemies),
      ...list(state.npcs),
      ...list(state.players),
      ...list(state.drops),
    ]) {
      if (
        (entity.zone && entity.zone !== this.zone) ||
        entity.id === this.self?.id ||
        entity.hp === 0
      )
        continue;
      const pos = this.entityPosition(entity),
        p = this.worldToScreen(pos.x, pos.y);
      const d = Math.hypot(
        px - p.x,
        (py - p.y + (entity.kind === "drop" ? 8 : 28) + pos.lift) * 0.85,
      );
      if (d < distance) {
        best = entity;
        distance = d;
      }
    }
    return best;
  }

  draw(state, selfId, dt = 1 / 60) {
    if (!this.app || !state) return;
    const players = list(state.players);
    const self = players.find((p) => p.id === selfId) || players[0];
    if (!self) {
      this.app.render();
      return;
    }
    this.clock += dt > 1 ? dt / 1000 : dt;
    this.self = self;
    this.lastState = state;
    const zone = self.zone || "city";
    if (zone !== this.zone) this.rebuildZone(zone);
    const def = zoneDefs[zone] || zoneDefs.city;
    const actual = this.entityPosition(self);
    if (!this.cameraReady) {
      this.camera.x = actual.x;
      this.camera.y = actual.y;
      this.cameraReady = true;
    }
    const smooth = 1 - Math.exp(-Math.min(dt > 1 ? dt / 1000 : dt, 0.05) * 13);
    this.camera.x += (actual.x - this.camera.x) * smooth;
    this.camera.y += (actual.y - this.camera.y) * smooth;
    const camera = project(this.camera.x, this.camera.y);
    this.screenOffset = {
      x: this.width / 2 - camera.x,
      y: this.height * 0.56 - camera.y,
    };
    this.world.position.set(this.screenOffset.x, this.screenOffset.y);
    this.updateChunks(def);
    this.ground.clear();
    this.effects.clear();
    const seen = new Set();
    const selected = state.selectedTarget || state.targetId || self.targetId;
    const hovered = this.pointer
      ? this.pickEntity(this.pointer.x, this.pointer.y, state)?.id
      : null;
    for (const item of this.scenery) {
      const sx = item.sprite.x + this.screenOffset.x,
        sy = item.sprite.y + this.screenOffset.y;
      item.sprite.visible =
        sx > -item.halfWidth - 50 &&
        sx < this.width + item.halfWidth + 50 &&
        sy > -50 &&
        sy < this.height + item.height;
      if (item.shadow) item.shadow.visible = item.sprite.visible;
      if (item.light) {
        item.light.visible = item.sprite.visible;
        item.light.alpha = 0.64 + Math.sin(this.clock * 2.5 + item.x) * 0.08;
      }
      if (item.label) item.label.visible = item.sprite.visible;
      const o = item.obstacle;
      const occludes =
        o &&
        actual.x >= o.x - 1 &&
        actual.x <= o.x + (o.w || 1) + 1 &&
        actual.y >= o.y - 1 &&
        actual.y <= o.y + (o.h || 1) + 1 &&
        item.sprite.zIndex > project(actual.x, actual.y).y;
      const closeTree =
        item.kind === "tree" &&
        Math.abs(item.sprite.x - project(actual.x, actual.y).x) <
          item.halfWidth * 0.75 &&
        item.sprite.y > project(actual.x, actual.y).y &&
        item.sprite.y - project(actual.x, actual.y).y < item.height * 0.7;
      const alpha =
        occludes && item.kind === "building" ? 0.42 : closeTree ? 0.48 : 1;
      item.sprite.alpha += (alpha - item.sprite.alpha) * 0.12;
      if (item.kind === "portal" && item.sprite.visible) {
        const p = project(item.x, item.y);
        this.ground
          .ellipse(p.x, p.y - 1, 37 + Math.sin(this.clock * 2) * 2, 17)
          .stroke({ color: 0xddce8d, width: 1.2, alpha: 0.5 });
        this.ground
          .ellipse(p.x, p.y - 1, 26, 11)
          .stroke({ color: 0xf3ddb1, width: 1, alpha: 0.4 });
      }
    }
    for (const p of players)
      if (!p.zone || p.zone === zone)
        this.drawEntity(p, "player", selfId, selected, hovered, seen);
    for (const e of list(state.enemies))
      if (!e.zone || e.zone === zone)
        this.drawEntity(e, "enemy", selfId, selected, hovered, seen);
    for (const n of list(state.npcs))
      if (!n.zone || n.zone === zone)
        this.drawEntity(n, "npc", selfId, selected, hovered, seen);
    for (const d of list(state.drops))
      if (!d.zone || d.zone === zone)
        this.drawEntity(d, "drop", selfId, selected, hovered, seen);
    for (const [id, entity] of this.entities)
      if (!seen.has(id)) {
        entity.sprite.visible = false;
        entity.label.visible = false;
      }
    this.drawPointer(actual, selected);
    this.drawEffects(list(state.effects), state.time);
    this.drawAmbient(zone);
    this.app.render();
  }

  updateChunks(def) {
    const corners = [
      [-150, -170],
      [this.width + 150, -170],
      [-150, this.height + 170],
      [this.width + 150, this.height + 170],
    ].map(([x, y]) => {
      const sx = x - this.screenOffset.x,
        sy = y - this.screenOffset.y;
      return {
        x: (sx / TILE_X + sy / TILE_Y) / 2,
        y: (sy / TILE_Y - sx / TILE_X) / 2,
      };
    });
    const minX = Math.floor(Math.min(...corners.map((c) => c.x)) / CHUNK),
      maxX = Math.floor(Math.max(...corners.map((c) => c.x)) / CHUNK);
    const minY = Math.floor(Math.min(...corners.map((c) => c.y)) / CHUNK),
      maxY = Math.floor(Math.max(...corners.map((c) => c.y)) / CHUNK);
    const visible = new Set();
    for (let x = minX; x <= maxX; x++)
      for (let y = minY; y <= maxY; y++) {
        if (
          x < -1 ||
          y < -1 ||
          x > Math.ceil(def.width / CHUNK) ||
          y > Math.ceil(def.height / CHUNK)
        )
          continue;
        const key = `${x}:${y}`;
        visible.add(key);
        if (!this.chunks.has(key)) {
          const t = terrainTexture(x, y, this.zone, def);
          const sprite = new Sprite(t.texture),
            p = project(x * CHUNK, y * CHUNK);
          sprite.position.set(p.x - t.ox, p.y - t.oy);
          this.terrain.addChild(sprite);
          this.chunks.set(key, {
            sprite,
            texture: t.texture,
            used: this.clock,
          });
        }
        const chunk = this.chunks.get(key);
        chunk.sprite.visible = true;
        chunk.used = this.clock;
      }
    for (const [key, chunk] of this.chunks) {
      if (!visible.has(key)) chunk.sprite.visible = false;
    }
    // Keep visible chunks, then evict the least recently displayed hidden textures.
    const excess = this.chunks.size - Math.max(90, visible.size);
    if (excess > 0) {
      const cold = [...this.chunks]
        .filter(([key]) => !visible.has(key))
        .sort((a, b) => a[1].used - b[1].used);
      for (const [key, chunk] of cold.slice(0, excess)) {
        chunk.sprite.destroy();
        chunk.texture.destroy(true);
        this.chunks.delete(key);
      }
    }
  }

  drawEntity(entity, kind, selfId, selected, hovered, seen) {
    const key = `${kind}:${entity.id}`;
    seen.add(key);
    const position = this.entityPosition(entity),
      p = project(position.x, position.y);
    const sx = p.x + this.screenOffset.x,
      sy = p.y + this.screenOffset.y;
    const visible =
      sx > -90 && sx < this.width + 90 && sy > -10 && sy < this.height + 150;
    let record = this.entities.get(key);
    const facing = entity.direction ?? entity.facing ?? 0;
    let textureKey;
    if (kind === "drop") textureKey = "loot";
    else if (
      kind === "enemy" &&
      !/bandit|guard|outlaw|swordsman|patrol/i.test(entity.name || "")
    )
      textureKey = "pheasant";
    else
      textureKey = `${entity.classId || (kind === "enemy" ? "fire" : kind === "npc" ? "water" : "trojan")}-${facing >= 4 ? 5 : facing >= 1 && facing <= 3 ? 2 : 0}-${kind === "npc"}`;
    const humanoidClass =
      kind === "npc"
        ? "npc"
        : kind === "enemy"
          ? /guardian|guard/i.test(entity.name || entity.type || "")
            ? "warrior"
            : "trojan"
          : entity.classId || "trojan";
    const artworkHero =
      kind !== "drop" &&
      textureKey !== "pheasant" &&
      (this.characterArt[humanoidClass] || this.art.hero);
    const artworkBird = textureKey === "pheasant" && this.art.pheasant;
    const texture =
      artworkHero ||
      (artworkBird
        ? this.art.pheasant
        : this.asset(textureKey, () =>
            textureKey === "loot"
              ? lootTexture()
              : textureKey === "pheasant"
                ? birdTexture()
                : characterTexture(
                    entity.classId ||
                      (kind === "enemy"
                        ? "fire"
                        : kind === "npc"
                          ? "water"
                          : "trojan"),
                    facing,
                    kind === "npc",
                  ),
          ));
    if (!record) {
      const sprite = new Sprite(texture);
      sprite.anchor.set(
        artworkHero ? (this.characterArt[humanoidClass] ? 0.5 : 0.54) : 0.5,
        artworkHero || artworkBird
          ? 0.995
          : kind === "drop"
            ? 0.83
            : textureKey === "pheasant"
              ? 0.93
              : 0.94,
      );
      const style = {
        fontFamily: "Trebuchet MS,Arial,sans-serif",
        fontSize: kind === "player" ? 11 : 10,
        fill:
          kind === "enemy"
            ? "#f2ead0"
            : kind === "npc"
              ? "#f5dfab"
              : entity.id === selfId
                ? "#fff3c5"
                : "#e6f1dc",
        stroke: { color: "#334739", width: 3 },
        fontWeight: "600",
        letterSpacing: 0.25,
      };
      const label = new Text({
        text: entity.name || (kind === "drop" ? "Loot" : ""),
        style,
      });
      label.anchor.set(0.5, 1);
      this.objects.addChild(sprite);
      this.labels.addChild(label);
      record = {
        sprite,
        label,
        x: position.x,
        y: position.y,
        textureKey,
        lastX: position.x,
        lastY: position.y,
        moving: 0,
      };
      this.entities.set(key, record);
    }
    record.sprite.visible = visible && entity.hp !== 0;
    record.label.visible = visible && entity.hp !== 0;
    if (!visible || entity.hp === 0) return;
    if (record.textureKey !== textureKey) {
      record.sprite.texture = texture;
      record.textureKey = textureKey;
    }
    const movement = Math.hypot(
      position.x - record.lastX,
      position.y - record.lastY,
    );
    record.moving += ((movement > 0.01 ? 1 : 0) - record.moving) * 0.2;
    record.lastX = position.x;
    record.lastY = position.y;
    const bob = !position.lift
      ? Math.sin(
          this.clock * (kind === "enemy" ? 10 : 13) + String(entity.id).length,
        ) *
        record.moving *
        1.8
      : 0;
    const scale = artworkHero
      ? (kind === "npc" ? 108 : kind === "enemy" ? 110 : 117) / texture.height
      : artworkBird
        ? 57 / texture.height
        : kind === "drop"
          ? 0.7
          : textureKey === "pheasant"
            ? 0.68
            : kind === "enemy"
              ? 0.81
              : kind === "npc"
                ? 0.86
                : 0.9;
    record.sprite.scale.set(
      scale * ((artworkHero || artworkBird) && facing >= 4 ? -1 : 1),
      scale,
    );
    if (artworkHero) {
      const tints = {
        trojan: 0xffffff,
        warrior: 0xd7e4ec,
        archer: 0xd6ead5,
        fire: 0xf5d1b1,
        water: 0xcadfec,
      };
      record.sprite.tint =
        kind === "npc"
          ? entity.role === "shop"
            ? 0xe3edcf
            : 0xeee1cb
          : kind === "enemy"
            ? 0xc2b6ab
            : this.characterArt[humanoidClass]
              ? 0xffffff
              : tints[entity.classId] || 0xffffff;
    }
    record.sprite.position.set(p.x, p.y - position.lift + bob);
    record.sprite.zIndex = p.y + 0.1;
    record.sprite.rotation = Math.sin(this.clock * 11) * 0.025 * record.moving;
    if (kind === "drop")
      record.sprite.y += Math.sin(this.clock * 2 + entity.x) * 2;
    if (entity.id === selfId) {
      this.ground
        .ellipse(p.x, p.y + 1, 19, 8)
        .stroke({ color: 0xd8c788, width: 1.2, alpha: 0.8 });
      this.ground
        .ellipse(p.x, p.y + 1, 21, 9)
        .stroke({ color: 0x516c56, width: 0.6, alpha: 0.5 });
    } else if (entity.id === selected || entity.id === hovered) {
      this.ground
        .ellipse(
          p.x,
          p.y + 1,
          kind === "enemy" ? 25 : 21,
          kind === "enemy" ? 12 : 9,
        )
        .stroke({
          color: kind === "enemy" ? 0xb36242 : 0xe4cd8b,
          width: 1.6,
          alpha: 0.9,
        });
      this.ground
        .ellipse(
          p.x,
          p.y + 1,
          kind === "enemy" ? 28 : 24,
          kind === "enemy" ? 14 : 11,
        )
        .stroke({
          color: kind === "enemy" ? 0xd79c63 : 0xecdba2,
          width: 0.5,
          alpha: 0.6,
        });
    }
    const shadowScale = 1 - position.lift / 170;
    this.ground
      .ellipse(
        p.x + position.lift * 0.11,
        p.y + 3,
        (kind === "enemy" ? 16 : 15) * shadowScale,
        6 * shadowScale,
      )
      .fill({ color: 0x30493a, alpha: 0.19 - position.lift / 700 });
    const nameHeight =
      artworkHero || artworkBird
        ? texture.height * scale + 9
        : textureKey === "pheasant"
          ? 52
          : kind === "drop"
            ? 43
            : 102 * scale;
    const name =
      kind === "drop"
        ? entity.name || entity.item?.name || "Silver pouch"
        : entity.name || "";
    if (record.label.text !== name) record.label.text = name;
    record.label.position.set(p.x, p.y - position.lift - nameHeight);
    record.label.alpha = kind === "drop" && entity.id !== hovered ? 0.7 : 1;
    if (kind === "npc") {
      const quest =
        entity.role === "quest" ||
        (!entity.role &&
          entity.quest !== false &&
          !/forge|smith|merchant|shop|compose/i.test(entity.name || ""));
      if (quest) {
        const qy = p.y - nameHeight - 22 - Math.sin(this.clock * 2) * 3;
        this.effects
          .roundRect(p.x - 2, qy - 7, 4, 10, 1)
          .fill({ color: 0xe9c676, alpha: 0.96 });
        this.effects
          .circle(p.x, qy + 7, 2)
          .fill({ color: 0xe9c676, alpha: 0.96 });
      }
    }
    if (entity.shield > 0) {
      const shimmer = 0.35 + Math.sin(this.clock * 3) * 0.08;
      this.effects
        .ellipse(p.x, p.y - position.lift - 49, 32, 51)
        .stroke({ color: 0xb9d9d0, width: 1.7, alpha: shimmer });
      this.effects
        .ellipse(p.x, p.y - position.lift - 49, 36, 54)
        .stroke({ color: 0xc7e9dc, width: 0.6, alpha: shimmer * 0.65 });
    }
    if (kind === "enemy" || (kind === "player" && entity.hp < entity.maxHp)) {
      const ratio = clamp(entity.hp / (entity.maxHp || 1), 0, 1),
        w = kind === "enemy" ? 34 : 42;
      const hy = p.y - position.lift - nameHeight + 5;
      this.effects
        .roundRect(p.x - w / 2 - 1, hy - 1, w + 2, 5, 2)
        .fill({ color: 0x314539, alpha: 0.85 });
      this.effects
        .roundRect(p.x - w / 2, hy, w * ratio, 3, 1)
        .fill({ color: kind === "enemy" ? 0xd69a6c : 0x91b998, alpha: 0.96 });
    }
  }

  drawPointer(self, selected) {
    if (!this.pointer) return;
    const target = this.screenToWorld(this.pointer.x, this.pointer.y);
    const x = Math.round(target.x),
      y = Math.round(target.y),
      p = project(x, y);
    const def = zoneDefs[this.zone];
    const blocked = insideObstacle(x, y, def.obstacles || []);
    this.ground
      .poly([p.x, p.y - 16, p.x + 32, p.y, p.x, p.y + 16, p.x - 32, p.y])
      .stroke({
        color: blocked ? 0xc67d5d : 0xf3e7b4,
        alpha: blocked ? 0.4 : 0.45,
        width: 1,
      });
    const active = this.lastState?.aiming || this.lastState?.skillAim;
    if (active) {
      const start = project(self.x, self.y),
        end = project(target.x, target.y);
      const vx = end.x - start.x,
        vy = end.y - start.y,
        mag = Math.max(1, Math.hypot(vx, vy));
      const tx = start.x + (vx / mag) * 240,
        ty = start.y + (vy / mag) * 240;
      this.ground
        .moveTo(start.x, start.y)
        .lineTo(tx, ty)
        .stroke({ color: 0xf8e6a2, width: 2, alpha: 0.3 });
    }
  }

  drawEffects(effects, serverTime) {
    const activeFloatIds = new Set();
    for (let i = 0; i < effects.length; i++) {
      const e = effects[i];
      if (e.zone && e.zone !== this.zone) continue;
      const type = e.type || e.kind || "hit";
      let progress = e.progress;
      if (progress === undefined) {
        const started =
          e.createdAt ?? e.startTime ?? e.time ?? e.start ?? serverTime;
        const duration = e.duration || 0.65;
        progress =
          serverTime !== undefined && started !== undefined
            ? (serverTime - started) / duration
            : 0.3;
        if (progress > 5) progress = (serverTime - started) / (duration * 1000);
      }
      progress = clamp(progress || 0, 0, 1);
      const alpha = 1 - progress;
      const p = project(e.x ?? e.fromX ?? 0, e.y ?? e.fromY ?? 0);
      const color = /fire|thunder|magic/i.test(type)
        ? 0xefbd79
        : /heal|water/i.test(type)
          ? 0xb8dbbc
          : 0xf8eaca;
      if (
        /damage|text|heal/i.test(type) ||
        e.amount !== undefined ||
        e.damage !== undefined
      ) {
        const id = `fx:${e.id ?? `${i}-${e.x}-${e.y}-${e.time}`}`;
        activeFloatIds.add(id);
        let float = this.entities.get(id);
        const text =
          e.text ||
          (e.amount !== undefined ? `${e.amount}` : `${e.damage ?? ""}`);
        if (!float) {
          const label = new Text({
            text,
            style: {
              fontFamily: "Georgia,serif",
              fontSize: e.critical ? 24 : 18,
              fontWeight: "bold",
              fill: /heal/i.test(type) ? "#cee5b4" : "#fff0c8",
              stroke: { color: "#5e4d39", width: 3 },
            },
          });
          label.anchor.set(0.5);
          this.labels.addChild(label);
          float = { label, sprite: { destroy() {}, visible: false } };
          this.entities.set(id, float);
        }
        float.label.text = text;
        float.label.visible = true;
        float.label.alpha = alpha;
        float.label.position.set(
          p.x + Math.sin(i * 7) * 12,
          p.y - 65 - progress * 48,
        );
        float.label.scale.set(1 + Math.sin(progress * Math.PI) * 0.12);
      }
      if (/slash|scent|blade|attack|line|sword/i.test(type)) {
        const end = project(
          e.toX ?? e.targetX ?? e.x + (e.dx || 3),
          e.toY ?? e.targetY ?? e.y,
        );
        const angle = Math.atan2(end.y - p.y, end.x - p.x),
          nx = -Math.sin(angle),
          ny = Math.cos(angle);
        const len = Math.hypot(end.x - p.x, end.y - p.y);
        const tx =
            p.x +
            Math.cos(angle) *
              Math.max(45, len) *
              Math.min(1, progress * 4 + 0.3),
          ty =
            p.y +
            Math.sin(angle) *
              Math.max(45, len) *
              Math.min(1, progress * 4 + 0.3);
        this.effects
          .poly([
            p.x + nx * 7,
            p.y - 25 + ny * 7,
            tx,
            ty - 25,
            p.x - nx * 7,
            p.y - 25 - ny * 7,
          ])
          .fill({ color, alpha: alpha * 0.7 });
        this.effects
          .moveTo(p.x, p.y - 25)
          .lineTo(tx, ty - 25)
          .stroke({ color: 0xfff6d8, width: 2.2, alpha: alpha * 0.9 });
        this.effects
          .moveTo(p.x + nx * 10, p.y - 25 + ny * 10)
          .lineTo(tx - nx * 3, ty - 25 - ny * 3)
          .stroke({ color: 0x94b6a4, width: 1, alpha: alpha * 0.5 });
      } else if (/aoe|hercules|whirl|burst|level/i.test(type)) {
        const r = (e.radius || 4) * 24 * (0.25 + progress * 0.75);
        this.effects
          .ellipse(p.x, p.y - 14, r, r * 0.5)
          .stroke({ color, width: 5 * alpha + 1, alpha: alpha * 0.8 });
        this.effects
          .ellipse(p.x, p.y - 14, r * 0.8, r * 0.4)
          .stroke({ color: 0xbed8b9, width: 1.4, alpha: alpha * 0.6 });
        for (let k = 0; k < 8; k++) {
          const a = (k / 8) * TAU + progress * 2;
          const px = p.x + Math.cos(a) * r,
            py = p.y - 14 + Math.sin(a) * r * 0.5;
          this.effects
            .moveTo(px, py)
            .lineTo(px - Math.cos(a) * 12, py - Math.sin(a) * 6)
            .stroke({ color, width: 2, alpha: alpha * 0.8 });
        }
      } else if (/arrow|projectile/i.test(type)) {
        const end = project(
          e.toX ?? e.targetX ?? e.x + 5,
          e.toY ?? e.targetY ?? e.y,
        );
        const tx = p.x + (end.x - p.x) * progress,
          ty = p.y + (end.y - p.y) * progress - 27;
        const angle = Math.atan2(end.y - p.y, end.x - p.x);
        this.effects
          .moveTo(tx - Math.cos(angle) * 25, ty - Math.sin(angle) * 25)
          .lineTo(tx, ty)
          .stroke({ color: 0xf4e3b6, width: 2, alpha: 0.9 });
      } else if (!/damage|text/i.test(type)) {
        const rad = 10 + progress * 26;
        this.effects
          .circle(p.x, p.y - 33, rad)
          .stroke({ color, width: 2 * alpha + 0.5, alpha: alpha * 0.7 });
        for (let k = 0; k < 7; k++) {
          const a = (k / 7) * TAU + i;
          this.effects
            .moveTo(p.x + Math.cos(a) * rad, p.y - 33 + Math.sin(a) * rad)
            .lineTo(
              p.x + Math.cos(a) * (rad + 7),
              p.y - 33 + Math.sin(a) * (rad + 7),
            )
            .stroke({ color, width: 1.5, alpha: alpha * 0.8 });
        }
      }
    }
    for (const [id, entity] of this.entities)
      if (id.startsWith("fx:") && !activeFloatIds.has(id)) {
        entity.label.destroy();
        this.entities.delete(id);
      }
  }

  drawAmbient(zone) {
    for (let i = 0; i < 16; i++) {
      const x =
        ((i * 197 + this.clock * (4 + (i % 3))) % (this.width + 100)) -
        50 -
        this.screenOffset.x;
      const y =
        ((i * 137 + Math.sin(this.clock * 0.6 + i) * 15) % this.height) -
        this.screenOffset.y;
      const alpha = 0.18 + Math.sin(this.clock + i) * 0.06;
      this.effects
        .ellipse(x, y, i % 4 === 0 ? 2 : 1, 0.8)
        .fill({ color: zone === "city" ? 0xffedbb : 0xe4e3a2, alpha });
    }
  }

  destroy() {
    this.resizeObserver?.disconnect();
    for (const chunk of this.chunks.values()) chunk.texture.destroy(true);
    for (const asset of this.assets.values())
      (asset.texture || asset)?.destroy?.(true);
    if (this.app) this.app.destroy(true, { children: true, texture: false });
    this.app = null;
  }
}

export default GameRenderer;
