// import React from "react";
// import "../footer/Footer.css";

// const App = () => {
//   return (
//     <div>
//       <NewsletterSection />
//       <Footer />
//     </div>
//   );
// };

// const NewsletterSection = () => {
//   return (
//     <div className="newsletter-section">
//       <div className="inner-newsletter">
//         <h2>Stay in Touch with Our Updates</h2>
//         <form className="newsletter-form">
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter Your Email Address"
//             required
//           />
//           <button type="submit" className="btn-submit">
//             GET IN TOUCH
//           </button>
//         </form>
//         <div className="privacy-check">
//           <input type="checkbox" id="privacyPolicy" required />
//           <label htmlFor="privacyPolicy">
//             I agree to the
//             <a href="#" className="privacy-link">
//               Privacy Policy
//             </a>
//             .
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-logo">
//           <a href="#">
//             <img
//               src={require("../footer/images/logo1.png")}
//               alt="Logo"
//               className="navbar-logo"
//             />
//           </a>
//           <p>Your Favorite Bookshelf</p>
//         </div>
//         <nav className="footer-nav">
//           <a href="#" className="nav-link">
//             HOME
//           </a>
//           <a href="#" className="nav-link">
//             ABOUT US
//           </a>
//           <a href="#" className="nav-link">
//             BLOGS
//           </a>
//           <a href="#" className="nav-link">
//             CATEGORIES
//           </a>
//           <a href="#" className="nav-link">
//             WISHLIST
//           </a>
//           <a href="#" className="nav-link">
//             CONTACTS
//           </a>
//         </nav>
//         <div className="social-icons">
//           <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
//             <i className="fa-brands fa-facebook-f"></i>
//           </a>
//           <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
//             <i className="fa-brands fa-twitter"></i>
//           </a>
//           <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
//             <i className="fa-brands fa-instagram"></i>
//           </a>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         AncoraThemes &copy; 2024. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default App;
import React, { useState } from "react";
import axios from "axios";
import "../footer/Footer.css";

const App = () => {
  return (
    <div>
      <NewsletterSection />
      <Footer />
    </div>
  );
};

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/newsLetter/create`, {
        email: email,
      });

      if (response.status === 200) {
        setMessage("✅ Successfully subscribed!");
        setEmail(""); // Clear input field after successful subscription
      }
    } catch (error) {
      console.error("Subscription failed:", error);
      setMessage("❌ Failed to subscribe. Please try again.");
    }
  };

  return (
    <div className="newsletter-section">
      <div className="inner-newsletter">
        <h2>Stay in Touch with Our Updates</h2>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn-submit">
            GET IN TOUCH
          </button>
        </form>
        {message && <p className="message">{message}</p>}

        {/* <div className="privacy-check">
          <input type="checkbox" id="privacyPolicy" required />
          <label htmlFor="privacyPolicy">
            I agree to the
            <a href="#" className="privacy-link">
              {" "}Privacy Policy
            </a>
            .
          </label>
        </div> */}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <a href="#">
            <img
              src={require("../footer/images/logo1.png")}
              alt="Logo"
              className="navbar-logo"
            />
          </a>
          <p>Your Favorite Bookshelf</p>
        </div>

        <nav className="footer-nav">
          <a href="#" className="nav-link">HOME</a>
          <a href="#" className="nav-link">ABOUT US</a>
          <a href="#" className="nav-link">BLOGS</a>
          <a href="#" className="nav-link">CATEGORIES</a>
          <a href="#" className="nav-link">WISHLIST</a>
          <a href="#" className="nav-link">CONTACTS</a>
        </nav>

        <div className="social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        AncoraThemes &copy; 2024. All Rights Reserved.
      </div>
    </footer>
  );
};

export default App;
