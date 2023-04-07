import { Scene } from "phaser";

const COLOR_PRIMARY = 0xf7f7f7;
const COLOR_LIGHT = 0x070a0e;
const COLOR_DARK = 0x1F2937;

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
        x: window.innerWidth - 105,
        y: window.innerHeight / 6,
      },
      "Musique"
    );

    this.seAudio(
      self,
      scene,
      0.7,
      {
        x: window.innerWidth - 105,
        y: window.innerHeight / 6 + 100,
      },
      "Effets sonore"
    );

    this.sfxAudio(
      self,
      scene,
      0.8,
      {
        x: window.innerWidth - 105,
        y: window.innerHeight / 6 + 200,
      },
      "Effets spéciaux"
    );
  }

  saveVolume(typeEffect, value) {
    localStorage.setItem(`volume_${typeEffect}`, value);
  }

  loadVolume(typeEffect, defaultValue) {
    const savedValue = localStorage.getItem(`volume_${typeEffect}`);
    return savedValue !== null ? parseFloat(savedValue) : defaultValue;
  }

  seAudio(self, scene, defaultValue, position, name) {
    const loadedValue = this.loadVolume("se", defaultValue);

    var print1 = this.add.text(position.x - 55, position.y - 15, "", {
      fontFamily: "Arial",
      fontFamily: "Arial",
      fontSize: "14px",
      fill: "#f7f7f7",
      stroke: "#3e516b",
      strokeThickness: 0,
      padding: 2.5,
      backgroundColor: "#1F2937",
    });
    this.rexUI.add
      .slider({
        x: position.x,
        y: position.y + 20,
        width: 110,
        value: loadedValue,
        height: 20,
        orientation: "x",

        track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_DARK),
        indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_LIGHT),
        thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),

        input: "click", // 'drag'|'click'
        valuechangeCallback: function (value) {
          print1.text = `${name} ${value.toFixed(1)}`;
          self.setAllVolume(scene, value, "se");
          self.saveVolume("se", value);
        },
      })
      .layout();
  }

  bgmAudio(self, scene, defaultValue, position, name) {
    const loadedValue = this.loadVolume("bgm", defaultValue);

    var print1 = this.add.text(position.x - 45, position.y - 15, "", {
      fontFamily: "Arial",
      fontFamily: "Arial",
      fontSize: "14px",
      fill: "#f7f7f7",
      stroke: "#3e516b",
      strokeThickness: 0,
      padding: 2.5,
      backgroundColor: "#1F2937",
    });
    this.rexUI.add
      .slider({
        x: position.x,
        y: position.y + 20,
        width: 110,
        value: loadedValue,
        height: 20,
        orientation: "x",

        track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_DARK),
        indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_LIGHT),
        thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),

        input: "click", // 'drag'|'click'
        valuechangeCallback: function (value) {
          print1.text = `${name} ${value.toFixed(1)}`;
          self.setAllVolume(scene, value, "bgm");
          self.saveVolume("bgm", value);
        },
      })
      .layout();
  }

  sfxAudio(self, scene, defaultValue, position, name) {
    const loadedValue = this.loadVolume("sfx", defaultValue);

    var print1 = this.add.text(position.x - 55, position.y - 15, "", {
      fontFamily: "Arial",
      fontSize: "14px",
      fill: "#f7f7f7",
      stroke: "#3e516b",
      strokeThickness: 0,
      padding: 2.5,
      backgroundColor: "#1F2937",
    });
    this.rexUI.add
      .slider({
        x: position.x,
        y: position.y + 20,
        width: 110,
        value: loadedValue,
        height: 20,
        orientation: "x",

        track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_DARK),
        indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_LIGHT),
        thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),

        input: "click", // 'drag'|'click'
        valuechangeCallback: function (value) {
          print1.text = `${name} ${value.toFixed(1)}`;
          self.setAllVolume(scene, value, "sfx");
          self.saveVolume("sfx", value);
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
