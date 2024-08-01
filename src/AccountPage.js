import Header from './Header';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import './AccountPage.css';

const AccountPage = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      try {
        const response = await fetch('https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/get-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: user.email }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setName(data.name || '');
        setPhoneNumber(data.phoneNumber || '');
        setEmail(data.email || '');
        setDescription(data.description || '');
        setProfilePicture(data.profilePictureUrl || '');
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [user]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    setIsEditing(false);
    try {
      const response = await fetch('https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/update-user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, phoneNumber, description, profilePicture }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Updated user data:", data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      const base64String = reader.result.split(',')[1];
      setProfilePicture(base64String);
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="account-page">
      <Header />
      <div className="account">
        <h2>Profile <span className="user-name">Info</span></h2>
        <div className="profile-section">
          <div className="profile-picture">
            <img 
              src={profilePicture ? profilePicture : "path/to/placeholder/image.jpg"} 
              alt="Profile" 
            />
            {isEditing && (
              <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
            )}
          </div>
          <div className="profile-info">
            {isEditing ? (
              <>
                <div className="profile-info-item">
                  <label>
                    <strong>Name:</strong>
                    <input 
                      type="text" 
                      value={name} 
                      onChange={handleInputChange(setName)} 
                      className="modern-input"
                    />
                  </label>
                </div>
                <div className="profile-info-item">
                  <label>
                    <strong>Email:</strong>
                    <input 
                      type="email" 
                      value={email} 
                      onChange={handleInputChange(setEmail)} 
                      className="modern-input"
                    />
                  </label>
                </div>
                <div className="profile-info-item">
                  <label>
                    <strong>Phone Number:</strong>
                    <input 
                      type="tel" 
                      value={phoneNumber} 
                      onChange={handleInputChange(setPhoneNumber)} 
                      className="modern-input"
                    />
                  </label>
                </div>
                <div className="profile-info-item">
                  <label>
                    <strong>Description:</strong>
                    <textarea 
                      value={description} 
                      onChange={handleInputChange(setDescription)}
                      className="modern-textarea"
                    />
                  </label>
                </div>
                <button className="edit-button" onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                <div className="profile-info-item">
                  <p><strong>Name:</strong> {name}</p>
                </div>
                <div className="profile-info-item">
                  <p><strong>Email:</strong> {email}</p>
                </div>
                <div className="profile-info-item">
                  <p><strong>Phone Number:</strong> {phoneNumber}</p>
                </div>
                <div className="profile-info-item">
                  <p><strong>Description:</strong> {description}</p>
                </div>
                <button className="edit-button" onClick={handleEditToggle}>Edit</button>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountPage;
