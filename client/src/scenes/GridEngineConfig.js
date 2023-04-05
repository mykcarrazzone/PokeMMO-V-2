import Player from "./Player";
import { GAMES_INFOS } from "@/constants/GameInfos/GameInfos";
import { GAME_UTILITIES } from "@/services/Game/ServicesGamesRouter/ServicesGames";
export class GridEngineCreate {
  gridEngineConfig = {
    characters: [],
  };
  constructor(self) {
    this.self = self;
    this.map = self.map;
    this.gridEngine = self.gridEngine;
    this.add = self.add;
  }

  //*************** ADD NPC *****************//
  addNpc(npc) {
    const newSprite = this.add.sprite(0, 0, "npc");
    newSprite.scale = GAMES_INFOS.spriteScale;
    this.gridEngine.addCharacter({
      id: npc.id,
      sprite: newSprite,
      walkingAnimationMapping: npc.walkingAnimationMapping,
      startPosition: { x: npc.x, y: npc.y },
      speed: npc.speed,
      collides: npc.collides,
    });
  }

  //*************** GETTERS WALKING ANIMATION MAPPING BY ID *****************//
  moveNpc(id, delay) {
    this.gridEngine.moveRandomly(id, delay);
  }

  //*************** SETTERS SPEED BY ID *****************//
  setSpeed(id, speed) {
    this.gridEngine.setSpeed(id, speed);
  }

  //*************** GETTERS POSITION BY ID *****************//
  getPosition(id) {
    return this.gridEngine.getPosition(id);
  }

  //*************** SET TURNTOWARD DIRECTION BY ID *****************//
  setTurnTowards(id, direction) {
    this.gridEngine.turnTowards(id, direction);
  }

  //*************** SETTERS POSITION BY ID *****************//
  setPosition(id, position) {
    this.gridEngine.setPosition(id, position);
  }

  //*************** SETTERS WALKING ANIMATION MAPPING BY ID *****************//
  setWalkingAnimationMapping(id, walkingAnimationMapping) {
    this.gridEngine.setWalkingAnimationMapping(id, walkingAnimationMapping);
  }

  //*************** ADD LOCAL CURRENT PLAYER *****************//
  setPlayer() {
    this.self.player = new Player({
      scene: this.self,
      x: this.self.localPlayer.position.x,
      y: this.self.localPlayer.position.y,
      texture: "player",
      frame: "up",
      tileMap: this.self.map,
      newZone: this.self.newZone,
      speed: this.self.localPlayer.position.speed,
    });

    this.self.cameras.main.startFollow(this.self.player, true);
    this.self.player.isCrossActivated =
      GAME_UTILITIES.servicesGetMapProperties().bike;

    this.gridEngineConfig = {
      characters: [
        {
          id: "player",
          sprite: this.self.player,
          walkingAnimationMapping:
            this.self.localPlayer.walkingAnimationMapping,
          startPosition: { x: this.self.player.x, y: this.self.player.y },
          speed: this.self.player.speed,
          collides: true,
        },
      ],
    };

    this.gridEngine.create(this.map, this.gridEngineConfig);
    this.self.walk = this.self.sound.add("walk", {
      loop: false,
      volume: 0.2,
      rate: 1,
    });

    console.info(
      "%c Actual player position: ",
      "color: blue; font-weight: bold",
      this.gridEngine.getPosition("player")
    );

    // INIT LAST DIRECTON
    this.gridEngine.turnTowards("player", this.self.localPlayer.position.ld);

    this.gridEngine.directionChanged().subscribe(({ charId, direction }) => {
      if (charId == "player") {
        if (this.self.bump.isPlaying) {
          this.self.bump.stop();
        } else {
          this.self.bump.play();
        }
      }
    });

    this.gridEngine.positionChangeFinished().subscribe(({ charId }) => {
      if (charId == "player") {
        this.self.socket.emit("PLAYER_MOVING", {
          _id: this.self.player._id,
          position: {
            x: this.gridEngine.getPosition("player").x,
            y: this.gridEngine.getPosition("player").y,
            ld: this.gridEngine.getFacingDirection("player"),
            speed: this.gridEngine.getSpeed("player"),
          },
          onMap: this.self.mapName,
          walkingAnimationMapping:
            this.gridEngine.getWalkingAnimationMapping("player"),
          isMoving: this.gridEngine.isMoving("player"),
        });
      }
    });
  }
  //*************** END ADD LOCAL CURRENT PLAYER *****************//

  //*************** MOVE LOCAL CURRENT PLAYER *****************//
  playerUpdate() {
    if (this.gridEngine.isMoving("player")) {
      this.self.player.update();
      if (!this.self.walk.isPlaying) {
        this.self.walk.play();
      }
    }
  }

  getSpeed(id) {
    return this.gridEngine.getSpeed(id);
  }

  //*************** ADD ONLINE PLAYER *****************//
  addOnlinePlayer(sessionId, spriteId, position, role, nickName) {
    this.onlinePlayerSprite = this.add.sprite(0, 0, "onlinePlayer");
    const labelText = role !== "admin" ? nickName : `<GM> ${nickName}`;

    this.textLabel = this.add
      .text(this.onlinePlayerSprite.width / 2, 5, labelText, {
        fontFamily: "Roboto",
        fontSize: "16px",
        fill: role !== "admin" ? "#ffffff" : "#f0db25",
        stroke: "#070701",
        strokeThickness: 0,
        padding: 3,
        backgroundColor: "#030507d7",
      })
      .setOrigin(0.5, 0.5);

    const container = this.add.container(0, 0, [
      this.onlinePlayerSprite,
      this.textLabel,
    ]);

    this.onlinePlayerSprite.scale = 1.13;
    this.gridEngine.addCharacter({
      id: sessionId,
      sprite: this.onlinePlayerSprite,
      container,
      walkingAnimationMapping: spriteId,
      startPosition: { x: position.x, y: position.y },
      speed: 3,
      collides: false,
    });
    this.gridEngine.turnTowards(sessionId, position.ld);
  }

  //*************** REMOVE ONLINE PLAYER *****************//
  removeOnlinePlayer(sessionId) {
    if (this.gridEngine.hasCharacter(sessionId)) {
      this.gridEngine.removeCharacter(sessionId);
      this.textLabel.destroy();
      this.onlinePlayerSprite.destroy();
    }
  }

  //*************** MOVE ONLINE PLAYER *****************//
  moveOnlinePlayer(sessionId, direction) {
    this.gridEngine.move(sessionId, direction);
  }
}
