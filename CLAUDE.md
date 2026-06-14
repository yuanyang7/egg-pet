# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

"Fry Six Eggs" — a small browser toy/pet game rendered entirely on a single `<canvas>`. Pure vanilla HTML/CSS/JS with **no build step, no dependencies, no package manager, and no tests**. Everything runs client-side.

## Running

Open `index.html` (English) or `zh.html` (Chinese) directly in a browser, or serve the folder over a static server for a cleaner reload:

```sh
python3 -m http.server 8000   # then visit http://localhost:8000/index.html
```

There is nothing to build, lint, or test. Verification is manual: load the page and interact.

## Files

- `egg.js` — all game logic and canvas rendering (~1200 lines). The only place real changes happen.
- `egg.css` — styling for the HUD, toolbar, and finale overlay (the DOM chrome around the canvas).
- `index.html` / `zh.html` — near-identical shells. They differ only in `<html lang>` (`en` vs `zh-CN`) and `<title>`. Both load the same `egg.js`.

## Language handling

The page language is **not** stored in JS strings per-file — it is derived at runtime from `document.documentElement.lang`. `egg.js` line ~1 picks `LANG` = `'zh'` if the lang attribute starts with `zh`, else `'en'`, then selects from the `STRINGS` table.

Consequences when editing:
- All user-facing text lives in the `STRINGS.en` / `STRINGS.zh` objects at the top of `egg.js`. **Add any new string to both** — they must stay key-for-key identical or the other language breaks.
- `index.html` and `zh.html` carry no visible copy of their own; labels are injected by `applyStrings()`. Keep the two HTML files structurally in sync (same element IDs / `data-tool` attributes) so both pages wire up correctly.
- The finale photo (`composePhoto`) and CSS pick fonts per-language; preserve the `html[lang^="zh"]` selectors and the `LANG==='zh'` font branch.

## Architecture (egg.js)

Single `requestAnimationFrame` loop: `loop()` → `update(dt)` then `draw()`. `dt` is normalized to ~60fps units (`/16.67`), so all rates are expressed per-frame-at-60fps; multiply movement/decay by `dt`.

**Egg lifecycle (state machine on each egg object):**
`raw` → `cooking` → `cooked` → `free`, with fried eggs able to loop back `free` → `returning` → `resting` → `free`. `makeEgg()` documents every field. Key roles:
- `egg` (singular global) — the one egg currently in the pan being fried. `null` until the player drags one from the carton.
- `flock` — already-fried eggs now roaming the screen as semi-autonomous "pets" (they wander, sometimes try to reclaim the pan as squatters).
- `friedSnapshots` — frozen `{cook, salt, pepper, happy, dizzy}` looks captured at fry time, used to render the finale group photo. A `resting` squatter that gets re-cooked/re-seasoned updates its snapshot via `syncSnapshot()`.

**Layout is fully responsive and recomputed on resize:** `layoutHolder()` (carton), `layoutPan()`, `refreshRoamBox()` (the box free eggs drift within). Positions are derived from the live bounding rects of the `.hud` and `.toolbar` DOM elements, so the canvas geometry depends on the rendered chrome — changing the HUD/toolbar size shifts the play area. A `document.fonts.ready` re-`resize()` exists because font metrics affect those rects.

**Tools** (`pet`, `fry`, `salt`, `pepper`, `poke`) are selected via toolbar buttons; `tool` global gates behavior in `handleClick()` and the pointer handlers. Dragging a raw egg from a carton slot into the pan is handled separately in the `pointerdown`/`pointerup` flow (`dragEgg`).

**Rendering** is all immediate-mode canvas drawing built from primitives: `blobPoints()`/`tracePoints()` make the wobbly egg-white outline, `browningColors(cook)` maps doneness (0–1 normal, 1–2.2 overcooked→burnt) to colors, and `drawEgg()` / `drawEggPortrait()` share that color logic between the live game and the finale photo. Eggs are y-sorted before drawing for depth.

When adding behavior, the established pattern is: store state on the egg object in `makeEgg()`, advance it in the relevant `update*` function scaled by `dt`, and reflect it visually in `drawEgg`. Mood/status text is data-driven through `moodText()` reading egg state — wire new states there rather than writing to the DOM directly.
