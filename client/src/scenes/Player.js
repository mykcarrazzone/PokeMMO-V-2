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

    // Register cursors for player movement
    this.cursors = this.scene.input.keyboard.createCursorKeys();

    // Player Offset
    this.body.setOffset(0, 8); // PREMIER PARAMETRE EST LA POSITION EN X, DEUXIEME PARAMETRE EST LA POSITION EN Y
    this.body.setSize(24, 24); // PREMIER PARAMETRE EST LA TAILLE EN X, DEUXIEME PARAMETRE EST LA TAILLE EN Y
    // Player can't go out of the world
    this.body.setCollideWorldBounds(true);
    // Set depth (z-index)
    this.setDepth(9);

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
    this.playerNickname = this.scene.add
      .text(
        this.x - this.width,
        this.y - this.height - 25,
        this.scene.localPlayer.role !== "admin"
          ? capitalizedNickName
          : `[GM] ${capitalizedNickName}`,
        {
          fontFamily: "Arial",
          fontSize: "13px",
          fill: this.scene.localPlayer.role !== "admin" ? "#ffffff" : "#fae953",
          stroke: "#070701",
          strokeThickness: 0,
          padding: 1,
          backgroundColor: "#030507d7",
        }
      )
      .setOrigin(0.5, 0.5)
      .setDepth(9);

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

    // Player world interaction
    this.worldInteraction();

    // Stop any previous movement from the last frame
    this.body.setVelocity(0);

    // Horizontal movement
    if (this.cursors.left.isDown || this.keys.left.isDown) {
      this.body.setVelocityX(-this.speed);
    } else if (this.cursors.right.isDown || this.keys.right.isDown) {
      this.body.setVelocityX(this.speed);
    }

    // Vertical movement
    if (this.cursors.up.isDown || this.keys.up.isDown) {
      this.body.setVelocityY(-this.speed);
    } else if (this.cursors.down.isDown || this.keys.down.isDown) {
      this.body.setVelocityY(this.speed);
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
    this.playerNickname.x = this.x;
    this.playerNickname.y = this.y - 25;
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

  changeSceneByMapName(worldName, worldNamePosition) {
    this.scene.localPlayer.onMap = worldName;
    this.scene.localPlayer.position.x = this.x;
    this.scene.localPlayer.position.y = this.y;

    this.scene.socket.emit("PLAYER_PASS_IN_NEW_MAP", {
      _id: this._id,
      position: {
        x: this.x,
        y: this.y,
        ld: this.ld,
      },
      onMap: worldNamePosition ? worldNamePosition : worldName,
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
      hasChangedScene: true,
    });
  }

  doorInteraction() {
    this.scene.map.findObject("Doors", (obj) => {
      const objectX = obj.x * 2;
      const objectY = obj.y * 2;
      const objectWidth = obj.width * 2;
      const objectHeight = obj.height * 2;

      if (
        this.y >= objectY &&
        this.y <= objectY + objectHeight &&
        this.x >= objectX &&
        this.x <= objectX + objectWidth
      ) {
        console.log("Player is by " + obj.name);
        if (this.spacebar.isDown) {
          switch (obj.name) {
            case "DoorB":
              console.log("Door is open!");
              this.changeSceneByMapName("SnowTownDoorB", "SnowTownOutDoorB");
              break;
            case "DoorC":
              console.log("Door is open!");
              this.changeSceneByMapName("SnowTownDoorC", "SnowTownOutDoorC");
              break;
          }
        }
      }
    });
  }

  worldInteraction() {
    this.scene.map.findObject("Worlds", (world) => {
      const worldX = world.x * 2;
      const worldY = world.y * 2;
      const worldWidth = world.width * 2;
      const worldHeight = world.height * 2;
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

        // Load new level (tiles map)
        this.changeSceneByMapName(world.name);
      }
    });
  }

  // Fonction pour mettre à jour la position du joueur sur la grille
  updateGridPosition(direction) {
    // Calculer la nouvelle position sur la grille
    let newGridPosition = this.currentGridPosition.clone().add(direction);

    // Mettre à jour la position actuelle du joueur sur la grille
    this.currentGridPosition.copy(newGridPosition);

    // Mettre à jour la position réelle du joueur
    this.body.x = this.currentGridPosition.x;
    this.body.y = this.currentGridPosition.y;
  }
}
