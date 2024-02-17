import React, {createContext, useContext, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {darkColors, lightColors} from '../styles/colors';
const ThemeContext = createContext({
  isDarkMode: false,
  colors: lightColors,
  setColorScheme: () => {},
});

export const ThemeProvider = ({children}) => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme == 'dark');

  useEffect(() => {
    setIsDarkMode(colorScheme == 'dark');
  }, [colorScheme]);

  const defaultTheme = {
    isDarkMode: isDarkMode,
    colors: isDarkMode ? darkColors : lightColors,
    setColorScheme: scheme => setIsDarkMode(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

export const useTheme = () => useContext(ThemeContext);
