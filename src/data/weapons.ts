import { skinReadableAccentColor, type PlayerSkin } from './playerSkins';

export type WeaponId = 'vectorBolt' | 'scatterCrown' | 'lanceBeam';
export type WeaponKind = 'projectile' | 'beam';

export interface WeaponDefinition {
  id: WeaponId;
  label: string;
  shortLabel: string;
  kind: WeaponKind;
  fireInterval: number;
  color: number;
  projectile?: {
    pelletCount: number;
    spreadRadians: number;
    speed: number;
    life: number;
    damage: number;
    radius: number;
    magnetRadius: number;
    magnetStrength: number;
  };
  beam?: {
    range: number;
    width: number;
    damage: number;
    visualLife: number;
  };
}

export const WEAPON_ORDER: readonly WeaponId[] = ['vectorBolt', 'scatterCrown', 'lanceBeam'];

export const WEAPONS: Record<WeaponId, WeaponDefinition> = {
  vectorBolt: {
    id: 'vectorBolt',
    label: 'Vector Bolt',
    shortLabel: 'BOLT',
    kind: 'projectile',
    fireInterval: 0.075,
    color: 0x39f5ff,
    projectile: {
      pelletCount: 1,
      spreadRadians: 0,
      speed: 38,
      life: 1.62,
      damage: 1,
      radius: 0.5,
      magnetRadius: 8.8,
      magnetStrength: 3.6
    }
  },
  scatterCrown: {
    id: 'scatterCrown',
    label: 'Scatter Crown',
    shortLabel: 'SHOTGUN',
    kind: 'projectile',
    fireInterval: 0.34,
    color: 0xffc857,
    projectile: {
      pelletCount: 7,
      spreadRadians: 0.58,
      speed: 32,
      life: 0.72,
      damage: 1,
      radius: 0.46,
      magnetRadius: 5.8,
      magnetStrength: 2.2
    }
  },
  lanceBeam: {
    id: 'lanceBeam',
    label: 'Lance Beam',
    shortLabel: 'BEAM',
    kind: 'beam',
    fireInterval: 0.16,
    color: 0x7dff63,
    beam: {
      range: 42,
      width: 0.9,
      damage: 1,
      visualLife: 0.28
    }
  }
};

export function nextWeaponId(current: WeaponId, direction: number): WeaponId {
  const index = Math.max(0, WEAPON_ORDER.indexOf(current));
  return WEAPON_ORDER[(index + direction + WEAPON_ORDER.length) % WEAPON_ORDER.length];
}

export function weaponColorForSkin(weaponId: WeaponId, skin: PlayerSkin): number {
  const readableAccent = skinReadableAccentColor(skin);

  switch (weaponId) {
    case 'scatterCrown':
      return mixColor(skin.secondaryColor, readableAccent, 0.36);
    case 'lanceBeam':
      return colorLuminance(skin.primaryColor) < 0.24
        ? mixColor(readableAccent, skin.secondaryColor, 0.28)
        : skin.primaryColor;
    case 'vectorBolt':
    default:
      return readableAccent;
  }
}

function mixColor(a: number, b: number, amount: number): number {
  const t = Math.max(0, Math.min(1, amount));
  const ar = (a >> 16) & 255;
  const ag = (a >> 8) & 255;
  const ab = a & 255;
  const br = (b >> 16) & 255;
  const bg = (b >> 8) & 255;
  const bb = b & 255;

  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const blue = Math.round(ab + (bb - ab) * t);
  return (r << 16) | (g << 8) | blue;
}

function colorLuminance(color: number): number {
  const r = ((color >> 16) & 255) / 255;
  const g = ((color >> 8) & 255) / 255;
  const b = (color & 255) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
