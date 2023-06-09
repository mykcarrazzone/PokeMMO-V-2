import { GAME_UTILITIES } from "@/services/Game/ServicesGamesRouter/ServicesGames";
const snow = (self) => {
  self.sounds["sfx"] = {
    snow: self.sound.add("weather-snow", { loop: true, volume: 1 }),
  };
  self.sounds["sfx"].snow.play();
  self.emitter = self.add.particles("snowflake").setDepth(99);
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
    lifespan: 3650, // ça sert à définir la durée de vie des particules
    speedY: { min: 96, max: 96 },
    gravityY: 50, // il faut la monter pour que les particules tombent plus vite
    gravityX: -30,
    maxParticles: 23500,
    quantity: 7.5,
    frequency: 60, // ça sert à définirzds la fréquence d'apparition des particules, plus c'est petit plus c'est rapide
    scale: { start: 0.32, end: 0.33 },
    follow: self.cameras.main, // ça sert à suivre la caméra
    followOffset: { x: 0, y: -100 }, // ça sert à définir la position des particules par rapport au joueur
    blendMode: "ADD",
  });
};

const getRandomDuration = (durations) => {
  const randomIndex = Math.floor(Math.random() * durations.length);
  return durations[randomIndex];
};

const rain = (self) => {
  if (GAME_UTILITIES.servicesGetMapProperties().weather.split("|")[0]) {
    self.lightningDurations = [
      6000,
      12000, // 12 secondes
      14000, // 14 secondes
      21000, // 21 secondes
      35000, // 35 secondes
      45000, // 45 secondes
    ];

    self.lightningStartDurations = [
      6000,
      3000, // 12 secondes
      7000, // 30 secondes
    ];

    self.sounds["sfx"] = {
      rain: self.sound.add("weather-rain", { loop: true, volume: 1 }),
      thunder: self.sound.add("thunder", { loop: false, volume: 1 }),
    };
    self.sounds["sfx"].rain.play();

    self.emitter = self.add.particles("rain").setDepth(99);
    self.emitter.allowGravity = false;
    self.emitter.createEmitter({
      emitZone: {
        type: "random",
        source: new Phaser.Geom.Rectangle(
          0,
          0,
          self.map.widthInPixels * 4,
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
      if (GAME_UTILITIES.servicesGetMapProperties().weather.split("|")[0]) {
        // console.log("weather is rain");
        if (!self.flashRectangle) {
          self.flashRectangle = self.add
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
        }

        const flashTween = () => {
          self.tweens.add({
            targets: self.flashRectangle,
            alpha: 0.85,
            duration: 300,
            ease: "Linear",
            onStart: () => {
              if (!self.sounds["sfx"].thunder.isPlaying) {
                self.sounds["sfx"].thunder.play();
              }
              self.flashRectangle.setFillStyle(0xf7faff);
            },
            onComplete: () => {
              self.tweens.add({
                targets: self.flashRectangle,
                alpha: 0,
                duration: 1200,
                ease: "Linear",
                onComplete: () => {
                  // Attendre 12 secondes avant de redémarrer le flash
                  const time = getRandomDuration(self.lightningDurations);
                  // console.log("time", time)
                  self.flashRectangle
                    ? self.time.delayedCall(time, flashTween, [], self)
                    : null;
                },
              });
            },
          });
        };

        // Démarrer le premier flash
        flashTween();

        // Dans votre fonction create ou init du jeu, ajoutez :
      } else {
        // console.log("weather is not rain");
        self.audioRain.stop();
        self.flashRectangle ? self.flashRectangle.destroy() : null;
      }
    };

    self.time.delayedCall(
      getRandomDuration(self.lightningStartDurations),
      () => createFlash(self),
      [],
      self
    );
  }
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
