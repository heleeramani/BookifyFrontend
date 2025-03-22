// // // // // // import React, { useState } from "react";
// // // // // // import "../style/BookInfo.css";
// // // // // // import BookInfo from "../image/discover-book1.jpg";
// // // // // // import Button from "../../buttons/Button";

// // // // // // const BokInfo = () => {
// // // // // //   const [quantity, setQuantity] = useState(1);

// // // // // //   // Handle quantity change
// // // // // //   const handleQuantityChange = (event) => {
// // // // // //     setQuantity(event.target.value);
// // // // // //   };

// // // // // //   const book = {
// // // // // //     title: "A Doctor in the House",
// // // // // //     author: "Candy Carson",
// // // // // //     rating: 5,
// // // // // //     price: { min: 6.5, max: 16.99 },
// // // // // //     description:
// // // // // //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at efficitur ex.",
// // // // // //     image: BookInfo,
// // // // // //     details: [
// // // // // //       { label: "Publisher", value: "Brandon & Partners" },
// // // // // //       { label: "Year of Publishing", value: "2015" },
// // // // // //       { label: "Number of Pages", value: "350" },
// // // // // //       { label: "ISBN", value: "2544555561" },
// // // // // //       { label: "Format", value: "Online Book, Paper Book" },
// // // // // //     ],
// // // // // //     formats: [
// // // // // //       { name: "Online", icon: "fas fa-tablet-alt" },
// // // // // //       { name: "Paperback", icon: "fas fa-book" },
// // // // // //     ],
// // // // // //     productInfo: [
// // // // // //       { label: "SKU", value: "N/A" },
// // // // // //       { label: "Categories", value: "Drama, Mystery" },
// // // // // //       { label: "Tag", value: "Best Sellers" },
// // // // // //       { label: "Product ID", value: "2382" },
// // // // // //     ],
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="bookinfo-main-section1">
// // // // // //       <div className="bookinfo-container">
// // // // // //         {/* Image Section */}
// // // // // //         <div className="bookinfo-image-section">
// // // // // //           <img src={book.image} alt={book.title} />
// // // // // //         </div>

// // // // // //         {/* Details Section */}
// // // // // //         <div className="bookinfo-details-section">
// // // // // //           <h1>{book.title}</h1>
// // // // // //           <div className="bookinfo-author">
// // // // // //             Author: <span>{book.author}</span>
// // // // // //           </div>
// // // // // //           <div className="bookinfo-rating">{"⭐".repeat(book.rating)}</div>
// // // // // //           <div className="bookinfo-price">
// // // // // //             ${book.price.min} – ${book.price.max}
// // // // // //           </div>
// // // // // //           <p>{book.description}</p>

// // // // // //           {/* Dynamic List Rendering for book details */}
// // // // // //           <ul>
// // // // // //             {book.details.map((detail, index) => (
// // // // // //               <li key={index}>
// // // // // //                 <strong>{detail.label}:</strong> {detail.value}
// // // // // //               </li>
// // // // // //             ))}
// // // // // //           </ul>

// // // // // //           {/* Format Buttons */}
// // // // // //           <div className="bookinfo-format-buttons">
// // // // // //             {book.formats.map((format, index) => (
// // // // // //               <button key={index}>
// // // // // //                 <i className={format.icon}></i> {format.name}
// // // // // //               </button>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           {/* Quantity and Buy Now Section */}
// // // // // //           <div className="bookinfo-quantity-buy">
// // // // // //             <input
// // // // // //               type="number"
// // // // // //               min="1"
// // // // // //               max="99" className="bookinfo-input-change"
// // // // // //               value={quantity}
// // // // // //               onChange={handleQuantityChange}
// // // // // //             />
// // // // // //             <Button title="Buy Now" />
// // // // // //           </div>

// // // // // //           {/* Product Information */}
// // // // // //           <div className="bookinfo-product-info">
// // // // // //             {book.productInfo.map((info, index) => (
// // // // // //               <span key={index}>
// // // // // //                 <strong>{info.label}:</strong> {info.value}
// // // // // //               </span>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default BokInfo;


// // // // // import React, { useState } from "react";
// // // // // import { useParams } from "react-router-dom";
// // // // // import "../style/BookInfo.css";
// // // // // import Button from "../../buttons/Button";
// // // // // // import Discover1 from "../images/discover-book1.jpg";

// // // // // // const booksData = [
// // // // // //   { id: 1, title: "A Banquet of Mouse", author: "Richard Mann", price: "$12.00 – $18.00", image: '...', description: "Lorem ipsum dolor sit amet.", rating: 4 },
// // // // // //   { id: 2, title: "A Doctor in the House", author: "Candy Carson", price: "$6.50 – $16.99", image: '...', description: "Lorem ipsum dolor sit amet.", rating: 5 },
// // // // // //   { id: 3, title: "Antony & Cleopatra", author: "Ken Clark", price: "$58.00", image: '...', description: "Lorem ipsum dolor sit amet.", rating: 3 },
// // // // // //   { id: 4, title: "Brooklyn", author: "Jessica Ford", price: "$16.00", image: '...', description: "Lorem ipsum dolor sit amet.", rating: 4 },
// // // // // // ];

// // // // // const BookInfo = () => {
// // // // //   const { id } = useParams();
// // // // //   const book = booksData.find(book => book.id === parseInt(id));

// // // // //   const fetchBook = async () => {
// // // // //     try {
// // // // //       const response = await axios.get(
// // // // //         `${process.env.REACT_APP_BASE_URL}/user/book/get/${id}`
// // // // //       );
// // // // //       const bookArray = Array.isArray(response.data?.data)
// // // // //         ? response.data.data
// // // // //         : [];
// // // // //       console.log("response", response?.data?.data);

// // // // //       // Check if response.data is an array or wrapped inside another object
// // // // //       // const blogArray = Array.isArray(response.data)
// // // // //       //   ? response.data
// // // // //       //   : response.data?.data || [];
// // // // //       // console.log(blogArray, "shhrreeee");

// // // // //       // const formattedBlogs = blogArray.map((book) => ({
// // // // //       //   ...book,
// // // // //       //   id: book._id,
// // // // //       //   image: book.image ? book.image.url : "" // Check if image exists // Ensure DataGrid has an id
// // // // //       // }));

// // // // //       const formattedBooks = bookArray.map((book) => ({
// // // // //         id: book._id,
// // // // //         title: book.title || "Untitled",

// // // // //         description: book.description || "No description available.",
// // // // //         isbn: book.isbn || "No isbn Available",
// // // // //         category: book.category || book.category.name,
// // // // //         price: book.price || "undefined",
// // // // //         publishedYear: book.publishedYear || "Not",
// // // // //         image: book.image ? book.image.url : blogImg1, // Use default image if missing
// // // // //       }));
// // // // //       console.log(formattedBooks, "hellllll");

// // // // //       setBook(formattedBooks);
// // // // //       console.log(book, "bloggggg");
// // // // //     } catch (error) {
// // // // //       console.log(error);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchBook();
// // // // //     // console.log(book, "skjcskhc");
// // // // //   }, []);

// // // // //   const [quantity, setQuantity] = useState(1);

// // // // //   if (!book) {
// // // // //     return <h2>Book not found</h2>;
// // // // //   }

// // // // //   return (
// // // // //     <div className="bookinfo-main-section1">
// // // // //       <div className="bookinfo-container">
// // // // //         <div className="bookinfo-image-section">
// // // // //           <img src={book.image} alt={book.title} />
// // // // //         </div>

// // // // //         <div className="bookinfo-details-section">
// // // // //           <h1>{book.title}</h1>
// // // // //           <div className="bookinfo-author">Author: <span>{book.author}</span></div>
// // // // //           <div className="bookinfo-rating">{"⭐".repeat(book.rating)}</div>
// // // // //           <div className="bookinfo-price">{book.price}</div>
// // // // //           <p>{book.description}</p>

// // // // //           <div className="bookinfo-quantity-buy">
// // // // //             <input 
// // // // //               type="number" 
// // // // //               min="1" 
// // // // //               max="99" 
// // // // //               className="bookinfo-input-change"
// // // // //               value={quantity}
// // // // //               onChange={(e) => setQuantity(e.target.value)}
// // // // //             />
// // // // //             <Button title="Buy Now" />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default BookInfo;


// // // // import React, { useState, useEffect } from "react";
// // // // import { useParams } from "react-router-dom";
// // // // import axios from "axios"; // Import axios
// // // // import "../style/BookInfo.css";
// // // // import Button from "../../buttons/Button";

// // // // const BookInfo = () => {
// // // //   const { id } = useParams();
// // // //   const [book, setBook] = useState(null); // Define book state
// // // //   const [quantity, setQuantity] = useState(1);

// // // //   const fetchBook = async () => {
// // // //     try {
// // // //       const response = await axios.get(
// // // //         `${process.env.REACT_APP_BASE_URL}/user/book/get/${id}`
// // // //       );

// // // //       const bookArray = Array.isArray(response.data?.data)
// // // //         ? response.data.data
// // // //         : [];

// // // //       const formattedBooks = bookArray.map((book) => ({
// // // //         id: book._id,
// // // //         title: book.title || "Untitled",
// // // //         author: book.author || "Unknown", // Ensure author is included
// // // //         description: book.description || "No description available.",
// // // //         isbn: book.isbn || "No ISBN available",
// // // //         category: book.category?.name || "Uncategorized",
// // // //         price: book.price || "Price not available",
// // // //         publishedYear: book.publishedYear || "Not specified",
// // // //         image: book.image ? book.image.url : "/default-book.jpg", // Default image
// // // //         rating: book.rating || 0, // Ensure rating is included
// // // //       }));

// // // //       if (formattedBooks.length > 0) {
// // // //         setBook(formattedBooks[0]); // Set a single book
// // // //       } else {
// // // //         setBook(null);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error fetching book:", error);
// // // //       setBook(null);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchBook();
// // // //   }, [id]); // Fetch new book when ID changes

// // // //   if (!book) {
// // // //     return <h2>Book not found</h2>;
// // // //   }

// // // //   return (
// // // //     <div className="bookinfo-main-section1">
// // // //       <div className="bookinfo-container">
// // // //         <div className="bookinfo-image-section">
// // // //           <img src={book.image} alt={book.title} />
// // // //         </div>

// // // //         <div className="bookinfo-details-section">
// // // //           <h1>{book.title}</h1>
// // // //           <div className="bookinfo-author">Author: <span>{book.author}</span></div>
// // // //           {/* <div className="bookinfo-rating">{"⭐".repeat(book.rating)}</div> */}
// // // //           <div className="bookinfo-price">{book.price}</div>
// // // //           <p>{book.description}</p>

// // // //           <div className="bookinfo-quantity-buy">
// // // //             <input 
// // // //               type="number" 
// // // //               min="1" 
// // // //               max="99" 
// // // //               className="bookinfo-input-change"
// // // //               value={quantity}
// // // //               onChange={(e) => setQuantity(e.target.value)}
// // // //             />
// // // //             <Button title="Buy Now" />
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BookInfo;


// // // import React, { useState, useEffect } from "react";
// // // import { useParams } from "react-router-dom";
// // // import axios from "axios";
// // // import "../style/BookInfo.css";
// // // import Button from "../../buttons/Button";
// // // import blogImg1 from "../../home/images/discover-book1.jpg";
// // // import Review from "../../review/Review"
// // // const BookInfo = () => {
// // //   const { id } = useParams();
// // //   const [book, setBook] = useState(null);
// // //   const [quantity, setQuantity] = useState(1);
// // //   const [loading, setLoading] = useState(false);
// // //   const [alerts, setAlerts] = useState({ open: false, message: "", severity: "" });

// // //   const fetchBook = async () => {
// // //     try {
// // //       const response = await axios.get(
// // //         `${process.env.REACT_APP_BASE_URL}/user/book/get/${id}`
// // //       );
      
// // //       const bookData = response.data?.data; // Assuming response contains book details directly
// // //       console.log("Fetched book:", bookData);

// // //       if (bookData) {
// // //         setBook({
// // //           id: bookData._id,
// // //           title: bookData.title || "Untitled",
// // //           author: bookData.author || "Unknown",
// // //           description: bookData.description || "No description available.",
// // //           isbn: bookData.isbn || "No ISBN available",
// // //           category: bookData.category?.name || "Uncategorized",
// // //           price: bookData.price ? `${bookData.price}` : "Price not available",
// // //           publishedYear: bookData.publishedYear || "Not available",
// // //           image: bookData.image?.url || blogImg1, // Use a default image if missing
// // //           rating: bookData.rating || 0,
// // //         });
// // //       }
// // //     } catch (error) {
// // //       console.error("Error fetching book:", error);
// // //     }
// // //   };

// // //   // const handlePurchase = async () => {
// // //   //   try {
// // //   //     const response = await axios.post(
// // //   //       `${process.env.REACT_APP_BASE_URL}/user/purchase/initiate`,
// // //   //       {
// // //   //         userId:"67ccab6ec2430f8187f1a4b3",
// // //   //         bookId: book.id,  
// // //   //         quantity: quantity,
// // //   //         // amount: parseFloat(book.price) * quantity, // Example price calculation
// // //   //       }
// // //   //     );

// // //   //     if (response.data?.paymentUrl) {
// // //   //       // Redirect to payment gateway URL
// // //   //       window.location.href = response.data.paymentUrl;
// // //   //     } else {
// // //   //       alert("Purchase initiated successfully!");
// // //   //     }
// // //   //   } catch (error) {
// // //   //     console.error("Error initiating purchase:", error);
// // //   //     alert("Failed to initiate purchase. Please try again.");
// // //   //   }
// // //   // };

// // // //   const handlePurchase = async () => {
// // // //     try {
// // // //       const response = await axios.post(
// // // //         `${process.env.REACT_APP_BASE_URL}/user/purchase/initiate`,
// // // //         {
// // // //           userId: "67ccab6ec2430f8187f1a4b3",
// // // //           bookId: book.id,
// // // //           quantity: quantity,
// // // //         }
// // // //       );

// // // //       const { data } = response;
// // // //       console.log(data.data,"dataaaaa");
// // // //       if (data.data.order) {
// // // //         const options = {
// // // //           key: process.env.REACT_APP_RAZORPAY_KEY, // Razorpay API Key
// // // //           amount: data?.data?.order.amount * 100, // Amount in paisa (1 INR = 100 paisa)
// // // //           currency: "INR",
// // // //           name: "My Bookstore",
// // // //           description: `Payment for ${book.title}`,
// // // //           order_id: data?.data?.order.razorpayOrderId,
// // // //           handler: async function (response) {
// // // //             alert("Payment Successful!");
// // // //             console.log("Payment Response:", response);
// // // //           },
// // // //           prefill: {
// // // //             name: "John Doe",
// // // //             email: "john.doe@example.com",
// // // //             contact: "9876543210",
// // // //           },
// // // //           theme: {
// // // //             color: "#3399cc",
// // // //           },
// // // //         };

// // // //         const razorpay = new window.Razorpay(options);
// // // //         razorpay.open();
// // // //       } else {
// // // //         alert("Purchase completed successfully without payment.");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error initiating purchase:", error);
// // // //       console.log("Error Response:", error.response);
// // // //       alert("Failed to initiate purchase. Please try again.");
// // // //     }
// // // // };


// // // const handlePurchase = async () => {
// // //   try {
// // //     // Get authToken from localStorage
// // //     const authToken = localStorage.getItem("authToken");
      
// // //     if (!authToken) {
// // //       setAlerts({
// // //         open: true,
// // //         message: "Please log in to view your wishlist",
// // //         severity: "warning"
// // //       });
// // //       setLoading(false);
// // //       return;
// // //     }

// // //     const response = await axios.post(
// // //       `${process.env.REACT_APP_BASE_URL}/user/purchase/initiate`,
// // //       {
// // //         bookId: book.id,
// // //         quantity: quantity,
// // //       },{
// // //         headers:{
// // //           Authorization:authToken,
// // //           'Content-Type': 'application/json',
// // //         }
// // //       }
// // //     );

// // //     const { data } = response;

// // //     if (data?.data?.order) {
// // //       const options = {
// // //         key: process.env.REACT_APP_RAZORPAY_KEY,
// // //         amount: data.data.order.amount * 100,
// // //         currency: "INR",
// // //         name: "My Bookstore",
// // //         description: `Payment for ${book.title}`,
// // //         order_id: data.data.order.razorpayOrderId,
// // //         handler: async function (response) {
// // //           try {
// // //             // Verify Payment
// // //             const verifyResponse = await axios.post(
// // //               `${process.env.REACT_APP_BASE_URL}/user/payment/verify`,
// // //               {
// // //                 orderId: data?.data.order._id,
// // //                 razorayPaymentId: response.razorpay_payment_id,
// // //               },{
// // //                 headers:{
// // //                   Authorization:authToken,
// // //                   'Content-Type': 'application/json',
// // //                 }
// // //               }
// // //             );

// // //             if (verifyResponse.data.success) {
// // //               alert("Payment Successful and Verified!");
// // //             } else {
// // //               alert("Payment Verification Failed!");
// // //             }
// // //           } catch (error) {
// // //             console.error("Verification Error:", error);
// // //             alert("Payment verification failed!");
// // //           }
// // //         },
// // //         prefill: {
// // //           name: "John Doe",
// // //           email: "john.doe@example.com",
// // //           contact: "9876543210",
// // //         },
// // //         theme: {
// // //           color: "#3399cc",
// // //         },
// // //       };

// // //       const razorpay = new window.Razorpay(options);
// // //       razorpay.open();
// // //     } else {
// // //       alert("Purchase completed successfully without payment.");
// // //     }
// // //   } catch (error) {
// // //     console.error("Error initiating purchase:", error);
// // //     alert("Failed to initiate purchase. Please try again.");
// // //   }
// // // };

// // // const handleBorrow = async () => {
// // //   try {
// // //     // Get authToken from localStorage
// // //     const authToken = localStorage.getItem("authToken");
      
// // //     if (!authToken) {
// // //       setAlerts({
// // //         open: true,
// // //         message: "Please log in to view your wishlist",
// // //         severity: "warning"
// // //       });
// // //       setLoading(false);
// // //       return;
// // //     }

// // //     const response = await axios.post(
// // //       `${process.env.REACT_APP_BASE_URL}/user/borrow/initiate`,
// // //       {
// // //         bookId: book.id,
// // //       },{
// // //         headers:{
// // //           Authorization:authToken,
// // //           'Content-Type': 'application/json',
// // //         }
// // //       }
// // //     );

// // //     const { data } = response;
// // // console.log(data.data,"datataaaa");

// // //     if (data?.data?.order) {
// // //       console.log("dsgud");
      
// // //       const options = {
// // //         key: process.env.REACT_APP_RAZORPAY_KEY,
// // //         amount: data.data.order.amount * 100, // Amount in paisa
// // //         currency: "INR",
// // //         name: "Library Management",
// // //         description: `Borrowing Fee for ${book.title}`,
// // //         order_id: data.data.order.razorpayOrderId,
// // //         handler: async function (response) {
// // //           try {
// // //             console.log("------verification process start-----");
            
// // //             const verifyResponse = await axios.post(
// // //               `${process.env.REACT_APP_BASE_URL}/user/payment/verify`,
// // //               {
// // //                 orderId: data?.data.order._id,
// // //                 razorayPaymentId: response.razorpay_payment_id,
// // //               },{
// // //                 headers:{
// // //                   Authorization:authToken,
// // //                   'Content-Type': 'application/json',
// // //                 }
// // //               }
// // //             );

// // //             if (verifyResponse.data.success) {
// // //               alert("Payment Successful! Book borrowed successfully.");
// // //             } else {
// // //               alert("Payment Verification Failed! Please try again.");
// // //             }
// // //           } catch (error) {
// // //             console.error("Payment Verification Error:", error);
// // //             alert("Payment verification failed. Please try again.");
// // //           }
// // //         },
// // //         prefill: {
// // //           name: "John Doe",
// // //           email: "john.doe@example.com",
// // //           contact: "9876543210",
// // //         },
// // //         theme: {
// // //           color: "#3399cc",
// // //         },
// // //       };

// // //       const razorpay = new window.Razorpay(options);
// // //       razorpay.open();
// // //     } else {
// // //       alert("Failed to initiate borrowing process. Please try again.");
// // //     }
// // //   } catch (error) {
// // //     console.error("Error initiating borrow process:", error);
// // //     alert("Failed to borrow the book. Please try again.");
// // //   }
// // // };



// // //   useEffect(() => {
// // //     fetchBook();
// // //   }, [id]);

// // //   if (!book) {
// // //     return <h2>Loading book details...</h2>;
// // //   }

// // //   return (
// // //     <div className="bookinfo-main-section1">
// // //       <div className="bookinfo-container">
// // //         <div className="bookinfo-image-section">
// // //           <img src={book.image} alt={book.title} />
// // //         </div>

// // //         <div className="bookinfo-details-section">
// // //           <h1>{book.title}</h1>
// // //           <div className="bookinfo-author">
// // //             Author: <span>{book.author}</span>
// // //           </div>
// // //           {/* <div className="bookinfo-rating">{"⭐".repeat(book.rating)}</div> */}
// // //           <div className="bookinfo-price">{book.price}</div>
// // //           <p>{book.description}</p>

// // //           <div className="bookinfo-quantity-buy">
// // //             <input
// // //               type="number"
// // //               min="1"
// // //               max="99"
// // //               className="bookinfo-input-change"
// // //               value={quantity}
// // //               // onChange={(e) => setQuantity(e.target.value)}
// // //               onChange={(e) => setQuantity(parseInt(e.target.value))}
// // //             />
// // //             <Button title="Buy Now" onClick={handlePurchase} />
// // //             <Button title="Borrow Now" onClick={handleBorrow} />
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <Review bId={book.id} />
// // //     </div>
// // //   );
// // // };

// // // export default BookInfo;

// // import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";
// // import "../style/BookInfo.css";
// // import Button from "../../buttons/Button";
// // import blogImg1 from "../../home/images/discover-book1.jpg";
// // import Review from "../../review/Review"

// // const BookInfo = () => {
// //   const { id } = useParams();
// //   const [book, setBook] = useState(null);
// //   const [quantity, setQuantity] = useState(1);
// //   const [loading, setLoading] = useState(false);
// //   const [alerts, setAlerts] = useState({ open: false, message: "", severity: "" });
// //   const [availableCopies, setAvailableCopies] = useState(0);

// //   const fetchBook = async () => {
// //     try {
// //       const response = await axios.get(
// //         `${process.env.REACT_APP_BASE_URL}/user/book/get/${id}`
// //       );
      
// //       const bookData = response.data?.data;
// //       console.log("Fetched book:", bookData);

// //       if (bookData) {
// //         // Use copiesAvailable from your MongoDB document
// //         setAvailableCopies(bookData.copiesAvailable || 0);
// //         console.log("Available copies set to:", bookData.copiesAvailable);
        
// //         setBook({
// //           id: bookData._id,
// //           title: bookData.title || "Untitled",
// //           author: bookData.author || "Unknown",
// //           description: bookData.description || "No description available.",
// //           isbn: bookData.isbn || "No ISBN available",
// //           category: bookData.category?.name || "Uncategorized",
// //           price: bookData.price ? `${bookData.price}` : "Price not available",
// //           publishedYear: bookData.publishedYear || "Not available",
// //           image: bookData.image?.url || blogImg1,
// //           rating: bookData.rating || 0,
// //         });
// //       }
// //     } catch (error) {
// //       console.error("Error fetching book:", error);
// //     }
// //   };

// //   const handlePurchase = async () => {
// //     // First check if the book is out of stock
// //     if (availableCopies <= 0) {
// //       alert("This book is currently out of stock");
// //       return;
// //     }
    
// //     try {
// //       const authToken = localStorage.getItem("authToken");
        
// //       if (!authToken) {
// //         setAlerts({
// //           open: true,
// //           message: "Please log in to purchase books",
// //           severity: "warning"
// //         });
// //         setLoading(false);
// //         return;
// //       }

// //       const response = await axios.post(
// //         `${process.env.REACT_APP_BASE_URL}/user/purchase/initiate`,
// //         {
// //           bookId: book.id,
// //           quantity: quantity,
// //         },{
// //           headers:{
// //             Authorization: authToken,
// //             'Content-Type': 'application/json',
// //           }
// //         }
// //       );

// //       const { data } = response;

// //       if (data?.data?.order) {
// //         const options = {
// //           key: process.env.REACT_APP_RAZORPAY_KEY,
// //           amount: data.data.order.amount * 100,
// //           currency: "INR",
// //           name: "My Bookstore",
// //           description: `Payment for ${book.title}`,
// //           order_id: data.data.order.razorpayOrderId,
// //           handler: async function (response) {
// //             try {
// //               // Verify Payment
// //               const verifyResponse = await axios.post(
// //                 `${process.env.REACT_APP_BASE_URL}/user/payment/verify`,
// //                 {
// //                   orderId: data?.data.order._id,
// //                   razorayPaymentId: response.razorpay_payment_id,
// //                 },{
// //                   headers:{
// //                     Authorization: authToken,
// //                     'Content-Type': 'application/json',
// //                   }
// //                 }
// //               );

// //               if (verifyResponse.data.success) {
// //                 alert("Payment Successful and Verified!");
// //                 fetchBook(); // Refresh to update available copies
// //               } else {
// //                 alert("Payment Verification Failed!");
// //               }
// //             } catch (error) {
// //               console.error("Verification Error:", error);
// //               alert("Payment verification failed!");
// //             }
// //           },
// //           prefill: {
// //             name: "John Doe",
// //             email: "john.doe@example.com",
// //             contact: "9876543210",
// //           },
// //           theme: {
// //             color: "#3399cc",
// //           },
// //         };

// //         const razorpay = new window.Razorpay(options);
// //         razorpay.open();
// //       } else {
// //         alert("Purchase completed successfully without payment.");
// //         fetchBook(); // Refresh to update available copies
// //       }
// //     } catch (error) {
// //       console.error("Error initiating purchase:", error);
// //       alert("Failed to initiate purchase. Please try again.");
// //     }
// //   };

// //   const handleBorrow = async () => {
// //     // First check if the book is out of stock
// //     if (availableCopies <= 0) {
// //       alert("This book is currently unavailable for borrowing");
// //       return;
// //     }
    
// //     try {
// //       const authToken = localStorage.getItem("authToken");
        
// //       if (!authToken) {
// //         setAlerts({
// //           open: true,
// //           message: "Please log in to borrow books",
// //           severity: "warning"
// //         });
// //         setLoading(false);
// //         return;
// //       }

// //       const response = await axios.post(
// //         `${process.env.REACT_APP_BASE_URL}/user/borrow/initiate`,
// //         {
// //           bookId: book.id,
// //         },{
// //           headers:{
// //             Authorization: authToken,
// //             'Content-Type': 'application/json',
// //           }
// //         }
// //       );

// //       const { data } = response;
// //       console.log(data.data,"datataaaa");

// //       if (data?.data?.order) {
// //         console.log("dsgud");
        
// //         const options = {
// //           key: process.env.REACT_APP_RAZORPAY_KEY,
// //           amount: data.data.order.amount * 100, // Amount in paisa
// //           currency: "INR",
// //           name: "Library Management",
// //           description: `Borrowing Fee for ${book.title}`,
// //           order_id: data.data.order.razorpayOrderId,
// //           handler: async function (response) {
// //             try {
// //               console.log("------verification process start-----");
              
// //               const verifyResponse = await axios.post(
// //                 `${process.env.REACT_APP_BASE_URL}/user/payment/verify`,
// //                 {
// //                   orderId: data?.data.order._id,
// //                   razorayPaymentId: response.razorpay_payment_id,
// //                 },{
// //                   headers:{
// //                     Authorization: authToken,
// //                     'Content-Type': 'application/json',
// //                   }
// //                 }
// //               );

// //               if (verifyResponse.data.success) {
// //                 alert("Payment Successful! Book borrowed successfully.");
// //                 fetchBook(); // Refresh to update available copies
// //               } else {
// //                 alert("Payment Verification Failed! Please try again.");
// //               }
// //             } catch (error) {
// //               console.error("Payment Verification Error:", error);
// //               alert("Payment verification failed. Please try again.");
// //             }
// //           },
// //           prefill: {
// //             name: "John Doe",
// //             email: "john.doe@example.com",
// //             contact: "9876543210",
// //           },
// //           theme: {
// //             color: "#3399cc",
// //           },
// //         };

// //         const razorpay = new window.Razorpay(options);
// //         razorpay.open();
// //       } else {
// //         alert("Failed to initiate borrowing process. Please try again.");
// //       }
// //     } catch (error) {
// //       console.error("Error initiating borrow process:", error);
// //       alert("Failed to borrow the book. Please try again.");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchBook();
// //   }, [id]);

// //   if (!book) {
// //     return <h2>Loading book details...</h2>;
// //   }

// //   // Create custom button components with explicit styles for disabled state
// //   const CustomButton = ({ title, onClick, isDisabled }) => {
// //     return (
// //       <button 
// //         onClick={onClick}
// //         style={{
// //           backgroundColor: isDisabled ? '#cccccc' : '#3399cc',
// //           color: isDisabled ? '#666666' : 'white',
// //           padding: '10px 20px',
// //           border: 'none',
// //           borderRadius: '4px',
// //           margin: '0 5px',
// //           cursor: isDisabled ? 'not-allowed' : 'pointer',
// //         }}
// //         disabled={isDisabled}
// //       >
// //         {title}
// //       </button>
// //     );
// //   };

// //   return (
// //     <div className="bookinfo-main-section1">
// //       <div className="bookinfo-container">
// //         <div className="bookinfo-image-section">
// //           <img src={book.image} alt={book.title} />
// //         </div>

// //         <div className="bookinfo-details-section">
// //           <h1>{book.title}</h1>
// //           <div className="bookinfo-author">
// //             Author: <span>{book.author}</span>
// //           </div>
// //           {/* <div className="bookinfo-rating">{"⭐".repeat(book.rating)}</div> */}
// //           <div className="bookinfo-price">{book.price}</div>
// //           <p>{book.description}</p>
          
// //           {/* Display available copies information with clear visibility */}
// //           <div className="bookinfo-availability">
// //             <p style={{ fontWeight: 'bold', color: availableCopies <= 0 ? 'red' : 'green' }}>
// //               Available copies: <strong>{availableCopies}</strong>
// //             </p>
// //           </div>

// //           <div className="bookinfo-quantity-buy">
// //             <input
// //               type="number"
// //               min="1"
// //               max={availableCopies > 0 ? availableCopies : 1}
// //               className="bookinfo-input-change"
// //               value={quantity}
// //               onChange={(e) => setQuantity(parseInt(e.target.value))}
// //               disabled={availableCopies <= 0}
// //               style={{ opacity: availableCopies <= 0 ? 0.5 : 1 }}
// //             />
            
// //             {/* Using custom buttons with explicit styles instead of the Button component */}
// //             <CustomButton 
// //               title="Buy Now" 
// //               onClick={handlePurchase} 
// //               isDisabled={availableCopies <= 0} 
// //             />
            
// //             <CustomButton 
// //               title="Borrow Now" 
// //               onClick={handleBorrow} 
// //               isDisabled={availableCopies <= 0} 
// //             />
// //           </div>
          
// //           {availableCopies <= 0 && (
// //             <div className="out-of-stock-message" style={{ 
// //               color: 'red', 
// //               fontWeight: 'bold', 
// //               marginTop: '10px',
// //               padding: '10px',
// //               border: '1px solid red',
// //               borderRadius: '4px',
// //               backgroundColor: '#ffeeee'
// //             }}>
// //               <p>This book is currently out of stock.</p>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //       <Review bId={book.id} />
// //     </div>
// //   );
// // };

// // export default BookInfo;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "../style/BookInfo.css";
// import Button from "../../buttons/Button";
// import blogImg1 from "../../home/images/discover-book1.jpg";
// import Review from "../../review/Review"

// const BookInfo = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [alerts, setAlerts] = useState({ open: false, message: "", severity: "" });
//   const [availableCopies, setAvailableCopies] = useState(0);

//   const fetchBook = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/book/get/${id}`
//       );
      
//       const bookData = response.data?.data;
//       console.log("Fetched book:", bookData);

//       if (bookData) {
//         // CRITICAL FIX: Make sure we correctly parse the copiesAvailable as a number
//         const copiesAvailable = parseInt(bookData.copiesAvailable || 0, 10);
//         setAvailableCopies(copiesAvailable);
//         console.log("Available copies set to:", copiesAvailable);
        
//         setBook({
//           id: bookData._id,
//           title: bookData.title || "Untitled",
//           author: bookData.author || "Unknown",
//           description: bookData.description || "No description available.",
//           isbn: bookData.isbn || "No ISBN available",
//           category: bookData.category?.name || "Uncategorized",
//           price: bookData.price ? `${bookData.price}` : "Price not available",
//           publishedYear: bookData.publishedYear || "Not available",
//           image: bookData.image?.url || blogImg1,
//           rating: bookData.rating || 0,
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching book:", error);
//     }
//   };

//   const handlePurchase = async () => {
//     // Check available copies even if the button is shown as enabled
//     if (availableCopies <= 0) {
//       alert("This book is currently out of stock");
//       return;
//     }
    
//     try {
//       const authToken = localStorage.getItem("authToken");
        
//       if (!authToken) {
//         setAlerts({
//           open: true,
//           message: "Please log in to purchase books",
//           severity: "warning"
//         });
//         setLoading(false);
//         return;
//       }

//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/user/purchase/initiate`,
//         {
//           bookId: book.id,
//           quantity: quantity,
//         },{
//           headers:{
//             Authorization: authToken,
//             'Content-Type': 'application/json',
//           }
//         }
//       );

//       const { data } = response;

//       if (data?.data?.order) {
//         const options = {
//           key: process.env.REACT_APP_RAZORPAY_KEY,
//           amount: data.data.order.amount * 100,
//           currency: "INR",
//           name: "My Bookstore",
//           description: `Payment for ${book.title}`,
//           order_id: data.data.order.razorpayOrderId,
//           handler: async function (response) {
//             try {
//               // Verify Payment
//               const verifyResponse = await axios.post(
//                 `${process.env.REACT_APP_BASE_URL}/user/payment/verify`,
//                 {
//                   orderId: data?.data.order._id,
//                   razorayPaymentId: response.razorpay_payment_id,
//                 },{
//                   headers:{
//                     Authorization: authToken,
//                     'Content-Type': 'application/json',
//                   }
//                 }
//               );

//               if (verifyResponse.data.success) {
//                 alert("Payment Successful and Verified!");
//                 fetchBook(); // Refresh to update available copies
//               } else {
//                 alert("Payment Verification Failed!");
//               }
//             } catch (error) {
//               console.error("Verification Error:", error);
//               alert("Payment verification failed!");
//             }
//           },
//           prefill: {
//             name: "John Doe",
//             email: "john.doe@example.com",
//             contact: "9876543210",
//           },
//           theme: {
//             color: "#3399cc",
//           },
//         };

//         const razorpay = new window.Razorpay(options);
//         razorpay.open();
//       } else {
//         alert("Purchase completed successfully without payment.");
//         fetchBook(); // Refresh to update available copies
//       }
//     } catch (error) {
//       console.error("Error initiating purchase:", error);
//       alert("Failed to initiate purchase. Please try again.");
//     }
//   };

//   const handleBorrow = async () => {
//     // Check available copies even if the button is shown as enabled
//     if (availableCopies <= 0) {
//       alert("This book is currently unavailable for borrowing");
//       return;
//     }
    
//     try {
//       const authToken = localStorage.getItem("authToken");
        
//       if (!authToken) {
//         setAlerts({
//           open: true,
//           message: "Please log in to borrow books",
//           severity: "warning"
//         });
//         setLoading(false);
//         return;
//       }

//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/user/borrow/initiate`,
//         {
//           bookId: book.id,
//         },{
//           headers:{
//             Authorization: authToken,
//             'Content-Type': 'application/json',
//           }
//         }
//       );

//       const { data } = response;
//       console.log(data.data,"datataaaa");

//       if (data?.data?.order) {
//         console.log("dsgud");
        
//         const options = {
//           key: process.env.REACT_APP_RAZORPAY_KEY,
//           amount: data.data.order.amount * 100, // Amount in paisa
//           currency: "INR",
//           name: "Library Management",
//           description: `Borrowing Fee for ${book.title}`,
//           order_id: data.data.order.razorpayOrderId,
//           handler: async function (response) {
//             try {
//               console.log("------verification process start-----");
              
//               const verifyResponse = await axios.post(
//                 `${process.env.REACT_APP_BASE_URL}/user/payment/verify`,
//                 {
//                   orderId: data?.data.order._id,
//                   razorayPaymentId: response.razorpay_payment_id,
//                 },{
//                   headers:{
//                     Authorization: authToken,
//                     'Content-Type': 'application/json',
//                   }
//                 }
//               );

//               if (verifyResponse.data.success) {
//                 alert("Payment Successful! Book borrowed successfully.");
//                 fetchBook(); // Refresh to update available copies
//               } else {
//                 alert("Payment Verification Failed! Please try again.");
//               }
//             } catch (error) {
//               console.error("Payment Verification Error:", error);
//               alert("Payment verification failed. Please try again.");
//             }
//           },
//           prefill: {
//             name: "John Doe",
//             email: "john.doe@example.com",
//             contact: "9876543210",
//           },
//           theme: {
//             color: "#3399cc",
//           },
//         };

//         const razorpay = new window.Razorpay(options);
//         razorpay.open();
//       } else {
//         alert("Failed to initiate borrowing process. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error initiating borrow process:", error);
//       alert("Failed to borrow the book. Please try again.");
//     }
//   };

//   useEffect(() => {
//     fetchBook();
//   }, [id]);

//   useEffect(() => {
//     // This separate effect logs the current state after it updates
//     console.log("Current availableCopies state:", availableCopies);
//   }, [availableCopies]);

//   if (!book) {
//     return <h2>Loading book details...</h2>;
//   }

//   return (
//     <div className="bookinfo-main-section1">
//       <div className="bookinfo-container">
//         <div className="bookinfo-image-section">
//           <img src={book.image} alt={book.title} />
//         </div>

//         <div className="bookinfo-details-section">
//           <h1>{book.title}</h1>
//           <div className="bookinfo-author">
//             Author: <span>{book.author}</span>
//           </div>
//           {/* <div className="bookinfo-rating">{"⭐".repeat(book.rating)}</div> */}
//           <div className="bookinfo-price">{book.price}</div>
//           <p>{book.description}</p>
          
//           {/* Display available copies information */}
//           <div className="bookinfo-availability">
//             <p style={{ fontWeight: 'bold', color: availableCopies <= 0 ? 'red' : 'green' }}>
//               Available copies: <strong>{availableCopies}</strong>
//             </p>
//           </div>

//           <div className="bookinfo-quantity-buy">
//             <input
//               type="number"
//               min="1"
//               max={availableCopies > 0 ? availableCopies : 1}
//               className="bookinfo-input-change"
//               value={quantity}
//               onChange={(e) => setQuantity(parseInt(e.target.value))}
//               disabled={availableCopies <= 0}
//             />
//             <Button 
//               title="Buy Now" 
//               onClick={handlePurchase} 
//               // Setting the prop explicitly as a boolean
//               disabled={availableCopies <= 0 ? true : false} 
//             />
//             <Button 
//               title="Borrow Now" 
//               onClick={handleBorrow} 
//               // Setting the prop explicitly as a boolean
//               disabled={availableCopies <= 0 ? true : false} 
//             />
//           </div>
          
//           {availableCopies <= 0 && (
//             <div className="out-of-stock-message" style={{ 
//               color: 'red', 
//               fontWeight: 'bold', 
//               marginTop: '10px',
//               padding: '10px',
//               border: '1px solid red',
//               borderRadius: '4px',
//               backgroundColor: '#ffeeee'
//             }}>
//               <p>This book is currently out of stock.</p>
//             </div>
//           )}
//         </div>
//       </div>
//       <Review bId={book.id} />
//     </div>
//   );
// };

// export default BookInfo;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "../style/BookInfo.css";
// import Button from "../../buttons/Button";
// import blogImg1 from "../../home/images/discover-book1.jpg";
// import Review from "../../review/Review"

// const BookInfo = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [alerts, setAlerts] = useState({ open: false, message: "", severity: "" });
//   const [availableCopies, setAvailableCopies] = useState(null);

//   const fetchBook = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/book/get/${id}`
//       );
      
//       const bookData = response.data?.data;
//       console.log("Fetched book:", bookData);

//       if (bookData) {
//         // Parse copies available as a number without default value
//         if (bookData.copiesAvailable !== undefined && bookData.copiesAvailable !== null) {
//           const copiesAvailable = parseInt(bookData.copiesAvailable, 10);
//           setAvailableCopies(copiesAvailable);
//           console.log("Available copies set to:", copiesAvailable);
//         } else {
//           console.error("copiesAvailable is undefined or null in API response");
//           setAvailableCopies(0);
//         }
        
//         setBook({
//           id: bookData._id,
//           title: bookData.title || "Untitled",
//           author: bookData.author || "Unknown",
//           description: bookData.description || "No description available.",
//           isbn: bookData.isbn || "No ISBN available",
//           category: bookData.category?.name || "Uncategorized",
//           price: bookData.price ? `${bookData.price}` : "Price not available",
//           publishedYear: bookData.publishedYear || "Not available",
//           image: bookData.image?.url || blogImg1,
//           rating: bookData.rating || 0,
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching book:", error);
//       setAlerts({
//         open: true,
//         message: "Failed to load book details",
//         severity: "error"
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePurchase = async () => {
//     // Ensure we have the latest available copies
//     if (availableCopies === null || availableCopies === undefined) {
//       alert("Unable to determine book availability");
//       return;
//     }
    
//     // Check available copies
//     if (availableCopies <= 0) {
//       alert("This book is currently out of stock");
//       return;
//     }
    
//     // Validate quantity
//     if (quantity > availableCopies) {
//       alert(`Only ${availableCopies} copies available. Please reduce quantity.`);
//       return;
//     }
    
//     setLoading(true);
//     try {
//       const authToken = localStorage.getItem("authToken");
        
//       if (!authToken) {
//         setAlerts({
//           open: true,
//           message: "Please log in to purchase books",
//           severity: "warning"
//         });
//         setLoading(false);
//         return;
//       }

//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/user/purchase/initiate`,
//         {
//           bookId: book.id,
//           quantity: quantity,
//         },{
//           headers:{
//             Authorization: authToken,
//             'Content-Type': 'application/json',
//           }
//         }
//       );

//       const { data } = response;

//       if (data?.data?.order) {
//         const options = {
//           key: process.env.REACT_APP_RAZORPAY_KEY,
//           amount: data.data.order.amount * 100,
//           currency: "INR",
//           name: "My Bookstore",
//           description: `Payment for ${book.title}`,
//           order_id: data.data.order.razorpayOrderId,
//           handler: async function (response) {
//             try {
//               // Verify Payment
//               const verifyResponse = await axios.post(
//                 `${process.env.REACT_APP_BASE_URL}/user/payment/verify`,
//                 {
//                   orderId: data?.data.order._id,
//                   razorayPaymentId: response.razorpay_payment_id,
//                 },{
//                   headers:{
//                     Authorization: authToken,
//                     'Content-Type': 'application/json',
//                   }
//                 }
//               );

//               if (verifyResponse.data.success) {
//                 alert("Payment Successful and Verified!");
//                 // Update available copies optimistically
//                 setAvailableCopies(prev => prev - quantity);
//                 // Then refresh actual data
//                 fetchBook(); 
//               } else {
//                 alert("Payment Verification Failed!");
//               }
//             } catch (error) {
//               console.error("Verification Error:", error);
//               alert("Payment verification failed!");
//             } finally {
//               setLoading(false);
//             }
//           },
//           prefill: {
//             name: "John Doe",
//             email: "john.doe@example.com",
//             contact: "9876543210",
//           },
//           theme: {
//             color: "#3399cc",
//           },
//         };

//         const razorpay = new window.Razorpay(options);
//         razorpay.open();
//       } else {
//         alert("Purchase completed successfully without payment.");
//         // Update available copies optimistically
//         setAvailableCopies(prev => prev - quantity);
//         // Then refresh actual data
//         fetchBook(); 
//       }
//     } catch (error) {
//       console.error("Error initiating purchase:", error);
//       alert("Failed to initiate purchase. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleBorrow = async () => {
//     // Ensure we have the latest available copies
//     if (availableCopies === null || availableCopies === undefined) {
//       alert("Unable to determine book availability");
//       return;
//     }
    
//     // Check available copies
//     if (availableCopies <= 0) {
//       alert("This book is currently unavailable for borrowing");
//       return;
//     }
    
//     setLoading(true);
//     try {
//       const authToken = localStorage.getItem("authToken");
        
//       if (!authToken) {
//         setAlerts({
//           open: true,
//           message: "Please log in to borrow books",
//           severity: "warning"
//         });
//         setLoading(false);
//         return;
//       }

//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/user/borrow/initiate`,
//         {
//           bookId: book.id,
//         },{
//           headers:{
//             Authorization: authToken,
//             'Content-Type': 'application/json',
//           }
//         }
//       );

//       const { data } = response;
//       console.log(data.data,"datataaaa");

//       if (data?.data?.order) {
//         console.log("dsgud");
        
//         const options = {
//           key: process.env.REACT_APP_RAZORPAY_KEY,
//           amount: data.data.order.amount * 100, // Amount in paisa
//           currency: "INR",
//           name: "Library Management",
//           description: `Borrowing Fee for ${book.title}`,
//           order_id: data.data.order.razorpayOrderId,
//           handler: async function (response) {
//             try {
//               console.log("------verification process start-----");
              
//               const verifyResponse = await axios.post(
//                 `${process.env.REACT_APP_BASE_URL}/user/payment/verify`,
//                 {
//                   orderId: data?.data.order._id,
//                   razorayPaymentId: response.razorpay_payment_id,
//                 },{
//                   headers:{
//                     Authorization: authToken,
//                     'Content-Type': 'application/json',
//                   }
//                 }
//               );

//               if (verifyResponse.data.success) {
//                 alert("Payment Successful! Book borrowed successfully.");
//                 // Update available copies optimistically
//                 setAvailableCopies(prev => prev - 1);
//                 // Then refresh actual data
//                 fetchBook();
//               } else {
//                 alert("Payment Verification Failed! Please try again.");
//               }
//             } catch (error) {
//               console.error("Payment Verification Error:", error);
//               alert("Payment verification failed. Please try again.");
//             } finally {
//               setLoading(false);
//             }
//           },
//           prefill: {
//             name: "John Doe",
//             email: "john.doe@example.com",
//             contact: "9876543210",
//           },
//           theme: {
//             color: "#3399cc",
//           },
//         };

//         const razorpay = new window.Razorpay(options);
//         razorpay.open();
//       } else {
//         alert("Failed to initiate borrowing process. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error initiating borrow process:", error);
//       alert("Failed to borrow the book. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBook();
//   }, [id]);

//   useEffect(() => {
//     // This separate effect logs the current state after it updates
//     console.log("Current availableCopies state:", availableCopies);
//   }, [availableCopies]);

//   if (loading && !book) {
//     return <h2>Loading book details...</h2>;
//   }

//   return (
//     <div className="bookinfo-main-section1">
//       <div className="bookinfo-container">
//         <div className="bookinfo-image-section">
//           <img src={book.image} alt={book.title} />
//         </div>

//         <div className="bookinfo-details-section">
//           <h1>{book.title}</h1>
//           <div className="bookinfo-author">
//             Author: <span>{book.author}</span>
//           </div>
//           {/* <div className="bookinfo-rating">{"⭐".repeat(book.rating)}</div> */}
//           <div className="bookinfo-price">{book.price}</div>
//           <p>{book.description}</p>
          
//           {/* Display available copies information with loading state */}
//           <div className="bookinfo-availability">
//             {loading ? (
//               <p>Checking availability...</p>
//             ) : (
//               <p style={{ fontWeight: 'bold', color: availableCopies <= 0 ? 'red' : 'green' }}>
//                 Available copies: <strong>{availableCopies !== null ? availableCopies : 'Unknown'}</strong>
//               </p>
//             )}
//           </div>

//           <div className="bookinfo-quantity-buy">
//             <input
//               type="number"
//               min="1"
//               max={availableCopies > 0 ? availableCopies : 1}
//               className="bookinfo-input-change"
//               value={quantity}
//               onChange={(e) => {
//                 const newValue = parseInt(e.target.value, 10);
//                 // Ensure quantity doesn't exceed available copies
//                 if (newValue <= availableCopies) {
//                   setQuantity(newValue);
//                 } else {
//                   setQuantity(availableCopies);
//                   alert(`Maximum available copies: ${availableCopies}`);
//                 }
//               }}
//               disabled={loading || availableCopies <= 0}
//             />
//             <Button 
//               title={loading ? "Processing..." : "Buy Now"} 
//               onClick={handlePurchase} 
//               disabled={loading || availableCopies <= 0}
//             />
//             <Button 
//               title={loading ? "Processing..." : "Borrow Now"} 
//               onClick={handleBorrow}
//               disabled={loading || availableCopies <= 0}
//             />
//           </div>
          
//           {/* Display out of stock message if needed */}
//           {!loading && availableCopies <= 0 && (
//             <div className="out-of-stock-message" style={{ 
//               color: 'red', 
//               fontWeight: 'bold', 
//               marginTop: '10px',
//               padding: '10px',
//               border: '1px solid red',
//               borderRadius: '4px',
//               backgroundColor: '#ffeeee'
//             }}>
//               <p>This book is currently out of stock.</p>
//             </div>
//           )}
          
//           {/* Display alerts if any */}
//           {alerts.open && (
//             <div className="alert-message" style={{
//               marginTop: '10px',
//               padding: '10px',
//               border: `1px solid ${alerts.severity === 'error' ? 'red' : 'orange'}`,
//               borderRadius: '4px',
//               backgroundColor: alerts.severity === 'error' ? '#ffeeee' : '#fff8ee',
//               color: alerts.severity === 'error' ? 'red' : 'orange'
//             }}>
//               <p>{alerts.message}</p>
//             </div>
//           )}
//         </div>
//       </div>
//       <Review bId={book.id} />
//     </div>
//   );
// };

// export default BookInfo;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "../style/BookInfo.css";
// import Button from "../../buttons/Button";
// import blogImg1 from "../../home/images/discover-book1.jpg";
// import Review from "../../review/Review"

// const BookInfo = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [alerts, setAlerts] = useState({ open: false, message: "", severity: "" });
//   const [availableCopies, setAvailableCopies] = useState(null);

//   const fetchBook = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/book/get/${id}`
//       );
      
//       const bookData = response.data?.data;
//       console.log("Fetched book:", bookData);

//       if (bookData) {
//         // Parse copies available as a number without default value
//         if (bookData.copiesAvailable !== undefined && bookData.copiesAvailable !== null) {
//           const copiesAvailable = parseInt(bookData.copiesAvailable, 10);
//           setAvailableCopies(copiesAvailable);
//           console.log("Available copies set to:", copiesAvailable);
//         } else {
//           console.error("copiesAvailable is undefined or null in API response");
//           setAvailableCopies(0);
//         }
        
//         setBook({
//           id: bookData._id,
//           title: bookData.title || "Untitled",
//           author: bookData.author || "Unknown",
//           description: bookData.description || "No description available.",
//           isbn: bookData.isbn || "No ISBN available",
//           category: bookData.category?.name || "Uncategorized",
//           price: bookData.price ? `${bookData.price}` : "Price not available",
//           publishedYear: bookData.publishedYear || "Not available",
//           image: bookData.image?.url || blogImg1,
//           rating: bookData.rating || 0,
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching book:", error);
//       setAlerts({
//         open: true,
//         message: "Failed to load book details",
//         severity: "error"
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePurchase = async () => {
//     // Ensure we have the latest available copies
//     if (availableCopies === null || availableCopies === undefined) {
//       alert("Unable to determine book availability");
//       return;
//     }
    
//     // Check available copies
//     if (availableCopies <= 0) {
//       alert("This book is currently out of stock");
//       return;
//     }
    
//     // Validate quantity
//     if (quantity > availableCopies) {
//       alert(`Only ${availableCopies} copies available. Please reduce quantity.`);
//       return;
//     }
    
//     setLoading(true);
//     try {
//       const authToken = localStorage.getItem("authToken");
        
//       if (!authToken) {
//         setAlerts({
//           open: true,
//           message: "Please log in to purchase books",
//           severity: "warning"
//         });
//         setLoading(false);
//         return;
//       }

//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/user/purchase/initiate`,
//         {
//           bookId: book.id,
//           quantity: quantity,
//         },{
//           headers:{
//             Authorization: authToken,
//             'Content-Type': 'application/json',
//           }
//         }
//       );

//       const { data } = response;

//       if (data?.data?.order) {
//         const options = {
//           key: process.env.REACT_APP_RAZORPAY_KEY,
//           amount: data.data.order.amount * 100,
//           currency: "INR",
//           name: "My Bookstore",
//           description: `Payment for ${book.title}`,
//           order_id: data.data.order.razorpayOrderId,
//           handler: async function (response) {
//             try {
//               // Verify Payment
//               const verifyResponse = await axios.post(
//                 `${process.env.REACT_APP_BASE_URL}/user/payment/verify`,
//                 {
//                   orderId: data?.data.order._id,
//                   razorayPaymentId: response.razorpay_payment_id,
//                 },{
//                   headers:{
//                     Authorization: authToken,
//                     'Content-Type': 'application/json',
//                   }
//                 }
//               );

//               if (verifyResponse.data.success) {
//                 alert("Payment Successful and Verified!");
//                 // Update available copies optimistically
//                 setAvailableCopies(prev => prev - quantity);
//                 // Then refresh actual data
//                 fetchBook(); 
//               } else {
//                 alert("Payment Verification Failed!");
//               }
//             } catch (error) {
//               console.error("Verification Error:", error);
//               alert("Payment verification failed!");
//             } finally {
//               setLoading(false);
//             }
//           },
//           prefill: {
//             name: "John Doe",
//             email: "john.doe@example.com",
//             contact: "9876543210",
//           },
//           theme: {
//             color: "#3399cc",
//           },
//         };

//         const razorpay = new window.Razorpay(options);
//         razorpay.open();
//       } else {
//         alert("Purchase completed successfully without payment.");
//         // Update available copies optimistically
//         setAvailableCopies(prev => prev - quantity);
//         // Then refresh actual data
//         fetchBook(); 
//       }
//     } catch (error) {
//       console.error("Error initiating purchase:", error);
//       alert("Failed to initiate purchase. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleBorrow = async () => {
//     // Ensure we have the latest available copies
//     if (availableCopies === null || availableCopies === undefined) {
//       alert("Unable to determine book availability");
//       return;
//     }
    
//     // Check available copies
//     if (availableCopies <= 0) {
//       alert("This book is currently unavailable for borrowing");
//       return;
//     }
    
//     setLoading(true);
//     try {
//       const authToken = localStorage.getItem("authToken");
        
//       if (!authToken) {
//         setAlerts({
//           open: true,
//           message: "Please log in to borrow books",
//           severity: "warning"
//         });
//         setLoading(false);
//         return;
//       }

//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/user/borrow/initiate`,
//         {
//           bookId: book.id,
//         },{
//           headers:{
//             Authorization: authToken,
//             'Content-Type': 'application/json',
//           }
//         }
//       );

//       const { data } = response;
//       console.log(data.data,"datataaaa");

//       if (data?.data?.order) {
//         console.log("dsgud");
        
//         const options = {
//           key: process.env.REACT_APP_RAZORPAY_KEY,
//           amount: data.data.order.amount * 100, // Amount in paisa
//           currency: "INR",
//           name: "Library Management",
//           description: `Borrowing Fee for ${book.title}`,
//           order_id: data.data.order.razorpayOrderId,
//           handler: async function (response) {
//             try {
//               console.log("------verification process start-----");
              
//               const verifyResponse = await axios.post(
//                 `${process.env.REACT_APP_BASE_URL}/user/payment/verify`,
//                 {
//                   orderId: data?.data.order._id,
//                   razorayPaymentId: response.razorpay_payment_id,
//                 },{
//                   headers:{
//                     Authorization: authToken,
//                     'Content-Type': 'application/json',
//                   }
//                 }
//               );

//               if (verifyResponse.data.success) {
//                 alert("Payment Successful! Book borrowed successfully.");
//                 // Update available copies optimistically
//                 setAvailableCopies(prev => prev - 1);
//                 // Then refresh actual data
//                 fetchBook();
//               } else {
//                 alert("Payment Verification Failed! Please try again.");
//               }
//             } catch (error) {
//               console.error("Payment Verification Error:", error);
//               alert("Payment verification failed. Please try again.");
//             } finally {
//               setLoading(false);
//             }
//           },
//           prefill: {
//             name: "John Doe",
//             email: "john.doe@example.com",
//             contact: "9876543210",
//           },
//           theme: {
//             color: "#3399cc",
//           },
//         };

//         const razorpay = new window.Razorpay(options);
//         razorpay.open();
//       } else {
//         alert("Failed to initiate borrowing process. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error initiating borrow process:", error);
//       alert("Failed to borrow the book. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBook();
//   }, [id]);

//   useEffect(() => {
//     // This separate effect logs the current state after it updates
//     console.log("Current availableCopies state:", availableCopies);
//   }, [availableCopies]);

//   if (loading && !book) {
//     return <h2>Loading book details...</h2>;
//   }

//   return (
//     <div className="bookinfo-main-section1">
//       <div className="bookinfo-container">
//         <div className="bookinfo-image-section">
//           <img src={book.image} alt={book.title} />
//         </div>

//         <div className="bookinfo-details-section">
//           <h1>{book.title}</h1>
//           <div className="bookinfo-author">
//             Author: <span>{book.author}</span>
//           </div>
//           {/* <div className="bookinfo-rating">{"⭐".repeat(book.rating)}</div> */}
//           <div className="bookinfo-price">{book.price}</div>
//           <p>{book.description}</p>
          
//           {/* Display available copies information with loading state */}
//           <div className="bookinfo-availability">
//             {loading ? (
//               <p>Checking availability...</p>
//             ) : (
//               <p style={{ fontWeight: 'bold', color: availableCopies <= 0 ? 'red' : 'inherit' }}>
//                 Available copies: <strong>{availableCopies !== null ? availableCopies : 'Unknown'}</strong>
//               </p>
//             )}
//           </div>

//           <div className="bookinfo-quantity-buy">
//             <input
//               type="number"
//               min="1"
//               max={availableCopies > 0 ? availableCopies : 1}
//               className="bookinfo-input-change"
//               value={quantity}
//               onChange={(e) => {
//                 const newValue = parseInt(e.target.value, 10);
//                 // Ensure quantity doesn't exceed available copies
//                 if (newValue <= availableCopies) {
//                   setQuantity(newValue);
//                 } else {
//                   setQuantity(availableCopies);
//                   alert(`Maximum available copies: ${availableCopies}`);
//                 }
//               }}
//               disabled={loading || availableCopies <= 0}
//             />
//             <Button 
//               title={loading ? "Processing..." : "Buy Now"} 
//               onClick={handlePurchase} 
//               disabled={loading || availableCopies <= 0}
//             />
//             <Button 
//               title={loading ? "Processing..." : "Borrow Now"} 
//               onClick={handleBorrow}
//               disabled={loading || availableCopies <= 0}
//             />
//           </div>
          
//           {/* Display out of stock message if needed */}
//           {!loading && availableCopies <= 0 && (
//             <div className="out-of-stock-message" style={{ 
//               color: 'red', 
//               fontWeight: 'bold', 
//               marginTop: '10px',
//               padding: '10px',
//               border: '1px solid red',
//               borderRadius: '4px',
//               backgroundColor: '#ffeeee'
//             }}>
//               <p>This book is currently out of stock.</p>
//             </div>
//           )}
          
//           {/* Display alerts if any */}
//           {alerts.open && (
//             <div className="alert-message" style={{
//               marginTop: '10px',
//               padding: '10px',
//               border: `1px solid ${alerts.severity === 'error' ? 'red' : 'orange'}`,
//               borderRadius: '4px',
//               backgroundColor: alerts.severity === 'error' ? '#ffeeee' : '#fff8ee',
//               color: alerts.severity === 'error' ? 'red' : 'orange'
//             }}>
//               <p>{alerts.message}</p>
//             </div>
//           )}
//         </div>
//       </div>
//       <Review bId={book.id} />
//     </div>
//   );
// };

// export default BookInfo;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../style/BookInfo.css";
import Button from "../../buttons/Button";
import blogImg1 from "../../home/images/discover-book1.jpg";
import Review from "../../review/Review"

const BookInfo = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [alerts, setAlerts] = useState({ open: false, message: "", severity: "" });
  const [availableCopies, setAvailableCopies] = useState(null);

  const fetchBook = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/book/get/${id}`
      );
      
      const bookData = response.data?.data;
      console.log("Fetched book:", bookData);

      if (bookData) {
        // Parse copies available as a number without default value
        if (bookData.copiesAvailable !== undefined && bookData.copiesAvailable !== null) {
          const copiesAvailable = parseInt(bookData.copiesAvailable, 10);
          setAvailableCopies(copiesAvailable);
          // Removed console log line here
        } else {
          console.error("copiesAvailable is undefined or null in API response");
          setAvailableCopies(0);
        }
        
        setBook({
          id: bookData._id,
          title: bookData.title || "Untitled",
          author: bookData.author || "Unknown",
          description: bookData.description || "No description available.",
          isbn: bookData.isbn || "No ISBN available",
          category: bookData.category?.name || "Uncategorized",
          price: bookData.price ? `${bookData.price}` : "Price not available",
          publishedYear: bookData.publishedYear || "Not available",
          image: bookData.image?.url || blogImg1,
          rating: bookData.rating || 0,
        });
      }
    } catch (error) {
      console.error("Error fetching book:", error);
      setAlerts({
        open: true,
        message: "Failed to load book details",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = async () => {
    // Ensure we have the latest available copies
    if (availableCopies === null || availableCopies === undefined) {
      alert("Unable to determine book availability");
      return;
    }
    
    // Check available copies
    if (availableCopies <= 0) {
      alert("This book is currently out of stock");
      return;
    }
    
    // Validate quantity
    if (quantity > availableCopies) {
      alert(`Only ${availableCopies} copies available. Please reduce quantity.`);
      return;
    }
    
    setLoading(true);
    try {
      const authToken = localStorage.getItem("authToken");
        
      if (!authToken) {
        setAlerts({
          open: true,
          message: "Please log in to purchase books",
          severity: "warning"
        });
        setLoading(false);
        return;
      }

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/purchase/initiate`,
        {
          bookId: book.id,
          quantity: quantity,
        },{
          headers:{
            Authorization: authToken,
            'Content-Type': 'application/json',
          }
        }
      );

      const { data } = response;

      if (data?.data?.order) {
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
                },{
                  headers:{
                    Authorization: authToken,
                    'Content-Type': 'application/json',
                  }
                }
              );

              if (verifyResponse.data.success) {
                alert("Payment Successful and Verified!");
                // Update available copies optimistically
                setAvailableCopies(prev => prev - quantity);
                // Then refresh actual data
                fetchBook(); 
              } else {
                alert("Payment Verification Failed!");
              }
            } catch (error) {
              console.error("Verification Error:", error);
              alert("Payment verification failed!");
            } finally {
              setLoading(false);
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
        // Update available copies optimistically
        setAvailableCopies(prev => prev - quantity);
        // Then refresh actual data
        fetchBook(); 
      }
    } catch (error) {
      console.error("Error initiating purchase:", error);
      alert("Failed to initiate purchase. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBorrow = async () => {
    // Ensure we have the latest available copies
    if (availableCopies === null || availableCopies === undefined) {
      alert("Unable to determine book availability");
      return;
    }
    
    // Check available copies
    if (availableCopies <= 0) {
      alert("This book is currently unavailable for borrowing");
      return;
    }
    
    setLoading(true);
    try {
      const authToken = localStorage.getItem("authToken");
        
      if (!authToken) {
        setAlerts({
          open: true,
          message: "Please log in to borrow books",
          severity: "warning"
        });
        setLoading(false);
        return;
      }

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/borrow/initiate`,
        {
          bookId: book.id,
        },{
          headers:{
            Authorization: authToken,
            'Content-Type': 'application/json',
          }
        }
      );

      const { data } = response;
      console.log(data.data,"datataaaa");

      if (data?.data?.order) {
        console.log("dsgud");
        
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY,
          amount: data.data.order.amount * 100, // Amount in paisa
          currency: "INR",
          name: "Library Management",
          description: `Borrowing Fee for ${book.title}`,
          order_id: data.data.order.razorpayOrderId,
          handler: async function (response) {
            try {
              console.log("------verification process start-----");
              
              const verifyResponse = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/user/payment/verify`,
                {
                  orderId: data?.data.order._id,
                  razorayPaymentId: response.razorpay_payment_id,
                },{
                  headers:{
                    Authorization: authToken,
                    'Content-Type': 'application/json',
                  }
                }
              );

              if (verifyResponse.data.success) {
                alert("Payment Successful! Book borrowed successfully.");
                // Update available copies optimistically
                setAvailableCopies(prev => prev - 1);
                // Then refresh actual data
                fetchBook();
              } else {
                alert("Payment Verification Failed! Please try again.");
              }
            } catch (error) {
              console.error("Payment Verification Error:", error);
              alert("Payment verification failed. Please try again.");
            } finally {
              setLoading(false);
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
        alert("Failed to initiate borrowing process. Please try again.");
      }
    } catch (error) {
      console.error("Error initiating borrow process:", error);
      alert("Failed to borrow the book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  // Removed the useEffect logging availableCopies here

  if (loading && !book) {
    return <h2>Loading book details...</h2>;
  }

  return (
    <div className="bookinfo-main-section1">
      <div className="bookinfo-container">
        <div className="bookinfo-image-section">
          <img src={book.image} alt={book.title} />
        </div>

        <div className="bookinfo-details-section">
          <h1>{book.title}</h1>
          <div className="bookinfo-author">
            Author: <span>{book.author}</span>
          </div>
          {/* <div className="bookinfo-rating">{"⭐".repeat(book.rating)}</div> */}
          <div className="bookinfo-price">{book.price}</div>
          <p>{book.description}</p>
          
          {/* Display available copies information with loading state */}
          {/* <div className="bookinfo-availability">
            {loading ? (
              <p>Checking availability...</p>
            ) : (
              <p style={{ fontWeight: 'bold', color: availableCopies <= 0 ? 'red' : 'inherit' }}>
                Available copies: <strong>{availableCopies !== null ? availableCopies : 'Unknown'}</strong>
              </p>
            )}
          </div> */}

          <div className="bookinfo-quantity-buy">
            <input
              type="number"
              min="1"
              max={availableCopies > 0 ? availableCopies : 1}
              className="bookinfo-input-change"
              value={quantity}
              onChange={(e) => {
                const newValue = parseInt(e.target.value, 10);
                // Ensure quantity doesn't exceed available copies
                if (newValue <= availableCopies) {
                  setQuantity(newValue);
                } else {
                  setQuantity(availableCopies);
                  alert(`Maximum available copies: ${availableCopies}`);
                }
              }}
              disabled={loading || availableCopies <= 0}
            />
            <Button 
              title={loading ? "Processing..." : "Buy Now"} 
              onClick={handlePurchase} 
              disabled={loading || availableCopies <= 0}
            />
            <Button 
              title={loading ? "Processing..." : "Borrow Now"} 
              onClick={handleBorrow}
              disabled={loading || availableCopies <= 0}
            />
          </div>
          
          {/* Display out of stock message if needed */}
          {!loading && availableCopies <= 0 && (
            <div className="out-of-stock-message" style={{ 
              color: 'red', 
              fontWeight: 'bold', 
              marginTop: '10px',
              padding: '10px',
              border: '1px solid red',
              borderRadius: '4px',
              backgroundColor: '#ffeeee'
            }}>
              <p>This book is currently out of stock.</p>
            </div>
          )}
          
          {/* Display alerts if any */}
          {alerts.open && (
            <div className="alert-message" style={{
              marginTop: '10px',
              padding: '10px',
              border: `1px solid ${alerts.severity === 'error' ? 'red' : 'orange'}`,
              borderRadius: '4px',
              backgroundColor: alerts.severity === 'error' ? '#ffeeee' : '#fff8ee',
              color: alerts.severity === 'error' ? 'red' : 'orange'
            }}>
              <p>{alerts.message}</p>
            </div>
          )}
        </div>
      </div>
      <Review bId={book.id} />
    </div>
  );
};

export default BookInfo;