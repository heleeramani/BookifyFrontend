// // import React, { useState } from 'react';
// // import './Navbar.css';

// // const Navbar = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle (large devices)
// //   const [navMenuOpen, setNavMenuOpen] = useState(false); // Navbar toggle (small devices)

// //   return (
// //     <div className="navbar-container">
// //       {/* 🔝 Top Bar */}
// //       <div className="navbar-topbar">
// //         <p className="navbar-welcome">Welcome to Our Publishing House!</p>
// //         <div className="navbar-topbar-right">
// //           <span className="navbar-login">Login</span> or <span className="navbar-register">Register</span>
// //           <div className="navbar-topbar-icons">
// //             <i className="navbar-icon">F</i>
// //             <i className="navbar-icon">X</i>
// //             <i className="navbar-icon">I</i>
// //           </div>
// //         </div>
// //       </div>

// //       {/* 🧭 Header */}
// //       <div className="navbar-header">
// //         {/* 📖 Sidebar Toggle (Large Devices) */}
// //        {/* 📞 Contact Info */}
// //        <div className="navbar-contact">
// //           <i className="navbar-contact-icon">📞</i>
// //           <p>Free call: <span>123-456-7890</span></p>
// //         </div>

// //         {/* 📚 Logo */}
// //         <div className="navbar-logo">
// //           <span className="navbar-logo-icon">📚</span>
// //           <span className="navbar-logo-text">BOOK<span className="navbar-logo-highlight">lovers</span></span>
// //           <p className="navbar-tagline">Your Favorite Bookshelf!</p>
// //         </div>

// //         {/* 🛒 Cart */}
// //         <div className="navbar-cart">
// //           <i className="navbar-cart-icon">🛒</i>
// //           <span className="navbar-cart-badge">0</span>
// //         </div>
// //       </div>

// //       {/* 🔽 Navbar Links (Small Devices: Toggle, Large Devices: Visible) */}
// //       <nav className="navbar-menu">
// //         <div className="navbar-small-toggle" onClick={() => setNavMenuOpen(!navMenuOpen)}>
// //           <i className="navbar-toggle-icon">{navMenuOpen ? '✖' : '☰'}</i>
// //         </div>

// //         <ul className={`navbar-links ${navMenuOpen ? 'navbar-links-open' : ''}`}>
// //         <div className="navbar-sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
// //           <i className="navbar-toggle-icon">{sidebarOpen ? '✖' : '☰'}</i>
// //         </div>
// //           <li className="navbar-link navbar-link-active">HOME</li>
// //           <li className="navbar-link">PAGES</li>
// //           <li className="navbar-link">OUR EVENTS</li>
// //           <li className="navbar-link">BLOG</li>
// //           <li className="navbar-link">ABOUT</li>
// //           <li className="navbar-link">STORE</li>
// //         </ul>

// //         <div className="navbar-search">
// //           <i className="navbar-search-icon">🔍</i>
// //         </div>
// //       </nav>

// //       {/* 📂 Sidebar (Large Devices Only) */}
// //       <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
// //         <div className="sidebar-header">
// //           <div className="sidebar-logo">
// //             <span className="sidebar-logo-icon">📚</span>
// //             <span className="sidebar-logo-text">BOOK<span className="sidebar-logo-highlight">lovers</span></span>
// //           </div>
// //           <i className="sidebar-close" onClick={() => setSidebarOpen(false)}>✖</i>
// //         </div>
// //         <ul className="sidebar-links">
// //           <li className="sidebar-link">HOME</li>
// //           <li className="sidebar-link">PAGES</li>
// //           <li className="sidebar-link">OUR EVENTS</li>
// //           <li className="sidebar-link">BLOG</li>
// //           <li className="sidebar-link">ABOUT</li>
// //           <li className="sidebar-link">STORE</li>
// //         </ul>
// //         <div className="sidebar-footer">
// //           <i className="sidebar-icon">F</i>
// //           <i className="sidebar-icon">X</i>
// //           <i className="sidebar-icon">I</i>
// //         </div>
// //       </div>

// //       {/* 🌫️ Overlay (Sidebar Close on Click) */}
// //       {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}
// //     </div>
// //   );
// // };

// // export default Navbar;
// // import React, { useState } from "react";
// // import "./Navbar.css";
// // import { Link } from "react-router-dom";
// // const Navbar = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle (large devices)
// //   const [navMenuOpen, setNavMenuOpen] = useState(false); // Navbar toggle (small devices)

// //   return (
// //     <div className="navbar-container">
// //       {/* 🔝 Top Bar */}
// //       <div className="navbar-topbar">
// //         <p className="navbar-welcome">Welcome to Our Publishing House!</p>
// //         <div className="navbar-topbar-right">
// //         <span className="navbar-login">
// //           <Link to="/login">Login</Link>
// //         </span>
// //         or
// //         <span className="navbar-register">
// //           <Link to="/register">Register</Link>
// //         </span>
// //           <div className="navbar-topbar-icons">
// //             <i className="navbar-icon">F</i>
// //             <i className="navbar-icon">X</i>
// //             <i className="navbar-icon">I</i>
// //           </div>
// //         </div>
// //       </div>

// //       {/* 🧭 Header */}
// //       <div className="navbar-header">
// //         {/* 📞 Contact Info */}
// //         <div className="navbar-contact">
// //           <i className="navbar-contact-icon">📞</i>
// //           <p>
// //             Free call: <span>123-456-7890</span>
// //           </p>
// //         </div>

// //         {/* 📚 Logo */}
// //         <div className="navbar-logo">
// //           <span className="navbar-logo-text">
// //             BOOK<span className="navbar-logo-highlight">lovers</span>
// //           </span>
// //           <p className="navbar-tagline">Your Favorite Bookshelf!</p>
// //         </div>

// //         {/* 🛒 Cart */}
// //         <div className="navbar-cart">
// //           <i className="navbar-cart-icon">🛒</i>
// //           <span className="navbar-cart-badge">0</span>
// //         </div>
// //       </div>

// //       {/* 🔽 Navbar Links */}
// //       <nav className="navbar-menu">
// //         {/* 📱 Toggle for Small Devices */}
// //         <div
// //           className="navbar-small-toggle"
// //           onClick={() => setNavMenuOpen(!navMenuOpen)}
// //         >
// //           <i className="navbar-toggle-icon">{navMenuOpen ? "✖" : "☰"}</i>
// //         </div>

// //         {/* 📂 Toggle for Sidebar (Large Devices) */}
// //         <div
// //           className="navbar-sidebar-toggle"
// //           onClick={() => setSidebarOpen(!sidebarOpen)}
// //         >
// //           <i className="navbar-toggle-icon">{sidebarOpen ? "✖" : "☰"}</i>
// //         </div>

// //         {/* 🌐 Navigation Links */}
// //         <ul
// //           className={`navbar-links ${navMenuOpen ? "navbar-links-open" : ""}`}
// //         >
// //           <li className="navbar-link navbar-link-active">
// //             <a href="/">HOME</a>
// //           </li>
// //           <li className="navbar-link">
// //             {" "}
// //             <a href="/about">ABOUT</a>
// //           </li>
// //           <li className="navbar-link">
// //             <a href="/blog">BLOG</a>
// //           </li>
// //           <li className="navbar-link">
// //             <a href="/contactus">CONTACT US</a>
// //           </li>
// //           <li className="navbar-link">
// //             <a href="/store">STORE</a>
// //           </li>
// //         </ul>

// //         {/* 🔎 Search */}
// //         <div className="navbar-search">
// //           <i className="navbar-search-icon">🔍</i>
// //         </div>
// //       </nav>

// //       {/* 📂 Sidebar */}
// //       <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
// //         <div className="sidebar-header">
// //           <div className="sidebar-logo">
// //             <span className="sidebar-logo-text">
// //               BOOK<span className="sidebar-logo-highlight">lovers</span>
// //             </span>
// //           </div>
// //           <i className="sidebar-close" onClick={() => setSidebarOpen(false)}>
// //             ✖
// //           </i>
// //         </div>
// //         <ul className="sidebar-links">
// //           <li className="navbar-link navbar-link-active">
// //             <a href="/">HOME</a>
// //           </li>
// //           <li className="navbar-link">
// //             {" "}
// //             <a href="/about">ABOUT</a>
// //           </li>
// //           <li className="navbar-link">
// //             <a href="/blog">BLOG</a>
// //           </li>
// //           <li className="navbar-link">
// //             <a href="/contactus">CONTACT US</a>
// //           </li>
// //           <li className="navbar-link">
// //             <a href="/store">STORE</a>
// //           </li>
// //         </ul>
// //         <div className="sidebar-footer">
// //           <i className="sidebar-icon">F</i>
// //           <i className="sidebar-icon">X</i>
// //           <i className="sidebar-icon">I</i>
// //         </div>
// //       </div>

// //       {/* 🌫️ Overlay (for Sidebar Close) */}
// //       {sidebarOpen && (
// //         <div
// //           className="sidebar-overlay"
// //           onClick={() => setSidebarOpen(false)}
// //         ></div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Navbar;

// // import React, { useState } from "react";
// // import "./Navbar.css";
// // import { Link } from "react-router-dom";

// // const Navbar = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle (large devices)
// //   const [navMenuOpen, setNavMenuOpen] = useState(false); // Navbar toggle (small devices)

// //   return (
// //     <div className="navbar-container">
// //       {/* 🔝 Top Bar */}
// //       <div className="navbar-topbar">
// //         <p className="navbar-welcome">Welcome to Our Publishing House!</p>
// //         <div className="navbar-topbar-right">
// //           <span className="navbar-login">
// //             <Link to="/login">Login</Link>
// //           </span>
// //           or
// //           <span className="navbar-register">
// //             <Link to="/register">Register</Link>
// //           </span>

// //           {/* 👤 Profile Icon */}
// //           <Link to="/profile" className="navbar-profile-icon">
// //             <i className="navbar-icon">👤</i>
// //           </Link>
// //         </div>
// //       </div>

// //       {/* 🧭 Header */}
// //       <div className="navbar-header">
// //         {/* 📞 Contact Info */}
// //         <div className="navbar-contact">
// //           <i className="navbar-contact-icon">📞</i>
// //           <p>
// //             Free call: <span>123-456-7890</span>
// //           </p>
// //         </div>

// //         {/* 📚 Logo */}
// //         <div className="navbar-logo">
// //           <span className="navbar-logo-text">
// //             BOOK<span className="navbar-logo-highlight">lovers</span>
// //           </span>
// //           <p className="navbar-tagline">Your Favorite Bookshelf!</p>
// //         </div>

// //         {/* 🛒 Cart */}
// //         <div className="navbar-cart">
// //           <i className="navbar-cart-icon">🛒</i>
// //           <span className="navbar-cart-badge">0</span>
// //         </div>
// //       </div>

// //       {/* 🔽 Navbar Links */}
// //       <nav className="navbar-menu">
// //         {/* 📱 Toggle for Small Devices */}
// //         <div
// //           className="navbar-small-toggle"
// //           onClick={() => setNavMenuOpen(!navMenuOpen)}
// //         >
// //           <i className="navbar-toggle-icon">{navMenuOpen ? "✖" : "☰"}</i>
// //         </div>

// //         {/* 📂 Toggle for Sidebar (Large Devices) */}
// //         <div
// //           className="navbar-sidebar-toggle"
// //           onClick={() => setSidebarOpen(!sidebarOpen)}
// //         >
// //           <i className="navbar-toggle-icon">{sidebarOpen ? "✖" : "☰"}</i>
// //         </div>

// //         {/* 🌐 Navigation Links */}
// //         <ul
// //           className={`navbar-links ${navMenuOpen ? "navbar-links-open" : ""}`}
// //         >
// //           <li className="navbar-link navbar-link-active">
// //             <a href="/">HOME</a>
// //           </li>
// //           <li className="navbar-link">
// //             <a href="/about">ABOUT</a>
// //           </li>
// //           <li className="navbar-link">
// //             <a href="/blog">BLOG</a>
// //           </li>
// //           <li className="navbar-link">
// //             <a href="/contactus">CONTACT US</a>
// //           </li>
// //           <li className="navbar-link">
// //             <a href="/store">STORE</a>
// //           </li>
// //         </ul>

// //         {/* 🔎 Search */}
// //         <div className="navbar-search">
// //           <i className="navbar-search-icon">🔍</i>
// //         </div>
// //       </nav>

// //       {/* 📂 Sidebar */}
// //       <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
// //         <div className="sidebar-header">
// //           <div className="sidebar-logo">
// //             <span className="sidebar-logo-text">
// //               BOOK<span className="sidebar-logo-highlight">lovers</span>
// //             </span>
// //           </div>
// //           <i className="sidebar-close" onClick={() => setSidebarOpen(false)}>
// //             ✖
// //           </i>
// //         </div>
// //         <ul className="sidebar-links">
// //           <li className="navbar-link navbar-link-active">
// //             <a href="/">HOME</a>
// //           </li>
// //           <li className="navbar-link">
// //             <a href="/about">ABOUT</a>
// //           </li>
// //           <li className="navbar-link">
// //             <a href="/blog">BLOG</a>
// //           </li>
// //           <li className="navbar-link">
// //             <a href="/contactus">CONTACT US</a>
// //           </li>
// //           <li className="navbar-link">
// //             <a href="/store">STORE</a>
// //           </li>
// //         </ul>
// //       </div>

// //       {/* 🌫️ Overlay (for Sidebar Close) */}
// //       {sidebarOpen && (
// //         <div
// //           className="sidebar-overlay"
// //           onClick={() => setSidebarOpen(false)}
// //         ></div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle (large devices)
//   const [navMenuOpen, setNavMenuOpen] = useState(false); // Navbar toggle (small devices)
//   const [favoriteCount, setFavoriteCount] = useState(0); // Add state for favorites count

//   return (
//     <div className="navbar-container">
//       {/* 🔝 Top Bar */}
//       <div className="navbar-topbar">
//         <p className="navbar-welcome">Welcome to Our Publishing House!</p>
//         <div className="navbar-topbar-right">
//           <span className="navbar-login">
//             <Link to="/login">Login</Link>
//           </span>
//           or
//           <span className="navbar-register">
//             <Link to="/register">Register</Link>
//           </span>

//           {/* 👤 Profile Icon */}
//           <Link to="/profile" className="navbar-profile-icon">
//             <i className="navbar-icon">👤</i>
//           </Link>
//         </div>
//       </div>

//       {/* 🧭 Header */}
//       <div className="navbar-header">
//         {/* 📞 Contact Info */}
//         <div className="navbar-contact">
//           <i className="navbar-contact-icon">📞</i>
//           <p>
//             Free call: <span>123-456-7890</span>
//           </p>
//         </div>

//         {/* 📚 Logo */}
//         <div className="navbar-logo">
//           <span className="navbar-logo-text">
//             BOOK<span className="navbar-logo-highlight">lovers</span>
//           </span>
//           <p className="navbar-tagline">Your Favorite Bookshelf!</p>
//         </div>

//         {/* Action buttons container */}
//         <div className="navbar-actions">
//           {/* ❤️ Favorites */}
//           <div className="navbar-favorites">
//             <Link to="/favorites">
//               <i className="navbar-favorites-icon">❤️</i>
//               <span className="navbar-favorites-badge">{favoriteCount}</span>
//             </Link>
//           </div>

//           {/* 🛒 Cart */}
//           <div className="navbar-cart">
//             <i className="navbar-cart-icon">🛒</i>
//             <span className="navbar-cart-badge">0</span>
//           </div>
//         </div>
//       </div>

//       {/* 🔽 Navbar Links */}
//       <nav className="navbar-menu">
//         {/* 📱 Toggle for Small Devices */}
//         <div
//           className="navbar-small-toggle"
//           onClick={() => setNavMenuOpen(!navMenuOpen)}
//         >
//           <i className="navbar-toggle-icon">{navMenuOpen ? "✖" : "☰"}</i>
//         </div>

//         {/* 📂 Toggle for Sidebar (Large Devices) */}
//         <div
//           className="navbar-sidebar-toggle"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//         >
//           <i className="navbar-toggle-icon">{sidebarOpen ? "✖" : "☰"}</i>
//         </div>

//         {/* 🌐 Navigation Links */}
//         <ul
//           className={`navbar-links ${navMenuOpen ? "navbar-links-open" : ""}`}
//         >
//           <li className="navbar-link navbar-link-active">
//             <a href="/">HOME</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/about">ABOUT</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/blog">BLOG</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/contactus">CONTACT US</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/store">STORE</a>
//           </li>
//         </ul>

//         {/* 🔎 Search */}
//         <div className="navbar-search">
//           <i className="navbar-search-icon">🔍</i>
//         </div>
//       </nav>

//       {/* 📂 Sidebar */}
//       <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
//         <div className="sidebar-header">
//           <div className="sidebar-logo">
//             <span className="sidebar-logo-text">
//               BOOK<span className="sidebar-logo-highlight">lovers</span>
//             </span>
//           </div>
//           <i className="sidebar-close" onClick={() => setSidebarOpen(false)}>
//             ✖
//           </i>
//         </div>
//         <ul className="sidebar-links">
//           <li className="navbar-link navbar-link-active">
//             <a href="/">HOME</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/about">ABOUT</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/blog">BLOG</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/contactus">CONTACT US</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/store">STORE</a>
//           </li>
//         </ul>
//       </div>

//       {/* 🌫️ Overlay (for Sidebar Close) */}
//       {sidebarOpen && (
//         <div
//           className="sidebar-overlay"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// // Import Font Awesome components
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faPhone,
//   faBook,
//   faShoppingCart,
//   faHeart,
//   faSearch,
//   faBars,
//   faTimes,
//   faUser
// } from '@fortawesome/free-solid-svg-icons';
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram
// } from '@fortawesome/free-brands-svg-icons';

// const Navbar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle (large devices)
//   const [navMenuOpen, setNavMenuOpen] = useState(false); // Navbar toggle (small devices)
//   const [favoriteCount, setFavoriteCount] = useState(0); // Add state for favorites count

//   return (
//     <div className="navbar-container">
//       {/* 🔝 Top Bar */}
//       <div className="navbar-topbar">
//         <p className="navbar-welcome">Welcome to Our Publishing House!</p>
//         <div className="navbar-topbar-right">
//           <span className="navbar-login">
//             <Link to="/login">Login</Link>
//           </span>
//           or
//           <span className="navbar-register">
//             <Link to="/register">Register</Link>
//           </span>

//           {/* Profile Icon */}
//           <Link to="/profile" className="navbar-profile-icon">
//             <FontAwesomeIcon icon={faUser} className="navbar-icon" />
//           </Link>

//           {/* Social Media Icons */}
//           <div className="navbar-topbar-icons">
//             <FontAwesomeIcon icon={faFacebook} className="navbar-icon" />
//             <FontAwesomeIcon icon={faTwitter} className="navbar-icon" />
//             <FontAwesomeIcon icon={faInstagram} className="navbar-icon" />
//           </div>
//         </div>
//       </div>

//       {/* 🧭 Header */}
//       <div className="navbar-header">
//         {/* Contact Info */}
//         <div className="navbar-contact">
//           <FontAwesomeIcon icon={faPhone} className="navbar-contact-icon" />
//           <p>
//             Free call: <span>123-456-7890</span>
//           </p>
//         </div>

//         {/* Logo */}
//         <div className="navbar-logo">
//           <FontAwesomeIcon icon={faBook} className="navbar-logo-icon" />
//           <span className="navbar-logo-text">
//             BOOK<span className="navbar-logo-highlight">lovers</span>
//           </span>
//           <p className="navbar-tagline">Your Favorite Bookshelf!</p>
//         </div>

//         {/* Action buttons container */}
//         <div className="navbar-actions">
//           {/* Favorites */}
//           <div className="navbar-favorites">
//             <Link to="/favorites">
//               <FontAwesomeIcon icon={faHeart} className="navbar-favorites-icon" />
//               <span className="navbar-favorites-badge">{favoriteCount}</span>
//             </Link>
//           </div>

//           {/* Cart */}
//           <div className="navbar-cart">
//             <FontAwesomeIcon icon={faShoppingCart} className="navbar-cart-icon" />
//             <span className="navbar-cart-badge">0</span>
//           </div>
//         </div>
//       </div>

//       {/* 🔽 Navbar Links */}
//       <nav className="navbar-menu">
//         {/* Toggle for Small Devices */}
//         <div
//           className="navbar-small-toggle"
//           onClick={() => setNavMenuOpen(!navMenuOpen)}
//         >
//           <FontAwesomeIcon
//             icon={navMenuOpen ? faTimes : faBars}
//             className="navbar-toggle-icon"
//           />
//         </div>

//         {/* Toggle for Sidebar (Large Devices) */}
//         <div
//           className="navbar-sidebar-toggle"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//         >
//           <FontAwesomeIcon
//             icon={sidebarOpen ? faTimes : faBars}
//             className="navbar-toggle-icon"
//           />
//         </div>

//         {/* Navigation Links */}
//         <ul
//           className={`navbar-links ${navMenuOpen ? "navbar-links-open" : ""}`}
//         >
//           <li className="navbar-link navbar-link-active">
//             <a href="/">HOME</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/about">ABOUT</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/blog">BLOG</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/contactus">CONTACT US</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/store">STORE</a>
//           </li>
//         </ul>

//         {/* Search */}
//         <div className="navbar-search">
//           <FontAwesomeIcon icon={faSearch} className="navbar-search-icon" />
//         </div>
//       </nav>

//       {/* Sidebar */}
//       <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
//         <div className="sidebar-header">
//           <div className="sidebar-logo">
//             <FontAwesomeIcon icon={faBook} className="sidebar-logo-icon" />
//             <span className="sidebar-logo-text">
//               BOOK<span className="sidebar-logo-highlight">lovers</span>
//             </span>
//           </div>
//           <FontAwesomeIcon
//             icon={faTimes}
//             className="sidebar-close"
//             onClick={() => setSidebarOpen(false)}
//           />
//         </div>
//         <ul className="sidebar-links">
//           <li className="navbar-link navbar-link-active">
//             <a href="/">HOME</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/about">ABOUT</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/blog">BLOG</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/contactus">CONTACT US</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/store">STORE</a>
//           </li>
//         </ul>
//         {/* <div className="sidebar-footer">
//           <FontAwesomeIcon icon={faFacebook} className="sidebar-icon" />
//           <FontAwesomeIcon icon={faTwitter} className="sidebar-icon" />
//           <FontAwesomeIcon icon={faInstagram} className="sidebar-icon" />
//         </div> */}
//         {/* 👤 Profile Icon */}
//            <Link to="/profile" className="navbar-profile-icon">
//             <i className="navbar-icon">👤</i>
//         </Link>
//       </div>

//       {/* Overlay (for Sidebar Close) */}
//       {sidebarOpen && (
//         <div
//           className="sidebar-overlay"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// // Import Font Awesome components
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPhone,
//   faBook,
//   faShoppingCart,
//   faHeart,
//   faSearch,
//   faBars,
//   faTimes,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

// const Navbar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [navMenuOpen, setNavMenuOpen] = useState(false);
//   const [favoriteCount, setFavoriteCount] = useState(0);

//   return (
//     <div className="navbar-container">
//       {/* 🔝 Top Bar */}
//       <div className="navbar-topbar">
//         <p className="navbar-welcome">Welcome to Our Publishing House!</p>
//         <div className="navbar-topbar-right">
//           <span className="navbar-login">
//             <Link to="/login">Login</Link>
//           </span>
//           or
//           <span className="navbar-register">
//             <Link to="/register">Register</Link>
//           </span>
//           {/* Profile Icon (replacing social media icons) */}
//           <Link to="/profile" className="navbar-profile-icon">
//             <FontAwesomeIcon icon={faUser} className="navbar-icon" />
//           </Link>
//         </div>
//       </div>

//       {/* 🧭 Header */}
//       <div className="navbar-header">
//         {/* Contact Info */}
//         <div className="navbar-contact">
//           <FontAwesomeIcon icon={faPhone} className="navbar-contact-icon" />
//           <p>
//             Free call: <span>123-456-7890</span>
//           </p>
//         </div>

//         {/* Logo */}
//         <div className="navbar-logo">
//           <FontAwesomeIcon icon={faBook} className="navbar-logo-icon" />
//           <span className="navbar-logo-text">
//             BOOK<span className="navbar-logo-highlight">lovers</span>
//           </span>
//           <p className="navbar-tagline">Your Favorite Bookshelf!</p>
//         </div>

//         {/* Action buttons container */}
//         <div className="navbar-actions">
//           {/* Favorites */}
//           <div className="navbar-favorites">
//             <Link to="/favorites">
//               <FontAwesomeIcon
//                 icon={faHeart}
//                 className="navbar-favorites-icon"
//               />
//               <span className="navbar-favorites-badge">{favoriteCount}</span>
//             </Link>
//           </div>

//           {/* Cart */}
//           <div className="navbar-cart">
//             <FontAwesomeIcon
//               icon={faShoppingCart}
//               className="navbar-cart-icon"
//             />
//             <span className="navbar-cart-badge">0</span>
//           </div>
//         </div>
//       </div>

//       {/* 🔽 Navbar Links */}
//       <nav className="navbar-menu">
//         {/* Toggle for Small Devices */}
//         <div
//           className="navbar-small-toggle"
//           onClick={() => setNavMenuOpen(!navMenuOpen)}
//         >
//           <FontAwesomeIcon
//             icon={navMenuOpen ? faTimes : faBars}
//             className="navbar-toggle-icon"
//           />
//         </div>

//         {/* Toggle for Sidebar (Large Devices) */}
//         <div
//           className="navbar-sidebar-toggle"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//         >
//           <FontAwesomeIcon
//             icon={sidebarOpen ? faTimes : faBars}
//             className="navbar-toggle-icon"
//           />
//         </div>

//         {/* Navigation Links */}
//         <ul
//           className={`navbar-links ${navMenuOpen ? "navbar-links-open" : ""}`}
//         >
//           <li className="navbar-link navbar-link-active">
//             <a href="/" className="nav-items">
//               HOME
//             </a>
//           </li>
//           <li className="navbar-link">
//             <a href="/about" className="nav-items">
//               ABOUT
//             </a>
//           </li>
//           <li className="navbar-link">
//             <a href="/blog" className="nav-items">
//               BLOG
//             </a>
//           </li>
//           <li className="navbar-link">
//             <a href="/contactus" className="nav-items">
//               CONTACT US
//             </a>
//           </li>
//           <li className="navbar-link">
//             <a href="/store" className="nav-items">
//               STORE
//             </a>
//           </li>
//         </ul>

//         {/* Search */}
//         <div className="navbar-search">
//           <FontAwesomeIcon icon={faSearch} className="navbar-search-icon" />
//         </div>
//       </nav>

//       {/* Sidebar */}
//       <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
//         <div className="sidebar-header">
//           <div className="sidebar-logo">
//             <FontAwesomeIcon icon={faBook} className="sidebar-logo-icon" />
//             <span className="sidebar-logo-text">
//               BOOK<span className="sidebar-logo-highlight">lovers</span>
//             </span>
//           </div>
//           <FontAwesomeIcon
//             icon={faTimes}
//             className="sidebar-close"
//             onClick={() => setSidebarOpen(false)}
//           />
//         </div>
//         <ul className="sidebar-links">
//           <li className="navbar-link navbar-link-active">
//             <a href="/" className="">
//               HOME
//             </a>
//           </li>
//           <li className="navbar-link">
//             <a href="/about">ABOUT</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/blog">BLOG</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/contactus">CONTACT US</a>
//           </li>
//           <li className="navbar-link">
//             <a href="/store">STORE</a>
//           </li>
//         </ul>

//         {/* Profile Icon in Sidebar */}
//         <Link to="/profile" className="sidebar-profile-icon">
//           <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
//         </Link>
//       </div>

//       {/* Overlay (for Sidebar Close) */}
//       {sidebarOpen && (
//         <div
//           className="sidebar-overlay"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// Import Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faBook,
  faShoppingCart,
  faHeart,
  faSearch,
  faBars,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);

  return (
    <div className="navbar-container">
      {/* 🔝 Top Bar */}
      <div className="navbar-topbar">
        <p className="navbar-welcome">Welcome to Our Publishing House!</p>
        <div className="navbar-topbar-right">
          <span className="navbar-login">
            <Link to="/login">Login</Link>
          </span>
          |
          <span className="navbar-register">
            <Link to="/register">Register</Link>
          </span>
          |
          <span className="navbar-logout">
            <Link to="/logout">Logout</Link>
          </span>
          {/* Profile Icon (replacing social media icons) */}
          <Link to="/profile" className="navbar-profile-icon">
            <FontAwesomeIcon icon={faUser} className="navbar-icon" />
          </Link>
        </div>
      </div>

      {/* 🧭 Header */}
      <div className="navbar-header">
        {/* Contact Info */}
        <div className="navbar-contact">
          <FontAwesomeIcon icon={faPhone} className="navbar-contact-icon" />
          <p>
            Free call: <span>123-456-7890</span>
          </p>
        </div>

        {/* Logo */}
        <div className="navbar-logo">
          <FontAwesomeIcon icon={faBook} className="navbar-logo-icon" />
          <span className="navbar-logo-text">
            BOOK<span className="navbar-logo-highlight">lovers</span>
          </span>
          <p className="navbar-tagline">Your Favorite Bookshelf!</p>
        </div>

        {/* Action buttons container */}
        <div className="navbar-actions">
          {/* Favorites */}
          <div className="navbar-favorites">
            <Link to="/favorites">
              <FontAwesomeIcon
                icon={faHeart}
                className="navbar-favorites-icon"
              />
              <span className="navbar-favorites-badge">{favoriteCount}</span>
            </Link>
          </div>

          {/* Cart */}
          <div className="navbar-cart">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="navbar-cart-icon"
            />
            <span className="navbar-cart-badge">0</span>
          </div>
        </div>
      </div>

      {/* 🔽 Navbar Links */}
      <nav className="navbar-menu">
        {/* Toggle for Small Devices */}
        <div
          className="navbar-small-toggle"
          onClick={() => setNavMenuOpen(!navMenuOpen)}
        >
          <FontAwesomeIcon
            icon={navMenuOpen ? faTimes : faBars}
            className="navbar-toggle-icon"
          />
        </div>

        {/* Toggle for Sidebar (Large Devices) */}
        <div
          className="navbar-sidebar-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FontAwesomeIcon
            icon={sidebarOpen ? faTimes : faBars}
            className="navbar-toggle-icon"
          />
        </div>

        {/* Navigation Links */}
        <ul
          className={`navbar-links ${navMenuOpen ? "navbar-links-open" : ""}`}
        >
          <li className="navbar-link navbar-link-active">
            <a href="/" className="nav-items">
              HOME
            </a>
          </li>
          <li className="navbar-link">
            <a href="/about" className="nav-items">
              ABOUT
            </a>
          </li>
          <li className="navbar-link">
            <a href="/blog" className="nav-items">
              BLOG
            </a>
          </li>
          <li className="navbar-link">
            <a href="/contactus" className="nav-items">
              CONTACT US
            </a>
          </li>
          <li className="navbar-link">
            <a href="/store" className="nav-items">
              STORE
            </a>
          </li>
        </ul>

        {/* Search */}
        <div className="navbar-search">
          <FontAwesomeIcon icon={faSearch} className="navbar-search-icon" />
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <FontAwesomeIcon icon={faBook} className="sidebar-logo-icon" />
            <span className="sidebar-logo-text">
              BOOK<span className="sidebar-logo-highlight">lovers</span>
            </span>
          </div>
          <FontAwesomeIcon
            icon={faTimes}
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
        <ul className="sidebar-links">
          <li className="navbar-link navbar-link-active">
            <a href="/" className="">
              HOME
            </a>
          </li>
          <li className="navbar-link">
            <a href="/about">ABOUT</a>
          </li>
          <li className="navbar-link">
            <a href="/blog">BLOG</a>
          </li>
          <li className="navbar-link">
            <a href="/contactus">CONTACT US</a>
          </li>
          <li className="navbar-link">
            <a href="/store">STORE</a>
          </li>
        </ul>

        {/* Profile Icon in Sidebar */}
        <Link to="/profile" className="sidebar-profile-icon">
          <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
        </Link>
      </div>

      {/* Overlay (for Sidebar Close) */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;