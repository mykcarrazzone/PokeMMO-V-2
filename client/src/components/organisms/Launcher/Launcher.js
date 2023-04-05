import React, { useEffect, useState, useRef } from "react";
import Tchat from "../../molecules/Tchat/Tchat";
import Interface from "../Layout/Layout";

export default function Launcher({ userData }) {
  const [gameReady, setGameReady] = useState(false);
  const gameRef = useRef();
  const [game, setGame] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    async function initPhaser() {
      if (!userData) {
        console.log("Return earlying userData");
        return;
      }

      if (game) {
        console.log("Return earlying Phaser");
        return;
      }

      const Phaser = await import("phaser");
      const { default: GridEngine } = await import("grid-engine");
      const { default: Scene1 } = await import("@/scenes/Scene1");
      const { default: BootGame } = await import("@/scenes/BootGame");

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
        scene: [BootGame, Scene1],
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
      userData.socket.on("gameReadyToClient", () => {
        setGameReady(true);
      });

      phaserGame.scene.start("bootGame", {
        socket: userData.socket,
        user: userData.user,
      });

      // window.addEventListener("resize", () => {
      //   phaserGame.scale.resize(window.innerWidth, window.innerHeight);
      //   setIsMobile(
      //     window.innerWidth < 768 ||
      //       (window.innerWidth < 900 && window.innerHeight < 500)
      //   );
      // });

      // if (
      //   window.innerWidth < 768 ||
      //   (window.innerWidth < 900 && window.innerHeight < 500)
      // ) {
      //   setIsMobile(true);
      // }
    }
    initPhaser();
  }, [userData]);

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
          <Tchat isClose={isMobile} />
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
          <Tchat isClose={isMobile} />
        </div>
      )}

      <div className={`${gameReady ? "" : "hidden"}`}>
        <Interface isMobile={isMobile} />
      </div>
    </div>
  );
}
