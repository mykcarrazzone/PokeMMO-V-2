import { GameObjects } from "phaser";
import { attributeKeys } from "./functions/keyboard/attributeKeys";

export default class Player extends GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);

    this.bump = this.scene.sound.add("bump", {
      loop: false,
      volume: 0.7,
    });
    // this.scene.physics.add.collider(this, config.worldLayer, () => {
    //   // console.log("Collision");
    //   if (this.body.touching) {
    //     if (!this.bump.isPlaying) {
    //       this.bump.play();
    //     }
    //   }
    // });

    this._id = this.scene.localPlayer._id;
    // Current direction of player
    this.ld = config.ld;
    this.newZone = config.newZone;
    this.battleZones = config.battleZones;
    this.isMoving = false;

    if (this.newZone) {
      const [x, y] = this.newZone.name.split("|").map(Number);
      this.newZone = { x, y };
    }

    // Player Offset
    this.setOrigin(0.5, 0.5);
    this.body.setSize(12, 12); // Taille du corps physique (ici 12x12 pour un joueur de 16x16)
    this.body.setOffset(2, 2); // Décalage du corps physique pour centrer le joueur sur la grille
    // Player can't go out of the world
    this.body.setCollideWorldBounds(true);
    // Set depth (z-index)
    this.setDepth(28);

    const gridEngineConfig = {
      characters: [
        {
          id: "hero_01_red_m_walk",
          sprite: this,
          walkingAnimationMapping: 4, // PERMET DE DEFINIR LA VITESSE DE DEPLACEMENT DU JOUEUR (PLUS LE NOMBRE EST ELEVE, PLUS LE JOUEUR VA VITE)
          startPosition: {
            x: 26, // 16 pour la taille d'une case, multiplié par 2 pour l'échelle, plus 16 pour être au milieu de la case
            y: 23,
          },
        },
      ],
    };

    this.scene.gridEngine.create(this.scene.map, gridEngineConfig);
    this.setFrame(this.getStopFrame('down'));

    this.createPlayerAnimation.call(this, "up", 12, 15); // 90 CORRESPOND AU DEBUT DE LA FRAME, 92 CORRESPOND A LA FIN DE LA FRAME
    this.createPlayerAnimation.call(this, "right", 8, 11);
    this.createPlayerAnimation.call(this, "down", 0, 3);
    this.createPlayerAnimation.call(this, "left", 4, 7);

    this.scene.gridEngine.movementStarted().subscribe(({ direction }) => {
      this.anims.play(direction);
    });

    this.scene.gridEngine.movementStopped().subscribe(({direction}) => {
      this.anims.stop();
      this.setFrame(this.getStopFrame(direction));
    });

    this.scene.gridEngine.directionChanged().subscribe(({ direction }) => {
      this.setFrame(this.getStopFrame(direction));
    });

    // Container to store old data
    this.container = [];

    this.canChangeMap = true;
    this.isMoving = false;
  }

  update(time, delta) {
    // Show player nickname above player
    this.showPlayerNickname();

    // Player door interaction
    this.doorInteraction();

    this.battleZoneInteraction();
    // Player world interaction
    this.worldInteraction();

    this.movePlayerToNextTile();
  }
  createPlayerAnimation(name, startFrame, endFrame) {
    this.anims.create({
      key: name,
      frames: this.anims.generateFrameNumbers("hero_01_red_m_walk", {
        start: startFrame,
        end: endFrame,
      }),
      frameRate: 10,
      repeat: -1,
      yoyo: true, 
    });
  }

  getStopFrame(direction) {
    switch (direction) {
      case 'up':
        return 12;
      case 'right':
        return 8;
      case 'down':
        return 0;
      case 'left':
        return 4;
    }
  }

  movePlayerToNextTile() {
    attributeKeys(this);

    if (this.isLeftPressed) {
      console.log("LEFT");
      this.scene.gridEngine.move("hero_01_red_m_walk", "left");
    } else if (this.isRightPressed) {
      console.log("RIGHT");
      this.scene.gridEngine.move("hero_01_red_m_walk", "right");
    } else if (this.isUpPressed) {
      console.log("UP");
      this.scene.gridEngine.move("hero_01_red_m_walk", "up");
    } else if (this.isDownPressed) {
      console.log("DOWN");
      this.scene.gridEngine.move("hero_01_red_m_walk", "down");
    }
  }

  showPlayerNickname() {}

  isMoved() {
    if (
      this.container.oldPosition &&
      (this.container.oldPosition.x !== this.x ||
        this.container.oldPosition.y !== this.y ||
        this.container.oldPosition.ld !== this.ld)
    ) {
      this.container.oldPosition = { x: this.x, y: this.y, ld: this.ld };
      return true;
    } else {
      this.container.oldPosition = { x: this.x, y: this.y, ld: this.ld };
      return false;
    }
  }

  doorInteraction() {
    this.scene.map.findObject("Doors", (obj) => {
      const objectX = obj.x * 2;
      const objectY = obj.y * 2;
      const objectWidth = obj.width * 2.5;
      const objectHeight = obj.height * 3.1;

      if (
        this.y >= objectY &&
        this.y <= objectY + objectHeight &&
        this.x >= objectX &&
        this.x <= objectX + objectWidth
      ) {
        console.log("Player is by " + obj.name);

        switch (obj.name) {
          case "DoorB":
            console.log("Door is open!");
            this.changeSceneByMapName("SnowTownDoorB");
            break;
          case "DoorC":
            console.log("Door is open!");
            this.changeSceneByMapName("SnowTownDoorC");
            break;
        }
      }
    });
  }

  battleZoneInteraction() {
    if (this.isMoved() && this.scene.battleZones) {
      var playerTileY = this.scene.battleZones.worldToTileXY(this.x, this.y);
      var currentTile = this.scene.battleZones.getTileAt(
        playerTileY.x,
        playerTileY.y
      );
      const levelProperties = this.scene.battleZones.layer.properties;
      if (currentTile) {
        if (currentTile.index == 24471) {
          if (Math.random() <= 0.1 / 35) {
            console.log(this.generateRandomLevelPokemonSpawn(levelProperties));
          }
        }
      }
    }
  }

  generateRandomLevelPokemonSpawn(levelKey) {
    let [minLevel, maxLevel] = levelKey[0].value.split("|");
    minLevel = parseInt(minLevel);
    maxLevel = parseInt(maxLevel);
    const randomLevel =
      Math.floor(Math.random() * (maxLevel - minLevel + 1)) + minLevel;
    return `Pokemon spawned at level ${randomLevel}`;
  }

  worldInteraction() {
    this.scene.map.findObject("Worlds", (world) => {
      const worldX = world.x * 2;
      const worldY = world.y * 2;
      const worldWidth = world.width * 3;
      const worldHeight = world.height * 3;
      if (
        this.y >= worldY &&
        this.y <= worldY + worldHeight &&
        this.x >= worldX &&
        this.x <= worldX + worldWidth
      ) {
        console.log("Player is by world entry: " + world.name);

        // Get playerTexturePosition from from Worlds object property
        let playerTexturePosition;
        if (world.properties)
          playerTexturePosition = world.properties.find(
            (property) => property.name === "playerTexturePosition"
          );
        if (playerTexturePosition)
          this.playerTexturePosition = playerTexturePosition.value;

        // CHARGE UNE NOUVELLE ZONE DE JEU
        this.changeSceneByMapName(world.name);
      }
    });
  }

  changeSceneByMapName(worldName) {
    console.log("MA MAP : " + worldName);
    this.scene.localPlayer.onMap = worldName;
    this.scene.localPlayer.position.x = this.x;
    this.scene.localPlayer.position.y = this.y;
    this.scene.localPlayer.hasConnectedBefore = false;
    console.log("ma zonneee", this.newZone);

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

    this.scene.socket.emit("PLAYER_PASS_IN_NEW_MAP", {
      _id: this._id,
      position: {
        x: this.x,
        y: this.y,
        ld: this.ld,
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
}
