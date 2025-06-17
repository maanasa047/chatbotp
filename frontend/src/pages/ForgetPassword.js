// File: frontend/src/pages/ResetPassword.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // reuse existing styles

const ForgetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();

    if (!password) {
      setMessage('Password is required');
      return;
    }

    try {
      const res = await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, {
        password
      });
      setMessage(res.data.message);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setMessage('Token is invalid or expired. Try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Reset Password</h2>
        <form onSubmit={handleReset} className="login-form">
          <input
            type="password"
            placeholder="Enter new password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">Reset Password</button>
        </form>
        <p className="login-message">{message}</p>
      </div>
    </div>
  );
};

export default ForgetPassword;
