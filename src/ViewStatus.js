import React, { useState } from 'react';
import './ViewStatus.css';
import Header from './Header';

const ViewStatus = () => {
  const [incomingRequests, setIncomingRequests] = useState([
    { id: 1, name: 'John Doe', item: 'Bread' },
    { id: 2, name: 'Jane Smith', item: 'Apples' },
  ]);

  const [outgoingRequests, setOutgoingRequests] = useState([
    { id: 1, name: 'Mike Johnson', item: 'Canned Beans', status: 'pending' },
    { id: 2, name: 'Sara Williams', item: 'Rice', status: 'rejected' },
  ]);

  const handleAccept = (id) => {
    // Update the state to reflect the accepted request
    setIncomingRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== id)
    );
    // Add logic to handle acceptance, e.g., API call
    console.log(`Accepted request with ID: ${id}`);
  };

  const handleReject = (id) => {
    // Update the state to reflect the rejected request
    setIncomingRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== id)
    );
    // Add logic to handle rejection, e.g., API call
    console.log(`Rejected request with ID: ${id}`);
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
              <div key={request.id} className="status-card">
                <div className="info">
                  <h4>{request.name} (Recipient)</h4>
                  <p>Item: {request.item}</p>
                </div>
                <div className="buttons">
                  <button
                    className="accept-button"
                    onClick={() => handleAccept(request.id)}
                  >
                    Accept
                  </button>
                  <button
                    className="reject-button"
                    onClick={() => handleReject(request.id)}
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
              <div key={request.id} className="status-card">
                <div className="info">
                  <h4>{request.name} (Donor)</h4>
                  <p>Item: {request.item}</p>
                </div>
                <div className={`status ${request.status}`}>
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
