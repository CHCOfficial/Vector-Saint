import { describe, expect, it } from 'vitest';
import { RELIC_TUNING } from '../src/data/relics';
import { EntityManager } from '../src/game/EntityManager';
import type { GameEvent } from '../src/game/GameEvents';
import { Player } from '../src/game/Player';
import { RelicSystem } from '../src/game/RelicSystem';
import { ScoreSystem } from '../src/game/ScoreSystem';
import { Random } from '../src/utils/random';

describe('RelicSystem', () => {
  it('offers the first relic draft on wave 3 and then every three waves', () => {
    const relics = new RelicSystem();

    expect(relics.shouldOfferDraft(2)).toBe(false);
    expect(relics.shouldOfferDraft(3)).toBe(true);
    relics.createDraft(3, new Random(5));
    expect(relics.shouldOfferDraft(3)).toBe(false);
    expect(relics.shouldOfferDraft(4)).toBe(false);
    expect(relics.shouldOfferDraft(6)).toBe(true);
  });

  it('creates a three-card draft with safe, risky, and score choices', () => {
    const relics = new RelicSystem();
    const draft = relics.createDraft(4, new Random(12));

    expect(draft).toHaveLength(3);
    expect(draft.map((relic) => relic.category).sort()).toEqual(['risky', 'safe', 'score']);
  });

  it('applies Martyr Circuit damage and dash recharge tradeoff', () => {
    const relics = new RelicSystem();
    const player = new Player();
    const score = new ScoreSystem();

    player.reset('normal');
    relics.activate('martyrCircuit', player, score);
    relics.preparePlayer(player);

    expect(relics.modifyProjectileOptions({ damage: 1 }).damage).toBeCloseTo(1.2);
    expect(relics.modifyBeamDamage(1)).toBeCloseTo(1.2);
    expect(player.dashCooldownMultiplier).toBeGreaterThan(1);
  });

  it('grants Glass Heart shield and faster multiplier decay', () => {
    const relics = new RelicSystem();
    const player = new Player();
    const score = new ScoreSystem();

    player.reset('normal');
    relics.activate('glassHeart', player, score);

    expect(player.temporaryShieldHits).toBe(1);
    expect(score.multiplierDecayMultiplier).toBe(RELIC_TUNING.glassHeart.multiplierDecayMultiplier);
  });

  it('creates Solar Core scoring zones that award Overdrive charge', () => {
    const relics = new RelicSystem();
    const player = new Player();
    const score = new ScoreSystem();
    const events: GameEvent[] = [];

    player.reset('normal');
    relics.activate('solarCore', player, score);
    relics.onBomb(player, (event) => events.push(event));

    expect(events.some((event) => event.type === 'relicZone')).toBe(true);
    expect(relics.scoreMultiplierAt(player.position.x, player.position.y)).toBeGreaterThan(1);

    relics.recordScoringZoneKill(player.position.x, player.position.y, (event) => events.push(event));

    expect(relics.overdriveCharge).toBeGreaterThan(0);
    expect(events.some((event) => event.type === 'relicBonus')).toBe(true);
  });

  it('spawns Prism Echo dash shots with a cooldown', () => {
    const relics = new RelicSystem();
    const player = new Player();
    const score = new ScoreSystem();
    const manager = new EntityManager();

    player.reset('normal');
    relics.activate('prismEcho', player, score);
    relics.onDash(player, manager, () => undefined);
    relics.onDash(player, manager, () => undefined);

    expect(manager.activeBulletCount).toBe(RELIC_TUNING.prismEcho.shotCount);

    relics.update(RELIC_TUNING.prismEcho.cooldown);
    relics.onDash(player, manager, () => undefined);

    expect(manager.activeBulletCount).toBe(RELIC_TUNING.prismEcho.shotCount * 2);
  });
});
