// ThankYou.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './ThankYou.css';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="main-container">
      <Header />
      <div className="success-container">
        <img src="https://images.squarespace-cdn.com/content/v1/576a6006f5e23175ba4e41d8/1572240863706-KT57M9GE54HEFLY528S2/Enable+multi-factor+authentication?format=500w" alt="Thank you" className="success-image" />
        <div className="success-message">
          <h1>Thank You!</h1>
          <p>Your donation has been successfully submitted.</p>
          <button className="home-button" onClick={handleHomeClick}>Go to Home</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
