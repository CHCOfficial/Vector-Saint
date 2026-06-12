import * as THREE from 'three';
import { ARENA_TUNING, type GameSettings } from '../data/tuning';
import { getPlayerSkin } from '../data/playerSkins';
import { VISUAL_TUNING } from '../data/visualTuning';
import type { GameEvent } from '../game/GameEvents';
import type { EntityManager } from '../game/EntityManager';
import type { Player } from '../game/Player';
import type { Enemy } from '../game/Enemy';
import type { Pickup } from '../game/Pickup';
import { ArenaVisualController } from './ArenaVisualController';
import { CameraController } from './CameraController';
import { Effects } from './Effects';
import { EnemyVisualFactory, type EnemyVisualNode } from './EnemyVisualFactory';
import { ParticleSystem } from './ParticleSystem';
import { PlayerVisualController } from './PlayerVisualController';
import { PostProcessing } from './PostProcessing';
import { ProjectileVisualController } from './ProjectileVisualController';
import { TrailSystem } from './TrailSystem';
import { createNeonFillMaterial, createNeonLineMaterial, enemyColor } from './Materials';

interface RenderNode {
  object: THREE.Group;
  type: string;
  seenFrame: number;
}

export interface RenderSnapshot {
  player: Player;
  entities: EntityManager;
  settings: GameSettings;
  multiplier: number;
  wave: number;
}

export class Renderer {
  readonly three: THREE.WebGLRenderer;
  readonly cameraController: CameraController;
  readonly particles: ParticleSystem;

  private readonly scene = new THREE.Scene();
  private readonly post: PostProcessing;
  private readonly arena: ArenaVisualController;
  private readonly effects: Effects;
  private readonly playerVisual: PlayerVisualController;
  private readonly projectiles: ProjectileVisualController;
  private readonly trail: TrailSystem;
  private readonly enemyFactory = new EnemyVisualFactory();
  private readonly enemyNodes = new Map<number, EnemyVisualNode>();
  private readonly pickupNodes = new Map<number, RenderNode>();
  private time = 0;
  private frameId = 0;
  private width = 1;
  private height = 1;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    flashLayer: HTMLElement,
    settings: GameSettings
  ) {
    this.three = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    this.three.outputColorSpace = THREE.SRGBColorSpace;
    this.three.toneMapping = THREE.ACESFilmicToneMapping;
    this.three.toneMappingExposure = 1.05;
    this.three.setClearColor(0x02030a, 1);
    this.three.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.scene.background = new THREE.Color(0x02030a);
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.42));
    const keyLight = new THREE.DirectionalLight(0x9cecff, 0.4);
    keyLight.position.set(0, 8, 4);
    this.scene.add(keyLight);

    this.cameraController = new CameraController(1);
    this.arena = new ArenaVisualController();
    this.scene.add(this.arena.object);

    const skin = getPlayerSkin(settings.selectedSkin);
    this.trail = new TrailSystem(skin);
    this.scene.add(this.trail.object);

    this.playerVisual = new PlayerVisualController(skin);
    this.scene.add(this.playerVisual.object);

    this.projectiles = new ProjectileVisualController(skin, this.cameraController.camera);
    this.scene.add(this.projectiles.object);

    this.particles = new ParticleSystem();
    this.scene.add(this.particles.object);

    this.effects = new Effects(
      this.scene,
      this.arena.grid,
      this.particles,
      this.cameraController,
      flashLayer
    );

    this.post = new PostProcessing(this.three, this.scene, this.cameraController.camera);
    this.applySettings(settings);
    this.resize();

    window.addEventListener('resize', this.resize);
    this.canvas.addEventListener('webglcontextlost', this.onContextLost);
  }

  dispose(): void {
    window.removeEventListener('resize', this.resize);
    this.canvas.removeEventListener('webglcontextlost', this.onContextLost);
    this.three.dispose();
  }

  applySettings(settings: GameSettings): void {
    const skin = getPlayerSkin(settings.selectedSkin);
    this.playerVisual.setSkin(skin);
    this.projectiles.setSkin(skin);
    this.trail.setSkin(skin);
    this.arena.applySettings(settings);
    this.post.applySettings(settings);
  }

  render(snapshot: RenderSnapshot, events: readonly GameEvent[], dt: number): void {
    this.frameId += 1;
    this.time += dt;
    const skin = getPlayerSkin(snapshot.settings.selectedSkin);
    this.applySettings(snapshot.settings);

    for (const event of events) {
      this.routeVisualEvent(event);
      this.arena.emit(event);
      this.effects.emit(event, snapshot.settings, skin);
    }

    this.trail.update(snapshot.player, dt, this.time);
    this.playerVisual.update(snapshot.player, dt, this.time);
    this.projectiles.update(snapshot.entities, this.time);
    this.updateBulletTrails(snapshot.entities, snapshot.settings);
    snapshot.entities.enemies.forEachActive((enemy) => this.updateEnemy(enemy, snapshot.settings));
    snapshot.entities.pickups.forEachActive((pickup) => this.updatePickup(pickup));
    this.hideInactiveEnemyNodes();
    this.hideInactiveNodes(this.pickupNodes);

    this.arena.update(dt, {
      focusX: snapshot.player.position.x,
      focusY: snapshot.player.position.y,
      velocityX: snapshot.player.velocity.x,
      velocityY: snapshot.player.velocity.y,
      multiplier: snapshot.multiplier,
      healthRatio: snapshot.player.healthRatio,
      wave: snapshot.wave,
      enemyCount: snapshot.entities.activeEnemyCount
    });
    this.particles.update(dt);
    this.effects.update(dt);
    this.cameraController.update(dt, snapshot.settings, snapshot.player);
    this.post.render(dt);
  }

  playerScreenPosition(player: Player): { x: number; y: number } {
    return this.cameraController.worldToScreen(player.position.x, player.position.y, this.width, this.height);
  }

  get particleCount(): number {
    return this.particles.activeCount;
  }

  get drawCallCount(): number {
    return this.three.info.render.calls;
  }

  private routeVisualEvent(event: GameEvent): void {
    if (event.type === 'shoot') {
      this.playerVisual.onShoot();
    } else if (event.type === 'dash') {
      this.playerVisual.onDash();
    } else if (event.type === 'bomb') {
      this.playerVisual.onBomb();
    } else if (event.type === 'playerHit') {
      this.playerVisual.onDamage();
    }
  }

  private updateBulletTrails(entities: EntityManager, settings: GameSettings): void {
    const density = VISUAL_TUNING.particleDensity[settings.particleDensity];
    entities.bullets.forEachActive((bullet) => {
      if (Math.random() < 0.08 * density) {
        this.particles.spawnTrail(bullet.position.x, bullet.position.y, bullet.color, 1);
      }
    });
  }

  private updateEnemy(enemy: Enemy, settings: GameSettings): void {
    const color = enemyColor(enemy.typeId, settings);
    let node = this.enemyNodes.get(enemy.id);
    if (!node || node.type !== enemy.typeId) {
      if (node) this.scene.remove(node.object);
      node = this.enemyFactory.create(enemy);
      this.enemyNodes.set(enemy.id, node);
      this.scene.add(node.object);
    }

    this.enemyFactory.update(node, enemy, color, this.time, this.frameId);
  }

  private updatePickup(pickup: Pickup): void {
    let node = this.pickupNodes.get(pickup.id);
    if (!node) {
      node = {
        object: this.createPickupObject(),
        type: pickup.type,
        seenFrame: this.frameId
      };
      this.pickupNodes.set(pickup.id, node);
      this.scene.add(node.object);
    }

    node.seenFrame = this.frameId;
    node.object.visible = true;
    node.object.position.set(
      pickup.position.x,
      1 + Math.sin(pickup.age * 5) * 0.18,
      pickup.position.y
    );
    node.object.rotation.y += 0.05;
    node.object.rotation.z += 0.025;
  }

  private hideInactiveEnemyNodes(): void {
    for (const node of this.enemyNodes.values()) {
      if (node.seenFrame !== this.frameId) {
        node.object.visible = false;
      }
    }
  }

  private hideInactiveNodes(nodes: Map<number, RenderNode>): void {
    for (const node of nodes.values()) {
      if (node.seenFrame !== this.frameId) {
        node.object.visible = false;
      }
    }
  }

  private createPickupObject(): THREE.Group {
    const group = new THREE.Group();
    const geometry = new THREE.OctahedronGeometry(0.68, 0);
    const mesh = new THREE.Mesh(geometry, createNeonFillMaterial(0xffc857, 0.45));
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(geometry),
      createNeonLineMaterial(0xfff0a3, 0.92)
    );
    const halo = new THREE.Mesh(
      new THREE.RingGeometry(0.78, 0.86, 32),
      createNeonFillMaterial(0xffc857, 0.18)
    );
    halo.rotation.x = -Math.PI * 0.5;
    group.add(halo, mesh, wire);
    return group;
  }

  private readonly resize = (): void => {
    const width = Math.max(1, window.innerWidth);
    const height = Math.max(1, window.innerHeight);
    this.width = width;
    this.height = height;
    this.three.setSize(width, height, false);
    this.post.resize(width, height);
    this.cameraController.resize(width / height);
  };

  private readonly onContextLost = (event: Event): void => {
    event.preventDefault();
  };
}
