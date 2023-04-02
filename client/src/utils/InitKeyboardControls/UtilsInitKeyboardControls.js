import { GAME_UTILITIES } from "@/services/Game/ServicesGamesRouter/ServicesGames";

export const utilsInitKeyboardControls = (self) => {
  // console.log(self.isCrossActivated)
  if (!self.gridEngine.isMoving("player")) {
    if (
      !self.hasUpdatedSpriteToDefault &&
      GAME_UTILITIES.servicesGetMapProperties().bike
    ) {
      GAME_UTILITIES.servicesUpdatedSpriteToDefault(self);
      self.hasUpdatedSpriteToDefault = true;
    }

    if (
      Phaser.Input.Keyboard.JustDown(self.keys.cross) &&
      GAME_UTILITIES.servicesGetMapProperties().bike &&
      self.time.now - self.crossLastPressed > self.crossDelay
    ) {
      self.crossLastPressed = self.time.now;
      self.isCrossActivated = !self.isCrossActivated;
      if (self.isCrossActivated) {
        self.currentState = "cross";
      } else {
        self.currentState = "normal";
      }
      if (self.previousState !== self.currentState) {
        console.log("MODE CHANGED TO: ", self.currentState);
        GAME_UTILITIES.servicesUpdateSprite(self);
        self.previousState = self.currentState;
      }
    } else if (
      self.keys.shift.isDown &&
      !self.isCrossActivated &&
      self.time.now - self.shiftLastPressed > self.shiftDelay
    ) {
      if (self.isCrossActivated || self.keys.shift.isDown) {
        self.shiftLastPressed = self.time.now;
        self.isCrossActivated = false;
        self.currentState = "shift";
        if (self.previousState !== self.currentState) {
          console.log("MODE CHANGED TO: ", self.currentState);
          GAME_UTILITIES.servicesUpdateSprite(self);
          self.previousState = self.currentState;
        }
      }
    } else if (self.keys.shift.isUp && !self.isCrossActivated) {
      self.currentState = "normal";
      if (self.previousState !== self.currentState) {
        console.log("MODE CHANGED TO: ", self.currentState);
        GAME_UTILITIES.servicesUpdateSprite(self);
        self.previousState = self.currentState;
      }
    }
  }

  if (self.keys.left.isDown) {
    self.gridEngine.move("player", "left");
  } else if (self.keys.right.isDown) {
    self.gridEngine.move("player", "right");
  } else if (self.keys.up.isDown) {
    self.gridEngine.move("player", "up");
  } else if (self.keys.down.isDown) {
    self.gridEngine.move("player", "down");
  }
};
