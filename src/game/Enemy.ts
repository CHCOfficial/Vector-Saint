import { ENEMY_TYPES, type EnemyTypeDefinition, type EnemyTypeId } from '../data/enemyTypes';
import { Random } from '../utils/random';
import {
  addScaled,
  angleOf,
  distanceSq,
  fromAngle,
  lengthSq,
  normalize,
  rotateToward,
  setVec2,
  vec2,
  type Vec2
} from '../utils/math';
import { Entity } from './Entity';

type DasherState = 'idle' | 'charging' | 'lunging';

export class Enemy extends Entity {
  typeId: EnemyTypeId = 'chaser';
  definition: EnemyTypeDefinition = ENEMY_TYPES.chaser;
  facingAngle = 0;
  driftAngle = 0;
  stateTimer = 0;
  dasherState: DasherState = 'idle';
  beamAngle = 0;
  difficultyScale = 1;
  readonly desired: Vec2 = vec2();
  private speedMultiplier = 1;

  constructor() {
    super('enemy');
  }

  override reset(): void {
    super.reset();
    this.typeId = 'chaser';
    this.definition = ENEMY_TYPES.chaser;
    this.facingAngle = 0;
    this.driftAngle = 0;
    this.stateTimer = 0;
    this.dasherState = 'idle';
    this.beamAngle = 0;
    this.difficultyScale = 1;
    this.speedMultiplier = 1;
    setVec2(this.desired, 0, 0);
  }

  spawn(typeId: EnemyTypeId, x: number, y: number, difficulty: number, random: Random): void {
    const definition = ENEMY_TYPES[typeId];
    this.active = true;
    this.typeId = typeId;
    this.definition = definition;
    this.radius = definition.radius;
    this.maxHealth = Math.ceil(definition.health * (1 + difficulty * 0.025));
    this.health = this.maxHealth;
    this.color = definition.color;
    this.difficultyScale = 1 + difficulty * 0.035;
    this.facingAngle = random.range(-Math.PI, Math.PI);
    this.driftAngle = random.range(-Math.PI, Math.PI);
    this.beamAngle = random.range(-Math.PI, Math.PI);
    this.stateTimer = definition.dash ? definition.dash.cooldown * random.range(0.35, 0.9) : 0;
    this.dasherState = 'idle';
    setVec2(this.position, x, y);
    fromAngle(this.velocity, this.driftAngle, definition.speed * 0.45);
  }

  update(dt: number, playerPosition: Vec2): void {
    if (!this.active) return;

    this.age += dt;
    switch (this.typeId) {
      case 'dasher':
        this.updateDasher(dt, playerPosition);
        break;
      case 'orbitMine':
        this.updateOrbitMine(dt, playerPosition);
        break;
      case 'swarm':
        this.updateSeeking(dt, playerPosition, 1.2, 3.2);
        break;
      case 'splitter':
        this.updateSeeking(dt, playerPosition, 0.76, 1.3);
        break;
      case 'chaser':
      default:
        this.updateSeeking(dt, playerPosition, 1, 0.8);
        break;
    }

    if (this.speedMultiplier !== 1) {
      this.velocity.x *= this.speedMultiplier;
      this.velocity.y *= this.speedMultiplier;
      this.speedMultiplier = 1;
    }

    addScaled(this.position, this.velocity, dt);
  }

  applySpeedMultiplier(multiplier: number): void {
    this.speedMultiplier = Math.min(this.speedMultiplier, Math.max(0, multiplier));
  }

  private updateSeeking(dt: number, playerPosition: Vec2, speedScale: number, wobble: number): void {
    setVec2(
      this.desired,
      playerPosition.x - this.position.x,
      playerPosition.y - this.position.y
    );
    normalize(this.desired);

    if (wobble > 0) {
      const sway = Math.sin(this.age * wobble + this.id) * 0.32;
      const dx = this.desired.x;
      this.desired.x = this.desired.x - this.desired.y * sway;
      this.desired.y = this.desired.y + dx * sway;
      normalize(this.desired);
    }

    const desiredAngle = angleOf(this.desired);
    this.facingAngle = rotateToward(
      this.facingAngle,
      desiredAngle,
      this.definition.turnRate * dt
    );
    fromAngle(
      this.velocity,
      this.facingAngle,
      this.definition.speed * speedScale * this.difficultyScale
    );
  }

  private updateDasher(dt: number, playerPosition: Vec2): void {
    const dash = this.definition.dash;
    if (!dash) return;

    this.stateTimer -= dt;

    if (this.dasherState === 'idle') {
      this.updateSeeking(dt, playerPosition, 0.45, 0);
      if (this.stateTimer <= 0 && distanceSq(this.position, playerPosition) < 500) {
        this.dasherState = 'charging';
        this.stateTimer = dash.chargeTime;
        this.velocity.x *= 0.1;
        this.velocity.y *= 0.1;
      }
      return;
    }

    if (this.dasherState === 'charging') {
      setVec2(this.desired, playerPosition.x - this.position.x, playerPosition.y - this.position.y);
      normalize(this.desired);
      this.facingAngle = angleOf(this.desired);
      this.velocity.x *= 0.9;
      this.velocity.y *= 0.9;

      if (this.stateTimer <= 0) {
        this.dasherState = 'lunging';
        this.stateTimer = dash.lungeTime;
        fromAngle(this.velocity, this.facingAngle, dash.speed * this.difficultyScale);
      }
      return;
    }

    if (this.dasherState === 'lunging' && this.stateTimer <= 0) {
      this.dasherState = 'idle';
      this.stateTimer = dash.cooldown;
      if (lengthSq(this.velocity) > 0) {
        this.velocity.x *= 0.4;
        this.velocity.y *= 0.4;
      }
    }
  }

  private updateOrbitMine(dt: number, playerPosition: Vec2): void {
    const beams = this.definition.beams;
    if (beams) {
      this.beamAngle += beams.rotationSpeed * dt * this.difficultyScale;
    }

    const playerDx = playerPosition.x - this.position.x;
    const playerDy = playerPosition.y - this.position.y;
    const playerDistSq = playerDx * playerDx + playerDy * playerDy;

    if (playerDistSq > 420) {
      setVec2(this.desired, playerDx, playerDy);
    } else {
      setVec2(this.desired, -playerDx * 0.42 - playerDy * 0.18, -playerDy * 0.42 + playerDx * 0.18);
    }

    normalize(this.desired);
    const targetAngle = angleOf(this.desired) + Math.sin(this.age * 1.7 + this.id) * 0.35;
    this.facingAngle = rotateToward(this.facingAngle, targetAngle, this.definition.turnRate * dt);
    fromAngle(this.velocity, this.facingAngle, this.definition.speed * this.difficultyScale);
  }
}
