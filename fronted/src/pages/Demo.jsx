// import React from "react";
// import BookCategory from "../component/home/component/BookCategory";
// import FeaturesSection from "../component/home/component/FeaturesSection";
// import Slider from "../component/home/component/Slider";
// import Elementor from "../component/home/component/Elementor";
// import DiscoverBook from "../component/home/component/DiscoverBook";
// import AuthorUpdate from "../component/home/component/AuthorUpdate";
// import ReadingBanner from "../component/home/component/ReadingBanner";
// import BestSeller from "../component/home/component/BestSeller";
// import MostRecentArtical from "../component/home/component/MostRecentArtical";
// import Navbar from "../component/navbar/Navbar";
// import PageTile from "../component/pageTile/PageTile";

// const Demo = () => {
//   return (
//     <div>
//         <Navbar />
//          {/* <PageTile
//         title="About Us"
//         breadcrumbs={[
//           { label: "Home", link: "/", active: false },
//           { label: "About Us", active: true },
//         ]}
//       /> */}
//         {/* <Footer/> */}
//       {/* <Slider /> */}
//       {/* <BookCategory /> */}
//       {/* <FeaturesSection /> */}
//       {/* <Elementor /> */}
//       {/* <DiscoverBook /> */}
//       {/* <AuthorUpdate /> */}
//       {/* <ReadingBanner /> */}
//       {/* <BestSeller /> */}
//       {/* <MostRecentArtical /> */}
//     </div>
//   );
// };

// export default Demo;
import React from "react";
import "../styles/Demo.css";
import { FiLogOut } from "react-icons/fi";

const Demo = () => {
  return (
    <div className="admin-dashboard-container">
      {/* Top Bar */}
      <div className="admin-topbar">
        <h2>Dashboard</h2>
        <button className="logout-btn">
          <FiLogOut className="logout-icon" /> Logout
        </button>
      </div>

      {/* Dashboard Summary */}
      <div className="dashboard-summary">
        <div className="summary-card">
          <span className="summary-title">TOTAL USERS</span>
          <span className="summary-value">7</span>
        </div>
        <div className="summary-card">
          <span className="summary-title">TOTAL CATEGORIES</span>
          <span className="summary-value">2</span>
        </div>
        <div className="summary-card">
          <span className="summary-title">TOTAL PRODUCTS</span>
          <span className="summary-value">3</span>
        </div>
        <div className="summary-card">
          <span className="summary-title">TOTAL BANNERS</span>
          <span className="summary-value">5</span>
        </div>
      </div>
    </div>
  );
};

export default Demo;
