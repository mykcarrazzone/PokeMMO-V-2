import { GAMES_INFOS } from "@/constants/GameInfos/GameInfos";
import { MAP_PROPERTIES } from "@/constants/MapProperties/MapProperties";
import { GAME_UTILITIES } from "@/services/Game/ServicesGamesRouter/ServicesGames";

export const funcLightPointsEffects = (effect, self) => {
  self.lights = [];
  effect.forEach((light) => {
    const pointLight = new Phaser.GameObjects.PointLight(
      self,
      light.x,
      light.y,
      0xffffee,
      118,
      0
    )
    pointLight.setDepth(10001);
    self.add.existing(pointLight);
    pointLight.visible = false;
    self.lights.push(pointLight);
  });

  const updateLightVisibility = (visible, firstTime) => {
    const targetIntensity = visible ? 0.14 : 0;
    const duration = firstTime ? 1000 : 1000; // Durée de la transition en millisecondes
    setTimeout(() => {
    self.lights.forEach((pointLight) => {
      self.tweens.add({
        targets: pointLight,
        intensity: targetIntensity,
        ease: "Linear",
        duration: firstTime ? 1000 : duration / 3.5,
        onStart: () => {
          pointLight.visible = true;
        },
        onComplete: () => {
          if (!visible) {
            pointLight.visible = false;
          }
        },
      });
    });
    }, firstTime ? 500 : 4500);
  };

  // ...

  if (MAP_PROPERTIES.isNight && !GAME_UTILITIES.isDay(self)) {
    updateLightVisibility(true, true);
  } else {
    updateLightVisibility(false, true);
  }

  self.events.on("dayChange", (isDay) => {
    if (MAP_PROPERTIES.isNight && !isDay) {
      updateLightVisibility(true, false);
    } else {
      updateLightVisibility(false, true);
    }
  });
};

export const utilsUpdateVisualEffects = (object, self) => {
  /** Early return if object is not an array or if it's empty */
  if (!Array.isArray(object.objects) || object.objects.length === 0) {
    return;
  }
  const effect = object.objects;
  Object.values(effect).forEach((value) => {
    const xPos = value.x * GAMES_INFOS.gameScale + 35;
    const yPos = value.y * GAMES_INFOS.gameScale + 58;
    self.myLights.push({ x: xPos, y: yPos });
  });
  funcLightPointsEffects(self.myLights, self);
};
