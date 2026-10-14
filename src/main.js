import "./style.css";
import { GameRenderer } from "./renderer3d.js";
import {
  CLASSES,
  zoneDefs,
  createWorld,
  createPlayer,
  hydratePlayer,
  addPlayer,
  updateWorld,
  command,
  snapshot,
} from "../shared/world.js";

const paths = {
  sword: "M6 18 18 6M6 6l12 12M3 21l4-4M17 7l4-4M4 14l6 6M14 4l6 6",
  shield: "M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6zM12 8v8M8 12h8",
  bow: "M5 3c16 2 16 16 0 18M5 3l8 9-8 9M4 12h16M17 9l3 3-3 3",
  magic: "M12 3v18M3 12h18M5 5l14 14M5 19 19 5M9 3l3 3 3-3M9 21l3-3 3 3",
  bag: "M7 7V5a5 5 0 0 1 10 0v2M4 7h16l1 14H3zM9 12h6",
  potion: "M9 3h6M9 3v5l-4 7a4 4 0 0 0 3 6h8a4 4 0 0 0 3-6l-4-7V3M7 14h10",
  jump: "M5 19c0-10 14-10 14 0M15 15l4 4 3-4M4 21h5",
  scroll:
    "M6 4h12v16H6zM6 4H4a2 2 0 0 0 0 4h2M18 16h2a2 2 0 0 1 0 4h-2M9 9h6M9 13h5",
  coin: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M9 9h6v6H9z",
  help: "M9 8a3 3 0 1 1 5 2c-2 1-2 2-2 4M12 17h.01M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18",
  volume: "M3 9h4l5-4v14l-5-4H3zM16 8c3 2 3 6 0 8M19 5c5 4 5 10 0 14",
  arrow: "M4 12h16M15 7l5 5-5 5",
  connect: "M8 8h8v8H8zM12 3v5M12 16v5M3 12h5M16 12h5",
  gem: "M3 8l4-5h10l4 5-9 13zM3 8h18M7 3l5 18 5-18",
  chat: "M4 4h16v12H8l-4 4z",
  fullscreen: "M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5",
  moon: "M17 3a9 9 0 1 0 4 14A9 9 0 0 1 17 3",
  map: "M3 5l6-2 6 2 6-2v16l-6 2-6-2-6 2zM9 3v16M15 5v16",
};
const icon = (n) =>
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[n] || paths.gem}"/></svg>`;
const classIcon = (id) =>
  ({
    trojan: "sword",
    warrior: "shield",
    archer: "bow",
    taoist: "magic",
    fire: "magic",
    water: "magic",
  })[id] || "sword";
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const $ = (s) => document.querySelector(s);
let saved = null;
try {
  saved = JSON.parse(localStorage.getItem("jade-realm-save-v1") || "null");
} catch {}
let chosenClass = saved?.classId || "trojan",
  world = createWorld(),
  selfId = "local-hero",
  state,
  mode = "intro",
  targetId = null,
  socket = null,
  online = false,
  travelIntent = false,
  mobileJump = false,
  sound = false,
  audio = null,
  lastUi = 0,
  lastSave = 0,
  autoAttack = 0,
  pointer = { x: 28, y: 24 },
  messages = [];
let pendingInventoryRefresh = false;
let player = createPlayer(selfId, saved?.name || "Wanderer", chosenClass);
addPlayer(world, player);
state = snapshot(world, selfId);

$("#app").innerHTML = `
<header class="app-header"><div class="emblem"><span>龍</span></div><div class="brand">JADE REALM<small>CONQUER WEB · 3D REALM</small></div><div class="header-divider"></div><span class="header-label">THE ROAD TO IMMORTALITY</span><div class="header-spacer"></div><span class="status" id="status"><i class="status-dot"></i> SOLO REALM</span><button class="header-link" id="connect-btn" title="Connect to multiplayer server">${icon("connect")}<span>Multiplayer</span></button><button class="header-link" id="help-btn" title="Controls">${icon("help")}</button></header>
<main class="game-shell"><div id="game"></div><div class="hud">
<div class="player-card panel"><div class="portrait" id="portrait">${icon(classIcon(chosenClass))}<span class="level" id="level">1</span></div><div><div class="player-name" id="player-name">Wanderer</div><div class="player-class" id="player-class">TROJAN · NOVICE</div><div class="meter"><i id="hp-bar"></i></div><div class="meter stamina"><i id="stamina-bar"></i></div><div class="meter mana"><i id="mana-bar"></i></div></div><span class="resource-text" id="hp-text"></span></div>
<div class="zone-heading"><small>THE JADE PROVINCE</small><h1 id="zone-title">Twin Haven</h1><p id="zone-desc">A sanctuary beneath the mountain</p></div>
<div class="minimap panel"><div class="minimap-head"><span>WORLD MAP</span>${icon("map")}</div><canvas id="minimap" width="264" height="224"></canvas><div class="map-coords"><span id="coords">24, 24</span><span id="map-zone">SAFE ZONE</span></div></div>
<div class="quest-card panel"><div class="eyebrow">${icon("scroll")} YOUR JOURNEY</div><h3 id="quest-title">A warrior’s beginning</h3><p id="quest-description">The captain has a task for you. Speak to him in the city courtyard.</p><div class="quest-progress" id="quest-progress"></div><button class="link-button" id="quest-btn">Find the captain ${icon("arrow")}</button></div>
<div class="target-card panel" id="target-card"><b id="target-name"></b><div class="meter"><i id="target-hp"></i></div></div>
<div class="chat-card panel"><div class="chat-tabs"><b>REALM</b><span>EVENTS</span></div><div class="chat-log" id="chat-log"></div><form class="chat-input" id="chat-form">${icon("chat")}<input id="chat-text" maxlength="140" aria-label="Chat message" placeholder="Press Enter to chat…"></form></div>
<div class="dock-caption">CLICK TO MOVE <span style="opacity:.5">·</span> RIGHT CLICK TO JUMP</div><div class="action-dock panel"><button class="dock-button" id="attack-btn" title="Attack nearest target · Space"><small>SPACE</small>${icon("sword")}</button><button class="dock-button gold" id="skill-btn" title="Class skill · Q"><small>Q</small>${icon("magic")}</button><button class="dock-button blue" id="jump-btn" title="Jump toward cursor · J"><small>J</small>${icon("jump")}</button><button class="dock-button purple" id="potion-btn" title="Use healing potion · 1"><small>1</small>${icon("potion")}<span class="count" id="potion-count">5</span></button><div class="dock-divider"></div><button class="dock-button" id="interact-btn" title="Interact or use nearby portal · E"><small>E</small>${icon("scroll")}</button><div class="xp-meter"><i id="xp-bar"></i></div></div>
<div class="gold-display">${icon("coin")}<span id="gold">0</span> silver</div><div class="utility-dock"><button class="utility-button" id="bag-btn" title="Inventory · I">${icon("bag")}<small>I</small></button><button class="utility-button" id="sound-btn" title="Enable sound">${icon("volume")}</button><button class="utility-button" id="travel-btn" title="Travel between city and wilds">${icon("map")}</button><button class="utility-button" id="fullscreen-btn" title="Fullscreen · F">${icon("fullscreen")}</button></div>
<div class="toast hidden" id="toast" role="status"></div></div><div class="zone-flash" id="zone-flash"></div><div class="overlay" id="intro"></div><div class="overlay hidden" id="modal"></div></main>`;

const renderer = new GameRenderer();
$("#intro").innerHTML =
  '<section class="modal loading-modal"><div class="eyebrow">JADE REALM</div><h2>The gates are opening</h2><p>Preparing your world…</p><div class="loading-realm"><i></i></div></section>';
await renderer.init($("#game"));
let introDescription = () => {
  const c = CLASSES.find((c) => c.id === chosenClass);
  return (
    c?.description ||
    "Master the blade. Close the distance, strike, and leap away."
  );
};
function renderIntro() {
  $("#intro").innerHTML =
    `<section class="modal intro-modal"><div class="intro-figure" aria-hidden="true"></div><div class="intro-content"><div class="intro-crest">龍</div><h2>Enter the Jade Realm</h2><div class="subtitle">YOUR JOURNEY BEGINS WITH A SINGLE LEAP</div><p>An open world of ancient cities, untamed wilds,<br>and the art of the blade. Choose your path.</p><div class="class-grid" style="grid-template-columns:repeat(${CLASSES.length},1fr)">${CLASSES.map((c) => `<button class="class-option ${chosenClass === c.id ? "active" : ""}" data-class="${c.id}">${icon(classIcon(c.id))}<span>${esc(c.name)}</span></button>`).join("")}</div><div class="class-description">${esc(introDescription())}</div><label class="name-label" for="hero-name">YOUR CHARACTER’S NAME</label><input class="name-input" id="hero-name" maxlength="18" value="${esc(saved?.name || "Wanderer")}" autocomplete="off"><button id="start-btn" class="primary">${saved ? "CONTINUE YOUR JOURNEY" : "BEGIN YOUR JOURNEY"} ${icon("arrow")}</button><p class="intro-note">A living 3D world · Animated characters · Free to explore<br>Progress saves in this browser. Multiplayer is available through your own server.</p></div></section>`;
  document.querySelectorAll("[data-class]").forEach(
    (b) =>
      (b.onclick = () => {
        saved = { ...saved, name: $("#hero-name").value };
        chosenClass = b.dataset.class;
        if (mode === "intro") {
          world = createWorld();
          player = createPlayer(selfId, saved?.name || "Wanderer", chosenClass);
          addPlayer(world, player);
          state = snapshot(world, selfId);
        }
        renderIntro();
      }),
  );
  $("#start-btn").onclick = () => startGame($("#hero-name").value);
  $("#hero-name").onkeydown = (e) => {
    if (e.key === "Enter") startGame(e.target.value);
  };
}
function startGame(name) {
  world = createWorld();
  const heroName = name.trim().slice(0, 18) || "Wanderer";
  player =
    saved?.classId === chosenClass
      ? hydratePlayer(saved, selfId, heroName, chosenClass)
      : createPlayer(selfId, heroName, chosenClass);
  addPlayer(world, player);
  state = snapshot(world, selfId);
  mode = "play";
  $("#intro").classList.add("hidden");
  log("Welcome", `${player.name}, your story begins in Twin Haven.`);
  log("Guide", "Click to walk. Right click to jump. E to speak.");
  toast("Speak to Captain Shen to begin your first quest.");
  updateUI();
  save();
}
function self() {
  return state?.players?.find((p) => p.id === selfId) || player;
}
function log(name, text) {
  messages.push({ name, text });
  messages = messages.slice(-3);
  $("#chat-log").innerHTML = messages
    .map((m) => `<div><span>${esc(m.name)}</span> ${esc(m.text)}</div>`)
    .join("");
}
let toastTimer;
function toast(text) {
  if (!text) return;
  $("#toast").textContent = text;
  $("#toast").classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("#toast").classList.add("hidden"), 2700);
}
function playTone(kind) {
  if (!sound) return;
  try {
    audio ??= new AudioContext();
    const osc = audio.createOscillator(),
      gain = audio.createGain();
    osc.connect(gain);
    gain.connect(audio.destination);
    osc.type = kind === "attack" ? "triangle" : "sine";
    osc.frequency.setValueAtTime(
      kind === "attack" ? 280 : kind === "jump" ? 480 : 660,
      audio.currentTime,
    );
    osc.frequency.exponentialRampToValueAtTime(
      kind === "attack" ? 70 : 240,
      audio.currentTime + 0.13,
    );
    gain.gain.setValueAtTime(0.025, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.16);
    osc.start();
    osc.stop(audio.currentTime + 0.17);
  } catch {}
}
function perform(cmd, { quiet = false } = {}) {
  if (mode !== "play" && cmd.type !== "respawn") return { ok: false };
  if (online) {
    if (socket?.readyState !== WebSocket.OPEN) return { ok: false };
    socket.send(JSON.stringify({ type: "command", command: cmd }));
    return { ok: true };
  }
  const oldZone = self().zone,
    result = command(world, selfId, cmd) || { ok: true };
  state = snapshot(world, selfId);
  if (result.message && !quiet) toast(result.message);
  if (result.ok && ["attack", "skill", "jump", "pickup"].includes(cmd.type))
    playTone(cmd.type);
  if (cmd.type === "interact" && result.ok) {
    const npc = result.npc || state.npcs.find((n) => n.id === cmd.npcId);
    if (npc) showNpc(npc);
  }
  if (
    result.ok &&
    ["quest_accept", "quest_claim", "compose", "equip", "unequip"].includes(
      cmd.type,
    )
  ) {
    log("Journey", result.message || "Your progress has been updated.");
    save();
  }
  if (oldZone !== self().zone) onZoneChange();
  updateUI();
  return result;
}
function onZoneChange() {
  targetId = null;
  travelIntent = false;
  $("#zone-flash").style.opacity = ".5";
  setTimeout(() => ($("#zone-flash").style.opacity = "0"), 100);
  log("Realm", `You entered ${zoneDefs[self().zone]?.name || self().zone}.`);
}
function openModal(html) {
  $("#modal").innerHTML =
    `<section class="modal">${html}<button class="modal-close" id="close-modal" aria-label="Close">×</button></section>`;
  $("#modal").classList.remove("hidden");
  $("#close-modal").onclick = closeModal;
}
function closeModal() {
  $("#modal").classList.add("hidden");
  if (mode === "dead") mode = "play";
}
function showNpc(npc) {
  const role = npc.role || "steward",
    p = self(),
    quest = p.quest || {};
  if (/steward|quest|task/i.test(role) || /shen|steward/i.test(npc.name)) {
    openModal(
      `<div class="eyebrow">${icon("scroll")} CITY CAPTAIN</div><h2>${esc(npc.name)}</h2><p>Welcome, traveler. Beyond the eastern gate, pheasants have overrun the fields. Clear five of them and return to me. You will be rewarded for your help.</p><div class="equipped-row">${icon("coin")}<span>Reward: 150 silver, 80 experience & a Phoenix ring</span></div><div class="dialog-options">${!quest.accepted ? '<button id="accept-quest">I will help. Accept the quest.</button>' : !quest.claimed ? `<button id="claim-quest" ${quest.kills < 5 ? "disabled" : ""}>${quest.kills >= 5 ? "I have cleared the fields. Claim reward." : `Pheasants defeated: ${quest.kills || 0} / 5`}</button>` : '<button id="done-quest">The fields are safe. Thank you, traveler.</button>'}<button id="npc-leave">Continue exploring</button></div>`,
    );
    $("#accept-quest")?.addEventListener("click", () => {
      perform({ type: "quest_accept" });
      closeModal();
    });
    $("#claim-quest")?.addEventListener("click", () => {
      perform({ type: "quest_claim" });
      closeModal();
    });
    $("#done-quest")?.addEventListener("click", closeModal);
  } else if (/forge|compose/i.test(role)) {
    openModal(
      `<div class="eyebrow">${icon("gem")} THE FORGE</div><h2>${esc(npc.name)}</h2><p>Your weapon carries your spirit. Bring an upgrade stone and I can strengthen it. Each composition consumes one stone and 25 silver, adding one enhancement level.</p><div class="dialog-options"><button id="npc-forge">Open equipment & composition</button><button id="npc-leave">Leave the forge</button></div>`,
    );
    $("#npc-forge").onclick = showInventory;
  } else {
    openModal(
      `<div class="eyebrow">${icon("potion")} CITY HEALER</div><h2>${esc(npc.name)}</h2><p>Rest your blade for a moment. The city is a sanctuary. I restore your health and mana, and refill your supplies to eight potions for eight silver each. Healing potions will keep you safe in the wilds.</p><div class="dialog-options"><button id="npc-heal">Use a healing potion</button><button id="npc-leave">Continue exploring</button></div>`,
    );
    $("#npc-heal").onclick = () => {
      perform({ type: "potion" });
      closeModal();
    };
  }
  $("#npc-leave")?.addEventListener("click", closeModal);
}
const EQUIPMENT_SLOTS = [
  { id: "helmet", name: "Helmet", icon: "shield" },
  { id: "necklace", name: "Necklace", icon: "gem" },
  { id: "armor", name: "Armor", icon: "shield" },
  { id: "garment", name: "Garment", icon: "scroll" },
  { id: "weapon", name: "Weapon", icon: "sword" },
  { id: "offhand", name: "Off-hand", icon: "shield" },
  { id: "ring", name: "Ring", icon: "gem" },
  { id: "boots", name: "Boots", icon: "jump" },
];
let inspectedSlot = "weapon";
function equipmentIcon(item) {
  const model = item?.appearance?.model;
  const art = /armor/.test(model || "")
    ? "armor"
    : model === "crown"
      ? "helmet"
      : model === "boots"
        ? "boots"
        : model === "cape"
          ? "garment"
          : model === "shield"
            ? "offhand"
            : ["sword", "glaive", "spear", "dagger"].includes(model)
              ? "weapon"
              : /potion/i.test(item?.name || "")
                ? "potion"
                : null;
  return art
    ? `<span class="item-art art-${art}" aria-hidden="true"></span>`
    : icon(
        model === "bow"
          ? "bow"
          : ["staff", "wand", "orb"].includes(model)
            ? "magic"
            : /stone|gem|pendant|ring/i.test(item?.name || "")
              ? "gem"
              : "scroll",
      );
}
function showInventory() {
  const p = self(),
    items = p.inventory || [],
    eq = p.equipment || {};
  const equipped = items.find((i) => i.id === eq[inspectedSlot]);
  let preview = "";
  try {
    preview = renderer.equipmentPreview?.(p) || "";
  } catch {}
  const slotTiles = EQUIPMENT_SLOTS.map((slot) => {
    const gear = items.find((i) => i.id === eq[slot.id]);
    return `<button class="gear-slot ${gear ? "filled" : ""} ${inspectedSlot === slot.id ? "selected" : ""}" data-slot="${slot.id}" title="${esc(gear?.name || slot.name + " · empty")}"><span>${icon(slot.icon)}</span><small>${slot.name}</small>${gear ? `<b>+${gear.plus || 0}</b>` : ""}</button>`;
  }).join("");
  openModal(
    `<div class="eyebrow">${icon("bag")} CHARACTER & EQUIPMENT</div><h2>Your belongings</h2><div class="inventory-meta"><span>${esc(p.name)} · Level ${p.level} · ${esc(CLASSES.find((c) => c.id === p.classId)?.name || p.classId)}</span><span>${p.gold.toLocaleString()} silver</span></div><div class="equipment-layout"><aside class="paperdoll"><div class="paperdoll-stage"><div class="paperdoll-halo"></div><img id="equipment-preview" alt="Your character with currently equipped pieces" src="${esc(preview || import.meta.env.BASE_URL + "art/body.png")}"><span class="paperdoll-title">${esc(p.name)}</span></div><div class="gear-slots">${slotTiles}</div><div class="paperdoll-stats"><span>Attack <b>${p.attack ?? "—"}</b></span><span>Defense <b>${p.defense ?? "—"}</b></span></div><div class="gear-detail"><small>${esc(EQUIPMENT_SLOTS.find((x) => x.id === inspectedSlot)?.name).toUpperCase()}</small><b>${esc(equipped?.name || "Empty slot")}${equipped?.plus ? ` +${equipped.plus}` : ""}</b><p>${equipped ? `${equipped.attack ? `Attack +${equipped.attack}` : ""}${equipped.attack && equipped.defense ? " · " : ""}${equipped.defense ? `Defense +${equipped.defense}` : ""}` : "Choose a piece in your bag to equip it."}</p><div>${equipped ? '<button id="unequip-slot">Remove piece</button>' : ""}<button class="compose-button" id="compose-equipped" ${equipped ? "" : "disabled"}>Compose +1</button></div></div></aside><div class="bag-content"><div class="bag-title">YOUR BAG <span>${items.length} pieces</span></div><div class="items-grid">${items
      .map((i) => {
        const wearable = EQUIPMENT_SLOTS.some((s) => s.id === i.slot),
          isEquipped = eq[i.slot] === i.id;
        return `<div class="item ${isEquipped ? "item-equipped" : ""} ${i.quality === "super" ? "super" : ""}" data-item="${esc(i.id)}"><div class="item-icon">${equipmentIcon(i)}</div><b>${esc(i.name)}${i.plus ? ` +${i.plus}` : ""}${i.qty > 1 ? ` ×${i.qty}` : ""}</b><small>${esc(i.slot || "Consumable")}${i.attack ? ` · ATK ${i.attack}` : i.defense ? ` · DEF ${i.defense}` : ""}</small>${wearable ? `<button data-equip="${esc(i.id)}" title="${isEquipped ? "Remove this piece" : "Equip to " + i.slot}">${isEquipped ? "Equipped" : "Equip"}</button>` : /potion/i.test(i.name) ? "<button data-potion>Use potion</button>" : "<small>Composition material</small>"}</div>`;
      })
      .join(
        "",
      )}</div><p class="bag-hint">Each piece occupies its own slot. Weapons, armor, helmets, boots and garments change your character’s appearance. Compose near Master Wu using one stone and 25 silver.</p></div></div>`,
  );
  $("#modal .modal").classList.add("inventory-modal");
  document.querySelectorAll("[data-slot]").forEach(
    (b) =>
      (b.onclick = () => {
        inspectedSlot = b.dataset.slot;
        showInventory();
      }),
  );
  document.querySelectorAll("[data-equip]").forEach(
    (b) =>
      (b.onclick = () => {
        const item = items.find((i) => i.id === b.dataset.equip);
        inspectedSlot = item?.slot || inspectedSlot;
        perform({ type: "equip", itemId: b.dataset.equip });
        if (!online) showInventory();
      }),
  );
  document.querySelectorAll("[data-potion]").forEach(
    (b) =>
      (b.onclick = () => {
        perform({ type: "potion" });
        if (!online) showInventory();
      }),
  );
  $("#unequip-slot")?.addEventListener("click", () => {
    perform({ type: "unequip", slot: inspectedSlot });
    if (!online) showInventory();
  });
  $("#compose-equipped").onclick = () => {
    if (!equipped) return;
    perform({ type: "compose", itemId: equipped.id });
    if (!online) showInventory();
  };
}

function nearestEnemy() {
  const p = self();
  return [...(state.enemies || [])]
    .filter((e) => e.hp > 0)
    .sort(
      (a, b) =>
        Math.hypot(a.x - p.x, a.y - p.y) - Math.hypot(b.x - p.x, b.y - p.y),
    )[0];
}
function attack() {
  const enemy =
    state.enemies?.find((e) => e.id === targetId && e.hp > 0) || nearestEnemy();
  if (!enemy)
    return toast("No enemies nearby. Travel through the eastern gate.");
  targetId = enemy.id;
  const r = perform({ type: "attack", targetId: enemy.id });
  if (!r.ok && Math.hypot(enemy.x - self().x, enemy.y - self().y) > 2)
    perform({ type: "move", x: enemy.x - 1, y: enemy.y }, { quiet: true });
}
function interact() {
  const p = self(),
    d = (e) => Math.hypot(e.x - p.x, e.y - p.y),
    drop = state.drops?.find((e) => d(e) < 2.5),
    npc = [...(state.npcs || [])].sort((a, b) => d(a) - d(b))[0],
    portal = zoneDefs[p.zone]?.portal;
  if (drop) return perform({ type: "pickup", dropId: drop.id });
  if (npc && d(npc) < 4) return perform({ type: "interact", npcId: npc.id });
  if (portal && d(portal) < 3) return perform({ type: "portal" });
  toast("Move closer to a character, item, or portal.");
}
function travel() {
  const def = zoneDefs[self().zone];
  if (!def) return;
  travelIntent = true;
  targetId = null;
  perform({ type: "move", x: def.portal.x, y: def.portal.y });
  toast("Walking to the realm gate…");
}
function goQuest() {
  const p = self();
  if (p.quest?.accepted && !p.quest.claimed && p.quest.kills < 5) {
    if (p.zone === "city") travel();
    else
      toast(
        "Hunt five pheasants in the wilds. Space attacks; Q casts your class skill.",
      );
    return;
  }
  if (p.zone !== "city") {
    travel();
    return;
  }
  const npc = state.npcs.find(
    (n) => /steward|quest|task/i.test(n.role) || /shen|steward/i.test(n.name),
  );
  if (npc) {
    if (Math.hypot(npc.x - p.x, npc.y - p.y) < 4)
      perform({ type: "interact", npcId: npc.id });
    else {
      perform({ type: "move", x: npc.x + 1, y: npc.y + 1 });
      toast(`Approach ${npc.name}, then press E.`);
    }
  }
}
function controls() {
  openModal(
    `<div class="eyebrow">${icon("help")} FIELD GUIDE</div><h2>The art of movement</h2><p>Use positioning to control each encounter. Leap out of danger, aim your skill, and return for the finishing strike.</p><div class="controls-grid">${[
      ["Click", "Walk / select enemy"],
      ["Right click", "Jump to cursor"],
      ["WASD", "Walk in screen direction"],
      ["Scroll", "Zoom the 3D camera"],
      ["Space", "Attack nearest target"],
      ["Q", "Aim & cast class skill"],
      ["J", "Jump toward cursor"],
      ["E", "Talk / loot / use portal"],
      ["1", "Healing potion"],
      ["I", "Inventory & composition"],
      ["F", "Toggle fullscreen"],
      ["Escape", "Close a panel"],
    ]
      .map(
        ([k, v]) =>
          `<div class="control-row"><span class="key">${k}</span>${v}</div>`,
      )
      .join(
        "",
      )}</div><p>On touch screens, tap the ground to walk. Use the skill bar to attack, jump and interact. Progress is saved on this device.</p>`,
  );
}
function connectDialog() {
  openModal(
    `<div class="eyebrow">${icon("connect")} MULTIPLAYER</div><h2>Join a shared realm</h2><p>Run the included authoritative game server, then enter its WebSocket address. Players on the same server share monsters, loot, and realm chat.</p><label class="name-label" for="server-url">SERVER ADDRESS</label><input class="connect-input" id="server-url" value="${esc(localStorage.getItem("jade-realm-server") || (location.port === "8787" ? `ws://${location.host}` : "ws://localhost:8787"))}" placeholder="wss://your-server.example"><button class="primary" id="join-server">CONNECT TO REALM ${icon("arrow")}</button><p>The hosted preview runs solo. For multiplayer hosting, see the Docker instructions in the GitHub repository.</p>`,
  );
  $("#join-server").onclick = () => connect($("#server-url").value.trim());
}
function restoreSolo() {
  online = false;
  selfId = "local-hero";
  world = createWorld();
  player = saved
    ? hydratePlayer(saved, selfId, saved.name, saved.classId)
    : createPlayer(selfId, "Wanderer", chosenClass);
  addPlayer(world, player);
  state = snapshot(world, selfId);
  $("#status").innerHTML = '<i class="status-dot"></i> SOLO REALM';
}
function connect(url) {
  if (!/^wss?:\/\//.test(url))
    return toast("Use a ws:// or wss:// server address.");
  if (
    location.protocol === "https:" &&
    url.startsWith("ws:") &&
    !/ws:\/\/(localhost|127\.0\.0\.1)(:|\/)/.test(url)
  )
    return toast("A secure page requires a wss:// server.");
  const previous = socket;
  socket = null;
  previous?.close();
  if (online) restoreSolo();
  let ws;
  try {
    ws = new WebSocket(url);
  } catch {
    return toast("That server address is invalid.");
  }
  socket = ws;
  toast("Connecting to shared realm…");
  ws.onopen = () => {
    if (socket !== ws) return;
    ws.send(
      JSON.stringify({
        type: "join",
        name: self().name,
        classId: self().classId,
      }),
    );
    localStorage.setItem("jade-realm-server", url);
  };
  ws.onmessage = (e) => {
    if (socket !== ws) return;
    let m;
    try {
      m = JSON.parse(e.data);
    } catch {
      return;
    }
    if (m.type === "welcome") {
      selfId = m.id || m.state?.selfId;
      online = true;
      state = m.state || state;
      mode = "play";
      closeModal();
      $("#intro").classList.add("hidden");
      $("#status").innerHTML = '<i class="status-dot"></i> SHARED REALM';
      toast("Connected. You are in a shared realm.");
    }
    if (m.type === "state") {
      state = m.state;
      if (state?.selfId) selfId = state.selfId;
      if (self().hp > 0 && mode === "dead") {
        mode = "play";
        closeModal();
      }
      if (pendingInventoryRefresh && $("#modal .inventory-modal")) {
        pendingInventoryRefresh = false;
        showInventory();
      }
      updateUI();
    }
    if (m.type === "result") {
      const r = m.result || m;
      if (r.ok && ["equip", "unequip", "compose", "potion"].includes(m.command))
        pendingInventoryRefresh = true;
      if (
        r.message &&
        (!r.ok || !["move", "attack", "jump"].includes(m.command))
      )
        toast(r.message);
      if (r.ok && r.npc) showNpc(r.npc);
    }
    if (m.type === "chat") log(m.name || m.from, m.text);
    if (m.type === "error") toast(m.message);
  };
  ws.onerror = () => {
    if (socket === ws)
      toast(
        "Could not connect. Check the address and that the server is running.",
      );
  };
  ws.onclose = () => {
    if (socket !== ws) return;
    socket = null;
    if (online) {
      restoreSolo();
      mode = "play";
      closeModal();
      toast("Server disconnected. Returned to your solo character.");
    }
  };
}

function updateMinimap() {
  const c = $("#minimap"),
    ctx = c.getContext("2d"),
    p = self(),
    def = zoneDefs[p.zone];
  if (!def) return;
  const sx = 132,
    sy = 106,
    s = 2.3;
  ctx.clearRect(0, 0, 264, 224);
  ctx.fillStyle = "#283c2c";
  ctx.beginPath();
  ctx.moveTo(sx, 8);
  ctx.lineTo(248, 106);
  ctx.lineTo(sx, 208);
  ctx.lineTo(16, 106);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "#b3bb8055";
  ctx.stroke();
  const pos = (x, y) => ({ x: sx + (x - y) * s, y: 8 + (x + y) * s * 0.9 });
  ctx.fillStyle = "#859367";
  for (const o of def.obstacles) {
    const a = pos(o.x, o.y);
    ctx.fillRect(a.x - 4, a.y - 4, 9, 9);
  }
  for (const n of state.npcs || []) {
    const a = pos(n.x, n.y);
    ctx.fillStyle = "#d5be7d";
    ctx.fillRect(a.x - 2, a.y - 2, 4, 4);
  }
  for (const e of state.enemies || []) {
    if (e.hp <= 0) continue;
    const a = pos(e.x, e.y);
    ctx.fillStyle = "#b07850";
    ctx.fillRect(a.x - 1.5, a.y - 1.5, 3, 3);
  }
  const port = pos(def.portal.x, def.portal.y);
  ctx.strokeStyle = "#99d7d2";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(port.x, port.y, 5, 0, Math.PI * 2);
  ctx.stroke();
  const a = pos(p.x, p.y);
  ctx.shadowColor = "#fff3be";
  ctx.shadowBlur = 8;
  ctx.fillStyle = "#fff0b4";
  ctx.beginPath();
  ctx.arc(a.x, a.y, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;
}
function updateUI() {
  const p = self();
  if (!p) return;
  const c = CLASSES.find((c) => c.id === p.classId);
  $("#player-name").textContent = p.name;
  $("#player-class").textContent =
    `${c?.name || p.classId} · ${p.level < 5 ? "NOVICE" : "ADVENTURER"}`.toUpperCase();
  $("#level").textContent = p.level;
  $("#portrait").innerHTML =
    icon(classIcon(p.classId)) +
    `<span class="level" id="level">${p.level}</span>`;
  $("#hp-text").textContent = `${Math.ceil(p.hp)} / ${p.maxHp}`;
  $("#hp-bar").style.width = `${(100 * p.hp) / p.maxHp}%`;
  $("#stamina-bar").style.width =
    `${(100 * p.stamina) / (p.maxStamina || 100)}%`;
  $("#mana-bar").style.width = `${(100 * p.mana) / (p.maxMana || 100)}%`;
  $("#xp-bar").style.width = `${(100 * p.xp) / (p.nextXp || 100)}%`;
  $("#gold").textContent = Math.floor(p.gold || 0).toLocaleString();
  $("#potion-count").textContent = (p.inventory || [])
    .filter((i) => /potion/i.test(i.name))
    .reduce((s, i) => s + (i.qty ?? 1), 0);
  $("#zone-title").textContent = zoneDefs[p.zone]?.name || "Twin Haven";
  $("#zone-desc").textContent =
    p.zone === "city"
      ? "A sanctuary beneath the mountain"
      : "Beyond the gate, a path of your own";
  $("#coords").textContent = `${Math.round(p.x)}, ${Math.round(p.y)}`;
  $("#map-zone").textContent =
    p.zone === "city" ? "SAFE ZONE" : "HUNTING GROUNDS";
  const q = p.quest || {};
  $("#quest-title").textContent = !q.accepted
    ? "A warrior’s beginning"
    : q.claimed
      ? "A path of your own"
      : "Trouble in the fields";
  $("#quest-description").textContent = !q.accepted
    ? "The captain has a task for you. Speak to him in the city courtyard."
    : q.claimed
      ? "Continue your training. Find better gear and strengthen your weapon at the forge."
      : q.kills >= 5
        ? "The fields are clear. Return to Captain Shen for your reward."
        : "Travel through the eastern gate and defeat five pheasants in the wilds.";
  $("#quest-progress").innerHTML =
    q.accepted && !q.claimed
      ? `<span>Pheasants defeated</span><span>${Math.min(5, q.kills || 0)} / 5</span>`
      : "";
  $("#quest-btn").innerHTML =
    `${!q.accepted ? "Find the captain" : q.claimed ? "Explore the wilds" : q.kills >= 5 ? "Return to the city" : "Travel to the wilds"} ${icon("arrow")}`;
  const e = state.enemies?.find((e) => e.id === targetId && e.hp > 0);
  $("#target-card").style.display = e ? "block" : "none";
  if (e) {
    $("#target-name").textContent = e.name;
    $("#target-hp").style.width = `${(100 * e.hp) / e.maxHp}%`;
  }
  updateMinimap();
  if (p.hp <= 0 && mode === "play") {
    mode = "dead";
    openModal(
      `<div class="eyebrow">${icon("moon")} THE CYCLE CONTINUES</div><h2>A moment to rise again</h2><p>Your journey is far from over. Return to the safety of Twin Haven, restore your strength, and try again.</p><button class="primary" id="respawn-btn">RETURN TO THE CITY ${icon("arrow")}</button>`,
    );
    $("#respawn-btn").onclick = () => {
      perform({ type: "respawn" });
      if (!online) {
        mode = "play";
        closeModal();
        toast("Your strength is restored.");
      } else {
        $("#respawn-btn").disabled = true;
        $("#respawn-btn").textContent = "RETURNING…";
      }
    };
  }
}
function save() {
  if (online || mode === "intro") return;
  const p = self();
  saved = {
    version: 1,
    name: p.name,
    classId: p.classId,
    level: p.level,
    xp: p.xp,
    gold: p.gold,
    nextXp: p.nextXp,
    maxHp: p.maxHp,
    maxMana: p.maxMana,
    inventory: p.inventory,
    equipment: p.equipment,
    quest: p.quest,
  };
  try {
    localStorage.setItem("jade-realm-save-v1", JSON.stringify(saved));
  } catch {}
}
$("#attack-btn").onclick = attack;
$("#skill-btn").onclick = () =>
  perform({ type: "skill", x: pointer.x, y: pointer.y });
$("#jump-btn").onclick = () => {
  if (matchMedia("(pointer:coarse)").matches) {
    mobileJump = !mobileJump;
    toast(mobileJump ? "Tap a landing point to jump." : "Tap to walk.");
  } else perform({ type: "jump", x: pointer.x, y: pointer.y });
};
$("#potion-btn").onclick = () => perform({ type: "potion" });
$("#interact-btn").onclick = interact;
$("#bag-btn").onclick = showInventory;
$("#help-btn").onclick = controls;
$("#connect-btn").onclick = connectDialog;
$("#travel-btn").onclick = travel;
$("#quest-btn").onclick = goQuest;
$("#sound-btn").onclick = () => {
  sound = !sound;
  $("#sound-btn").style.color = sound ? "#efce87" : "#7e9a80";
  toast(sound ? "Sound enabled" : "Sound muted");
  playTone("jump");
};
const fullscreen = () => {
  if (document.fullscreenElement) document.exitFullscreen();
  else
    $(".game-shell")
      .requestFullscreen?.()
      .catch(() => toast("Fullscreen is unavailable in this browser."));
};
$("#fullscreen-btn").onclick = fullscreen;
$("#modal").onclick = (e) => {
  if (e.target === $("#modal")) closeModal();
};
$("#chat-form").onsubmit = (e) => {
  e.preventDefault();
  const text = $("#chat-text").value.trim();
  if (!text) return;
  online
    ? socket.send(JSON.stringify({ type: "chat", text }))
    : log(self().name, text);
  $("#chat-text").value = "";
  $("#chat-text").blur();
};
$("#game").addEventListener("pointermove", (e) => {
  pointer = renderer.screenToWorld(e.clientX, e.clientY);
  renderer.setPointer?.(e.clientX, e.clientY);
});
$("#game").addEventListener("pointerdown", (e) => {
  if (mode !== "play" || e.button === 1) return;
  pointer = renderer.screenToWorld(e.clientX, e.clientY);
  if (e.button === 2 || mobileJump) {
    targetId = null;
    travelIntent = false;
    perform({
      type: "jump",
      x: Math.round(pointer.x),
      y: Math.round(pointer.y),
    });
    return;
  }
  const picked = renderer.pickEntity?.(e.clientX, e.clientY, state);
  const entity =
    typeof picked === "object"
      ? picked
      : [
          ...(state.enemies || []),
          ...(state.npcs || []),
          ...(state.drops || []),
        ].find((x) => x.id === picked);
  if (entity) {
    if (state.enemies?.some((x) => x.id === entity.id)) {
      targetId = entity.id;
      attack();
      return;
    }
    if (state.npcs?.some((x) => x.id === entity.id)) {
      if (Math.hypot(entity.x - self().x, entity.y - self().y) < 4)
        perform({ type: "interact", npcId: entity.id });
      else {
        perform({ type: "move", x: entity.x + 1, y: entity.y + 1 });
        toast(`Approach ${entity.name}, then press E.`);
      }
      return;
    }
    if (state.drops?.some((x) => x.id === entity.id)) {
      perform({ type: "pickup", dropId: entity.id });
      return;
    }
  }
  targetId = null;
  travelIntent = false;
  perform({ type: "move", x: Math.round(pointer.x), y: Math.round(pointer.y) });
});
$("#game").addEventListener("contextmenu", (e) => e.preventDefault());
let keys = new Set();
document.addEventListener("keydown", (e) => {
  if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
  if (e.key === "Escape") return closeModal();
  if (e.key.toLowerCase() === "f") return fullscreen();
  if (mode === "intro" && e.key === "Enter") {
    startGame($("#hero-name")?.value || "Wanderer");
    return;
  }
  if (mode !== "play") return;
  if (e.code === "Space") {
    e.preventDefault();
    if (!e.repeat) attack();
  }
  if (e.repeat) return;
  keys.add(e.key.toLowerCase());
  const a = {
    q: () => perform({ type: "skill", x: pointer.x, y: pointer.y }),
    j: () =>
      perform({
        type: "jump",
        x: Math.round(pointer.x),
        y: Math.round(pointer.y),
      }),
    e: interact,
    i: showInventory,
    1: () => perform({ type: "potion" }),
    enter: () => $("#chat-text").focus(),
  };
  a[e.key.toLowerCase()]?.();
});
document.addEventListener("keyup", (e) => keys.delete(e.key.toLowerCase()));
window.addEventListener("blur", () => {
  keys.clear();
  save();
});
let lastWalk = 0;
function tick(dt, draw = true) {
  if (mode === "play" && !online) {
    updateWorld(world, dt);
    state = snapshot(world, selfId);
  }
  if (mode === "play") {
    const p = self();
    lastWalk += dt;
    if (lastWalk > 0.12) {
      let dx = 0,
        dy = 0;
      if (keys.has("w") || keys.has("arrowup")) {
        dx--;
        dy--;
      }
      if (keys.has("s") || keys.has("arrowdown")) {
        dx++;
        dy++;
      }
      if (keys.has("a") || keys.has("arrowleft")) {
        dx--;
        dy++;
      }
      if (keys.has("d") || keys.has("arrowright")) {
        dx++;
        dy--;
      }
      if (dx || dy) {
        targetId = null;
        perform(
          { type: "move", x: Math.round(p.x) + dx, y: Math.round(p.y) + dy },
          { quiet: true },
        );
      }
      lastWalk = 0;
    }
    if (travelIntent) {
      const portal = zoneDefs[p.zone]?.portal;
      if (portal && Math.hypot(p.x - portal.x, p.y - portal.y) < 2.5) {
        perform({ type: "portal" });
        travelIntent = false;
      }
    }
  }
  if (renderer.supportsUnrenderedStep || draw)
    renderer.draw(
      { ...state, selectedTarget: targetId, sceneMode: mode },
      selfId,
      dt,
      draw,
    );
  lastUi += dt;
  lastSave += dt;
  if (lastUi > 0.1) {
    updateUI();
    lastUi = 0;
  }
  if (lastSave > 4) {
    save();
    lastSave = 0;
  }
}
let lastZone = self().zone;
let last = performance.now(),
  manualTime = false;
function frame(now) {
  if (lastZone !== self().zone) {
    onZoneChange();
    lastZone = self().zone;
  }
  const dt = Math.min((now - last) / 1000, 0.05);
  last = now;
  if (!manualTime) tick(dt);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
window.advanceTime = (ms) => {
  // Automated stepping owns the clock so a slow GPU cannot advance the world
  // between two captures of the same animation or jump.
  manualTime = true;
  for (let i = 0; i < Math.ceil(ms / 16.6667); i++) tick(1 / 60, false);
  renderer.draw(
    { ...state, selectedTarget: targetId, sceneMode: mode },
    selfId,
    renderer.supportsUnrenderedStep ? 0 : 1 / 60,
  );
  updateUI();
};
window.resumeLiveTime = () => {
  manualTime = false;
  last = performance.now();
};
window.render_game_to_text = () => {
  const p = self();
  return JSON.stringify({
    mode,
    connection: online ? "websocket" : "solo",
    coordinateSystem:
      "3D world: logical x/y map to ground x/z, elevation is vertical y; isometric camera follows player",
    selfId,
    player: p,
    zone: zoneDefs[p.zone]?.name,
    enemies: state.enemies
      ?.filter((e) => e.hp > 0)
      .map((e) => ({
        id: e.id,
        name: e.name,
        x: e.x,
        y: e.y,
        hp: e.hp,
        maxHp: e.maxHp,
      })),
    npcs: state.npcs,
    drops: state.drops,
    portal: zoneDefs[p.zone]?.portal,
    targetId,
    modal: !$("#modal").classList.contains("hidden"),
    renderer: renderer.getDebugState(),
  });
};
function resizeView() {
  renderer.resize();
  if (manualTime)
    renderer.draw(
      { ...state, selectedTarget: targetId, sceneMode: mode },
      selfId,
      0,
    );
}
window.addEventListener("resize", resizeView);
document.addEventListener("fullscreenchange", resizeView);
window.addEventListener("beforeunload", save);
renderIntro();
updateUI();
