export class AudioManager {
  private context: AudioContext | undefined;
  private master: GainNode | undefined;

  resume(): void {
    if (!this.context) {
      const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
      this.context = new AudioContextCtor();
      this.master = this.context.createGain();
      this.master.gain.value = 0.18;
      this.master.connect(this.context.destination);
    }

    if (this.context.state === 'suspended') {
      void this.context.resume();
    }
  }

  shoot(): void {
    this.blip(360, 0.035, 'square', 0.22);
  }

  enemyKilled(): void {
    this.blip(180, 0.08, 'sawtooth', 0.32, 760);
  }

  bomb(): void {
    this.blip(90, 0.3, 'triangle', 0.7, 38);
  }

  dash(): void {
    this.blip(520, 0.055, 'sawtooth', 0.28, 240);
  }

  playerHit(): void {
    this.blip(120, 0.18, 'sawtooth', 0.56, 55);
  }

  achievement(): void {
    this.blip(640, 0.12, 'triangle', 0.38, 920);
  }

  pickup(): void {
    this.blip(820, 0.06, 'sine', 0.22, 1140);
  }

  menuMove(): void {
    this.blip(420, 0.025, 'triangle', 0.12, 520);
  }

  menuSelect(): void {
    this.blip(540, 0.045, 'sine', 0.16, 820);
  }

  private blip(
    frequency: number,
    duration: number,
    type: OscillatorType,
    gainValue: number,
    endFrequency = frequency
  ): void {
    if (!this.context || !this.master) return;

    const now = this.context.currentTime;
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, endFrequency), now + duration);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(gainValue, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    oscillator.connect(gain);
    gain.connect(this.master);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.02);
  }
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
