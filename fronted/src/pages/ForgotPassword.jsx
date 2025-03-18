import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Reusing the same CSS

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value) ? "" : "Invalid email format");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/forget`,
        { email, formPath:`http://localhost:3000/reset-password`},
        { headers: { "Content-Type": "application/json" } }
      );
      
      console.log("Reset password response:", response.data);
      setResponseMessage("Password reset link sent to your email!");
      
      // Redirect back to login page after a short delay
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      setResponseMessage(
        error.response?.data?.message || "Failed to send reset link. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mainn">
      <div className="form-container">
        <h1 className="title">Forgot Password</h1>

        {responseMessage && (
          <p className="response-message">{responseMessage}</p>
        )}

        <form className="form-section" onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={handleChange}
            className={emailError ? "input-error" : ""}
          />
          {emailError && <p className="error">{emailError}</p>}

          <button 
            type="submit" 
            className="submit-btn" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Reset Password"}
          </button>
        </form>

        <p className="switch-form">
          Remember your password? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;