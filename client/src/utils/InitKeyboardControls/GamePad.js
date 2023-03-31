export const gamePadMovement = (self) => {
  self.socket.on("padDownClick", (data) => {
    if (data) {
      self.keys.down.isDown = true;
      self.keys.up.isDown = false;
      self.keys.left.isDown = false;
      self.keys.right.isDown = false;
    } else {
      self.keys.left.isDown = false;
    }
  });

  self.socket.on("padUpClick", (data) => {
    if (data) {
      self.keys.up.isDown = true;
      self.keys.down.isDown = false;
      self.keys.left.isDown = false;
      self.keys.right.isDown = false;
    } else {
      self.keys.up.isDown = false;
      self.keys.down.isDown = false;
      self.keys.left.isDown = false;
      self.keys.right.isDown = false;
    }
  });

  self.socket.on("padLeftClick", (data) => {
    if (data) {
      self.keys.left.isDown = true;
      self.keys.down.isDown = false;
      self.keys.up.isDown = false;
      self.keys.right.isDown = false;
    } else {
      self.keys.up.isDown = false;
      self.keys.down.isDown = false;
      self.keys.left.isDown = false;
      self.keys.right.isDown = false;
    }
  });

  self.socket.on("padStopClick", (data) => {
    if (data) {
      self.keys.up.isDown = false;
      self.keys.down.isDown = false;
      self.keys.left.isDown = false;
      self.keys.right.isDown = false;
    }
  });

  self.socket.on("padRightClick", (data) => {
    if (data) {
      self.keys.right.isDown = true;
      self.keys.down.isDown = false;
      self.keys.up.isDown = false;
      self.keys.left.isDown = false;
    } else {
      self.keys.up.isDown = false;
      self.keys.down.isDown = false;
      self.keys.left.isDown = false;
      self.keys.right.isDown = false;
    }
  });

  self.socket.on("padBycleActive", (data) => {
    if (data) {
      self.isCrossActive = true;
    } else {
      self.isCrossActive = false;
    }
  });

  self.socket.on("padBycleInactive", (data) => {
    if (data) {
      self.isCrossActive = false;
    }
  });

  self.socket.on("padRunActive", (data) => {
    if (data) {
      self.keys.shift.isDown = true;
    } else {
      self.keys.shift.isDown = false;
    }
  });

  self.socket.on("padRunInactive", (data) => {
    if (data) {
      self.keys.shift.isDown = false;
    }
  });
};
