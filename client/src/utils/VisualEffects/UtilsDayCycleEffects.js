import { GAMES_INFOS } from "@/constants/GameInfos/GameInfos";
export const funcStartDayCycle = (value, self) => {
  if (typeof value !== "boolean") {
    throw new Error("[funcStartDayCycle] - Invalid value");
  } else {
    const isDayCycleCanStart = value;
    if (isDayCycleCanStart) {
      const hour = new Date().getHours();
      if (hour >= 6 && hour < 17.5) {
        setDayCycleEffects("day", self);
      } else {
        setDayCycleEffects("night", self);
      }
    }
  }
};

const setDayCycleEffects = (cycleType, self) => {
  const color = cycleType === "day" ? 0x000000 : 0x000000;
  const alpha = cycleType === "day" ? 0 : GAMES_INFOS.nightOpacity;

  self.dayCycleRectangle = self.add
    .rectangle(
      0,
      0,
      self.cameras.main.width,
      self.cameras.main.height,
      color,
      alpha
    )
    .setDepth(100)
    .setOrigin(0, 0)
    .setScrollFactor(0);
};
