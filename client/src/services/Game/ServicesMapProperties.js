import { MAP_PROPERTIES } from "@/constants/MapProperties/MapProperties";

export const servicesMapProperties = (objects, self) => {
  Object.keys(MAP_PROPERTIES).map((key) => {
    const property = objects.properties.find((prop) => prop.name === key);
    if (property) {
      MAP_PROPERTIES[key](property.value, self);
    }
  });
};
