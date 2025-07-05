import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme | undefined;
  applyTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children, initialTheme }: { children: ReactNode; initialTheme?: Theme }) => {
  const [theme, setTheme] = useState<Theme | undefined>(initialTheme);

  const applyTheme = useCallback((theme: Theme) => {
    document.documentElement.setAttribute("theme", theme);
    setTheme(theme);
  }, []);

  useEffect(function syncInitialTheme() {
    if (initialTheme) {
      applyTheme(initialTheme);
      return;
    }

    const theme = document.documentElement.getAttribute("theme");
    if (theme && isTheme(theme)) {
      setTheme(theme);
      console.log("theme", theme);
    }
  }, []);

  return <ThemeContext.Provider value={{ theme, applyTheme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

/**
 * Type guard to safely cast theme CSS attribute to strong type
 */
function isTheme(value: string): value is Theme {
  return value === "light" || value === "dark";
}
