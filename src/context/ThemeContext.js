import React, { createContext, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline, createTheme, responsiveFontSizes } from '@mui/material';
import { lightTheme, darkTheme } from '../theme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = responsiveFontSizes(createTheme(theme === 'light' ? lightTheme : darkTheme));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
