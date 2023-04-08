import { Scene } from "phaser";
const COLOR_PRIMARY = 0x1f2937;
const COLOR_LIGHT = 0x00000;
const COLOR_DARK = 0x2d3949;
export default class DialogMessage extends Scene {
  constructor() {
    super("DialogMessage");
  }

  preload() {}

  create(dialog) {
    this.message = dialog.message;
    this.name = dialog.name;
    this.beforeScene = dialog.beforeScene;
    this.direction = dialog.direction;
    this.npcInteraction = dialog.npcInteraction;
    var self = this;
    this.beforeScene.events.emit("Dialog", true);
    this.createDialog(this, this.createContent(10000))
      .layout()
      .modalPromise()
      .then(function () {
        self.beforeScene.gridEngine.turnTowards(self.name, self.direction);
        self.beforeScene.events.emit("Dialog", false);
        if (
          self.npcInteraction != null &&
          self.npcInteraction.isMovable === "true"
        ) {
          console.log(self.npcInteraction);
          self.message = "On y va ? grimpe dans la bagnole";
          self.beforeScene.gridEngine.moveTo(self.name, {
            x: parseInt(self.npcInteraction.x),
            y: parseInt(self.npcInteraction.y),
          });
          self.time.delayedCall(1000, function () {
            self.beforeScene.gridEngine.moveTo("player", { x: 70, y: 61 });
          });
        }
      });
  }

  createDialog = function (scene, content) {
    return scene.rexUI.add.textArea({
      x: window.innerWidth / 2,
      y: 180,
      width: 450,
      height: 280,

      background: scene.rexUI.add.roundRectangle({
        color: COLOR_PRIMARY,
        radius: 20,
      }),

      // text: scene.add.text(),
      text: scene.rexUI.add.BBCodeText(),
      textMask: false,

      slider: {
        track: scene.rexUI.add.roundRectangle(0, 0, 20, 10, 10, COLOR_DARK),
        thumb: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 13, COLOR_LIGHT),
      },

      space: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,

        text: 10,
        // text: {
        //     top: 20,
        //     bottom: 20,
        //     left: 20,
        //     right: 20,
        // },
        header: 20,
        footer: 20,
      },

      scroller: {
        pointerOutRelease: false, // permet de garder le scroll enfoncé
      },

      mouseWheelScroller: {
        focus: false, // permet de faire défiler la fenêtre avec la molette de la souris
        speed: 0.1, // vitesse de défilement
      },

      header: scene.rexUI.add.label({
        space: { left: 10, right: 10, top: 10, bottom: 10 },

        orientation: 0,
        background: scene.rexUI.add.roundRectangle(0, 0, 20, 20, 0, 0x0000), // couleur de fond
        text: scene.add.text(0, 0, this.name),
      }),

      footer: scene.rexUI.add
        .label({
          space: { left: 10, right: 10, top: 10, bottom: 10 },

          orientation: 0,
          background: scene.rexUI.add.roundRectangle({
            radius: 10,
            color: COLOR_DARK,
            strokeColor: COLOR_DARK,
          }),
          text: scene.add.text(0, 0, "Fermer"),
        })
        .onClick(function (button, gameObject, pointer, event) {
          gameObject.getTopmostSizer().modalClose();
        }),

      content: content,

      expand: {
        footer: false, // permet de garder le footer en bas de la fenêtre
      },
    });
  };

  createContent = function () {
    return this.message + "\n";
  };
}
