import OnlinePlayer from "@/scenes/OnlinePlayer";
import { servicesHandlerSocket } from "@/services/Handler/ServicesHandlerSocket";
import { GridEngineCreate } from "@/scenes/GridEngineConfig";
import { utilsFpsDisplay } from "@/utils/FpsDisplay/UtilsFpsDisplay";
import { utilsInitKeyboardControls } from "@/utils/InitKeyboardControls/UtilsInitKeyboardControls";
import { utilsInitGameObjects } from "@/utils/initGameObjects/UtilsInitGameObjects";
import { utilsStartVisualEffects } from "@/utils/VisualEffects/UtilsFireEffects";
import { servicesAddNpc } from "@/services/Game/ServicesAddNpc";
import { servicesMapProperties } from "@/services/Game/ServicesMapProperties";
import { servicesGetMapProperties } from "@/services/Game/ServicesMapProperties";
import { servicesDisableInputByFocus } from "@/services/Game/ServicesDisableInputByFocus";
import { servicesUpdateSprite } from "@/services/Game/ServicesUpdatedSprite";
import { utilsDefineVariables } from "@/utils/InitKeyboardControls/UtilsDefinedVariables";
import { servicesUpdatedSpriteToDefault } from "@/services/Game/ServicesUpdatedSprite";
/** CREATE ONLINE PLAYERS ARRAY FOR SCENES 1*/
let onlinePlayers = [];
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
  utilsInitKeyboardControls,
  utilsInitGameObjects,
  servicesHandlerSocket,
  utilsFpsDisplay,
  utilsStartVisualEffects,
  OnlinePlayer,
  GridEngineCreate,
  onlinePlayers,
  servicesMapProperties,
  servicesGetMapProperties,
  servicesDisableInputByFocus,
  servicesUpdateSprite,
  servicesUpdatedSpriteToDefault,
  utilsDefineVariables,
};
