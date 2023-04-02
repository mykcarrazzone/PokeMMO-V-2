export const utilsDefineVariables = (self) => {
  isDay(self);
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

export const isDay = (self) => {
  self.hour = new Date().getHours();
  if (self.hour >= 6 && self.hour < 17) { // SI L'HEURE EST ENTRE 6H ET 17H
    return true;
  } else {
    return false;
  }
};
