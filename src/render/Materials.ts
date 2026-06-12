import * as THREE from 'three';
import type { EnemyTypeId } from '../data/enemyTypes';
import type { GameSettings } from '../data/tuning';
import { getPlayerSkin } from '../data/playerSkins';

const paletteEnemyColors: Record<GameSettings['palette'], Record<EnemyTypeId, number>> = {
  default: {
    chaser: 0xff3df2,
    dasher: 0xffc857,
    splitter: 0x7dff63,
    orbitMine: 0x39f5ff,
    swarm: 0xff4c7d
  },
  'high-contrast': {
    chaser: 0xff00ff,
    dasher: 0xffffff,
    splitter: 0xffff00,
    orbitMine: 0x00ffff,
    swarm: 0xff2a2a
  },
  colourblind: {
    chaser: 0xe69f00,
    dasher: 0xf0e442,
    splitter: 0x009e73,
    orbitMine: 0x56b4e9,
    swarm: 0xd55e00
  }
};

export function enemyColor(type: EnemyTypeId, settings: GameSettings): number {
  return paletteEnemyColors[settings.palette][type];
}

export function playerColor(settings: GameSettings): number {
  const skin = getPlayerSkin(settings.selectedSkin);
  if (settings.palette === 'default') return skin.secondaryColor;
  if (settings.palette === 'high-contrast') return 0xffffff;
  if (settings.palette === 'colourblind') return 0x56b4e9;
  return skin.secondaryColor;
}

export function createNeonLineMaterial(color: number, opacity = 1): THREE.LineBasicMaterial {
  return new THREE.LineBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
}

export function createNeonFillMaterial(color: number, opacity = 0.28): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide
  });
}

export function ensureVisibleNeonColor(color: number, fallback = 0xffffff): number {
  if (colorLuminance(color) >= 0.16) return color;
  return mixHexColor(color, fallback, 0.58);
}

export function setObjectColor(object: THREE.Object3D, color: number): void {
  object.traverse((child) => {
    const material = (child as THREE.Mesh | THREE.Line).material;
    if (!material) return;
    const materials = Array.isArray(material) ? material : [material];
    for (const item of materials) {
      if ('color' in item && item.color instanceof THREE.Color) {
        item.color.setHex(color);
      }
    }
  });
}

function mixHexColor(a: number, b: number, amount: number): number {
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
