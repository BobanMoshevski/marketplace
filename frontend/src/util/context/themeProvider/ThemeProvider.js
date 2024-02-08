import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    isDark: true,
    modeDark: {
      dark: "#212121",
      light: "#616161",
    },
    modeLight: {
      dark: "#9e9e9e",
      light: "#757575",
    },
  });

  const toggleTheme = () => {
    setTheme({ ...theme, isDark: !theme.isDark });
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
