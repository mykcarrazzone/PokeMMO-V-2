const snow = (self) => {
  self.emitter = self.add.particles("snowflake").setDepth(100);
  self.emitter.allowGravity = false;
  self.emitter.createEmitter({
    emitZone: {
      type: "random",
      source: new Phaser.Geom.Rectangle(
        0,
        0,
        self.map.widthInPixels * 1.5,
        self.map.heightInPixels * 1.5
      ),
    },
    lifespan: 11000, // ça sert à définir la durée de vie des particules
    speedY: { min: 61, max: 61 },
    gravityY: 4, // il faut la monter pour que les particules tombent plus vite
    quantity: 0.6,
    frequency: 52, // ça sert à définir la fréquence d'apparition des particules, plus c'est petit plus c'est rapide
    scale: { start: 0.1, end: 0.3 },
    follow: self.cameras.main, // ça sert à suivre la caméra
    followOffset: { x: 0, y: -500 }, // ça sert à définir la position des particules par rapport au joueur
    blendMode: "ADD",
  });
};

const rain = (self) => {
  self.emitter = self.add.particles("rain").setDepth(100);
  self.emitter.allowGravity = false;
  self.emitter.createEmitter({
    emitZone: {
      type: "random",
      source: new Phaser.Geom.Rectangle(
        0,
        0,
        self.map.widthInPixels * 2,
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
    scale: { start: 0.1, end: 0.1 },
    follow: self.cameras.main, // ça sert à suivre la caméra
    followOffset: { x: 0, y: -1000 }, // ça sert à définir la position des particules par rapport au joueur
    blendMode: "ADD",
  });
};

export const startWeather = (self, weather) => {
  switch (weather) {
    case "Snow":
      snow(self);
      break;
    case "Rain":
      rain(self);
      break;
    default:
      break;
  }
};
