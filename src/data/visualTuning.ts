export type ChromaticAberrationLevel = 'off' | 'low';
export type BackgroundIntensity = 'low' | 'medium' | 'high';
export type ParticleDensity = 'low' | 'medium' | 'high';
export type BloomStrengthPreset = 'soft' | 'balanced' | 'radiant';
export type BloomRadiusPreset = 'tight' | 'medium' | 'wide';

export const VISUAL_TUNING = {
  bloom: {
    off: { strength: 0, radius: 0, threshold: 1 },
    low: { strength: 0.42, radius: 0.26, threshold: 0.34 },
    medium: { strength: 0.78, radius: 0.36, threshold: 0.24 },
    high: { strength: 1.08, radius: 0.48, threshold: 0.18 }
  },
  bloomStrengthScale: {
    soft: 0.78,
    balanced: 1,
    radiant: 1.22
  },
  bloomRadiusScale: {
    tight: 0.76,
    medium: 1,
    wide: 1.25
  },
  chromaticAberration: {
    off: 0,
    low: 0.0018
  },
  backgroundIntensity: {
    low: 0.68,
    medium: 1,
    high: 1.22
  },
  particleDensity: {
    low: 0.62,
    medium: 1,
    high: 1.32
  },
  player: {
    hoverAmplitude: 0.12,
    hoverSpeed: 2.2,
    idlePulse: 0.1,
    shootPulseDuration: 0.18,
    dashPulseDuration: 0.36,
    bombPulseDuration: 0.72,
    damagePulseDuration: 0.48,
    deathPulseDuration: 0.9,
    haloScale: 2.75
  },
  projectile: {
    coreRadius: 0.92,
    glowRadius: 2.25,
    ringInnerRadius: 1.08,
    ringOuterRadius: 1.42,
    streakLength: 5.8,
    streakWidth: 1.32,
    stretchMin: 1.35,
    stretchMax: 2.65,
    weaponProfiles: {
      vectorBolt: {
        tracerLength: 7.2,
        tracerWidth: 1.72,
        coreScale: 1.18,
        glowScale: 1.48,
        ringScale: 1.12,
        backOffset: 1.55
      },
      scatterCrown: {
        tracerLength: 5.6,
        tracerWidth: 1.58,
        coreScale: 1.08,
        glowScale: 1.34,
        ringScale: 0.98,
        backOffset: 1.08
      },
      lanceBeam: {
        tracerLength: 6.4,
        tracerWidth: 1.5,
        coreScale: 1.1,
        glowScale: 1.38,
        ringScale: 1,
        backOffset: 1.35
      }
    },
    trailParticlesPerBulletSecond: 3.8
  },
  trail: {
    length: 34,
    pointSpacing: 0.32,
    baseOpacity: 0.34,
    dashOpacity: 0.84,
    width: 0.12,
    afterimageCount: 6
  },
  enemies: {
    glowOpacity: 0.18,
    coreOpacity: 0.32,
    outlineOpacity: 0.98,
    accentOpacity: 0.76,
    spawnScaleDuration: 0.42,
    pulseSpeed: 5.5,
    orbitAccentSpeed: 1.2
  },
  arena: {
    gridOpacity: 0.68,
    minorGridOpacity: 0.22,
    symbolOpacity: 0.125,
    starCount: 180,
    parallaxSpeed: 0.045,
    rippleStrength: 0.48,
    dashRippleStrength: 0.52,
    bombRippleStrength: 1.85,
    infiniteGridScale: 4.9,
    gridFadeStart: 0.42,
    gridFadeEnd: 0.96,
    gridFlowSpeed: 0.58,
    gridWaveAmplitude: 0.075,
    gridWaveFrequency: 0.105,
    gridWaveSpeed: 0.72,
    gridRgbWaveStrength: 0.42,
    gridRgbWaveScale: 0.073,
    gridRgbWaveSpeed: 0.36,
    gridRgbMotionFadeStart: 0.75,
    gridRgbMotionFadeEnd: 8,
    gridRgbMotionSmoothing: 9,
    gridRgbMovingStrength: 0.12,
    gridRgbMovingOriginInfluence: 0,
    motionGridOpacity: 0.34,
    motionGridLineWidth: 0.012,
    motionGridMajorLineWidth: 0.018,
    motionGridParallax: 0.34,
    motionGridRgbStrength: 0.24,
    energyPlaneOpacity: 0.025,
    energyPlaneMovingOpacity: 0.035
  },
  explosions: {
    enemyBurstParticles: 42,
    spectralBurstParticles: 56,
    bombBurstParticles: 190,
    shootRingRadius: 2.7,
    dashRingRadius: 4.1,
    bombRingScale: 1.35,
    scoreSparkleParticles: 18
  },
  ui: {
    panelGlow: 0.22,
    focusGlow: 0.42,
    hudOpacity: 0.52
  },
  shake: {
    shootImpulse: 0.025,
    dashImpulse: 0.16,
    bombImpulse: 0.62,
    damageImpulse: 0.52,
    killImpulse: 0.1
  }
} as const;
