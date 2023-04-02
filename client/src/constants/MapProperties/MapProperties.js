import { funcStartAudio } from "../../utils/AudioGameGestion/UtilsStartAudioOnMap";
import { funcStartDayCycle } from "../../utils/VisualEffects/UtilsDayCycleEffects";
import { funcAddMapNameSign } from "../../utils/MessageBoxUi/UtilsMessageBoxUi";
import { funcStartWeather } from "../../utils/VisualEffects/UtilsWeatherEffects";

const funcIsBike = (value, self) => {
  if (self.gridEngineClass) {
    if (typeof value !== "boolean") {
      throw new Error("[funcIsBike] - Invalid value");
    } else {
      return value;
    }
  }
};

export const MAP_PROPERTIES = {
  audio: funcStartAudio,
  bike: funcIsBike,
  isNight: funcStartDayCycle,
  mapName: funcAddMapNameSign,
  weather: funcStartWeather,
};
