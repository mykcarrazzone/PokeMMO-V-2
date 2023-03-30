export const initKeyboardControls = (self) => {
  document.addEventListener("mousedown", function (event) {
    var elementClicked = document.elementFromPoint(
      event.clientX,
      event.clientY
    );

    if (elementClicked.nodeName == "CANVAS") {
      self.gameHasFocused = true;
      self.input.keyboard.enabled = true;
      self.input.keyboard.enableGlobalCapture();
      console.log("Game has focused");
    } else {
      self.gameHasFocused = false;
      self.input.keyboard.enabled = false;
      self.input.keyboard.disableGlobalCapture();
      console.log("Game has unfocused");
    }
  });

  const keys = self.input.keyboard.addKeys({
    up: Phaser.Input.Keyboard.KeyCodes.Z,
    down: Phaser.Input.Keyboard.KeyCodes.S,
    left: Phaser.Input.Keyboard.KeyCodes.Q,
    right: Phaser.Input.Keyboard.KeyCodes.D,
    shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
    cross: Phaser.Input.Keyboard.KeyCodes.R,
  });

  let currentState;

  const updateSprite = () => {
    if (currentState !== self.previousState) {
      self.previousState = currentState;
      switch (currentState) {
        case "cross":
          self.walk.rate = 4;
          self.gridEngine.setSpeed("player", 7);
          self.gridEngine.setWalkingAnimationMapping("player", 2);
          self.gridEngine.turnTowards(
            "player",
            self.gridEngine.getFacingDirection("player")
          );
          break;
        case "shift":
          self.walk.rate = 1.5;
          self.gridEngine.setSpeed("player", 4);
          self.gridEngine.setWalkingAnimationMapping("player", 1);
          self.gridEngine.turnTowards(
            "player",
            self.gridEngine.getFacingDirection("player")
          );
          break;
        case "normal":
          self.walk.rate = 1;
          self.gridEngine.setSpeed("player", 3);
          self.gridEngine.setWalkingAnimationMapping("player", 0);
          self.gridEngine.turnTowards(
            "player",
            self.gridEngine.getFacingDirection("player")
          );
          break;
      }
    }
  };

  if (Phaser.Input.Keyboard.JustDown(keys.cross)) {
    self.isCrossActivated = !self.isCrossActivated;
    if (self.isCrossActivated) {
      currentState = "cross";
    } else {
      currentState = "normal";
    }
    updateSprite();
  } else if (keys.shift.isDown && !self.isCrossActivated) {
    if (self.isCrossActivated || keys.shift.isDown) {
      self.isCrossActivated = false;
      currentState = "shift";
      updateSprite();
    }
  } else if (keys.shift.isUp && !self.isCrossActivated) {
    currentState = "normal";
    updateSprite();
  }

  if (keys.left.isDown) {
    self.gridEngine.move("player", "left");
  } else if (keys.right.isDown) {
    self.gridEngine.move("player", "right");
  } else if (keys.up.isDown) {
    self.gridEngine.move("player", "up");
  } else if (keys.down.isDown) {
    self.gridEngine.move("player", "down");
  }
};
