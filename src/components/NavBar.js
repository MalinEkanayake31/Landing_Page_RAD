import React, { useContext, useState } from 'react';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = (
    <>
      <Button component={NavLink} to="/" color="inherit">Home</Button>
      <Button component={NavLink} to="/about" color="inherit">About</Button>
      <Button component={NavLink} to="/contact" color="inherit">Contact Us</Button>
      <IconButton color="inherit" onClick={toggleTheme}>
        {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </>
  );

  return (
    <AppBar position="static" style={{ backgroundColor: theme === 'light' ? '#1976d2' : '#333' }}>
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List>
                <ListItem button component={NavLink} to="/" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={NavLink} to="/about" onClick={toggleDrawer(false)}>
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem button component={NavLink} to="/contact" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Contact Us" />
                </ListItem>
                <ListItem button onClick={() => { toggleTheme(); toggleDrawer(false)(); }}>
                  <ListItemText primary={theme === 'light' ? 'Dark Theme' : 'Light Theme'} />
                </ListItem>
              </List>
            </Drawer>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Landing Page
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Landing Page
            </Typography>
            {navLinks}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

