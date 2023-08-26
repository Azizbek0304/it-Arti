import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaChartBar } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h1>My App</h1>
      </div>
      <button className="sidebar-toggle-button" onClick={toggleSidebar}>
        <div className={`toggle-icon ${isSidebarOpen ? 'open' : ''}`} />
      </button>
      <ul className="sidebar-menu">
        <li className="menu-item">
          <a href="/">
            <FaHome className="menu-icon" />
            Home
          </a>
        </li>
        <li className="menu-item">
          <a href="/profile">
            <FaUser className="menu-icon" />
            Profile
          </a>
        </li>
        <li className="menu-item">
          <a href="/analytics">
            <FaChartBar className="menu-icon" />
            Analytics
          </a>
        </li>
        <li className="menu-item">
          <a href="/settings">
            <FaCog className="menu-icon" />
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
