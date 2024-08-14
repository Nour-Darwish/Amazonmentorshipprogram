import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './SuccessConfirmation.css';
import success from "./success.jpg"; // Changed to SVG for better quality

const SuccessConfirmation = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="success-container">
        <img src={success} alt="Success" className="success-image" />
        <div className="success-details">
          <h1 className="success-heading">Success!</h1>
          <p className="success-text">
            Your request to receive a donation has been successfully sent. You can now check its status below.
          </p>
          <a href="/view-status" className="status-link">View Status</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessConfirmation;

