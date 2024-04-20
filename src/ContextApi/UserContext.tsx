import { createContext } from "react";

type UserContextType = {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export default UserContext;
