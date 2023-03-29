import { createContext, useEffect, useState } from "react";
import io from "socket.io-client";

export const SocketContext = createContext();

export default function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3000", {
      // IP PROD http://109.208.107.116:4129
      transports: ["websocket"], // permet de garder la session ouverte
      withCredentials: true, // permet de garder la session ouverte
    });

    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
