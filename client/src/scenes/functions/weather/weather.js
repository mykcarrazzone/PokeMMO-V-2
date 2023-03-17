const snow = (self, map) => {
  self.emitter = self.add.particles("snowflake").setDepth(1000);
  console.log(self.emitter);
  self.emitter.allowGravity = false;
  self.emitter.createEmitter({
    emitZone: {
      type: "random",
      source: new Phaser.Geom.Rectangle(
        0,
        0,
        map.widthInPixels * 3,
        map.heightInPixels * 2
      ),
    },
    lifespan: 20000, // ça sert à définir la durée de vie des particules
    speedY: { min: 91, max: 91 },
    gravityY: 4, // il faut la monter pour que les particules tombent plus vite
    quantity: 0.6,
    frequency: 70, // ça sert à définirzds la fréquence d'apparition des particules, plus c'est petit plus c'est rapide
    scale: { start: 0.4, end: 0.4 },
    follow: self.cameras.main, // ça sert à suivre la caméra
    followOffset: { x: 0, y: -800 }, // ça sert à définir la position des particules par rapport au joueur
    blendMode: "ADD",
  });
};

const rain = (self, map) => {
  self.emitter = self.add.particles("rain").setDepth(1000);
  self.emitter.allowGravity = false;
  self.emitter.createEmitter({
    emitZone: {
      type: "random",
      source: new Phaser.Geom.Rectangle(
        0,
        0,
        map.widthInPixels * 2,
        map.heightInPixels * 2
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

export const startWeather = (self, map, weather) => {
  switch (weather) {
    case "Snow":
      snow(self, map);
      break;
    case "Rain":
      rain(self, map);
      break;
    default:
      break;
  }
};
