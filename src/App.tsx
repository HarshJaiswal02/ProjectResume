import React from "react";
import UserContextProvider from "./ContextApi/userContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Router from "./Routing/router";

const App: React.FC = () => {
  return (
    <UserContextProvider>
      <Router></Router>
      <div className="min-h-screen flex flex-col gap-3 bg-blue-200 p-10">
        <Login></Login>
        <Profile></Profile>
      </div>
    </UserContextProvider>
  );
};

export default App;
