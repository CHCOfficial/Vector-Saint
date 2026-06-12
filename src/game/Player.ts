import { PLAYER_TUNING, type DifficultyAssist } from '../data/tuning';
import { nextWeaponId, WEAPONS, type WeaponDefinition, type WeaponId } from '../data/weapons';
import type { InputFrame } from '../input/InputManager';
import {
  addScaled,
  angleOf,
  clamp,
  lengthSq,
  normalize,
  setVec2,
  vec2,
  type Vec2
} from '../utils/math';

export class Player {
  active = true;
  readonly position: Vec2 = vec2();
  readonly velocity: Vec2 = vec2();
  readonly aim: Vec2 = vec2(1, 0);
  private readonly dashDirection: Vec2 = vec2(1, 0);
  radius = PLAYER_TUNING.radius;
  health: number = PLAYER_TUNING.maxHealth;
  maxHealth: number = PLAYER_TUNING.maxHealth;
  fireCooldown = 0;
  dashCooldown = 0;
  dashCharges = PLAYER_TUNING.dashCharges;
  dashTimer = 0;
  bombCooldown = 0;
  invulnerableTimer = 0;
  facingAngle = 0;
  dashStarted = false;
  weaponId: WeaponId = 'vectorBolt';
  speedMultiplier = 1;
  accelerationMultiplier = 1;
  frictionMultiplier = 1;
  dashCooldownMultiplier = 1;
  temporaryShieldHits = 0;
  signatureChargeRatio = 0;
  signatureReady = false;
  redlineSurgeActive = false;
  signaturePulse = 0;

  reset(assist: DifficultyAssist): void {
    this.active = true;
    setVec2(this.position, 0, 0);
    setVec2(this.velocity, 0, 0);
    setVec2(this.aim, 1, 0);
    this.maxHealth =
      assist === 'forgiving' ? PLAYER_TUNING.forgivingMaxHealth : PLAYER_TUNING.maxHealth;
    this.health = this.maxHealth;
    this.fireCooldown = 0;
    this.dashCooldown = 0;
    this.dashCharges = PLAYER_TUNING.dashCharges;
    this.dashTimer = 0;
    this.bombCooldown = 0;
    this.invulnerableTimer = 1.2;
    this.facingAngle = 0;
    this.dashStarted = false;
    this.weaponId = 'vectorBolt';
    this.speedMultiplier = 1;
    this.accelerationMultiplier = 1;
    this.frictionMultiplier = 1;
    this.dashCooldownMultiplier = 1;
    this.temporaryShieldHits = 0;
    this.signatureChargeRatio = 0;
    this.signatureReady = false;
    this.redlineSurgeActive = false;
    this.signaturePulse = 0;
  }

  resetFrameModifiers(): void {
    this.speedMultiplier = 1;
    this.accelerationMultiplier = 1;
    this.frictionMultiplier = 1;
    this.dashCooldownMultiplier = 1;
  }

  update(input: InputFrame, dt: number): void {
    this.dashStarted = false;
    this.fireCooldown = Math.max(0, this.fireCooldown - dt);
    this.updateDashRecharge(dt);
    this.bombCooldown = Math.max(0, this.bombCooldown - dt);
    this.invulnerableTimer = Math.max(0, this.invulnerableTimer - dt);

    if (lengthSq(input.aim) > 0.05) {
      setVec2(this.aim, input.aim.x, input.aim.y);
      normalize(this.aim);
      this.facingAngle = angleOf(this.aim);
    }

    if (input.dashPressed) {
      this.dashStarted = this.tryDash(input.move);
    }

    this.signaturePulse = Math.max(0, this.signaturePulse - dt * 3.4);

    const targetVx = input.move.x * PLAYER_TUNING.speed * this.speedMultiplier;
    const targetVy = input.move.y * PLAYER_TUNING.speed * this.speedMultiplier;
    const acceleration = PLAYER_TUNING.acceleration * this.accelerationMultiplier * dt;

    this.velocity.x += clamp(targetVx - this.velocity.x, -acceleration, acceleration);
    this.velocity.y += clamp(targetVy - this.velocity.y, -acceleration, acceleration);

    if (lengthSq(input.move) < 0.01 && this.dashTimer <= 0) {
      const friction = Math.max(0, 1 - PLAYER_TUNING.friction * this.frictionMultiplier * dt);
      this.velocity.x *= friction;
      this.velocity.y *= friction;
    }

    if (this.dashTimer > 0) {
      this.dashTimer -= dt;
    }

    addScaled(this.position, this.velocity, dt);
  }

  tryShoot(): boolean {
    if (this.fireCooldown > 0) return false;
    this.fireCooldown = this.weapon.fireInterval;
    return true;
  }

  cycleWeapon(direction: number): void {
    this.weaponId = nextWeaponId(this.weaponId, direction);
    this.fireCooldown = Math.min(this.fireCooldown, this.weapon.fireInterval * 0.55);
  }

  tryDash(direction?: Vec2): boolean {
    if (this.dashCharges <= 0) return false;

    this.resolveDashDirection(direction);
    this.dashCharges -= 1;
    if (this.dashCharges < PLAYER_TUNING.dashCharges && this.dashCooldown <= 0) {
      this.dashCooldown = this.dashRechargeDuration;
    }
    this.dashTimer = PLAYER_TUNING.dashDuration;
    this.invulnerableTimer = Math.max(this.invulnerableTimer, PLAYER_TUNING.dashInvulnerable);
    this.velocity.x = this.dashDirection.x * PLAYER_TUNING.dashSpeed;
    this.velocity.y = this.dashDirection.y * PLAYER_TUNING.dashSpeed;
    return true;
  }

  tryBomb(): boolean {
    if (this.bombCooldown > 0) return false;
    this.bombCooldown = PLAYER_TUNING.bombCooldown;
    return true;
  }

  takeHit(assist: DifficultyAssist): boolean {
    if (this.invulnerableTimer > 0) return false;

    this.health -= 1;
    this.invulnerableTimer =
      assist === 'forgiving'
        ? PLAYER_TUNING.forgivingHitInvulnerable
        : PLAYER_TUNING.hitInvulnerable;
    if (this.health <= 0) {
      this.active = false;
    }
    return true;
  }

  absorbSignatureShield(): boolean {
    if (this.temporaryShieldHits <= 0) return false;
    this.temporaryShieldHits -= 1;
    this.signatureReady = false;
    this.signatureChargeRatio = 0;
    this.invulnerableTimer = Math.max(this.invulnerableTimer, PLAYER_TUNING.hitInvulnerable * 0.42);
    this.signaturePulse = 1;
    return true;
  }

  get healthRatio(): number {
    return this.maxHealth <= 0 ? 0 : this.health / this.maxHealth;
  }

  get dashRatio(): number {
    if (this.dashCharges >= PLAYER_TUNING.dashCharges) return 1;
    const rechargeProgress = 1 - clamp(this.dashCooldown / this.dashRechargeDuration, 0, 1);
    return clamp((this.dashCharges + rechargeProgress) / PLAYER_TUNING.dashCharges, 0, 1);
  }

  get bombRatio(): number {
    return 1 - clamp(this.bombCooldown / PLAYER_TUNING.bombCooldown, 0, 1);
  }

  get weapon(): WeaponDefinition {
    return WEAPONS[this.weaponId];
  }

  get canDash(): boolean {
    return this.dashCharges > 0;
  }

  private updateDashRecharge(dt: number): void {
    if (this.dashCharges >= PLAYER_TUNING.dashCharges) {
      this.dashCooldown = 0;
      return;
    }

    this.dashCooldown -= dt;
    while (this.dashCooldown <= 0 && this.dashCharges < PLAYER_TUNING.dashCharges) {
      this.dashCharges += 1;
      if (this.dashCharges < PLAYER_TUNING.dashCharges) {
        this.dashCooldown += this.dashRechargeDuration;
      } else {
        this.dashCooldown = 0;
      }
    }
  }

  private get dashRechargeDuration(): number {
    return PLAYER_TUNING.dashCooldown * this.dashCooldownMultiplier;
  }

  private resolveDashDirection(direction?: Vec2): void {
    if (direction && lengthSq(direction) > 0.01) {
      setVec2(this.dashDirection, direction.x, direction.y);
    } else if (lengthSq(this.velocity) > 1) {
      setVec2(this.dashDirection, this.velocity.x, this.velocity.y);
    } else {
      setVec2(this.dashDirection, this.aim.x, this.aim.y);
    }
    normalize(this.dashDirection);
  }
}
