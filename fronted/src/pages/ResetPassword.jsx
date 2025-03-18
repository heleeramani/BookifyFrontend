// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../styles/Login.css"; // Reusing the same CSS

// const ForgotPassword = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setEmail(value);
//     setEmailError(validateEmail(value) ? "" : "Invalid email format");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setEmailError("Invalid email format");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/auth/forget`,
//         { email, formPath:`http://localhost:3000/reset-password`},
//         { headers: { "Content-Type": "application/json" } }
//       );

//       console.log("Reset password response:", response.data);
//       setResponseMessage("Password reset link sent to your email!");

//       // Redirect back to login page after a short delay
//       setTimeout(() => {
//         navigate("/login");
//       }, 3000);
//     } catch (error) {
//       console.error("API Error:", error.response?.data || error.message);
//       setResponseMessage(
//         error.response?.data?.message || "Failed to send reset link. Please try again."
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="mainn">
//       <div className="form-container">
//         <h1 className="title">Forgot Password</h1>

//         {responseMessage && (
//           <p className="response-message">{responseMessage}</p>
//         )}

//         <form className="form-section" onSubmit={handleSubmit}>
//           <label>Email Address</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your registered email"
//             value={email}
//             onChange={handleChange}
//             className={emailError ? "input-error" : ""}
//           />
//           {emailError && <p className="error">{emailError}</p>}

//           <button
//             type="submit"
//             className="submit-btn"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Sending..." : "Reset Password"}
//           </button>
//         </form>

//         <p className="switch-form">
//           Remember your password? <a href="/login">Sign in</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import "../styles/Login.css"; // Reusing the same CSS

// const ResetPassword = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [formData, setFormData] = useState({
//     password: "",
//     confirmPassword: ""
//   });
//   const [errors, setErrors] = useState({
//     password: "",
//     confirmPassword: ""
//   });
//   const [responseMessage, setResponseMessage] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [token, setToken] = useState("");

//   // Extract token from URL on component mount
// //   useEffect(() => {
// //     const searchParams = new URLSearchParams(location.search);
// //     const tokenFromUrl = searchParams.get("token");
// //     if (tokenFromUrl) {
// //       setToken(tokenFromUrl);
// //     } else {
// //       setResponseMessage("Invalid password reset link. Please request a new one.");
// //     }
// //   }, [location]);

//   const validatePassword = (password) => {
//     // Password validation: at least 8 characters
//     return password.length >= 8;
//   };

//   const validateForm = () => {
//     const newErrors = {
//       password: "",
//       confirmPassword: ""
//     };
//     let isValid = true;

//     if (!validatePassword(formData.password)) {
//       newErrors.password = "Password must be at least 8 characters";
//       isValid = false;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const response = await axios.patch(
//         `${process.env.REACT_APP_BASE_URL}/auth/reset`,
//         { password },
//         { headers: { "Content-Type": "application/json" } }
//       );

//     //   console.log("Reset password response:", response.data);
//       setResponseMessage("Password reset successful!");

//       // Redirect back to login page after a short delay
//       setTimeout(() => {
//         navigate("/login");
//       }, 3000);
//     } catch (error) {
//       console.error("API Error:", error.response?.data || error.message);
//       setResponseMessage(
//         error.response?.data?.message || "Failed to reset password. Please try again."
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="mainn">
//       <div className="form-container">
//         <h1 className="title">Reset Password</h1>

//         {responseMessage && (
//           <p className="response-message">{responseMessage}</p>
//         )}

//         <form className="form-section" onSubmit={handleSubmit}>
//           <label>New Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your new password"
//             value={formData.password}
//             onChange={handleChange}
//             className={errors.password ? "input-error" : ""}
//           />
//           {errors.password && <p className="error">{errors.password}</p>}

//           <label>Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm your new password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             className={errors.confirmPassword ? "input-error" : ""}
//           />
//           {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

//           <button
//             type="submit"
//             className="submit-btn"
//             disabled={isSubmitting || !token}
//           >
//             {isSubmitting ? "Resetting..." : "Set New Password"}
//           </button>
//         </form>

//         <p className="switch-form">
//           Remember your password? <a href="/login">Sign in</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Reusing the same CSS

const ResetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [token,setToken]=useState("")
  const location = useLocation();

  const validatePassword = (password) => {
    // Password validation: at least 8 characters
    return password.length >= 8;
  };

  const validateForm = () => {
    const newErrors = {
      password: "",
      confirmPassword: "",
    };
    let isValid = true;

    if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    // Extract token from URL query parameters
    const urlParams = new URLSearchParams(location.search);
    const tokenParam = urlParams.get('token');
    if (tokenParam) {
      setToken(tokenParam);
    } else {
      setResponseMessage("Invalid password reset link. Please request a new one.");
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/auth/reset?token=${token}`,
        { password: formData.password },
        { headers: { "Content-Type": "application/json" } }
      );

      setResponseMessage("Password reset successful!");

      // Redirect back to login page after a short delay
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      setResponseMessage(
        error.response?.data?.message ||
          "Failed to reset password. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mainn">
      <div className="form-container">
        <h1 className="title">Reset Password</h1>

        {responseMessage && (
          <p className="response-message">{responseMessage}</p>
        )}

        <form className="form-section" onSubmit={handleSubmit}>
          <label>New Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your new password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your new password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? "input-error" : ""}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Resetting..." : "Set New Password"}
          </button>
        </form>

        <p className="switch-form">
          Remember your password? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
