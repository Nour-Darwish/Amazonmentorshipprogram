import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './DonationFeed.css';

const DonationFeed = () => {
  const [donations, setDonations] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ type: 'all' });

  const navigate = useNavigate();
  const apiUrl = 'https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/get-available-donations';

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.ok) {
          const fetchedDonations = await response.json();
          console.log(fetchedDonations); // Log the donations to check unique donationid
          setDonations(fetchedDonations);
        } else {
          throw new Error('Failed to fetch donations');
        }
      } catch (error) {
        setError(error.message);
      } 
      
    };

    fetchDonations();
  }, [apiUrl]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleRequestDonation = (donation) => {
    navigate('/RequestConfirmation', { state: { donation } });
    
  };


  const filteredDonations = donations.filter(donation => {
    const matchesSearch = donation.description.toLowerCase().includes(search.toLowerCase());
    const matchesType = filters.type === 'all' || donation.foodtype === filters.type;
    return matchesSearch && matchesType;
  });

  return (
    <div className="main-container">
      <Header />
      <div className="donation-feed-container">
        <h1>Available <span className="user-name">Donations</span></h1>
        <div className="search-filter-bar">
          <input
            type="text"
            placeholder="Search donations..."
            value={search}
            onChange={handleSearchChange}
            className="search-input"
          />
          <select name="type" value={filters.type} onChange={handleFilterChange} className="filter-select">
            <option value="all">All Types</option>
            <option value="cooked">Cooked</option>
            <option value="canned">Canned</option>
            <option value="raw">Raw</option>
            <option value="fruits/vegetables">Fruits/Vegetables</option>
          </select>
        </div>
        { error ? (
          <div className="error-message">{error}</div>
        ) : filteredDonations.length === 0 ? (
          <div className="no-donations-message">No donations available at the moment.</div>
        ) : (
          filteredDonations.map((donation) => (
            <div key={donation.donationID} className="donation-card">
              <img 
                src={donation['donation-picture'] || 'placeholder-image.jpg'} 
                alt={donation.description || 'Donation image'} 
                className="donation-image" 
                loading="lazy" 
                
              />
              <div className="donation-info">
                <h3>Donor: {donation.donorName}</h3>
                <p>Description: {donation.description}</p>
                <p>Expiration Date: {donation.expirationDate}</p>
                <p>Food Type: {donation.foodtype}</p>
                <p>Quantity: {donation.quantity} kg</p>
                <button 
                  className="request-button" 
                  onClick={() => handleRequestDonation(donation)}
                  aria-label={`Request donation from ${donation.emailofDonor}`}
                >
                  Request
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
     
    </div>
  );
};

export default DonationFeed;
