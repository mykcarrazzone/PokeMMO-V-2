const snow = (self) => {
  self.emitter = self.add.particles("snowflake").setDepth(99);
  self.emitter.allowGravity = false;
  self.emitter.createEmitter({
    emitZone: {
      type: "random",
      source: new Phaser.Geom.Rectangle(
        0,
        0,
        self.map.widthInPixels * 3,
        self.map.heightInPixels * 2
      ),
    },
    lifespan: 20000, // ça sert à définir la durée de vie des particules
    speedY: { min: 91, max: 91 },
    gravityY: 6, // il faut la monter pour que les particules tombent plus vite
    quantity: 0.5,
    frequency: 70, // ça sert à définirzds la fréquence d'apparition des particules, plus c'est petit plus c'est rapide
    scale: { start: 0.35, end: 0.36 },
    follow: self.cameras.main, // ça sert à suivre la caméra
    followOffset: { x: 0, y: -500 }, // ça sert à définir la position des particules par rapport au joueur
    blendMode: "ADD",
  });
};

const rain = (self) => {
  self.audioRain = self.sound
    .add("weather-rain", { loop: true, volume: 0.5 })
    .play();
  self.emitter = self.add.particles("rain").setDepth(99);
  self.emitter.allowGravity = false;
  self.emitter.createEmitter({
    emitZone: {
      type: "random",
      source: new Phaser.Geom.Rectangle(
        0,
        0,
        self.map.widthInPixels * 3,
        self.map.heightInPixels * 4
      ),
    },
    lifespan: 1700, // ça sert à définir la durée de vie des particules
    speedY: { min: 150, max: 150 },
    gravityY: 550, // PERMET DE FAIRE TOMBER LES PARTICULES PLUS VITE
    gravityX: -250,
    maxParticles: 22500,
    frequency: 0,
    quantity: 7, // plus y'a de quantity plus y'a de particules
    alpha: { start: 0.5, end: 0.5 },
    scale: { start: 0.11, end: 0.11 },
    follow: self.cameras.main, // ça sert à suivre la caméra
    followOffset: { x: 0, y: -1000 }, // ça sert à définir la position des particules par rapport au joueur
    blendMode: "ADD",
  });
  const createFlash = (self) => {
    const flashRectangle = self.add
      .rectangle(
        0,
        0,
        self.cameras.main.width,
        self.cameras.main.height,
        0xffffff,
        0
      )
      .setDepth(100)
      .setOrigin(0, 0)
      .setScrollFactor(0)
      .setAlpha(0);

    const flashTween = () => {
      self.tweens.add({
        targets: flashRectangle,
        alpha: 0.8,
        duration: 300,
        ease: "Linear",
        onStart: () => {
          flashRectangle.setFillStyle(0xf7faff);
        },
        onComplete: () => {
          self.tweens.add({
            targets: flashRectangle,
            alpha: 0,
            duration: 1200,
            ease: "Linear",
            onComplete: () => {
              // Attendre 12 secondes avant de redémarrer le flash
              self.time.delayedCall(5000, flashTween, [], self);
            },
          });
        },
      });
    };

    // Démarrer le premier flash
    flashTween();
  };

  // Dans votre fonction create ou init du jeu, ajoutez :
  setTimeout(() => {
    createFlash(self);
  }, 1000);
};

export const funcStartWeather = (value, self) => {
  const isBeStarted = value.split("|")[0];
  const weatherName = value.split("|")[1];
  if (isBeStarted) {
    switch (weatherName) {
      case "Snow":
        snow(self);
        break;
      case "Rain":
        rain(self);
        break;
      default:
        break;
    }
  }
};
