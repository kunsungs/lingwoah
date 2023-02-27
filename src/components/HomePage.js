import React from 'react';
import './HomePage.css'; // Import a CSS file for styling

function HomePage() {
  return (
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
