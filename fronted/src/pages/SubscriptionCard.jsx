import React from "react";
import "./Subscription.css"; // Import the CSS file
import SubscriptionImg from "../component/home/images/discover-book1.jpg";

const SubscriptionCard = () => {
  return (
    <div className="subscriptioncard">
      <div className="card">
        <div className="profile">
          <img src={SubscriptionImg} alt="Profile" />
          <span className="update-icon" title="Update">
            <i className="fa fa-camera"></i>
          </span>
        </div>
        <div className="info">
          <div className="header">
            <div>
              <h2>Kanye West</h2>
              <p>San Francisco, CA</p>
            </div>
          </div>
          <div className="details">
            <p>
              <strong>Email:</strong> kanye@aweso.me
            </p>
            <p>
              <strong>City:</strong> San Francisco
            </p>
            <p>
              <strong>State:</strong> CA
            </p>
            <p>
              <strong>Country:</strong> USA
            </p>
            <p>
              <strong>Phone:</strong> +1 (415) 655-17-10
            </p>
            <button className="edit-btn">EDIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
