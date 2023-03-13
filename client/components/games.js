import React, { useEffect, useContext, useState, useRef } from "react";
import Chat from "../components/interface/chat";
import Interface from "../components/interface/layout";

export default function Game({ userData }) {
  const [isMobile, setIsMobile] = useState(false);
  const [gameReady, setGameReady] = useState(false);
  const gameRef = useRef();

  useEffect(() => {
    if (!userData) return;
    console.log(userData);
    const socket = userData.socket;
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
        enableTileExtrude: true, // Permet de faire des bordures de tiles
        enableTileExtrusion: true, // Permet de faire des bordures de tiles (2)
        // ADD EXTRUSION AND EXTRUDE TO TILED MAPS

        pixelArt: true,
        render: {
          antialias: false, // 
        },
        scene: [Scene1, Scene2],
        plugins: {
          scene: [
            {
              key: "gridEngine",
              plugin: GridEngine,
              mapping: "gridEngine",
            },
          ],
        },
        physics: {
          default: "arcade",
          arcade: {
            gravity: { y: 0 },
            fps: 300,
            debug: true,
          },
        },

        backgroundColor: "#000000",
      });

      phaserGame.scene.start("bootGame", {
        socket: socket,
        user: userData.user,
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
    socket.on("gameReadyToClient", () => {
      setGameReady(true);
      // START FIRST SCENE
    });

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
