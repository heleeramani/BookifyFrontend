import React from "react";
import "../style/WishlistEmpty.css"; // Importing the CSS file

const WishlistEmpty = () => {
  return (
    <div className="container">
      <p className="message">Your Wishlist is currently empty.</p>
      <p className="msg"> Browse our collection and start saving your favorites!</p>
      <button className="button">RETURN TO SHOP</button>
    </div>
  );
};

export default WishlistEmpty;
