import { Scene } from "phaser";
import Player from "./Player";
import OnlinePlayer from "./OnlinePlayer";
import { startWeather } from "./functions/weather/weather";
import { startEffects } from "./functions/effects/fire";
let cursors, socketKey;
var onlinePlayers = [];

export default class Scene2 extends Scene {
  constructor() {
    super("playGame");
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
      let self = this;
      console.log("Game is running")

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

      this.createMap();

      this.player = new Player({
        scene: this,
        worldLayer: this.collides,
        key: "player",
        x: this.localPlayer.hasConnectedBefore
          ? this.localPlayer.position.x
          : this.changedSceneData.isChanged
          ? this.changedSceneData.x
          : this.spawnPoint.x,
        y: this.localPlayer.hasConnectedBefore
          ? this.localPlayer.position.y
          : this.changedSceneData.isChanged
          ? this.changedSceneData.y
          : this.spawnPoint.y,
        ld: this.localPlayer.position.ld,
        battleZones: this.battleZones,
      });
      this.player.scale = 1.5
      const camera = this.cameras.main;
      camera.startFollow(this.player, true);
      camera.setFollowOffset(-this.player.width, -this.player.height);
      camera.setZoom(2);

    
      // camera.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

      // Help text that has a "fixed" position on the screen
      this.add
        .text(16, 16, 'Arrow keys to move\nPress "D" to show hitboxes', {
          font: "18px monospace",
          fill: "#000000",
          padding: { x: 20, y: 10 },
          backgroundColor: "#ffffff",
        })
        .setScrollFactor(0)
        .setDepth(300);

      this.debugGraphics();
      this.fps();
    }
  }

  update(time, delta) {
    if (this.player) {
      this.player.update(time,delta);
      if (this.player.isMoved()) {
        this.socket.emit("PLAYER_MOVING", {
          _id: this.player._id,
          position: {
            x: this.player.x,
            y: this.player.y,
            ld: this.player.ld,
          },
          isMoving: this.player.isMoving,
        });
      }
    }
  }

  debugGraphics() {}

  fps() {
    // Send fps to server
    setInterval(() => {
      this.socket.emit("sendFps", parseInt(this.game.loop.actualFps));
    }, 500);
  }

  createMap() {
    this.gameScale = 2;
    // This scene element was created in the world interaction method in the player class
    this.map = this.make.tilemap({ key: this.mapName });

    this.sound
      .add(`${this.mapName}-Sound`, {
        loop: true,
        volume: 0.07,
      })
      .play();

    // Set current map Bounds
    this.scene.scene.physics.world.setBounds(
      0,
      0,
      this.map.widthInPixels * 2,
      this.map.heightInPixels * 2
    );

    const tileset = this.map.addTilesetImage(
      "pokemmo-sample-16px-extruded",
      "TilesTown",
      16,
      16
    );

    for (let i = this.map.layers.length - 1; i >= 0; i--) {
      console.log(this.map.layers[i].name);
      if (this.map.layers[i].name == "Collides") {
        this.layer = this.map.createLayer(i, tileset, 0, 0).setAlpha(0);
      } else {
        this.layer = this.map.createLayer(i, tileset, 0, 0).setDepth(i);
        this.layer.scale = 2;
      }
    }

    this.spawnPoint = this.map.findObject(
      "SpawnPoints",
      (obj) => obj.name === "Spawn Point"
    );

    this.map.findObject("Weather", (obj) => {
      startWeather(this, obj.name);
    });

    this.effects = this.map.findObject("Effects", (obj) => {
      startEffects(this, obj.name);
    });
  }
}
