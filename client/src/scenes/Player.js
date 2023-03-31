import { GameObjects } from "phaser";
import { getStopFrame } from "../utils/GetStopFrame/UtilsGetStopFrame";
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
    this.scale = GAMES_INFOS.spriteScale;
    this.scene.cameras.main.startFollow(this, true);
    this.scene.cameras.main.setZoom(1);
    this.tileMap = config.tileMap;
    this.speed = config.speed;
    this.scene.physics.world.enable(this);

    this.newZone = config.newZone;

    if (this.newZone) {
      const [x, y] = this.newZone.name.split("|").map(Number);
      this.newZone = { x, y };
    }

    this.passPorte = false;
    this.passWorld = false;
    this.setFrame(getStopFrame(this.scene.localPlayer.position.ld));
  }

  update() {
    this.doorInteraction();
    this.worldInteraction();
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
        console.log("Player is by door: " + obj.name);
        this.scene.gridEngine.stopMovement("player");
        setTimeout(() => {
          this.scene.cameras.main.fadeOut(700);
        }, 500);
        setTimeout(() => {
          if (!this.passPorte) {
            this.passPorte = true;
            this.scene.gridEngine.turnTowards("player", "up");
            this.changeSceneByMapName(obj.properties[0].value, "up");
          }
        }, 1000);
      }
    });
  }

  worldInteraction() {
    // Cette fonction permet de gérer les interactions avec les portes
    this.tileMap.findObject("Worlds", (obj) => {
      /* Check obj array is not empty */
      if (obj.length === 0) {
        return;
      }

      const objectWidth = obj.width;
      const objectHeight = obj.height;
      const objectX = obj.x * GAMES_INFOS.gameScale + objectWidth;
      const objectY = obj.y * GAMES_INFOS.gameScale - 125;
      if (
        this.y >= objectY &&
        this.y <= objectY + objectHeight &&
        this.x + GAMES_INFOS.tileSize >= objectX &&
        this.x + GAMES_INFOS.tileSize <= objectX + objectWidth
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

  generateRandomLevelPokemonSpawn(levelKey) {
    let [minLevel, maxLevel] = levelKey[0].value.split("|");
    minLevel = parseInt(minLevel);
    maxLevel = parseInt(maxLevel);
    const randomLevel = Math.random() * (maxLevel - minLevel + 1) + minLevel;
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
