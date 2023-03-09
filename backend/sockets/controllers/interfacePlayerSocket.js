/**
 * @file - interfacePlayerSocket.js
 * Gestion d'intéraction avec l'interface du joueur et d'affichage
 * @param {*} socket - Socket.io
 * @param {*} io - Socket.io
 * @param {*} onlinePlayers - Liste de tout les joueurs en ligne
 *
 **/

let chatFocus = false;
let pingSentTime;

export function interfacePlayerSocket(data) {
  const { socket, io, onlinePlayers } = data;

  socket.on("localPlayer", function (playerInfo) {
    socket.emit("localPlayerInterface", playerInfo);
  });

  // add fps socket io
  socket.on("sendFps", (fps) => {
    socket.emit("currentFps", fps);
  });

  socket.on("ping", () => {
    pingSentTime = Date.now();
    socket.emit("pong");
  });

  socket.on("pong", () => {
    const pingReceivedTime = Date.now();
    const pingTime = pingReceivedTime - pingSentTime;
  });

  socket.emit("sendActive", chatFocus);

  socket.on("sendActive", (boolean) => {
    chatFocus = boolean;
    socket.emit("listenActive", chatFocus);
  });

  ///////////// START OF GAMEPAD SOCKET IO /////////////////////
  socket.on("padDown", (pad) => {
    console.log("padDown");
    socket.emit("padDownClick", pad);
  });

  socket.on("padUp", (pad) => {
    console.log("padUp");
    socket.emit("padUpClick", pad);
  });

  socket.on("padLeft", (pad) => {
    console.log("padLeft");
    socket.emit("padLeftClick", pad);
  });

  socket.on("padRight", (pad) => {
    console.log("padRight");
    socket.emit("padRightClick", pad);
  });

  socket.on("padStop", (pad) => {
    console.log("padStop");
    socket.emit("padStopClick", pad);
  });

  socket.on("padBycleOn", (pad) => {
    socket.emit("padBycleActive", pad);
  });

  socket.on("padBycleOff", (pad) => {
    socket.emit("padBycleInactive", pad);
  });

  socket.on("padRunOn", (pad) => {
    socket.emit("padRunActive", pad);
  });

  socket.on("padRunOff", (pad) => {
    socket.emit("padRunInactive", pad);
  });
  ///////////// END OF GAMEPAD SOCKET IO /////////////////////

  // EMIT NUMBER OF ONLINE PLAYERS TO ALL CONNECTED SOCKETS
  io.emit("numberOfOnlinePlayers", onlinePlayers.length);
}
