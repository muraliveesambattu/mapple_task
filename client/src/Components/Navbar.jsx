import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, handleLoginLogout }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Redonk Marketing</h1>
      <ul className="navbar-menu">
        <li><Link to="/dashboard">Dashboard</Link></li>
        {isLoggedIn ? (
          <li>
            <button onClick={handleLoginLogout} className="navbar-button">Logout</button>
          </li>
        ) : (
          <li>
            <Link to="/login" className="navbar-button" onClick={handleLoginLogout}>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
