import React from 'react';
import './header.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="nav-items">
        <div className="nav-links">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about">About Us</a>
            </li>
          </ul>
        </div>
        <div className="basket-icon">
          <a href="/basket">
            <i className="fas fa-shopping-basket"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
