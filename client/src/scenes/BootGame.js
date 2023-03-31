import { Scene } from "phaser";
import { gameLoader } from "../../src/utils/GameLoader/GameLoader";

export default class BootGame extends Scene {
  constructor() {
    super("bootGame");
  }

  init(data) {
    this.dataPlayer = data.user;
    this.socket = data.socket;
    this.data = data;
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
        speed: this.dataPlayer.onMap.position.speed,
      },
      walkingAnimationMapping:
        this.dataPlayer.character.walkingAnimationMapping,
      onMap: this.dataPlayer.onMap.map_id,
      isMoving: false,
      hasConnectedBefore: true,
    };
  }

  preload() {
    /** LOAD TILESETS FOR ALL */
    this.load.image("tiles", "assets/test/pokemmo-sample-16px-extruded.png");
    /** LOAD JSON SNOWTOWN MAP 1  */
    this.load.tilemapTiledJSON("SnowTown", "assets/test/town.json");
    /** LOAD JSON ROUTE1 MAP 2  */
    this.load.tilemapTiledJSON("route1", "assets/test/route1.json");
    /** LOAD JSON SNOWTOWN DOOR A */
    this.load.tilemapTiledJSON(
      "SnowTown-DoorA",
      "assets/test/SnowTown-DoorA.json"
    );
    /** LOAD JSON SNOWTOWN DOOR B */
    this.load.tilemapTiledJSON(
      "SnowTown-DoorB",
      "assets/test/SnowTown-DoorB.json"
    );
    /** LOAD JSON SNOWTOWN DOOR C */
    this.load.tilemapTiledJSON(
      "SnowTown-DoorC",
      "assets/test/SnowTown-DoorC.json"
    );
    /** LOAD JSON SNOWTOWN DOOR D */
    this.load.tilemapTiledJSON(
      "SnowTown-DoorD",
      "assets/test/SnowTown-DoorD.json"
    );
    /** LOAD JSON SNOWTOWN DOOR E */
    this.load.tilemapTiledJSON(
      "SnowTown-DoorE",
      "assets/test/SnowTown-DoorE.json"
    );

    /** AUDIO MAP SNOWTOWN DOOR A */
    this.load.audio("SnowTown-DoorA-Audio", "assets/sounds/bgm/SnowTown.mp3");
    /** AUDIO MAP SNOWTOWN DOOR B */
    this.load.audio(
      "SnowTown-DoorB-Audio",
      "assets/sounds/bgm/pokemon_center.mp3"
    );
    /** AUDIO MAP SNOWTOWN DOOR C */
    this.load.audio(
      "SnowTown-DoorC-Audio",
      "assets/sounds/bgm/SnowTown-DoorC.mp3"
    );
    /** AUDIO MAP SNOWTOWN DOOR D */
    this.load.audio("SnowTown-DoorD-Audio", "assets/sounds/bgm/SnowTown.mp3");
    /** AUDIO MAP SNOWTOWN DOOR E */
    this.load.audio("SnowTown-DoorE-Audio", "assets/sounds/bgm/SnowTown.mp3");
    /** AUDIO MAP SNOWTOWN */
    this.load.audio("SnowTown-Audio", "assets/sounds/bgm/SnowTown.mp3");

    /** LOAD SPRITESSHEET PLAYER */
    this.load.spritesheet("player", "assets/test2/characters2.png", {
      frameWidth: 72,
      frameHeight: 96,
    });
    /** LOAD SPRITESSHEET ONLINE PLAYER */
    this.load.spritesheet("onlinePlayer", "assets/test2/characters2.png", {
      frameWidth: 72,
      frameHeight: 96,
    });
    /** LOAD SPRITESSHEET NPC */
    this.load.spritesheet("npc", "assets/test2/characters3.png", {
      frameWidth: 72,
      frameHeight: 96,
    });
    /** LOAD SPRITESSHEET DOORS */
    this.load.spritesheet("doors", "assets/test2/doorsTest.png", {
      frameWidth: 72,
      frameHeight: 92,
    });
    this.load.image("snowflake", "assets/effects/snowball.png");
    this.load.image("fire", "assets/effects/fire.png");
    this.load.audio("bump", "assets/sounds/se/bump.wav");
    this.load.image("rain", "assets/effects/rain.png");
    this.load.audio("walk", "assets/sounds/se/walk.mp3");
    gameLoader(this);
  }

  create() {
    if (this.data.socket && this.data.user) {
      this.socket.emit("gameReady");
      // START PLAY GAME SCENE
      console.log("ID USER", this.user._id);
      this.scene.start("Scene1", {
        user: this.user,
        socket: this.socket,
        changedSceneData: {
          isChanged: false,
          x: 0,
          y: 0,
        },
      });
    }
  }
}
