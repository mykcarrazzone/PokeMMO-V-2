import { Scene } from "phaser";
import { preloaderFile } from "../../components/gameFunctions/loader/preloaderFile";

export default class Scene1 extends Scene {
  constructor() {
    super("bootGame");
  }

  init(data) {
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
      hasConnectedBefore: true,
    };
  }

  preload() {
    // Load sprites
    this.loadSprites();
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

    // Load Town
    // this.load.image(
    //   "TilesTown",
    //   "assets/tilesets/tuxmon-sample-33px-extruded.png"
    // );
    this.load.image(
      "TilesTown",
      "assets/test/pokemmo-sample-16px-extruded.png"
    );
    // this.load.tilemapTiledJSON("SnowTown", "assets/tilemaps/town.json");
    this.load.tilemapTiledJSON("SnowTown", "assets/test/town.json");
    this.load.audio("SnowTown-Sound", "assets/sounds/bgm/snowtown.mp3");

    // Load Route1
    this.load.tilemapTiledJSON("route1", "assets/test/route1.json");
    this.load.tilemapTiledJSON(
      "SnowTownDoorB",
      "assets/test/SnowTown-DoorB.json"
    );
    this.load.tilemapTiledJSON(
      "SnowTownDoorC",
      "assets/test/SnowTown-DoorC.json"
    );
    this.load.audio(
      "SnowTownDoorC-Sound",
      "assets/sounds/bgm/pokemon_center.mp3"
    );
    this.load.audio(
      "SnowTownDoorB-Sound",
      "assets/sounds/bgm/pokemon_center.mp3"
    );
    this.load.audio("route1-Sound", "assets/sounds/bgm/route1.mp3");

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
    this.load.image("snowflake", "assets/effects/snowball.png");
    this.load.image("fire", "assets/effects/fire.png");
    this.load.image("rain", "assets/effects/rain.png");
    preloaderFile(this);
  }

  create(data) {
    if (data.socket && data.user) {
      this.socket.emit("gameReady");
      // START PLAY GAME SCENE
      this.scene.start("playGame", {
        user: this.user,
        socket: this.socket,
        changedSceneData: {
          isChanged: false,
          x: 0,
          y: 0,
        },
      });

      this.playerAnims();
    }
  }

  loadSprites() {}

  playerAnims() {
    // Create the player's walking animations from the texture currentPlayer. These are stored in the global
    // animation manager so any sprite can access them.
    this.anims.create({
      key: "hero_01_red_m_walk",
      frames: this.anims.generateFrameNames("currentPlayer", {
        prefix: "hero_01_red_m_walk.",
        start: 0,
        end: 3,
        zeroPad: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "hero_01_red_m_walk",
      frames: this.anims.generateFrameNames("currentPlayer", {
        prefix: "hero_01_red_m_walk.",
        start: 0,
        end: 3,
        zeroPad: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "hero_01_red_m_walk",
      frames: this.anims.generateFrameNames("currentPlayer", {
        prefix: "hero_01_red_m_walk.",
        start: 0,
        end: 3,
        zeroPad: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "hero_01_red_m_walk",
      frames: this.anims.generateFrameNames("currentPlayer", {
        prefix: "hero_01_red_m_walk.",
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
}
