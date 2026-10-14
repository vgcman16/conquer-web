# Roadmap

This repository establishes a playable first slice. The original eight-phase blueprint remains a broader program, with compatibility work separate from the web-native game.

| Blueprint area                | First-slice scope                                                                                                        | Remaining work                                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| 1. Assets and import pipeline | Original generated browser art and procedural terrain and authored world data                                                                  | Build-tagged DAT/WDF/DMAP/PUL/ANI/DDS/C3 readers and conversion fixtures, if interoperability becomes a requirement |
| 2. Isometric renderer         | PixiJS diamond terrain, visible 8 × 8 chunks, LRU cache eviction, depth sorting, roof transparency, minimap and effects | Streaming remote map chunks, hard memory budgets, 3D skeletal equipment and measured device performance             |
| 3. Movement                   | Click movement with eight-neighbor A*, corner checks, walkability and rendered jump arcs                                 | Reference-calibrated timing/elevation, route stress tests and mobile controls                                       |
| 4. Networking                 | Node WebSocket authority using the project's protocol; one container serves frontend and world                           | Persistent accounts, TLS deployment, sessions and historical protocol adapter                                       |
| 5. World synchronization      | Shared browser/server world simulation and snapshots                                                                     | Interest management, prediction/reconciliation, reconnect recovery and instance transfers                           |
| 6. Combat                     | Class-specific prototype attacks and resource checks                                                                     | Pinned-build formulas, full skills, XP states, status effects and PvP rules                                         |
| 7. Inventory and NPCs         | Starter equipment, loot/progression loop, NPC quest/service interactions                                                 | Persistent transactional economy, storage, trading, shops and complete composition rules                            |
| 8. Production systems         | Build/test entry points and server deployment foundation                                                                 | Rebirth, guilds, persistence, observability, abuse controls and measured concurrency                                |

## Next milestones

1. **Persistent co-op alpha.** Persist characters, inventory and quest state; add guest identity recovery; host the WebSocket server with TLS. Acceptance: two browsers complete the same world loop, reconnect safely, and retain progress after server restart.
2. **Combat and movement fidelity.** Pin one classic build; record behavioral fixtures; calibrate jump timing, collision, damage ordering and line hit shapes. Acceptance: replayed scenarios produce expected outcomes under latency, rejection and duplicate-command cases.
3. **Content and art expansion.** Add original zones, authored animations, classes, quest chains and audio. Introduce chunk manifests and texture budgets before large maps. Acceptance: traversal keeps bounded memory and stable frame times on a declared reference device.
4. **MMO foundations.** Add area-of-interest replication, instance ownership, persistent economy transactions, moderation and instrumentation. Acceptance: report actual player counts, bandwidth, tick delays, frame times and recovery behavior from repeatable load tests.

Do not describe an unmeasured renderer as 125 FPS or a single-process prototype as MMO scale. Frame rate, responsiveness and concurrent population are separate acceptance criteria.
