import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './RequestConfirmation.css';

const RequestConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { donation } = location.state || {};

  if (!donation) {
    return <p>No donation selected.</p>;
  }

  const handleConfirm = () => {
    // Placeholder for API call
    console.log('Request confirmed:', donation);
    navigate('/SuccessConfirmation'); // Redirect to a thank you page or any other page
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="main-container">
      <Header />
      <div className="confirmation-container">
        <h2>Confirm request details:</h2>
        <div className="confirmation-content">
          <div className="donation-details">
            <p>{donation.description}</p>
            <p>{donation.quantity}</p>
            <p>Exp Date: {donation.expirationDate}</p>
          </div>
          <div className="donor-info">
            <h3>Donor Info:</h3>
            <p>Name: {donation.donor}</p>
            <p>Phone Number: +96170000000</p>
          </div>
        </div>
        <div className="confirmation-buttons">
          <button className="back-button" onClick={handleBack}>Back</button>
          <button className="confirm-button" onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RequestConfirmation;
