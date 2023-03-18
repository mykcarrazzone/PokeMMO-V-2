import { Scene } from "phaser";
import Player from "./Player";
import { setMessageUi } from "./message";
import { startWeather } from "../scenes/functions/weather/weather";
import { startEffects } from "../scenes/functions/effects/fire";
import OnlinePlayer from "../scenes/OnlinePlayer";
import { pixelPositionToGrid } from "../scenes/functions/player/pixelPositionToGrid";
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
      setMessageUi({
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

  gridEngineCreate(map) {
    const npcSprite0 = this.add.sprite(0, 0, "npc");
    npcSprite0.scale = 1.1;
    const npcSprite1 = this.add.sprite(0, 0, "npc");
    npcSprite1.scale = 1.1;
    const npcSprite2 = this.add.sprite(0, 0, "npc");
    npcSprite2.scale = 1.1;
    const npcSprite3 = this.add.sprite(0, 0, "npc");

    npcSprite3.scale = 1.1;
    this.speed = 1;

    this.gridEngineConfig = {
      characters: [
        {
          id: "player",
          sprite: this.player,
          walkingAnimationMapping: 0,
          startPosition: {
            x: pixelPositionToGrid(this.player.x),
            y: pixelPositionToGrid(this.player.y),
          },
          speed: 3,
          collides: true,
        },
        {
          id: "npc0",
          sprite: npcSprite0,
          walkingAnimationMapping: 1,
          startPosition: { x: 25, y: 24 },
          speed: 2,
        },
        {
          id: "npc1",
          sprite: npcSprite1,
          walkingAnimationMapping: 2,
          startPosition: { x: 26, y: 27 },
          speed: 2,
        },
        {
          id: "npc2",
          sprite: npcSprite2,
          walkingAnimationMapping: 3,
          startPosition: { x: 26, y: 27 },
          speed: 2,
        },
        {
          id: "npc3",
          sprite: npcSprite3,
          walkingAnimationMapping: 4,
          startPosition: { x: 37, y: 24 },
          speed: 2,
        },
        {
          id: "doors",
          sprite: this.door0,
          startPosition: { x: 44, y: 24 },
          collides: false,
        },
      ],
    };

    this.gridEngine.create(map, this.gridEngineConfig);

    this.gridEngine.moveRandomly("npc0", 5);
    this.gridEngine.moveRandomly("npc1", 5);
    this.gridEngine.moveRandomly("npc2", 5);
    this.gridEngine.moveRandomly("npc3", 5);
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
      layer.setDepth(i);
    }

    this.spawnPoint = this.map.findObject(
      "SpawnPoints",
      (obj) => obj.name === "Spawn Point"
    );

    this.newZone = this.map.findObject("Zone", (obj) => {
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
        : this.spawnPoint.y * 3.9,
      texture: "player",
      frame: "up",
      tileMap: this.map,
      newZone: this.newZone,
    });

    this.gridEngineCreate(this.map);

    this.cameras.main.fadeIn(1000);

    this.map.findObject("Weather", (obj) => {
      startWeather(this, this.map, obj.name);
    });

    this.map.findObject("Effects", (obj) => {
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
