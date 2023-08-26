import React, { useEffect, useState } from 'react';
import './sidebar.css'; // Make sure to import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faAddressBook,
  faEnvelope,
  faMap,
  faAngleRight,
  faAngleLeft,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons

const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const sidebarItems = [
    { icon: <FontAwesomeIcon icon={faHome} />, text: 'Home' },
    { icon: <FontAwesomeIcon icon={faAddressBook} />, text: 'Contact' },
    { icon: <FontAwesomeIcon icon={faEnvelope} />, text: 'Email' },
    { icon: <FontAwesomeIcon icon={faMap} />, text: 'Map' },
  ];

  useEffect(() => {
    // Add event listeners or any other initialization code here
  }, []);

  return (
    <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="toggle-button-container" onClick={toggleSidebar}>
        <div className="toggle-button">
          <FontAwesomeIcon
            icon={isSidebarCollapsed ? faAngleRight : faAngleLeft}
          />
        </div>
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
    </div>
  );
};

export default Sidebar;
