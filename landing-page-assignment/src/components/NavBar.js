// src/components/NavBar.js
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={NavLink} to="/" color="inherit">Home</Button>
        <Button component={NavLink} to="/about" color="inherit">About</Button>
        <Button component={NavLink} to="/contact" color="inherit">Contact Us</Button>
        <Button onClick={toggleTheme} color="inherit">
          {theme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;



