import { Scene } from "phaser";
import Player from "./Player";
import { setMessageUi } from "./message";
import { startWeather } from "../scenes/functions/weather/weather";
import { startEffects } from "../scenes/functions/effects/fire";

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
      setMessageUi({
        scene: this,
        x: 50,
        y: 50,
        text: "Utiliser les touches\nZ, Q, S, D pour vous déplacer !",
        radius: 10,
        fontFamily: "monospace",
        textColor: "#000000ee",
        backgroundColor: "#cac7c7b7",
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
        });
      });
    });

    this.socket.on("PLAYER_LEFT", function (sessionId) {
      if (onlinePlayers[sessionId]) {
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
          });
        } else {
          existingPlayer.isWalking(
            data.position.ld,
            data.position.x,
            data.position.y
          );
        }
      }
    });

    this.socket.on("PLAYER_CHANGED_MAP", function (data) {
      if (onlinePlayers[data]) {
        onlinePlayers[data].destroy();
        delete onlinePlayers[data];
      }
    });

    const map = this.make.tilemap({ key: this.mapName });

    map.addTilesetImage("pokemmo-sample-16px-extruded", "tiles");

    for (let i = 0; i < map.layers.length; i++) {
      const layer = map.createLayer(i, "pokemmo-sample-16px-extruded", 0, 0);
      layer.scale = 4;
      layer.setDepth(i);
    }

    this.spawnPoint = map.findObject(
      "SpawnPoints",
      (obj) => obj.name === "Spawn Point"
    );

    this.newZone = map.findObject("Zone", (obj) => {
      return obj;
    });

    this.player = new Player({
      scene: this,
      x: this.localPlayer.hasConnectedBefore
        ? this.localPlayer.position.x
        : this.changedSceneData.isChanged
        ? this.changedSceneData.x
        : this.spawnPoint.x * 3.89,
      y: this.localPlayer.hasConnectedBefore
        ? this.localPlayer.position.y
        : this.changedSceneData.isChanged
        ? this.changedSceneData.y
        : this.spawnPoint.y * 3.90,
      texture: "player",
      frame: "up",
      tileMap: map,
      newZone: this.newZone,
    });

    this.cameras.main.fadeIn(1000);

    map.findObject("Weather", (obj) => {
      startWeather(this, map, obj.name);
    });

    map.findObject("Effects", (obj) => {
      startEffects(this, obj);
    });
  }

  update() {
    this.player.update();
  }

  fps() {
    // Send fps to server
    setInterval(() => {
      this.socket.emit("sendFps", parseInt(this.game.loop.actualFps));
    }, 500);
  }
}
