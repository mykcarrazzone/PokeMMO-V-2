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
    this.load.image("tiles", "assets/test/pokemmo-sample-16px-extruded.png");
    this.load.tilemapTiledJSON("SnowTown", "assets/test/town.json");
    this.load.tilemapTiledJSON("route1", "assets/test/route1.json");
    this.load.tilemapTiledJSON(
      "SnowTown-DoorB",
      "assets/test/SnowTown-DoorB.json"
    );
    this.load.tilemapTiledJSON(
      "SnowTown-DoorC",
      "assets/test/SnowTown-DoorC.json"
    );
    this.load.spritesheet("player", "assets/test2/characters2.png", {
      frameWidth: 72,
      frameHeight: 96,
    });
    this.load.spritesheet("onlinePlayer", "assets/test2/characters2.png", {
      frameWidth: 72,
      frameHeight: 96,
    });
    this.load.spritesheet("npc", "assets/test2/characters3.png", {
      frameWidth: 72,
      frameHeight: 96,
    });
    this.load.spritesheet("doors", "assets/test2/doorsTest.png", {
      frameWidth: 72,
      frameHeight: 92,
    });
    this.load.image("snowflake", "assets/effects/snowball.png");
    this.load.image("fire", "assets/effects/fire.png");
    this.load.audio("bump", "assets/sounds/se/bump.wav");
    this.load.image("rain", "assets/effects/rain.png");
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
