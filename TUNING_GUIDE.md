# Tuning Guide

Most gameplay and presentation values live in `src/data/tuning.ts`.
Most visual polish values live in `src/data/visualTuning.ts`.

## Enemy speed and health

Edit `ENEMY_TUNING` in `src/data/enemyTypes.ts`.

- `speed`: base movement speed
- `health`: hits before death
- `radius`: collision size
- `score`: base score before multiplier
- `turnRate`: how quickly the enemy can redirect

## Spawn rate and difficulty curve

Edit `WAVE_TUNING` in `src/data/tuning.ts` and `WAVE_DEFINITIONS` in `src/data/waveDefinitions.ts`.

- `waveDuration`: seconds before the displayed wave increases
- `baseSpawnInterval`: starting delay between spawn groups
- `minSpawnInterval`: lower bound at high difficulty
- `difficultyRamp`: how quickly pressure increases
- `maxEnemies`: active enemy cap
- `despawnDistance`: how far enemies can fall behind the player before cleanup

Waves spawn around the player's current world position, not a fixed arena origin. This keeps pressure entering from off-screen while the playfield scrolls infinitely.

## Camera and infinite movement

Edit `RENDER_TUNING.camera` in `src/data/tuning.ts`.

- `followSpeed`: how tightly the camera follows the player through unbounded world space
- `lookAhead`: subtle camera aim toward player velocity

The player is no longer clamped to `ARENA_TUNING`. The camera follows the player while the visual grid and energy field re-center around the player to sell an infinite playspace.

## Bloom

Edit `VISUAL_TUNING.bloom`, `bloomStrengthScale`, and `bloomRadiusScale` in `src/data/visualTuning.ts`.

Settings expose off, low, medium, and high bloom, plus strength and radius presets. Lower `strength` and `radius` if bullets or enemies become hard to read.

## Anti-aliasing

Edit `DEFAULT_SETTINGS.antiAliasing` in `src/data/tuning.ts` to change the default.

Settings expose:

- `off`: lowest overhead, useful for GPU debugging
- `fxaa`: inexpensive full-screen smoothing
- `smaa`: sharper shader anti-aliasing for vector edges
- `msaa-4x`: WebGL2 multisampled composer targets
- `msaa-4x-smaa`: default high-quality mode, with SMAA fallback when multisampled targets are unavailable

Use `fxaa` or `smaa` on weaker integrated GPUs. Use `msaa-4x-smaa` when the arena boundary or neon silhouettes show visible stair-stepping.

## Particle count

Edit `VISUAL_TUNING.particleDensity`, `explosions`, and `projectile`.

- `maxParticles`: total pooled particle budget
- `enemyBurst`: particles spawned when an enemy dies
- `bombBurst`: particles spawned by bomb use

Lower these for integrated GPUs.

## Weapons

Edit `src/data/weapons.ts`.

- `fireInterval`: delay between shots while fire is held
- `projectile.pelletCount`: number of bullets for projectile weapons
- `projectile.spreadRadians`: shotgun-style cone width
- `projectile.life`: projectile range through lifetime
- `beam.range` and `beam.width`: beam reach and hit thickness
- `beam.damage`: damage per beam tick

Default controls use `K` and `L` or controller `LB` and `RB` to cycle weapons.

## Dash charges

Edit `PLAYER_TUNING` in `src/data/tuning.ts`.

- `dashCharges`: number of dash charges the player can store
- `dashCooldown`: time to recharge each spent dash charge
- `dashSpeed`, `dashDuration`, and `dashInvulnerable`: dash movement and safety window

The HUD dash meter uses a fixed-size bar and fills by charge progress; it does not resize the meter layout.

## Skins

Edit `src/data/playerSkins.ts`.

- `primaryColor`: player body and key fill colour
- `secondaryColor`: glow, trail, and most UI accenting
- `accentColor`: projectile/effect accent; very dark accents automatically fall back to a readable colour for UI and bullets
- `emissiveIntensity`: intended bloom energy for future material expansion
- `trailStyle` and `projectileStyle`: data tags used by visual controllers

## Arena and Enemy Visuals

Edit `VISUAL_TUNING.arena` and `VISUAL_TUNING.enemies`.

- `gridOpacity`: infinite grid readability
- `infiniteGridScale`: how far the visual grid extends beyond the gameplay arena
- `gridFadeStart` and `gridFadeEnd`: how softly the visual grid fades before its far extent
- `gridWaveAmplitude`, `gridWaveFrequency`, and `gridWaveSpeed`: subtle idle floor animation
- `gridRgbWaveStrength`: how strongly the faint RGB cycle mixes into the base grid colour
- `gridRgbWaveScale` and `gridRgbWaveSpeed`: size and travel speed of the RGB wave ribbons
- `energyPlaneOpacity`: animated floor haze under the grid
- `symbolOpacity`: sacred-geometry floor decoration
- `glowOpacity`, `coreOpacity`, and `outlineOpacity`: enemy silhouette strength
- `spawnScaleDuration`: spawn-in animation timing

The visible arena is intentionally larger than a single combat screen. Enemy spawn framing still uses `ARENA_TUNING` as a player-centered screen-sized pressure box, while the player, camera, grid, and energy field move through unbounded world space.

## Score values

Edit enemy `score` values in `src/data/enemyTypes.ts` and score behavior in `SCORE_TUNING`.

- `multiplierPerKill`: growth per kill
- `multiplierDecayDelay`: grace period after a kill
- `multiplierDecayRate`: multiplier loss per second
- `bombMultiplierPenalty`: multiplier reduction after bomb use

## Difficulty assist

`forgiving` mode changes incoming damage, bomb radius, spawn pressure, and multiplier decay inside the gameplay systems. Keep this as a light assist rather than a separate rule set.

## Secret pilot

Edit `SECRET_PILOT_TUNING` in `src/data/tuning.ts`.

- `dangerRadius` and `emergencyRadius`: when the pilot starts dodging and dashing away
- `preferredRange`: target kiting distance
- `shotgunRange`, `beamRange`, and `beamClusterHits`: weapon-selection thresholds
- `bombEnemyThreshold` and `bombRadiusScale`: when the pilot spends a bomb
- `orbitBeamAvoidance`: how far the pilot keeps away from orbit-mine beams
- `spareChargeDashRadius`: when the pilot spends a non-final dash charge before panic range
- `weaponCycleDelay`: delay between automatic weapon-cycle inputs
- `retryDelay`: time before an active pilot retries after game over

Press `/` during the game or from the main menu to toggle the hidden achievement-run pilot.
