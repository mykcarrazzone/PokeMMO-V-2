import { GameObjects } from "phaser";
import { GAMES_INFOS } from "@/constants/GameInfos/GameInfos";
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
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);
    // this.scene.physics.world.enable(this);
    this.scale = GAMES_INFOS.spriteScale;
    this.tileMap = config.tileMap;
    this.speed = config.speed;
    this.newZone = config.newZone;
    this.passPorte = false;
    this.passWorld = false;
  }

  update() {
    this.doorInteraction();
  }

  doorInteraction() {
    this.tileMap.findObject("Doors", (obj) => {
      /* Check obj array is not empty */
      if (obj.length === 0) {
        return;
      }

      const objectX = obj.x * GAMES_INFOS.gameScale;
      const objectY = obj.y * GAMES_INFOS.gameScale - 50;
      const objectWidth = obj.width;
      const objectHeight = obj.height;
      if (
        this.y >= objectY &&
        this.y <= objectY + objectHeight &&
        this.x + GAMES_INFOS.tileSize >= objectX &&
        this.x + GAMES_INFOS.tileSize <= objectX + objectWidth
      ) {
        const direction = obj.properties[0].value;
        const onMap = obj.properties[1].value;
        const [teleportX, teleportY] = obj.properties[2].value.split("|");
        const newPosition = {
          x: parseInt(teleportX),
          y: parseInt(teleportY),
          ld: direction,
          onMap: onMap,
        };
        this.changeSceneByMapName(newPosition);
      }
    });
  }

  changeSceneByMapName(newPosition) {
    this.scene.localPlayer.onMap = newPosition.onMap;
    this.scene.localPlayer.position.x = newPosition.x;
    this.scene.localPlayer.position.y = newPosition.y;
    this.scene.localPlayer.position.ld = newPosition.ld;
    this.scene.localPlayer.hasConnectedBefore = false;

    this.scene.socket.emit("PLAYER_PASS_IN_NEW_MAP", {
      _id: this._id,
      position: {
        x: newPosition.x,
        y: newPosition.y,
        ld: newPosition.ld,
        speed: 3,
      },
      onMap: newPosition.onMap,
    });

    this.destroyScene();
    this.scene.scene.restart({
      user: this.scene.localPlayer,
      socket: this.scene.socket,
    });
  }

  generateRandomLevelPokemonSpawn(levelKey) {
    let [minLevel, maxLevel] = levelKey[0].value.split("|");
    minLevel = parseInt(minLevel);
    maxLevel = parseInt(maxLevel);
    const randomLevel = Math.random() * (maxLevel - minLevel + 1) + minLevel;
    return `Pokemon spawned at level ${randomLevel}`;
  }

  battleZoneInteraction() {
    if (this.scene.gridEngine.isMoved("player") && this.scene.battleZones) {
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

  destroyVariables() {
    this.scene.currentState = "normal";
    this.scene.isCrossActivated = false;
    this.scene.dayCycleRectangle = null;
  }

  destroyScene() {
    this.destroyVariables();
    // DÉTRUIRE LES OBJETS DE LA SCÈNE
    this.scene.registry.destroy();
    this.scene.events.off();
    this.scene.sound.stopAll();
  }
}
