import { startWeather } from "../VisualEffects/weatherEffects";
import { startEffects } from "../VisualEffects/fireEffects";
import { createMessageBoxUi } from "../../utils/MessageBoxUi/MessageBoxUi";
export const objectInit = (self, objects) => {
  Object.values(objects).forEach((object) => {
    console.log(object);
    switch (object.name) {
      case "Audio":
        console.log("OBJJJ", objects);
        const audio = self.sound.add(object.properties[0].value, {
          loop: object.properties[1].value,
          volume: object.properties[2].value,
        });
        audio.play();

        break;
      case "Weather":
        startWeather(self, self.map, object);
        break;
      case "Effects":
        startEffects(self, object);
        break;
      case "Npc":
        addNpc(self, object);
        break;
      default:
        break;
      case "MapName":
        let mapName = object.objects[0].text.text;
        mapName == "Maison de"
          ? (mapName = "Maison de " + self.localPlayer.nickName)
          : mapName;
        createMessageBoxUi({
          scene: self,
          x: 210,
          y: 108,
          text: mapName,
          radius: 5,
          fontFamily: "Comic Sans Ms",
          textColor: "#ffffff",
          shadow: 2,
          backgroundColor: "#d39e34",
          fontSize: 28,
          padding: 45,
        });
        break;
      case "CanCrossRun":
        if (!object.properties[0].value) {
          self.gridEngine.setWalkingAnimationMapping("player", 0);
          self.gridEngine.turnTowards(
            "player",
            self.gridEngine.getFacingDirection("player")
          );
          self.gridEngineClass.setCantCrossRun(false);
        } else {
          self.gridEngineClass.setCantCrossRun(true);
        }
        break;
    }
  });
};

function addNpc(self, obj) {
  obj.objects.map((object) => {
    const direction = object.properties[0].value;
    const [x, y] = object.properties[1].value.split("|");
    self.gridEngineClass.addNpc({
      id: object.name,
      x: parseInt(x),
      y: parseInt(y),
      speed: 0,
      walkingAnimationMapping: object.properties[2].value,
      collides: true,
    });
    self.gridEngineClass.setTurnTowards(object.name, direction);
  });
}
