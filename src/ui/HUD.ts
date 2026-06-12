export interface HUDStats {
  score: number;
  highScore: number;
  multiplier: number;
  wave: number;
  healthRatio: number;
  dashRatio: number;
  dashCharges: number;
  bombRatio: number;
  fps: number;
  enemyCount: number;
  bulletCount: number;
  pickupCount: number;
  particleCount: number;
  drawCalls: number;
  skinName: string;
  skinPrimary: string;
  skinSecondary: string;
  skinAccent: string;
  weaponColor: string;
  weaponName: string;
  pilotActive: boolean;
  signatureLabel: string;
  signatureRatio: number;
  signatureReady: boolean;
}

export class HUD {
  readonly element: HTMLDivElement;
  private readonly scoreValue: HTMLDivElement;
  private readonly multiplierValue: HTMLSpanElement;
  private readonly highScoreValue: HTMLSpanElement;
  private readonly waveValue: HTMLSpanElement;
  private readonly skinValue: HTMLSpanElement;
  private readonly weaponValue: HTMLSpanElement;
  private readonly healthBar: HTMLDivElement;
  private readonly dashBar: HTMLDivElement;
  private readonly bombBar: HTMLDivElement;
  private readonly signatureMeter: HTMLDivElement;
  private readonly signatureBar: HTMLDivElement;
  private readonly signatureLabel: HTMLSpanElement;
  private readonly dashLabel: HTMLSpanElement;
  private readonly debug: HTMLDivElement;

  constructor(root: HTMLElement) {
    this.element = document.createElement('div');
    this.element.className = 'hud';

    const cluster = document.createElement('div');
    cluster.className = 'hud-cluster';

    const scoreLine = document.createElement('div');
    scoreLine.className = 'score-line';
    this.scoreValue = document.createElement('div');
    this.scoreValue.className = 'score-value';
    this.scoreValue.textContent = '0';
    this.multiplierValue = document.createElement('span');
    this.multiplierValue.className = 'multiplier';
    this.multiplierValue.textContent = 'x1.0';
    scoreLine.append(this.scoreValue, this.multiplierValue);

    const meta = document.createElement('div');
    meta.className = 'hud-meta';
    this.highScoreValue = document.createElement('span');
    this.waveValue = document.createElement('span');
    this.skinValue = document.createElement('span');
    this.weaponValue = document.createElement('span');
    this.weaponValue.className = 'hud-weapon';
    meta.append(this.highScoreValue, this.waveValue, this.skinValue, this.weaponValue);

    const bars = document.createElement('div');
    bars.className = 'hud-bars';
    this.healthBar = this.createBar(bars, 'HP', 'meter-health').fill;
    const dashMeter = this.createBar(bars, 'DASH', 'meter-dash');
    this.dashBar = dashMeter.fill;
    this.dashLabel = dashMeter.label;
    this.bombBar = this.createBar(bars, 'BOMB', 'meter-bomb').fill;
    const signatureMeter = this.createBar(bars, 'SIGN', 'meter-signature');
    this.signatureMeter = signatureMeter.meter;
    this.signatureBar = signatureMeter.fill;
    this.signatureLabel = signatureMeter.label;

    cluster.append(scoreLine, meta, bars);

    this.debug = document.createElement('div');
    this.debug.className = 'debug-overlay';

    this.element.append(cluster, this.debug);
    root.append(this.element);
  }

  update(stats: HUDStats): void {
    this.scoreValue.textContent = stats.score.toLocaleString();
    this.multiplierValue.textContent = `x${stats.multiplier.toFixed(1)}`;
    this.highScoreValue.textContent = `HI ${stats.highScore.toLocaleString()}`;
    this.waveValue.textContent = `WAVE ${stats.wave}`;
    this.skinValue.textContent = stats.skinName.toUpperCase();
    this.weaponValue.textContent = stats.weaponName;
    this.element.style.setProperty('--skin-primary', stats.skinPrimary);
    this.element.style.setProperty('--skin-secondary', stats.skinSecondary);
    this.element.style.setProperty('--skin-accent', stats.skinAccent);
    this.element.style.setProperty('--weapon-color', stats.weaponColor);
    this.dashLabel.textContent = `DASH ${stats.dashCharges}`;
    this.signatureLabel.textContent = stats.signatureLabel;
    this.signatureMeter.classList.toggle('is-ready', stats.signatureReady);
    this.healthBar.style.transform = `scaleX(${stats.healthRatio.toFixed(3)})`;
    this.dashBar.style.transform = `scaleX(${stats.dashRatio.toFixed(3)})`;
    this.bombBar.style.transform = `scaleX(${stats.bombRatio.toFixed(3)})`;
    this.signatureBar.style.transform = `scaleX(${Math.max(0, Math.min(1, stats.signatureRatio)).toFixed(3)})`;
    this.debug.innerHTML = [
      `FPS ${Math.round(stats.fps)}`,
      `ENEMY ${stats.enemyCount}`,
      `BULLET ${stats.bulletCount}`,
      `PICKUP ${stats.pickupCount}`,
      `PARTICLE ${stats.particleCount}`,
      `DRAW ${stats.drawCalls}`,
      `PILOT ${stats.pilotActive ? 'AI' : 'MANUAL'}`
    ].join('<br />');
  }

  show(): void {
    this.element.classList.remove('ui-hidden');
  }

  hide(): void {
    this.element.classList.add('ui-hidden');
  }

  private createBar(
    container: HTMLElement,
    labelText: string,
    className: string
  ): { meter: HTMLDivElement; fill: HTMLDivElement; label: HTMLSpanElement } {
    const meter = document.createElement('div');
    meter.className = `meter ${className}`;

    const label = document.createElement('span');
    label.className = 'meter-label';
    label.textContent = labelText;

    const bar = document.createElement('div');
    bar.className = 'bar';
    const fill = document.createElement('div');
    fill.className = 'bar-fill';
    bar.append(fill);
    meter.append(label, bar);
    container.append(meter);
    return { meter, fill, label };
  }
}
