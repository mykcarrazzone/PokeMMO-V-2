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
  console.log("PASSED MAP", data);
  // Update player position and map in players object
  players[socket.id]._id = playerInfo._id;
  players[socket.id].onMap = playerInfo.onMap;
  players[socket.id].position.ld = playerInfo.position.ld;
  console.log("PASSED MAP", playerInfo);
  console.log(players)
  // User.findOne({ _id: playerInfo._id }, function (err, user) {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }

  //   user.onMap.position.x = playerInfo.position.x;
  //   user.onMap.position.y = playerInfo.position.y;
  //   user.onMap.position.ld = playerInfo.position.ld;
  //   user.onMap.map_id = playerInfo.onMap;

  //   user.save(function (err) {
  //     if (err) {
  //       console.error(err);
  //     }
  //     console.log(`{${socket.id}: Saving player changed map}`);

  //   });
  // });
  socket.broadcast.emit("PLAYER_CHANGED_MAP", socket.id);
}
