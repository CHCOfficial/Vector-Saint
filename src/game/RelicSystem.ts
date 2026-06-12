import {
  RELICS,
  RELIC_ORDER,
  RELIC_TUNING,
  getRelic,
  type RelicCategory,
  type RelicDefinition,
  type RelicId
} from '../data/relics';
import type { BulletSpawnOptions } from './Bullet';
import type { EntityManager } from './EntityManager';
import type { GameEventSink } from './GameEvents';
import type { Player } from './Player';
import type { ScoreSystem } from './ScoreSystem';
import type { Random } from '../utils/random';

export interface ActiveRelicSummary {
  id: RelicId;
  name: string;
  effect: string;
  downside?: string;
  stacks: number;
}

interface ScoringZone {
  x: number;
  y: number;
  age: number;
  life: number;
  radius: number;
  scoreMultiplier: number;
  color: number;
}

const DRAFT_CATEGORIES: readonly RelicCategory[] = ['safe', 'risky', 'score'];

export class RelicSystem {
  private readonly active = new Map<RelicId, number>();
  private readonly scoringZones: ScoringZone[] = [];
  private prismEchoCooldown = 0;
  private lastDraftWave = 1;
  overdriveCharge = 0;

  reset(): void {
    this.active.clear();
    this.scoringZones.length = 0;
    this.prismEchoCooldown = 0;
    this.lastDraftWave = 1;
    this.overdriveCharge = 0;
  }

  update(dt: number): void {
    this.prismEchoCooldown = Math.max(0, this.prismEchoCooldown - dt);

    for (const zone of this.scoringZones) {
      zone.age += dt;
    }

    for (let i = this.scoringZones.length - 1; i >= 0; i -= 1) {
      if (this.scoringZones[i].age >= this.scoringZones[i].life) {
        this.scoringZones.splice(i, 1);
      }
    }
  }

  shouldOfferDraft(wave: number): boolean {
    if (wave <= 1 || wave === this.lastDraftWave) return false;
    if (wave % RELIC_TUNING.draftIntervalWaves !== 0) return false;
    return this.availableRelics().length > 0;
  }

  createDraft(wave: number, random: Random): RelicDefinition[] {
    this.lastDraftWave = wave;
    const selected = new Set<RelicId>();
    const choices: RelicDefinition[] = [];

    for (const category of DRAFT_CATEGORIES) {
      const relic = this.pickAvailable(category, selected, random) ?? this.pickAvailable(undefined, selected, random);
      if (!relic) continue;
      selected.add(relic.id);
      choices.push(relic);
    }

    return choices;
  }

  activate(id: RelicId, player: Player, score: ScoreSystem): void {
    const definition = getRelic(id);
    const current = this.active.get(id) ?? 0;
    if (current >= definition.maxStacks) return;

    this.active.set(id, current + 1);

    if (id === 'glassHeart') {
      player.temporaryShieldHits = Math.max(
        player.temporaryShieldHits,
        RELIC_TUNING.glassHeart.shieldHits
      );
      player.signaturePulse = 1;
    }

    this.applyScoreModifiers(score);
  }

  preparePlayer(player: Player): void {
    if (this.has('martyrCircuit')) {
      player.dashCooldownMultiplier *= RELIC_TUNING.martyrCircuit.dashCooldownMultiplier;
    }

    if (this.has('redlineEngine')) {
      player.speedMultiplier *= RELIC_TUNING.redlineEngine.speedMultiplier;
      player.accelerationMultiplier *= RELIC_TUNING.redlineEngine.accelerationMultiplier;
      player.frictionMultiplier *= RELIC_TUNING.redlineEngine.frictionMultiplier;
    }
  }

  applyScoreModifiers(score: ScoreSystem): void {
    score.multiplierDecayMultiplier = this.has('glassHeart')
      ? RELIC_TUNING.glassHeart.multiplierDecayMultiplier
      : 1;
  }

  modifyProjectileOptions(options: Partial<BulletSpawnOptions>): Partial<BulletSpawnOptions> {
    if (!this.has('martyrCircuit')) return options;

    return {
      ...options,
      damage: Math.max(0.1, (options.damage ?? 1) * RELIC_TUNING.martyrCircuit.damageMultiplier)
    };
  }

  modifyBeamDamage(damage: number): number {
    return this.has('martyrCircuit')
      ? Math.max(0.1, damage * RELIC_TUNING.martyrCircuit.damageMultiplier)
      : damage;
  }

  onBomb(player: Player, emit: GameEventSink): void {
    if (!this.has('solarCore')) return;

    const stacks = this.stackCount('solarCore');
    const zone: ScoringZone = {
      x: player.position.x,
      y: player.position.y,
      age: 0,
      life: RELIC_TUNING.solarCore.zoneLife,
      radius: RELIC_TUNING.solarCore.zoneRadius * (1 + (stacks - 1) * RELIC_TUNING.solarCore.radiusPerExtraStack),
      scoreMultiplier: RELIC_TUNING.solarCore.scoreMultiplier + (stacks - 1) * RELIC_TUNING.solarCore.scorePerExtraStack,
      color: RELIC_TUNING.solarCore.color
    };
    this.scoringZones.push(zone);
    emit({
      type: 'relicZone',
      x: zone.x,
      y: zone.y,
      radius: zone.radius,
      life: zone.life,
      color: zone.color
    });
  }

  scoreMultiplierAt(x: number, y: number): number {
    let multiplier = 1;
    for (const zone of this.scoringZones) {
      const dx = x - zone.x;
      const dy = y - zone.y;
      if (dx * dx + dy * dy <= zone.radius * zone.radius) {
        multiplier = Math.max(multiplier, zone.scoreMultiplier);
      }
    }
    return multiplier;
  }

  recordScoringZoneKill(x: number, y: number, emit: GameEventSink): void {
    for (const zone of this.scoringZones) {
      const dx = x - zone.x;
      const dy = y - zone.y;
      if (dx * dx + dy * dy > zone.radius * zone.radius) continue;

      this.overdriveCharge = Math.min(1, this.overdriveCharge + RELIC_TUNING.solarCore.overdrivePerKill);
      emit({
        type: 'relicBonus',
        x,
        y,
        color: zone.color,
        overdriveCharge: this.overdriveCharge
      });
      return;
    }
  }

  onDash(player: Player, manager: EntityManager, emit: GameEventSink): void {
    if (!this.has('prismEcho') || this.prismEchoCooldown > 0) return;

    this.prismEchoCooldown = RELIC_TUNING.prismEcho.cooldown;
    const baseAngle = Math.atan2(player.aim.y, player.aim.x);
    const middle = (RELIC_TUNING.prismEcho.shotCount - 1) * 0.5;

    for (let i = 0; i < RELIC_TUNING.prismEcho.shotCount; i += 1) {
      const t = middle <= 0 ? 0 : (i - middle) / middle;
      const angle = baseAngle + t * RELIC_TUNING.prismEcho.spreadRadians * 0.5;
      manager.spawnBullet(player.position.x, player.position.y, Math.cos(angle), Math.sin(angle), {
        speed: RELIC_TUNING.prismEcho.speed,
        life: RELIC_TUNING.prismEcho.life,
        damage: RELIC_TUNING.prismEcho.damage,
        radius: RELIC_TUNING.prismEcho.radius,
        color: RELIC_TUNING.prismEcho.color,
        weaponId: 'vectorBolt',
        magnetRadius: RELIC_TUNING.prismEcho.magnetRadius,
        magnetStrength: RELIC_TUNING.prismEcho.magnetStrength,
        signature: 'ghostBurst',
        sourceSkinId: 'prismGhost'
      });
    }

    emit({
      type: 'relicBonus',
      x: player.position.x,
      y: player.position.y,
      color: RELIC_TUNING.prismEcho.color,
      overdriveCharge: this.overdriveCharge
    });
  }

  activeSummaries(): ActiveRelicSummary[] {
    return Array.from(this.active.entries()).map(([id, stacks]) => {
      const relic = getRelic(id);
      return {
        id,
        name: relic.name,
        effect: relic.effect,
        downside: relic.downside,
        stacks
      };
    });
  }

  has(id: RelicId): boolean {
    return this.stackCount(id) > 0;
  }

  private stackCount(id: RelicId): number {
    return this.active.get(id) ?? 0;
  }

  private availableRelics(): RelicDefinition[] {
    return RELIC_ORDER
      .map((id) => RELICS[id])
      .filter((relic) => (this.active.get(relic.id) ?? 0) < relic.maxStacks);
  }

  private pickAvailable(
    category: RelicCategory | undefined,
    selected: Set<RelicId>,
    random: Random
  ): RelicDefinition | undefined {
    const candidates = this.availableRelics().filter((relic) => {
      if (selected.has(relic.id)) return false;
      return category ? relic.category === category : true;
    });
    if (candidates.length === 0) return undefined;
    return random.pick(candidates);
  }
}
