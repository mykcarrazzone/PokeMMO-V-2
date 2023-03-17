import { Scene } from "phaser";
import Player from "./Player";
import { setMessageUi } from "./message";
import { startWeather } from "../scenes/functions/weather/weather";
export default class Scene1 extends Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("tiles", "assets/test/pokemmo-sample-16px-extruded.png");

    this.load.tilemapTiledJSON("SnowTown", "assets/test/town.json");
    this.load.spritesheet("player", "assets/test2/characters2.png", {
      frameWidth: 72,
      frameHeight: 96,
    });
    this.load.spritesheet("npc", "assets/test2/characters3.png", {
      frameWidth: 72,
      frameHeight: 96,
    });
    this.load.spritesheet("doors", "assets/test2/doors.png", {
      frameWidth: 216,
      frameHeight: 96,
    });

    this.load.image("snowflake", "assets/effects/snowball.png");
    this.load.image("fire", "assets/effects/fire.png");
    this.load.image("rain", "assets/effects/rain.png");
  }

  create() {
    this.createMapAndPlayer();
    setMessageUi({
      scene: this,
      x: 50,
      y: 50,
      text: "Utiliser les touches\nZ, Q, S, D pour vous déplacer !",
      radius: 10,
      fontFamily: "monospace",
      textColor: "#000000ee",
      backgroundColor: "#cac7c7b7",
      fontSize: 18,
      padding: 20,
    });
  }

  createMapAndPlayer() {
    const cloudCityTilemap = this.make.tilemap({ key: "SnowTown" });

    cloudCityTilemap.addTilesetImage("pokemmo-sample-16px-extruded", "tiles");

    for (let i = 0; i < cloudCityTilemap.layers.length; i++) {
      const layer = cloudCityTilemap.createLayer(
        i,
        "pokemmo-sample-16px-extruded",
        0,
        0
      );
      layer.scale = 4;
    }

    startWeather(this, cloudCityTilemap);

    this.player = new Player({
      scene: this,
      x: 25,
      y: 25,
      texture: "player",
      frame: "up",
      tileMap: cloudCityTilemap,
    });

    cloudCityTilemap.findObject("Weather", (obj) => {
      startWeather(this, cloudCityTilemap, obj.name);
    });
  }

  update() {
    this.player.update();
  }
}
