import { describe, expect, it } from 'vitest';
import { SKIN_ABILITY_TUNING } from '../src/data/skinAbilities';
import { DEFAULT_SETTINGS } from '../src/data/tuning';
import { WEAPONS } from '../src/data/weapons';
import { EntityManager } from '../src/game/EntityManager';
import type { GameEvent } from '../src/game/GameEvents';
import { Player } from '../src/game/Player';
import { ScoreSystem } from '../src/game/ScoreSystem';
import { SkinAbilitySystem } from '../src/game/SkinAbilitySystem';
import { Random } from '../src/utils/random';

describe('SkinAbilitySystem', () => {
  it('primes one Solar Warden piercing shot per hit-streak milestone', () => {
    const abilities = new SkinAbilitySystem();
    const score = new ScoreSystem();
    abilities.reset('solarWarden');
    score.weaponKillStreak = SKIN_ABILITY_TUNING.solar.hitInterval;
    score.timeSinceKill = 0;

    const first = abilities.decorateProjectileOptions(WEAPONS.vectorBolt, {}, score);
    const second = abilities.decorateProjectileOptions(WEAPONS.vectorBolt, {}, score);

    expect(first.signature).toBe('solarPierce');
    expect(first.pierceRemaining).toBe(SKIN_ABILITY_TUNING.solar.pierceCount);
    expect(second.signature).toBeUndefined();
  });

  it('recharges and consumes the Glass Seraph shield cleanly', () => {
    const abilities = new SkinAbilitySystem();
    const manager = new EntityManager();
    const player = new Player();
    const random = new Random(3);
    const events: GameEvent[] = [];

    player.reset('normal');
    abilities.reset('glassSeraph');

    for (let i = 0; i < 4; i += 1) {
      manager.spawnEnemy('swarm', 2.7 + i * 0.05, 0.1 * i, 0, random);
    }

    abilities.updateNearMisses(
      manager,
      player,
      { ...DEFAULT_SETTINGS, selectedSkin: 'glassSeraph' },
      random,
      (event) => events.push(event)
    );

    expect(player.temporaryShieldHits).toBe(1);
    expect(events.some((event) => event.type === 'skinAbility' && event.ability === 'glassShieldReady')).toBe(true);
    expect(player.absorbSignatureShield()).toBe(true);
    abilities.onPlayerShieldAbsorbed();
    abilities.preparePlayer(player, 1 / 60);

    expect(player.temporaryShieldHits).toBe(0);
    expect(player.signatureReady).toBe(false);
    expect(player.signatureChargeRatio).toBeLessThan(0.01);
  });

  it('applies Redline Martyr speed boost only when health is low', () => {
    const abilities = new SkinAbilitySystem();
    const player = new Player();
    player.reset('normal');
    abilities.reset('redlineMartyr');

    abilities.preparePlayer(player, 1 / 60);
    expect(player.speedMultiplier).toBe(1);
    expect(player.redlineSurgeActive).toBe(false);

    player.health = 1;
    abilities.preparePlayer(player, 1 / 60);

    expect(player.speedMultiplier).toBeGreaterThan(1);
    expect(player.redlineSurgeActive).toBe(true);
  });
});
