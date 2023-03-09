import { Scene } from "phaser";
import Player from "./Player";
import OnlinePlayer from "./OnlinePlayer";

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
      this.hasChangedScene = data.hasChangedScene;
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

      // This scene element was created in the world interaction method in the player class
      this.map = this.make.tilemap({ key: this.mapName });

      this.sound
        .add(`${this.mapName}-Sound`, {
          loop: true,
          volume: 0.02,
        })
        .play();

      // Set current map Bounds
      this.scene.scene.physics.world.setBounds(
        0,
        0,
        this.map.widthInPixels,
        this.map.heightInPixels
      );

      // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
      // Phaser's cache (i.e. the name you used in preload)
      const tileset = this.map.addTilesetImage(
        "tuxmon-sample-32px-extruded",
        "TilesTown"
      );

      // Parameters: layer name (or index) from Tiled, tileset, x, y
      this.belowLayer = this.map.createLayer("Below Player", tileset, 0, 0);
      // this.battleZone = this.map.createLayer("Battle Zone", tileset, 0, 0);
      this.worldLayer = this.map.createLayer("World", tileset, 0, 0);
      this.grassLayer = this.map.createLayer("Grass", tileset, 0, 0);
      this.aboveLayer = this.map.createLayer("Above Player", tileset, 0, 0);
      this.worldLayer.setCollisionByProperty({ collides: true });

      // By default, everything gets depth sorted on the screen in the order we created things. Here, we
      // want the "Above Player" layer to sit on top of the player, so we explicitly give it a depth.
      // Higher depths will sit on top of lower depth objects.
      this.aboveLayer.setDepth(10);

      // Get spawn point from tiled map
      const spawnPoint = this.map.findObject(
        "SpawnPoints",
        (obj) => obj.name === "Spawn Point"
      );

      // Set player
      this.player = new Player({
        scene: this,
        worldLayer: this.worldLayer,
        key: "player",
        x: this.hasChangedScene ? spawnPoint.x : this.localPlayer.position.x,
        y: this.hasChangedScene ? spawnPoint.y : this.localPlayer.position.y,
        ld: this.localPlayer.position.ld,
      });

      const camera = this.cameras.main;
      camera.startFollow(this.player);
      camera.setZoom(2.6);
      camera.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

      cursors = this.input.keyboard.createCursorKeys();

      // Help text that has a "fixed" position on the screen
      this.add
        .text(16, 16, 'Arrow keys to move\nPress "D" to show hitboxes', {
          font: "18px monospace",
          fill: "#000000",
          padding: { x: 20, y: 10 },
          backgroundColor: "#ffffff",
        })
        .setScrollFactor(0)
        .setDepth(30);

      this.debugGraphics();
      this.fps();
      // this.movementTimer();
    }
  }

  update(time, delta) {
    // Loop the player update method
    if (this.player) {
      this.player.update(time, delta); // permet de faire bouger le player en fonction des touches du clavier

      //   // Horizontal movement
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

  debugGraphics() {
    // Debug graphics
    this.input.keyboard.once("keydown_D", (event) => {
      // Turn on physics debugging to show player's hitbox
      this.physics.world.createDebugGraphic();

      // Create worldLayer collision graphic above the player, but below the help text
      const graphics = this.add.graphics().setAlpha(0.75).setDepth(20);
      this.worldLayer.renderDebug(graphics, {
        tileColor: null, // Color of non-colliding tiles
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
        faceColor: new Phaser.Display.Color(40, 39, 37, 255), // Color of colliding face edges
      });
    });
  }

  fps() {
    // Send fps to server
    setInterval(() => {
      this.socket.emit("sendFps", parseInt(this.game.loop.actualFps));
    }, 500);
  }
}
