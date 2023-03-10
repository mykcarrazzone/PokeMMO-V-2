import { GameObjects } from "phaser";

export default class OnlinePlayer extends GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.playerId);

    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);
    this.scene.physics.add.collider(this, config.worldLayer);

    this.setTexture("players", "bob_front.png").setScale(0.5);

    this.map = config.map;

    // Player Offset
    this.body.setOffset(0, 24);

    // Get player nickname from constructor config.scene
    const userNickName = config.nickName;
    // Capitalize first letter of player nickname
    const capitalizedNickName =
      userNickName.charAt(0).toUpperCase() + userNickName.slice(1);
    console.log(`Map of ${capitalizedNickName} is ${this.map}`);

    // Display playerId above player
    this.playerNickname = this.scene.add
      .text(
        this.x,
        this.y - 25,
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
      .setOrigin(0.5, 0.5).setDepth(8);
  }

  isWalking(position, x, y) {
    if (this && this.anims) {
      // Player
      this.anims.play(`misa-${position}-walk`, true);
      this.setPosition(x, y);

      // PlayerId
      this.playerNickname.x = this.x;
      this.playerNickname.y = this.y - 25;
    }
  }

  stopWalking(position) {
    this.anims.stop();
    this.setTexture("players", `misa_${position}.png`);
  }

  destroy() {
    super.destroy();
    this.playerNickname.destroy();
  }
}
