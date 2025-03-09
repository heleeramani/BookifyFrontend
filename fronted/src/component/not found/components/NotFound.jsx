import React from 'react';
import '../style/NotFound.css'; 

const NotFound = () => {
  return (
    <div className="error-container">
      <div className="error-code">
        <span>4</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/483/483356.png"
          alt="Error Icon"
          className="error-icon"
        />
        <span>4</span>
      </div>
      <p className="error-message">
        The Page You Are Looking For Is Not Found
      </p>
      <a href="/" className="back-button">
        Go Back to Home
      </a>
    </div>
  );
};

export default NotFound;
