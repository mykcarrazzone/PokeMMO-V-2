import { GameObjects } from "phaser";
// import { onlinePlayers, room } from "./SocketServer";

export default class Player extends GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);

    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);
    this.scene.physics.add.collider(this, config.worldLayer);
    this._id = this.scene.localPlayer._id;
    // Current direction of player
    this.ld = config.ld;
    this.setTexture(
      "currentPlayer",
      `misa-${this.scene.playerTexturePosition}`
    );

    // Register cursors for player movement
    this.cursors = this.scene.input.keyboard.createCursorKeys();

    // Player Offset
    this.body.setOffset(0, 24);

    // Player can't go out of the world
    this.body.setCollideWorldBounds(true);

    // Set depth (z-index)
    this.setDepth(5);

    // Container to store old data
    this.container = [];

    // Player speed
    this.speed = 150;

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
          fontSize: "14px",
          fill: this.scene.localPlayer.role !== "admin" ? "#ffffff" : "#fae953",
          stroke: "#070701",
          strokeThickness: 0,
          padding: 2.5,
          backgroundColor: "#030507d7",
        }
      )
      .setOrigin(0.5, 0.5);

    // Add spacebar input
    this.spacebar = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
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
    if (this.cursors.left.isDown) {
      this.body.setVelocityX(-this.speed);
    } else if (this.cursors.right.isDown) {
      this.body.setVelocityX(this.speed);
    }

    // Vertical movement
    if (this.cursors.up.isDown) {
      this.body.setVelocityY(-this.speed);
    } else if (this.cursors.down.isDown) {
      this.body.setVelocityY(this.speed);
    }

    // Normalize and scale the velocity so that player can't move faster along a diagonal
    this.body.velocity.normalize().scale(this.speed);

    // Update the animation last and give left/right animations precedence over up/down animations
    if (this.cursors.left.isDown) {
      this.anims.play("misa-left-walk", true);
      this.ld = "left";
    } else if (this.cursors.right.isDown) {
      this.anims.play("misa-right-walk", true);
      this.ld = "right";
    } else if (this.cursors.up.isDown) {
      this.anims.play("misa-down-walk", true);
      this.ld = "down";
    } else if (this.cursors.down.isDown) {
      this.anims.play("misa-up-walk", true);
      this.ld = "up";
    } else {
      this.anims.stop();

      // If we were moving, pick and idle frame to use
      if (prevVelocity.x < 0) this.setTexture("currentPlayer", "misa-left");
      else if (prevVelocity.x > 0)
        this.setTexture("currentPlayer", "misa-right");
      else if (prevVelocity.y < 0)
        this.setTexture("currentPlayer", "misa-down");
      else if (prevVelocity.y > 0) this.setTexture("currentPlayer", "misa-up");
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

  doorInteraction() {
    this.scene.map.findObject("Doors", (obj) => {
      if (
        this.y >= obj.y &&
        this.y <= obj.y + obj.height &&
        this.x >= obj.x &&
        this.x <= obj.x + obj.width
      ) {
        console.log("Player is by " + obj.name);
        if (this.spacebar.isDown) {
          console.log("Door is open!");
        }
      }
    });
  }

  worldInteraction() {
    this.scene.map.findObject("Worlds", (world) => {
      if (
        this.y >= world.y &&
        this.y <= world.y + world.height &&
        this.x >= world.x &&
        this.x <= world.x + world.width
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
        console.log(this.scene.socket);
        console.log(this.scene.localPlayer);

        this.scene.localPlayer.onMap = world.name;
        this.scene.localPlayer.position.x = this.x;
        this.scene.localPlayer.position.y = this.y;

        // DÉTRUIRE LES OBJETS DE LA SCÈNE

        // Redémarrr la scène en utilisant les copies des objets localPlayer et socket
        this.scene.socket.emit("PLAYER_PASS_IN_NEW_MAP", {
          _id: this._id,
          position: {
            x: this.x,
            y: this.y,
            ld: this.ld,
          },
          onMap: world.name,
          isMoving: this.isMoving,
        });

        this.scene.registry.destroy();
        this.scene.events.off();
        this.scene.scene.restart({
          user: this.scene.localPlayer,
          socket: this.scene.socket,
          hasChangedScene: true,
        });

        // room.then((room) =>
        //   room.send({
        //     event: "PLAYER_CHANGED_MAP",
        //     map: world.name,
        //   })
        // );
      }
    });
  }
}
