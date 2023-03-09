import { Scene } from "phaser";

export default class Scene1 extends Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    // Load sprites
    this.loadSprites();

    // Load Town
    this.load.image(
      "TilesTown",
      "assets/tilesets/tuxmon-sample-32px-extruded.png"
    );
    this.load.tilemapTiledJSON("SnowTown", "assets/tilemaps/town.json");

    // Load Route1
    this.load.tilemapTiledJSON("route1", "assets/tilemaps/route1.json");

    // Load atlas
    this.load.atlas(
      "currentPlayer",
      "assets/atlas/atlas.png",
      "assets/atlas/atlas.json"
    );
    this.load.atlas(
      "players",
      "assets/images/players/players.png",
      "assets/atlas/players.json"
    );
  }

  create(data) {
    this.add.text(20, 20, "Loading game...");

    if (data.socket && data.user) {
      this.dataPlayer = data.user;
      this.socket = data.socket;
      var texture = this.dataPlayer.character.baseTexture;

      this.user = {
        _id: this.dataPlayer._id,
        sessionId: this.socket.id,
        nickName: this.dataPlayer.username,
        pokedollar: this.dataPlayer.character.pokedollar,
        baseTexture: texture.split("_", 4).join("_"),
        chatColor: this.dataPlayer.character.chatColor,
        currentTexture: this.dataPlayer.character.currentTexture,
        role: this.dataPlayer.role,
        position: {
          x: this.dataPlayer.onMap.position.x,
          y: this.dataPlayer.onMap.position.y,
          ld: this.dataPlayer.onMap.position.ld,
        },
        onMap: this.dataPlayer.onMap.map_id,
        isMoving: false,
      };

      this.socket.emit("gameReady");
      // START PLAY GAME SCENE
      this.scene.start("playGame", {
        user: this.user,
        socket: this.socket,
        hasChangedScene: false,
      });
    }

    // Create the player's walking animations from the texture currentPlayer. These are stored in the global
    // animation manager so any sprite can access them.
    this.anims.create({
      key: "misa-left-walk",
      frames: this.anims.generateFrameNames("currentPlayer", {
        prefix: "misa-left-walk.",
        start: 0,
        end: 3,
        zeroPad: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "misa-right-walk",
      frames: this.anims.generateFrameNames("currentPlayer", {
        prefix: "misa-right-walk.",
        start: 0,
        end: 3,
        zeroPad: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "misa-up-walk",
      frames: this.anims.generateFrameNames("currentPlayer", {
        prefix: "misa-up-walk.",
        start: 0,
        end: 3,
        zeroPad: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "misa-down-walk",
      frames: this.anims.generateFrameNames("currentPlayer", {
        prefix: "misa-down-walk.",
        start: 0,
        end: 3,
        zeroPad: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // onlinePlayer animations
    this.anims.create({
      key: "onlinePlayer-left-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "bob_left_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-right-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "bob_right_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-up-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "bob_up_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-down-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "bob_down_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  loadSprites() {
    // Charger les sprites
    let spritesExist = {
      hero: ["hero_01_red_m", "hero_01_admin_m", "hero_01_white_f"],
    };

    for (let i = 0; i < spritesExist.hero.length; i++) {
      this.load.spritesheet(
        `${spritesExist.hero[i]}_walk`,
        `assets/sprites/${spritesExist.hero[i]}_walk.png`,
        {
          frameWidth: 25,
          frameHeight: 32,
        }
      );

      this.load.spritesheet(
        `${spritesExist.hero[i]}_run`,
        `assets/sprites/${spritesExist.hero[i]}_run.png`,
        {
          frameWidth: 25,
          frameHeight: 32,
        }
      );

      this.load.spritesheet(
        `${spritesExist.hero[i]}_cross`,
        `assets/sprites/${spritesExist.hero[i]}_cycle.png`,
        {
          frameWidth: 25,
          frameHeight: 32,
        }
      );
      this.load.spritesheet(
        `${spritesExist.hero[i]}_cross_run`,
        `assets/sprites/${spritesExist.hero[i]}_cycle_roll_wheel.png`,
        {
          frameWidth: 25,
          frameHeight: 32,
        }
      );
    }
  }
}
