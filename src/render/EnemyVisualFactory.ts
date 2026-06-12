import * as THREE from 'three';
import type { EnemyTypeId } from '../data/enemyTypes';
import { VISUAL_TUNING } from '../data/visualTuning';
import type { Enemy } from '../game/Enemy';
import { createNeonFillMaterial, createNeonLineMaterial, setObjectColor } from './Materials';

export interface EnemyVisualNode {
  object: THREE.Group;
  type: EnemyTypeId;
  seenFrame: number;
}

export class EnemyVisualFactory {
  create(enemy: Enemy): EnemyVisualNode {
    return {
      object: this.createEnemyObject(enemy),
      type: enemy.typeId,
      seenFrame: 0
    };
  }

  update(node: EnemyVisualNode, enemy: Enemy, color: number, time: number, frameId: number): void {
    node.seenFrame = frameId;
    node.object.visible = true;
    node.object.position.set(enemy.position.x, 1.02, enemy.position.y);
    node.object.rotation.y = -enemy.facingAngle;
    const spawnScale = Math.min(1, enemy.age / VISUAL_TUNING.enemies.spawnScaleDuration);
    const pulse = 1 + Math.sin(time * VISUAL_TUNING.enemies.pulseSpeed + enemy.id) * 0.045;
    node.object.scale.setScalar((0.2 + spawnScale * 0.8) * pulse);
    setObjectColor(node.object, color);

    const accent = node.object.getObjectByName('accent');
    if (accent) {
      accent.rotation.y += 0.018 + enemy.difficultyScale * 0.004;
    }

    const beams = node.object.getObjectByName('beams');
    if (beams) {
      beams.rotation.y = -enemy.beamAngle;
    }
  }

  private createEnemyObject(enemy: Enemy): THREE.Group {
    switch (enemy.typeId) {
      case 'dasher':
        return this.createLayeredPolygon(
          [
            [1.75, 0],
            [-0.88, 0.52],
            [-1.18, 0],
            [-0.88, -0.52]
          ],
          enemy.color,
          1,
          true
        );
      case 'swarm':
        return this.createLayeredPolygon(
          [
            [0.86, 0],
            [-0.42, 0.58],
            [-0.22, 0],
            [-0.42, -0.58]
          ],
          enemy.color,
          0.82,
          true
        );
      case 'splitter':
        return this.createSplitter(enemy.color);
      case 'orbitMine':
        return this.createOrbitMine(enemy);
      case 'chaser':
      default:
        return this.createLayeredPolygon(
          [
            [0, 1.32],
            [1.12, 0],
            [0, -1.32],
            [-1.12, 0]
          ],
          enemy.color,
          1,
          true
        );
    }
  }

  private createSplitter(color: number): THREE.Group {
    const group = new THREE.Group();
    group.add(this.createRegularPolygon(5, color, 1.28, 0.22));
    const accent = new THREE.Group();
    accent.name = 'accent';
    for (let i = 0; i < 4; i += 1) {
      const shard = this.createLayeredPolygon(
        [
          [0.54, 0],
          [-0.28, 0.32],
          [-0.18, -0.3]
        ],
        color,
        0.7,
        false
      );
      const angle = (i / 4) * Math.PI * 2;
      shard.position.set(Math.cos(angle) * 0.7, 0.04, Math.sin(angle) * 0.7);
      shard.rotation.y = -angle;
      accent.add(shard);
    }
    group.add(accent);
    return group;
  }

  private createOrbitMine(enemy: Enemy): THREE.Group {
    const group = new THREE.Group();
    group.add(this.createRegularPolygon(16, enemy.color, enemy.radius * 0.72, 0.26));

    const accent = new THREE.Group();
    accent.name = 'accent';
    const orbitGeometry = new THREE.RingGeometry(enemy.radius * 0.92, enemy.radius * 1.02, 64);
    const orbit = new THREE.Mesh(orbitGeometry, createNeonFillMaterial(enemy.color, 0.16));
    orbit.rotation.x = -Math.PI * 0.5;
    accent.add(orbit);
    group.add(accent);

    const beams = new THREE.Group();
    beams.name = 'beams';
    const beamMaterial = createNeonLineMaterial(enemy.color, 0.84);
    const length = enemy.definition.beams?.length ?? 8;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        [-length, 0.16, 0, length, 0.16, 0, 0, 0.16, -length, 0, 0.16, length],
        3
      )
    );
    beams.add(new THREE.LineSegments(geometry, beamMaterial));
    group.add(beams);
    return group;
  }

  private createRegularPolygon(sides: number, color: number, radius: number, opacity: number): THREE.Group {
    const points: Array<[number, number]> = [];
    for (let i = 0; i < sides; i += 1) {
      const angle = (i / sides) * Math.PI * 2;
      const wobble = i % 2 === 0 ? 1 : 0.82;
      points.push([Math.cos(angle) * radius * wobble, Math.sin(angle) * radius * wobble]);
    }
    return this.createLayeredPolygon(points, color, 1, true, opacity);
  }

  private createLayeredPolygon(
    points: Array<[number, number]>,
    color: number,
    scale: number,
    addAccent: boolean,
    opacity: number = VISUAL_TUNING.enemies.coreOpacity
  ): THREE.Group {
    const group = new THREE.Group();
    const haloShape = new THREE.Shape(points.map(([x, y]) => new THREE.Vector2(x * scale * 1.22, y * scale * 1.22)));
    const haloGeometry = new THREE.ShapeGeometry(haloShape);
    haloGeometry.rotateX(-Math.PI * 0.5);
    const halo = new THREE.Mesh(haloGeometry, createNeonFillMaterial(color, VISUAL_TUNING.enemies.glowOpacity));
    group.add(halo);

    const coreShape = new THREE.Shape(points.map(([x, y]) => new THREE.Vector2(x * scale, y * scale)));
    const coreGeometry = new THREE.ShapeGeometry(coreShape);
    coreGeometry.rotateX(-Math.PI * 0.5);
    const core = new THREE.Mesh(coreGeometry, createNeonFillMaterial(color, opacity));
    group.add(core);

    const outlinePoints = [...points, points[0]].map(
      ([x, y]) => new THREE.Vector3(x * scale, 0.2, y * scale)
    );
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(outlinePoints), createNeonLineMaterial(color)));

    if (addAccent) {
      const accent = new THREE.Group();
      accent.name = 'accent';
      const innerPoints = points.map(([x, y]) => new THREE.Vector3(x * scale * 0.48, 0.24, y * scale * 0.48));
      innerPoints.push(innerPoints[0].clone());
      accent.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(innerPoints), createNeonLineMaterial(color, VISUAL_TUNING.enemies.accentOpacity)));
      group.add(accent);
    }

    return group;
  }
}
