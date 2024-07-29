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
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return; // If there's no user, do nothing

      try {
        const response = await fetch('https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/get-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: user.email }), // Use email from context
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched user data:", data);
        setName(data.name || '');
        setPhoneNumber(data.phoneNumber || '');
        setEmail(data.email || '');
        setDescription(data.description || '');
        setProfilePicture(data.profilePicture || null);
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
      // Update user data
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
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="account-page">
      <Header />
      <div className="account">
        <h2>Profile <span className="user-name">Info</span></h2>
        <div className="profile-section">
          <div className="profile-picture">
            <img 
              src={profilePicture || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhASEhAQFRUQFhUVFRUVFRUVFRUVFRUXFxUVFRcYHiggGBolGxcVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDQ0NDg0NDisZHxkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQIFBggHAwT/xABJEAABAwICBgUGCgcHBQAAAAABAAIDBBEFIQYHEjFBURMiYXGBFDJCUpGhCCMkQ2JyorHBwjNjc4KSsrMVJaPD0eHwNFNUg5P/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APcCVACmylAREQEUXUoIspREBEUFBBKkBAFKAiIgKpVkQQApREBQShUWQFYIAiAiIggqAFZEBERAREQEREBVJQlAEABWREBEVSUFkUBSgIiIF1VFICCUREBFBKgFBZERARFBKASgKgBWQEREBFF1KAiIgKCpRBUBWREBEVSgEqQEAUoCItb0t04osPb8om+MIu2FnXldy6vojtcQO1Bsi+FTUsY0vkexjRvc9waB4nJc96T67a2babSsZSs4OykmI73DZbccADbmsDS6HYziThK6Gpk2vnal5a0A8W9Kblv1QUHvlfrIwmG+3XwEjhHtS/0wViJdc+EjdJO7tEL/AMbLRsO1C1Th8fW08fZGx838xYs5DqDp/Trqgn6LI2/fdBnGa6cJO99QO+F34XWVodaGES5Nr42n9YHxe97QFp8uoWl9GuqR3tjP3ALEVuoeoaD0FfA88BLE6P2uaX/cg9toq2KZu3DLHI31mOa8e1pK/UAuWsQ1d4zQuMrIJerulpHlx7bbBEg9iyOjuuPEqY7E+zVNabFsvUlFsrdI0Xv9YEoOlEWn6HayKDELMjkMUx+Yls15+ofNf4G/MBbggglQEsrICIiAqkoSgCAArIiAiIggKURARFF0EqLKUQFV7wASSAALknIADeSeAR7wASSAALknIADeSeC521r6yn1r3UdG5wpQdlzm32ql1/b0d9w47zwADO6xNchu+nwxwyu19URfvEAP858BuK1HQ3VpXYm7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"}
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
