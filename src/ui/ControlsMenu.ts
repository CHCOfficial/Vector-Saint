import {
  bindingToLabel,
  CONTROL_ACTIONS,
  isBindableKey,
  isBindableMouseButton,
  type ControlAction,
  type ControlBinding,
  type ControlBindings
} from '../input/controlBindings';
import type { InputFrame } from '../input/InputManager';
import { createButton, createMenuShell, hideElement, navigateButtons, showElement } from './Menu';

export class ControlsMenu {
  readonly element: HTMLDivElement;
  private readonly bindingButtons = new Map<ControlAction, HTMLButtonElement>();
  private listeningAction: ControlAction | undefined;
  private suppressMenuFrames = 0;

  constructor(
    root: HTMLElement,
    private bindings: ControlBindings,
    private readonly callbacks: {
      onRebind: (action: ControlAction, binding: ControlBinding) => void;
      onReset: () => void;
      onBack: () => void;
    }
  ) {
    const { shell, panel } = createMenuShell('Controls', 'Keyboard, mouse, and Xbox input');
    this.element = shell;
    panel.classList.add('controls-panel');

    const header = document.createElement('div');
    header.className = 'controls-header';
    header.append(document.createElement('span'), document.createElement('span'), document.createElement('span'));
    header.children[0].textContent = 'Action';
    header.children[1].textContent = 'Keyboard / Mouse';
    header.children[2].textContent = 'Xbox';

    const list = document.createElement('div');
    list.className = 'controls-list';
    for (const action of CONTROL_ACTIONS) {
      const row = document.createElement('div');
      row.className = 'control-row';

      const label = document.createElement('div');
      label.className = 'control-action';
      label.textContent = action.label;

      const binding = document.createElement('button');
      binding.className = 'control-binding-button';
      binding.type = 'button';
      binding.dataset.action = action.id;
      binding.addEventListener('click', () => this.listenFor(action.id));
      this.bindingButtons.set(action.id, binding);

      const gamepad = document.createElement('div');
      gamepad.className = 'control-gamepad';
      gamepad.textContent = action.gamepadLabel;

      row.append(label, binding, gamepad);
      list.append(row);
    }

    const actions = document.createElement('div');
    actions.className = 'controls-actions';
    const reset = createButton('Reset Defaults');
    const back = createButton('Back', 'primary');
    reset.addEventListener('click', callbacks.onReset);
    back.addEventListener('click', callbacks.onBack);
    actions.append(reset, back);

    panel.append(header, list, actions);
    root.append(shell);

    window.addEventListener('keydown', this.onCaptureKeyDown, true);
    window.addEventListener('mousedown', this.onCaptureMouseDown, true);
    this.refresh();
  }

  dispose(): void {
    window.removeEventListener('keydown', this.onCaptureKeyDown, true);
    window.removeEventListener('mousedown', this.onCaptureMouseDown, true);
  }

  setBindings(bindings: ControlBindings): void {
    this.bindings = bindings;
    this.refresh();
  }

  show(): void {
    this.refresh();
    showElement(this.element);
  }

  hide(): void {
    this.stopListening();
    hideElement(this.element);
  }

  update(input: InputFrame): void {
    if (this.listeningAction) return;
    if (this.suppressMenuFrames > 0) {
      this.suppressMenuFrames -= 1;
      return;
    }
    navigateButtons(this.element, input);
  }

  refresh(): void {
    for (const action of CONTROL_ACTIONS) {
      const button = this.bindingButtons.get(action.id);
      if (!button) continue;
      const isListening = this.listeningAction === action.id;
      button.classList.toggle('is-listening', isListening);
      button.textContent = isListening ? 'Press key or mouse' : bindingToLabel(this.bindings[action.id]);
    }
  }

  private listenFor(action: ControlAction): void {
    this.listeningAction = action;
    this.refresh();
  }

  private stopListening(): void {
    this.listeningAction = undefined;
    this.refresh();
  }

  private commitBinding(binding: ControlBinding): void {
    if (!this.listeningAction) return;
    const action = this.listeningAction;
    this.listeningAction = undefined;
    this.suppressMenuFrames = 2;
    this.callbacks.onRebind(action, binding);
    this.refresh();
  }

  private readonly onCaptureKeyDown = (event: KeyboardEvent): void => {
    if (!this.listeningAction || this.element.classList.contains('ui-hidden')) return;
    event.preventDefault();
    event.stopPropagation();
    if (!isBindableKey(event.code)) return;
    this.commitBinding({ kind: 'key', code: event.code });
  };

  private readonly onCaptureMouseDown = (event: MouseEvent): void => {
    if (!this.listeningAction || this.element.classList.contains('ui-hidden')) return;
    event.preventDefault();
    event.stopPropagation();
    if (!isBindableMouseButton(event.button)) return;
    this.commitBinding({ kind: 'mouse', button: event.button });
  };
}
