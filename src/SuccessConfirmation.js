import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './SuccessConfirmation.css';
import success from "./success.jpg"; // Changed to SVG for better quality

const SuccessConfirmation = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="successrequest-container">
        <img src={success} alt="Success" className="successrequest-image" />
        <div className="success-message">
         
          <p className="success-text">Your request to receive a donation has been successfully sent. You can now check its status </p>
          <div className="actions">
            <a href="/view-status" className="status-link">View Status</a>
           
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessConfirmation;
