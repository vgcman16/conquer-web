# Conquer Web · Jade Realm

[Play in your browser](https://vgcman16.github.io/conquer-web/) · [GitHub source](https://github.com/vgcman16/conquer-web)

A playable browser prototype inspired by classic Conquer Online: a fully 3D city and wilderness viewed through an isometric camera, fast jumping, class combat, monsters, loot, quests and individually equipped gear. Choose Trojan, Warrior, Archer, Fire Taoist or Water Taoist. Three.js renders mesh architecture, terrain, foliage, creatures and rigged humanoids with real walk, run, jump, sword and casting animation clips. A shared JavaScript simulation runs solo in the browser or on an optional authoritative Node WebSocket server.

This is the first playable slice of a larger reconstruction. It uses project balance values and a new web protocol; it does not yet implement an exact historical patch, original client file import, persistent accounts, rebirth, guilds or production MMO scale.

## Visuals

The city uses slate causeways, dark tiled roofs, layered martial halls, carved guardians and hanging banners. The character wardrobe adds original modeled breastplates, overlapping lamellae, dragon shoulders, bracers, greaves, coronets and decorated weapons. Taoist outfits use longer robe panels; equipped capes use animated brocade cloth with a separate lining.

This metalwork is procedural Three.js geometry attached to the licensed Quaternius CC0 animated base. The base retains its 65-bone rig and twelve clips; all eight equipment slots remain independent. The slate and dragon-brocade materials were generated for this project. [Art direction and official visual references](docs/art-direction.md) distinguish these contributions from the [CC0 model sources](docs/model-assets.md).

## Run locally

Use Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Choose a class, enter the world and play solo. Solo guest progress is saved in browser storage.

To start the shared multiplayer world, run this in another terminal:

```sh
npm run server
```

Connect through the game's network controls to `ws://127.0.0.1:8787`, then open a second browser tab and connect to the same endpoint. The server decides movement, combat and progression. Multiplayer sessions are a prototype and do not have persistent accounts.

## Controls

| Input             | Action                                     |
| ----------------- | ------------------------------------------ |
| Left click        | Move or select a world target              |
| Right click or J  | Jump toward the cursor                     |
| WASD / arrow keys | Move in screen direction                   |
| Mouse wheel       | Zoom the camera                            |
| Space             | Basic attack                               |
| Q                 | Class skill                                |
| E                 | Talk, pick up nearby loot, or use a portal |
| I                 | Open inventory                             |
| 1                 | Use a health potion                        |
| F                 | Toggle fullscreen                          |
| Enter             | Focus realm chat                           |
| Escape            | Close a panel                              |

Speak to Captain Shen in Twin Haven, accept his quest and hunt five pheasants in Phoenix Fields. Return for silver, experience and a Phoenix ring. Master Wu composes equipment using one stone and 25 silver per tier; Herbalist Lin restores health/mana and sells potions. The Travel button walks to the portal connecting both zones.

On touch screens, tap to walk and use the action bar. The Jump button switches taps into jump targeting.

## Equipment

Press **I** to open your bag and live character preview. Weapon, offhand, armor, helmet, boots, garment, ring and necklace occupy separate slots. The starter bag includes alternative weapons, armor, boots, capes, a helmet, an offhand and a Jade pendant; Captain Shen's quest awards the Phoenix ring.

Choose **Equip** on a piece to change its slot. Choose **Equipped** again, or select its slot and use **Remove piece**, to take it off. The world character and inventory preview use the same 3D avatar. Armor and boots switch separate skinned meshes; weapons, offhands, headgear, capes and pendants attach to the animated skeleton. Item colors and materials distinguish appearance variants. The eight slots remain independent; rings also contribute equipment stats.

At Master Wu, select an equipped slot and choose **Compose +1** to improve that piece using one stone and 25 silver. The character model includes twelve animation clips and a shared 65-bone rig; equipment follows the character through movement and combat. The model is assembled from Quaternius CC0 assets with an original tied hairstyle. Source links, licenses, mesh names and clip details are recorded in [the model asset notes](docs/model-assets.md).

## Build and check

```sh
npm test
npm run build
npm run preview
```

The static build in `dist/` supports solo play on GitHub Pages or another static host. Public multiplayer needs a WebSocket server and a `wss://` endpoint for an HTTPS page.

Browser interaction checks are reproducible after `npx playwright install chromium`:

```sh
PREVIEW_URL=http://localhost:8787 node scripts/browser-smoke.mjs
PREVIEW_URL=http://localhost:8787 node scripts/3d-smoke.mjs
PREVIEW_URL=http://localhost:8787 node scripts/equipment-smoke.mjs
PREVIEW_URL=http://localhost:8787 node scripts/multiplayer-smoke.mjs
```

Build and start the server first to use those URLs. The multiplayer check opens two browser contexts against the realm on port 8787.
For hardware accelerated testing with installed Chrome, prefix these commands with `BROWSER_CHANNEL=chrome BROWSER_HEADED=1`. The 3D check compares real skeletal poses across movement frames and verifies airborne height and attack clips.

## One-container hosting

```sh
docker build -t conquer-web .
docker run --rm -p 8787:8787 conquer-web
```

Open `http://localhost:8787`. The container serves the browser build, WebSocket world and `/health` on one port. Use the Multiplayer button to connect to `ws://localhost:8787`. A cloud host should forward its public HTTPS/WSS endpoint to this port and set `PORT` when it requires a different listener port. `STATIC_DIR` can override the built frontend directory.

`render.yaml` is a starter deployment blueprint for a WebSocket-capable host. Static Pages and Sites previews run solo unless connected to a separate realm. The public Pages build is published from the repository's prebuilt `gh-pages` branch.

## Project documentation

- [Technical architecture](docs/architecture.md): simulation, rendering, networking and hosting boundaries.
- [3D model assets](docs/model-assets.md): official CC0 sources, retained licenses, animation clips and modular gear contract.
- [Research notes](docs/research-notes.md): source checks, ruleset assumptions and what needs validation.
- [Roadmap](docs/roadmap.md): next milestones and the remaining portions of the supplied blueprint.

This independent prototype is not affiliated with TQ Digital or NetDragon. No original game assets or client binaries are included. Upstream research references are credited in the research notes; no emulator source is incorporated.

Earlier generated artwork and interface asset briefs are documented in [public/art/README.md](public/art/README.md); the active world uses Three.js geometry and the licensed 3D character. Original client asset import and historical patch compatibility remain on the roadmap.
