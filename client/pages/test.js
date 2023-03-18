import React, { useEffect, useState, useRef, useCallback } from "react";
import Chat from "../components/interface/chat";
import Interface from "../components/interface/layout";

export default function Game() {
  const gameRef = useRef();
  const [game, setGame] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    async function initPhaser() {
      if (game) {
        console.log("Return earlying Phaser");
        return;
      }

      const Phaser = await import("phaser");
      const { default: GridEngine } = await import("grid-engine");
      const { default: Scene1 } = await import("../src/test/Scene1");
      const { default: BootGame } = await import("../src/test/BootGame");
      //   const { default: Scene2 } = await import("../src/test/Scene2");

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
        scene: [BootGame],
        physics: {
          default: "arcade",
          arcade: {
            gravity: { y: 0 },
            fps: 900,
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
      phaserGame.scene.start("bootGame");
      //   window.addEventListener("resize", () => {
      //     phaserGame.scale.resize(window.innerWidth, window.innerHeight);
      //     setIsMobile(
      //       window.innerWidth < 768 ||
      //         (window.innerWidth < 900 && window.innerHeight < 500)
      //     );
      //   });

      //   if (
      //     window.innerWidth < 768 ||
      //     (window.innerWidth < 900 && window.innerHeight < 500)
      //   ) {
      //     setIsMobile(true);
      //   }
    }
    initPhaser();
  }, []);

  return <div ref={gameRef} className="bg-black"></div>;
}
