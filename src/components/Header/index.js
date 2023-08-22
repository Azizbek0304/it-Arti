import React, { useState } from 'react';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';
import './header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="" alt="logo" />
      </div>
      <div className="navbar-button">
        <button>Button</button>
      </div>
    </nav>
  );
};

export default Header;
