import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { credentials } from '../config.js';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    if (email === credentials.email && password === credentials.password) {
      localStorage.setItem('auth', true);
      navigate('/dashboard');
    } else {
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="welcome-message">
        <h1>Welcome to ABC Mart Accounts Login</h1>
      </div>
      <div className="login-container">
        <h2>Cashier Login</h2>
        <form onSubmit={handleLogin}>
          {error && <div className="login-error">{error}</div>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
