import React, { useEffect, useState } from 'react';
import './sidebar.css'; // Make sure to import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faHome,
  faAddressBook,
  faTachometerAlt,
  faEnvelope,
  faMap,
  faCog,
  faAngleRight,
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
    {
      icon: <FontAwesomeIcon icon={faTachometerAlt} />,
      text: 'General',
      subItems: [
        { icon: null, text: 'Dashboard' },
        { icon: null, text: 'Analytics' },
      ],
    },
    { icon: <FontAwesomeIcon icon={faEnvelope} />, text: 'Email' },
    { icon: <FontAwesomeIcon icon={faMap} />, text: 'Map' },
    {
      icon: <FontAwesomeIcon icon={faCog} />,
      text: 'Settings',
      subItems: [
        { icon: null, text: 'Profile' },
        { icon: null, text: 'Preferences' },
      ],
    },
  ];

  useEffect(() => {
    // Add event listeners or any other initialization code here
  }, []);

  return (
    <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
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
                <ul className="sub-list">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="sub-list-item">
                      <FontAwesomeIcon icon={faAngleRight} /> {subItem.text}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
