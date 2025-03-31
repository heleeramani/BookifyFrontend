import React, { useEffect, useState } from "react";
import "./Profile.css"; // You'll need to create this CSS file separately
import axios from "axios";

// Main Profile Component
const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showEditForm, setShowEditForm] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [borrow, setBorrow] = useState([]);
  const [returned, setReturned] = useState([]);
  const [purchase, setPurchase] = useState([]);
  const [fine, setFine] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alerts, setAlerts] = useState({
    open: false,
    message: "",
    severity: "",
  });

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

  const handleFine = async (book) => {
    try {
      // Get authToken from localStorage
      const authToken = localStorage.getItem("authToken");
      console.log(book, "bookkkk");

      if (!authToken) {
        setAlerts({
          open: true,
          message: "Please log in to view your wishlist",
          severity: "warning",
        });
        setLoading(false);
        return;
      }

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/fine/initiate`,
        {
          borrowId: book.borrowId._id,
        },
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
        }
      );

      const { data } = response;
      console.log(data, "datattatata");

      if (data?.data?.order && data.data.order.amount > 0) {
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY,
          amount: data.data.order.amount * 100,
          currency: "INR",
          name: "My Bookstore",
          description: `Payment for ${book.title}`,
          order_id: data.data.order.razorpayOrderId,
          handler: async function (response) {
            try {
              // Verify Payment
              const verifyResponse = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/user/payment/verify`,
                {
                  orderId: data?.data.order._id,
                  razorayPaymentId: response.razorpay_payment_id,
                },
                {
                  headers: {
                    Authorization: authToken,
                    "Content-Type": "application/json",
                  },
                }
              );

              if (verifyResponse.data.success) {
                alert("Payment Successful and Verified!");
              } else {
                alert("Payment Verification Failed!");
              }
            } catch (error) {
              console.error("Verification Error:", error);
              alert("Payment verification failed!");
            }
          },
          prefill: {
            name: "John Doe",
            email: "john.doe@example.com",
            contact: "9876543210",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } else {
        alert("Purchase completed successfully without payment.");
      }
    } catch (error) {
      console.error("Error initiating purchase:", error);
      alert("Failed to initiate purchase. Please try again.");
    }
  };

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const authToken = localStorage.getItem("authToken");
      console.log(authToken, "authtoken");

      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/profile/get`,
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

  const handleRefund = async (book) => {
    try {
      console.log(book, "bororowww");

      const authToken = localStorage.getItem("authToken");

      if (!authToken) {
        // Handle unauthorized state
        alert("Please log in to continue");
        return;
      }

      // Set loading state if needed
      setIsLoading(true);
      const borrowId = book._id;
      console.log(borrowId, "boroow iddddddddddddddddddddddddddddddddddeeee");

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/borrow/return/${borrowId}`,
        {}, // Empty body as you're passing data in URL
        {
          // This is the correct way to structure the axios post request
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
        }
      );

      const { data } = response;

      if (data.success) {
        // Handle successful refund
        alert("Book successfully returned and refund initiated!");
        // You might want to update the UI or redirect
        // Perhaps fetch updated borrow history
      } else {
        alert(data.message || "Return process failed");
      }
    } catch (err) {
      console.error("Error processing return:", err);
      alert(
        err.response?.data?.message ||
          "An error occurred while processing your return"
      );
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

  const fetchBorrow = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/profile/borrow`,
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log("response", response?.data?.borrowedBooks);
      console.log(
        response?.data?.data?.borrowedBooks,
        "borrrrrrroooooowwwwwweeedd"
      );

      setBorrow(response?.data?.data?.borrowedBooks);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFine = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/profile/fine`,
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log("response", response?.data?.borrowedBooks);
      console.log(response?.data?.data, "fineeeeeeeeeeeeeeee");

      setFine(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchReturned = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/profile/return`,
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log("response", response?.data?.borrowedBooks);
      console.log(
        response?.data?.data?.borrowedBooks,
        "borrrrrrroooooowwwwwweeedd"
      );

      setReturned(response?.data?.data?.borrowedBooks);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPurchase = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/profile/purchase`,
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log("response", response?.data?.borrowedBooks);
      console.log(
        response?.data?.data,
        "purchaseeeeeeeeeeeeeee"
      );

      setPurchase(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBorrow();
  }, []);

  useEffect(() => {
    fetchReturned();
  }, []);
  useEffect(() => {
    fetchFine();
  }, []);
  useEffect(() => {
    fetchPurchase();
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
                  {/* <span className="position">Web designer</span> */}
                  {/* <span className="contact">Contact:{userData?.phone || "N/A"}</span> */}
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
              <span
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
              </span>
              <span
                className={activeTab === "returned" ? "active" : ""}
                onClick={() => openTab("returned")}
              >
                RETURNED BOOKS
              </span>
              <span
                className={activeTab === "purchase" ? "active" : ""}
                onClick={() => openTab("purchase")}
              >
               PURCHASE
              </span>
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
                            <th>status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {borrow && borrow.length > 0 ? (
                            borrow.map((book) => (
                              <tr key={book._id || Math.random()}>
                                <td>{book.bookId.title || "Unknown Book"}</td>
                                <td>
                                  {book.createdAt
                                    ? new Date(
                                        book.createdAt
                                      ).toLocaleDateString()
                                    : "N/A"}
                                </td>
                                <td>
                                  {book.dueDate
                                    ? new Date(
                                        book.dueDate
                                      ).toLocaleDateString()
                                    : "N/A"}
                                </td>
                                <td>{book.status || "Unknown"}</td>
                                <td>
                                  <button
                                    type="submit"
                                    className="action-btn return-btn"
                                    onClick={() => handleRefund(book)}
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
                            <th>status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {fine && fine.length > 0 ? (
                            fine.map((book) => (
                              <tr key={book._id || Math.random()}>
                                <td>
                                  {book.borrowId.bookId.title || "Unknown Book"}
                                </td>
                                <td>{book.amount ? book.amount : "N/A"}</td>
                                {/* <td>
                                  {book.createdAt
                                    ? new Date(
                                        book.createdAta
                                      ).toLocaleDateString()
                                    : "N/A"}
                                </td> */}
                                <td>{book.status || "Unknown"}</td>
                                <td>
                                  <button
                                    type="submit"
                                    className="action-btn return-btn"
                                    onClick={() => handleFine(book)}
                                  >
                                    Pay fine
                                  </button>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="4" className="empty-table-message">
                                No fine record available
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "returned" && (
                <div id="borrowed" className="tab-content active">
                  <div className="info-card">
                    <h3>returned Books</h3>
                    <div className="table-container">
                      <table>
                        <thead>
                          <tr>
                            <th>Book Name</th>
                            <th>Borrowed Date</th>
                            <th>Due Date</th>
                            <th>Returned Date</th>
                            <th>status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {returned && returned.length > 0 ? (
                            returned.map((book) => (
                              <tr key={book._id || Math.random()}>
                                <td>{book.bookId.title || "Unknown Book"}</td>
                                <td>
                                  {book.createdAt
                                    ? new Date(
                                        book.createdAt
                                      ).toLocaleDateString()
                                    : "N/A"}
                                </td>
                                <td>
                                  {book.dueDate
                                    ? new Date(
                                        book.dueDate
                                      ).toLocaleDateString()
                                    : "N/A"}
                                </td>
                                <td>
                                  {book.returnDate
                                    ? new Date(
                                        book.returnDate
                                      ).toLocaleDateString()
                                    : "N/A"}
                                </td>
                                <td>{book.status || "Unknown"}</td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="4" className="empty-table-message">
                                No books record available
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "purchase" && (
                <div id="borrowed" className="tab-content active">
                  <div className="info-card">
                    <h3>Purchase Books</h3>
                    <div className="table-container">
                      <table>
                        <thead>
                          <tr>
                            <th>Book Name</th>
                            <th>Purchase Date</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {purchase && purchase.length > 0 ? (
                            purchase.map((book) => (
                              <tr key={book._id || Math.random()}>
                                <td>{book.book.title || "Unknown Book"}</td>
                                <td>
                                  {book.createdAt
                                    ? new Date(
                                        book.createdAt
                                      ).toLocaleDateString()
                                    : "N/A"}
                                </td>
                                <td>
                                  {book.quantity}
                                </td>
                                <td>
                                  {book.totalAmount}
                                </td>
                                
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="4" className="empty-table-message">
                                No books record available
                              </td>
                            </tr>
                          )}
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
        `${process.env.REACT_APP_BASE_URL}/user/profile/update`,
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
          `${process.env.REACT_APP_BASE_URL}/user/profile/update-image`,
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
