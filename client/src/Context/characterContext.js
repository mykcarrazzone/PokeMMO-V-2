import React, { createContext, useContext, useState } from "react";

export const CharacterContext = createContext(null);

export default function CharacterProvider({ children }) {
  const [character, setCharacter] = useState({
    _id: null,
    username: null,
  });

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
}

export const useCharacter = () => useContext(CharacterContext);
