export const getStopFrame = (frame) => {
  switch (frame) {
    case "down":
      return 1;
    case "left":
      return 13;
    case "right":
      return 25;
    case "up":
      return 37;
  }
};
