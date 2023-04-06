export const funcFireEffects = (effect, self) => {
  self.flameEmitter = self.add.particles("fire").setDepth(101);
  self.flameEmitter2 = self.add.particles("fire2").setDepth(101);
  self.flameEmitter.createEmitter({
    x: { min: effect.x * 3.97, max: effect.x * 3.98 },
    y: effect.y * 3.97,
    gravityY: -52,
    lifespan: 550,
    quantity: 0.001,
    gravityX: 27,
    speed: { min: 110, max: 110 },
    angle: { min: 215, max: 250 },
    alpha: { start: 0.5, end: 0 },
    scale: { start: 0.02, end: 0.06 },
    blendMode: "ADD",
  });
  self.flameEmitter2.createEmitter({
    x: { min: effect.x * 3.96, max: effect.x * 3.98 },
    y: effect.y * 3.97,
    gravityY: -52,
    gravityX: 27,
    lifespan: 1050,
    quantity: 0.001,
    speed: { min: 130, max: 130 },
    angle: { min: 215, max: 250 },
    alpha: { start: 0.4, end: 0 },
    scale: { start: 0.019, end: 0.025 },
    blendMode: "ADD",
  });
};

export const funcSmokeEffects = (effect, self) => {
  self.smokeEmitter = self.add.particles("smoke").setDepth(100);
  self.smokeEmitter.createEmitter({
    x: { min: effect.x * 3.976, max: effect.x * 4.009 },
    y: effect.y * 4.009,
    gravityY: -100,
    gravityX: -7,
    lifespan: 2200,
    quantity: 0.0001,
    speed: { min: 10, max: 15 },
    angle: { min: 190, max: 200 },
    scale: { start: 0.009, end: 0.019 },
    alpha: { start: 0.25, end: 0 },
    blendMode: "NORMAL",
  });
  self.smokeEmitter.createEmitter({
    x: { min: effect.x * 3.98, max: effect.x * 4.009 },
    y: effect.y * 3.999,
    gravityY: -100,
    gravityX: 30,
    lifespan: 1000,
    quantity: 0.0001,
    speed: { min: 10, max: 15 },
    angle: { min: 190, max: 200 },
    scale: { start: 0.009, end: 0.019 },
    alpha: { start: 0.25, end: 0 },
    blendMode: "NORMAL",
  });
};

export const funcWoodFireEffects = (effect, self) => {
  self.sounds["sfx"] = {
    chimney: self.sound.add("chimney", { loop: true, volume: 1 }),
  }
  self.sounds["sfx"].chimney.play();
  const pointLight = new Phaser.GameObjects.PointLight(
    self,
    effect.x * 3.98,
    effect.y * 3.98,
    0xffffee,
    100,
    0.55
  ).setAlpha(0.25);
  self.add.existing(pointLight);
  pointLight.setDepth(99);
  pointLight.visible = true;
  self.flameEmitter = self.add.particles("fire").setDepth(101);
  self.flameEmitter2 = self.add.particles("fire2").setDepth(101);

  self.flameEmitter.createEmitter({
    x: { min: effect.x * 3.96, max: effect.x * 4.02 },
    y: effect.y * 3.995,
    gravityY: -52,
    lifespan: 620,
    quantity: 0.001,
    gravityX: 10,
    speed: { min: 70, max: 82 },
    angle: { min: 215, max: 320 },
    alpha: { start: 1, end: 0 },
    scale: { start: 0.0029, end: 0.0059 },
    blendMode: "ADD",
  });
  self.flameEmitter2.createEmitter({
    x: { min: effect.x * 3.96, max: effect.x * 4.02 },
    y: effect.y * 3.995,
    gravityY: -52,
    lifespan: 600,
    quantity: 0.001,
    gravityX: 10,
    speed: { min: 70, max: 82 },
    angle: { min: 215, max: 320 },
    alpha: { start: 1, end: 0 },
    scale: { start: 0.0099, end: 0.0099 },
    blendMode: "ADD",
  });
  self.flameEmitter.createEmitter({
    x: { min: effect.x * 3.959, max: effect.x * 4.02 },
    y: effect.y * 3.994,
    gravityY: -52,
    lifespan: 600,
    quantity: 0.001,
    gravityX: 10,
    speed: { min: 70, max: 82 },
    angle: { min: 215, max: 320 },
    alpha: { start: 0.75, end: 0 },
    scale: { start: 0.0019, end: 0.0099 },
    blendMode: "ADD",
  });
  self.flameEmitter2.createEmitter({
    x: { min: effect.x * 3.96, max: effect.x * 4.02 },
    y: effect.y * 3.995,
    gravityY: -62,
    lifespan: 500,
    quantity: 0.001,
    gravityX: 5,
    speed: { min: 30, max: 50 },
    angle: { min: 200, max: 320 },
    alpha: { start: 0.10, end: 0 },
    scale: { start: 0.021, end: 0.04 },
    blendMode: "ADD",
  });
};

export const funcWoodSmokeEffects = (effect, self) => {
  self.smokeEmitter = self.add.particles("smoke").setDepth(100);
  self.smokeEmitter.createEmitter({
    x: { min: effect.x * 3.93, max: effect.x * 3.99 },
    y: effect.y * 3.965,
    gravityY: -100,
    gravityX: -7,
    lifespan: 1200,
    quantity: 0.0001,
    speed: { min: 5, max: 10 },
    angle: { min: 190, max: 200 },
    scale: { start: 0.004, end: 0.012 },
    alpha: { start: 0.1, end: 0 },
    blendMode: "NORMAL",
  });
  self.smokeEmitter.createEmitter({
    x: { min: effect.x * 3.93, max: effect.x * 3.99 },
    y: effect.y * 3.97,
    gravityY: -100,
    gravityX: 10,
    lifespan: 900,
    quantity: 0.0001,
    speed: { min: 5, max: 10 },
    angle: { min: 190, max: 200 },
    scale: { start: 0.004, end: 0.014 },
    alpha: { start: 0.09, end: 0 },
    blendMode: "NORMAL",
  });
};

export const utilsStartVisualEffects = (object, self) => {
  /** Early return if object is not an array or if it's empty */
  if (!Array.isArray(object.objects) || object.objects.length === 0) {
    return;
  }

  Object.values(object.objects).forEach((effect) => {
    switch (effect.name) {
      case "Fire":
        funcFireEffects(effect, self);
        break;
      case "Smoke":
        funcSmokeEffects(effect, self);
        break;
      case "WoodSmoke":
        funcWoodSmokeEffects(effect, self);
        break;
      case "WoodFire":
        funcWoodFireEffects(effect, self);
      default:
        break;
    }
  });
};
