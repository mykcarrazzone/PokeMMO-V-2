import { GameObjects } from "phaser";
import { attributeKeys } from "./functions/keyboard/attributeKeys";

export default class Player extends GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);

    this.bump = this.scene.sound.add("bump", {
      loop: false,
      volume: 0.7,
    });

    this.scene.physics.add.collider(this, config.worldLayer, () => {
      // console.log("Collision");
      if (this.body.touching) {
        if (!this.bump.isPlaying) {
          this.bump.play();
        }
      }
    });

    this._id = this.scene.localPlayer._id;
    // Current direction of player
    this.ld = config.ld;
    this.newZone = config.newZone;
    this.battleZones = config.battleZones;
    this.isMoving = false;

    if (this.newZone) {
      const [x, y] = this.newZone.name.split("|").map(Number);
      this.newZone = { x, y };
    }
    // Register cursors for player movement
    this.cursors = this.scene.input.keyboard.createCursorKeys();

    // Player Offset
    this.body.setOffset(0, 8); // PREMIER PARAMETRE EST LA POSITION EN X, DEUXIEME PARAMETRE EST LA POSITION EN Y
    this.body.setSize(24, 24); // PREMIER PARAMETRE EST LA TAILLE EN X, DEUXIEME PARAMETRE EST LA TAILLE EN Y
    // Player can't go out of the world
    this.body.setCollideWorldBounds(true);
    // Set depth (z-index)
    this.setDepth(28);

    // Container to store old data
    this.container = [];

    // Player speed
    this.speed = 256;
    this.body.setMaxVelocity(256, 256);

    this.canChangeMap = true;

    this.tileSize = 32;
    this.moveSpeed = 200;
    this.targetTileX = null;
    this.targetTileY = null;
    this.direction = null;
    this.isMoving = false;
  }
  moveLeft() {
    if (!this.isMoving) {
      this.targetTileX = Math.floor(this.x / this.tileSize) - 1;
      this.targetTileY = Math.floor(this.y / this.tileSize);
      this.ld = "left";
      this.isMoving = true;
    }
  }

  moveRight() {
    if (!this.isMoving) {
      this.targetTileX = Math.floor(this.x / this.tileSize) + 1;
      this.targetTileY = Math.floor(this.y / this.tileSize);
      this.ld = "right";
      this.isMoving = true;
    }
  }

  moveUp() {
    if (!this.isMoving) {
      this.targetTileX = Math.floor(this.x / this.tileSize);
      this.targetTileY = Math.floor(this.y / this.tileSize) - 1;
      this.ld = "up";
      this.isMoving = true;
    }
  }

  moveDown() {
    if (!this.isMoving) {
      this.targetTileX = Math.floor(this.x / this.tileSize);
      this.targetTileY = Math.floor(this.y / this.tileSize) + 1;
      this.ld = "down";
      this.isMoving = true;
    }
  }

  update(time, delta) {
    // Show player nickname above player
    this.showPlayerNickname();

    // Player door interaction
    this.doorInteraction();

    this.battleZoneInteraction();
    // Player world interaction
    this.worldInteraction();

    // Stop any previous movement from the last frame
    this.body.setVelocity(0);
    this.movePlayerToNextTile();
  }

  movePlayerToNextTile() {
    attributeKeys(this);

    if (this.isMoving) {
      const distanceX = this.targetTileX * this.tileSize - this.x;
      const distanceY = this.targetTileY * this.tileSize - this.y;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance <= (this.moveSpeed * this.scene.game.loop.delta) / 1000) {
        this.x = this.targetTileX * this.tileSize;
        this.y = this.targetTileY * this.tileSize;
        this.isMoving = false;
        this.body.setVelocity(0);
      } else {
        const angle = Math.atan2(distanceY, distanceX);
        const velocityX = Math.cos(angle) * this.moveSpeed;
        const velocityY = Math.sin(angle) * this.moveSpeed;
        this.body.setVelocity(velocityX, velocityY);
      }
    }

    if (this.isLeftPressed) {
      if (this.x > 0) {
        this.moveLeft();
      } else {
        this.body.setVelocityX(0);
      }
    } else if (this.isRightPressed) {
      if (this.x < this.scene.physics.world.bounds.width) {
        this.moveRight();
      } else {
        this.body.setVelocityX(0);
      }
    } else if (this.isUpPressed) {
      if (this.y > 0) {
        this.moveUp();
      } else {
        this.body.setVelocityY(0);
      }
    } else if (this.isDownPressed) {
      if (this.y < this.scene.physics.world.bounds.height) {
        this.moveDown();
      } else {
        this.body.setVelocityY(0);
      }
    }
  }

  showPlayerNickname() {}

  isMoved() {
    if (
      this.container.oldPosition &&
      (this.container.oldPosition.x !== this.x ||
        this.container.oldPosition.y !== this.y ||
        this.container.oldPosition.ld !== this.ld)
    ) {
      this.container.oldPosition = { x: this.x, y: this.y, ld: this.ld };
      return true;
    } else {
      this.container.oldPosition = { x: this.x, y: this.y, ld: this.ld };
      return false;
    }
  }

  doorInteraction() {
    this.scene.map.findObject("Doors", (obj) => {
      const objectX = obj.x * 2;
      const objectY = obj.y * 2;
      const objectWidth = obj.width * 2.5;
      const objectHeight = obj.height * 3.1;

      if (
        this.y >= objectY &&
        this.y <= objectY + objectHeight &&
        this.x >= objectX &&
        this.x <= objectX + objectWidth
      ) {
        console.log("Player is by " + obj.name);

        switch (obj.name) {
          case "DoorB":
            console.log("Door is open!");
            this.changeSceneByMapName("SnowTownDoorB");
            break;
          case "DoorC":
            console.log("Door is open!");
            this.changeSceneByMapName("SnowTownDoorC");
            break;
        }
      }
    });
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

  generateRandomLevelPokemonSpawn(levelKey) {
    let [minLevel, maxLevel] = levelKey[0].value.split("|");
    minLevel = parseInt(minLevel);
    maxLevel = parseInt(maxLevel);
    const randomLevel =
      Math.floor(Math.random() * (maxLevel - minLevel + 1)) + minLevel;
    return `Pokemon spawned at level ${randomLevel}`;
  }

  worldInteraction() {
    this.scene.map.findObject("Worlds", (world) => {
      const worldX = world.x * 2;
      const worldY = world.y * 2;
      const worldWidth = world.width * 3;
      const worldHeight = world.height * 3;
      if (
        this.y >= worldY &&
        this.y <= worldY + worldHeight &&
        this.x >= worldX &&
        this.x <= worldX + worldWidth
      ) {
        console.log("Player is by world entry: " + world.name);

        // Get playerTexturePosition from from Worlds object property
        let playerTexturePosition;
        if (world.properties)
          playerTexturePosition = world.properties.find(
            (property) => property.name === "playerTexturePosition"
          );
        if (playerTexturePosition)
          this.playerTexturePosition = playerTexturePosition.value;

        // CHARGE UNE NOUVELLE ZONE DE JEU
        this.changeSceneByMapName(world.name);
      }
    });
  }

  changeSceneByMapName(worldName) {
    console.log("MA MAP : " + worldName);
    this.scene.localPlayer.onMap = worldName;
    this.scene.localPlayer.position.x = this.x;
    this.scene.localPlayer.position.y = this.y;
    this.scene.localPlayer.hasConnectedBefore = false;
    console.log("ma zonneee", this.newZone);

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
        x: this.x,
        y: this.y,
        ld: this.ld,
      },
      onMap: worldName,
      isMoving: this.isMoving,
    });

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
}
