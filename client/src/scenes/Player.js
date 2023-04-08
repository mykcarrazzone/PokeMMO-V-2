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
    this.scale = 1.13;
    this.tileMap = config.tileMap;
    this.speed = config.speed;
    this.newZone = config.newZone;
    this.passPorte = false;
    this.passWorld = false;
    this.spaceKeyPressed = false;
    // GESTION KEYBOARD INPUT SPACE CLICKED
    this.scene.input.keyboard.on("keydown-SPACE", this.onSpaceKeyClicked, this);
    this.lastPlayerTile = null;
  }

  onSpaceKeyClicked() {
    this.spaceKeyPressed = !this.spaceKeyPressed;
    this.npcInteraction();
    this.messageInteraction();
    // Réinitialisez l'état de spaceKeyPressed
    this.spaceKeyPressed = false;
  }

  npcInteraction() {
    if (!this.spaceKeyPressed) {
      return;
    }

    this.tileMap.findObject("Npc", (obj) => {
      /* Check obj array is not empty */
      if (obj.length === 0) {
        return;
      }
      const objectX = obj.x * 3.985;
      const objectY = obj.y * 3.94;

      const beforeScene = this.scene;
      var distance = Phaser.Math.Distance.Between(
        this.x,
        this.y,
        objectX,
        objectY
      );
      if (distance < 78) {
        const name = obj.name;
        const direction = obj.properties[0].value;
        const message = obj.properties[1].value;
        const npcMoveTo = obj.properties[2].value; // "true|64|56"
        const [isMovable, x, y] = npcMoveTo.split("|");
        const type = "npc";
        const npcInteraction = {
          isMovable: isMovable,
          x: x,
          y: y,
        };
        const heroFacingDirection =
          this.scene.gridEngine.getFacingDirection("player");
        this.scene.gridEngine.turnTowards(
          name,
          this.npcLookAtPlayer(heroFacingDirection)
        );
        this.scene.scene.launch("DialogMessage", {
          type,
          name,
          message,
          beforeScene,
          direction,
          npcInteraction,
        });
      }
    });
  }

  messageInteraction() {
    if (!this.spaceKeyPressed) {
      return;
    }

    this.tileMap.findObject("Message", (obj) => {
      /* Check obj array is not empty */
      if (obj.length === 0) {
        return;
      }
      const objectX = obj.x * 3.985;
      const objectY = obj.y * 3.94;

      var distance = Phaser.Math.Distance.Between(
        this.x,
        this.y,
        objectX,
        objectY
      );
      if (distance < 78) {
        const name = obj.name;
        const message = obj.properties[0].value;
        const beforeScene = this.scene;
        const type = "message";
        console.log("proche de", name);
        this.scene.scene.launch("DialogMessage", {
          type,
          name,
          message,
          beforeScene,
        });
      }
    });
  }

  update() {
    this.doorInteraction();
    this.battleZoneInteraction();
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

  npcLookAtPlayer(direction) {
    switch (direction) {
      case "up":
        return "down";
      case "down":
        return "up";
      case "left":
        return "right";
      case "right":
        return "left";
    }
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
    const randomLevel = Phaser.Math.Between(minLevel, maxLevel);
    // 1 une chance sur GAME_INFOS.pokemonEncounterRate de faire apparaitre un pokemon
    const randomChance = Phaser.Math.Between(
      1,
      GAMES_INFOS.pokemonEncounterRate
    );
    this.battleZoneInteractionExecuted = false;
    if (randomChance === GAMES_INFOS.pokemonEncounterRate) {
      return `Pokemon spawned at level ${randomLevel}`;
    } else {
      return `No pokemon spawned`;
    }
  }

  battleZoneInteraction() {
    if (this.scene) {
      if (this.scene.gridEngine.isMoving("player")) {
        // Vérifier si le calque "Battle Zones" existe
        const battleZoneLayer = this.scene.battleZonesLayer;

        if (!battleZoneLayer) {
          // Si le calque n'existe pas, on ne fait rien
          return;
        }

        const playerTile = battleZoneLayer.worldToTileXY(this.x, this.y);

        // Si le joueur est sur la même tuile que précédemment, on ne fait rien
        if (
          playerTile.x === this.lastPlayerTile?.x &&
          playerTile.y === this.lastPlayerTile?.y
        ) {
          return;
        }

        // Si le joueur est sur une nouvelle tuile, on met à jour lastPlayerTile et on effectue l'interaction
        this.lastPlayerTile = playerTile;

        const currentTile = battleZoneLayer.getTileAt(
          playerTile.x,
          playerTile.y
        );
        if (currentTile) {
          const layerProperties = battleZoneLayer.layer.properties;
          const pokemonSpawnStartBattle =
            this.generateRandomLevelPokemonSpawn(layerProperties);
          console.log(pokemonSpawnStartBattle);
        }
      }
    }
  }

  destroyVariables() {
    this.scene.sounds["se"].walk.stop();
    this.scene.sounds["se"].bike.stop();
    this.scene.currentState = "normal";
    this.scene.isCrossActivated = false;
    this.scene.dayCycleRectangle = null;
    this.scene.lightningDurations = [];
    this.scene.lightningStartDurations = [];
    this.scene.flashRectangle = null;
    console.log("weather is not rain");
    this.scene.audioRain
      ? (this.scene.audioRain = null)
      : console.log("audioRain already destroyed");
    this.scene.flashRectangle
      ? this.scene.flashRectangle.destroy()
      : console.log("flashRectangle already destroyed");
  }

  destroyScene() {
    this.destroyVariables();
    // DÉTRUIRE LES OBJETS DE LA SCÈNE
    this.scene.registry.destroy();
    this.scene.events.off();
    this.scene.sound.stopAll();
  }
}
