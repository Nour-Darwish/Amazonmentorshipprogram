import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './DonationForm.css';

const DonationForm = () => {
    const [foodType, setFoodType] = useState('cooked');
    const [quantityLabel, setQuantityLabel] = useState('Quantity:');
    const navigate = useNavigate();

    useEffect(() => {
        updateQuantityLabel();
    }, [foodType]);

    const handleFoodTypeChange = (e) => {
        setFoodType(e.target.value);
    };

    const updateQuantityLabel = () => {
        if (foodType === 'raw' || foodType === 'cooked') {
            setQuantityLabel('Enter Quantity (kgs):');
        } else if (foodType === 'canned') {
            setQuantityLabel('Enter Quantity (items):');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const foodPhoto = e.target['food-photo'].files[0];
        const donation = {
            foodType,
            expirationDate: e.target['expiration-date'].value,
            quantity: e.target['quantity'].value,
            description: e.target['description'].value,
            image: foodPhoto ? URL.createObjectURL(foodPhoto) : ''
        };
        navigate('/EditDonation', { state: { donation } });
    };

    return (
        <div className="main-container">
            <Header />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="food-type">Select type of food</label>
                    <select id="food-type" name="food-type" value={foodType} onChange={handleFoodTypeChange}>
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
                    <input type="file" id="food-photo" name="food-photo" accept="image/*" />
                    <div className="checkbox-container">
                        <input type="checkbox" id="assure" name="assure" required />
                        <label htmlFor="assure" className="checkboxLabel">
                            I assure that the food quality and hygiene was maintained
                        </label>
                    </div>
                    <button type="submit" className="donate-button">Donate</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default DonationForm;
