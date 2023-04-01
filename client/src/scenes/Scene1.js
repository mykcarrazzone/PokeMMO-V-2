import { Scene } from "phaser";
import { GAME_UTILITIES } from "@/services/Game/ServicesGamesRouter/ServicesGames";
import { GAMES_INFOS } from "@/constants/GameInfos/GameInfos";

export default class Scene1 extends Scene {
  constructor() {
    super("Scene1");
  }

  init(data) {
    if (this.data) {
      this.socket = data.socket;
      // Map data
      this.mapName = data.user.onMap;
      // Player Texture starter position
      this.localPlayer = data.user;
      this.changedSceneData = data.changedSceneData;
      console.log("ChangedSceneData byWorlds", this.changedSceneData);
      this.playerTexturePosition = data.user.position.ld;
      // Set container
      this.container = [];
    }
  }

  create() {
    if (this.socket && this.localPlayer) {
      console.warn = function () {}; // Désactive les avertissements dans la console
      this.gameHasFocused = true;
      /** CREATE MAP AND PLAYER */
      this.initGame();
      /** FPS DISPLAY */
      GAME_UTILITIES.fpsDisplay(this);
    }
  }

  initGame() {
    /** SELF ALLOW TO USE THIS IN SOCKET HANDLER */
    let self = this;
    /** INIT MAP */
    this.initMap();
    /** INIT GAME OBJECTS BEFORE CREATING PLAYER */
    this.initGameObjectsBeforeCreatingPlayer();
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
    /* SOCKET HANDLER FOR PLAYER ONLINE MOVE */
    GAME_UTILITIES.handlerSocket(this, self, GAME_UTILITIES.onlinePlayers);
    /** CREATE ENVIRONMENT RELATED TO GAME, PLAYER, NPC, ETC... */
    this.gridEngineClass = new GAME_UTILITIES.GridEngineCreate(this);
    this.gridEngineClass.setPlayer();
    /** INIT GAME OBJECTS AFTER CREATING PLAYER */
    GAME_UTILITIES.initGameObjects(this, this.map.objects);
  }

  initMap() {
    this.map = this.make.tilemap({ key: this.mapName });
    this.map.addTilesetImage("pokemmo-sample-16px-extruded", "tiles");

    for (let i = 0; i < this.map.layers.length; i++) {
      const layer = this.map.createLayer(
        i,
        "pokemmo-sample-16px-extruded",
        0,
        0
      );
      layer.scale = GAMES_INFOS.gameScale;
    }
    this.cameras.main.fadeIn(1000);
  }

  initGameObjectsBeforeCreatingPlayer() {
    this.spawnPoint = this.map?.findObject("SpawnPoints", (obj) =>
      obj.name === "Spawn Point" ? obj : null
    );

    this.newZone = this.map?.findObject("Zone", (obj) => {
      return obj ? obj : null;
    });

    if (this.newZone) {
      const [x, y] = this.newZone.name.split("|").map(Number);
      this.newZone = { x, y };
      console.log("NewZone", this.newZone);
      this.localPlayer.position.x = this.newZone.x;
      this.localPlayer.position.y = this.newZone.y;
    }

    if (this.spawnPoint) {
      console.log(this.spawnPoint.properties[0]);
      const [x, y] = this.spawnPoint.properties[0].value.split("|").map(Number);
      console.log("SpawnPoint", x, y);
      this.localPlayer.position.x = x;
      this.localPlayer.position.y = y;
    }
  }

  update() {
    GAME_UTILITIES.initKeyboardControls(this);
    this.gridEngineClass.playerUpdate();
  }
}
