import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './SuccessConfirmation.css';
import success from './success.jpeg' 

const SuccessConfirmation = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/'); // Navigate to the homepage or any other desired page
  };

  return (
    <div className="main-container">
      <Header />
      <div className="success-container">
        <img src={success} alt="Success" className="success-image" />
        <div className="success-message">
          <h2>Your request has been successfully sent!</h2>
          <button className="home-button" onClick={handleHome}>Go to Homepage</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessConfirmation;
