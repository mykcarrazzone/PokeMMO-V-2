import { startWeather } from "../VisualEffects/weatherEffects";
import { startEffects } from "../VisualEffects/fireEffects";

export const objectInit = (self, objects) => {
  // Object.values(objects).forEach((object) => {
  //   object.forEach((obj) => {
  //     switch (obj.name) {
  //       case "Weather":
  //         startWeather(self, self.map, obj.name);
  //         break;
  //       case "Effects":
  //         startEffects(self, obj);
  //         break;
  //       case "Npc":
  //         addNpc(self, obj);
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // });
};

function addNpc(self) {
  console.log("Name", obj.name);
  console.log("Direction", obj.properties[0].value);
  console.log("Position", obj.properties[1].value);
  const direction = obj.properties[0].value;
  const [x, y] = obj.properties[1].value.split("|");
  self.gridEngineClass.addNpc({
    id: obj.name,
    x: parseInt(x),
    y: parseInt(y),
    speed: 0,
    walkingAnimationMapping: obj.properties[2].value,
    collides: true,
  });
  self.gridEngineClass.setTurnTowards(obj.name, direction);
}
