import { Scene } from "phaser";
import { GAME_UTILITIES } from "@/services/Game/ServicesGamesRouter/ServicesGames";
import { GAMES_INFOS } from "@/constants/GameInfos/GameInfos";
export default class Scene1 extends Scene {
  constructor() {
    super("Scene1");
  }

  init(data) {
    if (this.data) {
      /** INIT VARIABLES */
      GAME_UTILITIES.utilsDefineVariables(this);
      this.socket = data.socket;
      // Map data
      this.mapName = data.user.onMap;
      // Player Texture starter position
      this.localPlayer = data.user;
      this.playerTexturePosition = data.user.position.ld;
      // Set container
      this.container = [];
      if (this.localPlayer) {
        this.socket.emit("PLAYER_JOIN", this.localPlayer);
        this.socket.emit("localPlayer", {
          id: this.localPlayer._id,
          nickName:
            this.localPlayer.nickName.charAt(0).toUpperCase() +
            this.localPlayer.nickName.slice(1),
          role: this.localPlayer.role,
        });
      }
    }
  }

  create() {
    this.textures.on("addtexturekey", function (key, texture) {
      texture.source[0].glTexture.setFilter(Phaser.Textures.FilterMode.LINEAR);
    });
    if (this.socket && this.localPlayer) {
      console.warn = function () {}; // Désactive les avertissements dans la console
      this.gameHasFocused = true;
      /** CREATE MAP AND PLAYER */
      this.initGame();
      /** FPS DISPLAY */
      GAME_UTILITIES.utilsFpsDisplay(this);
    }
  }

  initGame() {
    /** SELF ALLOW TO USE THIS IN SOCKET HANDLER */
    let self = this;
    this.scene.launch("AudioGame", this);
    // this.scene.launch("PopupMenu", this);
    // this.scene.launch("StaticMenu", this);
    // this.scene.launch("GamePad", this);
    /** INIT MAP */
    this.initMap();
    this.gridEngineClass = new GAME_UTILITIES.GridEngineCreate(self);
    this.gridEngineClass.setPlayer();
    /** INIT GAME OBJECTS AFTER CREATING PLAYER */
    GAME_UTILITIES.utilsInitGameCreateObjects(this, this.map.objects);
    GAME_UTILITIES.utilsInitGameUpdateObjects(this, this.map.objects);
    /* SOCKET HANDLER FOR PLAYER ONLINE MOVE */
    GAME_UTILITIES.servicesHandlerSocket(
      this,
      self,
      GAME_UTILITIES.onlinePlayers
    );
    /** CREATE ENVIRONMENT RELATED TO GAME, PLAYER, NPC, ETC... */
    GAME_UTILITIES.servicesDisableInputByFocus(this);
  }

  initMap() {
    this.map = this.make.tilemap({ key: this.mapName });
    this.map.addTilesetImage("pokemmo-sample-16px-extruded", "tiles", 16, 16);
    this.battleZonesLayer = null;

    for (let i = 0; i < this.map.layers.length; i++) {
      const layerData = this.map.layers[i];
      const layer = this.map.createLayer(
        layerData.name,
        "pokemmo-sample-16px-extruded",
        0,
        0
      );

      layer.scale = GAMES_INFOS.gameScale;

      // Vérifier si le nom du calque contient "Battle Zones"
      if (layerData.name.includes("Battle Zones")) {
        this.battleZonesLayer = layer;
      }
    }
    this.cameras.main.fadeIn(1000);
  }

  update() {
    GAME_UTILITIES.handlerUpdateEvents(this);
    this.gridEngineClass.playerUpdate();
    GAME_UTILITIES.utilsInitKeyboardControls(this);
  }
}
