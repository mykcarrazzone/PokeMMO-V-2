import { GAMES_INFOS } from "@/constants/GameInfos/GameInfos";
import { MAP_PROPERTIES } from "@/constants/MapProperties/MapProperties";
export const funcLightPointsEffects = (effect, self) => {
  self.lights = [];
  effect.forEach((light) => {
    const pointLight = new Phaser.GameObjects.PointLight(
      self,
      light.x,
      light.y,
      0xffffee,
      128,
      0.13
    );
    pointLight.setDepth(10001);
    self.add.existing(pointLight);
    pointLight.visible = false;
    self.lights.push(pointLight);
  });
  if (MAP_PROPERTIES.isNight) {
    // let playerDepth = 1; // PERMET DE METTRE LE JOUEUR EN DESSOUS DES LUMIERES
    // console.log("Lights", this.lights);
    // console.log("Player", this.player);
    self.lights.forEach((pointLight) => {
      var distance = Phaser.Math.Distance.Between(
        self.player.x,
        self.player.y,
        pointLight.x,
        pointLight.y
      );
      pointLight.visible = true;
      //FEATURE DISTANCE TO PLAYER
      // if (distance < 200) {
      //   console.log("Proche de la lumière");
      //   pointLight.visible = true;
      //   playerDepth = 10;
      // } else {
      //   console.log("Loin de la lumière");
      //   pointLight.visible = true;
      // }
    });
    // self.player.setDepth(playerDepth);
  }
};

export const utilsUpdateVisualEffects = (object, self) => {
  /** Early return if object is not an array or if it's empty */
  if (!Array.isArray(object.objects) || object.objects.length === 0) {
    return;
  }
  const effect = object.objects;
  Object.values(effect).forEach((value) => {
    const xPos = value.x * GAMES_INFOS.gameScale + 30;
    const yPos = value.y * GAMES_INFOS.gameScale + 33;
    self.myLights.push({ x: xPos, y: yPos });
  });
  funcLightPointsEffects(self.myLights, self);
};
