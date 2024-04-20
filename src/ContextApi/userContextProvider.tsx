import React, { useState } from "react";
import UserContext from "./UserContext";

interface UserContextProviderProp {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<UserContextProviderProp> = ({
  children,
}) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
