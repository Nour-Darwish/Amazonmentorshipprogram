import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="MealMission Logo" className="logo" />
        <div className="logo-text">
          <div>MealMission</div>
          <div className="slogan">from excess to access</div>
        </div>
      </div>
      <nav>
        <ul className="nav">
          <li><a href="/"><Link to="/">Home</Link></a></li>
          <li><a href="/"><Link to="/AccountPage">Account Page</Link></a></li>
          <li><a href="/">Donate</a></li>
          <li><a href="/">Receive</a></li>
          <li><a href="/">View Status</a></li>
          <li><a href="/">FAQs</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
