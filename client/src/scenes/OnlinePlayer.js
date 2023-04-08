import { GameObjects } from "phaser";
import { GAMES_INFOS } from "@/constants/GameInfos/GameInfos";

export default class OnlinePlayer extends GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.playerId, config.texture);
    this.sprites = this.scene.add.sprite(0, 0, "onlinePlayer");
    this.sprites.scale = GAMES_INFOS.spriteScale;
    this.sessionId = config.sessionId;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);
    this.scene.physics.add.collider(this, config.worldLayer);
    this.map = config.map;
    this.ld = config.ld;
    this.role = config.role;
    this.nickName = config.nickName;

    // Player Offset
    this.body.setOffset(0, 8); // 24
    // Get player nickname from constructor config.scene
    const userNickName = config.nickName;
    // Capitalize first letter of player nickname
    const capitalizedNickName =
      userNickName.charAt(0).toUpperCase() + userNickName.slice(1);

    this.updateGridEngineConfig();
  }

  updateGridEngineConfig() {
    this.scene.gridEngineClass.addOnlinePlayer(
      this.sessionId,
      0,
      {
        x: this.x,
        y: this.y,
        ld: this.ld,
      },
      this.role,
      this.nickName
    );
  }

  isWalking(ld, x, y, speed, walkMapping) {
    if (this.scene && this.scene.gridEngine) {
      this.scene.gridEngine.setSpeed(this.sessionId, speed);
      this.scene.gridEngine.moveTo(this.sessionId, { x, y });
      this.scene.gridEngineClass.setWalkingAnimationMapping(
        this.sessionId,
        walkMapping
      );
    }
  }

  stopWalking() {
    this.anims.stop();
  }

  destroy() {
    super.destroy();
  }
}
