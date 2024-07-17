import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, such as sending data to an API
    console.log({ email, password });
  };

  return (
    <div className="login-page">
      
      <div className="login">
        <h2>
          <span className="welcome">Welcome</span> <span className="back">Back!</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link to="/SendPasswordResetLink" className="forgot-password"> Forgot Password</Link>
          </div>
          <button type="submit">LOGIN</button>
        </form>
        <p>Don't have an account? <Link to="/SignUp">Sign Up</Link></p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
