import React, { useEffect, useState } from "react";
import UserContextProvider from "./ContextApi/userContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Router from "./Routing/routers";
import ToggleButton from "./Components/ToogleButton";
import Card from "./Components/Card";
import { ThemeProvider } from "./ContextApi/Theme";

const App: React.FC = () => {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light");
  };

  const darkMode = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);


  return (
    <UserContextProvider>
      <Router />
      <Login />
      <Profile />
      <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
        <ToggleButton />
        <Card />
      </ThemeProvider>
      
    </UserContextProvider>
  );
};

export default App;
