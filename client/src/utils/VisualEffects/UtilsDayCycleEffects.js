export const funcStartDayCycle = (value, self) => {
  if (typeof value !== "boolean") {
    throw new Error("[funcStartDayCycle] - Invalid value");
  } else {
    const isDayCycleCanStart = value;
    if (isDayCycleCanStart) {
      const hour = new Date().getHours();
      if (hour >= 0 && hour < 6) {
        setDayCycleEffects(0, 6, self);
      } else if (hour >= 6 && hour < 12) {
        setDayCycleEffects(6, 12, self);
      } else if (hour >= 12 && hour < 18) {
        setDayCycleEffects(12, 18, self);
      } else if (hour >= 18 && hour < 24) {
        setDayCycleEffects(18, 24, self);
      }
    }
  }
};

const setDayCycleEffects = (startHour, endHour, self) => {
  const hour = new Date().getHours();
  const hourPercentage = (hour - startHour) / (endHour - startHour);
  const hourPercentageInverse = 1 - hourPercentage;

  self.dayCycleRectangle = self.add.rectangle(
    0,
    0,
    self.cameras.main.width,
    self.cameras.main.height,
    0x000000,
    0.5
  );

  /** Update the day cycle rectangle alpha every 5 times per second */
  setInterval(() => {
    self.dayCycleRectangle.setAlpha(hourPercentageInverse);
    self.dayCycleRectangle.setDepth(100);
    self.dayCycleRectangle.setOrigin(0, 0);
    self.dayCycleRectangle.setScrollFactor(0);
  }, 1000 / 5);
};