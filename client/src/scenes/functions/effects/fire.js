export const fire = (self, obj) => {
  self.flameEmitter = self.add.particles("fire").setDepth(101);
  self.flameEmitter.createEmitter({
    x: { min: obj.x * 3.96, max: obj.x * 3.98 },
    y: obj.y * 3.97,
    gravityY: -52,
    lifespan: 825,
    quantity: 0.001,
    speed: { min: 130, max: 130 },
    angle: { min: 215, max: 250 },
    scale: { start: 0.01, end: 0.1 },
    blendMode: "ADD",
  });
};

export const startEffects = (self, effect) => {
  switch (effect.name) {
    case "Fire":
      fire(self, effect);
      break;
    default:
      break;
  }
};
