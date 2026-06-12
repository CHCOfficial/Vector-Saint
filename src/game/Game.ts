import '../style.css';
import { AudioManager } from '../audio/AudioManager';
import type { GameSettings } from '../data/tuning';
import {
  getPlayerSkin,
  skinColorToCss,
  skinReadableAccentToCss,
  type PlayerSkinId
} from '../data/playerSkins';
import {
  backgroundColorToCss,
  getBackground,
  type BackgroundId
} from '../data/backgrounds';
import {
  bindingEquals,
  cloneControlBinding,
  cloneControlBindings,
  DEFAULT_CONTROL_BINDINGS,
  type ControlAction,
  type ControlBinding
} from '../input/controlBindings';
import { RELIC_TUNING, type RelicDefinition, type RelicId } from '../data/relics';
import { weaponColorForSkin, type WeaponDefinition } from '../data/weapons';
import { InputManager } from '../input/InputManager';
import { Renderer } from '../render/Renderer';
import { AchievementSystem } from './AchievementSystem';
import { CollisionSystem } from './CollisionSystem';
import { EntityManager } from './EntityManager';
import type { GameEvent } from './GameEvents';
import { GameLoop } from './GameLoop';
import { GameState } from './GameState';
import { Player } from './Player';
import { SaveSystem } from './SaveSystem';
import { ScoreSystem } from './ScoreSystem';
import { SecretPilot } from './SecretPilot';
import { SkinAbilitySystem } from './SkinAbilitySystem';
import { RelicSystem } from './RelicSystem';
import { WaveDirector } from './WaveDirector';
import { Random } from '../utils/random';
import { HUD } from '../ui/HUD';
import { Menu } from '../ui/Menu';
import { PauseMenu } from '../ui/PauseMenu';
import { SettingsMenu } from '../ui/SettingsMenu';
import { GameOverScreen } from '../ui/GameOverScreen';
import { ToastSystem } from '../ui/ToastSystem';
import { SkinSelectMenu } from '../ui/SkinSelectMenu';
import { AchievementsMenu } from '../ui/AchievementsMenu';
import { ControlsMenu } from '../ui/ControlsMenu';
import { LeaderboardMenu } from '../ui/LeaderboardMenu';
import { InitialsEntryScreen } from '../ui/InitialsEntryScreen';
import { RelicDraftMenu } from '../ui/RelicDraftMenu';

export class Game {
  readonly saveSystem = new SaveSystem();
  readonly settings: GameSettings = this.saveSystem.loadSettings();
  readonly controlBindings = this.saveSystem.loadControlBindings();
  readonly input: InputManager;
  readonly renderer: Renderer;
  readonly entities = new EntityManager();
  readonly player = new Player();
  readonly secretPilot = new SecretPilot();
  readonly waveDirector = new WaveDirector();
  readonly collision = new CollisionSystem();
  readonly score = new ScoreSystem(this.saveSystem);
  readonly achievements = new AchievementSystem(this.saveSystem);
  readonly audio = new AudioManager();
  readonly skinAbilities = new SkinAbilitySystem();
  readonly relics = new RelicSystem();
  readonly hud: HUD;
  readonly mainMenu: Menu;
  readonly pauseMenu: PauseMenu;
  readonly settingsMenu: SettingsMenu;
  readonly skinSelectMenu: SkinSelectMenu;
  readonly achievementsMenu: AchievementsMenu;
  readonly leaderboardMenu: LeaderboardMenu;
  readonly controlsMenu: ControlsMenu;
  readonly initialsEntryScreen: InitialsEntryScreen;
  readonly relicDraftMenu: RelicDraftMenu;
  readonly gameOverScreen: GameOverScreen;
  readonly toasts: ToastSystem;

  state = GameState.Boot;
  previousState = GameState.MainMenu;
  private readonly random = new Random();
  private readonly loop: GameLoop;
  private readonly events: GameEvent[] = [];
  private fps = 60;
  private bombKillsThisRun = 0;
  private reachedWave = 1;
  private pendingGameOverScore = 0;
  private pendingGameOverWave = 1;
  private inputGraceTimer = 0;
  private relicDraftAutoTimer = 0;
  private currentRelicDraft: RelicDefinition[] = [];

  constructor(canvas: HTMLCanvasElement, uiRoot: HTMLElement, flashLayer: HTMLElement) {
    this.input = new InputManager(this.controlBindings, canvas);
    this.renderer = new Renderer(canvas, flashLayer, this.settings);
    this.hud = new HUD(uiRoot);
    this.toasts = new ToastSystem(uiRoot);

    this.mainMenu = new Menu(uiRoot, {
      onStart: () => this.startRun(),
      onSkinSelect: () => this.openSkinSelect(GameState.MainMenu),
      onAchievements: () => this.openAchievements(GameState.MainMenu),
      onLeaderboard: () => this.openLeaderboard(GameState.MainMenu),
      onControls: () => this.openControls(GameState.MainMenu),
      onSettings: () => this.openSettings(GameState.MainMenu)
    });
    this.pauseMenu = new PauseMenu(uiRoot, {
      onResume: () => this.resume(),
      onRestart: () => this.startRun(),
      onSkinSelect: () => this.openSkinSelect(GameState.Paused),
      onSettings: () => this.openSettings(GameState.Paused),
      onMainMenu: () => this.showMainMenu()
    });
    this.settingsMenu = new SettingsMenu(uiRoot, this.settings, {
      onChange: () => this.persistSettings(),
      onBack: () => this.closeSettings()
    });
    this.skinSelectMenu = new SkinSelectMenu(uiRoot, this.settings, {
      onChange: (skinId) => this.selectSkin(skinId),
      onBackgroundChange: (backgroundId) => this.selectBackground(backgroundId),
      onBack: () => this.closeSkinSelect()
    });
    this.achievementsMenu = new AchievementsMenu(uiRoot, () => this.achievements.unlocked, {
      onBack: () => this.closeAchievements()
    });
    this.leaderboardMenu = new LeaderboardMenu(uiRoot, () => this.saveSystem.loadLeaderboard(), {
      onBack: () => this.closeLeaderboard()
    });
    this.controlsMenu = new ControlsMenu(uiRoot, this.controlBindings, {
      onRebind: (action, binding) => this.setControlBinding(action, binding),
      onReset: () => this.resetControlBindings(),
      onBack: () => this.closeControls()
    });
    this.initialsEntryScreen = new InitialsEntryScreen(uiRoot, {
      onSubmit: (initials) => this.submitInitials(initials)
    });
    this.relicDraftMenu = new RelicDraftMenu(uiRoot, {
      onSelect: (id) => this.selectRelic(id)
    });
    this.gameOverScreen = new GameOverScreen(uiRoot, {
      onRetry: () => this.startRun(),
      onMainMenu: () => this.showMainMenu()
    });

    this.loop = new GameLoop(
      (dt) => this.fixedUpdate(dt),
      (_alpha, dt) => this.render(dt)
    );

    this.applySettingsToDocument();
    this.transition(GameState.MainMenu);
  }

  start(): void {
    this.loop.start();
  }

  dispose(): void {
    this.loop.stop();
    this.input.dispose();
    this.controlsMenu.dispose();
    this.initialsEntryScreen.dispose();
    this.renderer.dispose();
  }

  startRun(): void {
    this.audio.resume();
    this.entities.reset();
    this.player.reset(this.settings.difficultyAssist);
    this.waveDirector.reset();
    this.score.reset();
    this.achievements.resetRuntime();
    this.secretPilot.resetRun();
    this.skinAbilities.reset(this.settings.selectedSkin);
    this.relics.reset();
    this.events.length = 0;
    this.bombKillsThisRun = 0;
    this.reachedWave = 1;
    this.currentRelicDraft = [];
    this.relicDraftAutoTimer = 0;
    this.inputGraceTimer = 0.18;
    (document.activeElement as HTMLElement | null)?.blur();
    this.transition(GameState.Playing);
  }

  pause(): void {
    if (this.state !== GameState.Playing) return;
    this.transition(GameState.Paused);
  }

  resume(): void {
    if (this.state !== GameState.Paused) return;
    this.inputGraceTimer = 0.16;
    (document.activeElement as HTMLElement | null)?.blur();
    this.transition(GameState.Playing);
  }

  showMainMenu(): void {
    this.transition(GameState.MainMenu);
  }

  openSettings(previousState: GameState): void {
    this.previousState = previousState;
    this.transition(GameState.Settings);
  }

  closeSettings(): void {
    this.transition(this.previousState);
  }

  openSkinSelect(previousState: GameState): void {
    this.previousState = previousState;
    this.transition(GameState.SkinSelect);
  }

  closeSkinSelect(): void {
    this.transition(this.previousState);
  }

  openAchievements(previousState: GameState): void {
    this.previousState = previousState;
    this.transition(GameState.Achievements);
  }

  closeAchievements(): void {
    this.transition(this.previousState);
  }

  openLeaderboard(previousState: GameState): void {
    this.previousState = previousState;
    this.transition(GameState.Leaderboard);
  }

  closeLeaderboard(): void {
    this.transition(this.previousState);
  }

  openControls(previousState: GameState): void {
    this.previousState = previousState;
    this.transition(GameState.Controls);
  }

  closeControls(): void {
    this.transition(this.previousState);
  }

  private fixedUpdate(dt: number): void {
    const playerScreen = this.renderer.playerScreenPosition(this.player);
    this.input.setAimOrigin(playerScreen.x, playerScreen.y);
    const input = this.input.update();
    if (this.inputGraceTimer > 0) {
      this.inputGraceTimer = Math.max(0, this.inputGraceTimer - dt);
      input.pausePressed = false;
      input.backPressed = false;
      input.confirmPressed = false;
      input.menuUpPressed = false;
      input.menuDownPressed = false;
      input.menuLeftPressed = false;
      input.menuRightPressed = false;
    }

    if (
      input.secretPilotPressed &&
      this.state !== GameState.Controls &&
      this.state !== GameState.InitialsEntry &&
      this.state !== GameState.RelicDraft
    ) {
      this.toggleSecretPilot();
    }

    if (this.state === GameState.MainMenu) {
      this.mainMenu.update(input);
      return;
    }

    if (this.state === GameState.Settings) {
      if (input.backPressed) this.closeSettings();
      this.settingsMenu.update(input);
      return;
    }

    if (this.state === GameState.SkinSelect) {
      if (input.backPressed) this.closeSkinSelect();
      this.skinSelectMenu.update(input);
      return;
    }

    if (this.state === GameState.Achievements) {
      if (input.backPressed) this.closeAchievements();
      this.achievementsMenu.update(input);
      return;
    }

    if (this.state === GameState.Leaderboard) {
      if (input.backPressed) this.closeLeaderboard();
      this.leaderboardMenu.update(input);
      return;
    }

    if (this.state === GameState.Controls) {
      if (input.backPressed) this.closeControls();
      this.controlsMenu.update(input);
      return;
    }

    if (this.state === GameState.InitialsEntry) {
      this.initialsEntryScreen.update(input);
      return;
    }

    if (this.state === GameState.RelicDraft) {
      if (this.secretPilot.enabled) {
        this.relicDraftAutoTimer -= dt;
        if (this.relicDraftAutoTimer <= 0 && this.currentRelicDraft[0]) {
          this.selectRelic(this.currentRelicDraft[0].id);
        }
        return;
      }
      this.relicDraftMenu.update(input);
      return;
    }

    if (this.state === GameState.Paused) {
      if (input.pausePressed || input.backPressed) this.resume();
      this.pauseMenu.update(input);
      return;
    }

    if (this.state === GameState.GameOver) {
      if (this.secretPilot.shouldRetry(dt)) {
        this.startRun();
        return;
      }
      this.gameOverScreen.update(input);
      return;
    }

    if (this.state !== GameState.Playing) return;

    if (input.pausePressed) {
      this.pause();
      return;
    }

    if (this.settings.invertedControls) {
      input.move.y *= -1;
      input.aim.y *= -1;
    }

    this.player.resetFrameModifiers();
    this.skinAbilities.setSkin(this.settings.selectedSkin, this.player);
    this.skinAbilities.preparePlayer(this.player, dt);
    this.relics.preparePlayer(this.player);
    this.secretPilot.apply(input, this.player, this.entities, dt);
    this.player.update(input, dt);

    if (input.previousWeaponPressed) {
      this.player.cycleWeapon(-1);
    }

    if (input.nextWeaponPressed) {
      this.player.cycleWeapon(1);
    }

    if (this.player.dashStarted) {
      this.emit({ type: 'dash', x: this.player.position.x, y: this.player.position.y });
      this.skinAbilities.onDash(this.player, this.settings, (event) => this.emit(event));
      this.relics.onDash(this.player, this.entities, (event) => this.emit(event));
    }

    if (input.shoot && this.player.tryShoot()) {
      this.fireWeapon(this.player.weapon);
      this.audio.shoot();
    }

    if (input.bombPressed && this.player.tryBomb()) {
      this.relics.onBomb(this.player, (event) => this.emit(event));
      const kills = this.collision.applyBomb(
        this.entities,
        this.player,
        this.score,
        (event) => this.emit(event),
        this.random,
        this.settings,
        this.relics
      );
      this.bombKillsThisRun = Math.max(this.bombKillsThisRun, kills);
      this.audio.bomb();
      if (kills >= 8) this.unlock('bomb-doctrine');
    }

    this.waveDirector.update(
      dt,
      this.entities,
      this.random,
      this.settings.difficultyAssist,
      this.player.position
    );
    this.relics.update(dt);
    this.skinAbilities.applyEnemyModifiers(this.entities, this.settings, dt);
    this.entities.update(dt, this.player);
    this.skinAbilities.updateNearMisses(
      this.entities,
      this.player,
      this.settings,
      this.random,
      (event) => this.emit(event)
    );
    this.collision.update(
      this.entities,
      this.player,
      this.score,
      (event) => this.emit(event),
      this.random,
      this.settings,
      this.skinAbilities,
      this.relics
    );
    this.relics.applyScoreModifiers(this.score);
    this.score.update(dt, this.settings.difficultyAssist);
    this.checkAchievements();

    if (!this.player.active) {
      this.endRun();
      return;
    }

    if (this.relics.shouldOfferDraft(this.waveDirector.wave)) {
      this.openRelicDraft(this.waveDirector.wave);
    }
  }

  private render(dt: number): void {
    const events = this.events.splice(0, this.events.length);
    this.renderer.render(
      {
        player: this.player,
        entities: this.entities,
        settings: this.settings,
        multiplier: this.score.multiplier,
        wave: this.waveDirector.wave
      },
      events,
      dt
    );

    const skin = getPlayerSkin(this.settings.selectedSkin);
    const weaponColor = weaponColorForSkin(this.player.weaponId, skin);
    const signatureHud = this.skinAbilities.getHudState();
    this.fps = this.fps * 0.9 + (1 / Math.max(0.001, dt)) * 0.1;
    this.hud.update({
      score: this.score.score,
      highScore: this.score.highScore,
      multiplier: this.score.multiplier,
      wave: this.waveDirector.wave,
      healthRatio: this.player.healthRatio,
      dashRatio: this.player.dashRatio,
      dashCharges: this.player.dashCharges,
      bombRatio: this.player.bombRatio,
      fps: this.fps,
      enemyCount: this.entities.activeEnemyCount,
      bulletCount: this.entities.activeBulletCount,
      pickupCount: this.entities.activePickupCount,
      particleCount: this.renderer.particleCount,
      drawCalls: this.renderer.drawCallCount,
      skinName: skin.displayName,
      skinPrimary: skinColorToCss(skin.primaryColor),
      skinSecondary: skinColorToCss(skin.secondaryColor),
      skinAccent: skinReadableAccentToCss(skin),
      weaponColor: skinColorToCss(weaponColor),
      weaponName: this.player.weapon.shortLabel,
      pilotActive: this.secretPilot.enabled,
      signatureLabel: signatureHud.label,
      signatureRatio: signatureHud.ratio,
      signatureReady: signatureHud.ready
    });
  }

  private fireWeapon(weapon: WeaponDefinition): void {
    const skin = getPlayerSkin(this.settings.selectedSkin);
    const weaponColor = weaponColorForSkin(weapon.id, skin);

    if (weapon.kind === 'beam') {
      this.collision.applyBeam(
        this.entities,
        this.player.position.x,
        this.player.position.y,
        this.player.aim.x,
        this.player.aim.y,
        weapon,
        this.score,
        (event) => this.emit(event),
        this.random,
        weaponColor,
        this.relics
      );
      return;
    }

    const projectile = weapon.projectile;
    if (!projectile) return;

    const baseAngle = Math.atan2(this.player.aim.y, this.player.aim.x);
    const pelletCount = projectile.pelletCount;
    const middle = (pelletCount - 1) * 0.5;
    for (let i = 0; i < pelletCount; i += 1) {
      const t = pelletCount <= 1 ? 0 : (i - middle) / middle;
      const angle = baseAngle + t * projectile.spreadRadians * 0.5;
      const aimX = Math.cos(angle);
      const aimY = Math.sin(angle);
      const skinOptions = this.skinAbilities.decorateProjectileOptions(weapon, {
        speed: projectile.speed,
        life: projectile.life,
        damage: projectile.damage,
        radius: projectile.radius,
        magnetRadius: projectile.magnetRadius,
        magnetStrength: projectile.magnetStrength,
        color: weaponColor,
        weaponId: weapon.id
      }, this.score);
      const options = this.relics.modifyProjectileOptions(skinOptions);
      this.entities.spawnBullet(this.player.position.x, this.player.position.y, aimX, aimY, options);
    }

    this.emit({
      type: 'shoot',
      x: this.player.position.x,
      y: this.player.position.y,
      aimX: this.player.aim.x,
      aimY: this.player.aim.y,
      weaponId: weapon.id,
      pelletCount,
      color: weaponColor
    });
  }

  private emit(event: GameEvent): void {
    this.events.push(event);

    if (event.type === 'enemyKilled') {
      this.skinAbilities.onEnemyKilled(event, this.entities, this.random, (abilityEvent) => this.emit(abilityEvent));
      this.audio.enemyKilled();
      if (event.enemyType === 'splitter') this.unlock('saint-of-splinters');
    } else if (event.type === 'dash') {
      this.audio.dash();
    } else if (event.type === 'playerHit') {
      this.audio.playerHit();
    } else if (event.type === 'pickupCollected') {
      this.audio.pickup();
    } else if (event.type === 'achievementUnlocked') {
      this.audio.achievement();
      this.toasts.showAchievement(event.achievement);
    }
  }

  private checkAchievements(): void {
    if (this.score.kills >= 1) this.unlock('first-light');
    if (this.score.highestMultiplier >= 5) this.unlock('clean-arc');
    if (this.score.highestMultiplier >= 10) this.unlock('true-vector');
    if (this.score.score >= 10000) this.unlock('ten-thousand-sparks');
    if (this.score.score >= 50000) this.unlock('signal-saint');
    if (this.score.kills >= 100) this.unlock('hundred-fold');

    if (this.waveDirector.wave > this.reachedWave) {
      this.reachedWave = this.waveDirector.wave;
      if (this.reachedWave >= 5) this.unlock('wave-runner');
    }
  }

  private unlock(id: string): void {
    const achievement = this.achievements.tryUnlock(id);
    if (achievement) {
      this.emit({ type: 'achievementUnlocked', achievement });
    }
  }

  private openRelicDraft(wave: number): void {
    this.entities.enemies.deactivateAll();
    this.entities.bullets.deactivateAll();
    this.player.invulnerableTimer = Math.max(
      this.player.invulnerableTimer,
      RELIC_TUNING.safePauseInvulnerability
    );
    this.currentRelicDraft = this.relics.createDraft(wave, this.random);
    if (this.currentRelicDraft.length === 0) return;

    this.relicDraftMenu.setChoices(wave, this.currentRelicDraft);
    this.relicDraftAutoTimer = 0.35;
    this.inputGraceTimer = 0.16;
    this.transition(GameState.RelicDraft);
  }

  private selectRelic(id: RelicId): void {
    this.relics.activate(id, this.player, this.score);
    this.pauseMenu.setRelics(this.relics.activeSummaries(), this.relics.overdriveCharge);
    this.currentRelicDraft = [];
    this.inputGraceTimer = 0.16;
    (document.activeElement as HTMLElement | null)?.blur();
    this.transition(GameState.Playing);
  }

  private endRun(): void {
    this.pendingGameOverScore = this.score.score;
    this.pendingGameOverWave = this.waveDirector.wave;
    this.secretPilot.beginRetryDelay();

    if (
      !this.secretPilot.enabled &&
      this.saveSystem.qualifiesForLeaderboard(this.pendingGameOverScore, this.pendingGameOverWave)
    ) {
      this.initialsEntryScreen.setRun(this.pendingGameOverScore, this.pendingGameOverWave);
      this.transition(GameState.InitialsEntry);
      return;
    }

    this.showGameOverResults();
  }

  private submitInitials(initials: string): void {
    this.saveSystem.submitLeaderboardEntry(
      initials,
      this.pendingGameOverScore,
      this.pendingGameOverWave
    );
    this.score.highScore = this.saveSystem.loadHighScore();
    this.showGameOverResults();
  }

  private showGameOverResults(): void {
    this.gameOverScreen.setResults(
      this.pendingGameOverScore,
      this.pendingGameOverWave,
      this.score.highScore,
      this.relics.activeSummaries(),
      this.relics.overdriveCharge
    );
    this.transition(GameState.GameOver);
  }

  private toggleSecretPilot(): void {
    const enabled = this.secretPilot.toggle();
    this.toasts.showMessage(
      enabled ? 'Secret pilot online' : 'Secret pilot offline',
      enabled ? 'Achievement protocol armed' : 'Manual control restored'
    );
    if (enabled && this.state !== GameState.Playing) {
      this.startRun();
    }
  }

  private transition(next: GameState): void {
    this.state = next;
    this.mainMenu.hide();
    this.pauseMenu.hide();
    this.settingsMenu.hide();
    this.skinSelectMenu.hide();
    this.achievementsMenu.hide();
    this.leaderboardMenu.hide();
    this.controlsMenu.hide();
    this.initialsEntryScreen.hide();
    this.relicDraftMenu.hide();
    this.gameOverScreen.hide();

    if (next === GameState.MainMenu) {
      this.hud.hide();
      this.mainMenu.setHighScore(this.score.highScore);
      this.mainMenu.show();
    } else if (next === GameState.Playing) {
      this.hud.show();
    } else if (next === GameState.Paused) {
      this.hud.show();
      this.pauseMenu.setRelics(this.relics.activeSummaries(), this.relics.overdriveCharge);
      this.pauseMenu.show();
    } else if (next === GameState.RelicDraft) {
      this.hud.hide();
      this.relicDraftMenu.show();
    } else if (next === GameState.Settings) {
      this.hud.hide();
      this.settingsMenu.show();
    } else if (next === GameState.SkinSelect) {
      this.hud.hide();
      this.skinSelectMenu.show();
    } else if (next === GameState.Achievements) {
      this.hud.hide();
      this.achievementsMenu.show();
    } else if (next === GameState.Leaderboard) {
      this.hud.hide();
      this.leaderboardMenu.show();
    } else if (next === GameState.Controls) {
      this.hud.hide();
      this.controlsMenu.show();
    } else if (next === GameState.InitialsEntry) {
      this.hud.hide();
      this.initialsEntryScreen.show();
    } else if (next === GameState.GameOver) {
      this.hud.show();
      this.gameOverScreen.show();
    }
  }

  private persistSettings(): void {
    this.saveSystem.saveSettings(this.settings);
    this.applySettingsToDocument();
    this.renderer.applySettings(this.settings);
  }

  private selectSkin(skinId: PlayerSkinId): void {
    this.settings.selectedSkin = skinId;
    this.persistSettings();
  }

  private selectBackground(backgroundId: BackgroundId): void {
    this.settings.selectedBackground = backgroundId;
    this.persistSettings();
  }

  private setControlBinding(action: ControlAction, binding: ControlBinding): void {
    const previous = cloneControlBinding(this.controlBindings[action]);
    for (const candidate of Object.keys(this.controlBindings) as ControlAction[]) {
      if (candidate !== action && bindingEquals(this.controlBindings[candidate], binding)) {
        this.controlBindings[candidate] = previous;
      }
    }
    this.controlBindings[action] = binding;
    this.persistControlBindings();
  }

  private resetControlBindings(): void {
    Object.assign(this.controlBindings, cloneControlBindings(DEFAULT_CONTROL_BINDINGS));
    this.persistControlBindings();
  }

  private persistControlBindings(): void {
    this.saveSystem.saveControlBindings(this.controlBindings);
    this.input.setControlBindings(this.controlBindings);
    this.controlsMenu.setBindings(this.controlBindings);
  }

  private applySettingsToDocument(): void {
    const skin = getPlayerSkin(this.settings.selectedSkin);
    const background = getBackground(this.settings.selectedBackground);
    document.body.classList.toggle('palette-high-contrast', this.settings.palette === 'high-contrast');
    document.body.classList.toggle('palette-colourblind', this.settings.palette === 'colourblind');
    const scale = this.settings.uiScale === 'small' ? 0.9 : this.settings.uiScale === 'large' ? 1.16 : 1;
    document.documentElement.style.setProperty('--ui-scale', String(scale));
    document.documentElement.style.setProperty('--skin-primary', skinColorToCss(skin.primaryColor));
    document.documentElement.style.setProperty('--skin-secondary', skinColorToCss(skin.secondaryColor));
    document.documentElement.style.setProperty('--skin-accent', skinReadableAccentToCss(skin));
    document.documentElement.style.setProperty('--background-primary', backgroundColorToCss(background.palette.primary));
    document.documentElement.style.setProperty('--background-secondary', backgroundColorToCss(background.palette.secondary));
    document.documentElement.style.setProperty('--background-accent', backgroundColorToCss(background.palette.accent));
  }
}
