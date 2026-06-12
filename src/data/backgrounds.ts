export type BackgroundId =
  | 'neonCathedralGrid'
  | 'deepOceanSignal'
  | 'solarFurnace'
  | 'voidCircuit'
  | 'auroraGraveyard'
  | 'monolithBloom'
  | 'synthwaveHorizon'
  | 'livingArenaCore';

export type BackgroundPattern =
  | 'cathedral'
  | 'sonar'
  | 'furnace'
  | 'circuit'
  | 'aurora'
  | 'monolith'
  | 'horizon'
  | 'livingCore';

export interface BackgroundPalette {
  base: number;
  grid: number;
  primary: number;
  secondary: number;
  accent: number;
  star: number;
}

export interface BackgroundPreview {
  cssClass: string;
  primaryCss: string;
  secondaryCss: string;
  accentCss: string;
}

export interface BackgroundReactivity {
  movement: number;
  shooting: number;
  kills: number;
  bombs: number;
  dash: number;
  multiplier: number;
}

export interface BackgroundDefinition {
  id: BackgroundId;
  displayName: string;
  tagline: string;
  description: string;
  pattern: BackgroundPattern;
  mode: number;
  palette: BackgroundPalette;
  preview: BackgroundPreview;
  opacityScale: number;
  gridOpacityScale: number;
  motionGridScale: number;
  starOpacityScale: number;
  symbolOpacityScale: number;
  parallax: number;
  reactivity: BackgroundReactivity;
  unlockState: 'unlocked';
}

export const DEFAULT_BACKGROUND_ID: BackgroundId = 'neonCathedralGrid';

export const BACKGROUNDS: readonly BackgroundDefinition[] = [
  {
    id: 'neonCathedralGrid',
    displayName: 'Neon Cathedral Grid',
    tagline: 'sacred lattice',
    description: 'Cyan vaulted lines and calm circular glyphs that brighten on precision play.',
    pattern: 'cathedral',
    mode: 0,
    palette: {
      base: 0x030813,
      grid: 0x3bf5ff,
      primary: 0x67f8ff,
      secondary: 0xff4df4,
      accent: 0xffffff,
      star: 0xaeefff
    },
    preview: {
      cssClass: 'cathedral',
      primaryCss: '#67f8ff',
      secondaryCss: '#ff4df4',
      accentCss: '#ffffff'
    },
    opacityScale: 1,
    gridOpacityScale: 1,
    motionGridScale: 0.96,
    starOpacityScale: 0.94,
    symbolOpacityScale: 1,
    parallax: 0.072,
    reactivity: {
      movement: 0.62,
      shooting: 0.72,
      kills: 0.88,
      bombs: 1,
      dash: 0.8,
      multiplier: 0.7
    },
    unlockState: 'unlocked'
  },
  {
    id: 'deepOceanSignal',
    displayName: 'Deep Ocean Signal',
    tagline: 'sonar abyss',
    description: 'Dark teal sonar rings with soft bioluminescent pulses under the arena floor.',
    pattern: 'sonar',
    mode: 1,
    palette: {
      base: 0x020910,
      grid: 0x2ed7c6,
      primary: 0x25f0d2,
      secondary: 0x2877ff,
      accent: 0xaafff0,
      star: 0x62d8ff
    },
    preview: {
      cssClass: 'ocean',
      primaryCss: '#25f0d2',
      secondaryCss: '#2877ff',
      accentCss: '#aafff0'
    },
    opacityScale: 0.98,
    gridOpacityScale: 0.88,
    motionGridScale: 0.82,
    starOpacityScale: 0.82,
    symbolOpacityScale: 0.78,
    parallax: 0.052,
    reactivity: {
      movement: 0.5,
      shooting: 0.55,
      kills: 0.82,
      bombs: 1,
      dash: 0.7,
      multiplier: 0.58
    },
    unlockState: 'unlocked'
  },
  {
    id: 'solarFurnace',
    displayName: 'Solar Furnace',
    tagline: 'thermal bloom',
    description: 'Amber heat seams, restrained furnace flares, and kill-driven solar pressure waves.',
    pattern: 'furnace',
    mode: 2,
    palette: {
      base: 0x100405,
      grid: 0xffa43b,
      primary: 0xffd35a,
      secondary: 0xff3d7b,
      accent: 0xfff0a3,
      star: 0xffc857
    },
    preview: {
      cssClass: 'furnace',
      primaryCss: '#ffd35a',
      secondaryCss: '#ff3d7b',
      accentCss: '#fff0a3'
    },
    opacityScale: 1.04,
    gridOpacityScale: 0.94,
    motionGridScale: 0.76,
    starOpacityScale: 0.74,
    symbolOpacityScale: 0.66,
    parallax: 0.065,
    reactivity: {
      movement: 0.56,
      shooting: 0.92,
      kills: 0.98,
      bombs: 1.08,
      dash: 0.68,
      multiplier: 0.72
    },
    unlockState: 'unlocked'
  },
  {
    id: 'voidCircuit',
    displayName: 'Void Circuit',
    tagline: 'negative circuitry',
    description: 'Violet black circuit traces and glitchy pressure nodes that stay low behind combat.',
    pattern: 'circuit',
    mode: 3,
    palette: {
      base: 0x05030d,
      grid: 0x9d4dff,
      primary: 0xa85dff,
      secondary: 0xff3df2,
      accent: 0x2bffcc,
      star: 0xba8cff
    },
    preview: {
      cssClass: 'circuit',
      primaryCss: '#a85dff',
      secondaryCss: '#ff3df2',
      accentCss: '#2bffcc'
    },
    opacityScale: 0.95,
    gridOpacityScale: 0.82,
    motionGridScale: 0.68,
    starOpacityScale: 0.68,
    symbolOpacityScale: 0.62,
    parallax: 0.038,
    reactivity: {
      movement: 0.42,
      shooting: 0.58,
      kills: 0.76,
      bombs: 1,
      dash: 1,
      multiplier: 0.54
    },
    unlockState: 'unlocked'
  },
  {
    id: 'auroraGraveyard',
    displayName: 'Aurora Graveyard',
    tagline: 'spectral curtains',
    description: 'Green-magenta aurora sheets drifting over faint broken-vector memorial lines.',
    pattern: 'aurora',
    mode: 4,
    palette: {
      base: 0x030a0c,
      grid: 0x50ffb0,
      primary: 0x7dff63,
      secondary: 0xff7cf7,
      accent: 0xbffff5,
      star: 0x91ffd1
    },
    preview: {
      cssClass: 'aurora',
      primaryCss: '#7dff63',
      secondaryCss: '#ff7cf7',
      accentCss: '#bffff5'
    },
    opacityScale: 0.98,
    gridOpacityScale: 0.86,
    motionGridScale: 0.72,
    starOpacityScale: 0.84,
    symbolOpacityScale: 0.7,
    parallax: 0.046,
    reactivity: {
      movement: 0.48,
      shooting: 0.62,
      kills: 0.9,
      bombs: 0.9,
      dash: 0.72,
      multiplier: 0.82
    },
    unlockState: 'unlocked'
  },
  {
    id: 'monolithBloom',
    displayName: 'Monolith Bloom',
    tagline: 'black glass pillars',
    description: 'Clean vertical monolith shadows with white-cyan bloom gates and restrained pulses.',
    pattern: 'monolith',
    mode: 5,
    palette: {
      base: 0x04060b,
      grid: 0xd8f6ff,
      primary: 0xffffff,
      secondary: 0x6fb9ff,
      accent: 0x9ffcff,
      star: 0xf5fbff
    },
    preview: {
      cssClass: 'monolith',
      primaryCss: '#ffffff',
      secondaryCss: '#6fb9ff',
      accentCss: '#9ffcff'
    },
    opacityScale: 0.9,
    gridOpacityScale: 0.76,
    motionGridScale: 0.58,
    starOpacityScale: 0.72,
    symbolOpacityScale: 0.56,
    parallax: 0.026,
    reactivity: {
      movement: 0.34,
      shooting: 0.52,
      kills: 0.7,
      bombs: 0.84,
      dash: 0.56,
      multiplier: 0.6
    },
    unlockState: 'unlocked'
  },
  {
    id: 'synthwaveHorizon',
    displayName: 'Synthwave Horizon',
    tagline: 'endless vanishing lines',
    description: 'Low magenta horizon bands and cyan vectors that imply speed without arena walls.',
    pattern: 'horizon',
    mode: 6,
    palette: {
      base: 0x070313,
      grid: 0xff4df4,
      primary: 0xff4df4,
      secondary: 0x39f5ff,
      accent: 0xffd35a,
      star: 0xc48cff
    },
    preview: {
      cssClass: 'horizon',
      primaryCss: '#ff4df4',
      secondaryCss: '#39f5ff',
      accentCss: '#ffd35a'
    },
    opacityScale: 1.02,
    gridOpacityScale: 0.92,
    motionGridScale: 0.98,
    starOpacityScale: 0.76,
    symbolOpacityScale: 0.58,
    parallax: 0.082,
    reactivity: {
      movement: 0.74,
      shooting: 0.7,
      kills: 0.82,
      bombs: 0.94,
      dash: 0.96,
      multiplier: 0.76
    },
    unlockState: 'unlocked'
  },
  {
    id: 'livingArenaCore',
    displayName: 'Living Arena Core',
    tagline: 'reactive organism',
    description: 'Organic rings and cellular vector veins that breathe with multiplier and danger.',
    pattern: 'livingCore',
    mode: 7,
    palette: {
      base: 0x03070a,
      grid: 0x5cffdd,
      primary: 0x5cffdd,
      secondary: 0xbaff57,
      accent: 0xff4c7d,
      star: 0x9ffcff
    },
    preview: {
      cssClass: 'living',
      primaryCss: '#5cffdd',
      secondaryCss: '#baff57',
      accentCss: '#ff4c7d'
    },
    opacityScale: 1,
    gridOpacityScale: 0.88,
    motionGridScale: 0.78,
    starOpacityScale: 0.78,
    symbolOpacityScale: 0.82,
    parallax: 0.058,
    reactivity: {
      movement: 0.54,
      shooting: 0.68,
      kills: 0.94,
      bombs: 1,
      dash: 0.8,
      multiplier: 0.92
    },
    unlockState: 'unlocked'
  }
];

const BACKGROUND_BY_ID = new Map<BackgroundId, BackgroundDefinition>(
  BACKGROUNDS.map((background) => [background.id, background])
);

export function getBackground(id: BackgroundId): BackgroundDefinition {
  return BACKGROUND_BY_ID.get(id) ?? BACKGROUND_BY_ID.get(DEFAULT_BACKGROUND_ID)!;
}

export function isBackgroundId(value: unknown): value is BackgroundId {
  return typeof value === 'string' && BACKGROUND_BY_ID.has(value as BackgroundId);
}

export function backgroundColorToCss(color: number): string {
  return `#${color.toString(16).padStart(6, '0')}`;
}
