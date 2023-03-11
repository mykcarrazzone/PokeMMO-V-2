import { GameObjects } from "phaser";
// import { onlinePlayers, room } from "./SocketServer";

export default class Player extends GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);

    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);
    this.scene.physics.add.collider(this, config.worldLayer, () => {
      // console.log("Collision");
      // DRAW ON COLLISION
    });
    this.keys = {
      up: this.scene.input.keyboard.addKey("Z"),
      down: this.scene.input.keyboard.addKey("S"),
      left: this.scene.input.keyboard.addKey("Q"),
      right: this.scene.input.keyboard.addKey("D"),
    };
    this._id = this.scene.localPlayer._id;
    // Current direction of player
    this.ld = config.ld;
    this.newZone = config.newZone;
    this.battleZones = config.battleZones;
    this.isMoving = false;
    console.log("NEW ZONE IN PLAYER", this.newZone);
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

    // Get player nickname from constructor config.scene
    const userNickName = this.scene.localPlayer.nickName;
    // Capitalize first letter of player nickname
    const capitalizedNickName =
      userNickName.charAt(0).toUpperCase() + userNickName.slice(1);

    // Player nickname text by role grade
    // this.playerNickname = this.scene.add
    //   .text(
    //     this.x - this.width,
    //     this.y - this.height - 25,
    //     this.scene.localPlayer.role !== "admin"
    //       ? capitalizedNickName
    //       : `[GM] ${capitalizedNickName}`,
    //     {
    //       fontFamily: "Arial",
    //       fontSize: "13px",
    //       fill: this.scene.localPlayer.role !== "admin" ? "#ffffff" : "#fae953",
    //       stroke: "#070701",
    //       strokeThickness: 0,
    //       padding: 1,
    //       backgroundColor: "#030507d7",
    //     }
    //   )
    //   .setOrigin(0.5, 0.5)
    //   .setDepth(9);

    // Add spacebar input
    this.spacebar = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    ); // Stocker la position actuelle du joueur
    this.currentGridPosition = new Phaser.Math.Vector2(
      this.body.x,
      this.body.y
    );
  }

  update(time, delta) {
    const prevVelocity = this.body.velocity.clone();

    // Show player nickname above player
    this.showPlayerNickname();

    // Player door interaction
    this.doorInteraction();

    this.battleZoneInteraction();
    // Player world interaction
    this.worldInteraction();

    // Stop any previous movement from the last frame
    this.body.setVelocity(0);

    // Horizontal movement
    if (this.cursors.left.isDown || this.keys.left.isDown) {
      this.body.setVelocityX(-this.speed);
      this.isMoving = true;
    } else if (this.cursors.right.isDown || this.keys.right.isDown) {
      this.body.setVelocityX(this.speed);
      this.isMoving = true;
    }

    // Vertical movement
    if (this.cursors.up.isDown || this.keys.up.isDown) {
      this.body.setVelocityY(-this.speed);
      this.isMoving = true;
    } else if (this.cursors.down.isDown || this.keys.down.isDown) {
      this.body.setVelocityY(this.speed);
      this.isMoving = true;
    }

    // Gérer les événements de touche en déplaçant le joueur sur la grille

    // Normalize and scale the velocity so that player can't move faster along a diagonal
    this.body.velocity.normalize().scale(this.speed);

    // Update the animation last and give left/right animations precedence over up/down animations
    if (this.cursors.left.isDown || this.keys.left.isDown) {
      this.body.setVelocityX(-this.speed);
      this.anims.play("hero_01_admin_m_walk", true);
      this.ld = "left";
    } else if (this.cursors.right.isDown || this.keys.right.isDown) {
      this.body.setVelocityX(this.speed);
      this.anims.play("hero_01_admin_m_walk", true);
      this.ld = "right";
    } else {
      this.anims.stop();
      this.isMoving = false;

      // If we were moving, pick and idle frame to use
      // if (prevVelocity.x < 0) this.setTexture("currentPlayer", "misa-left");
      // else if (prevVelocity.x > 0)
      //   this.setTexture("currentPlayer", "misa-right");
      // else if (prevVelocity.y < 0)
      //   this.setTexture("currentPlayer", "misa-down");
      // else if (prevVelocity.y > 0) this.setTexture("currentPlayer", "misa-up");
    }
  }

  showPlayerNickname() {
    // this.playerNickname.x = this.x;
    // this.playerNickname.y = this.y - 25;
  }

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
            // A UNE CHANCE SUR 10 DE SPAWNER UN POKEMON SI LE PLAYER BOUGE
            // A UNE CHANCE SUR 6 DE SPAWNER UN POKEMON SI LE PLAYER BOUGE
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
        this.changeSceneByMapName(world.name);

        // Load new level (tiles map)
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
    // DESTROY AUDIO
    this.scene.scene.restart({
      user: this.scene.localPlayer,
      socket: this.scene.socket,
      changedSceneData: this.changedSceneData,
    });
  }
}
