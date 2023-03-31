import OnlinePlayer from "@/scenes/OnlinePlayer";
import { handlerSocket } from "@/services/Handler/ServicesHandlerSocket";
import { GridEngineCreate } from "@/scenes/GridEngineConfig";
import { fpsDisplay } from "@/utils/FpsDisplay/UtilsFpsDisplay";
import { initKeyboardControls } from "@/utils/InitKeyboardControls/UtilsInitKeyboardControls";
import { initGameObjects } from "@/utils/initGameObjects/UtilsInitGameObjects";
import { funcStartVisualEffects } from "@/utils/VisualEffects/UtilsFireEffects";
import { servicesAddNpc } from "@/services/Game/ServicesAddNpc";
import { servicesMapProperties } from "@/services/Game/ServicesMapProperties";

/** CREATE ONLINE PLAYERS ARRAY FOR SCENES 1*/
const onlinePlayers = [];
/***/

/** EXPORT GAME UTILITIES */
/** @TYPE {Object} */
/** @property {servicesAddNpc} servicesAddNpc */
/** @property {servicesMapProperties} servicesMapProperties */
/** @property {initKeyboardControls} initKeyboardControls */
/** @property {initGameObjects} initGameObjects */
/** @property {handlerSocket} handlerSocket */
/** @property {fpsDisplay} fpsDisplay */
/** @property {funcStartVisualEffects} funcStartVisualEffects */
/** @property {OnlinePlayer} OnlinePlayer */
/** @property {GridEngineCreate} GridEngineCreate */
/** @property {onlinePlayers} onlinePlayers */
/***/

export const GAME_UTILITIES = {
  servicesAddNpc,
  servicesMapProperties,
  initKeyboardControls,
  initGameObjects,
  handlerSocket,
  fpsDisplay,
  funcStartVisualEffects,
  OnlinePlayer,
  GridEngineCreate,
  onlinePlayers,
};
