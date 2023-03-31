import User from "../models/user.js";
import friendsAndMessagesSocket from "./friendsAndMessagesSocket.js"; // import du fichier pour la gestion des messages
import socketRouter from "./routes/routes.js"; // import du fichier pour la gestion des routes

let onlinePlayers = [];

const players = {};

export default function pokeMMO(io, socket) {
  // Vérifier si le joueur existe déjà dans l'objet players (Permet aux interfaces de ne pas se connecter plusieurs fois)
  if (players.hasOwnProperty(socket.id)) {
    console.log(`player [${socket.id}] already exists`);
    return;
  }

  // Comptage de joueurs connectés du serveur
  onlinePlayers.push(socket.id);

  socket.on("PLAYER_JOIN", (playerInfo) => {
    socketRouter.handlePlayerJoin({
      playerInfo,
      io,
      socket,
      players,
      onlinePlayers,
    });
  });

  socket.on("PLAYER_MOVING", function (playerInfo) {
    socketRouter.handlePlayerMoving({
      playerInfo,
      io,
      socket,
      players,
      User,
    });
  });

  socket.on("PLAYER_PASS_IN_NEW_MAP", function (playerInfo) {
    socketRouter.handlePlayerPassInNewMap({
      playerInfo,
      socket,
      players,
      User,
    });
  });

  socket.on("disconnect", function () {
    socketRouter.handlePlayerLeft({
      socket,
      io,
      players,
      onlinePlayers,
      User,
    });
  });

  socketRouter.interfacePlayerSocket({ socket, io, onlinePlayers });
  
  friendsAndMessagesSocket({ io, socket });
}
