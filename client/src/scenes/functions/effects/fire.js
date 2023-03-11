export const fire = (self) => {
  self.flameEmitter = self.add.particles("fire").setDepth(101);
  self.flameEmitter.createEmitter({
    x: { min: 1130, max: 1131 },
    y: 655,
    gravityY: -52,
    lifespan: 425,
    quantity: 0.001,
    speed: { min: 130, max: 130 },
    angle: { min: 215, max: 250 },
    scale: { start: 0.01, end: 0.1 },
    blendMode: "ADD",
  });
};

export const startEffects = (self, effect) => {
  switch (effect) {
    case "Fire":
      fire(self);
      break;
    default:
      break;
  }
};
