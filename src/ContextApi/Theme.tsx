import { createContext } from "react";

export interface ThemeContextType {
  themeMode: string;
  lightMode: () => void;
  darkMode: () => void;
}
export const ThemeContext = createContext<ThemeContextType>({
  themeMode: "light",
  lightMode: () => {},
  darkMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// Can do this but made a seperate Hook folder and  created a  custom useTheme Hook with useContext to 
// const useTheme = (): ThemeContextType => {
//   return useContext(ThemeContext);
// };

// export default useTheme;
