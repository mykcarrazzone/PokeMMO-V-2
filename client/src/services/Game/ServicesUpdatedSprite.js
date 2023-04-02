export const servicesUpdateSprite = (self) => {
  if (self.currentState !== self.previousState) {
    self.previousState = self.currentState;
    switch (self.currentState) {
      case "cross":
        self.walk.rate = 4;
        self.gridEngine.setSpeed("player", 7);
        self.gridEngine.setWalkingAnimationMapping("player", 2);
        break;
      case "shift":
        self.walk.rate = 1.5;
        self.gridEngine.setSpeed("player", 4);
        self.gridEngine.setWalkingAnimationMapping("player", 1);
        break;
      case "normal":
        self.walk.rate = 1;
        self.gridEngine.setSpeed("player", 3);
        self.gridEngine.setWalkingAnimationMapping("player", 0);
        break;
    }
    self.gridEngine.turnTowards(
      "player",
      self.gridEngine.getFacingDirection("player")
    );
  }
};

export const servicesUpdatedSpriteToDefault = (self) => {
  self.walk.rate = 1;
  self.gridEngine.setSpeed("player", 3);
  self.gridEngine.setWalkingAnimationMapping("player", 0);
};
