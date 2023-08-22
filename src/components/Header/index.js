import React, { useState } from 'react';
import { logo } from '../../assets/logo.svg';
import './header.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-button">
        <button>Button</button>
      </div>
    </nav>
  );
};

export default Navbar;
