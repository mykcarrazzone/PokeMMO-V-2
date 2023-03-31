export const fpsDisplay = (self) => {
  setInterval(() => {
    self.socket.emit("sendFps", parseInt(self.game.loop.actualFps));
  }, 500);
};
