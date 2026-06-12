import * as THREE from 'three';
import { POOL_TUNING } from '../data/tuning';
import { skinReadableAccentColor, type PlayerSkin, type PlayerSkinId } from '../data/playerSkins';
import { VISUAL_TUNING } from '../data/visualTuning';
import type { EntityManager } from '../game/EntityManager';
import { length } from '../utils/math';
import { createNeonFillMaterial, ensureVisibleNeonColor } from './Materials';

const denseBoltTracerSkins: readonly PlayerSkinId[] = ['voidChoir', 'redlineMartyr'];

export class ProjectileVisualController {
  readonly object = new THREE.Group();
  private static readonly tracerLinesPerBullet = 5;
  private readonly coreMesh: THREE.InstancedMesh;
  private readonly glowMesh: THREE.InstancedMesh;
  private readonly ringMesh: THREE.InstancedMesh;
  private readonly streakMesh: THREE.InstancedMesh;
  private readonly tracerGeometry: THREE.BufferGeometry;
  private readonly tracerPositions = new Float32Array(
    POOL_TUNING.bullets * ProjectileVisualController.tracerLinesPerBullet * 2 * 3
  );
  private readonly tracerColors = new Float32Array(
    POOL_TUNING.bullets * ProjectileVisualController.tracerLinesPerBullet * 2 * 3
  );
  private readonly tracerLines: THREE.LineSegments;
  private readonly matrix = new THREE.Matrix4();
  private readonly position = new THREE.Vector3();
  private readonly scale = new THREE.Vector3();
  private readonly color = new THREE.Color();
  private readonly hotCoreColor = new THREE.Color(0xffffff);
  private readonly identityQuaternion = new THREE.Quaternion();
  private readonly forwardAxis = new THREE.Vector3();
  private readonly cameraDir = new THREE.Vector3();
  private readonly widthAxis = new THREE.Vector3();
  private readonly normalAxis = new THREE.Vector3();
  private readonly coreMaterial = createNeonFillMaterial(0x39f5ff, 1);
  private readonly glowMaterial = createNeonFillMaterial(0x39f5ff, 0.72);
  private readonly ringMaterial = createNeonFillMaterial(0xffffff, 0.9);
  private readonly streakMaterial = createNeonFillMaterial(0xffffff, 0.88);
  private skin: PlayerSkin;

  constructor(skin: PlayerSkin, private readonly camera: THREE.Camera) {
    this.skin = skin;
    this.coreMesh = new THREE.InstancedMesh(
      new THREE.SphereGeometry(VISUAL_TUNING.projectile.coreRadius, 12, 8),
      this.coreMaterial,
      POOL_TUNING.bullets
    );
    this.glowMesh = new THREE.InstancedMesh(
      new THREE.SphereGeometry(VISUAL_TUNING.projectile.glowRadius, 12, 8),
      this.glowMaterial,
      POOL_TUNING.bullets
    );
    this.ringMesh = new THREE.InstancedMesh(
      new THREE.RingGeometry(
        VISUAL_TUNING.projectile.ringInnerRadius,
        VISUAL_TUNING.projectile.ringOuterRadius,
        40
      ),
      this.ringMaterial,
      POOL_TUNING.bullets
    );
    const streakGeometry = new THREE.PlaneGeometry(1, 1);
    this.streakMesh = new THREE.InstancedMesh(streakGeometry, this.streakMaterial, POOL_TUNING.bullets);
    this.tracerGeometry = new THREE.BufferGeometry();
    this.tracerGeometry.setAttribute('position', new THREE.BufferAttribute(this.tracerPositions, 3));
    this.tracerGeometry.setAttribute('color', new THREE.BufferAttribute(this.tracerColors, 3));
    this.tracerGeometry.setDrawRange(0, 0);
    this.tracerLines = new THREE.LineSegments(
      this.tracerGeometry,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.98,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false
      })
    );
    this.coreMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.glowMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.ringMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.streakMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    (this.tracerGeometry.getAttribute('position') as THREE.BufferAttribute).setUsage(THREE.DynamicDrawUsage);
    (this.tracerGeometry.getAttribute('color') as THREE.BufferAttribute).setUsage(THREE.DynamicDrawUsage);
    this.coreMaterial.vertexColors = true;
    this.glowMaterial.vertexColors = true;
    this.ringMaterial.vertexColors = true;
    this.streakMaterial.vertexColors = true;
    this.coreMaterial.needsUpdate = true;
    this.glowMaterial.needsUpdate = true;
    this.ringMaterial.needsUpdate = true;
    this.streakMaterial.needsUpdate = true;
    this.coreMaterial.depthTest = false;
    this.glowMaterial.depthTest = false;
    this.ringMaterial.depthTest = false;
    this.streakMaterial.depthTest = false;
    this.coreMesh.renderOrder = 30;
    this.glowMesh.renderOrder = 28;
    this.ringMesh.renderOrder = 29;
    this.streakMesh.renderOrder = 27;
    this.tracerLines.renderOrder = 34;
    this.coreMesh.frustumCulled = false;
    this.glowMesh.frustumCulled = false;
    this.ringMesh.frustumCulled = false;
    this.streakMesh.frustumCulled = false;
    this.tracerLines.frustumCulled = false;
    this.object.add(this.glowMesh, this.streakMesh, this.ringMesh, this.coreMesh, this.tracerLines);
    this.setSkin(skin);
  }

  setSkin(skin: PlayerSkin): void {
    this.skin = skin;
    this.coreMaterial.color.setHex(0xffffff);
    this.glowMaterial.color.setHex(0xffffff);
    this.ringMaterial.color.setHex(0xffffff);
    this.streakMaterial.color.setHex(0xffffff);
    this.glowMaterial.opacity = skin.id === 'voidChoir' ? 0.82 : 0.72;
    this.ringMaterial.opacity = skin.id === 'redlineMartyr' ? 1 : 0.9;
    this.streakMaterial.opacity = skin.id === 'redlineMartyr' ? 1 : 0.88;
  }

  update(entities: EntityManager, time: number): void {
    let index = 0;
    let tracerVertexIndex = 0;
    entities.bullets.forEachActive((bullet) => {
      const speed = Math.max(1, length(bullet.velocity));
      const angle = Math.atan2(bullet.velocity.y, bullet.velocity.x);
      const stretch = THREE.MathUtils.clamp(
        speed / 24,
        VISUAL_TUNING.projectile.stretchMin,
        VISUAL_TUNING.projectile.stretchMax
      );
      const profile = VISUAL_TUNING.projectile.weaponProfiles[bullet.weaponId];
      const pulse = 1 + Math.sin(time * 18 + bullet.id) * 0.08;
      let signatureScale = 1;
      let signatureTracerScale = 1;
      let tracerLineCount = this.tracerLineCountFor(bullet.weaponId, bullet.sourceSkinId);
      let tracerWidthScale = tracerLineCount <= 1 ? 0.52 : 1;
      let streakWidthScale = tracerLineCount <= 1 ? 0.68 : 1;
      let ringScale = tracerLineCount <= 1 ? 0.86 : 1;
      this.color.setHex(ensureVisibleNeonColor(bullet.color));
      this.hotCoreColor.setHex(0xffffff);

      switch (bullet.signature) {
        case 'solarPierce':
          this.color.setHex(0xfff0a3);
          this.hotCoreColor.setHex(0xffffff);
          signatureScale = 1.42;
          signatureTracerScale = 1.32;
          tracerLineCount = 3;
          tracerWidthScale = 0.82;
          streakWidthScale = 0.88;
          ringScale = 1;
          break;
        case 'ghostBurst':
          this.color.setHex(0xffa4f8);
          this.hotCoreColor.setHex(0xfef7ff);
          signatureScale = 1.18;
          signatureTracerScale = 1.14;
          break;
        case 'ionArc':
          this.color.setHex(0x5cffdd);
          signatureScale = 1.12;
          signatureTracerScale = 1.08;
          break;
        case 'revenantSpark':
          this.color.setHex(0x32ffae);
          signatureScale = 1.22;
          signatureTracerScale = 1.16;
          break;
        default:
          break;
      }

      const readabilityScale = bullet.weaponId === 'scatterCrown' ? 1.28 : 1.18;
      signatureScale *= readabilityScale;
      signatureTracerScale *= readabilityScale;

      this.position.set(bullet.position.x, 1.42, bullet.position.y);

      const coreScale = profile.coreScale * pulse;
      this.scale.setScalar(coreScale * signatureScale);
      this.matrix.compose(this.position, this.identityQuaternion, this.scale);
      this.coreMesh.setMatrixAt(index, this.matrix);
      this.coreMesh.setColorAt(index, this.hotCoreColor);

      const glowScale = profile.glowScale * (0.96 + pulse * 0.1);
      this.scale.setScalar(glowScale * signatureScale);
      this.matrix.compose(this.position, this.identityQuaternion, this.scale);
      this.glowMesh.setMatrixAt(index, this.matrix);
      this.glowMesh.setColorAt(index, this.color);

      this.writeBillboardMatrix(
        bullet.position.x,
        bullet.position.y,
        angle,
        profile.ringScale * signatureScale * ringScale * (1.1 + pulse * 0.12),
        profile.ringScale * signatureScale * ringScale * (1.1 + pulse * 0.12),
        1.46
      );
      this.ringMesh.setMatrixAt(index, this.matrix);
      this.ringMesh.setColorAt(index, this.color);

      this.writeBillboardMatrix(
        bullet.position.x - Math.cos(angle) * profile.backOffset,
        bullet.position.y - Math.sin(angle) * profile.backOffset,
        angle,
        profile.tracerLength * signatureTracerScale * (0.78 + stretch * 0.18),
        profile.tracerWidth * signatureTracerScale * streakWidthScale * (0.9 + pulse * 0.08),
        1.38
      );
      this.streakMesh.setMatrixAt(index, this.matrix);
      this.streakMesh.setColorAt(index, this.color);
      tracerVertexIndex = this.writeTracerLines(
        tracerVertexIndex,
        bullet.position.x,
        bullet.position.y,
        angle,
        profile.tracerLength * signatureTracerScale * (0.98 + stretch * 0.12),
        profile.tracerWidth * signatureTracerScale * tracerWidthScale,
        tracerLineCount
      );
      index += 1;
    });

    this.coreMesh.count = index;
    this.glowMesh.count = index;
    this.ringMesh.count = index;
    this.streakMesh.count = index;
    this.tracerGeometry.setDrawRange(0, tracerVertexIndex);
    this.coreMesh.instanceMatrix.needsUpdate = true;
    this.glowMesh.instanceMatrix.needsUpdate = true;
    this.ringMesh.instanceMatrix.needsUpdate = true;
    this.streakMesh.instanceMatrix.needsUpdate = true;
    (this.tracerGeometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
    (this.tracerGeometry.getAttribute('color') as THREE.BufferAttribute).needsUpdate = true;
    if (this.coreMesh.instanceColor) this.coreMesh.instanceColor.needsUpdate = true;
    if (this.glowMesh.instanceColor) this.glowMesh.instanceColor.needsUpdate = true;
    if (this.ringMesh.instanceColor) this.ringMesh.instanceColor.needsUpdate = true;
    if (this.streakMesh.instanceColor) this.streakMesh.instanceColor.needsUpdate = true;
  }

  getColor(): number {
    return skinReadableAccentColor(this.skin);
  }

  private writeBillboardMatrix(
    x: number,
    y: number,
    angle: number,
    lengthScale: number,
    widthScale: number,
    height: number
  ): void {
    this.forwardAxis.set(Math.cos(angle), 0, Math.sin(angle)).multiplyScalar(lengthScale);
    this.position.set(x, height, y);
    this.cameraDir.copy(this.camera.position).sub(this.position).normalize();
    this.widthAxis.crossVectors(this.cameraDir, this.forwardAxis).normalize().multiplyScalar(widthScale);
    this.normalAxis.crossVectors(this.forwardAxis, this.widthAxis).normalize();
    this.matrix.makeBasis(this.forwardAxis, this.widthAxis, this.normalAxis);
    this.matrix.setPosition(this.position);
  }

  private writeTracerLines(
    vertexIndex: number,
    x: number,
    y: number,
    angle: number,
    tracerLength: number,
    tracerWidth: number,
    lineCount: number
  ): number {
    const dirX = Math.cos(angle);
    const dirY = Math.sin(angle);
    const perpX = -dirY;
    const perpY = dirX;
    const headX = x + dirX * 0.8;
    const headY = y + dirY * 0.8;
    const tailX = x - dirX * tracerLength;
    const tailY = y - dirY * tracerLength;
    const count = Math.min(ProjectileVisualController.tracerLinesPerBullet, Math.max(1, lineCount));

    for (let i = 0; i < count; i += 1) {
      const normalizedOffset = count <= 1 ? 0 : (i / (count - 1) - 0.5) * 0.84;
      const offset = normalizedOffset * tracerWidth;
      const isCore = Math.abs(normalizedOffset) < 0.001;
      const headColorScale = isCore ? 1 : 0.72;
      const tailColorScale = isCore ? 0.62 : 0.28;
      const headColor = isCore ? this.hotCoreColor : this.color;
      const baseIndex = vertexIndex * 3;

      this.tracerPositions[baseIndex] = headX + perpX * offset;
      this.tracerPositions[baseIndex + 1] = 1.74;
      this.tracerPositions[baseIndex + 2] = headY + perpY * offset;
      this.tracerColors[baseIndex] = headColor.r * headColorScale;
      this.tracerColors[baseIndex + 1] = headColor.g * headColorScale;
      this.tracerColors[baseIndex + 2] = headColor.b * headColorScale;
      vertexIndex += 1;

      const tailIndex = vertexIndex * 3;
      this.tracerPositions[tailIndex] = tailX + perpX * offset;
      this.tracerPositions[tailIndex + 1] = 1.62;
      this.tracerPositions[tailIndex + 2] = tailY + perpY * offset;
      this.tracerColors[tailIndex] = this.color.r * tailColorScale;
      this.tracerColors[tailIndex + 1] = this.color.g * tailColorScale;
      this.tracerColors[tailIndex + 2] = this.color.b * tailColorScale;
      vertexIndex += 1;
    }

    return vertexIndex;
  }

  private tracerLineCountFor(weaponId: string, skinId: PlayerSkinId): number {
    if (weaponId !== 'vectorBolt') return 3;
    return denseBoltTracerSkins.includes(skinId) ? 5 : 1;
  }
}
