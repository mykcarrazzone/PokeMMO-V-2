export const utilsDefineVariables = (self) => {
  self.currentState = "normal";
  self.crossLastPressed = 0;
  self.crossDelay = 500;
  self.shiftLastPressed = 0;
  self.shiftDelay = 500;
  self.previousState = null;
  self.hasUpdatedSpriteToDefault = false;

  self.keys = self.input.keyboard.addKeys({
    up: Phaser.Input.Keyboard.KeyCodes.Z,
    down: Phaser.Input.Keyboard.KeyCodes.S,
    left: Phaser.Input.Keyboard.KeyCodes.Q,
    right: Phaser.Input.Keyboard.KeyCodes.D,
    shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
    cross: Phaser.Input.Keyboard.KeyCodes.R,
  });
};
