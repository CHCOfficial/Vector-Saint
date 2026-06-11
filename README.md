# Vector Saint

Vector Saint is a first playable browser prototype for a modern neon twin-stick arcade shooter. It uses TypeScript, Vite, Three.js, DOM UI overlays, the browser Gamepad API, local saves, pooled entities, and fixed-timestep simulation boundaries intended to survive a later Unity, MonoGame, or Microsoft GDK port.

<img width="2268" height="1848" alt="image" src="https://github.com/user-attachments/assets/4d356ed6-6711-4844-ad5f-7913b6a367cf" />

## Setup

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal, usually `http://127.0.0.1:5173`.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run test
```

## Controls

- Left stick or WASD: move
- Right stick or mouse: aim
- RT or left mouse: shoot
- LB/RB or K/L: cycle weapons
- A or Space: dash, up to three stored charges
- B or E: bomb
- Menu or Escape: pause

Open `Controls` from the main menu to review the current keyboard/mouse bindings, see the fixed Xbox controller map, rebind actions, or reset to defaults. `Settings` includes an `Invert controls` toggle that flips the vertical gameplay movement/aim axes without changing menu navigation.

## Architecture

The core simulation lives in `src/game` and uses plain TypeScript state, fixed-step updates, data-driven tuning, and object pools. Rendering lives in `src/render` as a Three.js adapter. Input lives behind `src/input/InputManager.ts`, so gameplay code consumes a normalized input frame instead of browser events.

The prototype includes:

- Controller-first menus and gameplay input
- Eight selectable hard-light player skins with matching projectiles, trails, pulses, dash/bomb colour, and UI accents
- Neon shader-style player visuals, upgraded projectiles, reactive trail, redesigned enemies, scrolling infinite grid field with faint RGB wave patterns, bloom, chromatic edge, particles, shockwaves, camera shake, and flash reduction
- Weapons with rapid vector bolts, close-range scatter shots, and a beam lance
- Waves with chasers, dashers, splitters, orbit mines, and swarms
- Score, multiplier decay, local high score, settings saves, and achievement toasts
- Main-menu achievements browser showing unlocked/locked achievements and earned gamerscore
- Main-menu controls browser with saved keyboard/mouse rebinding and Xbox mapping reference
- Main-menu support link for CHCOfficial on BuyMeACoffee
- Debug overlay with FPS, entity counts, bullet count, particle count, and draw-call count
- Hidden `/` autopilot for AI achievement-run testing
- Vitest coverage for portable systems

## Skins

Open `Select Skin` from the main menu, then use left/right, the buttons, or controller navigation to cycle skins. The selected skin is saved locally and applies to the player shader, projectile colour, projectile trail particles, dash/bomb effects, player-origin pulses, and HUD/menu accent colour.

Available skins:

- Vector Saint
- Solar Warden
- Void Choir
- Glass Seraph
- Redline Martyr
- Prism Ghost
- Ion Chapel
- Neon Revenant

## Visual Settings

Open `Settings` to adjust bloom level, bloom strength, bloom radius, anti-aliasing, chromatic edge, background intensity, particle density, inverted controls, screen shake, flash reduction, colour palette, UI scale, difficulty assist, and selected skin. Open `Controls` to adjust saved keyboard/mouse bindings.

Performance notes:

- Lower `Particle density` first on integrated GPUs.
- Use `Bloom` low/off and `Bloom strength` soft if highlights look foggy.
- The renderer keeps gameplay state separate from Three.js objects so the simulation remains portable.

## Achievements

Open `Achievements` from the main menu to review unlocked and locked achievements, descriptions, and earned gamerscore. Achievement unlocks are saved locally with the high score and settings.
