import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useAuth } from './AuthContext';
import './DonationForm.css';

const DonationForm = () => {
    const [foodtype, setFoodtype] = useState('cooked');
    const [quantityLabel, setQuantityLabel] = useState('Quantity:');
    const [imageBase64, setImageBase64] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        updateQuantityLabel();
    }, [foodtype]);

    const handleFoodtypeChange = (e) => {
        setFoodtype(e.target.value);
    };

    const updateQuantityLabel = () => {
        if (foodtype === 'raw' || foodtype === 'cooked') {
            setQuantityLabel('Enter Quantity (kgs):');
        } else if (foodtype === 'canned') {
            setQuantityLabel('Enter Quantity (items):');
        }
    };

    const handleImageUpload = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageBase64(reader.result.split(',')[1]);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('User not authenticated');
            return;
        }

        const foodPhoto = e.target['food-photo'].files[0];
        if (foodPhoto) {
            handleImageUpload(foodPhoto);
        }

        if (!imageBase64) {
            setError('Image is still uploading. Please wait.');
            return;
        }

        const donation = {
            foodtype,
            expirationDate: e.target['expiration-date'].value,
            quantity: e.target['quantity'].value,
            description: e.target['description'].value,
            image: imageBase64,
            emailofDonor: user.email,
        };

        try {
            const response = await fetch('https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/add-donation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(donation),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Donation successful:', data);
            // Pass the donationID here
            navigate('/EditDonation', { state: { donation: { ...donation, donationID: data.donationID } } });
        } catch (error) {
            console.error('Error submitting donation:', error);
            setError(error.message);
        }
    };

    return (
        <div className="main-container">
            <Header />
            <div className="form-container">
                <div className="form-content">
                    {error && <p className="error">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="food-type">Select type of food</label>
                        <select id="food-type" name="food-type" value={foodtype} onChange={handleFoodtypeChange}>
                            <option value="cooked">Cooked</option>
                            <option value="canned">Canned</option>
                            <option value="raw">Raw</option>
                        </select>
                        <label htmlFor="expiration-date">Expiration date:</label>
                        <input type="date" id="expiration-date" name="expiration-date" required />
                        <label htmlFor="quantity" id="quantity-label">{quantityLabel}</label>
                        <input type="number" id="quantity" name="quantity" placeholder="Quantity" min="1" required />
                        <label htmlFor="description">Description of the food (ex. canned, gluten free..etc.):</label>
                        <input type="text" id="description" name="description" placeholder="Description (optional)" />
                        <label htmlFor="food-photo">Upload Photo:</label>
                        <input type="file" id="food-photo" name="food-photo" accept="image/*" onChange={(e) => handleImageUpload(e.target.files[0])} />
                        <div className="checkbox-container">
                            <input type="checkbox" id="assure" name="assure" required />
                            <label htmlFor="assure" className="checkboxLabel">
                                I assure that the food quality and hygiene was maintained
                            </label>
                        </div>
                        <button type="submit" className="donate-button">Donate Now</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DonationForm;
