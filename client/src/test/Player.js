import { GameObjects } from "phaser";
import { Direction } from "./Direction";
import { attributeKeys } from "../scenes/functions/keyboard/attributeKeys";
export default class Player extends GameObjects.Sprite {
  constructor(config) {
    super(
      config.scene,
      config.x,
      config.y,
      config.texture,
      config.frame,
      config.tileMap
    );
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);
    this.setOrigin(0.5, 1);
    this.scale = 1.1;
    this.scene.cameras.main.startFollow(this, true);
    this.scene.cameras.main.setZoom(1);
    this.tileMap = config.tileMap;

    this.isCrossActivated = false;

    const npcSprite0 = this.scene.add.sprite(0, 0, "npc");
    npcSprite0.scale = 1.1;
    const npcSprite1 = this.scene.add.sprite(0, 0, "npc");
    npcSprite1.scale = 1.1;
    const npcSprite2 = this.scene.add.sprite(0, 0, "npc");
    npcSprite2.scale = 1.1;
    const npcSprite3 = this.scene.add.sprite(0, 0, "npc");
    npcSprite3.scale = 1.1;
    this.door0 = this.scene.add.sprite(0, 0, "doors");
    this.door0.scale = 1.31;
    this.speed = 1;
    this.isCrossActivated = false;
    // this.setFrame(this.getStopFrame(config.frame));

    const gridEngineConfig = {
      characters: [
        {
          id: "player",
          sprite: this,
          walkingAnimationMapping: 0,
          startPosition: { x: this.x, y: this.y },
          speed: 3,
        },
        {
          id: "npc0",
          sprite: npcSprite0,
          walkingAnimationMapping: 1,
          startPosition: { x: 26, y: 27 },
          speed: 2,
        },
        {
          id: "npc1",
          sprite: npcSprite1,
          walkingAnimationMapping: 2,
          startPosition: { x: 26, y: 27 },
          speed: 2,
        },
        {
          id: "npc2",
          sprite: npcSprite2,
          walkingAnimationMapping: 3,
          startPosition: { x: 26, y: 27 },
          speed: 2,
        },
        {
          id: "npc3",
          sprite: npcSprite3,
          walkingAnimationMapping: 4,
          startPosition: { x: 37, y: 24 },
          speed: 2,
        },
        {
          id: "doors",
          sprite: this.door0,
          walkingAnimationMapping: 0,
          startPosition: { x: 25, y: 21 },
        },
      ],
    };

    this.scene.gridEngine.create(config.tileMap, gridEngineConfig);
    this.scene.gridEngine.moveRandomly("npc0", 5);
    this.scene.gridEngine.moveRandomly("npc1", 5);
    this.scene.gridEngine.moveRandomly("npc2", 5);
    this.scene.gridEngine.moveRandomly("npc3", 5);
  }

  update() {
    attributeKeys(this);
    this.doorInteraction();
  }

  doorInteraction() {
    // Cette fonction permet de gérer les interactions avec les portes
    this.tileMap.findObject("Doors", (obj) => {
      const objectX = obj.x * 3.95;
      const objectY = obj.y * 4;
      const objectWidth = obj.width * 4;
      const objectHeight = obj.height * 2;

      if (
        this.y >= objectY &&
        this.y <= objectY + objectHeight &&
        this.x >= objectX &&
        this.x <= objectX + objectWidth
      ) {
        console.log("Door interaction", obj.name);
        this.scene.gridEngine.turnTowards("doors", "right");

        // switch (obj.name) {
        //   case "DoorB":
        //     this.scene.cameras.main.fadeOut(1000);
        //     this.changeSceneByMapName("SnowTownDoorB");
        //     break;
        //   case "DoorC":
        //     this.scene.cameras.main.fadeOut(1000);
        //     this.changeSceneByMapName("SnowTownDoorC");
        //     break;
        // }
      } else {
        this.scene.gridEngine.turnTowards("doors", "down");
      }
    });
  }
}
