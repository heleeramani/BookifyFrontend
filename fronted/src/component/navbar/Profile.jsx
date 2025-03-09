// // // import React, { useEffect } from "react";
// // // import "./Profile.css";
// // // import ProfileImg from "../blog/images/blog-img1.jpg"

// // // const Profile = () => {
// // //   useEffect(() => {
// // //     const counters = document.querySelectorAll(".counter");
// // //     counters.forEach((counter) => {
// // //       counter.innerText = "0";
// // //       const updateCounter = () => {
// // //         const target = +counter.getAttribute("data-target");
// // //         const count = +counter.innerText;
// // //         const increment = target / 100;
// // //         if (count < target) {
// // //           counter.innerText = Math.ceil(count + increment);
// // //           setTimeout(updateCounter, 20);
// // //         } else {
// // //           counter.innerText = target;
// // //         }
// // //       };
// // //       updateCounter();
// // //     });
// // //   }, []);

// // //   return (
// // //     <div className="card-container1">
// // //       <div className="card">
// // //         <img
// // //           src={ProfileImg}
// // //           alt="Profile"
// // //           className="profile-img"
// // //         />
// // //         <div className="name">Mary Robins</div>
// // //         <div className="title">Architect</div>
// // //         <p className="bio">
// // //           Vitae ipsum in congue et ornare dapibus elementum wisi posuere
// // //           vivamus.
// // //         </p>
// // //         <div className="feild">
// // //           <span>Email :</span>
// // //           <span>hello@gmail.com</span>
// // //         </div>
// // //         <div className="feild">
// // //           <span>Gender :</span>
// // //           <span>Female</span>
// // //         </div>
// // //         <div className="feild">
// // //           <span>Age :</span>
// // //           <span>21</span>
// // //         </div>
// // //         <div className="stats">
// // //           <div>
// // //             <i className="fa fa-camera"></i>
// // //             <p data-target="22" className="counter">
// // //               0
// // //             </p>
// // //           </div>
// // //           <div>
// // //             <i className="fa fa-heart"></i>
// // //             <p data-target="100" className="counter">
// // //               0
// // //             </p>
// // //           </div>
// // //           <div>
// // //             <i className="fa fa-user"></i>
// // //             <p data-target="52" className="counter">
// // //               0
// // //             </p>
// // //           </div>
// // //         </div>
// // //         <button className="edit-btn">Edit</button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Profile;

// // import React from "react";
// // import "./Profile .css";

// // const Profile = () => {
// //   return (
// //     <div className="profile-container">
// //       <div className="profile-card">
// //         <div className="profile-header">
// //           <div className="profile-image">
// //             <img src="/fronted/src/component/blog/images/blog-img1.jpg" alt="Profile" />
// //             <div className="change-photo">Change Photo</div>
// //           </div>
// //           <div className="profile-info">
// //             <h1>Kshiti Ghelani</h1>
// //             <p className="profession">Web Developer and Designer</p>
// //             <p className="ranking">Rankings: <strong>8/10</strong></p>
// //             <button className="edit-profile">Edit Profile</button>
// //           </div>
// //         </div>
// //         <div className="profile-tabs">
// //           <a href="#" className="active">About</a>
// //         </div>
// //         <div className="profile-details">
// //           <div className="work-links">
// //             <h2>Work Links</h2>
// //             <p><a href="#">Website Link</a></p>
// //             <p><a href="#">Bootsnipp Profile</a></p>
// //             <p><a href="#">Bootply Profile</a></p>
// //           </div>
// //           <div className="skills">
// //             <h2>Skills</h2>
// //             <p>Web Designer, Web Developer, WordPress, WooCommerce, PHP, .Net</p>
// //           </div>
// //           <div className="contact-info">
// //             <h2>Contact Information</h2>
// //             <p><strong>User ID:</strong> Kshiti123</p>
// //             <p><strong>Email:</strong> kshitighelani@gmail.com</p>
// //             <p><strong>Phone:</strong> 123 456 7890</p>
// //             <p><strong>Profession:</strong> Web Developer and Designer</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;

// import { useState } from "react";

// const ProfilePage = () => {
//   const [activeTab, setActiveTab] = useState("profile");

//   return (
//     <div className="flex justify-center bg-gray-100 p-5 min-h-screen">
//       <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-5">
//         {/* Profile Header */}
//         <div className="flex items-center gap-5 border-b-2 border-gray-300 pb-4">
//           <div className="w-16 h-16 overflow-hidden rounded-full">
//             <img
//               src="/fronted/src/component/blog/images/blog-img1.jpg"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div>
//             <h2 className="text-xl font-semibold">Hemanshi Rameshbhai Galani</h2>
//             <p className="text-gray-600">Web Designer</p>
//             <p className="text-gray-600">9913741495</p>
//             <p className="text-gray-600">User ID: 101</p>
//           </div>
//         </div>

//         {/* Profile Tabs */}
//         <div className="flex gap-5 py-4 border-b-2 border-gray-300">
//           {[
//             { id: "profile", label: "PROFILE" },
//             { id: "borrowed", label: "BORROWED" },
//             { id: "fine", label: "FINE" },
//           ].map((tab) => (
//             <span
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`cursor-pointer font-bold px-2 pb-1 ${
//                 activeTab === tab.id
//                   ? "text-black border-b-4 border-black"
//                   : "text-gray-500"
//               }`}
//             >
//               {tab.label}
//             </span>
//           ))}
//         </div>

//         {/* Tab Content */}
//         <div className="mt-5">
//           {activeTab === "profile" && (
//             <div>
//               {/* Primary Details */}
//               <div className="bg-gray-100 p-4 rounded-lg mb-5">
//                 <h3 className="flex justify-between text-lg font-semibold mb-3">
//                   Primary Details <span className="text-blue-500 cursor-pointer">Edit</span>
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   <p><strong>First Name:</strong> Hemanshi</p>
//                   <p><strong>Middle Name:</strong> Rameshbhai</p>
//                   <p><strong>Last Name:</strong> Galani</p>
//                   <p><strong>Gender:</strong> Female</p>
//                   <p><strong>Date of Birth:</strong> 08 Oct, 2004</p>
//                   <p><strong>Marital Status:</strong> Single</p>
//                 </div>
//               </div>

//               {/* Contact Details */}
//               <div className="bg-gray-100 p-4 rounded-lg">
//                 <h3 className="flex justify-between text-lg font-semibold mb-3">
//                   Contact Details <span className="text-blue-500 cursor-pointer">Edit</span>
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   <p><strong>Email:</strong> galanihemanshi@gmail.com</p>
//                   <p><strong>Mobile Number:</strong> +91-7359098284</p>
//                   <p><strong>Phone Number:</strong> 9913741495</p>
//                   <p><strong>Address:</strong> A40, Yoginagar Society, Yogichowk, Surat</p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === "borrowed" && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//               <p><strong>Book Name:</strong> Novel</p>
//               <p><strong>Borrowed Date:</strong> 22/02/2022</p>
//               <p><strong>Due Date:</strong> 28/02/2022</p>
//             </div>
//           )}

//           {activeTab === "fine" && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//               <p><strong>Book Name:</strong> Novel</p>
//               <p><strong>Fine Amount:</strong> 20</p>
//               <p><strong>Date:</strong> 28/02/2022</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="profile-main">
      <div className="profile-container">
        <div className="profile-header">
          <div className="avatar">
            <img
              src="/fronted/src/component/blog/images/blog-img1.jpg"
              alt="Profile Image"
            />
          </div>
          <div className="profile-info">
            <h2>Hemanshi Rameshbhai Galani</h2>
            <p className="position">Web designer</p>
            <p className="contact">9913741495</p>
            <p className="user-id">101</p>
          </div>
        </div>

        <div className="profile-tabs">
          <span
            data-tab="profile"
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => openTab("profile")}
          >
            PROFILE
          </span>
          <span
            data-tab="borrowed"
            className={activeTab === "borrowed" ? "active" : ""}
            onClick={() => openTab("borrowed")}
          >
            BORROWED
          </span>
          <span
            data-tab="fine"
            className={activeTab === "fine" ? "active" : ""}
            onClick={() => openTab("fine")}
          >
            FINE
          </span>
        </div>

        <div className="profile-content">
          {activeTab === "profile" && (
            <div id="profile" className="tab-content active">
              <div className="primary-details">
                <h3>
                  Primary Details <span className="edit">Edit</span>
                </h3>
                <div className="details-grid">
                  <p>
                    <strong>First Name:</strong> Hemanshi
                  </p>
                  <p>
                    <strong>Middle Name:</strong> Rameshbhai
                  </p>
                  <p>
                    <strong>Last Name:</strong> Galani
                  </p>
                  <p>
                    <strong>Gender:</strong> Female
                  </p>
                  <p>
                    <strong>Date of Birth:</strong> 08 Oct, 2004
                  </p>
                  <p>
                    <strong>Marital Status:</strong> Single
                  </p>
                </div>
              </div>

              <div className="contact-details">
                <h3>
                  Contact Details <span className="edit">Edit</span>
                </h3>
                <div className="details-grid">
                  <p>
                    <strong>Email:</strong> galanihemanshi@gmail.com
                  </p>
                  <p>
                    <strong>Mobile Number:</strong> +91-7359098284
                  </p>
                  <p>
                    <strong>Phone Number:</strong> 9913741495
                  </p>
                  <p>
                    <strong>Address:</strong> A40, Yoginagar Society, Yogichowk,
                    Surat
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "borrowed" && (
            <div id="borrowed" className="tab-content active">
              <div className="details-grid">
                <p>
                  <strong>Book Name:</strong> Novel
                </p>
                <p>
                  <strong>Borrowed date:</strong> 22/02/2022
                </p>
                <p>
                  <strong>Due date:</strong> 28/02/2022
                </p>
              </div>
            </div>
          )}

          {activeTab === "fine" && (
            <div id="fine" className="tab-content active">
              <div className="details-grid">
                <p>
                  <strong>Book Name:</strong> Novel
                </p>
                <p>
                  <strong>Fine amount:</strong> 20
                </p>
                <p>
                  <strong>Date:</strong> 28/02/2022
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
