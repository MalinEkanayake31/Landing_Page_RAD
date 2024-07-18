import React, { useState, useEffect } from 'react';
import { Typography, Container, Button, Box, TextField } from '@mui/material';
import './Home.css';

const Home = () => {
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const [welcomeMessage, setWelcomeMessage] = useState(getTimeOfDay());
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = 'Friends - Fan Page';
    console.log('Home component mounted');
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="home-page">
      <Box className="background-container" />
      <Container className="content-container">
        <div className='welcome-cont'>
          <TextField 
            type='text' 
            value={name} 
            onChange={handleNameChange}
            placeholder='Enter your name'
            variant='outlined'
            fullWidth
            margin='normal'
          />
          <Typography variant="h4" className="animated" gutterBottom>
            {welcomeMessage} {name ? name : 'Guest'}!
          </Typography>
        </div>
        <Typography variant="h3"><br/>Welcome to the Ultimate "Friends" Fan Hub!</Typography>
        <Typography variant="body1" gutterBottom>
          <br/><br/>
          "Friends" is the classic sitcom that captured hearts worldwide with its humorous take on friendship, love, and life in New York City. Follow the unforgettable journey of Ross, Rachel, Monica, Chandler, Joey, and Phoebe as they navigate the ups and downs of adulthood together.<br/><br/><br/>
          Stay updated with the latest news, trivia, and behind-the-scenes stories about your favorite show and its cast. From reunion specials to exclusive interviews, we bring you everything "Friends" fans need to know.
        </Typography>
        <Button variant="contained" color="primary" className="cta-button">WELCOME TO THE FAMILY</Button>
      </Container>
    </div>
  );
};

export default Home;
