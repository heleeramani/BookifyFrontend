import React from "react";
import  "../style/DIscount.css"; // Import the CSS file

const Discount = () => {
  return (
    <div className="banner">
      <p className="text">
        Get <span className="highlight">-30% purchase</span> on order over $299.00
      </p>
      <button className="button">MORE INFO</button>
    </div>
  );
};

export default Discount;
