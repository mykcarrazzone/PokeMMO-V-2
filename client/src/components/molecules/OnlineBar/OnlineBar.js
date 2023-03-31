import React from "react";
import { useState, useEffect, useContext } from "react";
import { SocketContext } from "../../../context/socketProvider";

const OnlineBar = () => {
  const [onlinePlayers, setOnlinePlayers] = useState([]);
  const socket = useContext(SocketContext);

  useEffect(() => {
    if (socket != null) {
      socket.on("numberOfOnlinePlayers", (players) => {
        setOnlinePlayers(players);
      });
    }
  }, [socket]);

  return (
    <>
      <div className="flex flex-row absolute top-0 left-0 items-center h-12 bg-gray-800 px-4 rounded-tr-[8px] rounded-br-[8px]">
        <div className="flex flex-row w-44">
          <p className="text-white text-md mr-2">Joueur(s) en ligne :</p>
          <p className="text-green-300 w-auto">
            {onlinePlayers == 0 ? "0" : onlinePlayers}
          </p>
        </div>
      </div>
    </>
  );
};

export default OnlineBar;
