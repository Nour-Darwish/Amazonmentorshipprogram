import React, { useState, useEffect } from 'react';
import './ViewStatus.css';
import Header from './Header';
import { useAuth } from './AuthContext';

const ViewStatus = () => {
  const [incomingRequests, setIncomingRequests] = useState([]);
  const [outgoingRequests, setOutgoingRequests] = useState([]);
  const { user } = useAuth();
  const apiUrl = 'https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/get-requests';

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();

          // Separate the requests into incoming and outgoing based on the user's email
          const incoming = data.filter(
            (request) => request.emailofDonor === user.email
          );
          const outgoing = data.filter(
            (request) => request.emailofreceiver === user.email
          );

          setIncomingRequests(incoming);
          setOutgoingRequests(outgoing);
        } else {
          throw new Error('Failed to fetch requests');
        }
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    if (user) {
      fetchRequests();
    }
  }, [user]);

  const handleAccept = (id) => {
    setIncomingRequests((prevRequests) =>
      prevRequests.filter((request) => request['request-id'] !== id)
    );
    // Add logic to handle acceptance, e.g., API call
   
  };

  const handleReject = (id) => {
    setIncomingRequests((prevRequests) =>
      prevRequests.filter((request) => request['request-id'] !== id)
    );
   
  };

  return (
    <div className="view-status-page">
      <Header />
      <div className="status-container">
        <h2 className="status-heading">View Status</h2>

        <div className="status-section">
          <h3>Incoming Requests</h3>
          {incomingRequests.length > 0 ? (
            incomingRequests.map((request) => (
              <div key={request['request-id']} className="status-card">
                <div className="info">
                  <h4>{request.requestername} (Recipient)</h4>
                  <p>Description: {request.donationDetails.description}</p>
                  <p>Expiration Date: {request.donationDetails.expirationDate}</p>
                  <p>Food Type: {request.donationDetails.foodtype}</p>
                  <p>Quantity: {request.donationDetails.quantity}</p>
                  
                </div>
                <div className="buttons">
                  <button
                    className="accept-button"
                    onClick={() => handleAccept(request['request-id'])}
                  >
                    Accept
                  </button>
                  <button
                    className="reject-button"
                    onClick={() => handleReject(request['request-id'])}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No incoming requests.</p>
          )}
        </div>

        <div className="status-section">
          <h3>Outgoing Requests</h3>
          {outgoingRequests.length > 0 ? (
            outgoingRequests.map((request) => (
              <div key={request['request-id']} className="status-card">
                <div className="info">
                  <h4>{request.donorname} (Donor)</h4>
                  <p>Description: {request.donationDetails.description}</p>
                  <p>Expiration Date: {request.donationDetails.expirationDate}</p>
                  <p>Food Type: {request.donationDetails.foodtype}</p>
                  <p>Quantity: {request.donationDetails.quantity}</p>
                </div>
                <div className ={ 'status ${request.status}'}>
                  {request.status}
                </div>
              </div>
            ))
          ) : (
            <p>No outgoing requests.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewStatus;