import React from 'react';
import './App.css';

function App() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
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
    alert('Password has been successfully reset.');
    setNewPassword('');
    setConfirmPassword('');
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
        <button type="submit" id="reset-button" onClick={handleResetPassword}>
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default App;