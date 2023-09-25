import React, { useState } from 'react';
import { FiHome, FiUpload, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from "./sidebar.module.css";

const Sidebar = ({ sidebarExpanded, selectedOption, setSelectedOption, setSidebarExpanded }) => {
  const nav = useNavigate(); // Get the navigation function

  const SidebarOption = ({ icon, label, sidebarExpanded, route }) => {
    const handleOptionClick = () => {
      setSelectedOption(label);
      if (route) {
        nav(route); // Navigate to the specified route
      }
    };

    return (
      <div
        className={`option ${selectedOption === label ? 'selected' : ''}`}
        style={{
          display: sidebarExpanded ? 'flex' : 'block',
          alignItems: 'center',
          padding: '10px',
        }}
        onClick={handleOptionClick}
      >
        <div style={{ color: 'white' }}>{icon}</div>
        {sidebarExpanded ? <span style={{ color: 'white' }}>{label}</span> : null}
      </div>
    );
  };

  return (
    <div className={styles["sidebar"]}>
      <div className={styles["handelsidebar"]}>

      
      <div className={styles["options"]}>
        <SidebarOption
          icon={<FiHome size={24} />}
          label="Home"
          sidebarExpanded={sidebarExpanded}
          route="/seller/home" // Specify the route
        />
        <SidebarOption
          icon={<FiUpload size={24} />}
          label="Add Product"
          sidebarExpanded={sidebarExpanded}
          route="/seller/upload" // Specify the route
        />
        <SidebarOption
          icon={<FiUser size={24} />}
          label="User Profile"
          sidebarExpanded={sidebarExpanded}
          route="/seller/profile" // Specify the route
        />
      </div>
      <button className={styles["collapse-btn"]} onClick={() => setSidebarExpanded(!sidebarExpanded)}>
        {sidebarExpanded ? "<" : ">"}
      </button>
      </div>
    </div>
  );
};

export default Sidebar;
