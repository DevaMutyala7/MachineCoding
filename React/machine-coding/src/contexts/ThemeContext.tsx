import { createContext } from "react";
import { theme } from "../styles/globalStyles";

const ThemeContext = createContext(null);

export default function ThemeContextprovider({ children }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext };
