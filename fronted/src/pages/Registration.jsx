// import React, { useState } from "react";
// import "../styles/Registration.css";

// const Registration = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     address: "",
//     gender: "",
//   });

//   const [errors, setErrors] = useState({});

//   // Handle Input Change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Validate each field immediately when user types
//     validateField(name, value);
//   };

//   // Validate a single field
//   const validateField = (name, value) => {
//     let newErrors = { ...errors };

//     if (name === "firstName" || name === "lastName") {
//       if (!value) newErrors[name] = "Required field";
//       else if (!/^[A-Za-z]+$/.test(value)) newErrors[name] = "Only alphabets allowed";
//       else delete newErrors[name];
//     }

//     if (name === "email") {
//       if (!value) newErrors.email = "Required field";
//       else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) newErrors.email = "Enter a valid email";
//       else delete newErrors.email;
//     }

//     if (name === "phone") {
//       if (!value) newErrors.phone = "Required field";
//       else if (!/^\d{10}$/.test(value)) newErrors.phone = "Phone number must be 10 digits";
//       else delete newErrors.phone;
//     }

//     if (name === "password") {
//       if (!value) newErrors.password = "Required field";
//       else if (value.length < 6) newErrors.password = "Password must be at least 6 characters";
//       else delete newErrors.password;
//     }

//     if (name === "address") {
//       if (!value) newErrors.address = "Address is required";
//       else delete newErrors.address;
//     }

//     if (name === "gender") {
//       if (!value) newErrors.gender = "Please select a gender";
//       else delete newErrors.gender;
//     }

//     setErrors(newErrors);
//   };

//   // Validate full step before proceeding
//   const validateStep = () => {
//     let newErrors = {};

//     if (step === 1) {
//       if (!formData.firstName) newErrors.firstName = "Required field";
//       else if (!/^[A-Za-z]+$/.test(formData.firstName)) newErrors.firstName = "Only alphabets allowed";

//       if (!formData.lastName) newErrors.lastName = "Required field";
//       else if (!/^[A-Za-z]+$/.test(formData.lastName)) newErrors.lastName = "Only alphabets allowed";
//     }

//     if (step === 2) {
//       if (!formData.email) newErrors.email = "Required field";
//       else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";

//       if (!formData.phone) newErrors.phone = "Required field";
//       else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number must be 10 digits";

//       if (!formData.password) newErrors.password = "Required field";
//       else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
//     }

//     if (step === 3) {
//       if (!formData.address) newErrors.address = "Address is required";
//       if (!formData.gender) newErrors.gender = "Please select a gender";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Move to next step
//   const nextStep = () => {
//     if (validateStep()) {
//       setStep(step + 1);
//     }
//   };

//   // Move to previous step
//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   return (
//     <div className="form-container">
//       <h1 className="title">Signup Form</h1>

//       {/* Step Indicator */}
//       <div className="step-indicator">
//         {["Name", "Contact", "Birth", "Submit"].map((label, index) => (
//           <div key={index} className={`step ${step === index + 1 ? "active" : ""}`}>
//             <span>{label}</span>
//             <div className={step === index + 1 ? "circle active-circle" : "circle"}>
//               {index + 1}
//             </div>
//             {index < 3 && <div className="line" />}
//           </div>
//         ))}
//       </div>

//       {/* Step 1 - Name */}
//       {step === 1 && (
//         <div className="form-section">
//           <h2>Basic Info:</h2>
//           <label>First Name</label>
//           <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={errors.firstName ? "error-input" : ""} />
//           {errors.firstName && <p className="error">{errors.firstName}</p>}

//           <label>Last Name</label>
//           <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={errors.lastName ? "error-input" : ""} />
//           {errors.lastName && <p className="error">{errors.lastName}</p>}

//           <button onClick={nextStep} className="next-btn">Next</button>
//         </div>
//       )}

//       {/* Step 2 - Contact */}
//       {step === 2 && (
//         <div className="form-section">
//           <h2>Contact Info:</h2>
//           <label>Email</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? "error-input" : ""} />
//           {errors.email && <p className="error">{errors.email}</p>}

//           <label>Phone</label>
//           <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? "error-input" : ""} />
//           {errors.phone && <p className="error">{errors.phone}</p>}

//           <label>Password</label>
//           <input type="password" name="password" value={formData.password} onChange={handleChange} className={errors.password ? "error-input" : ""} />
//           {errors.password && <p className="error">{errors.password}</p>}

//           <div className="btn-group">
//             <button onClick={prevStep} className="prev-btn">Previous</button>
//             <button onClick={nextStep} className="next-btn">Next</button>
//           </div>
//         </div>
//       )}

//       {/* Step 3 - Birth Info */}
//       {step === 3 && (
//         <div className="form-section">
//           <h2>Other Info:</h2>
//           <label>Address</label>
//           <input type="text" name="address" value={formData.address} onChange={handleChange} className={errors.address ? "error-input" : ""} />
//           {errors.address && <p className="error">{errors.address}</p>}

//           <label>Gender</label>
//           <select name="gender" value={formData.gender} onChange={handleChange} className={errors.gender ? "error-input" : ""}>
//             <option value="">Select Gender</option>
//             <option>Male</option>
//             <option>Female</option>
//             <option>Other</option>
//           </select>
//           {errors.gender && <p className="error">{errors.gender}</p>}

//           <button onClick={prevStep} className="prev-btn">Previous</button>
//           <button onClick={nextStep} className="next-btn">Next</button>
//         </div>
//       )}

//       {/* Step 4 - Submit */}
//       {step === 4 && <h2>🎉 Form Submitted Successfully!</h2>}
//     </div>
//   );
// };

// export default Registration;

// -----------------------final ----------------------

// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/Registration.css";

// const Registration = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     address: "",
//     gender: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     validateField(name, value);
//   };

//   const validateField = (name, value) => {
//     const newErrors = { ...errors };

//     if (["firstName", "lastName"].includes(name)) {
//       newErrors[name] = !value
//         ? "Required field"
//         : /^[A-Za-z]+$/.test(value)
//         ? ""
//         : "Only alphabets allowed";
//     }

//     if (name === "email") {
//       newErrors.email = !value
//         ? "Required field"
//         : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
//         ? ""
//         : "Enter a valid email";
//     }

//     if (name === "phone") {
//       newErrors.phone = !value
//         ? "Required field"
//         : /^\d{10}$/.test(value)
//         ? ""
//         : "Phone number must be 10 digits";
//     }

//     if (name === "password") {
//       newErrors.password = !value
//         ? "Required field"
//         : value.length < 6
//         ? "Password must be at least 6 characters"
//         : "";
//     }

//     if (name === "address") {
//       newErrors.address = !value ? "Address is required" : "";
//     }

//     if (name === "gender") {
//       newErrors.gender = !value ? "Please select a gender" : "";
//     }

//     setErrors(newErrors);
//   };

//   const validateStep = () => {
//     const newErrors = {};
//     if (step === 1) {
//       if (!formData.firstName) newErrors.firstName = "Required field";
//       if (!formData.lastName) newErrors.lastName = "Required field";
//     } else if (step === 2) {
//       if (!formData.email) newErrors.email = "Required field";
//       if (!formData.phone) newErrors.phone = "Required field";
//       if (!formData.password) newErrors.password = "Required field";
//     } else if (step === 3) {
//       if (!formData.address) newErrors.address = "Address is required";
//       if (!formData.gender) newErrors.gender = "Please select a gender";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const nextStep = () => {
//     if (validateStep()) setStep(step + 1);
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateStep()) return;

//     const payload = {
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       email: formData.email,
//       password: formData.password,
//       role: "user",
//       phone: formData.phone,
//       address: formData.address,
//     };

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, payload);
//       setSuccessMessage("🎉 Registration successful!");
//       console.log("Response:", response.data);
//       setStep(4);
//     } catch (error) {
//       console.error("Error during registration:", error);
//       setSuccessMessage("❌ Registration failed. Please try again.");
//     }
//   };

//   return (
//     <div className="register-main-form">
//       <div className="register-form-container">
//       <h1 className="register-title">Signup Form</h1>

//       <div className="register-step-indicator">
//         {["Name", "Contact", "Other Info", "Submit"].map((label, index) => (
//           <div key={index} className={`register-step ${step === index + 1 ? "active" : ""}`}>
//             <span>{label}</span>
//             <div className={step === index + 1 ? "register-circle register-active-circle" : "register-circle"}>
//               {index + 1}
//             </div>
//             {index < 3 && <div className="register-line" />}
//           </div>
//         ))}
//       </div>

//       {step === 1 && (
//         <div className="register-form-section">
//           <h2>Basic Info:</h2>
//           <label>First Name</label>
//           <input name="firstName" value={formData.firstName} onChange={handleChange} />
//           {errors.firstName && <p className="register-error">{errors.firstName}</p>}

//           <label>Last Name</label>
//           <input name="lastName" value={formData.lastName} onChange={handleChange} />
//           {errors.lastName && <p className="register-error">{errors.lastName}</p>}

//           <button onClick={nextStep} className="register-next-btn register-btn">Next</button>
//         </div>
//       )}

//       {step === 2 && (
//         <div className="register-form-section">
//           <h2>Contact Info:</h2>
//           <label>Email</label>
//           <input name="email" value={formData.email} onChange={handleChange} />
//           {errors.email && <p className="register-error">{errors.email}</p>}

//           <label>Phone</label>
//           <input name="phone" value={formData.phone} onChange={handleChange} />
//           {errors.phone && <p className="register-error">{errors.phone}</p>}

//           <label>Password</label>
//           <input type="password" name="password" value={formData.password} onChange={handleChange} />
//           {errors.password && <p className="register-error">{errors.password}</p>}

//           <div className="btn-group">
//             <button onClick={prevStep} className="register-prev-btn register-btn">Previous</button>
//             <button onClick={nextStep} className="register-next-btn register-btn">Next</button>
//           </div>
//         </div>
//       )}

//       {step === 3 && (
//         <div className="form-section">
//           <h2>Other Info:</h2>
//           <label>Address</label>
//           <input name="address" value={formData.address} onChange={handleChange} />
//           {errors.address && <p className="register-error">{errors.address}</p>}

//           <label>Gender</label>
//           <select name="gender" value={formData.gender} onChange={handleChange}>
//             <option value="">Select Gender</option>
//             <option>Male</option>
//             <option>Female</option>
//             <option>Other</option>
//           </select>
//           {errors.gender && <p className="register-error">{errors.gender}</p>}

//           <div className="btn-group">
//             <button onClick={prevStep} className="register-prev-btn register-btn">Previous</button>
//             <button onClick={nextStep} className="register-next-btn register-btn">Next</button>
//           </div>
//         </div>
//       )}

//       {step === 4 && (
//         <div className="register-form-section">
//           <h2>Confirm & Submit</h2>
//           <p><strong>Name:</strong> {`${formData.firstName} ${formData.lastName}`}</p>
//           <p><strong>Email:</strong> {formData.email}</p>
//           <p><strong>Phone:</strong> {formData.phone}</p>
//           <p><strong>Address:</strong> {formData.address}</p>
//           <p><strong>Gender:</strong> {formData.gender}</p>

//           {successMessage && <p className="register-success">{successMessage}</p>}

//           <div className="register-btn-group">
//             <button onClick={prevStep} className="register-prev-btn register-btn">Previous</button>
//             <button onClick={handleSubmit} className="register-submit-btn register-btn">Submit</button>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Registration;

import React, { useState } from "react";
import axios from "axios";
import "../styles/Registration.css";

const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    gender: "",
    profilePicture: null,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    if (["firstName", "lastName"].includes(name)) {
      newErrors[name] = !value
        ? "Required field"
        : /^[A-Za-z]+$/.test(value)
        ? ""
        : "Only alphabets allowed";
    }

    if (name === "email") {
      newErrors.email = !value
        ? "Required field"
        : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "Enter a valid email";
    }

    if (name === "phone") {
      newErrors.phone = !value
        ? "Required field"
        : /^\d{10}$/.test(value)
        ? ""
        : "Phone number must be 10 digits";
    }

    if (name === "password") {
      newErrors.password = !value
        ? "Required field"
        : value.length < 6
        ? "Password must be at least 6 characters"
        : "";
    }

    if (name === "address") {
      newErrors.address = !value ? "Address is required" : "";
    }

    if (name === "gender") {
      newErrors.gender = !value ? "Please select a gender" : "";
    }

    setErrors(newErrors);
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = "Required field";
      if (!formData.lastName) newErrors.lastName = "Required field";
    } else if (step === 2) {
      if (!formData.email) newErrors.email = "Required field";
      if (!formData.phone) newErrors.phone = "Required field";
      if (!formData.password) newErrors.password = "Required field";
    } else if (step === 3) {
      if (!formData.address) newErrors.address = "Address is required";
      if (!formData.gender) newErrors.gender = "Please select a gender";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (step === 4 || validateStep()) setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("role", "user");
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("address", formData.address);
    if (formData.profilePicture) {
      formDataToSend.append("profilePicture", formData.profilePicture);
    }
    console.log(formDataToSend,"dmkfm");
    
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/register`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setSuccessMessage("🎉 Registration successful!");
      console.log("Response:", response.data);
      setStep(6);
    } catch (error) {
      console.error("Error during registration:", error);
      setSuccessMessage("❌ Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-main-form">
      <div className="register-form-container">
        <h1 className="register-title">Signup Form</h1>

        <div className="register-step-indicator">
          {["Name", "Contact", "Other Info", "Profile Picture", "Submit"].map(
            (label, index) => (
              <div
                key={index}
                className={`register-step ${
                  step === index + 1 ? "active" : ""
                }`}
              >
                <span>{label}</span>
                <div
                  className={
                    step === index + 1
                      ? "register-circle register-active-circle"
                      : "register-circle"
                  }
                >
                  {index + 1}
                </div>
                {index < 4 && <div className="register-line" />}
              </div>
            )
          )}
        </div>

        {step === 1 && (
          <div className="register-form-section">
            <h2>Basic Info:</h2>
            <label>First Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="register-error">{errors.firstName}</p>
            )}

            <label>Last Name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="register-error">{errors.lastName}</p>
            )}

            <button
              onClick={nextStep}
              className="register-next-btn register-btn"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="register-form-section">
            <h2>Contact Info:</h2>
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="register-error">{errors.email}</p>}

            <label>Phone</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="register-error">{errors.phone}</p>}

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="register-error">{errors.password}</p>
            )}

            <div className="btn-group">
              <button
                onClick={prevStep}
                className="register-prev-btn register-btn"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="register-next-btn register-btn"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="register-form-section">
            <h2>Other Info:</h2>
            <label>Address</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && (
              <p className="register-error">{errors.address}</p>
            )}

            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            {errors.gender && <p className="register-error">{errors.gender}</p>}

            <div className="btn-group">
              <button
                onClick={prevStep}
                className="register-prev-btn register-btn"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="register-next-btn register-btn"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="register-form-section">
            <h2>Upload Profile Picture (Optional)</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button
              onClick={nextStep}
              className="register-next-btn register-btn"
            >
              Next
            </button>
          </div>
        )}

        {step === 5 && (
          <div className="register-form-section">
            <h2>Confirm & Submit</h2>
            <p>
              <strong>Name:</strong>{" "}
              {`${formData.firstName} ${formData.lastName}`}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Phone:</strong> {formData.phone}
            </p>
            <p>
              <strong>Address:</strong> {formData.address}
            </p>
            <p>
              <strong>Gender:</strong> {formData.gender}
            </p>

            {successMessage && (
              <p className="register-success">{successMessage}</p>
            )}

            <div className="register-btn-group">
              <button
                onClick={prevStep}
                className="register-prev-btn register-btn"
              >
                Previous
              </button>
              <button
                onClick={handleSubmit}
                className="register-submit-btn register-btn"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;
