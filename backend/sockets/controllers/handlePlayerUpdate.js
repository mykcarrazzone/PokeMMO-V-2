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
const saveTimeout = 2000;

export function handlePlayerUpdate(data) {
  console.log("handlePlayerUpdate");
  const { playerInfo, io, socket, players, User } = data;
  // Mise à jour de la position du joueur dans l'objet players
  players[socket.id].position.x = playerInfo.position.x;
  players[socket.id].position.y = playerInfo.position.y;
  players[socket.id].position.ld = playerInfo.position.ld;
  players[socket.id].position.speed = playerInfo.position.speed;
  console.log("Moving on map: ", playerInfo.onMap);
  players[socket.id].onMap = playerInfo.onMap;
  players[socket.id].walkingAnimationMapping =
    playerInfo.walkingAnimationMapping;
  clearTimeout(movementTimeout);
  movementTimeout = setTimeout(function () {
    console.info(`{${socket.id}: Saving real player position}`);
    User.findOne({ _id: playerInfo._id }, function (err, user) {
      if (err) {
        console.error(err);
        return;
      }

      user.onMap.position.x = playerInfo.position.x;
      user.onMap.position.y = playerInfo.position.y;
      user.onMap.position.ld = playerInfo.position.ld;
      user.onMap.map_id = playerInfo.onMap;
      user.onMap.position.speed = playerInfo.position.speed;
      user.character.walkingAnimationMapping =
        playerInfo.walkingAnimationMapping;
      console.log(user.onMap);

      user.save(function (err) {
        if (err) {
          console.error(err);
        }
      });
    });
  }, saveTimeout);
}
