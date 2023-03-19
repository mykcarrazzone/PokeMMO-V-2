import { GameObjects } from "phaser";
import { pixelPositionToGrid } from "./functions/player/pixelPositionToGrid";
export default class OnlinePlayer extends GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.playerId, config.texture);
    this.sprites = this.scene.add.sprite(0, 0, "onlinePlayer");
    this.sprites.scale = 1.1;
    console.log("SESSION ID : " + config.sessionId);
    this.sessionId = config.sessionId;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);
    this.scene.physics.add.collider(this, config.worldLayer);

    this.map = config.map;

    // Player Offset
    this.body.setOffset(0, 8); // 24
    // Get player nickname from constructor config.scene
    const userNickName = config.nickName;
    // Capitalize first letter of player nickname
    const capitalizedNickName =
      userNickName.charAt(0).toUpperCase() + userNickName.slice(1);
    console.log(`Map of ${capitalizedNickName} is ${this.map}`);
    this.position = {
      x: this.x,
      y: this.y,
    };
    // Display playerId above player
    this.playerNickname = this.scene.add
      .text(
        this.x,
        this.y - 15,
        config.role !== "admin"
          ? capitalizedNickName
          : `[GM] ${capitalizedNickName}`,
        {
          fontFamily: "Arial",
          fontSize: "14px",
          fill: config.role !== "admin" ? "#ffffff" : "#fae953",
          stroke: "#070701",
          strokeThickness: 0,
          padding: 2.5,
          backgroundColor: "#030507d7",
        }
      )
      .setOrigin(0.5, 0.5)
      .setDepth(8);

    this.updateGridEngineConfig({
      x: this.x,
      y: this.y,
      name: capitalizedNickName,
    });

    this.setFrame(this.getStopFrame(this.ld));
  }

  updateGridEngineConfig(newPlayer) {
    // const { x, y, name } = newPlayer;

    // // Ajouter le nouveau joueur à la configuration Grid Engine
    // this.scene.gridEngineConfig.characters.push({
    //   id: this.sessionId,
    //   sprite: this.sprites,
    //   walkingAnimationMapping: 0,
    //   startPosition: { x: pixelPositionToGrid(x), y: pixelPositionToGrid(y) },
    //   speed: 3,
    // });

    // // Recréer la grille avec la nouvelle configuration
    // this.scene.gridEngine.create(this.scene.map, this.scene.gridEngineConfig);
    this.setFrame(this.getStopFrame(this.ld));
    this.scene.gridEngineClass.addOnlinePlayer(this.sessionId, 0, {
      x: pixelPositionToGrid(this.x),
      y: pixelPositionToGrid(this.y),
    });
    console.log(this.scene.gridEngineClass);
  }
  getStopFrame(frame) {
    switch (frame) {
      case "down":
        return 1;
      case "left":
        return 13;
      case "right":
        return 25;
      case "up":
        return 37;
    }
  }

  isWalking(position, x, y) {
    if (this && this.anims) {
      this.playerNickname.x = this.x;
      this.playerNickname.y = this.y - 15;
      this.scene.gridEngineClass.moveOnlinePlayer(this.sessionId, position);
    }
  }

  stopWalking(position) {
    this.anims.stop();
  }

  destroy() {
    super.destroy();
    this.playerNickname.destroy();
  }
}
