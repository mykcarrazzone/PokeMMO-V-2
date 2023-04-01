import { MAP_PROPERTIES } from "@/constants/MapProperties/MapProperties";

var properties = {
  audio : null,
  bike : null,
  isNight : null,
  mapName : null,
  weather : null,
};

export const servicesMapProperties = (objects, self) => {
  Object.keys(MAP_PROPERTIES).map((key) => {
    const property = objects.properties.find((prop) => prop.name === key);
    if (property) {
      properties[key] = property.value;
      MAP_PROPERTIES[key](property.value, self);
    }
  });
};

export const getMapProperties = () => {
  return properties;
};
