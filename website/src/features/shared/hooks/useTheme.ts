import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const applyTheme = useCallback(
    (theme: Theme) => {
      document.documentElement.setAttribute("theme", theme);
      setTheme(theme);
    },
    [setTheme],
  );

  useEffect(
    function readThemeOnMount() {
      const theme = document.documentElement.getAttribute("theme");
      if (theme && isTheme(theme)) {
        setTheme(theme);
      }
    },
    [applyTheme],
  );

  return { theme, applyTheme };
};

/**
 * Type guard to safely cast theme CSS attribute to strong type
 */
function isTheme(value: string): value is Theme {
  return value === "light" || value === "dark";
}
