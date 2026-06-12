# Porting Notes

Vector Saint is structured as a browser prototype, but the simulation boundaries are intentionally platform-aware.

## Platform-independent systems

- `src/game/Player.ts`, `Enemy.ts`, `Bullet.ts`, `Pickup.ts`, `CollisionSystem.ts`, `ScoreSystem.ts`, `WaveDirector.ts`, and `AchievementSystem.ts` are plain TypeScript gameplay systems.
- `src/data/tuning.ts`, `enemyTypes.ts`, and `waveDefinitions.ts` contain portable balancing data.
- `src/utils` contains math, random, and pooling helpers with no browser or Three.js dependency.

These systems should port cleanly to Unity C#, MonoGame C#, or a shared gameplay library after type and container translation.

## Browser-specific systems to replace

- `src/render/*` should be replaced by Unity rendering, MonoGame draw code, or a custom GDK graphics layer.
- `src/input/GamepadManager.ts` uses the browser Gamepad API and should be replaced by XInput/GameInput, Unity Input System, or MonoGame input.
- `src/ui/*` uses DOM elements and should become native engine UI.
- `src/audio/AudioManager.ts` uses Web Audio and should become platform audio middleware or engine audio.
- `src/game/SaveSystem.ts` currently targets `localStorage`; it should map to platform save APIs.

## Xbox controller mapping

- Left stick: movement
- Right stick: aim
- RT: fire
- A: dash
- B: bomb
- Menu: pause
- D-pad/left stick: menu navigation
- A: menu confirm
- B/Menu: back or pause

## Saves and cloud saves

The current save payload contains settings, high score, and unlocked achievement IDs. On Xbox/GDK, this should be serialized into a compact versioned blob and stored via the platform's connected storage APIs so it can roam with the player's account.

## Achievements

The browser proof of concept unlocks local achievements totaling 1000G. In a GDK build, local unlock calls should be replaced by Xbox services achievement updates. Keep the achievement IDs stable and map each ID to the configured service achievement.

## Leaderboards

The local high score can become a platform leaderboard submission. Recommended leaderboard fields:

- Highest score
- Highest wave
- Longest survival time
- Highest multiplier

Submit at game over and cache failed submissions for retry.

## Why Three.js is prototype-only for Xbox

Three.js is excellent for fast browser iteration, WebGL/WebGPU-minded rendering experiments, and validating neon readability. It is not the recommended console shipping layer for Xbox because production Xbox publishing needs native platform integration, deterministic performance profiling, certified input/save/achievement flows, and direct access to the GDK toolchain.

## Suggested next step

Port the core simulation to Unity or MonoGame, then connect it to Xbox + Windows GDK services for Play Anywhere publishing. Keep the browser prototype as a fast design and tuning harness.
