export const utilsDefineVariables = (self) => {
  // self.hour = 17; // TEST VARIABLE FOR DAY/NIGHT
  self.myLights = [];
  self.isDay = isDay(self);
  self.sounds = {};

  // console.info("Initialise isDay", self.isDay);
  self.intervalId;
  self.intervalSet = false;
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
  self.hour = new Date().getHours(); // VARIABLE FOR DAY/NIGHT REAL TIME
  if (self.hour >= 6 && self.hour < 17) {
    // SI L'HEURE EST ENTRE 6H ET 17H
    return true;
  } else {
    return false;
  }
};

export const handlerUpdateEvents = (self) => {
  const newIsDay = isDay(self);
  // console.info("NewIsDay", newIsDay);
  if (newIsDay !== self.isDay) {
    self.isDay = newIsDay;

    // Déclencher l'événement "dayChange" uniquement lorsque l'état du jour/nuit change
    if (newIsDay) {
      // console.info("Il fait jours !");
      self.events.emit("dayChange", true);
    } else {
      // console.info("Il fait nuits !");
      self.events.emit("dayChange", false);
    }
  }

  // Vérifier si setInterval a déjà été configuré
  // if (!self.intervalSet) {
  //   self.intervalSet = true;

  //   // Configurer setInterval pour augmenter l'heure toutes les secondes
  //   setInterval(() => {
  //     self.hour = (self.hour + 1) % 24;
  //     // console.log("Hour", self.hour);
  //   }, 900);
  // }
};

export const handlerUpdateEventsTests = (self) => {
  const newIsDay = isDay(self);
  // console.log("NewIsDay", newIsDay);
  if (newIsDay !== self.isDay) {
    self.isDay = newIsDay;

    // Déclencher l'événement "dayChange" uniquement lorsque l'état du jour/nuit change
    if (newIsDay) {
      // console.info("Il fait jours !");
      self.events.emit("dayChange", true);
    } else {
      // console.info("Il fait nuits !");
      self.events.emit("dayChange", false);
    }
  }

  // Vérifier si setInterval a déjà été configuré
  // if (!self.intervalSet) {
  //   self.intervalSet = true;

  //   // Configurer setInterval pour augmenter l'heure toutes les secondes
  //   setInterval(() => {
  //     self.hour = (self.hour + 1) % 24;
  //     // console.info("Hour", self.hour);
  //   }, 1000);
  // }
};
