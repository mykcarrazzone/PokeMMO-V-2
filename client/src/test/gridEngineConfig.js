import Player from "./Player";
import { pixelPositionToGrid } from "../scenes/functions/player/pixelPositionToGrid";
import { attributeKeys } from "../scenes/functions/keyboard/attributeKeys";
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

  addNpc(npc) {
    const newSprite = this.add.sprite(0, 0, "npc");
    newSprite.scale = 1.1;
    this.gridEngineConfig.characters.push({
      id: npc.id,
      sprite: newSprite,
      walkingAnimationMapping: npc.walkingAnimationMapping,
      startPosition: { x: npc.x, y: npc.y },
      speed: npc.speed,
      collides: npc.collides,
    });
    this.gridEngine.create(this.map, this.gridEngineConfig);
  }

  setPlayer() {
    this.player = new Player({
      scene: this.self,
      x: this.self.localPlayer.hasConnectedBefore
        ? pixelPositionToGrid(this.self.localPlayer.position.x)
        : this.self.changedSceneData.isChanged
        ? pixelPositionToGrid(this.self.changedSceneData.x)
        : pixelPositionToGrid(this.self.spawnPoint.x * 3.89),
      y: this.self.localPlayer.hasConnectedBefore
        ? pixelPositionToGrid(this.self.localPlayer.position.y)
        : this.self.changedSceneData.isChanged
        ? pixelPositionToGrid(this.self.changedSceneData.y)
        : pixelPositionToGrid(this.self.spawnPoint.y * 3.9),
      texture: "player",
      frame: "up",
      tileMap: this.self.map,
      newZone: this.self.newZone,
    });

    this.gridEngineConfig.characters.push({
      id: "player",
      sprite: this.player,
      walkingAnimationMapping: 0,
      startPosition: { x: this.player.x, y: this.player.y },
      speed: 3,
      collides: true,
    });

    this.gridEngine.create(this.map, this.gridEngineConfig);
  }

  playerUpdate() {
    if (this.gridEngine.isMoving("player")) {
      this.self.socket.emit("PLAYER_MOVING", {
        _id: this.player._id,
        position: {
          x: this.player.x,
          y: this.player.y,
          ld: this.gridEngine.getFacingDirection("player"),
        },
        isMoving: this.gridEngine.isMoving("player"),
      });
    }
    this.player.update();
    attributeKeys(this.self);
  }

  moveNpc(id, delay) {
    this.gridEngine.moveRandomly(id, delay);
  }
}
