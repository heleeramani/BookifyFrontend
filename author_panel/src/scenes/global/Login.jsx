// import React, { useState } from "react";
// import "../styles/Login.css";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({
//     email: "",
//     password: "",
//   });

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     return password.length >= 6;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Validate fields in real-time
//     if (name === "email") {
//       setErrors({
//         ...errors,
//         email: validateEmail(value) ? "" : "Invalid email format",
//       });
//     }

//     if (name === "password") {
//       setErrors({
//         ...errors,
//         password: validatePassword(value)
//           ? ""
//           : "Password must be at least 6 characters",
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let newErrors = { email: "", password: "" };
//     let valid = true;

//     if (!validateEmail(formData.email)) {
//       newErrors.email = "Invalid email format";
//       valid = false;
//     }

//     if (!validatePassword(formData.password)) {
//       newErrors.password = "Password must be at least 6 characters";
//       valid = false;
//     }

//     setErrors(newErrors);

//     if (valid) {
//       console.log("User Signed In:", formData);
//       alert("Login Successful!");
//     }
//   };

//   return (
//     <div className="mainn">
//       <div className="form-container">
//         <h1 className="title">Sign In</h1>

//         <form className="form-section" onSubmit={handleSubmit}>
//           <label>Email Address</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             className={errors.email ? "input-error" : ""}
//           />
//           {errors.email && <p className="error">{errors.email}</p>}

//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//             className={errors.password ? "input-error" : ""}
//           />
//           {errors.password && <p className="error">{errors.password}</p>}

//           <button type="submit" className="submit-btn">
//             Sign In
//           </button>
//         </form>

//         <p className="switch-form">
//           Don't have an account? <a href="/register">Sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/Login.css";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({
//     email: "",
//     password: "",
//   });

//   const [responseMessage, setResponseMessage] = useState("");

//   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   const validatePassword = (password) => password.length >= 6;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Real-time validation
//     if (name === "email") {
//       setErrors((prev) => ({ ...prev, email: validateEmail(value) ? "" : "Invalid email format" }));
//     }
//     if (name === "password") {
//       setErrors((prev) => ({ ...prev, password: validatePassword(value) ? "" : "Password must be at least 6 characters" }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Final validation before submission
//     const newErrors = {
//       email: validateEmail(formData.email) ? "" : "Invalid email format",
//       password: validatePassword(formData.password) ? "" : "Password must be at least 6 characters",
//     };

//     setErrors(newErrors);

//     if (newErrors.email || newErrors.password) return;

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/auth/login`,
//         formData,
//         { headers: { "Content-Type": "application/json" } }
//       );

//       console.log("API Response:", response.data);
//       setResponseMessage("Login Successful!");
//       alert("Login Successful!");

//       // Example: Save token to localStorage
//       localStorage.setItem("token", response.data.token);

//     } catch (error) {
//       console.error("API Error:", error.response?.data || error.message);
//       setResponseMessage(error.response?.data?.message || "Login failed. Please try again.");
//     }
//   };

//   return (
//     <div className="mainn">
//       <div className="form-container">
//         <h1 className="title">Sign In</h1>

//         {responseMessage && <p className="response-message">{responseMessage}</p>}

//         <form className="form-section" onSubmit={handleSubmit}>
//           <label>Email Address</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             className={errors.email ? "input-error" : ""}
//           />
//           {errors.email && <p className="error">{errors.email}</p>}

//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//             className={errors.password ? "input-error" : ""}
//           />
//           {errors.password && <p className="error">{errors.password}</p>}

//           <button type="submit" className="submit-btn">Sign In</button>
//         </form>

//         <p className="switch-form">
//           Don't have an account? <a href="/register">Sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.length >= 6;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation
    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: validateEmail(value) ? "" : "Invalid email format",
      }));
    }
    if (name === "password") {
      setErrors((prev) => ({
        ...prev,
        password: validatePassword(value)
          ? ""
          : "Password must be at least 6 characters",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation before submission
    const newErrors = {
      email: validateEmail(formData.email) ? "" : "Invalid email format",
      password: validatePassword(formData.password)
        ? ""
        : "Password must be at least 6 characters",
    };

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) return;

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("API Response:", response.data);
      setResponseMessage("Login Successful!");

      // Example: Save token to localStorage
      // localStorage.setItem("token", response.data.token);

      const authToken =
        response.headers["authorization"] ||
        response.headers["Authorization"] ||
        response.headers["x-auth-token"];
      // Example: Save token to localStorage
      localStorage.setItem("authToken", authToken);
      console.log(authToken, "authToken");
      // Show success message briefly before redirecting
      setTimeout(() => {
        navigate("/dashboard"); // Redirect to home page
      }, 1000); // Wait 1 second so user can see success message
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      setResponseMessage(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="mainn">
      <div className="form-container">
        <h1 className="title">Sign In</h1>

        {responseMessage && (
          <p className="response-message">{responseMessage}</p>
        )}

        <form className="form-section" onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>

        {/* <p className="switch-form">
          Don't have an account? <a href="/register">Sign up</a>
        </p> */}
      </div>
    </div>
  );
};

export default Login;
