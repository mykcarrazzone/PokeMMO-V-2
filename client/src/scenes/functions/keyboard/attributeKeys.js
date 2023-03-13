export const attributeKeys = (self) => {
  self.keys = self.scene.input.keyboard.addKeys({
    up: "Z",
    down: "S",
    left: "Q",
    right: "D",
    shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
    cross: "R",
    fly: "F",
    space: Phaser.Input.Keyboard.KeyCodes.SPACE,
    enter: Phaser.Input.Keyboard.KeyCodes.ENTER,
  });
  self.isUpPressed = self.keys.up.isDown;
  self.isDownPressed = self.keys.down.isDown;
  self.isLeftPressed = self.keys.left.isDown;
  self.isRightPressed = self.keys.right.isDown;
  self.isShiftPressed = self.keys.shift.isDown;
  self.isUpPressedUp = self.keys.up.isUp;
  self.isDownPressedUp = self.keys.down.isUp;
  self.isLeftPressedUp = self.keys.left.isUp;
  self.isRightPressedUp = self.keys.right.isUp;
  self.isShiftPressedUp = self.keys.shift.isUp;
  // Ajoute une clée pour quand on clique sur le cross (différent du isDown)
  self.isCrossCliqued = Phaser.Input.Keyboard.JustDown(self.keys.cross);

  self.isFlyCliqued = Phaser.Input.Keyboard.JustDown(self.keys.fly);
};
