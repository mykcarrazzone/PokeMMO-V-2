/**
 * @file handlePlayerLeft.js
 * Gérer l'arrivée d'un nouveau joueur
 * @param {*} socket - Socket.io
 * @param {*} io - Socket.io
 * @param {*} players - Liste des joueurs
 * @param {*} onlinePlayers - Liste de tout les joueurs en ligne
 * @param {*} User - Modèle de données User
 *
 **/

export function handlePlayerLeft(data) {
  const { socket, io, players, onlinePlayers, User } = data;

  console.info(`{${socket.id}: Player left}`);

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
}
