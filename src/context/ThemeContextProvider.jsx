import { useState } from "react";

import { ThemeContext } from "./ThemeContext";

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark")
  );

  function toggleTheme() {
    setTheme((prevTheme) => {
      const currentTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", currentTheme);
      return currentTheme;
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
