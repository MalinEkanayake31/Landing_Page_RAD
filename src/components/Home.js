import React, { useState, useEffect } from 'react';
import { Typography, Container, Button } from '@mui/material';
import './Home.css';

const Home = () => {
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const [welcomeMessage, setWelcomeMessage] = useState(getTimeOfDay());
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    document.title = 'Home - Interactive Landing Page';
    console.log('Home component mounted');

    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <Typography variant="h2" className="animated" gutterBottom>{welcomeMessage}, Welcome to our website!</Typography>
      <Typography variant="h4" gutterBottom>Current Time: {time}</Typography>
      <Typography variant="body1">This is the home page.</Typography>
      
    </Container>
  );
};

export default Home;
