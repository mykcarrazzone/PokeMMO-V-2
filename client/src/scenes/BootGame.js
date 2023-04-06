import { Scene } from "phaser";
import { gameLoader } from "../utils/GameLoader/UtilsGameLoader";

export default class BootGame extends Scene {
  constructor() {
    super("bootGame");
  }

  init(data) {
    /** GET USER DATA FROM LAUNCHER ORGANISM COMPONENT */
    this.dataPlayer = data.user;
    this.socket = data.socket;
    this.data = data;
    var texture = this.dataPlayer.character.baseTexture;

    /** SET USER DATA */
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
    this.load.image(
      "tiles",
      "assets/tilesets/pokemmo-sample-16px-extruded.png"
    );
    /** LOAD MAPS */
    this.loadSnowTown();
    this.loadMountain();
    this.loadForest();
    /** LOAD SPRITESHEET */
    this.loadSpritesheet();
    /** LOAD VISUAL EFFECTS */
    this.loadVisualEffects();
    /** LOAD SE AUDIO EFFECTS */
    this.loadAudio();
    gameLoader(this);
  }

  create() {
    if (this.data.socket && this.data.user) {
      this.socket.emit("gameReady");
      // START PLAY GAME SCENE
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

  loadVisualEffects() {
    this.load.image("rain", "assets/effects/rain.png");
    this.load.image("snowflake", "assets/effects/snowball.png");
    this.load.image("fire", "assets/effects/fire.png");
    this.load.image("fire2", "assets/effects/fire2.png");
    this.load.image("smoke", "assets/effects/smoke.png");
  }

  loadSpritesheet() {
    /** LOAD SPRITESSHEET PLAYER */
    this.load.spritesheet("player", "assets/sprites/player/characters1.png", {
      frameWidth: 72,
      frameHeight: 96,
    });
    /** LOAD SPRITESSHEET ONLINE PLAYER */
    this.load.spritesheet(
      "onlinePlayer",
      "assets/sprites/player/characters1.png",
      {
        frameWidth: 72,
        frameHeight: 96,
      }
    );
    /** LOAD SPRITESSHEET NPC */
    this.load.spritesheet("npc", "assets/sprites/npc/characters0.png", {
      frameWidth: 72,
      frameHeight: 96,
    });
  }

  loadForest() {
    /** LOAD JSON FOREST MAP */
    // this.load.tilemapTiledJSON("route1", "");
  }

  loadAudio() {
    /** AUDIO MAP SNOWTOWN */
    this.load.audio("SnowTown", "assets/sounds/bgm/SnowTown.mp3");
    /** AUDIO MAP MOUNTAIN */
    this.load.audio("Mountain", "assets/sounds/bgm/Mountain.mp3");
    /** AUDIO MAP CENTER */
    this.load.audio("Center", "assets/sounds/bgm/Center.mp3");
    /** AUDIO MAP SHOP */
    this.load.audio("Shop", "assets/sounds/bgm/Shop.mp3");
    /** AUDIO MAP INDOOR*/
    this.load.audio("Indoor", "assets/sounds/bgm/Indoor.mp3");
    /** AUDIO BUMP COLLIDES */
    this.load.audio("bump", "assets/sounds/se/bump.wav");
    /** AUDIO PLAYER WALKING */
    this.load.audio("walk", "assets/sounds/se/walk.mp3");
    /** AUDIO PLAYER BIKE */
    this.load.audio("bike", "assets/sounds/se/bike.mp3");
    /** AUDIO WHEATHER RAIN */
    this.load.audio("weather-rain", "assets/sounds/se/weather-rain.mp3");
    /** AUDIO WHEATHER THUNDER ORAGE*/
    this.load.audio("thunder", "assets/sounds/se/thunder.mp3");
    /** AUDIO WHEATHER SNOW */
    this.load.audio("weather-snow", "assets/sounds/se/weather-snow.mp3");
    /** AUDIO AUDIO CHIMNEY */
    this.load.audio("chimney", "assets/sounds/se/chimney.mp3");
  }

  loadSnowTown() {
    /** LOAD JSON SNOWTOWN MAP 1  */
    this.load.tilemapTiledJSON(
      "SnowTown",
      "assets/tilemaps/SnowTown/SnowTown.json"
    );
    /** LOAD JSON SNOWTOWN DOOR A */
    this.load.tilemapTiledJSON(
      "SnowTown-DoorA",
      "assets/tilemaps/SnowTown/SnowTown-Indoor-A.json"
    );
    /** LOAD JSON SNOWTOWN DOOR A */
    this.load.tilemapTiledJSON(
      "SnowTown-DoorA-Floor",
      "assets/tilemaps/SnowTown/SnowTown-Indoor-A-Floor.json"
    );
    /** LOAD JSON SNOWTOWN DOOR B */
    this.load.tilemapTiledJSON(
      "SnowTown-DoorB",
      "assets/tilemaps/SnowTown/SnowTown-Indoor-B.json"
    );
    /** LOAD JSON SNOWTOWN DOOR C */
    this.load.tilemapTiledJSON(
      "SnowTown-DoorC",
      "assets/tilemaps/SnowTown/SnowTown-Indoor-C.json"
    );
    /** LOAD JSON SNOWTOWN DOOR D */
    this.load.tilemapTiledJSON(
      "SnowTown-DoorD",
      "assets/tilemaps/SnowTown/SnowTown-Indoor-D.json"
    );
    /** LOAD JSON SNOWTOWN DOOR E */
    this.load.tilemapTiledJSON(
      "SnowTown-DoorE",
      "assets/tilemaps/SnowTown/SnowTown-Indoor-E.json"
    );
  }

  loadMountain() {
    /** LOAD JSON MOUNTAIN MAP 2 */
    this.load.tilemapTiledJSON(
      "Mountain",
      "assets/tilemaps/Mountain/Mountain.json"
    );
  }
}
