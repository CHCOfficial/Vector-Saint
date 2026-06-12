import * as THREE from 'three';
import { RENDER_TUNING } from '../data/tuning';
import { ensureVisibleNeonColor } from './Materials';

const vertexShader = `
attribute float aSize;
attribute float aAlpha;
varying vec3 vColor;
varying float vAlpha;

void main() {
  vColor = color;
  vAlpha = aAlpha;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * (72.0 / max(18.0, -mvPosition.z));
  gl_Position = projectionMatrix * mvPosition;
}
`;

const fragmentShader = `
varying vec3 vColor;
varying float vAlpha;

void main() {
  vec2 uv = gl_PointCoord.xy - vec2(0.5);
  float dist = length(uv);
  float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
  gl_FragColor = vec4(vColor, alpha);
}
`;

export class ParticleSystem {
  readonly object: THREE.Points;
  readonly maxParticles = RENDER_TUNING.particles.maxParticles;
  activeCount = 0;

  private readonly positions = new Float32Array(this.maxParticles * 3);
  private readonly colors = new Float32Array(this.maxParticles * 3);
  private readonly sizes = new Float32Array(this.maxParticles);
  private readonly alphas = new Float32Array(this.maxParticles);
  private readonly velocities = new Float32Array(this.maxParticles * 3);
  private readonly life = new Float32Array(this.maxParticles);
  private readonly maxLife = new Float32Array(this.maxParticles);
  private cursor = 0;

  constructor() {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(this.sizes, 1));
    geometry.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphas, 1));
    geometry.setDrawRange(0, this.maxParticles);

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.object = new THREE.Points(geometry, material);
    this.object.frustumCulled = false;
  }

  spawnBurst(x: number, y: number, color: number, count: number, force = 1): void {
    const threeColor = new THREE.Color(ensureVisibleNeonColor(color));

    for (let i = 0; i < count; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const speed = (4 + Math.random() * 18) * force;
      const vertical = Math.random() * 8 * force;
      const life = 0.28 + Math.random() * 0.68;
      const size = 8 + Math.random() * 22;
      this.spawnParticle(x, y, threeColor, angle, speed, vertical, life, size);
    }
  }

  spawnTrail(x: number, y: number, color: number, count: number): void {
    const threeColor = new THREE.Color(ensureVisibleNeonColor(color));
    for (let i = 0; i < count; i += 1) {
      this.spawnParticle(
        x,
        y,
        threeColor,
        Math.random() * Math.PI * 2,
        1.5 + Math.random() * 3,
        Math.random() * 2,
        0.22 + Math.random() * 0.18,
        4 + Math.random() * 6
      );
    }
  }

  update(dt: number): void {
    this.activeCount = 0;

    for (let i = 0; i < this.maxParticles; i += 1) {
      if (this.life[i] <= 0) {
        this.alphas[i] = 0;
        continue;
      }

      this.life[i] -= dt;
      const index = i * 3;
      this.positions[index] += this.velocities[index] * dt;
      this.positions[index + 1] += this.velocities[index + 1] * dt;
      this.positions[index + 2] += this.velocities[index + 2] * dt;
      this.velocities[index] *= 1 - dt * 1.8;
      this.velocities[index + 2] *= 1 - dt * 1.8;
      this.velocities[index + 1] -= 10 * dt;

      const ratio = Math.max(0, this.life[i] / this.maxLife[i]);
      this.alphas[i] = ratio * ratio;
      this.activeCount += 1;
    }

    const geometry = this.object.geometry;
    (geometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
    (geometry.getAttribute('aAlpha') as THREE.BufferAttribute).needsUpdate = true;
  }

  private spawnParticle(
    x: number,
    y: number,
    color: THREE.Color,
    angle: number,
    speed: number,
    vertical: number,
    life: number,
    size: number
  ): void {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.maxParticles;
    const index = i * 3;

    this.positions[index] = x;
    this.positions[index + 1] = 0.85;
    this.positions[index + 2] = y;
    this.velocities[index] = Math.cos(angle) * speed;
    this.velocities[index + 1] = vertical;
    this.velocities[index + 2] = Math.sin(angle) * speed;
    this.colors[index] = color.r;
    this.colors[index + 1] = color.g;
    this.colors[index + 2] = color.b;
    this.sizes[i] = size;
    this.alphas[i] = 1;
    this.life[i] = life;
    this.maxLife[i] = life;

    const geometry = this.object.geometry;
    (geometry.getAttribute('color') as THREE.BufferAttribute).needsUpdate = true;
    (geometry.getAttribute('aSize') as THREE.BufferAttribute).needsUpdate = true;
  }
}
