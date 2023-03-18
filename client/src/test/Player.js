import { GameObjects } from "phaser";
import { attributeKeys } from "../scenes/functions/keyboard/attributeKeys";
import { pixelPositionToGrid } from "../scenes/functions/player/pixelPositionToGrid";
export default class Player extends GameObjects.Sprite {
  constructor(config) {
    super(
      config.scene,
      config.x,
      config.y,
      config.texture,
      config.frame,
      config.tileMap,
      config.newZone
    );
    this._id = this.scene.localPlayer._id;
    this.door0 = this.scene.add.sprite(0, 0, "doors");
    this.door0.scale = 1.22;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);
    this.setOrigin(0.5, 1);
    this.scale = 1.1;
    this.scene.cameras.main.startFollow(this, true);
    this.scene.cameras.main.setZoom(1);
    this.tileMap = config.tileMap;

    this.bump = this.scene.sound.add("bump", {
      loop: false,
      volume: 0.7,
    });

    this.isCrossActivated = false;

    const npcSprite0 = this.scene.add.sprite(0, 0, "npc");
    npcSprite0.scale = 1.1;
    const npcSprite1 = this.scene.add.sprite(0, 0, "npc");
    npcSprite1.scale = 1.1;
    const npcSprite2 = this.scene.add.sprite(0, 0, "npc");
    npcSprite2.scale = 1.1;
    const npcSprite3 = this.scene.add.sprite(0, 0, "npc");

    npcSprite3.scale = 1.1;
    this.speed = 1;
    this.isCrossActivated = false;

    this.newZone = config.newZone;

    if (this.newZone) {
      const [x, y] = this.newZone.name.split("|").map(Number);
      this.newZone = { x, y };
    }
    console.log("NEW ZONE", this.newZone);
    const gridEngineConfig = {
      characters: [
        {
          id: "player",
          sprite: this,
          walkingAnimationMapping: 0,
          startPosition: {
            x: pixelPositionToGrid(this.x),
            y: pixelPositionToGrid(this.y),
          },
          speed: 3,
          collides: {
            collidesWithTiles: true,
          },
        },
        {
          id: "npc0",
          sprite: npcSprite0,
          walkingAnimationMapping: 1,
          startPosition: { x: 25, y: 24 },
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
          startPosition: { x: 44, y: 24 },
          collides: false,
        },
      ],
    };

    this.scene.gridEngine.create(config.tileMap, gridEngineConfig);
    this.scene.gridEngine.moveRandomly("npc0", 5);
    this.scene.gridEngine.moveRandomly("npc1", 5);
    this.scene.gridEngine.moveRandomly("npc2", 5);
    this.scene.gridEngine.moveRandomly("npc3", 5);
    this.doorAnimation();
    this.passPorte = false;
    this.passWorld = false;
    this.setFrame(this.getStopFrame(this.scene.localPlayer.position.ld));
    console.log("DERNIERE MOUVEMENT", this.scene.localPlayer.position.ld);
  }

  update() {
    if (this.scene.gridEngine.isMoving("player")) {
      this.scene.socket.emit("PLAYER_MOVING", {
        _id: this._id,
        position: {
          x: this.x,
          y: this.y,
          ld: this.scene.gridEngine.getFacingDirection("player"),
        },
        isMoving: this.scene.gridEngine.isMoving("player"),
      });
    }
    attributeKeys(this);
    this.doorInteraction();
    this.worldInteraction();
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

  doorAnimation() {
    this.door0.anims.create({
      key: "porte",
      frames: this.door0.anims.generateFrameNumbers("doors", {
        start: 0,
        end: 3,
      }),
      frameRate: 5,
      repeat: 0,
    });
  }

  doorInteraction() {
    // Cette fonction permet de gérer les interactions avec les portes
    this.tileMap.findObject("Doors", (obj) => {
      const objectX = obj.x * 3.95;
      const objectY = obj.y * 4.05;
      const objectWidth = obj.width * 4;
      const objectHeight = obj.height * 2;

      if (
        this.y >= objectY &&
        this.y <= objectY + objectHeight &&
        this.x >= objectX &&
        this.x <= objectX + objectWidth &&
        this.scene.gridEngine.getFacingDirection("player") == "up"
      ) {
        this.door0.anims.play("porte", true);
        this.scene.gridEngine.stopMovement("player");
        setTimeout(() => {
        this.scene.gridEngine.moveTo("player", { x: 44, y: 24 });
        }, 100);
        setTimeout(() => {
        this.scene.cameras.main.fadeOut(700);
        }, 700);
        setTimeout(() => {
          this.door0.anims.stop();
        }, 1100);
        setTimeout(() => {
          if (!this.passPorte) {
            this.passPorte = true;
            this.scene.localPlayer.position.ld = "up";
            this.changeSceneByMapName(obj.properties[0].value);
          }
        }, 1500);
      }
    });
  }

  changeSceneByMapName(worldName) {
    this.scene.localPlayer.onMap = worldName;
    this.scene.localPlayer.position.x = this.x;
    this.scene.localPlayer.position.y = this.y;
    this.scene.localPlayer.hasConnectedBefore = false;

    // PERMET DE CHANGER LES POINTS D ENTREE ET DE SORTIE
    this.changedSceneData = {
      isChanged: this.newZone ? true : false,
      x: this.newZone
        ? this.newZone.x != 0
          ? this.newZone.x
          : this.scene.localPlayer.x
        : this.scene.localPlayer.x,
      y: this.newZone
        ? this.newZone.y != 0
          ? this.newZone.y
          : this.scene.localPlayer.y
        : this.scene.localPlayer.y,
    };

    console.log("PASSED IN NEW MAP", worldName);

    this.scene.socket.emit("PLAYER_PASS_IN_NEW_MAP", {
      _id: this._id,
      position: {
        x: this.x,
        y: this.y,
        ld: this.scene.gridEngine.getFacingDirection("player"),
      },
      onMap: worldName,
      isMoving: this.isMoving,
    });

    // DÉTRUIRE LES OBJETS DE LA SCÈNE
    this.scene.registry.destroy();
    this.scene.events.off();
    this.scene.sound.stopAll();
    this.scene.scene.restart({
      user: this.scene.localPlayer,
      socket: this.scene.socket,
      changedSceneData: this.changedSceneData,
    });
  }


  
  worldInteraction() {
    // Cette fonction permet de gérer les interactions avec les portes
    this.tileMap.findObject("Worlds", (obj) => {
      const objectX = obj.x * 4.1;
      const objectY = obj.y * 3.82;
      const objectWidth = obj.width * 1.8;
      const objectHeight = obj.height * 2;

      if (
        this.y >= objectY &&
        this.y <= objectY + objectHeight &&
        this.x >= objectX &&
        this.x <= objectX + objectWidth &&
        this.scene.gridEngine.getFacingDirection("player") == "down"
      ) {
        this.scene.gridEngine.stopMovement("player");    
        this.scene.gridEngine.moveTo("player", { x: pixelPositionToGrid(this.x), zy: pixelPositionToGrid(this.y +100) });
        setTimeout(() => {
          if (!this.passWorld) {
            this.passWorld = true;
            console.log(pixelPositionToGrid(this.y +100))
            this.scene.cameras.main.fadeOut(500);

            console.log("Player is by world entry: " + obj.name);
            this.scene.localPlayer.position.ld = "down";
            this.changeSceneByMapName(obj.name);
          }
        }, 1000);
      }
    });
  }
}
