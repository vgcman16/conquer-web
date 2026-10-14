# Conquer Web · Jade Realm

[Play in your browser](https://vgcman16.github.io/conquer-web/) · [GitHub source](https://github.com/vgcman16/conquer-web)

A playable browser prototype inspired by classic Conquer Online: an isometric city and wilderness, fast jumping, class combat, monsters, loot, quests and equipment progression. Choose Trojan, Warrior, Archer, Fire Taoist or Water Taoist. Built with original generated artwork and procedural terrain, PixiJS v8 and a shared JavaScript world simulation. An optional Node WebSocket server runs the multiplayer world.

This is the first playable slice of a larger reconstruction. It uses project balance values and a new web protocol; it does not yet implement an exact historical patch, original client file import, persistent accounts, rebirth, guilds or production MMO scale.

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

## Build and check

```sh
npm test
npm run build
npm run preview
```

The static build in `dist/` supports solo play on GitHub Pages or another static host. Public multiplayer needs a WebSocket server and a `wss://` endpoint for an HTTPS page.

## One-container hosting

```sh
docker build -t conquer-web .
docker run --rm -p 8787:8787 conquer-web
```

Open `http://localhost:8787`. The container serves the browser build, WebSocket world and `/health` on one port. Use the Multiplayer button to connect to `ws://localhost:8787`. A cloud host should forward its public HTTPS/WSS endpoint to this port and set `PORT` when it requires a different listener port. `STATIC_DIR` can override the built frontend directory.

## Project documentation

- [Technical architecture](docs/architecture.md): simulation, rendering, networking and hosting boundaries.
- [Research notes](docs/research-notes.md): source checks, ruleset assumptions and what needs validation.
- [Roadmap](docs/roadmap.md): next milestones and the remaining portions of the supplied blueprint.

This independent prototype is not affiliated with TQ Digital or NetDragon. No original game assets or client binaries are included. Upstream research references are credited in the research notes; no emulator source is incorporated.

## One-container multiplayer hosting

```sh
docker build -t conquer-web .
docker run --rm -p 8787:8787 conquer-web
```

Open `http://localhost:8787`, then connect to `ws://localhost:8787` in Multiplayer. The container serves both the game and the authoritative realm. `render.yaml` is a starter deployment blueprint; production deployments require a WebSocket-capable host. Static Pages and Sites previews run solo unless you connect a separate realm.

Original art and generation briefs are documented in [public/art/README.md](public/art/README.md). Character visuals currently use detailed2Dsprites; rigged3Dcharacters and exact proprietary asset import remain on the roadmap.

Browser interaction checks are reproducible after `npx playwright install chromium`:

```sh
PREVIEW_URL=http://localhost:8787 node scripts/browser-smoke.mjs
PREVIEW_URL=http://localhost:8787 node scripts/multiplayer-smoke.mjs
```
