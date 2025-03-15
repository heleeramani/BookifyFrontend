// import '../style/Contact.css';
// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//     agreement: false,
//   });

//   const [errors, setErrors] = useState({});

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//     if (value) {
//       // If the value is filled, hide the error
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         [name]: "",
//       }));
//     }
//   };

//   // Validate form inputs
//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required.";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid.";
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone is required.";
//     } else if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = "Phone must be 10 digits.";
//     }
//     if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
//     if (!formData.message.trim()) newErrors.message = "Message is required.";
//     if (!formData.agreement) newErrors.agreement = "You must agree to the terms.";
//     return newErrors;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       alert("Form submitted successfully!");
//       // Reset form (optional)
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//         agreement: false,
//       });
//     }
//   };

//   return (
//     <div className="container py-5">
//       <div className="row">
//         {/* Contact Info Section */}
//         <div className="col-lg-5 col-md-6 col-sm-12 mb-4 contact-info text-center">
//           <h1 className="mb-3">Contact Us</h1>
//           <hr />
//           <p className="mb-1">Sutex Bank College, Surat, INDIA.</p>
//           <p className="mb-1 text-danger">+91 1234567890</p>
//           <p className="mb-3">example_info@email.com</p>
//           <div className="d-flex justify-content-center gap-3">
//             <a href="#" className="text-dark">
//               <i className="bi bi-facebook fs-4"></i>
//             </a>
//             <a href="#" className="text-dark">
//               <i className="bi bi-twitter fs-4"></i>
//             </a>
//             <a href="#" className="text-dark">
//               <i className="bi bi-instagram fs-4"></i>
//             </a>
//           </div>
//         </div>

//         {/* Contact Form Section */}
//         <div className="col-lg-7 col-md-6 col-sm-12">
//           <form onSubmit={handleSubmit}>
//             <div className="row g-3">
//               <div className="col-md-6">
//                 <input
//                   type="text"
//                   className={`form-control ${errors.name ? 'error' : formData.name ? 'success' : ''}`}
//                   placeholder="Name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//                 {errors.name && <small className="error-message">{errors.name}</small>}
//               </div>
//               <div className="col-md-6">
//                 <input
//                   type="email"
//                   className={`form-control ${errors.email ? 'error' : formData.email ? 'success' : ''}`}
//                   placeholder="Email Address"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 {errors.email && <small className="error-message">{errors.email}</small>}
//               </div>
//               <div className="col-md-6">
//                 <input
//                   type="text"
//                   className={`form-control ${errors.phone ? 'error' : formData.phone ? 'success' : ''}`}
//                   placeholder="Phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//                 {errors.phone && <small className="error-message">{errors.phone}</small>}
//               </div>
//               <div className="col-md-6">
//                 <input
//                   type="text"
//                   className={`form-control ${errors.subject ? 'error' : formData.subject ? 'success' : ''}`}
//                   placeholder="Subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                 />
//                 {errors.subject && <small className="error-message">{errors.subject}</small>}
//               </div>
//               <div className="col-12">
//                 <textarea
//                   className={`form-control ${errors.message ? 'error' : formData.message ? 'success' : ''}`}
//                   rows="5"
//                   placeholder="Message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                 ></textarea>
//                 {errors.message && <small className="error-message">{errors.message}</small>}
//               </div>
//               <div className="col-12">
//                 <div className="form-check">
//                   <input
//                     className={`form-check-input ${errors.agreement ? 'error' : formData.agreement ? 'success' : ''}`}
//                     type="checkbox"
//                     id="agreement"
//                     name="agreement"
//                     checked={formData.agreement}
//                     onChange={handleChange}
//                   />
//                   <label className="form-check-label" htmlFor="agreement">
//                     I agree that my submitted data is being collected and stored.
//                   </label>
//                   {errors.agreement && <small className="error-message">{errors.agreement}</small>}
//                 </div>
//               </div>
//               <div className="col-12 text-center">
//                 <button type="submit" className="btn btn-dark px-4">
//                   Send Message
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
// import "../style/Contact.css";
// import React, { useState } from "react";
// import axios from "axios";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//     agreement: false,
//   });
//   const [errors, setErrors] = useState({});
//   const [responseMessage, setResponseMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required.";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid.";
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone is required.";
//     } else if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = "Phone must be 10 digits.";
//     }
//     if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
//     if (!formData.message.trim()) newErrors.message = "Message is required.";
//     if (!formData.agreement)
//       newErrors.agreement = "You must agree to the terms.";
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://172.20.10.9:8080/user/contact/create",
//         formData
//       );
//       if (response.data.success) {
//         setResponseMessage("Form submitted successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//           agreement: false,
//         });
//       } else {
//         setResponseMessage("Submission failed. Please try again.");
//       }
//     } catch (error) {
//       setResponseMessage("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <div className="container py-5">
//       <div className="row">
//         <div className="col-lg-5 col-md-6 col-sm-12 mb-4 contact-info text-center">
//           <h1 className="mb-3">Contact Us</h1>
//           <hr />
//           <p className="mb-1">Sutex Bank College, Surat, INDIA.</p>
//           <p className="mb-1 text-danger">+91 1234567890</p>
//           <p className="mb-3">example_info@email.com</p>
//         </div>

//         <div className="col-lg-7 col-md-6 col-sm-12">
//           {responseMessage && (
//             <div className="alert alert-info">{responseMessage}</div>
//           )}
//           <form onSubmit={handleSubmit}>
//             <div className="row g-3">
//               <div className="col-md-6">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//                 {errors.name && (
//                   <small className="text-danger">{errors.name}</small>
//                 )}
//               </div>
//               <div className="col-md-6">
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Email Address"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 {errors.email && (
//                   <small className="text-danger">{errors.email}</small>
//                 )}
//               </div>
//               <div className="col-md-6">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//                 {errors.phone && (
//                   <small className="text-danger">{errors.phone}</small>
//                 )}
//               </div>
//               <div className="col-md-6">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                 />
//                 {errors.subject && (
//                   <small className="text-danger">{errors.subject}</small>
//                 )}
//               </div>
//               <div className="col-12">
//                 <textarea
//                   className="form-control"
//                   rows="5"
//                   placeholder="Message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                 ></textarea>
//                 {errors.message && (
//                   <small className="text-danger">{errors.message}</small>
//                 )}
//               </div>
//               {/* <div className="col-12">
//                     <div className="form-check">
//                       <input className="form-check-input" type="checkbox" id="agreement" name="agreement" checked={formData.agreement} onChange={handleChange} />
//                       <label className="form-check-label" htmlFor="agreement">I agree that my submitted data is being collected and stored.</label>
//                       {errors.agreement && <small className="text-danger">{errors.agreement}</small>}
//                     </div>
//                   </div> */}
//               <div className="col-12 text-center">
//                 <button type="submit" className="btn btn-dark px-4">
//                   Send Message
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import "../style/Contact.css";
import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreement: false,
  });

  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (!formData.agreement)
      newErrors.agreement = "You must agree to the terms.";
    return newErrors;
  };

  // console.log(formData, "formdataaaa");
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/contact/create`,
        { ...formData, agreement: formData.agreement ? true : false }, // Ensure boolean value
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("API Response:", response.data);

      if (response.data.success) {
        setResponseMessage("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          agreement: false,
        });
      } else {
        setResponseMessage(response.data.message || "Submission failed.");
      }
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      setResponseMessage(
        `Error: ${error.response?.data?.message || "Internal Server Error"}`
      );
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-5 col-md-6 col-sm-12 mb-4 contact-info text-center">
          <h1 className="mb-3">Contact Us</h1>
          <hr />
          <p className="mb-1">Sutex Bank College, Surat, INDIA.</p>
          <p className="mb-1 text-danger">+91 1234567890</p>
          <p className="mb-3">example_info@email.com</p>
        </div>

        <div className="col-lg-7 col-md-6 col-sm-12">
          {responseMessage && (
            <div className="alert alert-info">{responseMessage}</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <small className="text-danger">{errors.phone}</small>
                )}
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <small className="text-danger">{errors.subject}</small>
                )}
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <small className="text-danger">{errors.message}</small>
                )}
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="agreement"
                    name="agreement"
                    checked={formData.agreement}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="agreement">
                    I agree that my submitted data is being collected and
                    stored.
                  </label>
                  {errors.agreement && (
                    <small className="text-danger">{errors.agreement}</small>
                  )}
                </div>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-dark px-4">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
