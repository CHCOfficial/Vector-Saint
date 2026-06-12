import { ENEMY_TYPES } from '../data/enemyTypes';
import { PLAYER_TUNING, SCORE_TUNING, type GameSettings } from '../data/tuning';
import type { WeaponDefinition } from '../data/weapons';
import { distanceSq, fromAngle, pointSegmentDistanceSq, setVec2, vec2 } from '../utils/math';
import { Random } from '../utils/random';
import type { GameEventSink } from './GameEvents';
import type { Enemy } from './Enemy';
import type { EntityManager } from './EntityManager';
import type { Player } from './Player';
import type { RelicSystem } from './RelicSystem';
import type { ScoreSystem } from './ScoreSystem';
import type { SkinAbilitySystem } from './SkinAbilitySystem';

const beamStart = vec2();
const beamEnd = vec2();

export class CollisionSystem {
  update(
    manager: EntityManager,
    player: Player,
    score: ScoreSystem,
    emit: GameEventSink,
    random: Random,
    settings: GameSettings,
    abilities?: SkinAbilitySystem,
    relics?: RelicSystem
  ): void {
    this.checkBullets(manager, score, emit, random, abilities, relics);
    this.checkPlayerEnemyContact(manager, player, emit, settings, abilities);
    this.checkPickups(manager, player, score, emit);
  }

  applyBomb(
    manager: EntityManager,
    player: Player,
    score: ScoreSystem,
    emit: GameEventSink,
    random: Random,
    settings: GameSettings,
    relics?: RelicSystem
  ): number {
    const radius =
      settings.difficultyAssist === 'forgiving'
        ? PLAYER_TUNING.forgivingBombRadius
        : PLAYER_TUNING.bombRadius;
    let kills = 0;

    emit({ type: 'bomb', x: player.position.x, y: player.position.y, radius });
    score.applyBombPenalty();

    manager.enemies.forEachActive((enemy) => {
      const killDistance = radius + enemy.radius;
      if (distanceSq(player.position, enemy.position) <= killDistance * killDistance) {
        this.destroyEnemy(manager, enemy, score, emit, random, true, relics);
        kills += 1;
      }
    });

    return kills;
  }

  applyBeam(
    manager: EntityManager,
    x: number,
    y: number,
    aimX: number,
    aimY: number,
    weapon: WeaponDefinition,
    score: ScoreSystem,
    emit: GameEventSink,
    random: Random,
    color: number = weapon.color,
    relics?: RelicSystem
  ): number {
    const beam = weapon.beam;
    if (!beam) return 0;

    let hits = 0;
    setVec2(beamStart, x, y);
    setVec2(beamEnd, x + aimX * beam.range, y + aimY * beam.range);

    emit({
      type: 'beamFired',
      x,
      y,
      aimX,
      aimY,
      range: beam.range,
      width: beam.width,
      visualLife: beam.visualLife,
      color,
      weaponId: weapon.id
    });

    manager.enemies.forEachActive((enemy) => {
      if (!enemy.active) return;
      const hitDistance = beam.width + enemy.radius;
      if (pointSegmentDistanceSq(enemy.position, beamStart, beamEnd) > hitDistance * hitDistance) return;

      hits += 1;
      const killed = enemy.damage(relics?.modifyBeamDamage(beam.damage) ?? beam.damage);
      if (killed) {
        this.destroyEnemy(manager, enemy, score, emit, random, false, relics);
      }
    });

    return hits;
  }

  private checkBullets(
    manager: EntityManager,
    score: ScoreSystem,
    emit: GameEventSink,
    random: Random,
    abilities?: SkinAbilitySystem,
    relics?: RelicSystem
  ): void {
    manager.bullets.forEachActive((bullet) => {
      if (!bullet.active) return;

      manager.enemies.forEachActive((enemy) => {
        if (!bullet.active || !enemy.active) return;
        if (bullet.hitEnemyIds.has(enemy.id)) return;

        const radius = bullet.radius + enemy.radius;
        if (distanceSq(bullet.position, enemy.position) > radius * radius) return;

        bullet.hitEnemyIds.add(enemy.id);
        const killed = enemy.damage(bullet.damageAmount);
        abilities?.onBulletHit(manager, bullet, enemy, score, emit, random);
        if (killed) {
          this.destroyEnemy(manager, enemy, score, emit, random, false, relics);
        }
        if (bullet.pierceRemaining > 0) {
          bullet.pierceRemaining -= 1;
          if (bullet.pierceRemaining <= 0) {
            bullet.active = false;
          }
        } else {
          bullet.active = false;
        }
      });
    });
  }

  private checkPlayerEnemyContact(
    manager: EntityManager,
    player: Player,
    emit: GameEventSink,
    settings: GameSettings,
    abilities?: SkinAbilitySystem
  ): void {
    manager.enemies.forEachActive((enemy) => {
      if (!enemy.active || player.invulnerableTimer > 0) return;

      const radius = player.radius + enemy.radius;
      if (distanceSq(player.position, enemy.position) <= radius * radius) {
        enemy.active = false;
        if (player.absorbSignatureShield()) {
          abilities?.onPlayerShieldAbsorbed();
          emit({
            type: 'skinAbility',
            ability: 'glassShieldBreak',
            skinId: settings.selectedSkin,
            x: player.position.x,
            y: player.position.y,
            radius: 5,
            color: 0xe8fdff
          });
        } else if (player.takeHit(settings.difficultyAssist)) {
          emit({ type: 'playerHit', x: player.position.x, y: player.position.y });
        }
        return;
      }

      const beams = enemy.definition.beams;
      if (!beams) return;

      for (let i = 0; i < 2; i += 1) {
        const angle = enemy.beamAngle + i * Math.PI;
        setVec2(beamStart, enemy.position.x, enemy.position.y);
        fromAngle(beamEnd, angle, beams.length);
        beamEnd.x += enemy.position.x;
        beamEnd.y += enemy.position.y;
        const hitDistance = beams.width + player.radius * 0.55;
        if (pointSegmentDistanceSq(player.position, beamStart, beamEnd) <= hitDistance * hitDistance) {
          if (player.absorbSignatureShield()) {
            abilities?.onPlayerShieldAbsorbed();
            emit({
              type: 'skinAbility',
              ability: 'glassShieldBreak',
              skinId: settings.selectedSkin,
              x: player.position.x,
              y: player.position.y,
              radius: 5,
              color: 0xe8fdff
            });
          } else if (player.takeHit(settings.difficultyAssist)) {
            emit({ type: 'playerHit', x: player.position.x, y: player.position.y });
          }
          return;
        }
      }
    });
  }

  private checkPickups(
    manager: EntityManager,
    player: Player,
    score: ScoreSystem,
    emit: GameEventSink
  ): void {
    manager.pickups.forEachActive((pickup) => {
      const radius = player.radius + pickup.radius;
      if (distanceSq(player.position, pickup.position) > radius * radius) return;

      pickup.active = false;
      score.awardPickup(pickup.value);
      emit({
        type: 'pickupCollected',
        x: pickup.position.x,
        y: pickup.position.y,
        color: pickup.color
      });
    });
  }

  private destroyEnemy(
    manager: EntityManager,
    enemy: Enemy,
    score: ScoreSystem,
    emit: GameEventSink,
    random: Random,
    bombSource: boolean,
    relics?: RelicSystem
  ): void {
    if (!enemy.active && enemy.health > 0) return;

    enemy.active = false;
    const zoneMultiplier = relics?.scoreMultiplierAt(enemy.position.x, enemy.position.y) ?? 1;
    const scoreAwarded = score.awardEnemy(enemy, bombSource ? 'bomb' : 'weapon', zoneMultiplier);
    if (zoneMultiplier > 1) {
      relics?.recordScoringZoneKill(enemy.position.x, enemy.position.y, emit);
    }
    emit({
      type: 'enemyKilled',
      x: enemy.position.x,
      y: enemy.position.y,
      color: enemy.color,
      enemyType: enemy.typeId,
      scoreAwarded,
      source: bombSource ? 'bomb' : 'weapon'
    });

    if (!bombSource && random.chance(0.08)) {
      manager.spawnPickup(enemy.position.x, enemy.position.y, random);
    }

    const split = enemy.definition.splitOnDeath;
    if (split && !bombSource) {
      for (let i = 0; i < split.count; i += 1) {
        const child = manager.spawnEnemy(
          split.type,
          enemy.position.x + random.range(-1.2, 1.2),
          enemy.position.y + random.range(-1.2, 1.2),
          Math.max(0, enemy.difficultyScale - 1),
          random
        );
        if (child) {
          const angle = (i / split.count) * Math.PI * 2 + random.range(-0.25, 0.25);
          fromAngle(child.velocity, angle, ENEMY_TYPES[split.type].speed * 0.9);
        }
      }
    }

    if (score.multiplier > SCORE_TUNING.multiplierMax) {
      score.multiplier = SCORE_TUNING.multiplierMax;
    }
  }
}
