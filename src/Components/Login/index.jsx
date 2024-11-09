import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../LoginRegister.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch users from the API
      const response = await fetch('http://localhost:3000/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const users = await response.json();

      // Check if the entered username and password match any user in the API response
      const isValidUser = users.some(
        (user) => user.username === username && user.password === password
      );

      if (isValidUser) {
        // Navigate to the dashboard if login is successful
        navigate('/dashboard');
      } else {
        // Set an error message if the user is not valid
        setErrorMessage('Invalid credentials. Please register if you don\'t have an account.');
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="form-button">Login</button>
      </form>

      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
          <Link to="/register" className="register-link">Register here</Link>
        </div>
      )}
    </div>
  );
};

export default Login;
