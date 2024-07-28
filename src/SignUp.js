import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Footer from './Footer';
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const payload = { name, email, password, description, phoneNumber };

    try {
      const response = await fetch('https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      alert('Account created successfully!');
      
      // Redirect to the account page
      navigate('/AccountPage');  // Use navigate to redirect
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create account.');
    }
  };

  return (
    <div className="sign-up-page">
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
            placeholder="Description (optional)" 
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

export default SignUp;
