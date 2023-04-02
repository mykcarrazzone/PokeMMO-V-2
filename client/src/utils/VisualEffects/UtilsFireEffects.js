export const utilsStartVisualEffects = (effect, self) => {
  self.flameEmitter = self.add.particles("fire").setDepth(101);
  self.flameEmitter.createEmitter({
    x: { min: effect.x * 3.96, max: effect.x * 3.98 },
    y: effect.y * 3.97,
    gravityY: -52,
    lifespan: 825,
    quantity: 0.001,
    speed: { min: 130, max: 130 },
    angle: { min: 215, max: 250 },
    scale: { start: 0.01, end: 0.1 },
    blendMode: "ADD",
  });
};

export const funcStartVisualEffects = (object, self) => {
  /** Early return if object is not an array or if it's empty */
  if (!Array.isArray(object.objects) || object.objects.length === 0) {
    return;
  }

  const effect = object.objects[0];
  switch (effect.name) {
    case "Fire":
      funcFireEffects(effect, self);
      break;
    default:
      break;
  }
};
