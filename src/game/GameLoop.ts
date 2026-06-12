import { LOOP_TUNING } from '../data/tuning';

export type FixedUpdate = (dt: number) => void;
export type FrameRender = (alpha: number, dt: number) => void;

export class GameLoop {
  private rafId = 0;
  private running = false;
  private previousTime = 0;
  private accumulator = 0;

  constructor(
    private readonly fixedUpdate: FixedUpdate,
    private readonly render: FrameRender
  ) {}

  start(): void {
    if (this.running) return;
    this.running = true;
    this.previousTime = performance.now();
    this.rafId = requestAnimationFrame(this.tick);
  }

  stop(): void {
    this.running = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }

  private readonly tick = (time: number): void => {
    if (!this.running) return;

    const rawDelta = (time - this.previousTime) / 1000;
    const frameDelta = Math.min(rawDelta, LOOP_TUNING.maxFrameDelta);
    this.previousTime = time;
    this.accumulator += frameDelta;

    let steps = 0;
    while (this.accumulator >= LOOP_TUNING.fixedDelta && steps < LOOP_TUNING.maxFixedSteps) {
      this.fixedUpdate(LOOP_TUNING.fixedDelta);
      this.accumulator -= LOOP_TUNING.fixedDelta;
      steps += 1;
    }

    if (steps >= LOOP_TUNING.maxFixedSteps) {
      this.accumulator = 0;
    }

    this.render(this.accumulator / LOOP_TUNING.fixedDelta, frameDelta);
    this.rafId = requestAnimationFrame(this.tick);
  };
}
