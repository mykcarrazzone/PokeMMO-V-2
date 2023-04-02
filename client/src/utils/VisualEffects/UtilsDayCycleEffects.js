import { GAMES_INFOS } from "@/constants/GameInfos/GameInfos";
import { GAME_UTILITIES } from "@/services/Game/ServicesGamesRouter/ServicesGames";

export const funcStartDayCycle = (value, self) => {
  if (typeof value !== "boolean") {
    throw new Error("[funcStartDayCycle] - Invalid value");
  } else {
    const isDayCycleCanStart = value;
    if (isDayCycleCanStart && GAME_UTILITIES.isDay(self)) {
      setDayCycleEffects("day", self, true);
    } else {
      setDayCycleEffects("night", self, true);
    }
    self.events.on("dayChange", (isDay) => {
      if (isDayCycleCanStart && isDay) {
        setDayCycleEffects("day", self);
      } else {
        setDayCycleEffects("night", self);
      }
    });
  }
};

export const setDayCycleEffects = (cycleType, self, firstTime) => {
  // Vérifier si le rectangle a déjà été créé
  if (!self.dayCycleRectangle) {
    const color = 0x000000;
    const alpha = 0; // Toujours initialiser l'alpha à 0

    // Créer le rectangle et le stocker dans une variable
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
  }

  // Mettre à jour les propriétés du rectangle
  const color = 0x000000;
  const targetAlpha = cycleType === "day" ? 0 : GAMES_INFOS.nightOpacity;
  const duration = firstTime ? 0: 6000; // Durée de la transition en millisecondes

  // Créer un tween pour la transition en douceur
  self.tweens.add({
    targets: self.dayCycleRectangle,
    alpha: targetAlpha,
    ease: "Linear",
    duration: duration,
    onUpdate: () => {
      self.dayCycleRectangle.setFillStyle(
        color,
        self.dayCycleRectangle.alpha
      );
    },
    onComplete: () => {
      self.dayCycleRectangle.setFillStyle(color, targetAlpha);
    },
  });
};
