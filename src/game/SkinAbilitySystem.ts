import { SKIN_ABILITY_TUNING, SKIN_ABILITIES } from '../data/skinAbilities';
import type { PlayerSkinId } from '../data/playerSkins';
import type { GameSettings } from '../data/tuning';
import type { WeaponDefinition } from '../data/weapons';
import { distanceSq } from '../utils/math';
import type { Random } from '../utils/random';
import type { Bullet, BulletSpawnOptions } from './Bullet';
import type { Enemy } from './Enemy';
import type { EntityManager } from './EntityManager';
import type { GameEvent, GameEventSink } from './GameEvents';
import type { Player } from './Player';
import type { ScoreSystem } from './ScoreSystem';

interface SlowField {
  x: number;
  y: number;
  age: number;
  life: number;
  radius: number;
}

interface HudState {
  label: string;
  ratio: number;
  ready: boolean;
}

export class SkinAbilitySystem {
  private skinId: PlayerSkinId = 'vectorSaint';
  private readonly slowFields: SlowField[] = [];
  private readonly nearMissCooldowns = new Map<number, number>();
  private solarHitCounter = 0;
  private solarHeat = 0;
  private solarPierceReady = 0;
  private solarKillStreakMilestone = 0;
  private prismCooldown = 0;
  private ionCooldown = 0;
  private revenantCooldown = 0;
  private glassCharge = 0;

  reset(skinId: PlayerSkinId): void {
    this.skinId = skinId;
    this.slowFields.length = 0;
    this.nearMissCooldowns.clear();
    this.solarHitCounter = 0;
    this.solarHeat = 0;
    this.solarPierceReady = 0;
    this.solarKillStreakMilestone = 0;
    this.prismCooldown = 0;
    this.ionCooldown = 0;
    this.revenantCooldown = 0;
    this.glassCharge = 0;
  }

  setSkin(skinId: PlayerSkinId, player?: Player): void {
    if (this.skinId === skinId) return;
    this.reset(skinId);
    if (player) this.applyPlayerHudState(player);
  }

  preparePlayer(player: Player, dt: number): void {
    this.prismCooldown = Math.max(0, this.prismCooldown - dt);
    this.ionCooldown = Math.max(0, this.ionCooldown - dt);
    this.revenantCooldown = Math.max(0, this.revenantCooldown - dt);
    this.solarHeat = Math.max(0, this.solarHeat - dt * 0.05);
    this.decayNearMissCooldowns(dt);

    player.speedMultiplier = 1;
    player.redlineSurgeActive = false;

    if (this.skinId === 'glassSeraph' && player.temporaryShieldHits <= 0) {
      this.glassCharge = Math.max(
        0,
        this.glassCharge - SKIN_ABILITY_TUNING.glass.chargeDecayPerSecond * dt
      );
    }

    if (this.skinId === 'redlineMartyr') {
      const healthRatio = player.healthRatio;
      if (healthRatio <= SKIN_ABILITY_TUNING.redline.healthThreshold) {
        const t =
          1 -
          Math.max(
            0,
            (healthRatio - SKIN_ABILITY_TUNING.redline.criticalHealthRatio) /
              (SKIN_ABILITY_TUNING.redline.healthThreshold - SKIN_ABILITY_TUNING.redline.criticalHealthRatio)
          );
        player.speedMultiplier = 1 + SKIN_ABILITY_TUNING.redline.maxBoost * Math.min(1, Math.max(0, t));
        player.redlineSurgeActive = true;
      }
    }

    this.applyPlayerHudState(player);
  }

  applyEnemyModifiers(manager: EntityManager, settings: GameSettings, dt: number): void {
    for (const field of this.slowFields) {
      field.age += dt;
    }

    for (let i = this.slowFields.length - 1; i >= 0; i -= 1) {
      if (this.slowFields[i].age >= this.slowFields[i].life) {
        this.slowFields.splice(i, 1);
      }
    }

    if (this.slowFields.length === 0) return;

    manager.enemies.forEachActive((enemy) => {
      for (const field of this.slowFields) {
        const radius = field.radius * (settings.difficultyAssist === 'forgiving' ? 1.08 : 1);
        if (distanceSq(enemy.position, field) > radius * radius) continue;
        enemy.applySpeedMultiplier(this.slowMultiplierFor(enemy));
      }
    });
  }

  updateNearMisses(
    manager: EntityManager,
    player: Player,
    settings: GameSettings,
    random: Random,
    emit: GameEventSink
  ): void {
    if (this.skinId !== 'glassSeraph' && this.skinId !== 'prismGhost') return;

    manager.enemies.forEachActive((enemy) => {
      const cooldown = this.nearMissCooldowns.get(enemy.id) ?? 0;
      if (cooldown > 0) return;

      const dx = enemy.position.x - player.position.x;
      const dy = enemy.position.y - player.position.y;
      const distSq = dx * dx + dy * dy;
      const contact = enemy.radius + player.radius;
      const inner = contact + 0.22;
      const outer =
        this.skinId === 'glassSeraph'
          ? SKIN_ABILITY_TUNING.glass.nearMissRadius
          : SKIN_ABILITY_TUNING.prism.nearMissRadius;
      if (distSq <= inner * inner || distSq >= outer * outer) return;

      this.nearMissCooldowns.set(
        enemy.id,
        this.skinId === 'glassSeraph'
          ? SKIN_ABILITY_TUNING.glass.repeatCooldown
          : SKIN_ABILITY_TUNING.prism.cooldown
      );

      if (this.skinId === 'glassSeraph') {
        this.chargeGlassShield(player, emit);
      } else {
        this.spawnPrismGhostBurst(manager, player, enemy, settings, random, emit);
      }
    });
  }

  onDash(player: Player, settings: GameSettings, emit: GameEventSink): void {
    if (this.skinId !== 'voidChoir') return;

    const radius =
      SKIN_ABILITY_TUNING.void.radius *
      (settings.difficultyAssist === 'forgiving' ? SKIN_ABILITY_TUNING.void.forgivingRadiusScale : 1);
    this.slowFields.push({
      x: player.position.x,
      y: player.position.y,
      age: 0,
      life: SKIN_ABILITY_TUNING.void.fieldLife,
      radius
    });
    emit({
      type: 'skinAbility',
      ability: 'voidSlowField',
      skinId: this.skinId,
      x: player.position.x,
      y: player.position.y,
      radius,
      color: SKIN_ABILITY_TUNING.void.color
    });
  }

  onPlayerShieldAbsorbed(): void {
    if (this.skinId === 'glassSeraph') {
      this.glassCharge = 0;
    }
  }

  decorateProjectileOptions(
    weapon: WeaponDefinition,
    baseOptions: Partial<BulletSpawnOptions>,
    score: ScoreSystem
  ): Partial<BulletSpawnOptions> {
    if (this.skinId === 'solarWarden') {
      const heatRatio = Math.min(1, Math.max(0, this.solarHeat / SKIN_ABILITY_TUNING.solar.maxHeat));
      const heatedRadius = (baseOptions.radius ?? 0.5) * (1 + heatRatio * 0.08);
      const heatedSpeed = (baseOptions.speed ?? 1) * (1 + heatRatio * 0.04);
      const heatedColor = heatRatio > 0.2 ? SKIN_ABILITY_TUNING.solar.pierceColor : baseOptions.color;
      if (score.timeSinceKill > SKIN_ABILITY_TUNING.solar.killStreakWindow) {
        this.solarKillStreakMilestone = 0;
      }

      const streakMilestone = Math.floor(score.weaponKillStreak / SKIN_ABILITY_TUNING.solar.hitInterval);
      if (
        score.timeSinceKill <= SKIN_ABILITY_TUNING.solar.killStreakWindow &&
        streakMilestone > this.solarKillStreakMilestone
      ) {
        this.solarKillStreakMilestone = streakMilestone;
        this.solarPierceReady += 1;
      }

      if (this.solarPierceReady > 0) {
        this.solarPierceReady = Math.max(0, this.solarPierceReady - 1);
        return {
          ...baseOptions,
          radius: heatedRadius * SKIN_ABILITY_TUNING.solar.pierceRadiusScale,
          speed: heatedSpeed * SKIN_ABILITY_TUNING.solar.pierceSpeedScale,
          color: SKIN_ABILITY_TUNING.solar.pierceColor,
          pierceRemaining: SKIN_ABILITY_TUNING.solar.pierceCount,
          signature: 'solarPierce',
          sourceSkinId: this.skinId
        };
      }

      return {
        ...baseOptions,
        radius: heatedRadius,
        speed: heatedSpeed,
        color: heatedColor,
        sourceSkinId: this.skinId
      };
    }

    return {
      ...baseOptions,
      sourceSkinId: this.skinId
    };
  }

  onBulletHit(
    manager: EntityManager,
    bullet: Bullet,
    enemy: Enemy,
    score: ScoreSystem,
    emit: GameEventSink,
    random: Random
  ): void {
    if (bullet.sourceSkinId === 'solarWarden') {
      this.solarHitCounter += 1;
      if (this.solarHitCounter >= SKIN_ABILITY_TUNING.solar.hitInterval) {
        this.solarHitCounter = 0;
        this.solarPierceReady += 1;
      }
    }

    if (bullet.sourceSkinId === 'ionChapel') {
      this.tryIonChain(manager, enemy, score, emit, random);
    }
  }

  onEnemyKilled(
    event: Extract<GameEvent, { type: 'enemyKilled' }>,
    manager: EntityManager,
    random: Random,
    emit: GameEventSink
  ): void {
    if (event.source !== 'weapon') return;

    if (this.skinId === 'solarWarden') {
      this.solarHeat = Math.min(
        SKIN_ABILITY_TUNING.solar.maxHeat,
        this.solarHeat + SKIN_ABILITY_TUNING.solar.heatPerKill
      );
      return;
    }

    if (this.skinId === 'neonRevenant') {
      this.trySpawnRevenantSpark(event.x, event.y, manager, random, emit);
    }
  }

  getHudState(): HudState {
    const ability = SKIN_ABILITIES[this.skinId];
    if (this.skinId === 'solarWarden') {
      return {
        label: this.solarPierceReady > 0 ? 'SOLAR READY' : 'SOLAR',
        ratio: this.solarPierceReady > 0 ? 1 : this.solarHitCounter / SKIN_ABILITY_TUNING.solar.hitInterval,
        ready: this.solarPierceReady > 0
      };
    }
    if (this.skinId === 'glassSeraph') {
      return {
        label: 'SHIELD',
        ratio: this.glassCharge,
        ready: this.glassCharge >= 1
      };
    }
    if (this.skinId === 'prismGhost') {
      return {
        label: this.prismCooldown <= 0 ? 'GHOST READY' : 'GHOST',
        ratio: this.prismCooldown <= 0 ? 1 : 1 - this.prismCooldown / SKIN_ABILITY_TUNING.prism.cooldown,
        ready: this.prismCooldown <= 0
      };
    }
    if (this.skinId === 'voidChoir') {
      return { label: 'NULL WAKE', ratio: this.slowFields.length > 0 ? 1 : 0, ready: this.slowFields.length > 0 };
    }
    if (this.skinId === 'ionChapel') {
      return { label: ability.name.toUpperCase(), ratio: this.ionCooldown <= 0 ? 1 : 0.35, ready: this.ionCooldown <= 0 };
    }
    if (this.skinId === 'redlineMartyr') {
      return { label: 'DANGER LINE', ratio: 1, ready: false };
    }
    if (this.skinId === 'neonRevenant') {
      return { label: 'SPARK', ratio: this.revenantCooldown <= 0 ? 1 : 0.4, ready: this.revenantCooldown <= 0 };
    }
    return { label: ability.name.toUpperCase(), ratio: 0, ready: false };
  }

  private applyPlayerHudState(player: Player): void {
    const hud = this.getHudState();
    player.signatureChargeRatio = hud.ratio;
    player.signatureReady = hud.ready;
  }

  private chargeGlassShield(player: Player, emit: GameEventSink): void {
    this.glassCharge = Math.min(1, this.glassCharge + SKIN_ABILITY_TUNING.glass.chargePerNearMiss);
    if (this.glassCharge < 1 || player.temporaryShieldHits >= SKIN_ABILITY_TUNING.glass.maxShieldHits) return;

    player.temporaryShieldHits = SKIN_ABILITY_TUNING.glass.maxShieldHits;
    player.signaturePulse = 1;
    emit({
      type: 'skinAbility',
      ability: 'glassShieldReady',
      skinId: this.skinId,
      x: player.position.x,
      y: player.position.y,
      radius: 4,
      color: SKIN_ABILITY_TUNING.glass.color
    });
  }

  private spawnPrismGhostBurst(
    manager: EntityManager,
    player: Player,
    enemy: Enemy,
    settings: GameSettings,
    random: Random,
    emit: GameEventSink
  ): void {
    if (this.prismCooldown > 0) return;
    this.prismCooldown = SKIN_ABILITY_TUNING.prism.cooldown * (settings.difficultyAssist === 'forgiving' ? 0.82 : 1);
    const baseAngle = Math.atan2(enemy.position.y - player.position.y, enemy.position.x - player.position.x);
    const middle = (SKIN_ABILITY_TUNING.prism.burstCount - 1) * 0.5;
    for (let i = 0; i < SKIN_ABILITY_TUNING.prism.burstCount; i += 1) {
      const t = middle <= 0 ? 0 : (i - middle) / middle;
      const angle = baseAngle + t * SKIN_ABILITY_TUNING.prism.burstSpread * 0.5 + random.range(-0.05, 0.05);
      manager.spawnBullet(player.position.x, player.position.y, Math.cos(angle), Math.sin(angle), {
        speed: SKIN_ABILITY_TUNING.prism.speed,
        life: SKIN_ABILITY_TUNING.prism.life,
        damage: SKIN_ABILITY_TUNING.prism.damage,
        radius: SKIN_ABILITY_TUNING.prism.radius,
        color: SKIN_ABILITY_TUNING.prism.color,
        weaponId: 'vectorBolt',
        magnetRadius: 5,
        magnetStrength: 1.8,
        signature: 'ghostBurst',
        sourceSkinId: this.skinId
      });
    }
    emit({
      type: 'skinAbility',
      ability: 'prismGhostBurst',
      skinId: this.skinId,
      x: player.position.x,
      y: player.position.y,
      radius: 5,
      color: SKIN_ABILITY_TUNING.prism.color
    });
  }

  private tryIonChain(
    manager: EntityManager,
    sourceEnemy: Enemy,
    score: ScoreSystem,
    emit: GameEventSink,
    random: Random
  ): void {
    if (this.ionCooldown > 0 || score.multiplier < SKIN_ABILITY_TUNING.ion.multiplierThreshold) return;
    if (!random.chance(SKIN_ABILITY_TUNING.ion.chance)) return;

    const target = this.findNearestEnemy(manager, sourceEnemy.position.x, sourceEnemy.position.y, SKIN_ABILITY_TUNING.ion.range, sourceEnemy.id);
    if (!target) return;

    this.ionCooldown = SKIN_ABILITY_TUNING.ion.cooldown;
    if (target.health > SKIN_ABILITY_TUNING.ion.damage) {
      target.damage(SKIN_ABILITY_TUNING.ion.damage);
    }
    emit({
      type: 'skinAbility',
      ability: 'ionChain',
      skinId: this.skinId,
      x: sourceEnemy.position.x,
      y: sourceEnemy.position.y,
      x2: target.position.x,
      y2: target.position.y,
      color: SKIN_ABILITY_TUNING.ion.color
    });
  }

  private trySpawnRevenantSpark(
    x: number,
    y: number,
    manager: EntityManager,
    random: Random,
    emit: GameEventSink
  ): void {
    if (this.revenantCooldown > 0 || !random.chance(SKIN_ABILITY_TUNING.revenant.chance)) return;

    const target = this.findNearestEnemy(manager, x, y, SKIN_ABILITY_TUNING.revenant.searchRange);
    if (!target) return;

    const dx = target.position.x - x;
    const dy = target.position.y - y;
    const distance = Math.max(0.001, Math.hypot(dx, dy));
    this.revenantCooldown = SKIN_ABILITY_TUNING.revenant.cooldown;
    manager.spawnBullet(x, y, dx / distance, dy / distance, {
      speed: SKIN_ABILITY_TUNING.revenant.speed,
      life: SKIN_ABILITY_TUNING.revenant.life,
      damage: SKIN_ABILITY_TUNING.revenant.damage,
      radius: SKIN_ABILITY_TUNING.revenant.radius,
      color: SKIN_ABILITY_TUNING.revenant.color,
      weaponId: 'vectorBolt',
      magnetRadius: 8,
      magnetStrength: 3.2,
      signature: 'revenantSpark',
      sourceSkinId: this.skinId
    });
    emit({
      type: 'skinAbility',
      ability: 'revenantSpark',
      skinId: this.skinId,
      x,
      y,
      x2: target.position.x,
      y2: target.position.y,
      color: SKIN_ABILITY_TUNING.revenant.color
    });
  }

  private findNearestEnemy(
    manager: EntityManager,
    x: number,
    y: number,
    range: number,
    ignoredId?: number
  ): Enemy | undefined {
    let best: Enemy | undefined;
    let bestDistanceSq = range * range;
    manager.enemies.forEachActive((enemy) => {
      if (!enemy.active || enemy.id === ignoredId) return;
      const dx = enemy.position.x - x;
      const dy = enemy.position.y - y;
      const candidate = dx * dx + dy * dy;
      if (candidate >= bestDistanceSq) return;
      bestDistanceSq = candidate;
      best = enemy;
    });
    return best;
  }

  private slowMultiplierFor(enemy: Enemy): number {
    if (enemy.typeId === 'swarm') return SKIN_ABILITY_TUNING.void.smallEnemyMultiplier;
    if (enemy.typeId === 'orbitMine' || enemy.typeId === 'dasher') {
      return SKIN_ABILITY_TUNING.void.specialEnemyMultiplier;
    }
    return SKIN_ABILITY_TUNING.void.standardEnemyMultiplier;
  }

  private decayNearMissCooldowns(dt: number): void {
    for (const [id, cooldown] of this.nearMissCooldowns) {
      const next = cooldown - dt;
      if (next <= 0) this.nearMissCooldowns.delete(id);
      else this.nearMissCooldowns.set(id, next);
    }
  }
}
