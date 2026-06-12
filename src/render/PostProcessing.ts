import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import type { AntiAliasingMode, GameSettings } from '../data/tuning';
import { VISUAL_TUNING } from '../data/visualTuning';

const MSAA_SAMPLES: Record<AntiAliasingMode, number> = {
  off: 0,
  fxaa: 0,
  smaa: 0,
  'msaa-4x': 4,
  'msaa-4x-smaa': 4
};

const presentationShader = {
  uniforms: {
    tDiffuse: { value: null },
    amount: { value: 0 },
    vignette: { value: 0.26 },
    grain: { value: 0.018 },
    time: { value: 0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float amount;
    uniform float vignette;
    uniform float grain;
    uniform float time;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    void main() {
      vec2 centered = vUv - vec2(0.5);
      vec2 offset = centered * amount;
      vec4 base = texture2D(tDiffuse, vUv);
      float r = texture2D(tDiffuse, vUv + offset).r;
      float b = texture2D(tDiffuse, vUv - offset).b;
      vec3 color = vec3(r, base.g, b);
      float vig = smoothstep(0.86, 0.18, length(centered));
      color *= mix(1.0 - vignette, 1.0, vig);
      color += (hash(vUv * vec2(1920.0, 1080.0) + time) - 0.5) * grain;
      gl_FragColor = vec4(color, base.a);
    }
  `
};

export class PostProcessing {
  readonly composer: EffectComposer;
  private readonly bloomPass: UnrealBloomPass;
  private readonly presentationPass: ShaderPass;
  private readonly fxaaPass: ShaderPass;
  private readonly smaaPass: SMAAPass;
  private currentSamples = -1;
  private multisampledTargetsSupported: boolean | undefined;
  private width = 1;
  private height = 1;

  constructor(
    private readonly renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.Camera
  ) {
    const renderTarget = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType });
    renderTarget.texture.name = 'VectorSaint.composer.rt1';
    this.composer = new EffectComposer(renderer, renderTarget);
    this.composer.addPass(new RenderPass(scene, camera));
    this.bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.8, 0.35, 0.22);
    this.presentationPass = new ShaderPass(presentationShader);
    this.fxaaPass = new ShaderPass(FXAAShader);
    this.smaaPass = new SMAAPass(1, 1);
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(this.presentationPass);
    this.composer.addPass(this.smaaPass);
    this.composer.addPass(this.fxaaPass);
  }

  resize(width: number, height: number): void {
    this.width = width;
    this.height = height;
    this.composer.setSize(width, height);
    this.bloomPass.setSize(width, height);
    this.updateFxaaResolution();
  }

  applySettings(settings: GameSettings): void {
    const bloom = VISUAL_TUNING.bloom[settings.bloom];
    const strengthScale = VISUAL_TUNING.bloomStrengthScale[settings.bloomStrength];
    const radiusScale = VISUAL_TUNING.bloomRadiusScale[settings.bloomRadius];
    this.bloomPass.strength = bloom.strength * strengthScale;
    this.bloomPass.radius = bloom.radius * radiusScale;
    this.bloomPass.threshold = bloom.threshold;
    this.presentationPass.uniforms.amount.value =
      VISUAL_TUNING.chromaticAberration[settings.chromaticAberration];
    this.presentationPass.uniforms.vignette.value =
      settings.backgroundIntensity === 'low' ? 0.2 : settings.backgroundIntensity === 'high' ? 0.32 : 0.26;
    this.applyAntiAliasing(settings.antiAliasing);
  }

  render(dt: number): void {
    this.presentationPass.uniforms.time.value += dt;
    this.composer.render();
  }

  private applyAntiAliasing(mode: AntiAliasingMode): void {
    const canUseMsaa = this.supportsMultisampledTargets();
    this.fxaaPass.enabled = mode === 'fxaa';
    this.smaaPass.enabled =
      mode === 'smaa' ||
      mode === 'msaa-4x-smaa' ||
      (mode === 'msaa-4x' && !canUseMsaa);
    this.setComposerSamples(MSAA_SAMPLES[mode]);
  }

  private setComposerSamples(samples: number): void {
    const resolvedSamples = this.supportsMultisampledTargets() ? samples : 0;
    if (resolvedSamples === this.currentSamples) return;

    this.currentSamples = resolvedSamples;
    this.composer.renderTarget1.samples = resolvedSamples;
    this.composer.renderTarget2.samples = resolvedSamples;
    this.composer.renderTarget1.dispose();
    this.composer.renderTarget2.dispose();
  }

  private updateFxaaResolution(): void {
    const pixelRatio = this.renderer.getPixelRatio();
    this.fxaaPass.uniforms.resolution.value.set(
      1 / Math.max(1, this.width * pixelRatio),
      1 / Math.max(1, this.height * pixelRatio)
    );
  }

  private supportsMultisampledTargets(): boolean {
    if (this.multisampledTargetsSupported !== undefined) return this.multisampledTargetsSupported;
    const context = this.renderer.getContext();
    this.multisampledTargetsSupported =
      typeof WebGL2RenderingContext !== 'undefined' &&
      context instanceof WebGL2RenderingContext &&
      (Boolean(context.getExtension('EXT_color_buffer_float')) ||
        Boolean(context.getExtension('EXT_color_buffer_half_float')));
    return this.multisampledTargetsSupported;
  }
}
