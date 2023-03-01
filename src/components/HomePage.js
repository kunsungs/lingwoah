import React, { useEffect } from 'react';
import './HomePage.css'; // Import a CSS file for styling
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

function HomePage() {
  const { user, isPending } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isPending && user) {
      navigate('/dashboard');
    }
  }, [user, isPending])

  return (( isPending || (!isPending && !!user)) ?
  <CircularProgress color="inherit" sx={{ marginLeft: '50%', marginTop: '25%'}}/>
  :
    <div className="home-page-container">
      <h1>Welcome to Your Language Learning Tracker!</h1>
      <p>Keep track of your language learning progress with us.</p>
      <div className="home-page-buttons">
        <a href="/signin">Log in</a>
        <a href="/signup">Sign up</a>
      </div>

    </div>
  );
}

export default HomePage;
