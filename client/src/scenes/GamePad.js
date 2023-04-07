import { Scene } from "phaser";

export default class GamePad extends Scene {
  constructor() {
    super("GamePad");
  }

  preload() {}
  create(scene) {
    this.sceneGame = scene;
    this.joyStick = this.rexVirtualJoyStick
      .add(this, {
        x: 125,
        y: window.innerHeight - 125,
        radius: 75,
        base: this.add.circle(0, 0, 75, 0x888888),
        thumb: this.add.circle(0, 0, 35, 0xcccccc),
        dir: "4dir", // 'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
        forceMin: 16,
        enable: true,
      })
      .on("update", this.dumpJoyStickState, this)
      .on("pointerdown", function () {
        console.log("pointerdown");
      })
      .on("pointerup", function () {
        console.log("pointerup");
      });

    this.text = this.add.text(50, 300);
    this.dumpJoyStickState(scene);
  }

  dumpJoyStickState() {
    var cursorKeys = this.joyStick.createCursorKeys();
    var s = "Key down: ";
    for (var name in cursorKeys) {
      if (cursorKeys[name].isDown) {
        s += `${name} `;
        this.sceneGame.gridEngine.move("player", name);
      }
    }

    s += `
Force: ${Math.floor(this.joyStick.force * 100) / 100}
Angle: ${Math.floor(this.joyStick.angle * 100) / 100}
`;

    s += "\nTimestamp:\n";
    for (var name in cursorKeys) {
      var key = cursorKeys[name];
      s += `${name}: duration=${key.duration / 1000}\n`;
    }
    // this.text.setText(s);
  }
}
