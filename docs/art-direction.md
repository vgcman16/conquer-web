# Art direction: dark slate and imperial brocade

The revised material direction uses dark blue-gray stone, aged gold, midnight
navy silk, and restrained moss. Surface detail should support the architecture
and character silhouette at play scale. Keep highlights, moving light and
shadows in the 3D renderer rather than painting them into the diffuse textures.

## World and wardrobe

The city art pass uses slate courts and causeways, dark ceramic roofs, layered
martial halls, carved guardians, timber detail and hanging cloth banners.
These are original Three.js scene geometry and materials in `world3d.js`.

`wardrobe3d.js` adds original modeled metalwork over the licensed animated
base: raised breastplates, overlapping lamellae, dragon shoulders, rivets,
bracers, plated waist panels, greaves, coronets and decorated weapons.
Class palettes and proportions vary; Taoists use longer robe panels and
wide cuffs. Equipped mantles have brocade outer cloth, colored inner lining
and movement deformation. Attachments follow the appropriate skeleton bones;
they are not a replacement motion library or historical C3 import.

The base body, fitted skinned clothing, 65-bone rig and twelve animation clips
remain the Quaternius CC0 assets documented in [model assets](model-assets.md).
The eight independent equipment slots remain unchanged. Armor, boots and
other visible pieces use their equipped state; rings also contribute stats.
The two generated surface textures below are a separate contribution.

## Official visual references

These references informed silhouette, material contrast and architectural
detail. They were inspected for comparison, not incorporated as assets or
used as generation input. The result is an original interpretation, not a
claim of exact historical patch visuals.

- [Official Trojan class art](https://co.99.com/guide/classes/trojan.shtml) and [armor guide](https://co.99.com/guide/items/mails.shtml): ornamental shoulders, segmented armor and distinct weapon silhouettes.
- [Official 2007 town screenshot](https://co.99.com/picfile/2007-10-19/55e53h4777b4olp.shtml): cool stone, plaster and timber shopfronts, equipment contrast and street props.
- [Official 2007 market screenshot](https://co.99.com/picfile/2007-10-19/6fhs6150ps70486.shtml): different robe and armor outlines, saturated clothing and structured planting.
- [Official roof close-up](https://co.99.com/picfile/2007-10-19/1f7td5685suam3m.shtml): dense ceramic tile courses, wooden gables and layered eaves.

## Delivered materials

Both textures were generated specifically for this project with the built-in
OpenAI `image_gen` tool on October 14, 2026. Each is one original generation,
with no reference image, downloaded third-party texture, or original Conquer
Online asset. The built-in tool produced 1254 × 1254 PNG originals. The selected
outputs were inspected, downsampled to 1024 × 1024, and encoded as RGB WebP at
quality 88. No paint-over, noise substitution, or color remapping was applied.

| Asset                                                                | Intended use                             | Final dimensions | Bytes   | SHA-256                                                            |
| -------------------------------------------------------------------- | ---------------------------------------- | ---------------- | ------- | ------------------------------------------------------------------ |
| [`worn-slate.webp`](../public/art/materials/worn-slate.webp)         | Courtyard and walkway diffuse/base color | 1024 × 1024      | 308,600 | `ce7a5740791ab73079a37c84254379de0b07b4b831309954f7b7c099f3d1f278` |
| [`dragon-brocade.webp`](../public/art/materials/dragon-brocade.webp) | Navy robe and garment diffuse/base color | 1024 × 1024      | 482,768 | `1097c71ada6c536740a996eed56189c8e04301834da2687d6f7c716cad6f802f` |

Load base-color maps with `SRGBColorSpace`. Both were prompted as seamless
textures and visually checked in a 2 × 2 repeat after WebP conversion. They
have no perspective, borders, labels, large scene objects, or fabric folds.
The stone uses irregular slab lengths and fine fissures; the fabric uses
small dragon, cloud and scale motifs rather than one central illustration.

Use neutral or near-white material tint when retaining the brocade's navy
and gold colors; strong whole-material tint muddies the gold thread. Let
physical material roughness, light placement and any separately authored
normal maps provide the final surface response. These are base-color images,
not a complete PBR texture set. UV scale and any visible repetition still
need to be judged in the actual scene and garment.

## Final generation prompts

### Worn slate

> Use case: stylized-concept. Asset type: seamless 1024 by 1024 PBR base-color texture for a detailed Chinese wuxia courtyard in a Three.js game. Primary request: worn, chipped dark charcoal slate paving made of irregular rectangular stone slabs, orthographic straight-down surface scan, full image occupied by the material, seamless tiling in both directions. Color palette: limited rich dark blue-gray slate and charcoal, restrained muted olive moss in thin crevices, tiny desaturated mineral flecks. Materials: fine layered slate grain, hand-worked aged stone, subtly chipped corners, narrow uneven grout, occasional hairline cracks and worn edges, restrained realistic small-scale variation. Slabs around 12 to 18 per tile, irregular lengths in staggered courses. Lighting: completely flat diffuse albedo, no directional light, no cast shadows, no highlights or baked ambient occlusion, consistent exposure everywhere. Composition: square, tile edges match precisely, no perspective, no border, no text, no labels, no decorative symbols, no objects, no scene or environment beyond the material. Surface should read as premium dark aged slate, not pale beige tile and not random noise. Produce a single texture image.

Original generated file: `exec-33fed38d-d578-4f37-b3c2-63f4dfc3516b.png`.

### Dragon brocade

> Use case: stylized-concept. Asset type: seamless square 1024 by 1024 diffuse fabric material for luxurious ancient Chinese wuxia warrior garments in a high-quality Three.js game. Primary request: small-scale finely woven antique gold embroidery on very dark midnight navy brocade, flattened textile surface texture. Pattern: repeating refined Chinese dragon-cloud-scale arabesque motifs, sinuous small dragon silhouettes woven among auspicious cloud curls and subtle overlapping scale fans, dense intricate silk threads and delicate double-line gold embroidery. Motifs approximately 10 to 15 repeats across the whole image so the design reads as fine textile detail rather than one large illustration. Color palette: rich near-black navy #101b2a ground with subtly lighter blue woven floral texture and restrained aged gold #b6914c threads, small warm ivory thread accents. Material: visible fine silk weave, tiny stitched thread contours, elegant expensive ancient Chinese brocade, restrained variation. Composition: completely flat orthographic straight-down fabric swatch, image occupied edge-to-edge, seamless tile both directions with matching edges, no large central medallion, no borders. Lighting: flat base color only, uniform diffuse illumination, no specular shine, no directional lighting, no cast shadows, no drape, no wrinkles or folds, no 3D depth or perspective. No text, no symbols resembling writing, no watermark, no logo. Produce a single texture image.

Original generated file: `exec-6194870d-b764-402e-b627-ffe208e90fd9.png`.

## Source boundaries

These generated materials are separate from the licensed character geometry
and motion library. The latter's official CC0 sources and retained licenses
are documented in [model assets](model-assets.md). Earlier interface and
cutout generation notes remain in [the art archive](../public/art/README.md).
