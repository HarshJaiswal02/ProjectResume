import React, { useContext, useState } from "react";
import UserContext from "../ContextApi/UserContext";

const Login: React.FC = () => {
  const [name, setName] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setUser(name);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
};

export default Login;
