import OnlinePlayer from "../../scenes/OnlinePlayer";

/**
 * This function handles the socket events related to player interaction on the map.
 * It creates, updates or removes the corresponding player objects on the scene based on the received data.
 * @param {Object} thisCopy - A copy of the current `this` object.
 * @param {Object} self - The `this` object.
 * @param {Object} onlinePlayers - An object that contains all the online player objects currently on the scene.
 */

export const handlerSocket = (thisCopy, self, onlinePlayers) => {
  thisCopy.socket.on("CURRENT_PLAYERS_ON_MAP", function (playerInfo) {
    const otherPlayersData = Object.values(playerInfo).filter(
      (player) =>
        player.sessionId !== self.socket.id && player.onMap === self.mapName
    );
    otherPlayersData.forEach(function (player) {
      onlinePlayers[player.sessionId] = new OnlinePlayer({
        scene: self,
        sessionId: player.sessionId,
        key: player.sessionId,
        map: player.onMap,
        x: player.position.x,
        y: player.position.y,
        nickName: player.nickName,
        role: player.role,
        ld: player.position.ld,
        texture: "onlinePlayer",
      });
    });
  });

  thisCopy.socket.on("PLAYER_UPDATED", function (playerInfo, currentPlayer) {
    const otherPlayersData = Object.values(playerInfo).filter(
      (player) =>
        player.sessionId !== self.socket.id && player.onMap === self.mapName
    );
    otherPlayersData.forEach(function (player) {
      if(onlinePlayers[player.sessionId] == self.socket.id) {
        onlinePlayers[self.socket.id].destroy();
        self.gridEngineClass.removeOnlinePlayer(self.socket.id);
        delete onlinePlayers[self.socket.id];
      } else {
        self.gridEngineClass.removeOnlinePlayer(player.sessionId);
        delete onlinePlayers[player.sessionId];
      }
   
      onlinePlayers[player.sessionId] = new OnlinePlayer({
        scene: self,
        sessionId: player.sessionId,
        key: player.sessionId,
        map: player.onMap,
        x: player.position.x,
        y: player.position.y,
        nickName: player.nickName,
        role: player.role,
        ld: player.position.ld,
        texture: "onlinePlayer",
      });
    });
  });

  thisCopy.socket.on("PLAYER_LEFT", function (sessionId) {
    console.log("PLAYER LEFT", sessionId);
    if (onlinePlayers[sessionId]) {
      self.gridEngineClass.removeOnlinePlayer(sessionId);
      onlinePlayers[sessionId].destroy();
      delete onlinePlayers[sessionId];
    }
  });

  thisCopy.socket.on("PLAYER_MOVED", function (data) {
    if (self.mapName == data.onMap) {
      const existingPlayer = onlinePlayers[data.sessionId];
      if (existingPlayer == undefined) {
        onlinePlayers[data.sessionId] = new OnlinePlayer({
          scene: self,
          sessionId: data.sessionId,
          key: data.sessionId,
          map: data.onMap,
          x: data.position.x,
          y: data.position.y,
          nickName: data.nickName,
          role: data.role,
          ld: data.position.ld,
          texture: "onlinePlayer",
        });
      } else {
        existingPlayer.isWalking(
          data.position.ld,
          data.position.x,
          data.position.y,
          data.position.speed,
          data.walkingAnimationMapping
        );
      }
    }
  });

  thisCopy.socket.on("PLAYER_CHANGED_MAP", function (data) {
    console.log("CHANGED MAP");
    if (onlinePlayers[data]) {
      if (onlinePlayers[data].sessionId != self.socket.id) {
        // If the player is not the current player
        self.gridEngineClass.removeOnlinePlayer(data);
        onlinePlayers[data].destroy();
        delete onlinePlayers[data];
      }
    }
  });
};
