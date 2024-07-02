import { createContext } from "react";
import { theme } from "../styles/globalStyles";
import { Theme } from "types/theme";

const ThemeContext = createContext<Theme | null>(null);

export default function ThemeContextprovider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext };
