import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  './../LoginRegister.css'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Mock user validation (replace this with an actual API call)
    const validUsers = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' }
    ];

    // Check if user exists and the password is correct
    const isValidUser = validUsers.some(
      (user) => user.username === username && user.password === password
    );

    if (isValidUser) {
      // Redirect to Dashboard if the login is successful
      navigate('/dashboard');
    } else {
      // Set an error message if the user is not valid
      setErrorMessage('Invalid credentials. Please register if you don\'t have an account.');
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