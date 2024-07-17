import React from 'react';
import './App.css';

function App() {
  const handleResetClick = (event) => {
    event.preventDefault();
    const email = document.getElementById('email-input').value;

    if (validateEmail(email)) {
      alert('Password reset link has been sent to ' + email);
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="container">
      <div className="reset-box">
        <div className="image-and-text">
          <img src="password.pnj.png" className="password-img" alt="Password Reset" />
          <div className="text-content">
            <h2>Reset Your Password</h2>
            <p className="subtext">Enter the email address you registered with:</p>
            <input type="email" placeholder="Email address" className="input" id="email-input" />
            <button type="submit" id="reset-button" onClick={handleResetClick}>
              Send Password Reset Link
            </button>
            <p className="back-to-signin">Back to sign in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;