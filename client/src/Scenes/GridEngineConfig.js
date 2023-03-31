import Player from "./Player";
import { GameInfos } from "../constants/GameInfos/GameInfos";
export class GridEngineCreate {
  gridEngineConfig = {
    characters: [],
  };
  canCrossRun = false;
  constructor(self) {
    this.self = self;
    this.map = self.map;
    this.gridEngine = self.gridEngine;
    this.add = self.add;
  }

  //*************** ADD NPC *****************//
  addNpc(npc) {
    const newSprite = this.add.sprite(0, 0, "npc");
    newSprite.scale = GameInfos.spriteScale;
    this.gridEngine.addCharacter({
      id: npc.id,
      sprite: newSprite,
      walkingAnimationMapping: npc.walkingAnimationMapping,
      startPosition: { x: npc.x, y: npc.y },
      speed: npc.speed,
      collides: npc.collides,
    });
  }

  setCantCrossRun(bool) {
    this.canCrossRun = bool;
  }

  getCantCrossRun() {
    return this.canCrossRun;
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
    if (this.self.spawnPoint !== undefined && this.self.spawnPoint !== null) {
      console.log(this.self.spawnPoint);
      this.value = this.self.spawnPoint.properties[0].value.split("|");
      this.spawnPointX = parseInt(this.value[0]);
      this.spawnPointY = parseInt(this.value[1]);
    }
    this.player = new Player({
      scene: this.self,
      x: this.self.localPlayer.hasConnectedBefore
        ? this.self.localPlayer.position.x
        : this.self.changedSceneData.isChanged
        ? this.self.changedSceneData.x
        : this.spawnPointX,
      y: this.self.localPlayer.hasConnectedBefore
        ? this.self.localPlayer.position.y
        : this.self.changedSceneData.isChanged
        ? this.self.changedSceneData.y
        : this.spawnPointY,
      texture: "player",
      frame: "up",
      tileMap: this.self.map,
      newZone: this.self.newZone,
      speed: this.self.localPlayer.position.speed,
    });

    this.player.isCrossActivated = this.getCantCrossRun();

    this.player.body.onWorldBounds = true;
    this.self.physics.add.collider(this.player, this.self.collides);

    this.gridEngineConfig.characters.push({
      id: "player",
      sprite: this.player,
      walkingAnimationMapping: this.self.localPlayer.walkingAnimationMapping,
      startPosition: { x: this.player.x, y: this.player.y },
      speed: this.player.speed,
      collides: true,
    });

    this.gridEngine.create(this.map, this.gridEngineConfig);

    console.log(
      "ACTUAL PLAYER POSITION: ",
      this.gridEngine.getPosition("player")
    );
    // INIT LAST DIRECTON
    this.gridEngine.turnTowards("player", this.self.localPlayer.position.ld);

    this.bump = this.self.sound.add("bump", {
      loop: false,
      volume: 0.7,
    });

    this.gridEngine.directionChanged().subscribe(({ charId, direction }) => {
      if (charId == "player") {
        if (this.bump.isPlaying) {
          this.bump.stop();
        } else {
          this.bump.play();
        }
      }
    });

    this.gridEngine.positionChangeStarted().subscribe(({ charId }) => {
      if (charId == "player") {
        this.self.socket.emit("PLAYER_MOVING", {
          _id: this.player._id,
          position: {
            x: this.gridEngine.getPosition("player").x,
            y: this.gridEngine.getPosition("player").y,
            ld: this.gridEngine.getFacingDirection("player"),
            speed: this.gridEngine.getSpeed("player"),
          },
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
      this.player.update();
    }

    if (this.gridEngine.isMoving("player")) {
      if (!this.self.walk.isPlaying) {
        this.self.walk.play();
      }
    }
  }

  //*************** ADD ONLINE PLAYER *****************//
  addOnlinePlayer(sessionId, spriteId, position) {
    this.onlinePlayerSprite = this.add.sprite(0, 0, "onlinePlayer");
    this.onlinePlayerSprite.scale = 1.1;
    console.log("NEW ONLINE PLAYER SESSION ID: ", sessionId);
    this.gridEngine.addCharacter({
      id: sessionId,
      sprite: this.onlinePlayerSprite,
      walkingAnimationMapping: spriteId,
      startPosition: { x: position.x, y: position.y },
      speed: position.speed,
      collides: false,
    });
  }

  //*************** REMOVE ONLINE PLAYER *****************//
  removeOnlinePlayer(sessionId) {
    this.gridEngine.removeCharacter(sessionId);
    this.onlinePlayerSprite.destroy();
  }

  //*************** MOVE ONLINE PLAYER *****************//
  moveOnlinePlayer(sessionId, direction) {
    console.log(
      "Online player moved at position: ",
      this.gridEngine.getPosition(sessionId)
    );

    this.gridEngine.move(sessionId, direction);
  }
}
