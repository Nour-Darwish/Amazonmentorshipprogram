// EditDonation.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './EditDonation.css';

const EditDonation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { donation } = location.state || {};

  const [isEditing, setIsEditing] = useState(false);
  const [editedDonation, setEditedDonation] = useState(donation || {});

  if (!donation) {
    return <p>No donation selected.</p>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Placeholder for API call to save edited donation
    console.log('Donation saved:', editedDonation);
    setIsEditing(false);
  };

  const handleSubmitClick = () => {
    // Placeholder for API call to submit donation
    console.log('Donation submitted:', donation);
    navigate('/ThankYou'); // Redirect to the thank you page
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDonation((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="main-container">
      <Header />
      <div className="edit-container">
        <h2>{isEditing ? 'Edit Donation' : 'Donation Details'}</h2>
        <div className="edit-content">
          <div className="edit-info">
            <img src={editedDonation.image} alt={editedDonation.description} className="food-image" />
            <p><strong>Donor:</strong> {isEditing ? <input type="text" name="donor" value={editedDonation.donor} onChange={handleChange} /> : editedDonation.donor}</p>
            <p><strong>Description:</strong> {isEditing ? <input type="text" name="description" value={editedDonation.description} onChange={handleChange} /> : editedDonation.description}</p>
            <p><strong>Exp Date:</strong> {isEditing ? <input type="date" name="expirationDate" value={editedDonation.expirationDate} onChange={handleChange} /> : editedDonation.expirationDate}</p>
            <p><strong>Quantity:</strong> {isEditing ? <input type="number" name="quantity" value={editedDonation.quantity} onChange={handleChange} /> : editedDonation.quantity}</p>
          </div>
          <div className="edit-buttons">
            {isEditing ? (
              <>
                <button className="button edit-button" onClick={handleSaveClick}>Save</button>
                <button className="button cancel-button" onClick={() => setIsEditing(false)}>Cancel</button>
              </>
            ) : (
              <>
                <button className="button edit-button" onClick={handleEditClick}>Edit</button>
                <button className="button submit-button" onClick={handleSubmitClick}>Submit</button>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditDonation;
