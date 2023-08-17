import React, { useState } from 'react';
import { faBars, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    // Add more navigation items as needed
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className={`nav-items ${menuOpen ? 'open' : ''}`}>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <a href={link.path}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="basket-icon">
          <a href="/basket">
            <FontAwesomeIcon icon={faShoppingBasket} />
          </a>
        </div>
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
