# Vector Saint

**Vector Saint** is a controller-first neon vector twin-stick shooter prototype built with TypeScript, Vite, Three.js, and WebGL.

It is designed as a fast browser-playable arcade game with portable gameplay systems, fixed-step simulation, pooled entities, local saves, achievements, and a renderer that can be separated from the core game logic for a later Unity, MonoGame, native desktop, console, or Microsoft GDK port.

---

## Core idea

You are the Vector Saint, a hard-light pilot trapped inside a sacred geometry arena that keeps rewriting itself as enemies die.

Enemy deaths fracture the grid, spawn temporary hazards, open score opportunities, and feed the arena's weapon-modifier systems. The result is a compact arcade loop built around movement, aim, wave pressure, risk, and high-score chasing.

---

## Features

- Browser-based twin-stick shooter prototype
- Controller-first menus and gameplay
- Keyboard and mouse support with saved rebinding
- Xbox-style fixed controller map
- WASD movement, mouse aiming, dashing, bombs, and weapon cycling
- Multiple selectable hard-light player skins
- Skin-linked colours for projectiles, trails, pulses, dash effects, bomb effects, HUD accents, and menu accents
- Gameplay-light skin signature behaviours
- Rapid vector bolts, scatter shots, and beam-lance weapon handling
- Wave director with chasers, dashers, splitters, orbit mines, and swarms
- Score, multiplier decay, local high score, and local leaderboard-style persistence
- Achievement system with gamerscore-style values and toast notifications
- Main-menu achievement browser with locked and unlocked entries
- Settings menu for bloom, bloom strength, bloom radius, anti-aliasing, chromatic edge, background intensity, particle density, inverted controls, shake, flash reduction, colour palette, UI scale, difficulty assist, and selected skin
- Local save system using browser storage with cookie backup behaviour
- Secret `/` autopilot for AI achievement-run testing
- Debug overlay with FPS, entity counts, bullet count, particle count, and draw-call count
- Vitest test coverage for key portable gameplay systems
- CHCOfficial BuyMeACoffee support link in the main menu

---

## Tech stack

- **TypeScript** for game, input, UI, save, and simulation code
- **Vite** for local development and production builds
- **Three.js** for WebGL rendering
- **Vitest** for gameplay/system tests
- **Browser Gamepad API** for controller input
- **DOM UI overlays** for menus, HUD, settings, achievements, and toasts

---

## Requirements

- Node.js 18 or newer recommended
- npm
- A modern Chromium, Firefox, or Safari browser with WebGL support
- Optional: Xbox-style controller or compatible browser-supported gamepad

---

## Getting started

Clone the repository, install dependencies, and start the local Vite server.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal. Vite usually serves the game at:

```text
http://127.0.0.1:5173
```

---

## Available scripts

```bash
npm run dev
```

Start the Vite development server.

```bash
npm run build
```

Run TypeScript checks and create a production build in `dist/`.

```bash
npm run preview
```

Preview the production build locally.

```bash
npm run test
```

Run the Vitest test suite once.

```bash
npm run test:watch
```

Run Vitest in watch mode.

---

## Controls

### Keyboard and mouse

| Action | Default binding |
|---|---|
| Move | WASD |
| Aim | Mouse |
| Shoot | Left mouse button |
| Dash | Space |
| Bomb | E |
| Previous weapon | K |
| Next weapon | L |
| Pause | Escape |

### Controller

| Action | Default binding |
|---|---|
| Move | Left stick |
| Aim | Right stick |
| Shoot | RT |
| Dash | A |
| Bomb | B |
| Cycle weapons | LB / RB |
| Pause | Menu |

Open **Controls** from the main menu to review bindings, rebind keyboard and mouse actions, view the fixed Xbox controller map, or reset controls to defaults.

Open **Settings** to toggle inverted gameplay movement and aiming. Menu navigation is not affected by the inverted controls setting.

---

## Player skins

Vector Saint includes multiple selectable hard-light skins. Each skin changes the visual identity of the player, weapon fire, trails, pulses, dash effects, bomb effects, HUD accents, and menu accents.

Available skins:

- Vector Saint
- Solar Warden
- Void Choir
- Glass Seraph
- Redline Martyr
- Prism Ghost
- Ion Chapel
- Neon Revenant

Skin powers are intentionally lightweight so the game keeps an arcade-first feel rather than becoming a heavy RPG system.

---

## Project structure

```text
src/
  audio/       Audio manager and sound triggers
  data/        Tuning, weapons, enemies, relics, skins, waves, visual settings
  game/        Core game loop, state, entities, collision, score, saves, achievements
  input/       Keyboard, mouse, gamepad, and normalized input frames
  render/      Three.js rendering, effects, camera, particles, grid, trails
  ui/          Menus, HUD, pause, settings, controls, achievements, toasts
  utils/       Math, pooling, and random helpers

tests/         Vitest coverage for portable gameplay systems

dist/          Production build output, generated by Vite
```

---

## Architecture notes

Vector Saint separates portable gameplay systems from browser-specific rendering and UI wherever possible.

The game code uses:

- Plain TypeScript state for core simulation
- Fixed-step update boundaries
- Data-driven tuning files
- Object pools for repeated gameplay entities
- A normalized input frame rather than direct browser event consumption
- A Three.js render adapter that can be replaced during a later port

This keeps the prototype useful beyond the browser version. The `PORTING_NOTES.md` and `TUNING_GUIDE.md` files are intended to support that future work.

---

## Visual and performance notes

Use the in-game **Settings** menu to tune the look and performance.

Recommended first changes for lower-end hardware:

1. Reduce **Particle density**.
2. Set **Bloom** to low or off.
3. Lower **Bloom strength** if highlights look foggy.
4. Reduce **Background intensity** if the arena feels too busy.
5. Use **Flash reduction** if effects feel too aggressive.

---

## Testing

Run the full test suite with:

```bash
npm run test
```

Current tests cover systems such as:

- Collision
- Control bindings
- Math utilities
- Player infinite movement
- Object pooling
- Projectile magnetism
- Relics
- Saves
- Scoring
- Secret pilot behaviour
- Skin abilities
- Wave director behaviour
- Weapons
- Achievements

---

## Building for release

Create a production build:

```bash
npm run build
```

Preview the built version locally:

```bash
npm run preview
```

The generated static site is written to:

```text
dist/
```

For GitHub Pages, Netlify, Vercel, itch.io HTML5 upload, or other static hosting, deploy the contents of `dist/` after running the build.

---

## Roadmap ideas

Potential next steps:

- Add more weapon modifiers tied to arena fractures
- Expand enemy death grid-fracture behaviours
- Add daily and weekly challenge mode if online services are planned
- Add a lightweight in-game encyclopaedia for systems, controls, weapons, enemies, relics, scoring, and skins
- Add first-time prompts when players encounter new systems
- Add more score-gate and hazard patterns
- Add polished screenshot and trailer capture mode
- Add optional online leaderboard service
- Add a framework for ads or sponsorship UI only where it does not harm the core game feel
- Prepare a native wrapper or porting branch once the browser version is stable

---

## Support

If you enjoy the project or want to support further development, the main menu includes a link to:

**BuyMeACoffee: CHCOfficial**

Please keep the CHCOfficial support reference and link visible in forks or redistributed versions unless you have written permission to remove it.

---

## License

This project is released under the custom **Vector Saint Source License** included in `LICENSE`.

In plain English:

- You may view, use, modify, and share the source.
- You must preserve copyright notices, license text, and CHCOfficial attribution/support links.
- The software is provided as-is, with no warranty and no expectation of support.
- The license text in `LICENSE` is the controlling version.

---

## Author

Created by **Chris Harper / CHCOfficial**.

Project name: **Vector Saint**
