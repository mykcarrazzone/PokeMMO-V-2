export const servicesAddNpc = (object, self) => {
  /** Early return if object is not an array or if it's empty */
  if (!Array.isArray(object.objects) || object.objects.length === 0) {
    return;
  }

  const npc = object.objects;
  npc.map((prop) => {
    const name = prop.name;
    const direction = prop.properties[0].value;
    const [x, y] = prop.properties[1].value.split("|");
    self.gridEngineClass.addNpc({
      id: name,
      x: parseInt(x),
      y: parseInt(y),
      speed: 0,
      walkingAnimationMapping: prop.properties[2].value,
      collides: true,
    });
    self.gridEngineClass.setTurnTowards(prop.name, direction);
  });
};
