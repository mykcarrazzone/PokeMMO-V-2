import { SpawnPoints } from "../../data/mapSpawnPoints.js";

/**
 *
 * Gestion du changement de map
 * @param {*} playerInfo - Informations sur le joueur
 * @param {*} socket - Socket.io
 * @param {*} players - Liste des joueurs
 * @param {*} User - Modèle User
 *
 **/

export function handlePlayerPassInNewMap(data) {
  const { playerInfo, socket, players, User } = data;

  // Update player position and map in players object
  players[socket.id].onMap = playerInfo.onMap;
  players[socket.id].position.x = playerInfo.position.x;
  players[socket.id].position.y = playerInfo.position.y;
  players[socket.id].position.ld = playerInfo.position.ld;

  console.log(`{${socket.id}: Saving player changed map}`);

  User.findOne({ _id: players[socket.id]._id }, function (err, user) {
    if (err) {
      console.error(err);
      return;
    }

    Object.keys(SpawnPoints).forEach((mapName) => {
      if (mapName === playerInfo.onMap) {
        console.log("mapName: ", playerInfo.onMap);
        user.onMap.position.x = SpawnPoints[mapName].x;
        user.onMap.position.y = SpawnPoints[mapName].y;
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
}
