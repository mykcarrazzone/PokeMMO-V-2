import { Scene } from "phaser";
import { createMessageBoxUi } from "../utils/MessageBoxUi/MessageBoxUi";
import { startWeather } from "../utils/VisualEffects/weatherEffects";
import { startEffects } from "../utils/VisualEffects/fireEffects";
import { GridEngineCreate } from "./GridEngineConfig";
import { fpsDisplay } from "../utils/FpsDisplay/FpsDisplay";
import { socketHandler } from "../services/SocketEvents/SocketEvents";

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
      // CREATE MAP AND PLAYER
      this.createMapAndPlayer();

      // CREATE DIALOGUE BOX ON UI
      createMessageBoxUi({
        scene: this,
        x: 200,
        y: 83,
        text: "Utiliser les touches\nZ, Q, S, D pour vous déplacer !",
        radius: 10,
        fontFamily: "Comic Sans Ms",
        textColor: "#ffffffff",
        backgroundColor: "#1a3d04ff",
        fontSize: 18,
        padding: 20,
      });
      fpsDisplay(this);
    }
  }

  createMapAndPlayer() {
    let self = this;

    /**
     * This function handles the socket events related to player interaction on the map.
     * It creates, updates or removes the corresponding player objects on the scene based on the received data.
     * @param {Object} thisCopy - A copy of the current `this` object.
     * @param {Object} self - The `this` object.
     * @param {Object} onlinePlayers - An object that contains all the online player objects currently on the scene.
     */
    socketHandler(this, self, onlinePlayers);

    this.map = this.make.tilemap({ key: this.mapName });
    this.map.addTilesetImage("pokemmo-sample-16px-extruded", "tiles");

    for (let i = 0; i < this.map.layers.length; i++) {
      const layer = this.map.createLayer(
        i,
        "pokemmo-sample-16px-extruded",
        0,
        0
      );
      layer.scale = 4;
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

    this.gridEngineClass.addNpc({
      id: `npc1`,
      x: 42,
      y: 50,
      speed: 0,
      walkingAnimationMapping: Math.floor(Math.random() * 7) + 1,
      collides: true,
    });

    this.cameras.main.fadeIn(1000);

    this.map.findObject("Weather", (obj) => {
      startWeather(this, this.map, obj.name);
    });

    this.map.findObject("Effects", (obj) => {
      startEffects(this, obj);
    });
  }

  update() {
    // USE TIME AND DELTA
    this.gridEngineClass.playerUpdate();
  }
}
