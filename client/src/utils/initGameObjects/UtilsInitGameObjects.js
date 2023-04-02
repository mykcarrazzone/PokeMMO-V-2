import { GAME_UTILITIES } from "@/services/Game/ServicesGamesRouter/ServicesGames";

export const utilsInitGameObjects = (self, objects) => {
  Object.values(objects).forEach((object) => {
    switch (object.name) {
      case "MapProperties":
        GAME_UTILITIES.servicesMapProperties(object, self);
        break;
      case "Effects":
        GAME_UTILITIES.utilsStartVisualEffects(object, self);
        break;
      case "Npc":
        GAME_UTILITIES.servicesAddNpc(object, self);
        break;
    }
  });
};
