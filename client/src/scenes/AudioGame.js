import { Scene } from "phaser";

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

export default class AudioGame extends Scene {
  constructor() {
    super("AudioGame");
  }

  preload() {}

  create(scene) {
    var self = this;
    // Ajouter un rectangle pour le curseur
    this.bgmAudio(
      self,
      scene,
      1,
      {
        x: window.innerWidth - 175,
        y: window.innerHeight / 6,
      },
      "Musique"
    );

    this.seAudio(
      self,
      scene,
      0.7,
      {
        x: window.innerWidth - 175,
        y: window.innerHeight / 6 + 100,
      },
      "Effets sonore"
    );

    this.sfxAudio(
      self,
      scene,
      0.8,
      {
        x: window.innerWidth - 175,
        y: window.innerHeight / 6 + 200,
      },
      "Effets spéciaux"
    );
  }

  seAudio(self, scene, defaultValue, position, name) {
    var print1 = this.add.text(position.x - 100, position.y - 15, "", {
      fontFamily: "Arial",
      fontSize: "14px",
      fill: "#f7f7f7",
      stroke: "#070701",
      strokeThickness: 0,
      padding: 2.5,
      backgroundColor: "#030507d7",
    });
    this.rexUI.add
      .slider({
        x: position.x,
        y: position.y + 20,
        width: 120,
        value: defaultValue,
        height: 20,
        orientation: "x",

        track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_DARK),
        indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_LIGHT),
        thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),

        input: "click", // 'drag'|'click'
        valuechangeCallback: function (value) {
          print1.text = `${name} ${value.toFixed(1)}`;
          self.setAllVolume(scene, value, "se");
        },
      })
      .layout();
  }

  bgmAudio(self, scene, defaultValue, position, name) {
    var print1 = this.add.text(position.x - 100, position.y - 15, "", {
      fontFamily: "Arial",
      fontSize: "14px",
      fill: "#f7f7f7",
      stroke: "#070701",
      strokeThickness: 0,
      padding: 2.5,
      backgroundColor: "#030507d7",
    });
    this.rexUI.add
      .slider({
        x: position.x,
        y: position.y + 20,
        width: 120,
        value: defaultValue,
        height: 20,
        orientation: "x",

        track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_DARK),
        indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_LIGHT),
        thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),

        input: "click", // 'drag'|'click'
        valuechangeCallback: function (value) {
          print1.text = `${name} ${value.toFixed(1)}`;
          self.setAllVolume(scene, value, "bgm");
        },
      })
      .layout();
  }

  sfxAudio(self, scene, defaultValue, position, name) {
    var print1 = this.add.text(position.x - 100, position.y - 15, "", {
      fontFamily: "Arial",
      fontSize: "14px",
      fill: "#f7f7f7",
      stroke: "#070701",
      strokeThickness: 0,
      padding: 2.5,
      backgroundColor: "#030507d7",
    });
    this.rexUI.add
      .slider({
        x: position.x,
        y: position.y + 20,
        width: 120,
        value: defaultValue,
        height: 20,
        orientation: "x",

        track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_DARK),
        indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_LIGHT),
        thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),

        input: "click", // 'drag'|'click'
        valuechangeCallback: function (value) {
          print1.text = `${name} ${value.toFixed(1)}`;
          self.setAllVolume(scene, value, "sfx");
        },
      })
      .layout();
  }

  setAllVolume(scene, volume, typeEffect) {
    for (const soundName in scene.sounds[typeEffect]) {
      if (scene.sounds[typeEffect].hasOwnProperty(soundName)) {
        const sound = scene.sounds[typeEffect][soundName];
        sound.volume = volume;
      }
    }
  }
}
