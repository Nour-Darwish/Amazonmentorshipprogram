import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './DonationFeed.css'; 

const DonationFeed = () => {
  const [donations, setDonations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Insert API call here
    const fetchedDonations = [
      {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0gKKNncBHZazL9aVyBm3Rxvf8iekxdmvzaA&s",
        donor: 'Kyna Restaurant',
        description: 'Cooked Rice - 5 kgs',
        expirationDate: '2024-07-29',
        isAvailable: true, // Set to true or false based on actual availability
      },
      {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfRhVpFDpP2Qiy50QRTMXLnWyh0VaxHLcrUeuA4z04i_1iounIaqkFqXP9MqDYT7gNzQs&usqp=CAU",
        donor: 'Supermarket Rim',
        description: 'Milk box - 2 items',
        expirationDate: '2024-08-06',
        isAvailable: false, // Example of a donation that is no longer available
      },
      {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTjSy6g8nqKDcm9QIeVxQH_Xbi14-2XQBvaogFjFUlMY72OG7qQk1C9ALf-qYiC3nq50&usqp=CAU",
        donor: 'التوفير',
        description: 'tomato - 2 kilos',
        expirationDate: '2024-08-11',
        isAvailable: true, 
      }
      // Add more donations as needed
    ];
    setDonations(fetchedDonations);
  }, []);

  const handleRequestDonation = (donation) => {
    navigate('/DonationConfirmation', { state: { donation } });
  };

  return (
    <div className="main-container">
      <Header />
      <div className="donation-feed-container">
        {donations.map((donation) => (
          <div key={donation.id} className="donation-card">
            { !donation.isAvailable && (
              <div className="status">No Longer Available</div>
            )}
            <img src={donation.image} alt={donation.description} className="donation-image" />
            <div className="donation-info">
              <h3>Donor: {donation.donor}</h3>
              <p>{donation.description}</p>
              <p>Exp Date: {donation.expirationDate}</p>
              {donation.isAvailable && (
                <button className="request-button" onClick={() => handleRequestDonation(donation)}>Request Donation</button>
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default DonationFeed;
