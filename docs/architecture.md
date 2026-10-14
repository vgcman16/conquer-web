# Technical architecture

The first slice is a browser-native, classic-inspired 3D action RPG viewed through an isometric camera. It keeps the playable world model independent of rendering so the same rules can run in a local solo session or an authoritative Node server. The world is authored for this project; its rigged humanoid uses licensed CC0 assets. Historical client interoperability is a later, isolated capability.

## Runtime boundary

```mermaid
flowchart LR
  Input[Pointer and keyboard] --> Client[Browser client]
  Client --> View[Three.js 3D world and DOM interface]
  Client --> Solo[Local shared simulation]
  Client -->|Player intents over WebSocket| Server[Node authoritative world]
  Server -->|World snapshots and events| Client
  Solo --> Save[Browser guest save]
  Rules[Shared rules and world data] --> Solo
  Rules --> Server
```

| Layer               | Current role                                                                                                                  | Extension boundary                                                     |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Browser application | Vite with JavaScript modules; input, HUD, inventory/NPC windows and session mode                                              | Typed interfaces, accessibility, mobile input                          |
| `src/renderer3d.js` | Three.js WebGL renderer, orthographic camera, GLTFLoader, skeletal animation, modular equipment, selection and combat effects | Additional animation sets, material variants and measured GPU budgets  |
| `src/world3d.js`    | Mesh terrain, architecture, foliage, water and ambient animation; static mesh merging and instancing                          | Content streaming, richer authored zones and scalable scene budgets    |
| `shared/world.js`   | World creation, player commands, resource/combat rules and progression                                                        | Versioned ruleset data and deterministic replay fixtures               |
| `server/index.js`   | Node `ws`; validates intents and advances the authoritative world                                                             | Persistent identities, transactions, interest management and instances |
| Persistence         | Browser storage for a guest's solo progress                                                                                   | Server-owned character/economy database and migrations                 |

The optional server owns multiplayer outcomes. A browser sends an action such as movement, jump, attack or inventory interaction; it does not supply final damage, loot or a replacement player state. Solo mode runs the same world rules locally and is a development/playability feature, not a multiplayer authority.

## Geometry and rendering

Gameplay coordinates live in the map's logical cell space. Logical `(x, y)` maps to Three.js `(x, 0, z)`; height occupies the renderer's Y axis. An orthographic camera looks diagonally across that plane, giving the world an isometric presentation with approximately 2:1 projected ground diamonds. The historical 64 × 32 pixel projection remains useful as a reference for the logical axes:

```text
screenX = (worldX - worldY) * 32
screenY = (worldX + worldY) * 16

worldX = screenX / 64 + screenY / 32
worldY = screenY / 32 - screenX / 64
```

The active renderer projects world points through the Three.js camera and resolves pointer positions by raycasting onto the ground plane. Camera following and mouse-wheel zoom therefore do not change logical coordinates or collision. The projection and scale are project choices; they are not asserted to match every original client build.

Jumping has a legal start and destination in world state. Rendering interpolates between those endpoints, adds a vertical arc, and plays takeoff, airborne and landing skeletal clips. Visual height must never expand collision or attack range. Resource, destination and distance rules belong in shared simulation and are therefore enforceable by the server.

The current two zones are 48 × 48 logical cells. Walking/running follows an eight-neighbor A* path with diagonal corner checks, then advances at 4.5/7.5 cells per second. Jumping costs 10 stamina, is limited to 16 cells, and takes `0.45 + distance * 0.012` seconds. A landing must be passable; sampled intermediate obstacles taller than the prototype's height threshold block the jump. These values are prototype rules. The runtime interpolates fractional positions along legal cell paths rather than preserving integer positions at every tick.

Terrain and scenery are separate from entity state. `world3d.js` builds actual mesh ground, courtyard stones, curved temple roofs, gates, trees, bamboo, water and other scenery. Shared static geometry is merged by material, while repeated stones, roof details, leaves and grass use instancing. Water, lanterns, petals and other ambient elements animate independently. The depth buffer handles normal 3D occlusion; selected building materials fade when their footprint obscures the player. A jumping character's visual lift remains separate from its legal ground position.

`renderer3d.js` loads the embedded [CC0 character GLB](model-assets.md) through `GLTFLoader`, clones its skeleton per humanoid, and drives twelve authored clips with a separate `AnimationMixer` for each avatar. Birds and other scene creatures use articulated mesh geometry. Hemisphere and directional lights, material shading, shadows and fog establish the 3D scene. The renderer includes an articulated mesh fallback if the character asset fails to load. Earlier cutout artwork remains in `public/art/` alongside interface artwork; it is not the active world renderer.

The current compact zones are built locally and disposed when changing zones. They do not use historical puzzle archives or download terrain chunks, and no bounded remote streaming system is claimed. Larger worlds need spatial content loading, compact collision/elevation data and measured geometry, texture and shadow budgets before expanding the scene.

## Equipment state and appearance

An inventory item owns its stats and an optional appearance descriptor; `player.equipment` maps each slot to an inventory item ID. The eight independent slots are `weapon`, `offhand`, `armor`, `helmet`, `boots`, `garment`, `ring` and `necklace`. `equip {itemId}` changes only that item's slot, toggling it off if it is already equipped. `unequip {slot}` explicitly clears one slot. Other equipped pieces remain in place.

```json
{
  "id": "hero-armor-iron",
  "name": "Crimson iron armor",
  "slot": "armor",
  "defense": 11,
  "plus": 0,
  "appearance": {
    "model": "heavy-armor",
    "type": "crimson-iron",
    "color": "#a9584e",
    "trim": "#d7b26c"
  }
}
```

Appearance supports a model, variant type, base color and optional trim, glow and grip. Model/type/grip values come from project allowlists; colors use six-digit hex values. These descriptors select the project's mesh and material variants rather than proprietary model IDs.

World humanoids share the GLB's 65-bone rig and twelve motion clips. Basic tunic, sleeves, trousers and shoes are separate skinned meshes. Equipping armor or boots selects the corresponding alternate clothing meshes and applies the item's material tint. Weapons, offhands, headgear, capes and pendants use separate 3D geometry attached to the appropriate hand, head or chest bone. Sword, dagger, bow, staff, glaive, spear, shield, orb and quiver shapes are built as mesh geometry. Their equipment state remains independent of the animation mixer.

The appearance signature includes equipped item IDs, +N tiers and descriptors, so changed equipment refreshes the affected avatar. The cape also deforms with movement; a necklace adds a chest jewel, and supported weapon descriptors add emissive details. `equipmentPreview(player)` renders the same 3D avatar factory and equipped pieces through a separate portrait camera for the inventory panel. NPCs and humanoid enemies use the shared rig; birds use their own articulated geometry.

The active implementation is a 3D renderer with skeletal motion and modular equipment. More varied clothing silhouettes, weapon-specific animation sets and any historical C3 conversion remain future work. The current model's official sources, CC0 licenses, assembly process, bone names and clips are documented in [model assets](model-assets.md).

Each class starts with its weapon, armor and boots equipped. Its bag also contains alternative weapons, armor, boots, a helmet, capes, a class-appropriate offhand and a Jade pendant. The quest rewards a separate Phoenix ring. Derived attack/defense sum equipped item stats; the prototype's +N bonus adds four attack and two defense per tier when the item has the corresponding positive base stat.

Composition at Master Wu targets the piece selected in the equipment panel, consumes one stone and 25 silver, and adds one tier up to +12. The server accepts all equipment slots with a positive attack or defense stat. This is a prototype progression rule, not the original stone-point table. Successful mutations return equipment/stat acknowledgements; the online panel refreshes from the next authoritative snapshot. Browser save hydration adds missing wardrobe options for older saves without refilling consumables.

## Protocol and state

The WebSocket messages are a project-specific JSON protocol. They are independent of original `MsgWalk`, `MsgAction`, account-server handshakes, packet seals and cipher state. They do not connect to Comet, CoEmu, an official Conquer server, or an unmodified historical client.

The server advances a world at 20 Hz and publishes authoritative snapshots filtered to the player's zone. The browser renders that state on its own animation clock. A fast display refresh does not imply a faster simulation tick or lower network latency. Full zone snapshots prioritize a small readable implementation; finer area-of-interest filtering and delta snapshots are required before scaling the population.

The current client messages include:

```jsonl
{"type":"join","name":"Wanderer","classId":"trojan"}
{"type":"command","command":{"type":"jump","x":28,"y":24}}
{"type":"command","command":{"type":"equip","itemId":"hero-armor-iron"}}
{"type":"command","command":{"type":"unequip","slot":"helmet"}}
{"type":"chat","text":"Ready for the fields?"}
{"type":"ping","timestamp":123456}
```

`welcome` supplies a generated session ID and initial state. `state` replaces the latest snapshot. `result` contains a nested command result with `ok`, `message` and optional interaction data. `chat` contains flat name/text fields; `pong` echoes the timestamp. These sessions are ephemeral; leaving and rejoining creates a new multiplayer character.

For the next networking iteration, add a monotonic input sequence and server acknowledgement, then a bounded history of unacknowledged commands for local prediction and reconciliation. Keep remote entity interpolation separate. Treat malformed commands, impossible destinations, depleted resources, duplicate inventory operations, excessive message rates and disconnects as explicit server cases.

## Deployment

`npm run build` produces the static browser application in `dist/`. A static host can run solo mode without a backend. Vite uses a relative asset base so the bundle can live beneath a GitHub Pages repository path. The [public playable build](https://vgcman16.github.io/conquer-web/) is published from the [repository](https://github.com/vgcman16/conquer-web)'s prebuilt `gh-pages` branch. Publishing built files keeps this preview available when GitHub Actions cannot run; local verification still precedes each publication.

`npm run server` starts the world service on port 8787, bound to `0.0.0.0`. Set `PORT` to choose a different port. `/health` reports readiness and active population. When `dist/index.html` exists, the same Node process serves the browser build; `STATIC_DIR` can select another frontend directory. The Docker image includes that build, so one deployment serves both frontend and WebSocket world.

A public multiplayer deployment needs a long-running WebSocket-capable process and TLS termination. An HTTPS browser page should use a `wss://` endpoint. A static GitHub Pages preview provides solo play and can connect to a realm hosted elsewhere. The local `ws://127.0.0.1:8787` endpoint is for local development.

The prototype server caps messages at 4 KiB, limits per-connection command traffic, checks WebSocket liveness, and skips sending to clients with a large outbound backlog. These guardrails do not replace authenticated sessions, deployment policy, durable transactions or load testing.

Before a persistent multiplayer launch, make character mutations transactional, retain server-owned identities across reconnects, and record world/economy events sufficiently to recover state. A single process with in-memory sessions is a useful prototype, but it does not establish production durability or MMO concurrency.

## Historical compatibility option

If exact 5017 or 5065 behavior becomes the selected target, pin that build in a separate ruleset. Add a converter for supported, lawfully available fixtures that emits the project's own map/item/animation schemas; keep source assets external to the repository. A legacy server adapter should translate historical packets into the same intent/event boundary rather than expose binary offsets throughout the renderer.

Add Rust/WASM only after an actual parser requirement or profile identifies a bottleneck. The existing Three.js renderer and shared simulation remain independent of any historical adapter. See [research notes](research-notes.md) for verified upstream scope and [roadmap](roadmap.md) for acceptance milestones.
