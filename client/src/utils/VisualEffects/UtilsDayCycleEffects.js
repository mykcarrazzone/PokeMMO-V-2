import { GAMES_INFOS } from "@/constants/GameInfos/GameInfos";
import { GAME_UTILITIES } from "@/services/Game/ServicesGamesRouter/ServicesGames";
export const funcStartDayCycle = (value, self) => {
  if (typeof value !== "boolean") {
    throw new Error("[funcStartDayCycle] - Invalid value");
  } else {
    var usedHour = GAME_UTILITIES.isDay(self);

    setInterval(() => {
      if (GAME_UTILITIES.isDay(self)) {
        usedHour = GAME_UTILITIES.isDay(self);
        console.log(
          "Il est",
          GAME_UTILITIES.isDay(self),
          "heure(s) !\ndonc il fait jour !"
        );
      } else {
        usedHour = new Date().getHours();
        console.log("Il est", usedHour, "heure(s) !\ndonc il fait nuit !");
      }
    }, 100);

    const isDayCycleCanStart = value;
    if (isDayCycleCanStart) {
      if (usedHour) {
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
