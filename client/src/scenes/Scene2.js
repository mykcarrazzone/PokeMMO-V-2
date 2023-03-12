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

      console.log("LE CHANGED SCENE DATA", this.changedSceneData);
      // Set player
      this.player = new Player({
        scene: this,
        worldLayer: this.collides,
        key: "player",
        x: this.localPlayer.hasConnectedBefore
          ? this.localPlayer.position.x
          : this.changedSceneData.isChanged
          ? this.changedSceneData.x
          : this.spawnPoint.x * 2,
        y: this.localPlayer.hasConnectedBefore
          ? this.localPlayer.position.y
          : this.changedSceneData.isChanged
          ? this.changedSceneData.y
          : this.spawnPoint.y * 2,
        ld: this.localPlayer.position.ld,
        newZone: this.zone,
        battleZones: this.battleZones,
      });

      const camera = this.cameras.main;
      camera.startFollow(this.player);
      this.player.setScale(1);
      camera.setZoom(2);
      camera.setBounds(
        0,
        0,
        this.map.widthInPixels * 2,
        this.map.heightInPixels * 2
      );

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
    this.input.keyboard.once("keydown_F", (event) => {
      // Turn on physics debugging to show player's hitbox
      this.physics.world.createDebugGraphic();
      console.log("Debug graphics enabled");
      // Create worldLayer collision graphic above the player, but below the help text
      const graphics = this.add.graphics().setAlpha(0.75).setDepth(20);
      this.collides.renderDebug(graphics, {
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

  createMap() {
    // This scene element was created in the world interaction method in the player class
    this.map = this.make.tilemap({ key: this.mapName });

    this.sound
      .add(`${this.mapName}-Sound`, {
        loop: true,
        volume: 0.05,
      })
      .play();

    // Set current map Bounds
    this.scene.scene.physics.world.setBounds(
      0,
      0,
      this.map.widthInPixels * 2,
      this.map.heightInPixels * 2
    );

    // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
    // Phaser's cache (i.e. the name you used in preload)
    const tileset = this.map.addTilesetImage(
      "pokemmo-sample-16px-extruded",
      "TilesTown",
      16,
      16
    );

    this.zone = this.map.findObject("Zone", (obj) => obj);
    console.log("Zone :", this.zone);
    // Parameters: layer name (or index) from Tiled, tileset, x, y

    // this.battleZone = this.map.createLayer("Battle Zone", tileset, 0, 0);
    // this.surfaceWorld = this.map
    //   .createLayer("Surface World", tileset, 0, 0)
    //

    this.collides = this.map
      .createLayer("Collides", tileset, 16, 16)
      .setScale(2)
      .setAlpha(0)
      .setDepth(-10);
    this.abovePlayer = this.map
      .createLayer("Above Player", tileset, 16, 16)
      .setScale(2)
      .setDepth(30);
    this.lamp = this.map
      .createLayer("Lamp", tileset, 16, 16)
      .setScale(2)
      .setDepth(28);
    this.aboveWorld = this.map
      .createLayer("Above World", tileset, 16, 16)
      .setScale(2)
      .setDepth(27);
    this.worldLayer = this.map
      .createLayer("World", tileset, 16, 16)
      .setScale(2)
      .setDepth(26);
    this.belowWorld = this.map
      .createLayer("Below World", tileset, 16, 16)
      .setScale(2)
      .setDepth(25);
    this.grass = this.map
      .createLayer("Grass", tileset, 16, 16)
      .setScale(2)
      .setDepth(24);
    this.belowPlayer = this.map
      .createLayer("Below Player", tileset, 16, 16)
      .setScale(2)
      .setDepth(23);
    this.battleZones = this.map.createLayer("Battle Zones", tileset, 16, 16);
    this.battleZones ? this.battleZones.setScale(2).setDepth(24) : null;

    this.collides.setCollisionByProperty({ collides: true });
    // check if player in battleZones

    // ADD SOUND IF COLLISION

    // By default, everything gets depth sorted on the screen in the order we created things. Here, we
    // want the "Above Player" layer to sit on top of the player, so we explicitly give it a depth.
    // Higher depths will sit on top of lower depth objects.

    // Get spawn point from tiled map
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
