// // // // // // // import React, { useEffect } from "react";
// // // // // // // import "./Profile.css";
// // // // // // // import ProfileImg from "../blog/images/blog-img1.jpg"

// // // // // // // const Profile = () => {
// // // // // // //   useEffect(() => {
// // // // // // //     const counters = document.querySelectorAll(".counter");
// // // // // // //     counters.forEach((counter) => {
// // // // // // //       counter.innerText = "0";
// // // // // // //       const updateCounter = () => {
// // // // // // //         const target = +counter.getAttribute("data-target");
// // // // // // //         const count = +counter.innerText;
// // // // // // //         const increment = target / 100;
// // // // // // //         if (count < target) {
// // // // // // //           counter.innerText = Math.ceil(count + increment);
// // // // // // //           setTimeout(updateCounter, 20);
// // // // // // //         } else {
// // // // // // //           counter.innerText = target;
// // // // // // //         }
// // // // // // //       };
// // // // // // //       updateCounter();
// // // // // // //     });
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div className="card-container1">
// // // // // // //       <div className="card">
// // // // // // //         <img
// // // // // // //           src={ProfileImg}
// // // // // // //           alt="Profile"
// // // // // // //           className="profile-img"
// // // // // // //         />
// // // // // // //         <div className="name">Mary Robins</div>
// // // // // // //         <div className="title">Architect</div>
// // // // // // //         <p className="bio">
// // // // // // //           Vitae ipsum in congue et ornare dapibus elementum wisi posuere
// // // // // // //           vivamus.
// // // // // // //         </p>
// // // // // // //         <div className="feild">
// // // // // // //           <span>Email :</span>
// // // // // // //           <span>hello@gmail.com</span>
// // // // // // //         </div>
// // // // // // //         <div className="feild">
// // // // // // //           <span>Gender :</span>
// // // // // // //           <span>Female</span>
// // // // // // //         </div>
// // // // // // //         <div className="feild">
// // // // // // //           <span>Age :</span>
// // // // // // //           <span>21</span>
// // // // // // //         </div>
// // // // // // //         <div className="stats">
// // // // // // //           <div>
// // // // // // //             <i className="fa fa-camera"></i>
// // // // // // //             <p data-target="22" className="counter">
// // // // // // //               0
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //           <div>
// // // // // // //             <i className="fa fa-heart"></i>
// // // // // // //             <p data-target="100" className="counter">
// // // // // // //               0
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //           <div>
// // // // // // //             <i className="fa fa-user"></i>
// // // // // // //             <p data-target="52" className="counter">
// // // // // // //               0
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <button className="edit-btn">Edit</button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Profile;

// // // // // // import React from "react";
// // // // // // import "./Profile .css";

// // // // // // const Profile = () => {
// // // // // //   return (
// // // // // //     <div className="profile-container">
// // // // // //       <div className="profile-card">
// // // // // //         <div className="profile-header">
// // // // // //           <div className="profile-image">
// // // // // //             <img src="/fronted/src/component/blog/images/blog-img1.jpg" alt="Profile" />
// // // // // //             <div className="change-photo">Change Photo</div>
// // // // // //           </div>
// // // // // //           <div className="profile-info">
// // // // // //             <h1>Kshiti Ghelani</h1>
// // // // // //             <p className="profession">Web Developer and Designer</p>
// // // // // //             <p className="ranking">Rankings: <strong>8/10</strong></p>
// // // // // //             <button className="edit-profile">Edit Profile</button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="profile-tabs">
// // // // // //           <a href="#" className="active">About</a>
// // // // // //         </div>
// // // // // //         <div className="profile-details">
// // // // // //           <div className="work-links">
// // // // // //             <h2>Work Links</h2>
// // // // // //             <p><a href="#">Website Link</a></p>
// // // // // //             <p><a href="#">Bootsnipp Profile</a></p>
// // // // // //             <p><a href="#">Bootply Profile</a></p>
// // // // // //           </div>
// // // // // //           <div className="skills">
// // // // // //             <h2>Skills</h2>
// // // // // //             <p>Web Designer, Web Developer, WordPress, WooCommerce, PHP, .Net</p>
// // // // // //           </div>
// // // // // //           <div className="contact-info">
// // // // // //             <h2>Contact Information</h2>
// // // // // //             <p><strong>User ID:</strong> Kshiti123</p>
// // // // // //             <p><strong>Email:</strong> kshitighelani@gmail.com</p>
// // // // // //             <p><strong>Phone:</strong> 123 456 7890</p>
// // // // // //             <p><strong>Profession:</strong> Web Developer and Designer</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Profile;

// // // // // import { useState } from "react";

// // // // // const ProfilePage = () => {
// // // // //   const [activeTab, setActiveTab] = useState("profile");

// // // // //   return (
// // // // //     <div className="flex justify-center bg-gray-100 p-5 min-h-screen">
// // // // //       <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-5">
// // // // //         {/* Profile Header */}
// // // // //         <div className="flex items-center gap-5 border-b-2 border-gray-300 pb-4">
// // // // //           <div className="w-16 h-16 overflow-hidden rounded-full">
// // // // //             <img
// // // // //               src="/fronted/src/component/blog/images/blog-img1.jpg"
// // // // //               alt="Profile"
// // // // //               className="w-full h-full object-cover"
// // // // //             />
// // // // //           </div>
// // // // //           <div>
// // // // //             <h2 className="text-xl font-semibold">Hemanshi Rameshbhai Galani</h2>
// // // // //             <p className="text-gray-600">Web Designer</p>
// // // // //             <p className="text-gray-600">9913741495</p>
// // // // //             <p className="text-gray-600">User ID: 101</p>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Profile Tabs */}
// // // // //         <div className="flex gap-5 py-4 border-b-2 border-gray-300">
// // // // //           {[
// // // // //             { id: "profile", label: "PROFILE" },
// // // // //             { id: "borrowed", label: "BORROWED" },
// // // // //             { id: "fine", label: "FINE" },
// // // // //           ].map((tab) => (
// // // // //             <span
// // // // //               key={tab.id}
// // // // //               onClick={() => setActiveTab(tab.id)}
// // // // //               className={`cursor-pointer font-bold px-2 pb-1 ${
// // // // //                 activeTab === tab.id
// // // // //                   ? "text-black border-b-4 border-black"
// // // // //                   : "text-gray-500"
// // // // //               }`}
// // // // //             >
// // // // //               {tab.label}
// // // // //             </span>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Tab Content */}
// // // // //         <div className="mt-5">
// // // // //           {activeTab === "profile" && (
// // // // //             <div>
// // // // //               {/* Primary Details */}
// // // // //               <div className="bg-gray-100 p-4 rounded-lg mb-5">
// // // // //                 <h3 className="flex justify-between text-lg font-semibold mb-3">
// // // // //                   Primary Details <span className="text-blue-500 cursor-pointer">Edit</span>
// // // // //                 </h3>
// // // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
// // // // //                   <p><strong>First Name:</strong> Hemanshi</p>
// // // // //                   <p><strong>Middle Name:</strong> Rameshbhai</p>
// // // // //                   <p><strong>Last Name:</strong> Galani</p>
// // // // //                   <p><strong>Gender:</strong> Female</p>
// // // // //                   <p><strong>Date of Birth:</strong> 08 Oct, 2004</p>
// // // // //                   <p><strong>Marital Status:</strong> Single</p>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Contact Details */}
// // // // //               <div className="bg-gray-100 p-4 rounded-lg">
// // // // //                 <h3 className="flex justify-between text-lg font-semibold mb-3">
// // // // //                   Contact Details <span className="text-blue-500 cursor-pointer">Edit</span>
// // // // //                 </h3>
// // // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
// // // // //                   <p><strong>Email:</strong> galanihemanshi@gmail.com</p>
// // // // //                   <p><strong>Mobile Number:</strong> +91-7359098284</p>
// // // // //                   <p><strong>Phone Number:</strong> 9913741495</p>
// // // // //                   <p><strong>Address:</strong> A40, Yoginagar Society, Yogichowk, Surat</p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           )}

// // // // //           {activeTab === "borrowed" && (
// // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
// // // // //               <p><strong>Book Name:</strong> Novel</p>
// // // // //               <p><strong>Borrowed Date:</strong> 22/02/2022</p>
// // // // //               <p><strong>Due Date:</strong> 28/02/2022</p>
// // // // //             </div>
// // // // //           )}

// // // // //           {activeTab === "fine" && (
// // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
// // // // //               <p><strong>Book Name:</strong> Novel</p>
// // // // //               <p><strong>Fine Amount:</strong> 20</p>
// // // // //               <p><strong>Date:</strong> 28/02/2022</p>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProfilePage;

// // // // import React, { useState } from "react";
// // // // import "./Profile.css";

// // // // const Profile = () => {
// // // //   const [activeTab, setActiveTab] = useState("profile");

// // // //   const openTab = (tabName) => {
// // // //     setActiveTab(tabName);
// // // //   };

// // // //   return (
// // // //     <div className="profile-main">
// // // //       <div className="profile-container">
// // // //         <div className="profile-header">
// // // //           <div className="avatar">
// // // //             <img
// // // //               src="/fronted/src/component/blog/images/blog-img1.jpg"
// // // //               alt="Profile Image"
// // // //             />
// // // //           </div>
// // // //           <div className="profile-info">
// // // //             <h2>Hemanshi Rameshbhai Galani</h2>
// // // //             <p className="position">Web designer</p>
// // // //             <p className="contact">9913741495</p>
// // // //             <p className="user-id">101</p>
// // // //           </div>
// // // //         </div>

// // // //         <div className="profile-tabs">
// // // //           <span
// // // //             data-tab="profile"
// // // //             className={activeTab === "profile" ? "active" : ""}
// // // //             onClick={() => openTab("profile")}
// // // //           >
// // // //             PROFILE
// // // //           </span>
// // // //           <span
// // // //             data-tab="borrowed"
// // // //             className={activeTab === "borrowed" ? "active" : ""}
// // // //             onClick={() => openTab("borrowed")}
// // // //           >
// // // //             BORROWED
// // // //           </span>
// // // //           <span
// // // //             data-tab="fine"
// // // //             className={activeTab === "fine" ? "active" : ""}
// // // //             onClick={() => openTab("fine")}
// // // //           >
// // // //             FINE
// // // //           </span>
// // // //         </div>

// // // //         <div className="profile-content">
// // // //           {activeTab === "profile" && (
// // // //             <div id="profile" className="tab-content active">
// // // //               <div className="primary-details">
// // // //                 <h3>
// // // //                   Primary Details <span className="edit">Edit</span>
// // // //                 </h3>
// // // //                 <div className="details-grid">
// // // //                   <p>
// // // //                     <strong>First Name:</strong> Hemanshi
// // // //                   </p>
// // // //                   <p>
// // // //                     <strong>Middle Name:</strong> Rameshbhai
// // // //                   </p>
// // // //                   <p>
// // // //                     <strong>Last Name:</strong> Galani
// // // //                   </p>
// // // //                   <p>
// // // //                     <strong>Gender:</strong> Female
// // // //                   </p>
// // // //                   <p>
// // // //                     <strong>Date of Birth:</strong> 08 Oct, 2004
// // // //                   </p>
// // // //                   <p>
// // // //                     <strong>Marital Status:</strong> Single
// // // //                   </p>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="contact-details">
// // // //                 <h3>
// // // //                   Contact Details <span className="edit">Edit</span>
// // // //                 </h3>
// // // //                 <div className="details-grid">
// // // //                   <p>
// // // //                     <strong>Email:</strong> galanihemanshi@gmail.com
// // // //                   </p>
// // // //                   <p>
// // // //                     <strong>Mobile Number:</strong> +91-7359098284
// // // //                   </p>
// // // //                   <p>
// // // //                     <strong>Phone Number:</strong> 9913741495
// // // //                   </p>
// // // //                   <p>
// // // //                     <strong>Address:</strong> A40, Yoginagar Society, Yogichowk,
// // // //                     Surat
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           )}

// // // //           {activeTab === "borrowed" && (
// // // //             <div id="borrowed" className="tab-content active">
// // // //               <div className="details-grid">
// // // //                 <p>
// // // //                   <strong>Book Name:</strong> Novel
// // // //                 </p>
// // // //                 <p>
// // // //                   <strong>Borrowed date:</strong> 22/02/2022
// // // //                 </p>
// // // //                 <p>
// // // //                   <strong>Due date:</strong> 28/02/2022
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           )}

// // // //           {activeTab === "fine" && (
// // // //             <div id="fine" className="tab-content active">
// // // //               <div className="details-grid">
// // // //                 <p>
// // // //                   <strong>Book Name:</strong> Novel
// // // //                 </p>
// // // //                 <p>
// // // //                   <strong>Fine amount:</strong> 20
// // // //                 </p>
// // // //                 <p>
// // // //                   <strong>Date:</strong> 28/02/2022
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Profile;

// // //   import React, { useState } from 'react';

// // //   // Main Profile Component
// // //   const Profile = () => {
// // //     const [activeTab, setActiveTab] = useState('profile');
// // //     const [showEditForm, setShowEditForm] = useState(false);

// // //     const openTab = (tabName) => {
// // //       setActiveTab(tabName);
// // //     };

// // //     const handleEdit = () => {
// // //       setShowEditForm(true);
// // //     };

// // //     const handleSave = () => {
// // //       setShowEditForm(false);
// // //     };

// // //     return (
// // //       <>
// // //         {!showEditForm ? (
// // //           <div className="main">
// // //             <div className="profile-container">
// // //               <div className="profile-header">
// // //                 <div className="avatar">
// // //                   <img src="/fronted/src/component/blog/images/blog-img1.jpg" alt="Profile Image" />
// // //                 </div>
// // //                 <div className="profile-info">
// // //                   <h2>Hemanshi Rameshbhai Galani</h2>
// // //                   <p className="position">Web designer</p>
// // //                   <p className="contact">9913741495</p>
// // //                   <p className="user-id">101</p>
// // //                 </div>
// // //               </div>
// // //               <div className="profile-tabs">
// // //                 <span
// // //                   className={activeTab === 'profile' ? 'active' : ''}
// // //                   onClick={() => openTab('profile')}
// // //                 >
// // //                   PROFILE
// // //                 </span>
// // //                 <span
// // //                   className={activeTab === 'borrowed' ? 'active' : ''}
// // //                   onClick={() => openTab('borrowed')}
// // //                 >
// // //                   BORROWED
// // //                 </span>
// // //                 <span
// // //                   className={activeTab === 'fine' ? 'active' : ''}
// // //                   onClick={() => openTab('fine')}
// // //                 >
// // //                   FINE
// // //                 </span>
// // //               </div>
// // //               <div className="profile-content">
// // //                 {activeTab === 'profile' && (
// // //                   <div id="profile" className="tab-content active">
// // //                     <div className="primary-details">
// // //                       <h3>Primary Details <span className="edit" onClick={handleEdit}>Edit</span></h3>
// // //                       <div className="details-grid">
// // //                         <p><strong>First Name:</strong> Hemanshi</p>
// // //                         <p><strong>Middle Name:</strong> Rameshbhai</p>
// // //                         <p><strong>Last Name:</strong> Galani</p>
// // //                         <p><strong>Gender:</strong> Female</p>
// // //                         <p><strong>Date of Birth:</strong> 08 Oct, 2004</p>
// // //                         <p><strong>Marital Status:</strong> Single</p>
// // //                       </div>
// // //                     </div>
// // //                     <div className="contact-details">
// // //                       <h3>Contact Details</h3>
// // //                       <div className="details-grid">
// // //                         <p><strong>Email:</strong> galanihemanshi@gmail.com</p>
// // //                         <p><strong>Mobile Number:</strong> +91-7359098284</p>
// // //                         <p><strong>Phone Number:</strong> 9913741495</p>
// // //                         <p><strong>Address:</strong> A40,yoginagar socity,yogichowk,surat</p>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 )}
// // //                 {activeTab === 'borrowed' && (
// // //                   <div id="borrowed" className="tab-content active">
// // //                     <h3>Borrowed Books</h3>
// // //                     <div className="table-container">
// // //                       <table>
// // //                         <thead>
// // //                           <tr>
// // //                             <th>Book Name</th>
// // //                             <th>Borrowed Date</th>
// // //                             <th>Due Date</th>
// // //                             <th>Action</th>
// // //                           </tr>
// // //                         </thead>
// // //                         <tbody>
// // //                           <tr>
// // //                             <td>Novel</td>
// // //                             <td>22/02/2022</td>
// // //                             <td>28/02/2022</td>
// // //                             <td><button type="submit" className="retun">Return</button></td>
// // //                           </tr>
// // //                         </tbody>
// // //                       </table>
// // //                     </div>
// // //                   </div>
// // //                 )}
// // //                 {activeTab === 'fine' && (
// // //                   <div id="fine" className="tab-content active">
// // //                     <h3>Fine Details</h3>
// // //                     <div className="table-container">
// // //                       <table>
// // //                         <thead>
// // //                           <tr>
// // //                             <th>Book Name</th>
// // //                             <th>Fine Amount</th>
// // //                             <th>Date</th>
// // //                             <th>Action</th>
// // //                           </tr>
// // //                         </thead>
// // //                         <tbody>
// // //                           <tr>
// // //                             <td>Novel</td>
// // //                             <td>20</td>
// // //                             <td>28/02/2022</td>
// // //                             <td><button type="submit" className="pay-fine">Pay Fine</button></td>
// // //                           </tr>
// // //                         </tbody>
// // //                       </table>
// // //                     </div>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ) : (
// // //           <EditProfileForm onSave={handleSave} />
// // //         )}
// // //       </>
// // //     );
// // //   };

// // //   // Edit Profile Form Component
// // //   const EditProfileForm = ({ onSave }) => {
// // //     return (
// // //       <div className="edit-main">
// // //         <div className="profile-edit-container">
// // //           <div className="tabs">
// // //             <button className="active">Edit Profile</button>
// // //           </div>
// // //           <div className="profile-content">
// // //             <div className="profile-form">
// // //               <div className="form-group">
// // //                 <label>Profile image</label>
// // //                 <input type="file"/>
// // //               </div>
// // //               <div className="form-group">
// // //                 <label>First Name</label>
// // //                 <input type="text" placeholder="Enter first name" />
// // //               </div>
// // //               <div className="form-group">
// // //                 <label>Middle Name</label>
// // //                 <input type="text" placeholder="Enter middlename" />
// // //               </div>
// // //               <div className="form-group">
// // //                 <label>Last Name</label>
// // //                 <input type="text" placeholder="Enter lastname" />
// // //               </div>
// // //               <div className="form-group">
// // //                 <label>Gender</label>
// // //                 <input type="text" placeholder="Enter gender" />
// // //               </div>
// // //               <div className="form-group">
// // //                 <label>Date of birth</label>
// // //                 <input type="date" />
// // //               </div>
// // //               <div className="form-group">
// // //                 <label>Marital Status</label>
// // //                 <input type="text" />
// // //               </div>
// // //               <div className="form-group">
// // //                 <label>Email</label>
// // //                 <input type="email" placeholder="Enter email" />
// // //               </div>
// // //               <div className="form-group">
// // //                 <label>Mobile Number</label>
// // //                 <input type="text" placeholder="Enter mobile number" />
// // //               </div>
// // //               <div className="form-group">
// // //                 <label>Address</label>
// // //                 <input type="text" placeholder="Enter address" />
// // //               </div>
// // //               <button className="save-btn" onClick={onSave}>Save</button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   // CSS Styles Component
// // //   const AppStyles = () => {
// // //     return (
// // //       <style jsx global>{`
// // //         * {
// // //           margin: 0;
// // //           padding: 0;
// // //           box-sizing: border-box;
// // //           font-family: Arial, sans-serif;
// // //         }
// // //         .main {
// // //           background: #f4f4f4;
// // //           display: flex;
// // //           justify-content: center;
// // //           padding: 20px;
// // //           height: 100vh;
// // //         }
// // //         .profile-container {
// // //           width: 100%;
// // //           max-width: 1000px;
// // //           background: white;
// // //           border-radius: 10px;
// // //           box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// // //           padding: 20px;
// // //         }
// // //         .profile-header {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 20px;
// // //           border-bottom: 2px solid #ddd;
// // //           padding-bottom: 15px;
// // //           flex-wrap: wrap;
// // //         }
// // //         .edit {
// // //           color: blue;
// // //           cursor: pointer;
// // //         }
// // //         .avatar img {
// // //           width: 60px;
// // //           height: 60px;
// // //           border-radius: 50%;
// // //           object-fit: cover;
// // //         }
// // //         .profile-tabs {
// // //           display: flex;
// // //           gap: 20px;
// // //           padding: 10px 0;
// // //           border-bottom: 2px solid #ddd;
// // //           overflow-x: auto;
// // //         }
// // //         .profile-tabs span {
// // //           cursor: pointer;
// // //           padding: 5px 10px;
// // //           font-weight: bold;
// // //           color: gray;
// // //           white-space: nowrap;
// // //         }
// // //         .profile-tabs .active {
// // //           color: black;
// // //           border-bottom: 3px solid black;
// // //         }
// // //         .profile-content {
// // //           margin-top: 20px;
// // //         }
// // //         .details-grid {
// // //           display: grid;
// // //           grid-template-columns: 1fr 1fr;
// // //           gap: 10px;
// // //           margin-bottom: 20px;
// // //         }
// // //         .tab-content {
// // //           display: none;
// // //         }
// // //         .tab-content.active {
// // //           display: block;
// // //         }
// // //         h3 {
// // //           display: flex;
// // //           justify-content: space-between;
// // //           font-size: 18px;
// // //           margin-bottom: 10px;
// // //         }
// // //         .table-container {
// // //           width: 100%;
// // //           overflow-x: auto;
// // //         }
// // //         table {
// // //           width: 100%;
// // //           border-collapse: collapse;
// // //           margin-bottom: 20px;
// // //         }
// // //         table, th, td {
// // //           border: 1px solid #ddd;
// // //         }
// // //         th, td {
// // //           padding: 10px;
// // //           text-align: left;
// // //           white-space: nowrap;
// // //         }
// // //         .retun, .pay-fine {
// // //           padding: 5px 10px;
// // //           background-color: blue;
// // //           border: 1px solid transparent;
// // //           border-radius: 3px;
// // //           color: white;
// // //         }
// // //         th {
// // //           background: #fafafa;
// // //         }
// // //         @media (max-width: 600px) {
// // //           .details-grid {
// // //             grid-template-columns: 1fr;
// // //           }
// // //           .profile-header {
// // //             flex-direction: column;
// // //             text-align: center;
// // //           }
// // //         }

// // //         /* Edit Form Styles */
// // //         .edit-main {
// // //           font-family: Arial, sans-serif;
// // //           background-color: #f4f7fc;
// // //           display: flex;
// // //           justify-content: center;
// // //           align-items: center;
// // //           height: 100vh;
// // //           margin: 0;
// // //         }

// // //         .profile-edit-container {
// // //           background: #fff;
// // //           padding: 20px;
// // //           border-radius: 10px;
// // //           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// // //           width: 600px;
// // //         }

// // //         .tabs {
// // //           display: flex;
// // //           border-bottom: 2px solid #ddd;
// // //           padding-bottom: 10px;
// // //           margin-bottom: 20px;
// // //         }

// // //         .tabs button {
// // //           background: none;
// // //           border: none;
// // //           padding: 10px 15px;
// // //           cursor: pointer;
// // //           font-size: 16px;
// // //           color: #555;
// // //         }

// // //         .tabs button.active {
// // //           border-bottom: 2px solid #007bff;
// // //           color: #007bff;
// // //           font-weight: bold;
// // //         }

// // //         .profile-form {
// // //           flex: 1;
// // //           display: grid;
// // //           grid-template-columns: repeat(2, 1fr);
// // //           gap: 15px;
// // //         }

// // //         .form-group {
// // //           display: flex;
// // //           flex-direction: column;
// // //         }

// // //         .form-group label {
// // //           font-size: 14px;
// // //           margin-bottom: 5px;
// // //           color: #333;
// // //         }

// // //         .form-group input {
// // //           padding: 8px;
// // //           border: 1px solid #ddd;
// // //           border-radius: 5px;
// // //           font-size: 14px;
// // //         }

// // //         .save-btn {
// // //           grid-column: span 2;
// // //           padding: 10px;
// // //           background-color: #007bff;
// // //           color: white;
// // //           border: none;
// // //           border-radius: 5px;
// // //           cursor: pointer;
// // //           font-size: 16px;
// // //           text-align: center;
// // //         }

// // //         .save-btn:hover {
// // //           background-color: #0056b3;
// // //         }
// // //       `}</style>
// // //     );
// // //   };
// // //   export default Profile

// // import React, { useEffect, useState } from 'react';
// // import './Profile.css'; // You'll need to create this CSS file separately
// // import axios from 'axios'
// // // Main Profile Component
// // const Profile = () => {
// //   const [activeTab, setActiveTab] = useState('profile');
// //   const [showEditForm, setShowEditForm] = useState(false);

// //   const openTab = (tabName) => {
// //     setActiveTab(tabName);
// //   };

// //   const handleEdit = () => {
// //     setShowEditForm(true);
// //   };

// //   const handleSave = () => {
// //     setShowEditForm(false);
// //   };

// //   // const fetchUser = async () => {
// //   //     try {
// //   //       const response = await axios.get(
// //   //         `${process.env.REACT_APP_BASE_URL}/user/profile/get`
// //   //       );
// //   //       console.log("fetchUser", response?.data?.data);

// //   //       // Check if response.data is an array or wrapped inside another object
// //   //       // const booksArray = Array.isArray(response.data)
// //   //       //   ? response.data
// //   //       //   : response.data?.data || [];
// //   //       // console.log(booksArray,"shhrreeee");

// //   //       // const formattedBooks = booksArray.map((book) => ({
// //   //       //   ...book,
// //   //       //   id: book._id,
// //   //       //   image: book.image ? book.image.url : "" // Check if image exists // Ensure DataGrid has an id
// //   //       // }));
// //   //       // console.log(formattedBooks,"hellllll");

// //   //       // setBook(formattedBooks);
// //   //     } catch (error) {
// //   //       console.log(error);
// //   //     }
// //   //   };

// //   const fetchUser = async () => {
// //     try {
// //       // Get the auth token from localStorage or wherever you're storing it
// //       const authToken = localStorage.getItem('authToken'); // Adjust this based on where you store your token

// //       const response = await axios.get(
// //         `${process.env.REACT_APP_BASE_URL}/user/profile/get`,
// //         {
// //           headers: {
// //             Authorization: authToken,
// //             "Content-Type": "application/json"
// //           }
// //         }
// //       );
// //       console.log("fetchUser", response?.data?.data);

// //       // Your existing code to process the response...

// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //     useEffect(() => {
// //       fetchUser();
// //       // console.log(book, "skjcskhc");
// //     }, []);

// //   return (
// //     <>
// //       {!showEditForm ? (
// //         <div className="main">
// //           <div className="profile-container">
// //             <div className="profile-header">
// //               <div className="avatar">
// //                 <img src="/fronted/src/component/blog/images/blog-img1.jpg" alt="Profile" />
// //               </div>
// //               <div className="profile-info">
// //                 <h2>Hemanshi Rameshbhai Galani</h2>
// //                 <div className="profile-metadata">
// //                   <span className="position">Web designer</span>
// //                   <span className="contact">9913741495</span>
// //                   <span className="user-id">ID: 101</span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="profile-tabs">
// //               <span
// //                 className={activeTab === 'profile' ? 'active' : ''}
// //                 onClick={() => openTab('profile')}
// //               >
// //                 PROFILE
// //               </span>
// //               <span
// //                 className={activeTab === 'borrowed' ? 'active' : ''}
// //                 onClick={() => openTab('borrowed')}
// //               >
// //                 BORROWED
// //               </span>
// //               <span
// //                 className={activeTab === 'fine' ? 'active' : ''}
// //                 onClick={() => openTab('fine')}
// //               >
// //                 FINE
// //               </span>
// //             </div>

// //             <div className="profile-content">
// //               {activeTab === 'profile' && (
// //                 <div id="profile" className="tab-content active">
// //                   <div className="info-card primary-details">
// //                     <h3>Primary Details <span className="edit" onClick={handleEdit}>Edit</span></h3>
// //                     <div className="details-grid">
// //                       <div className="detail-item">
// //                         <strong>First Name:</strong>
// //                         <span>Hemanshi</span>
// //                       </div>
// //                       <div className="detail-item">
// //                         <strong>Middle Name:</strong>
// //                         <span>Rameshbhai</span>
// //                       </div>
// //                       <div className="detail-item">
// //                         <strong>Last Name:</strong>
// //                         <span>Galani</span>
// //                       </div>
// //                       <div className="detail-item">
// //                         <strong>Gender:</strong>
// //                         <span>Female</span>
// //                       </div>
// //                       <div className="detail-item">
// //                         <strong>Date of Birth:</strong>
// //                         <span>08 Oct, 2004</span>
// //                       </div>
// //                       <div className="detail-item">
// //                         <strong>Marital Status:</strong>
// //                         <span>Single</span>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="info-card contact-details">
// //                     <h3>Contact Details</h3>
// //                     <div className="details-grid">
// //                       <div className="detail-item">
// //                         <strong>Email:</strong>
// //                         <span>galanihemanshi@gmail.com</span>
// //                       </div>
// //                       <div className="detail-item">
// //                         <strong>Mobile Number:</strong>
// //                         <span>+91-7359098284</span>
// //                       </div>
// //                       <div className="detail-item">
// //                         <strong>Phone Number:</strong>
// //                         <span>9913741495</span>
// //                       </div>
// //                       <div className="detail-item">
// //                         <strong>Address:</strong>
// //                         <span>A40, Yoginagar socity, Yogichowk, Surat</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}

// //               {activeTab === 'borrowed' && (
// //                 <div id="borrowed" className="tab-content active">
// //                   <div className="info-card">
// //                     <h3>Borrowed Books</h3>
// //                     <div className="table-container">
// //                       <table>
// //                         <thead>
// //                           <tr>
// //                             <th>Book Name</th>
// //                             <th>Borrowed Date</th>
// //                             <th>Due Date</th>
// //                             <th>Action</th>
// //                           </tr>
// //                         </thead>
// //                         <tbody>
// //                           <tr>
// //                             <td>Novel</td>
// //                             <td>22/02/2022</td>
// //                             <td>28/02/2022</td>
// //                             <td><button type="submit" className="action-btn return-btn">Return</button></td>
// //                           </tr>
// //                         </tbody>
// //                       </table>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}

// //               {activeTab === 'fine' && (
// //                 <div id="fine" className="tab-content active">
// //                   <div className="info-card">
// //                     <h3>Fine Details</h3>
// //                     <div className="table-container">
// //                       <table>
// //                         <thead>
// //                           <tr>
// //                             <th>Book Name</th>
// //                             <th>Fine Amount</th>
// //                             <th>Date</th>
// //                             <th>Action</th>
// //                           </tr>
// //                         </thead>
// //                         <tbody>
// //                           <tr>
// //                             <td>Novel</td>
// //                             <td>₹20</td>
// //                             <td>28/02/2022</td>
// //                             <td><button type="submit" className="action-btn pay-btn">Pay Fine</button></td>
// //                           </tr>
// //                         </tbody>
// //                       </table>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       ) : (
// //         <EditProfileForm onSave={handleSave} />
// //       )}
// //     </>
// //   );
// // };

// // // Edit Profile Form Component
// // const EditProfileForm = ({ onSave }) => {
// //   return (
// //     <div className="edit-main">
// //       <div className="profile-edit-container">
// //         <div className="edit-header">
// //           <h2>Edit Profile</h2>
// //         </div>

// //         <div className="profile-content">
// //           <form className="profile-form">
// //             <div className="form-group">
// //               <label>Profile image</label>
// //               <div className="file-input-container">
// //                 <input type="file" className="file-input"/>
// //                 <div className="file-input-button">Choose File</div>
// //               </div>
// //             </div>

// //             <div className="form-group">
// //               <label>First Name</label>
// //               <input type="text" placeholder="Enter first name" defaultValue="Hemanshi" />
// //             </div>

// //             <div className="form-group">
// //               <label>Middle Name</label>
// //               <input type="text" placeholder="Enter middle name" defaultValue="Rameshbhai" />
// //             </div>

// //             <div className="form-group">
// //               <label>Last Name</label>
// //               <input type="text" placeholder="Enter last name" defaultValue="Galani" />
// //             </div>

// //             <div className="form-group">
// //               <label>Gender</label>
// //               <select defaultValue="Female">
// //                 <option value="Female">Female</option>
// //                 <option value="Male">Male</option>
// //                 <option value="Other">Other</option>
// //               </select>
// //             </div>

// //             <div className="form-group">
// //               <label>Date of birth</label>
// //               <input type="date" defaultValue="2004-10-08" />
// //             </div>

// //             <div className="form-group">
// //               <label>Marital Status</label>
// //               <select defaultValue="Single">
// //                 <option value="Single">Single</option>
// //                 <option value="Married">Married</option>
// //                 <option value="Divorced">Divorced</option>
// //                 <option value="Widowed">Widowed</option>
// //               </select>
// //             </div>

// //             <div className="form-group">
// //               <label>Email</label>
// //               <input type="email" placeholder="Enter email" defaultValue="galanihemanshi@gmail.com" />
// //             </div>

// //             <div className="form-group">
// //               <label>Mobile Number</label>
// //               <input type="text" placeholder="Enter mobile number" defaultValue="+91-7359098284" />
// //             </div>

// //             <div className="form-group address-field">
// //               <label>Address</label>
// //               <input type="text" placeholder="Enter address" defaultValue="A40, Yoginagar socity, Yogichowk, Surat" />
// //             </div>

// //             <div className="form-actions">
// //               <button type="button" className="cancel-btn" onClick={onSave}>Cancel</button>
// //               <button type="button" className="save-btn" onClick={onSave}>Save Changes</button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;

// // import React, { useEffect, useState } from 'react';
// // import './Profile.css'; // You'll need to create this CSS file separately
// // import axios from 'axios';

// // // Main Profile Component
// // const Profile = () => {
// //   const [activeTab, setActiveTab] = useState('profile');
// //   const [showEditForm, setShowEditForm] = useState(false);
// //   const [userData, setUserData] = useState(null);
// //   const [isLoading, setIsLoading] = useState(true);

// //   const openTab = (tabName) => {
// //     setActiveTab(tabName);
// //   };

// //   const handleEdit = () => {
// //     setShowEditForm(true);
// //   };

// //   const handleSave = () => {
// //     setShowEditForm(false);
// //     // After saving, fetch the updated user data
// //     fetchUser();
// //   };

// //   const fetchUser = async () => {
// //     setIsLoading(true);
// //     try {
// //       const authToken = localStorage.getItem('authToken');

// //       const response = await axios.get(
// //         `${process.env.REACT_APP_BASE_URL}/user/profile/get`,
// //         {
// //           headers: {
// //             Authorization: authToken,
// //             "Content-Type": "application/json"
// //           }
// //         }
// //       );

// //       console.log("fetchUser", response?.data?.data);

// //       // Store the first user object from the array in state
// //       if (response?.data?.success && response?.data?.data?.length > 0) {
// //         setUserData(response.data.data[0]);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUser();
// //   }, []);

// //   if (isLoading && !userData) {
// //     return <div className="loading">Loading profile data...</div>;
// //   }

// //   return (
// //     <>
// //       {!showEditForm ? (
// //         <div className="main">
// //           <div className="profile-container">
// //             <div className="profile-header">
// //               <div className="avatar">
// //                 <img src={userData.Profile.url} alt="Profile" />
// //               </div>
// //               <div className="profile-info">
// //                 <h2>{userData ? `${userData.firstName} ${userData.lastName}` : 'Loading...'}</h2>
// //                 <div className="profile-metadata">
// //                   <span className="position">Web designer</span>
// //                   <span className="contact">{userData?.phone || 'N/A'}</span>
// //                   <span className="user-id">ID: {userData?._id?.substring(0, 5) || 'N/A'}</span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="profile-tabs">
// //               <span
// //                 className={activeTab === 'profile' ? 'active' : ''}
// //                 onClick={() => openTab('profile')}
// //               >
// //                 PROFILE
// //               </span>
// //               <span
// //                 className={activeTab === 'borrowed' ? 'active' : ''}
// //                 onClick={() => openTab('borrowed')}
// //               >
// //                 BORROWED
// //               </span>
// //               <span
// //                 className={activeTab === 'fine' ? 'active' : ''}
// //                 onClick={() => openTab('fine')}
// //               >
// //                 FINE
// //               </span>
// //             </div>

// //             <div className="profile-content">
// //               {activeTab === 'profile' && (
// //                 <div id="profile" className="tab-content active">
// //                   <div className="info-card primary-details">
// //                     <h3>Primary Details <span className="edit" onClick={handleEdit}>Edit</span></h3>
// //                     <div className="details-grid">
// //                       <div className="detail-item">
// //                         <strong>First Name:</strong>
// //                         <span>{userData?.firstName || 'N/A'}</span>
// //                       </div>
// //                       {/* <div className="detail-item">
// //                         <strong>Middle Name:</strong>
// //                         <span>N/A</span>
// //                       </div> */}
// //                       <div className="detail-item">
// //                         <strong>Last Name:</strong>
// //                         <span>{userData?.lastName || 'N/A'}</span>
// //                       </div>
// //                       <div className="detail-item">
// //                         <strong>Gender:</strong>
// //                         <span>{userData?.gender || 'N/A'}</span>
// //                       </div>
// //                       {/* <div className="detail-item">
// //                         <strong>Date of Birth:</strong>
// //                         <span>N/A</span>
// //                       </div> */}
// //                       {/* <div className="detail-item">
// //                         <strong>Marital Status:</strong>
// //                         <span>N/A</span>
// //                       </div> */}
// //                     </div>
// //                   </div>

// //                   <div className="info-card contact-details">
// //                     <h3>Contact Details</h3>
// //                     <div className="details-grid">
// //                       <div className="detail-item">
// //                         <strong>Email:</strong>
// //                         <span>{userData?.email || 'N/A'}</span>
// //                       </div>
// //                       <div className="detail-item">
// //                         <strong>Mobile Number:</strong>
// //                         <span>{userData?.phone || 'N/A'}</span>
// //                       </div>
// //                       <div className="detail-item">
// //                         <strong>Phone Number:</strong>
// //                         <span>{userData?.phone || 'N/A'}</span>
// //                       </div>
// //                       <div className="detail-item">
// //                         <strong>Address:</strong>
// //                         <span>{userData?.address || 'N/A'}</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}

// //               {activeTab === 'borrowed' && (
// //                 <div id="borrowed" className="tab-content active">
// //                   <div className="info-card">
// //                     <h3>Borrowed Books</h3>
// //                     <div className="table-container">
// //                       <table>
// //                         <thead>
// //                           <tr>
// //                             <th>Book Name</th>
// //                             <th>Borrowed Date</th>
// //                             <th>Due Date</th>
// //                             <th>Action</th>
// //                           </tr>
// //                         </thead>
// //                         <tbody>
// //                           {userData?.borrowedBooks && userData.borrowedBooks.length > 0 ? (
// //                             userData.borrowedBooks.map((book) => (
// //                               <tr key={book._id || Math.random()}>
// //                                 <td>{book.bookName || 'Unknown Book'}</td>
// //                                 <td>{new Date(book.borrowedDate).toLocaleDateString() || 'N/A'}</td>
// //                                 <td>{new Date(book.dueDate).toLocaleDateString() || 'N/A'}</td>
// //                                 <td><button type="submit" className="action-btn return-btn">Return</button></td>
// //                               </tr>
// //                             ))
// //                           ) : (
// //                             <tr>
// //                               <td colSpan="4" className="empty-table-message">No books currently borrowed</td>
// //                             </tr>
// //                           )}
// //                         </tbody>
// //                       </table>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}

// //               {activeTab === 'fine' && (
// //                 <div id="fine" className="tab-content active">
// //                   <div className="info-card">
// //                     <h3>Fine Details</h3>
// //                     <div className="table-container">
// //                       <table>
// //                         <thead>
// //                           <tr>
// //                             <th>Book Name</th>
// //                             <th>Fine Amount</th>
// //                             <th>Date</th>
// //                             <th>Action</th>
// //                           </tr>
// //                         </thead>
// //                         <tbody>
// //                           {/* Replace with dynamic fine data when available */}
// //                           <tr>
// //                             <td colSpan="4" className="empty-table-message">No fine records available</td>
// //                           </tr>
// //                         </tbody>
// //                       </table>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       ) : (
// //         <EditProfileForm onSave={handleSave} userData={userData} />
// //       )}
// //     </>
// //   );
// // };

// // // Edit Profile Form Component
// // const EditProfileForm = ({ onSave, userData }) => {
// //   const [formData, setFormData] = useState({
// //     firstName: userData?.firstName || '',
// //     lastName: userData?.lastName || '',
// //     email: userData?.email || '',
// //     phone: userData?.phone || '',
// //     gender: userData?.gender || 'Female',
// //     address: userData?.address || ''
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const authToken = localStorage.getItem('authToken');

// //       await axios.put(
// //         `${process.env.REACT_APP_BASE_URL}/user/profile/update`,
// //         formData,
// //         {
// //           headers: {
// //             Authorization: authToken,
// //             "Content-Type": "application/json"
// //           }
// //         }
// //       );

// //       // Call the onSave function to close the form and refresh data
// //       onSave();
// //     } catch (error) {
// //       console.log(error);
// //       alert('Failed to update profile. Please try again.');
// //     }
// //   };

// //   return (
// //     <div className="edit-main">
// //       <div className="profile-edit-container">
// //         <div className="edit-header">
// //           <h2>Edit Profile</h2>
// //         </div>

// //         <div className="profile-content">
// //           <form className="profile-form" onSubmit={handleSubmit}>
// //             <div className="form-group">
// //               <label>Profile image</label>
// //               <div className="file-input-container">
// //                 <input type="file" className="file-input"/>
// //                 <div className="file-input-button">Choose File</div>
// //               </div>
// //             </div>

// //             <div className="form-group">
// //               <label>First Name</label>
// //               <input
// //                 type="text"
// //                 name="firstName"
// //                 placeholder="Enter first name"
// //                 value={formData.firstName}
// //                 onChange={handleChange}
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label>Last Name</label>
// //               <input
// //                 type="text"
// //                 name="lastName"
// //                 placeholder="Enter last name"
// //                 value={formData.lastName}
// //                 onChange={handleChange}
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label>Gender</label>
// //               <select
// //                 name="gender"
// //                 value={formData.gender}
// //                 onChange={handleChange}
// //               >
// //                 <option value="Female">Female</option>
// //                 <option value="Male">Male</option>
// //                 <option value="Other">Other</option>
// //               </select>
// //             </div>

// //             <div className="form-group">
// //               <label>Email</label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Enter email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label>Mobile Number</label>
// //               <input
// //                 type="text"
// //                 name="phone"
// //                 placeholder="Enter mobile number"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //               />
// //             </div>

// //             <div className="form-group address-field">
// //               <label>Address</label>
// //               <input
// //                 type="text"
// //                 name="address"
// //                 placeholder="Enter address"
// //                 value={formData.address}
// //                 onChange={handleChange}
// //               />
// //             </div>

// //             <div className="form-actions">
// //               <button type="button" className="cancel-btn" onClick={onSave}>Cancel</button>
// //               <button type="submit" className="save-btn">Save Changes</button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;

// // import React, { useEffect, useState } from 'react';
// // import './Profile.css'; // You'll need to create this CSS file separately
// // import axios from 'axios';

// // // Main Profile Component
// // const Profile = () => {
// //   const [activeTab, setActiveTab] = useState('profile');
// //   const [showEditForm, setShowEditForm] = useState(false);
// //   const [userData, setUserData] = useState(null);
// //   const [isLoading, setIsLoading] = useState(true);

// //   const openTab = (tabName) => {
// //     setActiveTab(tabName);
// //   };

// //   const handleEdit = () => {
// //     setShowEditForm(true);
// //   };

// //   const handleSave = () => {
// //     setShowEditForm(false);
// //     // After saving, fetch the updated user data
// //     fetchUser();
// //   };

// //   const fetchUser = async () => {
// //     setIsLoading(true);
// //     try {
// //       const authToken = localStorage.getItem('authToken');

// //       const response = await axios.get(
// //         `${process.env.REACT_APP_BASE_URL}/user/profile/get`,
// //         {
// //           headers: {
// //             Authorization: authToken,
// //             "Content-Type": "application/json"
// //           }
// //         }
// //       );

// //       console.log("fetchUser", response?.data?.data);

// //       // Store the first user object from the array in state
// //       if (response?.data?.success && response?.data?.data?.length > 0) {
// //         setUserData(response.data.data[0]);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUser();
// //   }, []);

// //   if (isLoading && !userData) {
// //     return <div className="loading">Loading profile data...</div>;
// //   }

// //   // Handle potential null values
// //   const profileImageUrl = userData?.profile?.url || '/assets/default-profile.jpg';

// //   return (
// //     <>
// //       {!showEditForm ? (
// //         <div className="main">
// //           <div className="profile-container">
// //             <div className="profile-header">
// //               <div className="avatar">
// //                 <img src={profileImageUrl} alt="Profile" />
// //               </div>
// //               <div className="profile-info">
// //                 <h2>{userData ? `${userData.firstName} ${userData.lastName}` : 'Loading...'}</h2>
// //                 <div className="profile-metadata">
// //                   <span className="position">Web designer</span>
// //                   <span className="contact">{userData?.phone || 'N/A'}</span>
// //                   <span className="user-id">ID: {userData?._id?.substring(0, 5) || 'N/A'}</span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="profile-tabs">
// //               <span
// //                 className={activeTab === 'profile' ? 'active' : ''}
// //                 onClick={() => openTab('profile')}
// //               >
// //                 PROFILE
// //               </span>
// //               <span
// //                 className={activeTab === 'borrowed' ? 'active' : ''}
// //                 onClick={() => openTab('borrowed')}
// //               >
// //                 BORROWED
// //               </span>
// //               <span
// //                 className={activeTab === 'fine' ? 'active' : ''}
// //                 onClick={() => openTab('fine')}
// //               >
// //                 FINE
// //               </span>
// //             </div>

// //             <div className="profile-content">
// //               {activeTab === 'profile' && (
// //                 <div id="profile" className="tab-content active">
// //                   <div className="info-card primary-details">
// //                     <h3>Primary Details <span className="edit" onClick={handleEdit}>Edit</span></h3>
// //                     <div className="details-grid">
// //                       <div className="detail-item">
// //                         <strong>First Name:</strong>
// //                         <span>{userData?.firstName || 'N/A'}</span>
// //                       </div>
// //                       <div className="detail-item">
// //                         <strong>Last Name:</strong>
// //                         <span>{userData?.lastName || 'N/A'}</span>
// //                       </div>
// //                       <div className="detail-item">
// //                         <strong>Gender:</strong>
// //                         <span>{userData?.gender || 'N/A'}</span>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="info-card contact-details">
// //                     <h3>Contact Details</h3>
// //                     <div className="details-grid">
// //                       <div className="detail-item">
// //                         <strong>Email:</strong>
// //                         <span>{userData?.email || 'N/A'}</span>
// //                       </div>
// //                       <div className="detail-item">
// //                         <strong>Mobile Number:</strong>
// //                         <span>{userData?.phone || 'N/A'}</span>
// //                       </div>
// //                       <div className="detail-item">
// //                         <strong>Phone Number:</strong>
// //                         <span>{userData?.phone || 'N/A'}</span>
// //                       </div>
// //                       <div className="detail-item">
// //                         <strong>Address:</strong>
// //                         <span>{userData?.address || 'N/A'}</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}

// //               {activeTab === 'borrowed' && (
// //                 <div id="borrowed" className="tab-content active">
// //                   <div className="info-card">
// //                     <h3>Borrowed Books</h3>
// //                     <div className="table-container">
// //                       <table>
// //                         <thead>
// //                           <tr>
// //                             <th>Book Name</th>
// //                             <th>Borrowed Date</th>
// //                             <th>Due Date</th>
// //                             <th>Action</th>
// //                           </tr>
// //                         </thead>
// //                         <tbody>
// //                           {userData?.borrowedBooks && userData.borrowedBooks.length > 0 ? (
// //                             userData.borrowedBooks.map((book) => (
// //                               <tr key={book._id || Math.random()}>
// //                                 <td>{book.bookName || 'Unknown Book'}</td>
// //                                 <td>{new Date(book.borrowedDate).toLocaleDateString() || 'N/A'}</td>
// //                                 <td>{new Date(book.dueDate).toLocaleDateString() || 'N/A'}</td>
// //                                 <td><button type="submit" className="action-btn return-btn">Return</button></td>
// //                               </tr>
// //                             ))
// //                           ) : (
// //                             <tr>
// //                               <td colSpan="4" className="empty-table-message">No books currently borrowed</td>
// //                             </tr>
// //                           )}
// //                         </tbody>
// //                       </table>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}

// //               {activeTab === 'fine' && (
// //                 <div id="fine" className="tab-content active">
// //                   <div className="info-card">
// //                     <h3>Fine Details</h3>
// //                     <div className="table-container">
// //                       <table>
// //                         <thead>
// //                           <tr>
// //                             <th>Book Name</th>
// //                             <th>Fine Amount</th>
// //                             <th>Date</th>
// //                             <th>Action</th>
// //                           </tr>
// //                         </thead>
// //                         <tbody>
// //                           {/* Replace with dynamic fine data when available */}
// //                           <tr>
// //                             <td colSpan="4" className="empty-table-message">No fine records available</td>
// //                           </tr>
// //                         </tbody>
// //                       </table>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       ) : (
// //         <EditProfileForm onSave={handleSave} userData={userData} />
// //       )}
// //     </>
// //   );
// // };

// // // Edit Profile Form Component
// // const EditProfileForm = ({ onSave, userData }) => {
// //   const [formData, setFormData] = useState({
// //     firstName: userData?.firstName || '',
// //     lastName: userData?.lastName || '',
// //     email: userData?.email || '',
// //     phone: userData?.phone || '',
// //     gender: userData?.gender || 'Female',
// //     address: userData?.address || ''
// //   });

// //   const [profileImage, setProfileImage] = useState(null);
// //   const [previewUrl, setPreviewUrl] = useState(userData?.profile?.url || '/assets/default-profile.jpg');

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setProfileImage(file);
// //       // Create preview URL
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setPreviewUrl(reader.result);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const authToken = localStorage.getItem('authToken');

// //       // Create FormData object for multipart/form-data (needed for file upload)
// //       const formDataToSend = new FormData();

// //       // Append all form fields
// //       Object.keys(formData).forEach(key => {
// //         formDataToSend.append(key, formData[key]);
// //       });

// //       // Append profile image if one was selected
// //       if (profileImage) {
// //         formDataToSend.append('profile', profileImage);
// //       }

// //       await axios.patch(
// //         `${process.env.REACT_APP_BASE_URL}/user/profile/update`,
// //         formDataToSend,
// //         {
// //           headers: {
// //             Authorization: authToken,
// //             "Content-Type": "multipart/form-data"
// //           }
// //         }
// //       );

// //       // Call the onSave function to close the form and refresh data
// //       onSave();
// //     } catch (error) {
// //       console.log(error);
// //       alert('Failed to update profile. Please try again.');
// //     }
// //   };

// //   return (
// //     <div className="edit-main">
// //       <div className="profile-edit-container">
// //         <div className="edit-header">
// //           <h2>Edit Profile</h2>
// //         </div>

// //         <div className="profile-content">
// //           <form className="profile-form" onSubmit={handleSubmit}>
// //             <div className="form-group">
// //               <label>Profile image</label>
// //               <div className="image-preview">
// //                 <img src={previewUrl} alt="Profile Preview" className="profile-preview" />
// //               </div>
// //               <div className="file-input-container">
// //                 <input
// //                   type="file"
// //                   className="file-input"
// //                   accept="image/*"
// //                   onChange={handleImageChange}
// //                 />
// //                 <div className="file-input-button">Choose File</div>
// //               </div>
// //             </div>

// //             <div className="form-group">
// //               <label>First Name</label>
// //               <input
// //                 type="text"
// //                 name="firstName"
// //                 placeholder="Enter first name"
// //                 value={formData.firstName}
// //                 onChange={handleChange}
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label>Last Name</label>
// //               <input
// //                 type="text"
// //                 name="lastName"
// //                 placeholder="Enter last name"
// //                 value={formData.lastName}
// //                 onChange={handleChange}
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label>Gender</label>
// //               <select
// //                 name="gender"
// //                 value={formData.gender}
// //                 onChange={handleChange}
// //               >
// //                 <option value="Female">Female</option>
// //                 <option value="Male">Male</option>
// //                 <option value="Other">Other</option>
// //               </select>
// //             </div>

// //             <div className="form-group">
// //               <label>Email</label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Enter email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label>Mobile Number</label>
// //               <input
// //                 type="text"
// //                 name="phone"
// //                 placeholder="Enter mobile number"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //               />
// //             </div>

// //             <div className="form-group address-field">
// //               <label>Address</label>
// //               <input
// //                 type="text"
// //                 name="address"
// //                 placeholder="Enter address"
// //                 value={formData.address}
// //                 onChange={handleChange}
// //               />
// //             </div>

// //             <div className="form-actions">
// //               <button type="button" className="cancel-btn" onClick={onSave}>Cancel</button>
// //               <button type="submit" className="save-btn">Save Changes</button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;

// import React, { useEffect, useState } from 'react';
// import './Profile.css'; // You'll need to create this CSS file separately
// import axios from 'axios';

// // Main Profile Component
// const Profile = () => {
//   const [activeTab, setActiveTab] = useState('profile');
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [userData, setUserData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const openTab = (tabName) => {
//     setActiveTab(tabName);
//   };

//   const handleEdit = () => {
//     setShowEditForm(true);
//   };

//   const handleSave = async (updatedData) => {
//     // Set the updated data immediately to state
//     if (updatedData) {
//       setUserData(updatedData);
//     }

//     // Then fetch the latest data from server to ensure everything is in sync
//     await fetchUser();

//     // Finally hide the edit form
//     setShowEditForm(false);
//   };

//   const fetchUser = async () => {
//     setIsLoading(true);
//     try {
//       const authToken = localStorage.getItem('authToken');

//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/profile/get`,
//         {
//           headers: {
//             Authorization: authToken,
//             "Content-Type": "application/json"
//           }
//         }
//       );

//       console.log("fetchUser", response?.data?.data);

//       // Store the first user object from the array in state
//       if (response?.data?.success && response?.data?.data?.length > 0) {
//         setUserData(response.data.data[0]);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   if (isLoading && !userData) {
//     return <div className="loading">Loading profile data...</div>;
//   }

//   // Handle potential null values
//   const profileImageUrl = userData?.profile?.url || '/assets/default-profile.jpg';

//   return (
//     <>
//       {!showEditForm ? (
//         <div className="main">
//           <div className="profile-container">
//             <div className="profile-header">
//               <div className="avatar">
//                 <img src={profileImageUrl} alt="Profile" />
//               </div>
//               <div className="profile-info">
//                 <h2>{userData ? `${userData.firstName} ${userData.lastName}` : 'Loading...'}</h2>
//                 <div className="profile-metadata">
//                   <span className="position">Web designer</span>
//                   <span className="contact">{userData?.phone || 'N/A'}</span>
//                   <span className="user-id">ID: {userData?._id?.substring(0, 5) || 'N/A'}</span>
//                 </div>
//               </div>
//             </div>

//             <div className="profile-tabs">
//               <span
//                 className={activeTab === 'profile' ? 'active' : ''}
//                 onClick={() => openTab('profile')}
//               >
//                 PROFILE
//               </span>
//               <span
//                 className={activeTab === 'borrowed' ? 'active' : ''}
//                 onClick={() => openTab('borrowed')}
//               >
//                 BORROWED
//               </span>
//               <span
//                 className={activeTab === 'fine' ? 'active' : ''}
//                 onClick={() => openTab('fine')}
//               >
//                 FINE
//               </span>
//             </div>

//             <div className="profile-content">
//               {activeTab === 'profile' && (
//                 <div id="profile" className="tab-content active">
//                   <div className="info-card primary-details">
//                     <h3>Primary Details <span className="edit" onClick={handleEdit}>Edit</span></h3>
//                     <div className="details-grid">
//                       <div className="detail-item">
//                         <strong>First Name:</strong>
//                         <span>{userData?.firstName || 'N/A'}</span>
//                       </div>
//                       <div className="detail-item">
//                         <strong>Last Name:</strong>
//                         <span>{userData?.lastName || 'N/A'}</span>
//                       </div>
//                       <div className="detail-item">
//                         <strong>Gender:</strong>
//                         <span>{userData?.gender || 'N/A'}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="info-card contact-details">
//                     <h3>Contact Details</h3>
//                     <div className="details-grid">
//                       <div className="detail-item">
//                         <strong>Email:</strong>
//                         <span>{userData?.email || 'N/A'}</span>
//                       </div>
//                       <div className="detail-item">
//                         <strong>Mobile Number:</strong>
//                         <span>{userData?.phone || 'N/A'}</span>
//                       </div>
//                       <div className="detail-item">
//                         <strong>Phone Number:</strong>
//                         <span>{userData?.phone || 'N/A'}</span>
//                       </div>
//                       <div className="detail-item">
//                         <strong>Address:</strong>
//                         <span>{userData?.address || 'N/A'}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'borrowed' && (
//                 <div id="borrowed" className="tab-content active">
//                   <div className="info-card">
//                     <h3>Borrowed Books</h3>
//                     <div className="table-container">
//                       <table>
//                         <thead>
//                           <tr>
//                             <th>Book Name</th>
//                             <th>Borrowed Date</th>
//                             <th>Due Date</th>
//                             <th>Action</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {userData?.borrowedBooks && userData.borrowedBooks.length > 0 ? (
//                             userData.borrowedBooks.map((book) => (
//                               <tr key={book._id || Math.random()}>
//                                 <td>{book.bookName || 'Unknown Book'}</td>
//                                 <td>{new Date(book.borrowedDate).toLocaleDateString() || 'N/A'}</td>
//                                 <td>{new Date(book.dueDate).toLocaleDateString() || 'N/A'}</td>
//                                 <td><button type="submit" className="action-btn return-btn">Return</button></td>
//                               </tr>
//                             ))
//                           ) : (
//                             <tr>
//                               <td colSpan="4" className="empty-table-message">No books currently borrowed</td>
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'fine' && (
//                 <div id="fine" className="tab-content active">
//                   <div className="info-card">
//                     <h3>Fine Details</h3>
//                     <div className="table-container">
//                       <table>
//                         <thead>
//                           <tr>
//                             <th>Book Name</th>
//                             <th>Fine Amount</th>
//                             <th>Date</th>
//                             <th>Action</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {/* Replace with dynamic fine data when available */}
//                           <tr>
//                             <td colSpan="4" className="empty-table-message">No fine records available</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <EditProfileForm onSave={handleSave} userData={userData} />
//       )}
//     </>
//   );
// };

// // Edit Profile Form Component
// const EditProfileForm = ({ onSave, userData }) => {
//   const [formData, setFormData] = useState({
//     firstName: userData?.firstName || '',
//     lastName: userData?.lastName || '',
//     email: userData?.email || '',
//     phone: userData?.phone || '',
//     gender: userData?.gender || 'Female',
//     address: userData?.address || ''
//   });

//   const [profileImage, setProfileImage] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(userData?.profile?.url || '/assets/default-profile.jpg');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfileImage(file);
//       // Create preview URL
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreviewUrl(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const authToken = localStorage.getItem('authToken');

//       // Create FormData object for multipart/form-data (needed for file upload)
//       const formDataToSend = new FormData();

//       // Append all form fields
//       Object.keys(formData).forEach(key => {
//         formDataToSend.append(key, formData[key]);
//       });

//       // Append profile image if one was selected
//       if (profileImage) {
//         formDataToSend.append('profile', profileImage);
//       }

//       const response = await axios.patch(
//         `${process.env.REACT_APP_BASE_URL}/user/profile/update`,
//         formDataToSend,
//         {
//           headers: {
//             Authorization: authToken,
//             "Content-Type": "multipart/form-data"
//           }
//         }
//       );

//       // Create updated user data with form values
//       const updatedUserData = {
//         ...userData,
//         ...formData,
//         profile: profileImage ? { url: previewUrl } : userData.profile
//       };

//       // Call the onSave function with the updated data
//       onSave(updatedUserData);
//     } catch (error) {
//       console.log(error);
//       alert('Failed to update profile. Please try again.');
//     }
//   };

//   return (
//     <div className="edit-main">
//       <div className="profile-edit-container">
//         <div className="edit-header">
//           <h2>Edit Profile</h2>
//         </div>

//         <div className="profile-content">
//           <form className="profile-form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>Profile image</label>
//               <div className="image-preview">
//                 <img src={previewUrl} alt="Profile Preview" className="profile-preview" />
//               </div>
//               <div className="file-input-container">
//                 <input
//                   type="file"
//                   className="file-input"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                 />
//                 <div className="file-input-button">Choose File</div>
//               </div>
//             </div>

//             <div className="form-group">
//               <label>First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="Enter first name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Enter last name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>Gender</label>
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//               >
//                 <option value="Female">Female</option>
//                 <option value="Male">Male</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>Mobile Number</label>
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Enter mobile number"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group address-field">
//               <label>Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Enter address"
//                 value={formData.address}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-actions">
//               <button type="button" className="cancel-btn" onClick={() => onSave()}>Cancel</button>
//               <button type="submit" className="save-btn">Save Changes</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useEffect, useState } from "react";
// import "./Profile.css"; // You'll need to create this CSS file separately
// import axios from "axios";

// // Main Profile Component
// const Profile = () => {
//   const [activeTab, setActiveTab] = useState("profile");
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [userData, setUserData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const openTab = (tabName) => {
//     setActiveTab(tabName);
//   };

//   const handleEdit = () => {
//     setShowEditForm(true);
//   };

//   const handleSave = async () => {
//     setShowEditForm(false);
//     // After saving, fetch the updated user data
//     await fetchUser();
//   };

//   const fetchUser = async () => {
//     setIsLoading(true);
//     try {
//       const authToken = localStorage.getItem("authToken");

//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/profile/get`,
//         {
//           headers: {
//             Authorization: authToken,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("fetchUser", response?.data?.data);

//       // Store the first user object from the array in state
//       if (response?.data?.success && response?.data?.data?.length > 0) {
//         setUserData(response.data.data[0]);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   if (isLoading && !userData) {
//     return <div className="loading">Loading profile data...</div>;
//   }

//   // Handle potential null values
//   const profileImageUrl =
//     userData?.profile?.url || "/assets/default-profile.jpg";

//   return (
//     <>
//       {!showEditForm ? (
//         <div className="main">
//           <div className="profile-container">
//             <div className="profile-header">
//               <div className="avatar">
//                 <img src={profileImageUrl} alt="Profile" />
//               </div>
//               <div className="profile-info">
//                 <h2>
//                   {userData
//                     ? `${userData.firstName} ${userData.lastName}`
//                     : "Loading..."}
//                 </h2>
//                 <div className="profile-metadata">
//                   <span className="position">Web designer</span>
//                   <span className="contact">{userData?.phone || "N/A"}</span>
//                   <span className="user-id">
//                     ID: {userData?._id?.substring(0, 5) || "N/A"}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="profile-tabs">
//               <span
//                 className={activeTab === "profile" ? "active" : ""}
//                 onClick={() => openTab("profile")}
//               >
//                 PROFILE
//               </span>
//               <span
//                 className={activeTab === "borrowed" ? "active" : ""}
//                 onClick={() => openTab("borrowed")}
//               >
//                 BORROWED
//               </span>
//               <span
//                 className={activeTab === "fine" ? "active" : ""}
//                 onClick={() => openTab("fine")}
//               >
//                 FINE
//               </span>
//             </div>

//             <div className="profile-content">
//               {activeTab === "profile" && (
//                 <div id="profile" className="tab-content active">
//                   <div className="info-card primary-details">
//                     <h3>
//                       Primary Details{" "}
//                       <span className="edit" onClick={handleEdit}>
//                         Edit
//                       </span>
//                     </h3>
//                     <div className="details-grid">
//                       <div className="detail-item">
//                         <strong>First Name:</strong>
//                         <span>{userData?.firstName || "N/A"}</span>
//                       </div>
//                       <div className="detail-item">
//                         <strong>Last Name:</strong>
//                         <span>{userData?.lastName || "N/A"}</span>
//                       </div>
//                       <div className="detail-item">
//                         <strong>Gender:</strong>
//                         <span>{userData?.gender || "N/A"}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="info-card contact-details">
//                     <h3>Contact Details</h3>
//                     <div className="details-grid">
//                       <div className="detail-item">
//                         <strong>Email:</strong>
//                         <span>{userData?.email || "N/A"}</span>
//                       </div>
//                       <div className="detail-item">
//                         <strong>Mobile Number:</strong>
//                         <span>{userData?.phone || "N/A"}</span>
//                       </div>
//                       <div className="detail-item">
//                         <strong>Phone Number:</strong>
//                         <span>{userData?.phone || "N/A"}</span>
//                       </div>
//                       <div className="detail-item">
//                         <strong>Address:</strong>
//                         <span>{userData?.address || "N/A"}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeTab === "borrowed" && (
//                 <div id="borrowed" className="tab-content active">
//                   <div className="info-card">
//                     <h3>Borrowed Books</h3>
//                     <div className="table-container">
//                       <table>
//                         <thead>
//                           <tr>
//                             <th>Book Name</th>
//                             <th>Borrowed Date</th>
//                             <th>Due Date</th>
//                             <th>Action</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {userData?.borrowedBooks &&
//                           userData.borrowedBooks.length > 0 ? (
//                             userData.borrowedBooks.map((book) => (
//                               <tr key={book._id || Math.random()}>
//                                 <td>{book.bookName || "Unknown Book"}</td>
//                                 <td>
//                                   {new Date(
//                                     book.borrowedDate
//                                   ).toLocaleDateString() || "N/A"}
//                                 </td>
//                                 <td>
//                                   {new Date(
//                                     book.dueDate
//                                   ).toLocaleDateString() || "N/A"}
//                                 </td>
//                                 <td>
//                                   <button
//                                     type="submit"
//                                     className="action-btn return-btn"
//                                   >
//                                     Return
//                                   </button>
//                                 </td>
//                               </tr>
//                             ))
//                           ) : (
//                             <tr>
//                               <td colSpan="4" className="empty-table-message">
//                                 No books currently borrowed
//                               </td>
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeTab === "fine" && (
//                 <div id="fine" className="tab-content active">
//                   <div className="info-card">
//                     <h3>Fine Details</h3>
//                     <div className="table-container">
//                       <table>
//                         <thead>
//                           <tr>
//                             <th>Book Name</th>
//                             <th>Fine Amount</th>
//                             <th>Date</th>
//                             <th>Action</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {/* Replace with dynamic fine data when available */}
//                           <tr>
//                             <td colSpan="4" className="empty-table-message">
//                               No fine records available
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <EditProfileForm onSave={handleSave} userData={userData} />
//       )}
//     </>
//   );
// };

// // Edit Profile Form Component
// const EditProfileForm = ({ onSave, userData }) => {
//   const [formData, setFormData] = useState({
//     firstName: userData?.firstName || "",
//     lastName: userData?.lastName || "",
//     email: userData?.email || "",
//     phone: userData?.phone || "",
//     gender: userData?.gender || "Female",
//     address: userData?.address || "",
//   });

//   const [profileImage, setProfileImage] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(
//     userData?.profile?.url || "/assets/default-profile.jpg"
//   );
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfileImage(file);
//       // Create preview URL
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreviewUrl(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");
//     try {
//       const authToken = localStorage.getItem("authToken");

//       // Make sure we have the user ID from the userData
//       if (!userData || !userData._id) {
//         setErrorMessage("User ID is missing. Cannot update profile.");
//         return;
//       }

//       // Create FormData object for multipart/form-data (needed for file upload)
//       const formDataToSend = new FormData();

//       // Append all form fields
//       Object.keys(formData).forEach((key) => {
//         formDataToSend.append(key, formData[key]);
//       });

//       // Explicitly include the user ID in the form data
//       formDataToSend.append("userId", userData._id);

//       // Append profile image if one was selected
//       if (profileImage) {
//         formDataToSend.append("profile", profileImage);
//       }

//       // Log data being sent to help debug
//       console.log("Updating user profile with ID:", userData._id);
//       console.log("Form data entries:");
//       for (let pair of formDataToSend.entries()) {
//         console.log(pair[0] + ": " + pair[1]);
//       }

//       const response = await axios.patch(
//         `${process.env.REACT_APP_BASE_URL}/user/profile/update`,
//         formDataToSend,
//         {
//           headers: {
//             Authorization: authToken,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       console.log("Update response:", response.data);

//       if (response.data.success) {
//         // Call the onSave function to close the form and refresh data
//         onSave();
//       } else {
//         setErrorMessage("Profile update was not successful. Please try again.");
//       }
//     } catch (error) {
//       console.log("Update error:", error);
//       setErrorMessage(
//         error.response?.data?.message ||
//           "Failed to update profile. Please try again."
//       );
//     }
//   };

//   // Alternative update method using JSON instead of FormData
//   const handleSubmitJson = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");
//     try {
//       const authToken = localStorage.getItem("authToken");

//       // Create update data object
//       const updateData = {
//         ...formData,

//         userId: userData._id, // Explicitly include the user ID
//       };
//       console.log(formData, "formdata");

//       console.log("Updating user with data:", updateData);

//       const response = await axios.patch(
//         `${process.env.REACT_APP_BASE_URL}/user/profile/update`,
//         updateData,
//         {
//           headers: {
//             Authorization: authToken,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("Update response:", response.data);

//       // Handle profile image separately if needed
//       if (profileImage) {
//         const imageFormData = new FormData();
//         imageFormData.append("profile", profileImage);
//         imageFormData.append("userId", userData._id);

//         await axios.patch(
//           `${process.env.REACT_APP_BASE_URL}/user/profile/update-image`,
//           imageFormData,
//           {
//             headers: {
//               Authorization: authToken,
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );
//       }

//       if (response.data.success) {
//         // Call the onSave function to close the form and refresh data
//         onSave();
//       } else {
//         setErrorMessage("Profile update was not successful. Please try again.");
//       }
//     } catch (error) {
//       console.log("Update error:", error);
//       setErrorMessage(
//         error.response?.data?.message ||
//           "Failed to update profile. Please try again."
//       );
//     }
//   };

//   return (
//     <div className="edit-main">
//       <div className="profile-edit-container">
//         <div className="edit-header">
//           <h2>Edit Profile</h2>
//         </div>

//         <div className="profile-content">
//           {errorMessage && (
//             <div
//               className="error-message"
//               style={{ color: "red", margin: "10px 0" }}
//             >
//               {errorMessage}
//             </div>
//           )}

//           <form className="profile-form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>Profile image</label>
//               <div className="image-preview">
//                 <img
//                   src={previewUrl}
//                   alt="Profile Preview"
//                   className="profile-preview"
//                 />
//               </div>
//               <div className="file-input-container">
//                 <input
//                   type="file"
//                   className="file-input"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                 />
//                 <div className="file-input-button">Choose File</div>
//               </div>
//             </div>

//             <div className="form-group">
//               <label>First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="Enter first name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Enter last name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>Gender</label>
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="Female">Female</option>
//                 <option value="Male">Male</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>Mobile Number</label>
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Enter mobile number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group address-field">
//               <label>Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Enter address"
//                 value={formData.address}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-buttons">
//               <button
//                 type="button"
//                 className="btn btn-alternative"
//                 onClick={() => onSave()}
//               >
//                 Try JSON Method
//               </button>
//             </div>

//             <div className="form-actions">
//               <button type="button" className="cancel-btn" onClick={onSave}>
//                 Cancel
//               </button>
//               <button type="submit" className="save-btn">
//                 Save Changes
//               </button>
//             </div>
//           </form>

//           <div className="alternative-form">
//             {/* <button
//               className="btn btn-alternative"
//               style={{
//                 marginTop: "20px",
//                 padding: "10px",
//                 background: "#f0f0f0",
//               }}
//               onClick={handleSubmitJson}
//             >
//               Try Alternative Update Method
//             </button> */}
//             <button
//   type="button"
//   className="btn btn-alternative"
//   onClick={() => onSave()}
// >
//   Try JSON Method
// </button>
//             <p style={{ fontSize: "0.9em", color: "#666", marginTop: "8px" }}>
//               If the regular update isn't working, try this alternative method.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import "./Profile.css"; // You'll need to create this CSS file separately
import axios from "axios";

// Main Profile Component
const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showEditForm, setShowEditForm] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const handleEdit = () => {
    setShowEditForm(true);
  };

  const handleSave = async () => {
    setShowEditForm(false);
    // After saving, fetch the updated user data
    await fetchUser();
  };

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const authToken = localStorage.getItem("authToken");

      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/author/profile/get`,
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("fetchUser", response?.data?.data);

      // Store the first user object from the array in state
      if (response?.data?.success && response?.data?.data?.length > 0) {
        setUserData(response.data.data[0]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading && !userData) {
    return <div className="loading">Loading profile data...</div>;
  }

  // Handle potential null values
  const profileImageUrl =
    userData?.profile?.url || "/assets/default-profile.jpg";

  return (
    <>
      {!showEditForm ? (
        <div className="main">
          <div className="profile-container">
            <div className="profile-header">
              <div className="avatar">
                <img src={profileImageUrl} alt="Profile" />
              </div>
              <div className="profile-info">
                <h2>
                  {userData
                    ? `${userData.firstName} ${userData.lastName}`
                    : "Loading..."}
                </h2>
                <div className="profile-metadata">
                  <span className="position">{userData.firstName}</span>
                  <span className="contact">{userData?.phone || "N/A"}</span>
                  <span className="user-id">
                    ID: {userData?._id?.substring(0, 5) || "N/A"}
                  </span>
                </div>
              </div>
            </div>

            <div className="profile-tabs">
              <span
                className={activeTab === "profile" ? "active" : ""}
                onClick={() => openTab("profile")}
              >
                PROFILE
              </span>
              {/* <span
                className={activeTab === "borrowed" ? "active" : ""}
                onClick={() => openTab("borrowed")}
              >
                BORROWED
              </span>
              <span
                className={activeTab === "fine" ? "active" : ""}
                onClick={() => openTab("fine")}
              >
                FINE
              </span> */}
            </div>

            <div className="profile-content">
              {activeTab === "profile" && (
                <div id="profile" className="tab-content active">
                  <div className="info-card primary-details">
                    <h3>
                      Primary Details{" "}
                      <span className="edit" onClick={handleEdit}>
                        Edit
                      </span>
                    </h3>
                    <div className="details-grid">
                      <div className="detail-item">
                        <strong>First Name:</strong>
                        <span>{userData?.firstName || "N/A"}</span>
                      </div>
                      <div className="detail-item">
                        <strong>Last Name:</strong>
                        <span>{userData?.lastName || "N/A"}</span>
                      </div>
                      <div className="detail-item">
                        <strong>Gender:</strong>
                        <span>{userData?.gender || "N/A"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="info-card contact-details">
                    <h3>Contact Details</h3>
                    <div className="details-grid">
                      <div className="detail-item">
                        <strong>Email:</strong>
                        <span>{userData?.email || "N/A"}</span>
                      </div>
                      <div className="detail-item">
                        <strong>Mobile Number:</strong>
                        <span>{userData?.phone || "N/A"}</span>
                      </div>
                      <div className="detail-item">
                        <strong>Phone Number:</strong>
                        <span>{userData?.phone || "N/A"}</span>
                      </div>
                      <div className="detail-item">
                        <strong>Address:</strong>
                        <span>{userData?.address || "N/A"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* {activeTab === "borrowed" && (
                <div id="borrowed" className="tab-content active">
                  <div className="info-card">
                    <h3>Borrowed Books</h3>
                    <div className="table-container">
                      <table>
                        <thead>
                          <tr>
                            <th>Book Name</th>
                            <th>Borrowed Date</th>
                            <th>Due Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userData?.borrowedBooks &&
                          userData.borrowedBooks.length > 0 ? (
                            userData.borrowedBooks.map((book) => (
                              <tr key={book._id || Math.random()}>
                                <td>{book.title || "Unknown Book"}</td>
                                <td>
                                  {new Date(
                                    book.borrowedDate
                                  ).toLocaleDateString() || "N/A"}
                                </td>
                                <td>
                                  {new Date(
                                    book.dueDate
                                  ).toLocaleDateString() || "N/A"}
                                </td>
                                <td>
                                  <button
                                    type="submit"
                                    className="action-btn return-btn"
                                  >
                                    Return
                                  </button>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="4" className="empty-table-message">
                                No books currently borrowed
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )} */}

              {/* {activeTab === "fine" && (
                <div id="fine" className="tab-content active">
                  <div className="info-card">
                    <h3>Fine Details</h3>
                    <div className="table-container">
                      <table>
                        <thead>
                          <tr>
                            <th>Book Name</th>
                            <th>Fine Amount</th>
                            <th>Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="4" className="empty-table-message">
                              No fine records available
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
      ) : (
        <EditProfileForm onSave={handleSave} userData={userData} />
      )}
    </>
  );
};

// Edit Profile Form Component
const EditProfileForm = ({ onSave, userData }) => {
  const [formData, setFormData] = useState({
    firstName: userData?.firstName || "",
    lastName: userData?.lastName || "",
    email: userData?.email || "",
    phone: userData?.phone || "",
    gender: userData?.gender || "Female",
    address: userData?.address || "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(
    userData?.profile?.url || "/assets/default-profile.jpg"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const authToken = localStorage.getItem("authToken");

      // Make sure we have the user ID from the userData
      if (!userData || !userData._id) {
        setErrorMessage("User ID is missing. Cannot update profile.");
        setIsSubmitting(false);
        return;
      }

      // Create update data object
      const updateData = {
        ...formData,
        userId: userData._id, // Explicitly include the user ID
      };

      console.log("Updating user with data:", updateData);

      // First update the profile data
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/author/profile/update`,
        updateData,
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Update response:", response.data);

      // Handle profile image separately if needed
      if (profileImage) {
        const imageFormData = new FormData();
        imageFormData.append("profile", profileImage);
        imageFormData.append("userId", userData._id);

        await axios.post(
          `${process.env.REACT_APP_BASE_URL}/author/profile/upload`,
          imageFormData,
          {
            headers: {
              Authorization: authToken,
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      if (response.data.success) {
        // Call the onSave function to close the form and refresh data
        onSave();
      } else {
        setErrorMessage("Profile update was not successful. Please try again.");
      }
    } catch (error) {
      console.log("Update error:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "Failed to update profile. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="edit-main">
      <div className="profile-edit-container">
        <div className="edit-header">
          <h2>Edit Profile</h2>
        </div>

        <div className="profile-content">
          {errorMessage && (
            <div
              className="error-message"
              style={{ color: "red", margin: "10px 0" }}
            >
              {errorMessage}
            </div>
          )}

          <form className="profile-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Profile image</label>
              <div className="image-preview">
                <img
                  src={previewUrl}
                  alt="Profile Preview"
                  className="profile-preview"
                />
              </div>
              <div className="file-input-container">
                <input
                  type="file"
                  className="file-input"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <div className="file-input-button">Choose File</div>
              </div>
            </div>

            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter mobile number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group address-field">
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={onSave}>
                Cancel
              </button>
              <button
                type="submit"
                className="save-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Updating..." : "Update Profile"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;