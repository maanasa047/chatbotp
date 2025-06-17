// File: frontend/src/pages/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/auth';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      setMessage('All fields are required');
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Invalid email format');
      return;
    }

    try {
      await axios.post(`${API_URL}/signup`, formData);
      setMessage('Signup successful! Please login.');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Server error');
      setMessage('Signup failed. Try a different username.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Signup</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="login-input"
            value={formData.username}
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="login-input"
            value={formData.email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="login-input"
            value={formData.password}
          />
          <button type="submit" className="login-button">Signup</button>
        </form>
        <p className="login-message">{message}</p>
        <p className="login-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
