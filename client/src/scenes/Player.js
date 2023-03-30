import { GameObjects } from "phaser";
import { getStopFrame } from "../utils/GetStopFrame/GetStopFrame";

export default class Player extends GameObjects.Sprite {
  constructor(config) {
    super(
      config.scene,
      config.x,
      config.y,
      config.texture,
      config.frame,
      config.tileMap,
      config.newZone,
      config.speed
    );
    this._id = this.scene.localPlayer._id;
    this.door0 = this.scene.add.sprite(0, 0, "doors");
    this.door0.scale = 1.22;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);
    this.setOrigin(0.5, 0.5);
    this.scale = 1.15;
    this.scene.cameras.main.startFollow(this, true);
    this.scene.cameras.main.setZoom(1);
    this.tileMap = config.tileMap;
    this.speed = config.speed;
    this.scene.physics.world.enable(this);

    this.isCrossActivated = false;

    this.isCrossActivated = false;

    this.newZone = config.newZone;

    if (this.newZone) {
      const [x, y] = this.newZone.name.split("|").map(Number);
      this.newZone = { x, y };
    }

    this.doorAnimation();
    this.passPorte = false;
    this.passWorld = false;
    this.setFrame(getStopFrame(this.scene.localPlayer.position.ld));
  }

  update() {
    this.doorInteraction();
    this.worldInteraction();
  }

  doorAnimation() {
    this.door0.anims.create({
      key: "porte",
      frames: this.door0.anims.generateFrameNumbers("doors", {
        start: 0,
        end: 3,
      }),
      frameRate: 5,
      repeat: 0,
    });
  }

  doorInteraction() {
    // Cette fonction permet de gérer les interactions avec les portes
    this.tileMap.findObject("Doors", (obj) => {
      const objectX = obj.x * 3.95;
      const objectY = obj.y * 4.05;
      const objectWidth = obj.width * 4;
      const objectHeight = obj.height * 2;

      if (
        this.y >= objectY &&
        this.y <= objectY + objectHeight &&
        this.x >= objectX &&
        this.x <= objectX + objectWidth &&
        this.scene.gridEngine.getFacingDirection("player") == "up"
      ) {
        this.scene.gridEngine.stopMovement("player");
        setTimeout(() => {
          this.scene.cameras.main.fadeOut(700);
        }, 700);
        setTimeout(() => {
          if (!this.passPorte) {
            this.passPorte = true;
            this.scene.gridEngine.turnTowards("player", "up");
            this.changeSceneByMapName(obj.properties[0].value, "up");
          }
        }, 1500);
      }
    });
  }

  changeSceneByMapName(worldName, direction) {
    this.scene.localPlayer.onMap = worldName;
    this.scene.localPlayer.position.x = this.x;
    this.scene.localPlayer.position.y = this.y;
    this.scene.localPlayer.hasConnectedBefore = false;

    // PERMET DE CHANGER LES POINTS D ENTREE ET DE SORTIE
    this.changedSceneData = {
      isChanged: this.newZone ? true : false,
      x: this.newZone
        ? this.newZone.x != 0
          ? this.newZone.x
          : this.scene.localPlayer.x
        : this.scene.localPlayer.x,
      y: this.newZone
        ? this.newZone.y != 0
          ? this.newZone.y
          : this.scene.localPlayer.y
        : this.scene.localPlayer.y,
    };

    this.scene.socket.emit("PLAYER_PASS_IN_NEW_MAP", {
      _id: this._id,
      position: {
        ld: direction,
      },
      onMap: worldName,
    });

    this.scene.localPlayer.position.ld = direction;
    // DÉTRUIRE LES OBJETS DE LA SCÈNE
    this.scene.registry.destroy();
    this.scene.events.off();
    this.scene.sound.stopAll();
    this.scene.scene.restart({
      user: this.scene.localPlayer,
      socket: this.scene.socket,
      changedSceneData: this.changedSceneData,
    });
  }

  worldInteraction() {
    // Cette fonction permet de gérer les interactions avec les portes
    this.tileMap.findObject("Worlds", (obj) => {
      const objectX = obj.x * 4.1;
      const objectY = obj.y * 3.82;
      const objectWidth = obj.width * 1.8;
      const objectHeight = obj.height * 2;

      if (
        this.y >= objectY &&
        this.y <= objectY + objectHeight &&
        this.x >= objectX &&
        this.x <= objectX + objectWidth &&
        this.scene.gridEngine.getFacingDirection("player") == "down"
      ) {
        if (!this.passWorld) {
          this.passWorld = true;
          console.log("Player is by world entry: " + obj.name);
          this.scene.localPlayer.position.ld = "down";
          this.changeSceneByMapName(obj.name, "down");
        }
      }
    });
  }

  generateRandomLevelPokemonSpawn(levelKey) {
    let [minLevel, maxLevel] = levelKey[0].value.split("|");
    minLevel = parseInt(minLevel);
    maxLevel = parseInt(maxLevel);
    const randomLevel =
      Math.floor(Math.random() * (maxLevel - minLevel + 1)) + minLevel;
    return `Pokemon spawned at level ${randomLevel}`;
  }

  battleZoneInteraction() {
    if (this.isMoved() && this.scene.battleZones) {
      var playerTileY = this.scene.battleZones.worldToTileXY(this.x, this.y);
      var currentTile = this.scene.battleZones.getTileAt(
        playerTileY.x,
        playerTileY.y
      );
      const levelProperties = this.scene.battleZones.layer.properties;
      if (currentTile) {
        if (currentTile.index == 24471) {
          if (Math.random() <= 0.1 / 35) {
            console.log(this.generateRandomLevelPokemonSpawn(levelProperties));
          }
        }
      }
    }
  }
}
