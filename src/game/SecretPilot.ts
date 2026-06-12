import { PLAYER_TUNING, SECRET_PILOT_TUNING } from '../data/tuning';
import { WEAPON_ORDER, WEAPONS, type WeaponId } from '../data/weapons';
import type { InputFrame } from '../input/InputManager';
import { clamp, normalize, pointSegmentDistanceSq, setVec2, vec2, type Vec2 } from '../utils/math';
import type { Enemy } from './Enemy';
import type { EntityManager } from './EntityManager';
import type { Player } from './Player';

const beamStart = vec2();
const beamEnd = vec2();

export class SecretPilot {
  enabled = false;
  private weaponCycleCooldown = 0;
  private retryTimer = 0;
  private idleTime = 0;
  private wasShooting = false;
  private readonly aim: Vec2 = vec2(1, 0);
  private readonly move: Vec2 = vec2();

  toggle(): boolean {
    this.setEnabled(!this.enabled);
    return this.enabled;
  }

  setEnabled(enabled: boolean): void {
    if (this.enabled === enabled) return;
    this.enabled = enabled;
    this.resetRun();
  }

  resetRun(): void {
    this.weaponCycleCooldown = 0;
    this.retryTimer = SECRET_PILOT_TUNING.retryDelay;
    this.idleTime = 0;
    this.wasShooting = false;
    setVec2(this.aim, 1, 0);
    setVec2(this.move, 0, 0);
  }

  beginRetryDelay(): void {
    this.retryTimer = SECRET_PILOT_TUNING.retryDelay;
  }

  shouldRetry(dt: number): boolean {
    if (!this.enabled) return false;
    this.retryTimer -= dt;
    return this.retryTimer <= 0;
  }

  apply(input: InputFrame, player: Player, manager: EntityManager, dt: number): void {
    if (!this.enabled) return;

    this.weaponCycleCooldown = Math.max(0, this.weaponCycleCooldown - dt);
    this.idleTime += dt;
    this.clearGameplayInput(input, player);

    let target: Enemy | undefined;
    let targetScore = -Infinity;
    let closestDistance = Infinity;
    let bombTargets = 0;
    let threatMoveX = 0;
    let threatMoveY = 0;
    let activeEnemies = 0;
    let beamThreat = 0;

    manager.enemies.forEachActive((enemy) => {
      activeEnemies += 1;
      const toEnemyX = enemy.position.x - player.position.x;
      const toEnemyY = enemy.position.y - player.position.y;
      const distanceSq = toEnemyX * toEnemyX + toEnemyY * toEnemyY;
      const distance = Math.max(0.001, Math.sqrt(distanceSq));

      if (distance < closestDistance) {
        closestDistance = distance;
      }

      const bombDistance = PLAYER_TUNING.bombRadius * SECRET_PILOT_TUNING.bombRadiusScale + enemy.radius;
      if (distance <= bombDistance) {
        bombTargets += 1;
      }

      const danger = clamp(
        (SECRET_PILOT_TUNING.dangerRadius - distance) / SECRET_PILOT_TUNING.dangerRadius,
        0,
        1
      );
      if (danger > 0) {
        const awayX = -toEnemyX / distance;
        const awayY = -toEnemyY / distance;
        const strafeSign = enemy.id % 2 === 0 ? 1 : -1;
        threatMoveX +=
          awayX * danger * SECRET_PILOT_TUNING.fleeWeight +
          -awayY * danger * SECRET_PILOT_TUNING.strafeWeight * strafeSign;
        threatMoveY +=
          awayY * danger * SECRET_PILOT_TUNING.fleeWeight +
          awayX * danger * SECRET_PILOT_TUNING.strafeWeight * strafeSign;
      }

      const beams = enemy.definition.beams;
      if (beams) {
        const avoidDistance = beams.width + SECRET_PILOT_TUNING.orbitBeamAvoidance;
        for (let i = 0; i < 2; i += 1) {
          const angle = enemy.beamAngle + i * Math.PI;
          const beamX = Math.cos(angle);
          const beamY = Math.sin(angle);
          setVec2(beamStart, enemy.position.x, enemy.position.y);
          setVec2(
            beamEnd,
            enemy.position.x + beamX * beams.length,
            enemy.position.y + beamY * beams.length
          );
          const beamDistanceSq = pointSegmentDistanceSq(player.position, beamStart, beamEnd);
          if (beamDistanceSq <= avoidDistance * avoidDistance) {
            const proximity = 1 - Math.sqrt(beamDistanceSq) / avoidDistance;
            const side = (toEnemyX * -beamY + toEnemyY * beamX) >= 0 ? -1 : 1;
            beamThreat = Math.max(beamThreat, proximity);
            threatMoveX += -beamY * side * proximity * (SECRET_PILOT_TUNING.fleeWeight + 0.9);
            threatMoveY += beamX * side * proximity * (SECRET_PILOT_TUNING.fleeWeight + 0.9);
          }
        }
      }

      const typePriority =
        enemy.typeId === 'splitter'
          ? 11
          : enemy.typeId === 'dasher'
            ? 7
            : enemy.typeId === 'orbitMine'
              ? 6
              : 0;
      const score =
        enemy.definition.score * 0.025 +
        typePriority +
        48 / (distance + 4) +
        (enemy.health <= 1 ? 4 : 0);
      if (score > targetScore) {
        targetScore = score;
        target = enemy;
      }
    });

    if (target) {
      setVec2(this.aim, target.position.x - player.position.x, target.position.y - player.position.y);
      normalize(this.aim);
    } else if (activeEnemies === 0) {
      setVec2(
        this.aim,
        Math.cos(this.idleTime * 0.7),
        Math.sin(this.idleTime * 0.7)
      );
    }

    const beamHits = target ? this.countBeamHits(manager, player, this.aim) : 0;
    const desiredWeapon = this.chooseWeapon(target, closestDistance, beamHits);
    this.queueWeaponCycle(input, player.weaponId, desiredWeapon);

    setVec2(this.move, threatMoveX, threatMoveY);
    this.addRangeControl(target, player);
    this.addPickupPull(manager, player, closestDistance);
    this.addIdleDrift(activeEnemies);
    normalize(this.move);

    const emergency = closestDistance <= SECRET_PILOT_TUNING.emergencyRadius || beamThreat > 0.58;
    const spareChargeDash =
      player.dashCharges > 1 &&
      (closestDistance <= SECRET_PILOT_TUNING.spareChargeDashRadius || beamThreat > 0.34);
    if ((emergency || spareChargeDash) && player.canDash && (this.move.x !== 0 || this.move.y !== 0)) {
      input.dashPressed = true;
      setVec2(this.aim, this.move.x, this.move.y);
      input.shoot = false;
    } else {
      input.shoot = Boolean(target);
    }

    const panicBomb =
      closestDistance <= SECRET_PILOT_TUNING.emergencyRadius * 0.9 &&
      bombTargets >= Math.max(3, SECRET_PILOT_TUNING.bombEnemyThreshold - 3);
    input.bombPressed =
      player.bombRatio >= 0.98 &&
      (bombTargets >= SECRET_PILOT_TUNING.bombEnemyThreshold || panicBomb);
    input.shootPressed = input.shoot && !this.wasShooting;
    this.wasShooting = input.shoot;
    setVec2(input.move, this.move.x, this.move.y);
    setVec2(input.aim, this.aim.x, this.aim.y);
    input.lastDevice = 'keyboard-mouse';
  }

  private clearGameplayInput(input: InputFrame, player: Player): void {
    setVec2(input.move, 0, 0);
    setVec2(input.aim, player.aim.x, player.aim.y);
    input.shoot = false;
    input.shootPressed = false;
    input.dashPressed = false;
    input.bombPressed = false;
    input.previousWeaponPressed = false;
    input.nextWeaponPressed = false;
  }

  private addRangeControl(target: Enemy | undefined, player: Player): void {
    if (!target) return;

    const toTargetX = target.position.x - player.position.x;
    const toTargetY = target.position.y - player.position.y;
    const distance = Math.max(0.001, Math.sqrt(toTargetX * toTargetX + toTargetY * toTargetY));
    const rangeError = clamp(
      (distance - SECRET_PILOT_TUNING.preferredRange) / SECRET_PILOT_TUNING.preferredRange,
      -1,
      1
    );

    this.move.x += (toTargetX / distance) * rangeError * SECRET_PILOT_TUNING.chaseWeight;
    this.move.y += (toTargetY / distance) * rangeError * SECRET_PILOT_TUNING.chaseWeight;
  }

  private addPickupPull(manager: EntityManager, player: Player, closestEnemyDistance: number): void {
    if (closestEnemyDistance < SECRET_PILOT_TUNING.dangerRadius * 0.8) return;

    let pickupX = 0;
    let pickupY = 0;
    let pickupDistanceSq = Infinity;
    manager.pickups.forEachActive((pickup) => {
      const dx = pickup.position.x - player.position.x;
      const dy = pickup.position.y - player.position.y;
      const distanceSq = dx * dx + dy * dy;
      if (distanceSq < pickupDistanceSq) {
        pickupDistanceSq = distanceSq;
        pickupX = dx;
        pickupY = dy;
      }
    });

    if (!Number.isFinite(pickupDistanceSq)) return;
    const distance = Math.max(0.001, Math.sqrt(pickupDistanceSq));
    this.move.x += (pickupX / distance) * SECRET_PILOT_TUNING.pickupWeight;
    this.move.y += (pickupY / distance) * SECRET_PILOT_TUNING.pickupWeight;
  }

  private addIdleDrift(activeEnemies: number): void {
    if (activeEnemies > 0 || this.move.x !== 0 || this.move.y !== 0) return;
    this.move.x += Math.cos(this.idleTime * 0.43) * SECRET_PILOT_TUNING.idleDriftWeight;
    this.move.y += Math.sin(this.idleTime * 0.31) * SECRET_PILOT_TUNING.idleDriftWeight;
  }

  private chooseWeapon(
    target: Enemy | undefined,
    closestDistance: number,
    beamHits: number
  ): WeaponId {
    if (!target) return 'vectorBolt';
    if (beamHits >= SECRET_PILOT_TUNING.beamClusterHits || closestDistance > SECRET_PILOT_TUNING.beamRange) {
      return 'lanceBeam';
    }
    if (closestDistance <= SECRET_PILOT_TUNING.shotgunRange) {
      return 'scatterCrown';
    }
    return 'vectorBolt';
  }

  private queueWeaponCycle(input: InputFrame, current: WeaponId, desired: WeaponId): void {
    if (current === desired || this.weaponCycleCooldown > 0) return;

    const currentIndex = WEAPON_ORDER.indexOf(current);
    const desiredIndex = WEAPON_ORDER.indexOf(desired);
    const length = WEAPON_ORDER.length;
    const forward = (desiredIndex - currentIndex + length) % length;
    const backward = (currentIndex - desiredIndex + length) % length;

    if (forward <= backward) {
      input.nextWeaponPressed = true;
    } else {
      input.previousWeaponPressed = true;
    }
    this.weaponCycleCooldown = SECRET_PILOT_TUNING.weaponCycleDelay;
  }

  private countBeamHits(manager: EntityManager, player: Player, aim: Vec2): number {
    const beam = WEAPONS.lanceBeam.beam;
    if (!beam) return 0;

    let hits = 0;
    setVec2(beamStart, player.position.x, player.position.y);
    setVec2(
      beamEnd,
      player.position.x + aim.x * beam.range,
      player.position.y + aim.y * beam.range
    );

    manager.enemies.forEachActive((enemy) => {
      const hitDistance = beam.width + enemy.radius;
      if (pointSegmentDistanceSq(enemy.position, beamStart, beamEnd) <= hitDistance * hitDistance) {
        hits += 1;
      }
    });

    return hits;
  }
}
