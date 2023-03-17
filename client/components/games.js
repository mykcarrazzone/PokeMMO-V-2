import React, { useEffect, useState, useRef, useCallback, useM } from "react";
import Chat from "../components/interface/chat";
import Interface from "../components/interface/layout";

export default function Game({ userData }) {
  const [isMobile, setIsMobile] = useState(false);
  const [gameReady, setGameReady] = useState(false);
  const gameRef = useRef();
  const [game, setGame] = useState(null);
  const [gameData, setGameData] = useState({ socket: null, user: null });
  const [isPhaserInitialized, setIsPhaserInitialized] = useState(false);

  useEffect(() => {
    if (userData.socket && userData.user) {
      setGameData({ socket: userData.socket, user: userData.user });
    }
  }, [userData]);

  async function initPhaser() {
    const Phaser = await import("phaser");
    const { default: GridEngine } = await import("grid-engine");
    const { default: Scene1 } = await import("../src/scenes/Scene1");
    const { default: Scene2 } = await import("../src/scenes/Scene2");

    const phaserGame = new Phaser.Game({
      type: Phaser.AUTO,
      title: "Pokemon",
      parent: gameRef.current,
      width: window.innerWidth,
      height: window.innerHeight,
      pixelArt: true,

      render: {
        antialias: false,
      },

      scale: {
        zoom: 2,
      },

      scene: [Scene1, Scene2],
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
          fps: 300,
          debug: false,
        },
      },

      plugins: {
        scene: [
          {
            key: "gridEngine",
            plugin: GridEngine,
            mapping: "gridEngine",
          },
        ],
      },

      backgroundColor: "#000000",
    });

    setGame(phaserGame);
    setIsPhaserInitialized(true);

    phaserGame.scene.start("bootGame", {
      socket: gameData.socket,
      user: gameData.user,
    });

    window.addEventListener("resize", () => {
      phaserGame.scale.resize(window.innerWidth, window.innerHeight);
      setIsMobile(
        window.innerWidth < 768 ||
          (window.innerWidth < 900 && window.innerHeight < 500)
      );
    });

    if (
      window.innerWidth < 768 ||
      (window.innerWidth < 900 && window.innerHeight < 500)
    ) {
      setIsMobile(true);
    }
  }

  useEffect(() => {
    if (isPhaserInitialized) {
      console.log("Returning early");
    } else if (!isPhaserInitialized && gameData.socket && gameData.user) {
      console.log("Game is :", game);
      console.log("Socket is :", gameData.socket);
      console.log("User is :", gameData.user);
      initPhaser();

      // gameData.socket.on("gameReadyToClient", () => {
      //   setGameReady(true);
      // });
    }

    return () => {
      if (game) {
        game.destroy(true);
      }
    };
  }, [isPhaserInitialized, gameData]);

  // useEffect(() => {
  //   return () => {
  //     if (game) {
  //       game.destroy(true);
  //     }
  //   }
  // }, [game])

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <div className="absolute top-0 left-0">
        <div ref={gameRef} className="bg-black"></div>
      </div>

      {isMobile ? (
        <div
          className={`absolute bottom-0 left-0 w-1/2 sm:w-auto ${
            gameReady ? "" : "hidden"
          }`}
          style={{
            zIndex: 9999,
          }}
        >
          <Chat isClose={isMobile} />
        </div>
      ) : (
        <div
          className={`absolute bottom-0 left-0 w-1/2 sm:w-auto ${
            gameReady ? "" : "hidden"
          }`}
          style={{
            zIndex: 9999,
          }}
        >
          <Chat isClose={isMobile} />
        </div>
      )}

      <div className={`${gameReady ? "" : "hidden"}`}>
        <Interface isMobile={isMobile} />
      </div>
    </div>
  );
}
