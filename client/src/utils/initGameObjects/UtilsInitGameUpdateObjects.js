import { GAME_UTILITIES } from "@/services/Game/ServicesGamesRouter/ServicesGames";

export const utilsInitGameUpdateObjects = (self, objects) => {
  Object.values(objects).forEach((object) => {
    switch (object.name) {
      case "LightPoints":
        GAME_UTILITIES.utilsUpdateVisualEffects(object, self);
        break;
    }
  });
};
