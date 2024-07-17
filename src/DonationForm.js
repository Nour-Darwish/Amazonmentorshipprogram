import React, { useState, useEffect } from 'react';
import styles from './DonationForm.css';
import Header from './Header';
import Footer from './Footer';

const DonationForm = () => {
    const [foodType, setFoodType] = useState('cooked');
    const [quantityLabel, setQuantityLabel] = useState('Quantity:');

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

    return (
        
        <div className="main-container">
         <Header />
            <div className="container">
                <form>
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
