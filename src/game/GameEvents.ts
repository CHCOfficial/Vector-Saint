import type { EnemyTypeId } from '../data/enemyTypes';
import type { PlayerSkinId } from '../data/playerSkins';
import type { WeaponId } from '../data/weapons';
import type { Achievement } from './AchievementSystem';

export type SkinAbilityVisualType =
  | 'solarPierce'
  | 'voidSlowField'
  | 'glassShieldReady'
  | 'glassShieldBreak'
  | 'prismGhostBurst'
  | 'ionChain'
  | 'revenantSpark';

export type GameEvent =
  | {
      type: 'shoot';
      x: number;
      y: number;
      aimX: number;
      aimY: number;
      weaponId: WeaponId;
      pelletCount: number;
      color: number;
    }
  | {
      type: 'beamFired';
      x: number;
      y: number;
      aimX: number;
      aimY: number;
      range: number;
      width: number;
      visualLife: number;
      color: number;
      weaponId: WeaponId;
    }
  | {
      type: 'enemyKilled';
      x: number;
      y: number;
      color: number;
      enemyType: EnemyTypeId;
      scoreAwarded: number;
      source: 'weapon' | 'bomb';
    }
  | {
      type: 'bomb';
      x: number;
      y: number;
      radius: number;
    }
  | {
      type: 'playerHit';
      x: number;
      y: number;
    }
  | {
      type: 'dash';
      x: number;
      y: number;
    }
  | {
      type: 'pickupCollected';
      x: number;
      y: number;
      color: number;
    }
  | {
      type: 'skinAbility';
      ability: SkinAbilityVisualType;
      skinId: PlayerSkinId;
      x: number;
      y: number;
      x2?: number;
      y2?: number;
      radius?: number;
      color: number;
    }
  | {
      type: 'relicZone';
      x: number;
      y: number;
      radius: number;
      life: number;
      color: number;
    }
  | {
      type: 'relicBonus';
      x: number;
      y: number;
      color: number;
      overdriveCharge: number;
    }
  | {
      type: 'achievementUnlocked';
      achievement: Achievement;
    };

export type GameEventSink = (event: GameEvent) => void;
