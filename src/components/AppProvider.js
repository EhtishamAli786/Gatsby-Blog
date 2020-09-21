import React, { useState, createContext, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { lightModeTheme, darkModeTheme } from "../components";
const defaultContext = {
  darkMode: false,
  setDarkMode: () => {},
};
export const AppContext = createContext(defaultContext);
export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(
    () => ({
      type: darkMode ? "dark" : "light",
      ...(darkMode ? darkModeTheme : lightModeTheme),
    }),
    [darkMode]
  );
  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};
