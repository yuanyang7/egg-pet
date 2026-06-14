# Fry Six Eggs 🍳

A tiny browser pet/toy game, rendered entirely on a single `<canvas>`. Drag raw eggs from the carton into the pan, fry them, season them, and watch them hatch into little wandering companions with their own moods.

No build step, no dependencies, no package manager, no tests — just open an HTML file in your browser.

## Play online

- [English](https://yuanyang7.github.io/egg-pet/index.html)
- [中文](https://yuanyang7.github.io/egg-pet/zh.html)

## Play it

Open [`index.html`](index.html) (English) or [`zh.html`](zh.html) (Chinese) directly in a browser, or serve the folder for a cleaner reload experience:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000/index.html
```

## How it works

- **Carton → Pan**: drag a raw egg from the carton into the pan, then tap the pan to start heating it.
- **Tools**: switch between `pet`, `fry` (heat), `salt`, `pepper`, and `poke` (boop) using the toolbar.
- Fried eggs hop out of the pan and roam the screen as semi-autonomous little pets — they wander, get moods, and sometimes try to sneak back into the pan.
- Fry, season, and pet all six to get your finale group photo.

## Files

- `egg.js` — all game logic and canvas rendering
- `egg.css` — styling for the HUD, toolbar, and finale overlay
- `index.html` / `zh.html` — page shells for English and Chinese (same script, different `<html lang>`)
