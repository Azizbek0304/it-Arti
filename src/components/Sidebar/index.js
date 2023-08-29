import React, { useEffect, useState } from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faAddressBook,
  faEnvelope,
  faMap,
  faAngleRight,
  faAngleLeft,
  faCaretDown,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const sidebarItems = [
    { icon: <FontAwesomeIcon icon={faHome} />, text: 'Home' },
    { icon: <FontAwesomeIcon icon={faAddressBook} />, text: 'Contact' },
    { icon: <FontAwesomeIcon icon={faEnvelope} />, text: 'Email' },
    { icon: <FontAwesomeIcon icon={faMap} />, text: 'Map' },
  ];

  useEffect(() => {}, []);

  return (
    <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="toggle-button-container">
        <div
          className={`toggle-button ${isSidebarCollapsed ? 'collapsed' : ''}`}
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon
            icon={isSidebarCollapsed ? faAngleRight : faAngleLeft}
          />
        </div>
      </div>
      <div className="profile">
        <div className="profile-picture">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-RFxgCvFh0c9ad_IUJhtT6cKXp69gFuOzg&usqp=CAU"
            alt="Profile"
          />
        </div>
        <h1 className={isSidebarCollapsed ? 'collapsed' : ''}>Abdu</h1>
      </div>
      <ul className="sidebar-list">
        {sidebarItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            <div className="sidebar-icon">{item.icon}</div>
            <span
              className={`sidebar-text ${
                isSidebarCollapsed ? 'collapsed' : ''
              }`}
            >
              {item.text}
            </span>
            {item.subItems && (
              <>
                <FontAwesomeIcon
                  icon={isSidebarCollapsed ? faCaretDown : faAngleRight}
                  className="sub-menu-icon"
                />
              </>
            )}
          </li>
        ))}
      </ul>
      <div
        className={`dark-mode-toggle ${isDarkMode ? 'dark' : ''}`}
        onClick={toggleDarkMode}
      >
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </div>
    </div>
  );
};

export default Sidebar;
