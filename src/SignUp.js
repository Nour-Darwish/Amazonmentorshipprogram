import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './SignUp.css';

const SignUpDonor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, such as sending data to an API
    console.log({ name, email, password, confirmPassword, description });
  };

  return (
    <div className="sign-up-page">
      <Header />
      <div className="sign-up">
        <h2>
          <span className="Create">Create</span> <span className="Account">Account</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required 
          />
          <input 
            type="text" 
            placeholder="Description(optional)" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/login">Log In</a></p>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpDonor;
