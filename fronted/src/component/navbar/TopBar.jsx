import React from 'react';
import './TopBar.css';

const TopBar = () => (
  <div className="topbar-container">
    <p className="topbar-welcome">Welcome to Our Publishing House!</p>
    <div className="topbar-right">
      <span className="topbar-login">Login</span> or <span className="topbar-register">Register</span>
      <div className="topbar-icons">
        <i className="topbar-icon">F</i>
        <i className="topbar-icon">X</i>
        <i className="topbar-icon">I</i>
      </div>
    </div>
  </div>
);

export default TopBar;
