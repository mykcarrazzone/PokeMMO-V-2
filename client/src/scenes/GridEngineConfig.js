import Player from "./Player";
import { GAMES_INFOS } from "../constants/GameInfos/GameInfos";
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

  setCanBike(bool) {
    if (bool) {
      this.gridEngine.setWalkingAnimationMapping("player", 0);
      this.gridEngine.turnTowards(
        "player",
        this.gridEngine.getFacingDirection("player")
      );
    }
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
      this.value = this.self.spawnPoint.properties[0].value.split("|");
      this.spawnPointX = parseInt(this.value[0]);
      this.spawnPointY = parseInt(this.value[1]);
    }
    this.player = new Player({
      scene: this.self,
      x: this.self.localPlayer.position.x,
      y: this.self.localPlayer.position.y,
      texture: "player",
      frame: "up",
      tileMap: this.self.map,
      newZone: this.self.newZone,
      speed: this.self.localPlayer.position.speed,
    });

    this.player.isCrossActivated = this.getCantCrossRun();
    this.player.body.onWorldBounds = true;

    this.gridEngineConfig = {
      characters: [
        {
          id: "player",
          sprite: this.player,
          walkingAnimationMapping:
            this.self.localPlayer.walkingAnimationMapping,
          startPosition: { x: this.player.x, y: this.player.y },
          speed: this.player.speed,
          collides: true,
        },
      ],
    };

    this.gridEngine.create(this.map, this.gridEngineConfig);

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

    this.gridEngine.positionChangeStarted().subscribe(({ charId }) => {
      if (charId == "player") {
        console.log("PLAYED MOVED ON MAP", this.self.mapName);
        this.self.socket.emit("PLAYER_MOVING", {
          _id: this.player._id,
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
    console.log("NEW ONLINE PLAYER SESSION ID: ", sessionId);
    this.onlinePlayerSprite = this.add.sprite(0, 0, "onlinePlayer");
    this.onlinePlayerSprite.scale = GAMES_INFOS.spriteScale;
    this.gridEngine.addCharacter({
      id: sessionId,
      sprite: this.onlinePlayerSprite,
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
      this.onlinePlayerSprite.destroy();
    }
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
