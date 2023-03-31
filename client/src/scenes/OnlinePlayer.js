import { GameObjects } from "phaser";
import { getStopFrame } from "../utils/GetStopFrame/UtilsGetStopFrame";
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

    // Player Offset
    this.body.setOffset(0, 8); // 24

    // Get player nickname from constructor config.scene
    const userNickName = config.nickName;

    // Capitalize first letter of player nickname
    const capitalizedNickName =
      userNickName.charAt(0).toUpperCase() + userNickName.slice(1);

    console.info(`Map of ${capitalizedNickName} is ${this.map}`);

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
      .setDepth(8);

    this.updateGridEngineConfig({
      x: this.x,
      y: this.y,
      name: capitalizedNickName,
    });

    this.setFrame(getStopFrame(this.ld));
  }

  updateGridEngineConfig() {
    this.setFrame(getStopFrame(this.ld));
    this.scene.gridEngineClass.addOnlinePlayer(this.sessionId, 0, {
      x: this.x,
      y: this.y,
    });
  }

  isWalking(ld, x, y, speed, walkMapping) {
    this.playerNickname.x = x;
    this.playerNickname.y = y - 15;
    this.scene.gridEngineClass.moveOnlinePlayer(this.sessionId, ld);
    this.scene.gridEngineClass.setSpeed(this.sessionId, speed);
    this.scene.gridEngineClass.setWalkingAnimationMapping(
      this.sessionId,
      walkMapping
    );
    this.scene.gridEngineClass.setTurnTowards(
      this.sessionId,
      this.scene.gridEngineClass.getFacingDirection(ld)
    );
  }

  stopWalking() {
    this.anims.stop();
  }

  destroy() {
    super.destroy();
    this.playerNickname.destroy();
  }
}
