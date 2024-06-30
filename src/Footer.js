import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Contact us:</p>
      <div className="contact-info">
        <a href="https://www.instagram.com/MealMission" target="_blank" rel="noopener noreferrer">@MealMission</a>
        <a href="mailto:mealmission@outlook.com">mealmission@outlook.com</a>
      </div>
    </footer>
  );
};

export default Footer;
