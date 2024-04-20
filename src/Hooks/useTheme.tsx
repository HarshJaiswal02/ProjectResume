import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../ContextApi/Theme";

const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};

export default useTheme;
