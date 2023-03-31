import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserProvider ({ children })  {
  const [user, setUser] = useState({
    token: null,
    email: null,
    password: null,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
