export const servicesAddNpc = (object, self) => {
  /** Early return if object is not an array or if it's empty */
  if (!Array.isArray(object.objects) || object.objects.length === 0) {
    return;
  }

  if (self.gridEngineClass) {
    const npc = object.objects;
    npc.map((prop) => {
      const name = prop.name;
      const direction = prop.properties[0].value;
      self.gridEngineClass.addNpc(
        {
          id: name,
          x: parseInt(prop.x / 16),
          y: parseInt(prop.y / 15.9),
          speed: 0,
          walkingAnimationMapping: prop.properties[3].value,
          collides: true,
        },
        name.includes("Vendeur") || name.includes("Vendeuse") ? true : false
      );
      self.gridEngineClass.setTurnTowards(prop.name, direction);
    });
  }
};
