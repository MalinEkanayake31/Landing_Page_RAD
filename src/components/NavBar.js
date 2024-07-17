// src/components/NavBar.js
import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import logo from '../assets/friends-1-logo.png';

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = (
    <>
      <Button component={NavLink} to="/" color="inherit" sx={{ fontWeight: 'bold', fontFamily: 'Arial' }}>Home</Button>
      <Button component={NavLink} to="/about" color="inherit" sx={{ fontWeight: 'bold', fontFamily: 'Arial' }}>About</Button>
      <Button component={NavLink} to="/contact" color="inherit" sx={{ fontWeight: 'bold', fontFamily: 'Arial' }}>Contact Us</Button>
      <IconButton color="inherit" onClick={toggleTheme}>
        {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: theme === 'light' ? '#efdbc5' : '#333' }}>
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List>
                <ListItem button component={NavLink} to="/" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Home" sx={{ fontWeight: 'bold', fontFamily: 'Arial' }} />
                </ListItem>
                <ListItem button component={NavLink} to="/about" onClick={toggleDrawer(false)}>
                  <ListItemText primary="About" sx={{ fontWeight: 'bold', fontFamily: 'Arial' }} />
                </ListItem>
                <ListItem button component={NavLink} to="/contact" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Contact Us" sx={{ fontWeight: 'bold', fontFamily: 'Arial' }} />
                </ListItem>
                <ListItem button onClick={() => { toggleTheme(); toggleDrawer(false)(); }}>
                  <ListItemText primary={theme === 'light' ? 'Dark Theme' : 'Light Theme'} sx={{ fontWeight: 'bold', fontFamily: 'Arial' }} />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
            <Box>
              <img src={logo} alt="Logo" style={{ height: '100px' }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Arial' }}>
              {currentTime}
            </Typography>
            <Box display="flex" alignItems="center">
              {navLinks}
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
