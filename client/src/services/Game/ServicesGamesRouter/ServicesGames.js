import OnlinePlayer from "@/scenes/OnlinePlayer";
import { servicesHandlerSocket } from "@/services/Handler/ServicesHandlerSocket";
import { GridEngineCreate } from "@/scenes/GridEngineConfig";
import { utilsFpsDisplay } from "@/utils/FpsDisplay/UtilsFpsDisplay";
import { utilsInitKeyboardControls } from "@/utils/InitKeyboardControls/UtilsInitKeyboardControls";
import { utilsInitGameCreateObjects } from "@/utils/initGameObjects/UtilsInitGameCreateObjects";
import { utilsStartVisualEffects } from "@/utils/VisualEffects/UtilsFireEffects";
import { utilsInitGameUpdateObjects } from "@/utils/initGameObjects/UtilsInitGameUpdateObjects";
import { servicesAddNpc } from "@/services/Game/ServicesAddNpc";
import { servicesMapProperties } from "@/services/Game/ServicesMapProperties";
import { servicesGetMapProperties } from "@/services/Game/ServicesMapProperties";
import { servicesDisableInputByFocus } from "@/services/Game/ServicesDisableInputByFocus";
import { servicesUpdateSprite } from "@/services/Game/ServicesUpdatedSprite";
import { utilsDefineVariables } from "@/utils/InitKeyboardControls/UtilsDefinedVariables";
import { servicesUpdatedSpriteToDefault } from "@/services/Game/ServicesUpdatedSprite";
import { utilsUpdateVisualEffects } from "@/utils/VisualEffects/UtilsLightPointsEffects";
import { isDay } from "@/utils/InitKeyboardControls/UtilsDefinedVariables";
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
  utilsInitGameCreateObjects,
  servicesHandlerSocket,
  utilsFpsDisplay,
  utilsStartVisualEffects,
  utilsUpdateVisualEffects,
  utilsInitGameUpdateObjects,
  OnlinePlayer,
  GridEngineCreate,
  onlinePlayers,
  servicesMapProperties,
  servicesGetMapProperties,
  servicesDisableInputByFocus,
  servicesUpdateSprite,
  servicesUpdatedSpriteToDefault,
  utilsDefineVariables,
  isDay,
};
