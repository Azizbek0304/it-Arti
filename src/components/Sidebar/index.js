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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-RFxgCvFh0c9ad_IUJhtT6cKXp69gFuOzg&usqp=CAUdata:image/jpeg;base64,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"
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
