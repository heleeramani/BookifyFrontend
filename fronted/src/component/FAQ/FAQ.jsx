// // import { useState } from "react";

// // const faqs = [
// //   {
// //     question: "What are the key features of a Library Management System?",
// //     answer: "It includes book tracking, member management, overdue notifications, and report generation.",
// //   },
// //   {
// //     question: "How does a Library Management System benefit the library?",
// //     answer: "It automates manual tasks, reduces errors, and improves efficiency.",
// //   },
// //   {
// //     question: "Can a Library Management System handle multiple branches or libraries?",
// //     answer: "Yes, it can manage multiple branches with centralized control.",
// //   },
// //   {
// //     question: "Is it possible to integrate a Library Management System with other systems?",
// //     answer: "Yes, it supports integration with other systems via APIs.",
// //   },
// //   {
// //     question: "How secure is the data in a Library Management System?",
// //     answer: "Data is encrypted and access-controlled to ensure security.",
// //   },
// //   {
// //     question: "Can a Library Management System generate reports?",
// //     answer: "Yes, it provides analytical reports on book usage and member activity.",
// //   },
// // ];

// // const FaqAccordion = () => {
// //   const [openIndex, setOpenIndex] = useState(null);

// //   const toggleAccordion = (index) => {
// //     setOpenIndex(openIndex === index ? null : index);
// //   };

// //   return (
// //     <div className="max-w-3xl mx-auto p-6">
// //       <h2 className="text-xl font-semibold text-blue-900 mb-4">
// //         What is a college Library Management System?
// //       </h2>
// //       <p className="text-gray-700 mb-6">
// //         A library management system is software with automation features that
// //         control every aspect of a library. It streamlines operations, reduces
// //         errors, and manages book circulation efficiently.
// //       </p>

// //       {faqs.map((faq, index) => (
// //         <div key={index} className="border-b border-gray-300">
// //           <button
// //             className="w-full flex justify-between items-center py-3 text-left text-lg font-medium text-gray-900 focus:outline-none"
// //             onClick={() => toggleAccordion(index)}
// //           >
// //             {faq.question}
// //             <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
// //           </button>
// //           {openIndex === index && (
// //             <p className="text-gray-600 pb-3">{faq.answer}</p>
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default FaqAccordion;
// // import React, { useState } from "react";
// // import "./FAQ.css"; // Import the external CSS file

// // const faqs = [
// //   {
// //     question: "What are the key features of a Library Management System?",
// //     answer: "A Library Management System includes features such as catalog management, user management, book tracking, reporting, and more."
// //   },
// //   {
// //     question: "How does a Library Management System benefit the library?",
// //     answer: "It improves efficiency, reduces manual work, and provides better management of books and members."
// //   },
// //   {
// //     question: "Can a Library Management System handle multiple branches or libraries?",
// //     answer: "Yes, most modern systems support multiple branches with centralized management."
// //   },
// //   {
// //     question: "Is it possible to integrate a Library Management System with other systems?",
// //     answer: "Yes, integration with third-party systems such as payment gateways and digital libraries is possible."
// //   },
// //   {
// //     question: "How secure is the data in a Library Management System?",
// //     answer: "Security measures like encryption and user authentication are commonly implemented."
// //   }
// // ];

// // const FAQ = () => {
// //   const [activeIndex, setActiveIndex] = useState(null);

// //   const toggleAnswer = (index) => {
// //     setActiveIndex(activeIndex === index ? null : index);
// //   };

// //   return (
// //     <div className="faq-container">
// //       <div className="faq-content">
// //         {faqs.map((faq, index) => (
// //           <div key={index} className="faq-item">
// //             <div className="faq-question" onClick={() => toggleAnswer(index)}>
// //               {faq.question} <span>{activeIndex === index ? "-" : "+"}</span>
// //             </div>
// //             {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FAQ;

// import React, { useState } from "react";
// import "./FAQ.css";

// const faqs = [
//   {
//     question: "What are the key features of a Library Management System?",
//     answer: "A Library Management System includes features such as catalog management, user management, book tracking, reporting, and more.",
//   },
//   {
//     question: "How does a Library Management System benefit the library?",
//     answer: "It improves efficiency, reduces manual work, and provides better management of books and members.",
//   },
//   {
//     question: "Can a Library Management System handle multiple branches or libraries?",
//     answer: "Yes, most modern systems support multiple branches with centralized management.",
//   },
//   {
//     question: "Is it possible to integrate a Library Management System with other systems?",
//     answer: "Yes, integration with third-party systems such as payment gateways and digital libraries is possible.",
//   },
//   {
//     question: "How secure is the data in a Library Management System?",
//     answer: "Security measures like encryption and user authentication are commonly implemented.",
//   },
// ];

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAnswer = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="faq-container">
//       <div className="faq-content">
//         {faqs.map((faq, index) => (
//           <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
//             <div className="faq-question" onClick={() => toggleAnswer(index)}>
//               {faq.question}
//               <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
//             </div>
//             <div className="faq-answer" style={{ maxHeight: activeIndex === index ? "200px" : "0" }}>
//               <p>{faq.answer}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;

// import React, { useEffect, useState } from "react";
// import "./FAQ.css";
// import axios from "axios";
// // const faqs1 = [
// //   {
// //     question: "What are the key features of a Library Management System?",
// //     answer: "A Library Management System includes features such as catalog management, user management, book tracking, reporting, and more.",
// //   },
// //   {
// //     question: "How does a Library Management System benefit the library?",
// //     answer: "It improves efficiency, reduces manual work, and provides better management of books and members.",
// //   },
// //   {
// //     question: "Can a Library Management System handle multiple branches or libraries?",
// //     answer: "Yes, most modern systems support multiple branches with centralized management.",
// //   },
// //   {
// //     question: "Is it possible to integrate a Library Management System with other systems?",
// //     answer: "Yes, integration with third-party systems such as payment gateways and digital libraries is possible.",
// //   },
// //   {
// //     question: "How secure is the data in a Library Management System?",
// //     answer: "Security measures like encryption and user authentication are commonly implemented.",
// //   },
// // ];

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [faqs, setFaqs] = useState([]);
//   const [loading, setLoading] = useState();
//   const [alert, setAlert] = useState();
//   const fetchBooks = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/faq/getAll`
//       );

//       // Check if response.data is an array or wrapped inside another object
//       const faqsArray = Array.isArray(response.data)
//         ? response.data
//         : response.data?.data || [];
//       console.log(faqsArray, "faqsArray");

//       const formattedFaqs = faqsArray.map((book) => ({
//         ...book,
//         id: book._id,
//         // image: book.image ? book.image.url : null,
//       }));
//       // console.log(formattedFaqs.image, "image");

//       setFaqs(formattedFaqs);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//       setAlert({
//         open: true,
//         message:
//           "Failed to fetch books: " +
//           (error.response?.data?.message || error.message),
//         severity: "error",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const toggleAnswer = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="faq-section">
//       <h2 className="faq-title">Frequently Asked Questions</h2>
//       <div className="faq-content">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className={`faq-item ${activeIndex === index ? "active" : ""}`}
//           >
//             <div className="faq-question" onClick={() => toggleAnswer(index)}>
//               {faqs.question}
//               <span className="faq-icon">
//                 {activeIndex === index ? "−" : "+"}
//               </span>
//             </div>
//             <div
//               className="faq-answer"
//               style={{ maxHeight: activeIndex === index ? "200px" : "0" }}
//             >
//               <p>{faqs.answer}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQ;



import React, { useEffect, useState } from "react";
import "./FAQ.css";
import axios from "axios";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/faq/getAll`
      );

      // Check if response.data is an array or wrapped inside another object
      const faqsArray = Array.isArray(response.data)
        ? response.data
        : response.data?.data || [];
      console.log(faqsArray, "faqsArray");

      const formattedFaqs = faqsArray.map((faq) => ({
        ...faq,
        id: faq._id,
      }));

      setFaqs(formattedFaqs);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      setAlert({
        open: true,
        message:
          "Failed to fetch FAQs: " +
          (error.response?.data?.message || error.message),
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-content">
        {loading ? (
          <p>Loading FAQs...</p>
        ) : faqs.length > 0 ? (
          faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <div
                className="faq-answer"
                style={{ maxHeight: activeIndex === index ? "200px" : "0" }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No FAQs available</p>
        )}
      </div>
    </section>
  );
};

export default FAQ;