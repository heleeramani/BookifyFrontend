// // import React, { useState } from "react";
// // import "../styles/Registration.css";

// // const Registration = () => {
// //   const [step, setStep] = useState(1);
// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     phone: "",
// //     password: "",
// //     address: "",
// //     gender: "",
// //   });

// //   const [errors, setErrors] = useState({});

// //   // Handle Input Change
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });

// //     // Validate each field immediately when user types
// //     validateField(name, value);
// //   };

// //   // Validate a single field
// //   const validateField = (name, value) => {
// //     let newErrors = { ...errors };

// //     if (name === "firstName" || name === "lastName") {
// //       if (!value) newErrors[name] = "Required field";
// //       else if (!/^[A-Za-z]+$/.test(value)) newErrors[name] = "Only alphabets allowed";
// //       else delete newErrors[name];
// //     }

// //     if (name === "email") {
// //       if (!value) newErrors.email = "Required field";
// //       else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) newErrors.email = "Enter a valid email";
// //       else delete newErrors.email;
// //     }

// //     if (name === "phone") {
// //       if (!value) newErrors.phone = "Required field";
// //       else if (!/^\d{10}$/.test(value)) newErrors.phone = "Phone number must be 10 digits";
// //       else delete newErrors.phone;
// //     }

// //     if (name === "password") {
// //       if (!value) newErrors.password = "Required field";
// //       else if (value.length < 6) newErrors.password = "Password must be at least 6 characters";
// //       else delete newErrors.password;
// //     }

// //     if (name === "address") {
// //       if (!value) newErrors.address = "Address is required";
// //       else delete newErrors.address;
// //     }

// //     if (name === "gender") {
// //       if (!value) newErrors.gender = "Please select a gender";
// //       else delete newErrors.gender;
// //     }

// //     setErrors(newErrors);
// //   };

// //   // Validate full step before proceeding
// //   const validateStep = () => {
// //     let newErrors = {};

// //     if (step === 1) {
// //       if (!formData.firstName) newErrors.firstName = "Required field";
// //       else if (!/^[A-Za-z]+$/.test(formData.firstName)) newErrors.firstName = "Only alphabets allowed";

// //       if (!formData.lastName) newErrors.lastName = "Required field";
// //       else if (!/^[A-Za-z]+$/.test(formData.lastName)) newErrors.lastName = "Only alphabets allowed";
// //     }

// //     if (step === 2) {
// //       if (!formData.email) newErrors.email = "Required field";
// //       else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";

// //       if (!formData.phone) newErrors.phone = "Required field";
// //       else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number must be 10 digits";

// //       if (!formData.password) newErrors.password = "Required field";
// //       else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
// //     }

// //     if (step === 3) {
// //       if (!formData.address) newErrors.address = "Address is required";
// //       if (!formData.gender) newErrors.gender = "Please select a gender";
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   // Move to next step
// //   const nextStep = () => {
// //     if (validateStep()) {
// //       setStep(step + 1);
// //     }
// //   };

// //   // Move to previous step
// //   const prevStep = () => {
// //     setStep(step - 1);
// //   };

// //   return (
// //     <div className="form-container">
// //       <h1 className="title">Signup Form</h1>

// //       {/* Step Indicator */}
// //       <div className="step-indicator">
// //         {["Name", "Contact", "Birth", "Submit"].map((label, index) => (
// //           <div key={index} className={`step ${step === index + 1 ? "active" : ""}`}>
// //             <span>{label}</span>
// //             <div className={step === index + 1 ? "circle active-circle" : "circle"}>
// //               {index + 1}
// //             </div>
// //             {index < 3 && <div className="line" />}
// //           </div>
// //         ))}
// //       </div>

// //       {/* Step 1 - Name */}
// //       {step === 1 && (
// //         <div className="form-section">
// //           <h2>Basic Info:</h2>
// //           <label>First Name</label>
// //           <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={errors.firstName ? "error-input" : ""} />
// //           {errors.firstName && <p className="error">{errors.firstName}</p>}

// //           <label>Last Name</label>
// //           <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={errors.lastName ? "error-input" : ""} />
// //           {errors.lastName && <p className="error">{errors.lastName}</p>}

// //           <button onClick={nextStep} className="next-btn">Next</button>
// //         </div>
// //       )}

// //       {/* Step 2 - Contact */}
// //       {step === 2 && (
// //         <div className="form-section">
// //           <h2>Contact Info:</h2>
// //           <label>Email</label>
// //           <input type="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? "error-input" : ""} />
// //           {errors.email && <p className="error">{errors.email}</p>}

// //           <label>Phone</label>
// //           <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? "error-input" : ""} />
// //           {errors.phone && <p className="error">{errors.phone}</p>}

// //           <label>Password</label>
// //           <input type="password" name="password" value={formData.password} onChange={handleChange} className={errors.password ? "error-input" : ""} />
// //           {errors.password && <p className="error">{errors.password}</p>}

// //           <div className="btn-group">
// //             <button onClick={prevStep} className="prev-btn">Previous</button>
// //             <button onClick={nextStep} className="next-btn">Next</button>
// //           </div>
// //         </div>
// //       )}

// //       {/* Step 3 - Birth Info */}
// //       {step === 3 && (
// //         <div className="form-section">
// //           <h2>Other Info:</h2>
// //           <label>Address</label>
// //           <input type="text" name="address" value={formData.address} onChange={handleChange} className={errors.address ? "error-input" : ""} />
// //           {errors.address && <p className="error">{errors.address}</p>}

// //           <label>Gender</label>
// //           <select name="gender" value={formData.gender} onChange={handleChange} className={errors.gender ? "error-input" : ""}>
// //             <option value="">Select Gender</option>
// //             <option>Male</option>
// //             <option>Female</option>
// //             <option>Other</option>
// //           </select>
// //           {errors.gender && <p className="error">{errors.gender}</p>}

// //           <button onClick={prevStep} className="prev-btn">Previous</button>
// //           <button onClick={nextStep} className="next-btn">Next</button>
// //         </div>
// //       )}

// //       {/* Step 4 - Submit */}
// //       {step === 4 && <h2>🎉 Form Submitted Successfully!</h2>}
// //     </div>
// //   );
// // };

// // export default Registration;

// // -----------------------final ----------------------

// // import React, { useState } from "react";
// // import axios from "axios";
// // import "../styles/Registration.css";

// // const Registration = () => {
// //   const [step, setStep] = useState(1);
// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     phone: "",
// //     password: "",
// //     address: "",
// //     gender: "",
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [successMessage, setSuccessMessage] = useState("");

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //     validateField(name, value);
// //   };

// //   const validateField = (name, value) => {
// //     const newErrors = { ...errors };

// //     if (["firstName", "lastName"].includes(name)) {
// //       newErrors[name] = !value
// //         ? "Required field"
// //         : /^[A-Za-z]+$/.test(value)
// //         ? ""
// //         : "Only alphabets allowed";
// //     }

// //     if (name === "email") {
// //       newErrors.email = !value
// //         ? "Required field"
// //         : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
// //         ? ""
// //         : "Enter a valid email";
// //     }

// //     if (name === "phone") {
// //       newErrors.phone = !value
// //         ? "Required field"
// //         : /^\d{10}$/.test(value)
// //         ? ""
// //         : "Phone number must be 10 digits";
// //     }

// //     if (name === "password") {
// //       newErrors.password = !value
// //         ? "Required field"
// //         : value.length < 6
// //         ? "Password must be at least 6 characters"
// //         : "";
// //     }

// //     if (name === "address") {
// //       newErrors.address = !value ? "Address is required" : "";
// //     }

// //     if (name === "gender") {
// //       newErrors.gender = !value ? "Please select a gender" : "";
// //     }

// //     setErrors(newErrors);
// //   };

// //   const validateStep = () => {
// //     const newErrors = {};
// //     if (step === 1) {
// //       if (!formData.firstName) newErrors.firstName = "Required field";
// //       if (!formData.lastName) newErrors.lastName = "Required field";
// //     } else if (step === 2) {
// //       if (!formData.email) newErrors.email = "Required field";
// //       if (!formData.phone) newErrors.phone = "Required field";
// //       if (!formData.password) newErrors.password = "Required field";
// //     } else if (step === 3) {
// //       if (!formData.address) newErrors.address = "Address is required";
// //       if (!formData.gender) newErrors.gender = "Please select a gender";
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const nextStep = () => {
// //     if (validateStep()) setStep(step + 1);
// //   };

// //   const prevStep = () => {
// //     setStep(step - 1);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!validateStep()) return;

// //     const payload = {
// //       firstName: formData.firstName,
// //       lastName: formData.lastName,
// //       email: formData.email,
// //       password: formData.password,
// //       role: "user",
// //       phone: formData.phone,
// //       address: formData.address,
// //     };

// //     try {
// //       const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, payload);
// //       setSuccessMessage("🎉 Registration successful!");
// //       console.log("Response:", response.data);
// //       setStep(4);
// //     } catch (error) {
// //       console.error("Error during registration:", error);
// //       setSuccessMessage("❌ Registration failed. Please try again.");
// //     }
// //   };

// //   return (
// //     <div className="register-main-form">
// //       <div className="register-form-container">
// //       <h1 className="register-title">Signup Form</h1>

// //       <div className="register-step-indicator">
// //         {["Name", "Contact", "Other Info", "Submit"].map((label, index) => (
// //           <div key={index} className={`register-step ${step === index + 1 ? "active" : ""}`}>
// //             <span>{label}</span>
// //             <div className={step === index + 1 ? "register-circle register-active-circle" : "register-circle"}>
// //               {index + 1}
// //             </div>
// //             {index < 3 && <div className="register-line" />}
// //           </div>
// //         ))}
// //       </div>

// //       {step === 1 && (
// //         <div className="register-form-section">
// //           <h2>Basic Info:</h2>
// //           <label>First Name</label>
// //           <input name="firstName" value={formData.firstName} onChange={handleChange} />
// //           {errors.firstName && <p className="register-error">{errors.firstName}</p>}

// //           <label>Last Name</label>
// //           <input name="lastName" value={formData.lastName} onChange={handleChange} />
// //           {errors.lastName && <p className="register-error">{errors.lastName}</p>}

// //           <button onClick={nextStep} className="register-next-btn register-btn">Next</button>
// //         </div>
// //       )}

// //       {step === 2 && (
// //         <div className="register-form-section">
// //           <h2>Contact Info:</h2>
// //           <label>Email</label>
// //           <input name="email" value={formData.email} onChange={handleChange} />
// //           {errors.email && <p className="register-error">{errors.email}</p>}

// //           <label>Phone</label>
// //           <input name="phone" value={formData.phone} onChange={handleChange} />
// //           {errors.phone && <p className="register-error">{errors.phone}</p>}

// //           <label>Password</label>
// //           <input type="password" name="password" value={formData.password} onChange={handleChange} />
// //           {errors.password && <p className="register-error">{errors.password}</p>}

// //           <div className="btn-group">
// //             <button onClick={prevStep} className="register-prev-btn register-btn">Previous</button>
// //             <button onClick={nextStep} className="register-next-btn register-btn">Next</button>
// //           </div>
// //         </div>
// //       )}

// //       {step === 3 && (
// //         <div className="form-section">
// //           <h2>Other Info:</h2>
// //           <label>Address</label>
// //           <input name="address" value={formData.address} onChange={handleChange} />
// //           {errors.address && <p className="register-error">{errors.address}</p>}

// //           <label>Gender</label>
// //           <select name="gender" value={formData.gender} onChange={handleChange}>
// //             <option value="">Select Gender</option>
// //             <option>Male</option>
// //             <option>Female</option>
// //             <option>Other</option>
// //           </select>
// //           {errors.gender && <p className="register-error">{errors.gender}</p>}

// //           <div className="btn-group">
// //             <button onClick={prevStep} className="register-prev-btn register-btn">Previous</button>
// //             <button onClick={nextStep} className="register-next-btn register-btn">Next</button>
// //           </div>
// //         </div>
// //       )}

// //       {step === 4 && (
// //         <div className="register-form-section">
// //           <h2>Confirm & Submit</h2>
// //           <p><strong>Name:</strong> {`${formData.firstName} ${formData.lastName}`}</p>
// //           <p><strong>Email:</strong> {formData.email}</p>
// //           <p><strong>Phone:</strong> {formData.phone}</p>
// //           <p><strong>Address:</strong> {formData.address}</p>
// //           <p><strong>Gender:</strong> {formData.gender}</p>

// //           {successMessage && <p className="register-success">{successMessage}</p>}

// //           <div className="register-btn-group">
// //             <button onClick={prevStep} className="register-prev-btn register-btn">Previous</button>
// //             <button onClick={handleSubmit} className="register-submit-btn register-btn">Submit</button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //     </div>
// //   );
// // };

// // export default Registration;

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
//     profilePicture: null,
//   });
//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     validateField(name, value);
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, profilePicture: e.target.files[0] });
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

//   console.log("First name being sent:", formData.firstName); // More reliable debug

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
//     if (step === 4 || validateStep()) setStep(step + 1);
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateStep()) return;

//     const formDataToSend = new FormData();
//     formDataToSend.append("firstName", formData.firstName);
//     formDataToSend.append("lastName", formData.lastName);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("password", formData.password);
//     formDataToSend.append("role", "user");
//     formDataToSend.append("phone", formData.phone);
//     formDataToSend.append("address", formData.address);
//     if (formData.profilePicture) {
//       formDataToSend.append("profilePicture", formData.profilePicture);
//     }
//     console.log(formDataToSend,"dmkfm");

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/auth/register`,
//         formDataToSend,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       setSuccessMessage("🎉 Registration successful!");
//       console.log("Response:", response.data);
//       setStep(6);
//     } catch (error) {
//       console.error("Error during registration:", error);
//       setSuccessMessage("❌ Registration failed. Please try again.");
//     }
//   };

//   return (
//     <div className="register-main-form">
//       <div className="register-form-container">
//         <h1 className="register-title">Signup Form</h1>

//         <div className="register-step-indicator">
//           {["Name", "Contact", "Other Info", "Profile Picture", "Submit"].map(
//             (label, index) => (
//               <div
//                 key={index}
//                 className={`register-step ${
//                   step === index + 1 ? "active" : ""
//                 }`}
//               >
//                 <span>{label}</span>
//                 <div
//                   className={
//                     step === index + 1
//                       ? "register-circle register-active-circle"
//                       : "register-circle"
//                   }
//                 >
//                   {index + 1}
//                 </div>
//                 {index < 4 && <div className="register-line" />}
//               </div>
//             )
//           )}
//         </div>

//         {step === 1 && (
//           <div className="register-form-section">
//             <h2>Basic Info:</h2>
//             <label>First Name</label>
//             <input
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//             />
//             {errors.firstName && (
//               <p className="register-error">{errors.firstName}</p>
//             )}

//             <label>Last Name</label>
//             <input
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//             />
//             {errors.lastName && (
//               <p className="register-error">{errors.lastName}</p>
//             )}

//             <button
//               onClick={nextStep}
//               className="register-next-btn register-btn"
//             >
//               Next
//             </button>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="register-form-section">
//             <h2>Contact Info:</h2>
//             <label>Email</label>
//             <input
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {errors.email && <p className="register-error">{errors.email}</p>}

//             <label>Phone</label>
//             <input
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//             {errors.phone && <p className="register-error">{errors.phone}</p>}

//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             {errors.password && (
//               <p className="register-error">{errors.password}</p>
//             )}

//             <div className="btn-group">
//               <button
//                 onClick={prevStep}
//                 className="register-prev-btn register-btn"
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={nextStep}
//                 className="register-next-btn register-btn"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         {step === 3 && (
//           <div className="register-form-section">
//             <h2>Other Info:</h2>
//             <label>Address</label>
//             <input
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//             />
//             {errors.address && (
//               <p className="register-error">{errors.address}</p>
//             )}

//             <label>Gender</label>
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//             >
//               <option value="">Select Gender</option>
//               <option>Male</option>
//               <option>Female</option>
//               <option>Other</option>
//             </select>
//             {errors.gender && <p className="register-error">{errors.gender}</p>}

//             <div className="btn-group">
//               <button
//                 onClick={prevStep}
//                 className="register-prev-btn register-btn"
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={nextStep}
//                 className="register-next-btn register-btn"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         {step === 4 && (
//           <div className="register-form-section">
//             <h2>Upload Profile Picture (Optional)</h2>
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//             <button
//               onClick={nextStep}
//               className="register-next-btn register-btn"
//             >
//               Next
//             </button>
//           </div>
//         )}

//         {step === 5 && (
//           <div className="register-form-section">
//             <h2>Confirm & Submit</h2>
//             <p>
//               <strong>Name:</strong>{" "}
//               {`${formData.firstName} ${formData.lastName}`}
//             </p>
//             <p>
//               <strong>Email:</strong> {formData.email}
//             </p>
//             <p>
//               <strong>Phone:</strong> {formData.phone}
//             </p>
//             <p>
//               <strong>Address:</strong> {formData.address}
//             </p>
//             <p>
//               <strong>Gender:</strong> {formData.gender}
//             </p>

//             {successMessage && (
//               <p className="register-success">{successMessage}</p>
//             )}

//             <div className="register-btn-group">
//               <button
//                 onClick={prevStep}
//                 className="register-prev-btn register-btn"
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="register-submit-btn register-btn"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Registration;

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
//     profilePicture: null,
//   });
//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");
//   const [regData, setRegData] = useState();
//   const [loading, setLoading] = useState();
//   const [error, setError] = useState();
//   const [alert, setAlert] = useState()
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     validateField(name, value);
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, profilePicture: e.target.files[0] });
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

//   // const handleSubmit = async () => {
//   //   // Handle form submission here
//   //   console.log(regData);
//   //   try {
//   //     setLoading(true);

//   //     // if (!regData.title || !bookData.author || !bookData.category) {
//   //     //   setAlert({
//   //     //     open: true,
//   //     //     message: "Title, author, and category are required",
//   //     //     severity: "error"
//   //     //   });
//   //     //   return;
//   //     // }
//   //     //--------------------
//   //     let imageId = null;
//   //     if (!(regData.image instanceof File)) {
//   //       console.error("Invalid file format", regData.image);

//   //       return;
//   //     }

//   //     // If there's a new image to upload
//   //     if (regData.image) {
//   //       const formData = new FormData();
//   //       formData.append("file", regData.image);
//   //       console.log(regData.image, "book dataaaa");
//   //       // console.log(formData,"form data");

//   //       for (let pair of formData.entries()) {
//   //         console.log(`FormData Key: ${pair[0]}, Value: ${pair[1]}`);
//   //       }

//   //       // Upload image first
//   //       const imageResponse = await axios.post(
//   //         `${process.env.REACT_APP_BASE_URL}/auth/upload`,
//   //         formData,
//   //         {
//   //           headers: {
//   //             "Content-Type": "multipart/form-data",
//   //           },
//   //         }
//   //       );
//   //       console.log(imageResponse, "image responseeee");

//   //       imageId = imageResponse.data.data._id;
//   //       console.log(imageId, "image iddddd");
//   //     }
//   //     //-------------------------------
//   //     // Prepare book data
//   //     const bookPayload = {
//   //       // title: bookData.title,
//   //       // author: bookData.author,
//   //       // isbn: bookData.isbn,
//   //       // category: bookData.category,
//   //       // price: bookData.price,
//   //       // publishYear: bookData.publishYear,
//   //       // publisher: bookData.publisher,
//   //       // description: bookData.description,
//   //       // totalCopy: bookData.totalCopy

//   //       firstName: regData.firstName,
//   //       lastName: regData.lastName,
//   //       email: regData.email,
//   //       phone: regData.phone,
//   //       password: regData.password,
//   //       address: regData.address,
//   //       gender: regData.gender,
//   //     };
//   //     //-------------------image
//   //     // Add image ID to payload if we have one
//   //     if (imageId) {
//   //       bookPayload.profile = imageId;
//   //     }
//   //     //-------------------image
//   //   } catch (err) {
//   //     console.error("Error saving book:", error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleSubmitt = async (e) => {
//     e.preventDefault();
//     if (!validateStep()) return;

//     // Debug: Log all form data before submission
//     console.log("Form data before submission:", formData);

//     try {
//       // Method 1: Using FormData (for files)
//       if (formData.profilePicture) {
//         const formDataToSend = new FormData();
//         // Explicitly trim strings to remove any whitespace
//         formDataToSend.append("firstName", formData.firstName.trim());
//         formDataToSend.append("lastName", formData.lastName.trim());
//         formDataToSend.append("email", formData.email.trim());
//         formDataToSend.append("password", formData.password);
//         formDataToSend.append("role", "user");
//         formDataToSend.append("phone", formData.phone.trim());
//         formDataToSend.append("address", formData.address.trim());
//         formDataToSend.append("gender", formData.gender);
//         formDataToSend.append("profilePicture", formData.profilePicture);

//         // Debug: Log each piece of data in the FormData
//         for (let pair of formDataToSend.entries()) {
//           console.log(pair[0] + ": " + pair[1]);
//         }

//         const response = await axios.post(
//           `${process.env.REACT_APP_BASE_URL}/auth/register`,
//           formDataToSend,
//           {
//             headers: { "Content-Type": "multipart/form-data" },
//           }
//         );

//         console.log("Response:", response.data);
//         setSuccessMessage("🎉 Registration successful!");
//         setStep(6);
//       }
//       // Method 2: Using JSON (when no file is uploaded)
//       else {
//         const jsonData = {
//           firstName: formData.firstName.trim(),
//           lastName: formData.lastName.trim(),
//           email: formData.email.trim(),
//           password: formData.password,
//           role: "user",
//           phone: formData.phone.trim(),
//           address: formData.address.trim(),
//           gender: formData.gender,
//         };

//         console.log("JSON data being sent:", jsonData);

//         const response = await axios.post(
//           `${process.env.REACT_APP_BASE_URL}/auth/register`,
//           jsonData,
//           {
//             headers: { "Content-Type": "application/json" },
//           }
//         );

//         console.log("Response:", response.data);
//         setSuccessMessage("🎉 Registration successful!");
//         setStep(6);
//       }
//     } catch (error) {
//       console.error(
//         "Error during registration:",
//         error.response?.data || error.message
//       );
//       setSuccessMessage(
//         `❌ Registration failed: ${
//           error.response?.data?.message || "Please try again."
//         }`
//       );
//     }
//   };

//   return (
//     <div className="register-main-form">
//       <div className="register-form-container">
//         <h1 className="register-title">Signup Form</h1>

//         <div className="register-step-indicator">
//           {["Name", "Contact", "Other Info", "Profile Picture", "Submit"].map(
//             (label, index) => (
//               <div
//                 key={index}
//                 className={`register-step ${
//                   step === index + 1 ? "active" : ""
//                 }`}
//               >
//                 <span>{label}</span>
//                 <div
//                   className={
//                     step === index + 1
//                       ? "register-circle register-active-circle"
//                       : "register-circle"
//                   }
//                 >
//                   {index + 1}
//                 </div>
//                 {index < 4 && <div className="register-line" />}
//               </div>
//             )
//           )}
//         </div>

//         {step === 1 && (
//           <div className="register-form-section">
//             <h2>Basic Info:</h2>
//             <label>First Name</label>
//             <input
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               placeholder="Enter your first name"
//             />
//             {errors.firstName && (
//               <p className="register-error">{errors.firstName}</p>
//             )}

//             <label>Last Name</label>
//             <input
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               placeholder="Enter your last name"
//             />
//             {errors.lastName && (
//               <p className="register-error">{errors.lastName}</p>
//             )}

//             <button
//               onClick={nextStep}
//               className="register-next-btn register-btn"
//               disabled={!formData.firstName || !formData.lastName}
//             >
//               Next
//             </button>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="register-form-section">
//             <h2>Contact Info:</h2>
//             <label>Email</label>
//             <input
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//             />
//             {errors.email && <p className="register-error">{errors.email}</p>}

//             <label>Phone</label>
//             <input
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Enter your 10-digit phone number"
//             />
//             {errors.phone && <p className="register-error">{errors.phone}</p>}

//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter password (min 6 characters)"
//             />
//             {errors.password && (
//               <p className="register-error">{errors.password}</p>
//             )}

//             <div className="btn-group">
//               <button
//                 onClick={prevStep}
//                 className="register-prev-btn register-btn"
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={nextStep}
//                 className="register-next-btn register-btn"
//                 disabled={
//                   !formData.email || !formData.phone || !formData.password
//                 }
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         {step === 3 && (
//           <div className="register-form-section">
//             <h2>Other Info:</h2>
//             <label>Address</label>
//             <input
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               placeholder="Enter your address"
//             />
//             {errors.address && (
//               <p className="register-error">{errors.address}</p>
//             )}

//             <label>Gender</label>
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//             {errors.gender && <p className="register-error">{errors.gender}</p>}

//             <div className="btn-group">
//               <button
//                 onClick={prevStep}
//                 className="register-prev-btn register-btn"
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={nextStep}
//                 className="register-next-btn register-btn"
//                 disabled={!formData.address || !formData.gender}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         {step === 4 && (
//           <div className="register-form-section">
//             <h2>Upload Profile Picture (Optional)</h2>
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//             <div className="btn-group">
//               <button
//                 onClick={prevStep}
//                 className="register-prev-btn register-btn"
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={nextStep}
//                 className="register-next-btn register-btn"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         {step === 5 && (
//           <div className="register-form-section">
//             <h2>Confirm & Submit</h2>
//             <p>
//               <strong>Name:</strong>{" "}
//               {`${formData.firstName} ${formData.lastName}`}
//             </p>
//             <p>
//               <strong>Email:</strong> {formData.email}
//             </p>
//             <p>
//               <strong>Phone:</strong> {formData.phone}
//             </p>
//             <p>
//               <strong>Address:</strong> {formData.address}
//             </p>
//             <p>
//               <strong>Gender:</strong> {formData.gender}
//             </p>
//             <p>
//               <strong>Profile Picture:</strong>{" "}
//               {formData.profilePicture ? formData.profilePicture.name : "None"}
//             </p>

//             {successMessage && (
//               <p className="register-success">{successMessage}</p>
//             )}

//             <div className="register-btn-group">
//               <button
//                 onClick={prevStep}
//                 className="register-prev-btn register-btn"
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={handleSubmitt}
//                 className="register-submit-btn register-btn"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         )}

//         {step === 6 && successMessage.includes("successful") && (
//           <div className="register-form-section">
//             <h2>Registration Complete!</h2>
//             <p>{successMessage}</p>
//             <p>You can now login with your email and password.</p>
//           </div>
//         )}
//       </div>
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
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, profilePicture: e.target.files[0] });
    }
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
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    // Clear any previous messages
    setSuccessMessage("");
    setErrorMessage("");
    setLoading(true);

    try {
      const baseUrl = process.env.REACT_APP_BASE_URL;
      if (!baseUrl) {
        throw new Error("API base URL is not defined");
      }

      // Prepare the user data
      const userData = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        password: formData.password,
        role: "user",
        phone: formData.phone.trim(),
        address: formData.address.trim(),
        gender: formData.gender,
      };

      // Log the data being sent
      console.log("User data:", userData);

      // If there's a profile picture, handle it separately
      if (formData.profilePicture) {
        // First, upload the profile picture
        const imageFormData = new FormData();
        imageFormData.append("file", formData.profilePicture);
        
        console.log("Uploading profile picture...");
        
        try {
          const imageResponse = await axios.post(
            `${baseUrl}/auth/upload`,
            imageFormData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          
          // If image upload is successful, add the image ID to the user data
          if (imageResponse.data?.data?._id) {
            userData.profile = imageResponse.data.data._id;
            console.log("Image uploaded successfully, ID:", userData.profile);
          }
        } catch (imageError) {
          console.error("Error uploading image:", imageError);
          // Continue with registration without the profile image
        }
      }

      // Now send the user registration request
      console.log("Sending registration request:", userData);
      
      const response = await axios.post(
        `${baseUrl}/auth/register`,
        userData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Registration successful:", response.data);
      setSuccessMessage("🎉 Registration successful!");
      setStep(6);
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response?.data || error.message
      );
      
      // Show detailed error message
      setErrorMessage(
        `Registration failed: ${
          error.response?.data?.error || 
          error.response?.data?.message || 
          error.message || 
          "Please try again."
        }`
      );
    } finally {
      setLoading(false);
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
          <div className="register-form-section" role="form">
            <h2>Basic Info:</h2>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              aria-required="true"
              aria-invalid={!!errors.firstName}
            />
            {errors.firstName && (
              <p className="register-error" role="alert">
                {errors.firstName}
              </p>
            )}

            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              aria-required="true"
              aria-invalid={!!errors.lastName}
            />
            {errors.lastName && (
              <p className="register-error" role="alert">
                {errors.lastName}
              </p>
            )}

            <button
              onClick={nextStep}
              className="register-next-btn register-btn"
              disabled={!formData.firstName || !formData.lastName}
              aria-label="Next step"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="register-form-section" role="form">
            <h2>Contact Info:</h2>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              aria-required="true"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="register-error" role="alert">
                {errors.email}
              </p>
            )}

            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your 10-digit phone number"
              aria-required="true"
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className="register-error" role="alert">
                {errors.phone}
              </p>
            )}

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password (min 6 characters)"
              aria-required="true"
              aria-invalid={!!errors.password}
            />
            {errors.password && (
              <p className="register-error" role="alert">
                {errors.password}
              </p>
            )}

            <div className="btn-group">
              <button
                onClick={prevStep}
                className="register-prev-btn register-btn"
                aria-label="Previous step"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="register-next-btn register-btn"
                disabled={
                  !formData.email || !formData.phone || !formData.password
                }
                aria-label="Next step"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="register-form-section" role="form">
            <h2>Other Info:</h2>
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              aria-required="true"
              aria-invalid={!!errors.address}
            />
            {errors.address && (
              <p className="register-error" role="alert">
                {errors.address}
              </p>
            )}

            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.gender}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <p className="register-error" role="alert">
                {errors.gender}
              </p>
            )}

            <div className="btn-group">
              <button
                onClick={prevStep}
                className="register-prev-btn register-btn"
                aria-label="Previous step"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="register-next-btn register-btn"
                disabled={!formData.address || !formData.gender}
                aria-label="Next step"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="register-form-section" role="form">
            <h2>Upload Profile Picture (Optional)</h2>
            <input
              id="profilePicture"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              aria-label="Upload profile picture"
            />
            {formData.profilePicture && (
              <p>Selected file: {formData.profilePicture.name}</p>
            )}
            <div className="btn-group">
              <button
                onClick={prevStep}
                className="register-prev-btn register-btn"
                aria-label="Previous step"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="register-next-btn register-btn"
                aria-label="Next step"
              >
                Next
              </button>
            </div>
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
            <p>
              <strong>Profile Picture:</strong>{" "}
              {formData.profilePicture ? formData.profilePicture.name : "None"}
            </p>

            {errorMessage && (
              <p className="register-error" role="alert">
                {errorMessage}
              </p>
            )}
            
            {successMessage && (
              <p className="register-success" role="status">
                {successMessage}
              </p>
            )}

            <div className="register-btn-group">
              <button
                onClick={prevStep}
                className="register-prev-btn register-btn"
                aria-label="Previous step"
              >
                Previous
              </button>
              <button
                onClick={handleSubmit}
                className="register-submit-btn register-btn"
                disabled={loading}
                aria-label="Submit registration"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        )}

        {step === 6 && successMessage && (
          <div className="register-form-section">
            <h2>Registration Complete!</h2>
            <p className="register-success" role="status">
              {successMessage}
            </p>
            <p>You can now login with your email and password.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;