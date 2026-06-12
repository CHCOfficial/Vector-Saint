import { Game } from './game/Game';

const canvas = document.querySelector<HTMLCanvasElement>('#game-canvas');
const uiRoot = document.querySelector<HTMLElement>('#ui-root');
const flashLayer = document.querySelector<HTMLElement>('#flash-layer');

if (!canvas || !uiRoot || !flashLayer) {
  throw new Error('Vector Saint boot failed: required DOM roots are missing.');
}

const game = new Game(canvas, uiRoot, flashLayer);
game.start();

window.addEventListener('beforeunload', () => {
  game.dispose();
});
