import React, { useState, useEffect } from 'react';

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to our website!');

  useEffect(() => {
    document.title = 'Home - Interactive Landing Page';
    console.log('Home component mounted');
  }, []);

  return (
    <div>
      <h1>{welcomeMessage}</h1>
      <p>This is the home page.</p>
    </div>
  );
};

export default Home;
