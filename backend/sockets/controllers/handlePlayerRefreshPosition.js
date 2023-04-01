/**
 *
 * Gestion du changement de map
 * @param {*} playerInfo - Informations sur le joueur
 * @param {*} socket - Socket.io
 * @param {*} players - Liste des joueurs
 * @param {*} User - Modèle User
 *
 **/

export const handlePlayerRefreshPosition = (data) => {
  const { playerInfo, socket, players, User } = data;
  // Update player position and map in players object
  console.log("Refresh Position Map", playerInfo.onMap);
  console.log("Position X", playerInfo.position.x);
  console.log("Position Y", playerInfo.position.y);
  players[socket.id]._id = playerInfo._id;
  players[socket.id].onMap = playerInfo.onMap;
  players[socket.id].position.ld = playerInfo.position.ld;
  players[socket.id].position.x = playerInfo.position.x;
  players[socket.id].position.y = playerInfo.position.y;
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
  socket.broadcast.emit("PLAYER_REFRESH_POSITIONING", players[socket.id]);
};
