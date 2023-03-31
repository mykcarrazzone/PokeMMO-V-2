import { Scene } from "phaser";
import { objectInit } from "@/utils/ObjectsInit/ObjectsInit";
import { GridEngineCreate } from "./GridEngineConfig";
import { fpsDisplay } from "../utils/FpsDisplay/FpsDisplay";
import { socketHandler } from "../services/SocketEvents/SocketEvents";
import { initKeyboardControls } from "../utils/InitKeyboardControls/InitKeyboardControls";
import { GameInfos } from "@/constants/GameInfos/GameInfos";
var onlinePlayers = [];

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
    if (this.socket && this.localPlayer) {
      this.gameHasFocused = true;
      /** CREATE MAP AND PLAYER */
      this.createMapAndPlayer();
      /** FPS DISPLAY */
      fpsDisplay(this);
    }
  }

  createMapAndPlayer() {
    let self = this;

    this.walk = this.sound.add("walk", { loop: false, volume: 0.05, rate: 1 });

    /* SOCKET HANDLER FOR PLAYER ONLINE MOVE */
    socketHandler(this, self, onlinePlayers);

    this.map = this.make.tilemap({ key: this.mapName });
    this.sound.add(`${this.mapName}-Audio`, { loop: true, volume: 0.2 }).play();

    this.map.addTilesetImage("pokemmo-sample-16px-extruded", "tiles");

    for (let i = 0; i < this.map.layers.length; i++) {
      const layer = this.map.createLayer(
        i,
        "pokemmo-sample-16px-extruded",
        0,
        0
      );
      layer.scale = GameInfos.gameScale;
    }

    this.spawnPoint = this.map.findObject(
      "SpawnPoints",
      (obj) => obj.name === "Spawn Point"
    );

    this.newZone = this.map.findObject("Zone", (obj) => {
      return obj;
    });

    this.gridEngineClass = new GridEngineCreate(this);
    this.gridEngineClass.setPlayer();

    objectInit(this, this.map.objects);
    this.isCrossActivated = this.gridEngineClass.getCantCrossRun();
    this.cameras.main.fadeIn(1000);
    console.log(this.map);
  }

  update() {
    this.gridEngineClass.playerUpdate();
    initKeyboardControls(this);
  }
}
