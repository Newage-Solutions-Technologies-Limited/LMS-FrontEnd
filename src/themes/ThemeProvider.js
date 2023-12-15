// ThemeProvider.js
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

ThemeProvider.propTypes = {
  children: PropTypes.array,
};

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = {
    mode: isDarkMode ? "dark" : "light",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
