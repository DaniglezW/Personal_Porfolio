import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("selectedTheme");
  const defaultTheme = storedTheme ? storedTheme === "dark" : true;

  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme ? "dark" : "light");
    localStorage.setItem("selectedTheme", theme ? "dark" : "light");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);