import React, { useState, useEffect } from 'react';
import './PasswordReset.css';
import { useLocation } from 'react-router-dom';

const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');

  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    const tokenFromUrl = query.get('token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    }
  }, [query]);

  const handleResetPassword = async () => {
    if (newPassword === '') {
      alert('Please enter a new password.');
      return;
    }

    if (confirmPassword === '') {
      alert('Please confirm your new password.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/reset-password', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      alert('Password has been successfully reset.');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to reset password.');
    }
  };

  return (
    <div className="container">
      <div className="reset-box">
        <h2>Reset Your Password</h2>
        <p className="subtext">New password must be different than previous ones</p>
        <input
          type="password"
          placeholder="Enter new password:"
          className="input"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm new password:"
          className="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="button" id="reset-button" onClick={handleResetPassword}> {/* Change type to button */}
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default PasswordReset;
