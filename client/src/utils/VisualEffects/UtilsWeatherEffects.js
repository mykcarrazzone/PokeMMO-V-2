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
  self.emitter = self.add.particles("rain").setDepth(99);
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
    lifespan: 5000, // ça sert à définir la durée de vie des particules
    speedY: { min: 180, max: 190 },
    gravityY: 900, // PERMET DE FAIRE TOMBER LES PARTICULES PLUS VITE
    maxParticles: 20500,
    frequency: 0,
    quantity: 6, // plus y'a de quantity plus y'a de particules
    alpha: { start: 0.5, end: 0.0 },
    scale: { start: 0.4, end: 0.4 },
    follow: self.cameras.main, // ça sert à suivre la caméra
    followOffset: { x: 0, y: -1000 }, // ça sert à définir la position des particules par rapport au joueur
    blendMode: "ADD",
  });
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
