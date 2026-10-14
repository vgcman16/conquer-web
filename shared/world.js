/** Original, clean-room game rules. No proprietary client assets or protocol code. */
export const CLASSES = [
  {
    id: "trojan",
    name: "Trojan",
    description: "Twin blades. Explosive close-range damage.",
    color: "#edb96a",
    weapon: "Twin sabers",
    skill: "Scent Sword",
    range: 2.1,
  },
  {
    id: "warrior",
    name: "Warrior",
    description: "Steel resolve. A sweeping defensive fighter.",
    color: "#a8c6dd",
    weapon: "Iron glaive",
    skill: "Hercules",
    range: 2.3,
  },
  {
    id: "archer",
    name: "Archer",
    description: "Swift shots. Precision at a distance.",
    color: "#87c9a3",
    weapon: "Recurve bow",
    skill: "Scatter",
    range: 10,
  },
  {
    id: "fire",
    name: "Fire Taoist",
    description: "Elemental fire. Dangerous area magic.",
    color: "#eb8e70",
    weapon: "Ember staff",
    skill: "Fire Circle",
    range: 9,
  },
  {
    id: "water",
    name: "Water Taoist",
    description: "Restoring water. Resilient spellcasting.",
    color: "#87c8ed",
    weapon: "Jade staff",
    skill: "Azure Shield",
    range: 9,
  },
];
export const zoneDefs = {
  city: {
    id: "city",
    name: "Twin Haven",
    width: 48,
    height: 48,
    spawn: { x: 24, y: 24 },
    portal: { x: 34, y: 24, to: "wilds", label: "Phoenix Fields" },
    obstacles: [
      { x: 11, y: 13, w: 8, h: 6, type: "building", height: 5 },
      { x: 28, y: 12, w: 7, h: 6, type: "building", height: 5 },
      { x: 12, y: 30, w: 6, h: 7, type: "building", height: 5 },
      { x: 31, y: 31, w: 7, h: 5, type: "building", height: 5 },
      { x: 7, y: 23, w: 5, h: 3, type: "water", height: 0 },
      { x: 40, y: 15, w: 2, h: 2, type: "tree", height: 3 },
      { x: 8, y: 36, w: 2, h: 2, type: "tree", height: 3 },
      { x: 40, y: 35, w: 2, h: 2, type: "tree", height: 3 },
    ],
    npcs: [
      { id: "guide", name: "Captain Shen", role: "quest", x: 22, y: 21 },
      { id: "smith", name: "Master Wu", role: "compose", x: 29, y: 21 },
      { id: "healer", name: "Herbalist Lin", role: "shop", x: 20, y: 26 },
    ],
  },
  wilds: {
    id: "wilds",
    name: "Phoenix Fields",
    width: 48,
    height: 48,
    spawn: { x: 12, y: 24 },
    portal: { x: 8, y: 24, to: "city", label: "Twin Haven" },
    obstacles: [
      { x: 25, y: 13, w: 2, h: 2, type: "tree", height: 3 },
      { x: 29, y: 27, w: 2, h: 2, type: "tree", height: 3 },
      { x: 15, y: 13, w: 2, h: 2, type: "tree", height: 3 },
      { x: 13, y: 33, w: 2, h: 2, type: "tree", height: 3 },
      { x: 32, y: 18, w: 6, h: 8, type: "water", height: 0 },
      { x: 21, y: 30, w: 2, h: 2, type: "rock", height: 1 },
      { x: 35, y: 34, w: 2, h: 2, type: "rock", height: 1 },
      { x: 40, y: 9, w: 2, h: 2, type: "tree", height: 3 },
    ],
    npcs: [{ id: "scout", name: "Scout Mei", role: "quest", x: 10, y: 21 }],
  },
};
const RULES = {
  trojan: { attack: 42, defense: 10, range: 2.1, cooldown: 0.7 },
  warrior: { attack: 36, defense: 19, range: 2.3, cooldown: 0.78 },
  archer: { attack: 31, defense: 8, range: 10, cooldown: 0.62 },
  fire: { attack: 39, defense: 6, range: 9, cooldown: 0.82 },
  water: { attack: 30, defense: 11, range: 9, cooldown: 0.8 },
};
const DIRECTIONS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const within = (x, y, o) =>
  x >= o.x && x < o.x + o.w && y >= o.y && y < o.y + o.h;
const finitePoint = (x, y) => Number.isFinite(x) && Number.isFinite(y);
const clone = (value) => JSON.parse(JSON.stringify(value));
const result = (ok, message, extra = {}) => ({ ok, message, ...extra });

export function isWalkable(zone, x, y) {
  const def = typeof zone === "string" ? zoneDefs[zone] : zone;
  if (
    !def ||
    !finitePoint(x, y) ||
    x < 1 ||
    y < 1 ||
    x >= def.width - 1 ||
    y >= def.height - 1
  )
    return false;
  return !def.obstacles.some((o) => within(Math.round(x), Math.round(y), o));
}
/** Small A* with diagonal corner checks. Paths remain bounded to a single zone. */
export function findPath(zone, start, goal) {
  const sx = Math.round(start.x),
    sy = Math.round(start.y);
  const gx = Math.round(goal.x),
    gy = Math.round(goal.y);
  if (!isWalkable(zone, gx, gy)) return [];
  const key = (x, y) => `${x},${y}`;
  const open = [{ x: sx, y: sy, g: 0, f: Math.hypot(gx - sx, gy - sy) }];
  const scores = new Map([[key(sx, sy), 0]]),
    parents = new Map(),
    closed = new Set();
  let iterations = 0;
  while (open.length && iterations++ < 2400) {
    open.sort((a, b) => a.f - b.f);
    const current = open.shift(),
      ck = key(current.x, current.y);
    if (closed.has(ck)) continue;
    if (current.x === gx && current.y === gy) {
      const path = [];
      let node = current;
      while (parents.has(key(node.x, node.y))) {
        path.unshift({ x: node.x, y: node.y });
        node = parents.get(key(node.x, node.y));
      }
      return path;
    }
    closed.add(ck);
    for (const [dx, dy] of DIRECTIONS) {
      const x = current.x + dx,
        y = current.y + dy,
        k = key(x, y);
      if (!isWalkable(zone, x, y) || closed.has(k)) continue;
      if (
        dx &&
        dy &&
        (!isWalkable(zone, current.x + dx, current.y) ||
          !isWalkable(zone, current.x, current.y + dy))
      )
        continue;
      const g = current.g + (dx && dy ? Math.SQRT2 : 1);
      if (g >= (scores.get(k) ?? Infinity)) continue;
      scores.set(k, g);
      parents.set(k, current);
      open.push({ x, y, g, f: g + Math.hypot(gx - x, gy - y) });
    }
  }
  return [];
}
export function canJump(zone, from, to) {
  if (
    !finitePoint(to.x, to.y) ||
    distance(from, to) > 16.01 ||
    !isWalkable(zone, to.x, to.y)
  )
    return false;
  const def = zoneDefs[zone];
  // Traverse the exact grid cells intersected by the flight, including corner contacts.
  // Access blocks only the landing; intermediate low obstacles can be jumped over.
  const x0 = from.x + 0.5,
    y0 = from.y + 0.5,
    x1 = to.x + 0.5,
    y1 = to.y + 0.5;
  const dx = x1 - x0,
    dy = y1 - y0,
    sx = Math.sign(dx),
    sy = Math.sign(dy);
  let x = Math.floor(x0),
    y = Math.floor(y0),
    endX = Math.floor(x1),
    endY = Math.floor(y1);
  const deltaX = dx === 0 ? Infinity : Math.abs(1 / dx),
    deltaY = dy === 0 ? Infinity : Math.abs(1 / dy);
  let nextX = dx === 0 ? Infinity : ((sx > 0 ? x + 1 : x) - x0) / dx;
  let nextY = dy === 0 ? Infinity : ((sy > 0 ? y + 1 : y) - y0) / dy;
  const blocked = (cx, cy) =>
    def.obstacles.some((o) => (o.height ?? 3) > 2 && within(cx, cy, o));
  if (blocked(x, y)) return false;
  for (let i = 0; i < 100 && (x !== endX || y !== endY); i++) {
    if (Math.abs(nextX - nextY) < 1e-9) {
      if (blocked(x + sx, y) || blocked(x, y + sy)) return false;
      x += sx;
      y += sy;
      nextX += deltaX;
      nextY += deltaY;
    } else if (nextX < nextY) {
      x += sx;
      nextX += deltaX;
    } else {
      y += sy;
      nextY += deltaY;
    }
    if (blocked(x, y)) return false;
  }
  return true;
}
export const EQUIPMENT_SLOTS = [
  "weapon",
  "offhand",
  "armor",
  "helmet",
  "boots",
  "garment",
  "ring",
  "necklace",
];
export const APPEARANCE_MODELS = [
  "sword",
  "glaive",
  "spear",
  "bow",
  "staff",
  "wand",
  "dagger",
  "shield",
  "quiver",
  "orb",
  "light-armor",
  "heavy-armor",
  "crown",
  "boots",
  "cape",
  "ring",
  "necklace",
];
const APPEARANCE_TYPES = [
  "saber",
  "longsword",
  "cleaver",
  "halberd",
  "recurve",
  "longbow",
  "shortbow",
  "ember",
  "jade",
  "crystal",
  "ivory",
  "jade-leather",
  "crimson-iron",
  "bronze",
  "cloudstep",
  "iron",
  "crimson",
  "storm",
  "round",
  "leather",
  "flame",
  "phoenix",
];
const GRIPS = ["single", "dual", "two-hand", "ranged", "caster"];
function sanitizeAppearance(value) {
  if (
    !value ||
    typeof value !== "object" ||
    !APPEARANCE_MODELS.includes(value.model)
  )
    return undefined;
  const color = (value) =>
    typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value);
  const appearance = { model: value.model };
  if (APPEARANCE_TYPES.includes(value.type)) appearance.type = value.type;
  for (const key of ["color", "trim", "glow"])
    if (color(value[key])) appearance[key] = value[key].toLowerCase();
  if (GRIPS.includes(value.grip)) appearance.grip = value.grip;
  return appearance;
}
function item(
  id,
  name,
  icon,
  quality,
  slot,
  attack = 0,
  defense = 0,
  plus = 0,
  qty = 1,
  appearance,
) {
  return {
    id,
    name,
    icon,
    quality,
    slot,
    attack,
    defense,
    plus,
    qty,
    ...(appearance ? { appearance } : {}),
  };
}
function starterInventory(id, archetype) {
  const weapons = {
    trojan: [
      [archetype.weapon, "sword", "saber", "#b9d4d3", "#8c6440", "dual"],
      ["Jade longsword", "sword", "longsword", "#7fc1a3", "#d8b974", "single"],
      ["Crimson cleaver", "sword", "cleaver", "#ce655a", "#e0b76a", "single"],
    ],
    warrior: [
      [archetype.weapon, "glaive", "halberd", "#a5b8c6", "#9a7248", "two-hand"],
      [
        "Jade battle sword",
        "sword",
        "longsword",
        "#7fc1a3",
        "#d8b974",
        "single",
      ],
      ["Phoenix spear", "spear", "storm", "#ddbd72", "#bd604d", "two-hand"],
    ],
    archer: [
      [archetype.weapon, "bow", "recurve", "#a78359", "#d8b974", "ranged"],
      ["Jade longbow", "bow", "longbow", "#7fc1a3", "#d8b974", "ranged"],
      ["Crimson shortbow", "bow", "shortbow", "#ce655a", "#dfbf76", "ranged"],
    ],
    fire: [
      [archetype.weapon, "staff", "ember", "#b27750", "#edaa63", "caster"],
      ["Ivory flame wand", "wand", "ivory", "#e7dfc5", "#dc8b63", "caster"],
      [
        "Crimson crystal staff",
        "staff",
        "crystal",
        "#ce655a",
        "#dfbf76",
        "caster",
      ],
    ],
    water: [
      [archetype.weapon, "staff", "jade", "#7fc1a3", "#d8b974", "caster"],
      ["Ivory tide wand", "wand", "ivory", "#e7dfc5", "#81bdd1", "caster"],
      [
        "Azure crystal staff",
        "staff",
        "crystal",
        "#81bdd1",
        "#e2dbc2",
        "caster",
      ],
    ],
  }[archetype.id];
  const inventory = weapons.map(
    ([name, model, type, color, trim, grip], index) =>
      item(
        index === 0 ? `${id}-weapon` : `${id}-weapon-${index}`,
        name,
        "weapon",
        index === 0 ? "refined" : "unique",
        "weapon",
        [12, 18, 22][index],
        0,
        index === 0 ? 1 : 0,
        1,
        {
          model,
          type,
          color,
          trim,
          grip,
          ...(index === 2 ? { glow: color } : {}),
        },
      ),
  );
  const gear = (suffix, name, slot, attack, defense, appearance) =>
    item(
      `${id}-${suffix}`,
      name,
      slot,
      "normal",
      slot,
      attack,
      defense,
      0,
      1,
      appearance,
    );
  inventory.push(
    gear("armor", "Traveler armor", "armor", 0, 6, {
      model: "light-armor",
      type: "jade-leather",
      color: "#6e9c83",
      trim: "#d4b579",
    }),
    gear("armor-iron", "Crimson iron armor", "armor", 0, 11, {
      model: "heavy-armor",
      type: "crimson-iron",
      color: "#a9584e",
      trim: "#d7b26c",
    }),
    gear("boots", "Cloudstep boots", "boots", 0, 2, {
      model: "boots",
      type: "cloudstep",
      color: "#665044",
      trim: "#bda477",
    }),
    gear("boots-iron", "Iron greaves", "boots", 0, 4, {
      model: "boots",
      type: "iron",
      color: "#a6b5be",
      trim: "#9b7250",
    }),
    gear("helmet", "Iron Crown", "helmet", 0, 3, {
      model: "crown",
      type: "bronze",
      color: "#ae824f",
      trim: "#dec382",
    }),
    gear("garment-crimson", "Crimson cape", "garment", 0, 2, {
      model: "cape",
      type: "crimson",
      color: "#b84548",
      trim: "#e5bc71",
    }),
    gear("garment-ivory", "Ivory cape", "garment", 0, 1, {
      model: "cape",
      type: "ivory",
      color: "#e9e0c9",
      trim: "#96b4aa",
    }),
  );
  const offhand = {
    trojan: [
      "Storm dagger",
      6,
      0,
      {
        model: "dagger",
        type: "storm",
        color: "#a9cad0",
        trim: "#c79860",
        grip: "single",
      },
    ],
    warrior: [
      "Bronze shield",
      0,
      6,
      { model: "shield", type: "round", color: "#ae824f", trim: "#dec382" },
    ],
    archer: [
      "Leather quiver",
      3,
      1,
      { model: "quiver", type: "leather", color: "#825d43", trim: "#c3a276" },
    ],
    fire: [
      "Flame orb",
      4,
      1,
      {
        model: "orb",
        type: "flame",
        color: "#dd9563",
        trim: "#d2b778",
        glow: "#eead69",
      },
    ],
    water: [
      "Jade orb",
      4,
      1,
      {
        model: "orb",
        type: "jade",
        color: "#7fc1a3",
        trim: "#d8b974",
        glow: "#91d6c0",
      },
    ],
  }[archetype.id];
  inventory.push(
    gear("offhand", offhand[0], "offhand", offhand[1], offhand[2], offhand[3]),
  );
  inventory.push(
    gear("necklace", "Jade pendant", "necklace", 0, 2, {
      model: "necklace",
      type: "jade",
      color: "#9ccbb8",
      trim: "#d4bc7b",
      glow: "#a9dbc7",
    }),
  );
  inventory.push(
    item(
      `${id}-potion`,
      "Health potion",
      "potion",
      "normal",
      "consumable",
      0,
      0,
      0,
      5,
    ),
    item(
      `${id}-stone`,
      "Composition stone",
      "stone",
      "unique",
      "material",
      0,
      0,
      0,
      1,
    ),
  );
  return inventory;
}
export function createPlayer(id, name, classId = "trojan") {
  const archetype = CLASSES.find((c) => c.id === classId) ?? CLASSES[0];
  const player = {
    id,
    name:
      String(name || "Wanderer")
        .replace(/[<>\x00-\x1f]/g, "")
        .trim()
        .slice(0, 20) || "Wanderer",
    classId: archetype.id,
    class: archetype.id,
    color: archetype.color,
    range: RULES[archetype.id].range,
    zone: "city",
    x: 24,
    y: 24,
    hp: 300,
    maxHp: 300,
    stamina: 100,
    maxStamina: 100,
    mana: 100,
    maxMana: 100,
    xp: 0,
    nextXp: 100,
    level: 1,
    gold: 125,
    inventory: starterInventory(id, archetype),
    equipment: {
      weapon: `${id}-weapon`,
      armor: `${id}-armor`,
      boots: `${id}-boots`,
    },
    quest: { accepted: false, kills: 0, claimed: false },
    target: null,
    path: [],
    jump: null,
    cooldown: 0,
    skillCooldown: 0,
    shield: 0,
    xpGauge: 0,
    xpReadyUntil: 0,
    pkMode: "peace",
    facing: 2,
    lastMessage:
      "Welcome to Twin Haven. Speak with Captain Shen or enter Phoenix Fields.",
  };
  return syncEquipmentStats(player);
}
/** Restore only local save data. The online server never trusts a supplied save. */
export function hydratePlayer(
  saved,
  id = saved?.id || "local-player",
  name = saved?.name,
  classId = saved?.classId,
) {
  const player = createPlayer(id, name, classId);
  if (!saved || typeof saved !== "object") return player;
  for (const field of ["level", "gold", "xp", "nextXp", "maxHp", "maxMana"]) {
    if (Number.isFinite(saved[field]) && saved[field] >= 0)
      player[field] = Math.min(1000000, Math.floor(saved[field]));
  }
  player.level = Math.max(1, Math.min(120, player.level));
  player.maxHp = Math.max(300, player.maxHp);
  player.maxMana = Math.max(100, player.maxMana);
  player.nextXp = Math.max(100, player.nextXp);
  player.hp = player.maxHp;
  player.mana = player.maxMana;
  if (Array.isArray(saved.inventory)) {
    const starter = player.inventory;
    const allowed = [...EQUIPMENT_SLOTS, "consumable", "material"];
    const valid = saved.inventory
      .slice(0, 100)
      .filter(
        (i) =>
          i &&
          typeof i.id === "string" &&
          typeof i.name === "string" &&
          allowed.includes(i.slot),
      );
    if (valid.length)
      player.inventory = valid.map((i) => ({
        id: i.id.slice(0, 100),
        name: i.name.slice(0, 60),
        icon: String(i.icon || "weapon").slice(0, 20),
        quality: String(i.quality || "normal").slice(0, 20),
        slot: i.slot,
        attack: Math.max(0, Math.min(200, Number(i.attack) || 0)),
        defense: Math.max(0, Math.min(200, Number(i.defense) || 0)),
        plus: Math.max(0, Math.min(12, Math.floor(Number(i.plus) || 0))),
        qty: Math.max(0, Math.min(999, Math.floor(Number(i.qty) || 0))),
        ...(sanitizeAppearance(
          i.appearance ||
            starter.find(
              (template) =>
                template.name === i.name && template.slot === i.slot,
            )?.appearance,
        )
          ? {
              appearance: sanitizeAppearance(
                i.appearance ||
                  starter.find(
                    (template) =>
                      template.name === i.name && template.slot === i.slot,
                  )?.appearance,
              ),
            }
          : {}),
      }));
    // Existing local saves receive the new wardrobe without restoring consumed supplies.
    for (const template of starter)
      if (
        EQUIPMENT_SLOTS.includes(template.slot) &&
        !player.inventory.some(
          (i) => i.name === template.name && i.slot === template.slot,
        )
      )
        player.inventory.push(template);
    player.equipment = {};
    for (const [slot, equipped] of Object.entries(saved.equipment || {})) {
      if (
        EQUIPMENT_SLOTS.includes(slot) &&
        player.inventory.some((i) => i.id === equipped && i.slot === slot)
      )
        player.equipment[slot] = equipped;
    }
  }
  if (saved.quest && typeof saved.quest === "object")
    player.quest = {
      accepted: !!saved.quest.accepted,
      kills: Math.max(0, Math.min(5, Number(saved.quest.kills) || 0)),
      claimed: !!saved.quest.claimed,
    };
  return syncEquipmentStats(player);
}
export function createWorld() {
  const world = {
    time: 0,
    players: [],
    enemies: [],
    drops: [],
    effects: [],
    npcs: [],
    nextId: 1,
    chat: [],
  };
  for (const [zone, def] of Object.entries(zoneDefs))
    for (const npc of def.npcs)
      world.npcs.push({ ...npc, zone, hp: 1, maxHp: 1 });
  const spawns = [
    ["Pheasant", 16, 23],
    ["Pheasant", 18, 27],
    ["Pheasant", 20, 21],
    ["Pheasant", 22, 25],
    ["Pheasant", 18, 18],
    ["Pheasant", 24, 20],
    ["Pheasant", 23, 29],
    ["Pheasant", 27, 23],
    ["Bandit", 27, 35],
    ["Bandit", 31, 31],
    ["Bandit", 34, 30],
    ["Rock Guardian", 38, 38],
  ];
  for (const [name, x, y] of spawns) {
    const tough = name === "Rock Guardian",
      bandit = name === "Bandit";
    world.enemies.push({
      id: `enemy-${world.nextId++}`,
      name,
      type: tough ? "guardian" : bandit ? "bandit" : "pheasant",
      zone: "wilds",
      x,
      y,
      spawnX: x,
      spawnY: y,
      hp: tough ? 260 : bandit ? 115 : 65,
      maxHp: tough ? 260 : bandit ? 115 : 65,
      attack: tough ? 28 : bandit ? 19 : 8,
      defense: tough ? 13 : bandit ? 7 : 2,
      aggressive: bandit || tough,
      target: null,
      cooldown: 0,
      respawnAt: 0,
      wanderAt: 4 + (world.nextId % 5),
      facing: 0,
    });
  }
  return world;
}
export function addPlayer(world, player) {
  if (world.players.some((p) => p.id === player.id)) return false;
  world.players.push(player);
  return player;
}
function effect(world, data) {
  world.effects.push({
    id: `effect-${world.nextId++}`,
    start: world.time,
    duration: 0.65,
    ...data,
  });
}
export function getPlayerStats(player) {
  const base = RULES[player.classId];
  let attack = base.attack + (player.level - 1) * 3,
    defense = base.defense + (player.level - 1) * 2;
  for (const [slot, id] of Object.entries(player.equipment)) {
    const it = player.inventory.find((i) => i.id === id && i.slot === slot);
    if (!it || !EQUIPMENT_SLOTS.includes(slot)) continue;
    attack += (it.attack ?? 0) + (it.attack > 0 ? it.plus * 4 : 0);
    defense += (it.defense ?? 0) + (it.defense > 0 ? it.plus * 2 : 0);
  }
  return { ...base, attack, defense };
}
const stats = getPlayerStats;
function syncEquipmentStats(player) {
  const computed = getPlayerStats(player);
  player.attack = computed.attack;
  player.defense = computed.defense;
  return player;
}
function equipmentResult(player, message) {
  syncEquipmentStats(player);
  return result(true, message, {
    equipment: { ...player.equipment },
    stats: { attack: player.attack, defense: player.defense },
  });
}
function giveXP(world, player, amount) {
  player.xp += amount;
  player.xpGauge = Math.min(100, player.xpGauge + 12);
  if (player.xpGauge === 100 && !player.xpReadyUntil)
    player.xpReadyUntil = world.time + 20;
  while (player.xp >= player.nextXp) {
    player.xp -= player.nextXp;
    player.level++;
    player.nextXp = Math.round(player.nextXp * 1.35);
    player.maxHp += 24;
    player.hp = player.maxHp;
    player.maxMana += 8;
    player.mana = player.maxMana;
    player.lastMessage = `Level ${player.level}! Your vitality and attack have increased.`;
    effect(world, {
      kind: "level",
      zone: player.zone,
      x: player.x,
      y: player.y,
      text: "LEVEL UP",
      color: "#f1d581",
      duration: 1.4,
    });
  }
  syncEquipmentStats(player);
}
function damageEnemy(world, player, enemy, damage) {
  if (enemy.hp <= 0) return;
  enemy.hp = Math.max(0, enemy.hp - damage);
  enemy.target = player.id;
  effect(world, {
    kind: "damage",
    zone: enemy.zone,
    x: enemy.x,
    y: enemy.y,
    amount: damage,
    text: String(damage),
    color: "#ffe4a3",
    targetId: enemy.id,
  });
  if (enemy.hp) return;
  enemy.target = null;
  enemy.respawnAt = world.time + 12;
  giveXP(
    world,
    player,
    enemy.type === "guardian" ? 65 : enemy.type === "bandit" ? 35 : 22,
  );
  if (
    enemy.type === "pheasant" &&
    player.quest.accepted &&
    !player.quest.claimed
  )
    player.quest.kills = Math.min(5, player.quest.kills + 1);
  const gold =
    enemy.type === "guardian" ? 55 : enemy.type === "bandit" ? 22 : 9;
  world.drops.push({
    id: `drop-${world.nextId++}`,
    zone: enemy.zone,
    x: Math.round(enemy.x),
    y: Math.round(enemy.y),
    name: "Silver",
    icon: "gold",
    quality: "normal",
    gold,
    ownerId: player.id,
    expiresAt: world.time + 60,
  });
  if (world.nextId % 3 === 0)
    world.drops.push({
      id: `drop-${world.nextId++}`,
      zone: enemy.zone,
      x: Math.round(enemy.x) + 0.4,
      y: Math.round(enemy.y),
      name: "Composition stone",
      icon: "stone",
      quality: "unique",
      item: item(
        `loot-${world.nextId}`,
        "Composition stone",
        "stone",
        "unique",
        "material",
      ),
      expiresAt: world.time + 60,
    });
  player.lastMessage = `Defeated ${enemy.name}. ${enemy.type === "pheasant" && player.quest.accepted ? `Pheasants: ${player.quest.kills}/5. ` : ""}Pick up the silver.`;
  effect(world, {
    kind: "death",
    zone: enemy.zone,
    x: enemy.x,
    y: enemy.y,
    duration: 0.7,
  });
}
function basicAttack(world, player, target) {
  const s = stats(player);
  if (
    player.cooldown > 0 ||
    player.jump ||
    target.hp <= 0 ||
    distance(player, target) > s.range
  )
    return false;
  player.cooldown = s.cooldown;
  const magic = player.classId === "fire" || player.classId === "water";
  if (magic && player.mana < 3) return false;
  if (magic) player.mana -= 3;
  const damage = Math.max(1, Math.round(s.attack - target.defense));
  damageEnemy(world, player, target, damage);
  effect(world, {
    kind: magic ? "magic" : player.classId === "archer" ? "arrow" : "slash",
    zone: player.zone,
    x: player.x,
    y: player.y,
    toX: target.x,
    toY: target.y,
    targetId: target.id,
    color: player.color,
    duration: 0.3,
  });
  return true;
}
function moveToward(entity, target, speed, dt, zone) {
  const d = distance(entity, target);
  if (d < 0.005) return true;
  const amount = Math.min(d, speed * dt),
    x = entity.x + ((target.x - entity.x) / d) * amount,
    y = entity.y + ((target.y - entity.y) / d) * amount;
  if (!isWalkable(zone, x, y)) return false;
  entity.x = x;
  entity.y = y;
  entity.facing =
    (Math.round(
      Math.atan2(target.y - entity.y, target.x - entity.x) / (Math.PI / 4),
    ) +
      8) %
    8;
  return amount >= d;
}
function switchZone(player, destination) {
  const spawn = zoneDefs[destination].spawn;
  player.zone = destination;
  player.x = spawn.x;
  player.y = spawn.y;
  player.path = [];
  player.target = null;
  player.jump = null;
  player.lastMessage = `Entered ${zoneDefs[destination].name}.`;
}
export function command(world, playerId, input) {
  const player = world.players.find((p) => p.id === playerId);
  if (!player || !input || typeof input.type !== "string")
    return result(false, "Unknown player or command.");
  const type = input.type;
  if (type === "respawn") {
    if (player.hp > 0) return result(false, "You are already standing.");
    switchZone(player, "city");
    player.hp = player.maxHp;
    player.mana = player.maxMana;
    player.stamina = 100;
    player.shield = 0;
    return result(true, "Returned safely to Twin Haven.");
  }
  if (player.hp <= 0)
    return result(false, "You have fallen. Return to Twin Haven to continue.");
  let response;
  if (type === "move") {
    if (player.jump || !finitePoint(input.x, input.y))
      return result(false, "Wait until you land.");
    const destination = { x: Math.round(input.x), y: Math.round(input.y) };
    if (!isWalkable(player.zone, destination.x, destination.y))
      return result(false, "That ground is blocked.");
    const path = findPath(player.zone, player, destination);
    if (!path.length && distance(player, destination) > 0.7)
      return result(false, "There is no clear path.");
    player.path = path;
    player.running = input.run !== false;
    player.target = null;
    return result(true, "Moving.");
  }
  if (type === "jump") {
    if (player.jump || !finitePoint(input.x, input.y))
      return result(false, "Wait until you land.");
    const target = { x: Math.round(input.x), y: Math.round(input.y) };
    if (player.stamina < 10)
      return result(false, "Not enough stamina to jump.");
    if (!canJump(player.zone, player, target))
      return result(
        false,
        "Cannot jump there. Choose clear ground within 16 paces.",
      );
    if (distance(player, target) < 0.5)
      return result(false, "Choose a more distant landing.");
    player.stamina -= 10;
    player.path = [];
    player.target = null;
    player.jump = {
      fromX: player.x,
      fromY: player.y,
      toX: target.x,
      toY: target.y,
      t: 0,
      duration: 0.45 + distance(player, target) * 0.012,
    };
    return result(true, "Jump!");
  }
  if (type === "attack") {
    const enemy = world.enemies.find(
      (e) => e.id === input.targetId && e.zone === player.zone && e.hp > 0,
    );
    if (!enemy) return result(false, "Choose a living creature.");
    player.target = enemy.id;
    player.path = [];
    basicAttack(world, player, enemy);
    return result(true, `Attacking ${enemy.name}.`);
  }
  if (type === "skill") {
    if (player.skillCooldown > 0 || player.jump)
      return result(false, "Your skill is recovering.");
    const magic = player.classId === "fire" || player.classId === "water",
      cost = magic ? 20 : 15;
    if (magic ? player.mana < cost : player.stamina < cost)
      return result(false, `Not enough ${magic ? "mana" : "stamina"}.`);
    const aim = finitePoint(input.x, input.y)
      ? { x: input.x, y: input.y }
      : { x: player.x + 6, y: player.y };
    if (magic) player.mana -= cost;
    else player.stamina -= cost;
    player.skillCooldown = player.classId === "water" ? 6 : 1.6;
    const s = stats(player),
      d = Math.max(0.001, distance(player, aim)),
      vx = (aim.x - player.x) / d,
      vy = (aim.y - player.y) / d;
    const xpBonus = player.xpGauge >= 100 ? 1.5 : 1;
    if (xpBonus > 1) {
      player.xpGauge = 0;
      player.xpReadyUntil = 0;
    }
    const targets = world.enemies.filter(
      (e) => e.zone === player.zone && e.hp > 0,
    );
    if (player.classId === "water") {
      player.shield = 100;
      player.hp = Math.min(player.maxHp, player.hp + 85);
      effect(world, {
        kind: "shield",
        zone: player.zone,
        x: player.x,
        y: player.y,
        color: player.color,
        duration: 1.2,
      });
      response = result(
        true,
        "Azure Shield restores vitality and absorbs 100 damage.",
      );
    } else {
      let hits = 0;
      for (const enemy of targets) {
        const dx = enemy.x - player.x,
          dy = enemy.y - player.y,
          forward = dx * vx + dy * vy,
          side = Math.abs(dx * vy - dy * vx);
        const hit =
          player.classId === "trojan"
            ? forward >= 0 && forward <= 11 && side <= 1.35
            : player.classId === "warrior"
              ? distance(player, enemy) <= 6
              : player.classId === "fire"
                ? distance(aim, enemy) <= 4.5 && distance(player, aim) <= 12
                : forward >= 0 && forward <= 12 && side <= 2.7 + forward * 0.22;
        if (hit) {
          damageEnemy(
            world,
            player,
            enemy,
            Math.max(
              1,
              Math.round((s.attack * 1.35 - enemy.defense) * xpBonus),
            ),
          );
          hits++;
        }
      }
      effect(world, {
        kind:
          player.classId === "trojan"
            ? "line"
            : player.classId === "archer"
              ? "scatter"
              : "burst",
        zone: player.zone,
        x: player.classId === "fire" ? aim.x : player.x,
        y: player.classId === "fire" ? aim.y : player.y,
        fromX: player.x,
        fromY: player.y,
        toX: player.x + vx * 11,
        toY: player.y + vy * 11,
        color: player.color,
        duration: 0.55,
      });
      response = result(
        true,
        `${CLASSES.find((c) => c.id === player.classId).skill}${hits ? `: ${hits} ${hits === 1 ? "hit" : "hits"}` : ". Aim toward a creature."}`,
      );
    }
    player.lastMessage = response.message;
    return response;
  }
  if (type === "potion") {
    const potion = player.inventory.find(
      (i) => i.icon === "potion" && i.qty > 0,
    );
    if (!potion) return result(false, "No potions left. Visit Herbalist Lin.");
    if (player.hp === player.maxHp && player.mana === player.maxMana)
      return result(false, "Health and mana are full.");
    potion.qty--;
    player.hp = Math.min(player.maxHp, player.hp + 140);
    player.mana = Math.min(player.maxMana, player.mana + 45);
    effect(world, {
      kind: "heal",
      zone: player.zone,
      x: player.x,
      y: player.y,
      text: "+140",
      color: "#9bebb1",
    });
    return result(true, "Potion restores 140 health and 45 mana.");
  }
  if (type === "pickup") {
    const nearby = world.drops.filter(
      (d) =>
        d.zone === player.zone &&
        distance(player, d) <= 3.2 &&
        (!input.dropId || d.id === input.dropId),
    );
    if (!nearby.length)
      return result(false, "Move within three paces of the loot.");
    for (const drop of nearby) {
      if (drop.gold) player.gold += drop.gold;
      if (drop.item) {
        const existing = player.inventory.find(
          (i) => i.slot === "material" && i.name === drop.item.name,
        );
        if (existing) existing.qty += drop.item.qty;
        else player.inventory.push(drop.item);
      }
    }
    world.drops = world.drops.filter((d) => !nearby.includes(d));
    return result(
      true,
      `Collected ${nearby.length} ${nearby.length === 1 ? "drop" : "drops"}.`,
    );
  }
  if (type === "interact") {
    const npc = world.npcs.find(
      (n) => n.id === input.npcId && n.zone === player.zone,
    );
    if (!npc || distance(player, npc) > 6)
      return result(false, "Move closer to speak.");
    if (npc.role === "quest")
      return result(
        true,
        player.quest.claimed
          ? "You have our thanks, traveler. The fields are safer."
          : player.quest.accepted
            ? `Defeat five Pheasants in Phoenix Fields. Progress: ${player.quest.kills}/5.`
            : "Pheasants are overrunning the fields. Defeat five for 150 silver and a refined ring.",
        { npc, dialog: "quest" },
      );
    if (npc.role === "compose")
      return result(
        true,
        "Use a composition stone and 25 silver to improve equipped gear. Each tier strengthens its stats.",
        { npc, dialog: "compose" },
      );
    if (npc.role === "shop") {
      player.hp = player.maxHp;
      player.mana = player.maxMana;
      let potion = player.inventory.find((i) => i.icon === "potion");
      if (!potion) {
        potion = item(
          `${player.id}-potion`,
          "Health potion",
          "potion",
          "normal",
          "consumable",
          0,
          0,
          0,
          0,
        );
        player.inventory.push(potion);
      }
      const bought = Math.min(8 - potion.qty, Math.floor(player.gold / 8));
      potion.qty += Math.max(0, bought);
      player.gold -= Math.max(0, bought) * 8;
      return result(
        true,
        `Health and mana restored. ${bought > 0 ? `Purchased ${bought} potions for ${bought * 8} silver.` : "Your supplies are ready."}`,
        { npc, dialog: "shop" },
      );
    }
  }
  if (type === "quest_accept") {
    if (player.quest.accepted)
      return result(false, "This task is already in your journal.");
    const npc = world.npcs.find(
      (n) =>
        n.role === "quest" &&
        n.zone === player.zone &&
        distance(player, n) <= 6,
    );
    if (!npc)
      return result(false, "Speak with Captain Shen or Scout Mei first.");
    player.quest.accepted = true;
    return result(
      true,
      "Task accepted: defeat five Pheasants in Phoenix Fields.",
    );
  }
  if (type === "quest_claim") {
    if (
      !player.quest.accepted ||
      player.quest.kills < 5 ||
      player.quest.claimed
    )
      return result(
        false,
        "Defeat five Pheasants before claiming your reward.",
      );
    const npc = world.npcs.find(
      (n) =>
        n.role === "quest" &&
        n.zone === player.zone &&
        distance(player, n) <= 6,
    );
    if (!npc)
      return result(
        false,
        "Return to Captain Shen or Scout Mei for your reward.",
      );
    player.quest.claimed = true;
    player.gold += 150;
    giveXP(world, player, 80);
    const ring = item(
      `${player.id}-quest-ring`,
      "Phoenix ring",
      "ring",
      "refined",
      "ring",
      8,
      0,
      1,
      1,
      { model: "ring", type: "phoenix", color: "#d0ad57", glow: "#e3c777" },
    );
    player.inventory.push(ring);
    player.equipment.ring = ring.id;
    syncEquipmentStats(player);
    return result(
      true,
      "Task complete! +150 silver, +80 experience, and a Phoenix ring equipped.",
    );
  }
  if (type === "equip") {
    const it = player.inventory.find((i) => i.id === input.itemId);
    if (!it || !EQUIPMENT_SLOTS.includes(it.slot))
      return result(false, "Choose equipment from your inventory.");
    if (player.equipment[it.slot] === it.id) {
      delete player.equipment[it.slot];
      return equipmentResult(player, `Unequipped ${it.name}.`);
    }
    player.equipment[it.slot] = it.id;
    return equipmentResult(player, `Equipped ${it.name}.`);
  }
  if (type === "unequip") {
    if (!EQUIPMENT_SLOTS.includes(input.slot))
      return result(false, "Choose an equipment slot.");
    const equipped = player.inventory.find(
      (i) => i.id === player.equipment[input.slot],
    );
    if (!equipped) return result(false, "That slot is already empty.");
    delete player.equipment[input.slot];
    return equipmentResult(player, `Unequipped ${equipped.name}.`);
  }
  if (type === "compose") {
    const it = player.inventory.find((i) => i.id === input.itemId);
    const smith = world.npcs.find(
      (n) =>
        n.role === "compose" &&
        n.zone === player.zone &&
        distance(player, n) <= 6,
    );
    const stone = player.inventory.find((i) => i.icon === "stone" && i.qty > 0);
    if (!smith) return result(false, "Visit Master Wu to compose equipment.");
    if (
      !it ||
      !EQUIPMENT_SLOTS.includes(it.slot) ||
      (it.attack <= 0 && it.defense <= 0) ||
      it.plus >= 12
    )
      return result(false, "Choose equipment below +12.");
    if (!stone || player.gold < 25)
      return result(false, "Composition needs one stone and 25 silver.");
    stone.qty--;
    player.gold -= 25;
    it.plus++;
    return equipmentResult(player, `${it.name} is now +${it.plus}.`);
  }
  if (type === "portal") {
    const portal = zoneDefs[player.zone].portal;
    if (player.jump || distance(player, portal) > 3.2)
      return result(false, "Move onto the glowing portal.");
    switchZone(player, portal.to);
    return result(true, `Entered ${zoneDefs[player.zone].name}.`);
  }
  if (type === "pk_mode") {
    player.pkMode = player.pkMode === "peace" ? "team" : "peace";
    return result(true, `Mode: ${player.pkMode}.`);
  }
  return result(false, "Unknown command.");
}
export function updateWorld(world, dtSeconds) {
  const dt = Math.max(0, Math.min(0.1, Number(dtSeconds) || 0));
  world.time += dt;
  world.effects = world.effects.filter(
    (e) => world.time - e.start < e.duration,
  );
  world.drops = world.drops.filter((d) => d.expiresAt > world.time);
  for (const player of world.players) {
    player.cooldown = Math.max(0, player.cooldown - dt);
    player.skillCooldown = Math.max(0, player.skillCooldown - dt);
    if (player.hp <= 0) {
      player.path = [];
      player.target = null;
      player.jump = null;
      continue;
    }
    player.stamina = Math.min(
      player.maxStamina,
      player.stamina + dt * (player.path.length ? 5 : 12),
    );
    player.mana = Math.min(player.maxMana, player.mana + dt * 3.5);
    if (player.zone === "city")
      player.hp = Math.min(player.maxHp, player.hp + dt * 8);
    if (player.xpReadyUntil && world.time >= player.xpReadyUntil) {
      player.xpGauge = 0;
      player.xpReadyUntil = 0;
    }
    if (player.jump) {
      const j = player.jump;
      j.t = Math.min(j.duration, j.t + dt);
      const f = j.t / j.duration;
      player.x = j.fromX + (j.toX - j.fromX) * f;
      player.y = j.fromY + (j.toY - j.fromY) * f;
      if (f >= 1) {
        player.jump = null;
        effect(world, {
          kind: "land",
          zone: player.zone,
          x: player.x,
          y: player.y,
          duration: 0.35,
        });
      }
      continue;
    }
    if (player.target) {
      const enemy = world.enemies.find(
        (e) => e.id === player.target && e.zone === player.zone && e.hp > 0,
      );
      if (!enemy) player.target = null;
      else {
        const s = stats(player);
        if (distance(player, enemy) <= s.range) {
          player.path = [];
          basicAttack(world, player, enemy);
        } else if (!player.path.length)
          player.path = findPath(player.zone, player, enemy);
      }
    }
    let budget = (player.running === false ? 4.5 : 7.5) * dt;
    while (player.path.length && budget > 0) {
      const point = player.path[0],
        d = distance(player, point);
      if (d <= budget) {
        player.x = point.x;
        player.y = point.y;
        player.path.shift();
        budget -= d;
      } else {
        moveToward(player, point, budget, 1, player.zone);
        budget = 0;
      }
    }
    const portal = zoneDefs[player.zone].portal;
    if (distance(player, portal) < 0.8 && !player.path.length)
      switchZone(player, portal.to);
  }
  for (const enemy of world.enemies) {
    enemy.cooldown = Math.max(0, enemy.cooldown - dt);
    if (enemy.hp <= 0) {
      if (world.time >= enemy.respawnAt) {
        enemy.hp = enemy.maxHp;
        enemy.x = enemy.spawnX;
        enemy.y = enemy.spawnY;
        enemy.target = null;
      }
      continue;
    }
    let target = world.players.find(
      (p) => p.id === enemy.target && p.zone === enemy.zone && p.hp > 0,
    );
    if (target && distance(enemy, target) > 15) {
      enemy.target = null;
      target = null;
    }
    if (!target && enemy.aggressive) {
      target = world.players
        .filter(
          (p) => p.zone === enemy.zone && p.hp > 0 && distance(enemy, p) < 6,
        )
        .sort((a, b) => distance(enemy, a) - distance(enemy, b))[0];
      if (target) enemy.target = target.id;
    }
    if (target) {
      if (distance(enemy, target) > 1.6)
        moveToward(
          enemy,
          target,
          enemy.type === "pheasant" ? 3 : 3.5,
          dt,
          enemy.zone,
        );
      else if (!target.jump && enemy.cooldown <= 0) {
        enemy.cooldown = 1.2;
        let damage = Math.max(
          1,
          enemy.attack - Math.round(stats(target).defense * 0.5),
        );
        if (target.shield > 0) {
          const absorbed = Math.min(damage, target.shield);
          target.shield -= absorbed;
          damage -= absorbed;
        }
        target.hp = Math.max(0, target.hp - damage);
        effect(world, {
          kind: "damage",
          zone: target.zone,
          x: target.x,
          y: target.y,
          text: String(damage),
          amount: damage,
          color: "#f39788",
          targetId: target.id,
        });
        if (!target.hp)
          target.lastMessage =
            "You have fallen. Press Return to Town to revive.";
      }
    }
  }
}
export function snapshot(world, playerId) {
  const self = world.players.find((p) => p.id === playerId),
    zone = self?.zone ?? "city",
    def = zoneDefs[zone];
  for (const player of world.players) syncEquipmentStats(player);
  const state = {
    time: world.time,
    selfId: playerId,
    zone,
    zoneName: def.name,
    width: def.width,
    height: def.height,
    portal: def.portal,
    obstacles: def.obstacles,
    players: world.players.filter((p) => p.zone === zone),
    enemies: world.enemies.filter((e) => e.zone === zone),
    npcs: world.npcs.filter((n) => n.zone === zone),
    drops: world.drops.filter((d) => d.zone === zone),
    effects: world.effects.filter((e) => e.zone === zone),
    chat: world.chat.slice(-30),
  };
  return clone(state);
}
