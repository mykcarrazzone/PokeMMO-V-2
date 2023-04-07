/**
 * @file handlePlayerJoin.js
 * Gérer l'arrivée d'un nouveau joueur
 * @param {*} io - Socket.io
 * @param {*} socket - Socket.io
 * @param {*} playerInfo - Informations sur le joueur
 * @param {*} players - Liste des joueurs
 * @param {*} onlinePlayers - Liste de tout les joueurs en ligne
 *
 **/
export function handlePlayerJoin(data) {
  const { playerInfo, io, socket, players, onlinePlayers } = data;
  if (players.hasOwnProperty(socket.id)) {
    console.info(`Player [${socket.id}] already exists, updating info`);
    // Mettre à jour les informations du joueur existant
    console.log("PLAYER JOIN IN UPDATE", playerInfo)
    players[socket.id] = {
      ...players[socket.id],
      nickName: playerInfo.nickName,
      pokedollar: playerInfo.pokedollar,
      baseTexture: playerInfo.baseTexture,
      chatColor: playerInfo.chatColor,
      currentTexture: playerInfo.currentTexture,
      role: playerInfo.role,
      position: playerInfo.position,
      walkingAnimationMapping: playerInfo.walkingAnimationMapping,
      isMoving: playerInfo.isMoving,
      onMap: playerInfo.onMap,
    };
    console.log("JOIN LIST", players)
    io.emit("PLAYER_UPDATED", players, players[socket.id]);
  } else {
    players[socket.id] = {
      sessionId: socket.id,
      nickName: playerInfo.nickName,
      pokedollar: playerInfo.pokedollar,
      baseTexture: playerInfo.baseTexture,
      chatColor: playerInfo.chatColor,
      currentTexture: playerInfo.currentTexture,
      role: playerInfo.role,
      position: playerInfo.position,
      walkingAnimationMapping: playerInfo.walkingAnimationMapping,
      isMoving: playerInfo.isMoving,
      onMap: playerInfo.onMap,
    };

    ////////UPDATE USER isOnline IN MONGODB ////////////
    // Utilisation : (Empêche au joueur de se connecter plusieurs fois)
    // User.findOne({ _id: playerInfo._id }, function (err, user) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     user.character.isOnline = true;
    //     user.save();
    //   }
    // });

    // Envoyer la liste des joueurs à tous les joueurs connectés
    const playersOnMap = Object.values(players).filter(
      (player) => player.onMap === playerInfo.onMap
    );
    console.info("New player joined the pokeMMO", players);
    io.emit("CURRENT_PLAYERS_ON_MAP", playersOnMap);

    // Envoyer le nombre de joueurs en ligne
    io.emit("numberOfOnlinePlayers", onlinePlayers.length);
  }
}
