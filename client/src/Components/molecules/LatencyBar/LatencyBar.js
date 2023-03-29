import React, { useState, useEffect, useContext } from "react";
import { SocketContext } from "../../../context/socketProvider";

const LatencyPlayer = () => {
  const [latencePlayer, setLatencePlayer] = useState("");
  const [currentFps, setCurrentFps] = useState(0);
  const socket = useContext(SocketContext);
  let pingStart;

  useEffect(() => {
    if (socket != null) {
      setInterval(() => {
        pingStart = Date.now();
        socket.emit("ping");
      }, 1000);

      socket.on("pong", () => {
        const pingEnd = Date.now();
        const pingTime = pingEnd - pingStart;
        setLatencePlayer(pingTime.toString());
      });

      socket.on("currentFps", (fps) => {
        setCurrentFps(fps);
      });
    }
  }, [socket]);

  const getLatencyColor = () => {
    if (latencePlayer > 100) {
      return "text-red-300";
    } else if (latencePlayer > 50) {
      return "text-orange-300";
    } else {
      return "text-green-300";
    }
  };

  const getFpsColor = () => {
    if (currentFps < 30) {
      return "text-red-300";
    } else if (currentFps < 60) {
      return "text-orange-300";
    } else {
      return "text-green-300";
    }
  };

  return (
    <>
      <div className="flex flex-row absolute top-16 left-0 items-center h-12 bg-gray-800 px-4 rounded-tr-[8px] rounded-br-[8px] z-50">
        <div
          className="flex flex-row w-32 "
          style={{
            zIndex: 90,
          }}
        >
          <p
            className="text-white text-md mr-2"
            style={{
              zIndex: 90,
            }}
          >
            Fps:
          </p>
          <p className={getFpsColor()}>{currentFps} </p>
        </div>
      </div>

      <div
        className="flex flex-row absolute top-32 left-0 items-center h-12 bg-gray-800 px-4 rounded-tr-[8px] rounded-br-[8px]"
        style={{
          zIndex: 90,
        }}
      >
        <div className="flex flex-row w-32 ">
          <p className="text-white text-md mr-2">Latence:</p>
          <p className={getLatencyColor()}>{latencePlayer} ms</p>
        </div>
      </div>
    </>
  );
};

export default LatencyPlayer;
