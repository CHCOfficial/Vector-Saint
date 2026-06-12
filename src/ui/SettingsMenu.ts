import type { GameSettings } from '../data/tuning';
import { PLAYER_SKINS, getPlayerSkin } from '../data/playerSkins';
import { BACKGROUNDS, getBackground, type BackgroundId } from '../data/backgrounds';
import type { InputFrame } from '../input/InputManager';
import { createButton, createMenuShell, hideElement, navigateButtons, showElement } from './Menu';

type SettingKey = keyof GameSettings;

const options: Record<SettingKey, readonly string[]> = {
  bloom: ['off', 'low', 'medium', 'high'],
  bloomStrength: ['soft', 'balanced', 'radiant'],
  bloomRadius: ['tight', 'medium', 'wide'],
  antiAliasing: ['off', 'fxaa', 'smaa', 'msaa-4x', 'msaa-4x-smaa'],
  shake: ['off', 'low', 'medium', 'high'],
  flashReduction: ['false', 'true'],
  chromaticAberration: ['off', 'low'],
  backgroundIntensity: ['low', 'medium', 'high'],
  particleDensity: ['low', 'medium', 'high'],
  invertedControls: ['false', 'true'],
  palette: ['default', 'high-contrast', 'colourblind'],
  uiScale: ['small', 'medium', 'large'],
  difficultyAssist: ['normal', 'forgiving'],
  selectedSkin: PLAYER_SKINS.map((skin) => skin.id),
  selectedBackground: BACKGROUNDS.map((background) => background.id)
};

const labels: Record<SettingKey, string> = {
  bloom: 'Bloom',
  bloomStrength: 'Bloom strength',
  bloomRadius: 'Bloom radius',
  antiAliasing: 'Anti-aliasing',
  shake: 'Screen shake',
  flashReduction: 'Flash reduction',
  chromaticAberration: 'Chromatic edge',
  backgroundIntensity: 'Background',
  particleDensity: 'Particle density',
  invertedControls: 'Invert controls',
  palette: 'Colour palette',
  uiScale: 'UI scale',
  difficultyAssist: 'Difficulty assist',
  selectedSkin: 'Skin',
  selectedBackground: 'Background style'
};

export class SettingsMenu {
  readonly element: HTMLDivElement;
  private readonly buttons = new Map<SettingKey, HTMLButtonElement>();

  constructor(
    root: HTMLElement,
    private readonly settings: GameSettings,
    private readonly callbacks: {
      onChange: (settings: GameSettings) => void;
      onBack: () => void;
    }
  ) {
    const { shell, panel } = createMenuShell('Settings', 'Access and presentation');
    this.element = shell;

    const list = document.createElement('div');
    list.className = 'settings-list';

    for (const key of Object.keys(labels) as SettingKey[]) {
      const row = document.createElement('div');
      row.className = 'settings-row';
      const label = document.createElement('label');
      label.textContent = labels[key];
      const button = document.createElement('button');
      button.className = 'setting-button';
      button.type = 'button';
      button.dataset.setting = key;
      button.addEventListener('click', () => this.cycle(key, 1));
      this.buttons.set(key, button);
      row.append(label, button);
      list.append(row);
    }

    const back = createButton('Back', 'primary');
    back.addEventListener('click', callbacks.onBack);

    panel.append(list, back);
    root.append(shell);
    this.refresh();
  }

  show(): void {
    this.refresh();
    showElement(this.element);
  }

  hide(): void {
    hideElement(this.element);
  }

  update(input: InputFrame): void {
    navigateButtons(this.element, input);
    const focused = document.activeElement as HTMLButtonElement | null;
    const key = focused?.dataset.setting as SettingKey | undefined;
    if (key && input.menuLeftPressed) this.cycle(key, -1);
    if (key && input.menuRightPressed) this.cycle(key, 1);
  }

  private cycle(key: SettingKey, direction: number): void {
    const values = options[key];
    const current = String(this.settings[key]);
    const index = Math.max(0, values.indexOf(current));
    const next = values[(index + direction + values.length) % values.length];

    if (key === 'flashReduction' || key === 'invertedControls') {
      this.settings[key] = next === 'true';
    } else {
      (this.settings[key] as string) = next;
    }

    this.refresh();
    this.callbacks.onChange(this.settings);
  }

  private refresh(): void {
    for (const [key, button] of this.buttons) {
      const value = this.settings[key];
      button.textContent = this.formatValue(key, value);
    }
  }

  private formatValue(key: SettingKey, value: GameSettings[SettingKey]): string {
    if (typeof value === 'boolean') return value ? 'On' : 'Off';
    if (key === 'antiAliasing') return antiAliasingLabels[String(value)] ?? String(value);
    if (key === 'selectedBackground') return getBackground(value as BackgroundId).displayName;
    const skin = getPlayerSkin(String(value));
    if (skin.id === value) return skin.displayName;
    return value
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }
}

const antiAliasingLabels: Record<string, string> = {
  off: 'Off',
  fxaa: 'FXAA',
  smaa: 'SMAA',
  'msaa-4x': 'MSAA 4x',
  'msaa-4x-smaa': 'MSAA 4x + SMAA'
};
