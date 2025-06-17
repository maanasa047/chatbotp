// File: frontend/src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/auth';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setMessage('All fields are required');
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/login`, formData);
      localStorage.setItem('username', formData.username);
      localStorage.setItem('isLoggedIn', 'true');
      setMessage(res.data.message);
      navigate('/dashboard');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Server error');
      setMessage('Login failed. Please check your credentials.');
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    if (!resetEmail) {
      setResetMessage('Email is required');
      return;
    }

    try {
      // Example endpoint, update in backend
      await axios.post('http://localhost:5000/api/auth/forgot-password', { email: resetEmail });
      setResetMessage('Reset instructions sent to your email.');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Server error');
      setResetMessage('Error sending reset instructions. Check email.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="login-input"
            value={formData.username}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="login-input"
            value={formData.password}
          />
          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="login-message">{message}</p>
        <p className="login-footer">
          Don’t have an account? <Link to="/signup">Signup</Link><br />
          <button
            type="button"
            className="forgot-password-link"
            onClick={() => setShowForgotPassword(!showForgotPassword)}
          >
            Forgot Password?
          </button>
        </p>

        {showForgotPassword && (
          <div className="forgot-password-section">
            <h3>Reset Password</h3>
            <form onSubmit={handleResetSubmit} className="login-form">
              <input
                type="email"
                name="resetEmail"
                placeholder="Enter your email"
                className="login-input"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
              <button type="submit" className="login-button">Send Reset Link</button>
              <p className="login-message">{resetMessage}</p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
