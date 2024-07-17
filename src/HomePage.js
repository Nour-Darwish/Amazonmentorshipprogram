import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      
      <div className="hero-section">
        <div className="hero-content">
          <h1>End Hunger, Start Sharing</h1>
          <p>Together, we can make a difference by sharing our excess food with those in need.</p>
          <div className="hero-buttons">
            <button className="hero-button">
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Log In</Link>
            </button>
            <button className="hero-button">
              <Link to="/SignUp" style={{ color: 'inherit', textDecoration: 'none' }}>Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Step 1" />
            <div className="step-text-box">
              <p>Sign up and join a community of passionate food savers</p>
            </div>
          </div>
          <div className="step">
            <img src="https://plus.unsplash.com/premium_photo-1663040178972-ee1d45d33899?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9uYXRlJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="Step 2" />
            <div className="step-text-box">
              <p>Farmers, restaurants, hotels, and grocery stores can share surplus food in just a few steps</p>
            </div>
          </div>
          <div className="step">
            <img src="https://media.istockphoto.com/id/1442592133/photo/close-up-of-old-woman-receiving-take-away-food-delivery.webp?b=1&s=170667a&w=0&k=20&c=MaLokbUNPpcJnqe4QAIurJIsWAfZaZQno36p3xyHCtM=" alt="Step 3" />
            <div className="step-text-box">
              <p> Non-profits, shelters, orphanages, and individuals in need can log in to request available food donations</p>
            </div>
          </div>
        </div>
      </div>
      <div className="food-facts">
        <h2>Food Waste Facts in Lebanon</h2>
        <div className="facts-grid">
          <div className="fact">
            <img src="https://media.istockphoto.com/id/1157016402/photo/wastage-of-food-mostly-seeing-in-hotels-and-party-events.jpg?s=612x612&w=0&k=20&c=M2CL-KBIDEyPWvbmD5xdOPVz4m2tA5Cc7SVggMwpIAg=" alt="Fact 1" />
            <div className="fact-text-box">
              <p> 1,620 tons of food are wasted by people dining out in Beirut alone every year</p>
            </div>
          </div>
          <div className="fact">
            <img src="https://media.istockphoto.com/id/1425232352/photo/expired-organic-bio-waste-mix-vegetables-and-fruits-in-a-huge-container-in-a-rubbish-bin-heap.jpg?s=612x612&w=0&k=20&c=_hIv18ePoswfw6BTJK9j7JMC4mhgXU-GX8rpIEbIJ5s=" alt="Fact 2" />
            <div className="fact-text-box">
              <p>For each 100 kilograms of garbage that is produced anywhere in Lebanon, you have an average of 70 kilograms of organic waste, or food waste</p>
            </div>
          </div>
          <div className="fact">
            <img src="https://media.istockphoto.com/id/1057556012/photo/the-poor-old-mans-hands-hold-an-empty-bowl-the-concept-of-hunger-or-poverty-selective-focus.jpg?s=612x612&w=0&k=20&c=m7i1f7iVFQoS8Nf_EfzqsiT9fZFSTqbqUlcCwrXQ_eU="alt="Fact 3" />
            <div className="fact-text-box">
              <p> Food price inflation and loss of income resulting from rising unemployment has drastically reduced Lebanese households’ ability to afford adequate and sufficient food, especially for the poorest and most vulnerable. </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
