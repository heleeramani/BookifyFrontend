// import React, { useState } from 'react';
// import { 
//   Box, 
//   Typography, 
//   Avatar, 
//   Button, 
//   TextField, 
//   Grid, 
//   Paper, 
//   useTheme 
// } from '@mui/material';
// import { tokens } from '../../theme';

// const ProfilePage = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   // Sample user data (you would typically fetch this from your backend)
//   const [userData, setUserData] = useState({
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     bio: 'Software Developer | Tech Enthusiast',
//     location: 'San Francisco, CA',
//     profilePicture: '/path/to/default/profile/pic.jpg' // Replace with actual path
//   });

//   // Edit mode state
//   const [isEditing, setIsEditing] = useState(false);

//   // Temporary state for editing
//   const [editData, setEditData] = useState({ ...userData });

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     setUserData(editData);
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setEditData(userData);
//     setIsEditing(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <Box 
//       sx={{ 
//         flexGrow: 1, 
//         p: 3,
//         backgroundColor: colors.primary[500],
//         minHeight: '100vh'
//       }}
//     >
//       <Grid container spacing={3} justifyContent="center">
//         <Grid item xs={12} md={8}>
//           <Paper 
//             elevation={3} 
//             sx={{ 
//               p: 4, 
//               borderRadius: 2,
//               backgroundColor: colors.primary[400]
//             }}
//           >
//             <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
//               <Avatar
//                 alt={userData.name}
//                 src={userData.profilePicture}
//                 sx={{ 
//                   width: 150, 
//                   height: 150, 
//                   mb: 2,
//                   border: `4px solid ${colors.greenAccent[500]}`
//                 }}
//               />
//               {isEditing ? (
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   name="name"
//                   value={editData.name}
//                   onChange={handleInputChange}
//                   variant="outlined"
//                   sx={{ mb: 2 }}
//                 />
//               ) : (
//                 <Typography variant="h3" color={colors.grey[100]}>
//                   {userData.name}
//                 </Typography>
//               )}
//             </Box>

//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 {isEditing ? (
//                   <TextField
//                     fullWidth
//                     label="Email"
//                     name="email"
//                     value={editData.email}
//                     onChange={handleInputChange}
//                     variant="outlined"
//                     sx={{ mb: 2 }}
//                   />
//                 ) : (
//                   <Typography variant="body1" color={colors.grey[200]}>
//                     <strong>Email:</strong> {userData.email}
//                   </Typography>
//                 )}
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 {isEditing ? (
//                   <TextField
//                     fullWidth
//                     label="Location"
//                     name="location"
//                     value={editData.location}
//                     onChange={handleInputChange}
//                     variant="outlined"
//                     sx={{ mb: 2 }}
//                   />
//                 ) : (
//                   <Typography variant="body1" color={colors.grey[200]}>
//                     <strong>Location:</strong> {userData.location}
//                   </Typography>
//                 )}
//               </Grid>
//               <Grid item xs={12}>
//                 {isEditing ? (
//                   <TextField
//                     fullWidth
//                     label="Bio"
//                     name="bio"
//                     multiline
//                     rows={4}
//                     value={editData.bio}
//                     onChange={handleInputChange}
//                     variant="outlined"
//                     sx={{ mb: 2 }}
//                   />
//                 ) : (
//                   <Typography variant="body1" color={colors.grey[200]}>
//                     <strong>Bio:</strong> {userData.bio}
//                   </Typography>
//                 )}
//               </Grid>
//             </Grid>

//             <Box mt={3} display="flex" justifyContent="center" gap={2}>
//               {isEditing ? (
//                 <>
//                   <Button 
//                     variant="contained" 
//                     color="success" 
//                     onClick={handleSave}
//                   >
//                     Save Changes
//                   </Button>
//                   <Button 
//                     variant="contained" 
//                     color="error" 
//                     onClick={handleCancel}
//                   >
//                     Cancel
//                   </Button>
//                 </>
//               ) : (
//                 <Button 
//                   variant="contained" 
//                   color="secondary" 
//                   onClick={handleEdit}
//                 >
//                   Edit Profile
//                 </Button>
//               )}
//             </Box>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default ProfilePage;

import React, { useEffect, useState } from "react";
import "./Profile.css"; // You'll need to create this CSS file separately
import axios from "axios";

// Main Profile Component
const ProfilePage = () => {
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
        `${process.env.REACT_APP_BASE_URL}/admin/profile/get`,
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
                  <span className="position">Web designer</span>
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
              </span> */}
              {/* <span
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

              {activeTab === "borrowed" && (
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
                                <td>{book.bookName || "Unknown Book"}</td>
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
              )}

              {activeTab === "fine" && (
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
                          {/* Replace with dynamic fine data when available */}
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
              )}
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
        `${process.env.REACT_APP_BASE_URL}/admin/profile/update`,
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

        await axios.patch(
          `${process.env.REACT_APP_BASE_URL}/admin/profile/update-image`,
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

export default ProfilePage;