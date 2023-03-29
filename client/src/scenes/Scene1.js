import { Scene } from "phaser";
import { createMessageBoxUi } from "../utils/MessageBoxUi/MessageBoxUi";
import { startWeather } from "../utils/VisualEffects/weatherEffects";
import { startEffects } from "../utils/VisualEffects/fireEffects";
import OnlinePlayer from "./OnlinePlayer";
import { GridEngineCreate } from "./GridEngineConfig";
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
      this.createMapAndPlayer();
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
      this.fps();
    }
  }

  createMapAndPlayer() {
    let self = this;
    console.log("Game is running");

    this.socket.on("CURRENT_PLAYERS_ON_MAP", function (playerInfo) {
      const otherPlayersData = Object.values(playerInfo).filter(
        (player) =>
          player.sessionId !== self.socket.id && player.onMap === self.mapName
      );
      otherPlayersData.forEach(function (player) {
        onlinePlayers[player.sessionId] = new OnlinePlayer({
          scene: self,
          sessionId: player.sessionId,
          key: player.sessionId,
          map: player.onMap,
          x: player.position.x,
          y: player.position.y,
          nickName: player.nickName,
          role: player.role,
          ld: player.position.ld,
          texture: "onlinePlayer",
        });
      });
    });

    this.socket.on("PLAYER_LEFT", function (sessionId) {
      if (onlinePlayers[sessionId]) {
        console.log("SESSION ID : ", sessionId, "LEFT");
        self.gridEngineClass.removeOnlinePlayer(sessionId);
        onlinePlayers[sessionId].destroy();
        delete onlinePlayers[sessionId];
      }
    });

    this.socket.on("PLAYER_MOVED", function (data) {
      if (self.mapName == data.onMap) {
        const existingPlayer = onlinePlayers[data.sessionId];
        if (existingPlayer == undefined) {
          onlinePlayers[data.sessionId] = new OnlinePlayer({
            scene: self,
            sessionId: data.sessionId,
            key: data.sessionId,
            map: data.onMap,
            x: data.position.x,
            y: data.position.y,
            nickName: data.nickName,
            role: data.role,
            ld: data.position.ld,
            texture: "onlinePlayer",
          });
        } else {
          existingPlayer.isWalking(
            data.position.ld,
            data.position.x,
            data.position.y,
            data.position.speed,
            data.walkingAnimationMapping
          );
        }
      }
    });

    this.socket.on("PLAYER_CHANGED_MAP", function (data) {
      if (onlinePlayers[data]) {
        self.gridEngineClass.removeOnlinePlayer(data);
        onlinePlayers[data].destroy();
        delete onlinePlayers[data];
      }
    });

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

  fps() {
    // Send fps to server
    setInterval(() => {
      this.socket.emit("sendFps", parseInt(this.game.loop.actualFps));
    }, 500);
  }
}
