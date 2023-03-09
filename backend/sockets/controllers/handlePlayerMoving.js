/**
 * @file - handlePlayerMoving.js
 * Gestion du mouvement du joueur
 * @param {*} playerInfo - Informations sur le joueur
 * @param {*} socket - Socket.io
 * @param {*} players - Liste des joueurs
 * @param {*} User - Modèle User
 *
 **/

let movementTimeout;
const saveTimeout = 3000;

export function handlePlayerMoving(data) {
  const { playerInfo, io, socket, players, User } = data;

  // Mise à jour de la position du joueur dans l'objet players
  players[socket.id]._id = playerInfo._id;
  players[socket.id].position.x = playerInfo.position.x;
  players[socket.id].position.y = playerInfo.position.y;
  players[socket.id].position.ld = playerInfo.position.ld;

  // Mise à jour de la position du joueur dans MongoDB après 3 secondes
  clearTimeout(movementTimeout);
  movementTimeout = setTimeout(function () {
    console.info(`{${socket.id}: Saving player position}`);

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
  }, saveTimeout);

  // Filtrer la liste des joueurs par carte
  const playersOnMap = Object.values(players).filter(
    (player) => player.onMap === players[socket.id].onMap
  );

  // Diffuser le mouvement du joueur à tous les joueurs sur la même carte
  playersOnMap.forEach(function (player) {
    if (player.sessionId != socket.id) {
      socket.broadcast
        .to(player.sessionId)
        .emit("PLAYER_MOVED", players[socket.id]);
    }
  });
}
