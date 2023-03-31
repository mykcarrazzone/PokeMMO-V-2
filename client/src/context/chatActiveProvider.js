import React, { createContext, useState } from "react";

export const ChatActiveContext = createContext(false);

export const ChatActiveProvider = ({ children }) => {
  const [chatActive, setActive] = useState(false);

  function setChatActive(e) {
    // console.log(e);
    setActive(e);
  }

  return (
    <ChatActiveContext.Provider value={{ chatActive, setChatActive }}>
      {children}
    </ChatActiveContext.Provider>
  );
};
