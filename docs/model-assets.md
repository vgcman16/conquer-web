# Animated character assets

`public/models/jade-warrior.glb` is a real, skinned humanoid with one 65-bone
skeleton, independently visible clothing meshes, embedded materials, and twelve
animation clips. It is not a billboard, a posed image, or a rigid game piece.

## Sources and license

The character uses the free Standard releases of these **Quaternius** packs,
downloaded from the artist's official itch.io pages on October 14, 2026:

| Pack                                | Official source                                                                                                                                           | Parts used                                          | Download archive SHA-256                                           |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------ |
| Universal Base Characters           | [Artist page](https://quaternius.com/packs/universalbasecharacters.html), [download](https://quaternius.itch.io/universal-base-characters)                | Superhero male head, eyes, and eyebrows             | `fdbf1804c90dfc1ea03e992bff7da2dfd1a79318e13270a660180f9308455f40` |
| Modular Character Outfits — Fantasy | [Artist page](https://quaternius.com/packs/modularcharacteroutfitsfantasy.html), [download](https://quaternius.itch.io/modular-character-outfits-fantasy) | Male Peasant and Male Ranger modular clothing       | `c3468b18871cc8c8f05ab14df7712baf22cb9f389cbd870babf130e595187f70` |
| Universal Animation Library         | [Artist page](https://quaternius.com/packs/universalanimationlibrary.html), [download](https://quaternius.itch.io/universal-animation-library)            | Universal skeleton and selected in-place animations | `cc73fc4e495b82958207316596317a3f40b9fa38065bde1027937452da537724` |

All three artist pages identify their assets as
[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/).
The license files included in those downloads are preserved verbatim in
`public/models/licenses/`. CC0 permits source redistribution in this public
repository. No Conquer Online client assets, Mixamo assets, or proprietary
character models are included.

The simple tied hairstyle is original geometry made for this project. The
hairstyle and assembly modifications are also dedicated to CC0. Game code
retains the repository's MIT license.

## Assembly

The artist's `UAL1_Standard.glb` in-place skeleton is the shared skeleton.
Blender 5.2 imports the source clothing and head, poses each original skin to
the animation skeleton's bind pose, bakes that deformation into its vertices,
and binds all meshes to the shared skeleton. This accounts for the source
packs' slightly different body proportions while preserving the authored
animation tracks. The head is cut at the neck; clothing remains separate.

Only the twelve clips below are retained. Textures are reduced to at most
512 pixels per side and embedded as JPEGs. A single GLB contains everything
needed by `GLTFLoader`, with no runtime texture URLs or Draco decoder.

Final asset: **4,174,120 bytes**, SHA-256
`161ad3fab3fbef9ccdfea6fd4832cc9037655ed5354034ae1a3d08bcae87fdeb`.
It contains 45,154 triangles across all alternative clothing meshes; only
the equipped subset should be visible at a time.

## Runtime contract

The GLB uses **Y up** and faces **+Z**. At the first idle frame the visible
base character stands approximately 1.786 model units tall, with its soles
at Y = -0.004. Scale around 1.57 gives a 2.8-unit character. The anatomical
right hand lies on negative X when facing the camera.

| State        | Animation clip       | Duration |
| ------------ | -------------------- | -------- |
| Idle         | `Idle_Loop`          | 2.500 s  |
| Walk         | `Walk_Loop`          | 1.333 s  |
| Run          | `Jog_Fwd_Loop`       | 0.917 s  |
| Sprint       | `Sprint_Loop`        | 0.667 s  |
| Jump takeoff | `Jump_Start`         | 1.333 s  |
| Airborne     | `Jump_Loop`          | 2.500 s  |
| Landing      | `Jump_Land`          | 1.250 s  |
| Sword ready  | `Sword_Idle`         | 1.667 s  |
| Sword attack | `Sword_Attack`       | 1.500 s  |
| Cast         | `Spell_Simple_Shoot` | 0.500 s  |
| Hit reaction | `Hit_Chest`          | 0.333 s  |
| Death        | `Death01`            | 2.375 s  |

Play idle immediately after loading; the bind pose is a T-pose. Use
`SkeletonUtils.clone` for independently animated characters and an
`AnimationMixer` per character. Clip durations can be time-scaled to gameplay
timings. Movement is in-place; the game simulation controls world position.

Relevant attachment bones are `hand_r`, `hand_l`, `Head`, `spine_03`, `pelvis`,
and `root`. The right-hand local +Z axis points out from the palm; weapons
can use a small local Y offset to center their grip.

| Meshes                                                                            | Display rule                                              |
| --------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `Head_Face`, `Head_Eyes`, `Head_Eyebrows`, `Hair_Cap`, `Hair_Topknot`             | Always visible, except hair may be hidden under a helmet  |
| `Base_Tunic`, `Base_Sleeves`, `Base_Trousers`                                     | Basic clothing; hide when replacing with the armor outfit |
| `Base_Shoes`                                                                      | Basic shoes; hide when boots are equipped                 |
| `Gear_Armor_Tunic`, `Gear_Armor_Sleeves`, `Gear_Armor_Trousers`                   | Alternate armor clothing                                  |
| `Gear_Armor_Belt`, `Gear_Armor_Sash`, `Gear_Armor_Bracers`, `Gear_Armor_Pauldron` | Armor accessories, separately toggleable                  |
| `Gear_Boots`                                                                      | Equipped boots                                            |
| `Gear_Hood`                                                                       | Optional headgear                                         |

Hide `Gear_*` initially. Changing equipment visibility does not replace or
restart the skeleton or animation mixer. Weapon, helmet, and cape geometry
can be attached separately by the renderer, preserving independent slots.

## Verification

The resulting GLB was re-imported into Blender, animated with `Walk_Loop`,
and rendered to verify articulated limbs, a coherent head and body, and
clothing deformation. All twelve named clips, one skin, modular mesh names,
and embedded texture buffers were checked in the exported GLB JSON.
