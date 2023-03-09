// DEFINE PLAYERS OBJECT
// DEFINE ONLINE PLAYERS ARRAY
import User from "./../models/user.js";
import { SpawnPoints } from "../data/map.js";
import friendsAndMessagesSocket from "../sockets/friendsAndMessagesSocket.js"; // import du fichier pour la gestion des messages
let onlinePlayers = [];
var chatFocus = false;
var pingSentTime;
const players = {};

export default function playersSocket(io, socket) {
  let movementTimeout;

  // Vérifier si le joueur existe déjà dans l'objet players
  if (players.hasOwnProperty(socket.id)) {
    console.log(`player [${socket.id}] already exists`);
    return;
  }
  // // ADD NEW PLAYER TO ONLINE PLAYERS ARRAY
  // onlinePlayers.push(socket.id);

  socket.on("PLAYER_JOIN", function (playerInfo) {
    // CHECK PLAYER ALREADY EXISTS IN PLAYERS OBJECT
    if (players.hasOwnProperty(socket.id)) {
      console.log(`player [${socket.id}] already exists`);
      return;
    }
    // console.log(playerInfo);
    //AJOUTER LE PLAYER AUX PLAYERS DEJA ENREGISTRES ET ENVOYER A TOUS LES JOUEURS
    players[socket.id] = {
      sessionId: socket.id,
      nickName: playerInfo.nickName,
      pokedollar: playerInfo.pokedollar,
      baseTexture: playerInfo.baseTexture,
      chatColor: playerInfo.chatColor,
      currentTexture: playerInfo.currentTexture,
      role: playerInfo.role,
      position: playerInfo.position,
      isMoving: playerInfo.isMoving,
      onMap: playerInfo.onMap,
    };

    // User.findOne({ _id: playerInfo._id }, function (err, user) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     user.character.isOnline = true;
    //     user.save();
    //   }
    // });

    // ENVOYER TOUTE LA LISTE DES PLAYERS A TOUS LES JOUEURS
    const playersOnMap = Object.values(players).filter(
      (player) => player.onMap === playerInfo.onMap
    );
    console.log(playersOnMap);
    io.emit("CURRENT_PLAYERS_ON_MAP", playersOnMap);
    // LE PLAYER QUI SE CONNECTE N'EST PAS ENVOYE A LUI MEME
  });

  socket.on("localPlayer", function (playerInfo) {
    socket.emit("localPlayerInterface", playerInfo);
  });

  socket.on("PLAYER_MOVING", function (playerInfo) {
    // Update player position in players object
    players[socket.id]._id = playerInfo._id;
    players[socket.id].position.x = playerInfo.position.x;
    players[socket.id].position.y = playerInfo.position.y;
    players[socket.id].position.ld = playerInfo.position.ld;

    // Update user position in MongoDB after 10 seconds
    clearTimeout(movementTimeout);
    movementTimeout = setTimeout(function () {
      console.log("on sauvegarde la position du joueur");
      User.findOne({ _id: players[socket.id]._id }, function (err, user) {
        if (err) {
          console.error(err);
          return;
        }
        user.onMap.position.x = playerInfo.position.x;
        user.onMap.position.y = playerInfo.position.y;
        user.onMap.position.ld = playerInfo.position.ld;
        user.onMap.map_id = players[socket.id].onMap;

        user.save(function (err) {
          if (err) {
            console.error(err);
          }
        });
      });
    }, 5000);

    // Filter players list by map
    const playersOnMap = Object.values(players).filter(
      (player) => player.onMap === players[socket.id].onMap
    );

    // Broadcast player movement to all players on same map
    playersOnMap.forEach(function (player) {
      if (player.sessionId != socket.id) {
        socket.broadcast
          .to(player.sessionId)
          .emit("PLAYER_MOVED", players[socket.id]);
      }
    });
  });

  socket.on("PLAYER_PASS_IN_NEW_MAP", function (playerInfo) {
    // Update player position and map in players object
    players[socket.id].onMap = playerInfo.onMap;
    players[socket.id].position.x = playerInfo.position.x;
    players[socket.id].position.y = playerInfo.position.y;
    players[socket.id].position.ld = playerInfo.position.ld;
    console.log("On save le changement de map");
    User.findOne({ _id: players[socket.id]._id }, function (err, user) {
      if (err) {
        console.error(err);
        return;
      }

      Object.keys(SpawnPoints).forEach((mapName) => {
        if (mapName === playerInfo.onMap) {
          user.onMap.position.x = SpawnPoints[mapName].x;
          user.onMap.position.y = SpawnPoints[mapName].y;
          console.log("position x : " + SpawnPoints[mapName].x);
          console.log("position y : " + SpawnPoints[mapName].y);
          user.onMap.position.ld = playerInfo.position.ld;
          user.onMap.map_id = playerInfo.onMap;
          user.save(function (err) {
            if (err) {
              console.error(err);
            }
          });
        }
      });
        socket.broadcast.emit("PLAYER_CHANGED_MAP", socket.id);
    });
  });

  socket.on("disconnect", function () {
    console.log("player [" + socket.id + "] disconnected");

    // User.findOne({ _id: players[socket.id]._id }, function (err, user) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     if (user && user.character && user.character.isOnline) {
    //       user.character.isOnline = false;
    //       user.save();
    //     }
    //   }
    // });

    delete players[socket.id];
    onlinePlayers.splice(onlinePlayers.indexOf(socket.id), 1); // retirer le joueur de la liste des joueurs en ligne
    io.emit("numberOfOnlinePlayers", onlinePlayers.length);
    io.emit("PLAYER_LEFT", socket.id);
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

  // EMIT NUMBER OF ONLINE PLAYERS TO ALL CONNECTED SOCKETS
  io.emit("numberOfOnlinePlayers", onlinePlayers.length);
  // GAMEPAD TOUCH

  friendsAndMessagesSocket(io, socket);
}
