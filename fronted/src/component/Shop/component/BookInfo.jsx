// // // import React, { useState } from "react";
// // // import "../style/BookInfo.css";
// // // import BookInfo from "../image/discover-book1.jpg";
// // // import Button from "../../buttons/Button";

// // // const BokInfo = () => {
// // //   const [quantity, setQuantity] = useState(1);

// // //   // Handle quantity change
// // //   const handleQuantityChange = (event) => {
// // //     setQuantity(event.target.value);
// // //   };

// // //   const book = {
// // //     title: "A Doctor in the House",
// // //     author: "Candy Carson",
// // //     rating: 5,
// // //     price: { min: 6.5, max: 16.99 },
// // //     description:
// // //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at efficitur ex.",
// // //     image: BookInfo,
// // //     details: [
// // //       { label: "Publisher", value: "Brandon & Partners" },
// // //       { label: "Year of Publishing", value: "2015" },
// // //       { label: "Number of Pages", value: "350" },
// // //       { label: "ISBN", value: "2544555561" },
// // //       { label: "Format", value: "Online Book, Paper Book" },
// // //     ],
// // //     formats: [
// // //       { name: "Online", icon: "fas fa-tablet-alt" },
// // //       { name: "Paperback", icon: "fas fa-book" },
// // //     ],
// // //     productInfo: [
// // //       { label: "SKU", value: "N/A" },
// // //       { label: "Categories", value: "Drama, Mystery" },
// // //       { label: "Tag", value: "Best Sellers" },
// // //       { label: "Product ID", value: "2382" },
// // //     ],
// // //   };

// // //   return (
// // //     <div className="bookinfo-main-section1">
// // //       <div className="bookinfo-container">
// // //         {/* Image Section */}
// // //         <div className="bookinfo-image-section">
// // //           <img src={book.image} alt={book.title} />
// // //         </div>

// // //         {/* Details Section */}
// // //         <div className="bookinfo-details-section">
// // //           <h1>{book.title}</h1>
// // //           <div className="bookinfo-author">
// // //             Author: <span>{book.author}</span>
// // //           </div>
// // //           <div className="bookinfo-rating">{"⭐".repeat(book.rating)}</div>
// // //           <div className="bookinfo-price">
// // //             ${book.price.min} – ${book.price.max}
// // //           </div>
// // //           <p>{book.description}</p>

// // //           {/* Dynamic List Rendering for book details */}
// // //           <ul>
// // //             {book.details.map((detail, index) => (
// // //               <li key={index}>
// // //                 <strong>{detail.label}:</strong> {detail.value}
// // //               </li>
// // //             ))}
// // //           </ul>

// // //           {/* Format Buttons */}
// // //           <div className="bookinfo-format-buttons">
// // //             {book.formats.map((format, index) => (
// // //               <button key={index}>
// // //                 <i className={format.icon}></i> {format.name}
// // //               </button>
// // //             ))}
// // //           </div>

// // //           {/* Quantity and Buy Now Section */}
// // //           <div className="bookinfo-quantity-buy">
// // //             <input
// // //               type="number"
// // //               min="1"
// // //               max="99" className="bookinfo-input-change"
// // //               value={quantity}
// // //               onChange={handleQuantityChange}
// // //             />
// // //             <Button title="Buy Now" />
// // //           </div>

// // //           {/* Product Information */}
// // //           <div className="bookinfo-product-info">
// // //             {book.productInfo.map((info, index) => (
// // //               <span key={index}>
// // //                 <strong>{info.label}:</strong> {info.value}
// // //               </span>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BokInfo;


// // import React, { useState } from "react";
// // import { useParams } from "react-router-dom";
// // import "../style/BookInfo.css";
// // import Button from "../../buttons/Button";
// // // import Discover1 from "../images/discover-book1.jpg";

// // // const booksData = [
// // //   { id: 1, title: "A Banquet of Mouse", author: "Richard Mann", price: "$12.00 – $18.00", image: '...', description: "Lorem ipsum dolor sit amet.", rating: 4 },
// // //   { id: 2, title: "A Doctor in the House", author: "Candy Carson", price: "$6.50 – $16.99", image: '...', description: "Lorem ipsum dolor sit amet.", rating: 5 },
// // //   { id: 3, title: "Antony & Cleopatra", author: "Ken Clark", price: "$58.00", image: '...', description: "Lorem ipsum dolor sit amet.", rating: 3 },
// // //   { id: 4, title: "Brooklyn", author: "Jessica Ford", price: "$16.00", image: '...', description: "Lorem ipsum dolor sit amet.", rating: 4 },
// // // ];

// // const BookInfo = () => {
// //   const { id } = useParams();
// //   const book = booksData.find(book => book.id === parseInt(id));

// //   const fetchBook = async () => {
// //     try {
// //       const response = await axios.get(
// //         `${process.env.REACT_APP_BASE_URL}/user/book/get/${id}`
// //       );
// //       const bookArray = Array.isArray(response.data?.data)
// //         ? response.data.data
// //         : [];
// //       console.log("response", response?.data?.data);

// //       // Check if response.data is an array or wrapped inside another object
// //       // const blogArray = Array.isArray(response.data)
// //       //   ? response.data
// //       //   : response.data?.data || [];
// //       // console.log(blogArray, "shhrreeee");

// //       // const formattedBlogs = blogArray.map((book) => ({
// //       //   ...book,
// //       //   id: book._id,
// //       //   image: book.image ? book.image.url : "" // Check if image exists // Ensure DataGrid has an id
// //       // }));

// //       const formattedBooks = bookArray.map((book) => ({
// //         id: book._id,
// //         title: book.title || "Untitled",

// //         description: book.description || "No description available.",
// //         isbn: book.isbn || "No isbn Available",
// //         category: book.category || book.category.name,
// //         price: book.price || "undefined",
// //         publishedYear: book.publishedYear || "Not",
// //         image: book.image ? book.image.url : blogImg1, // Use default image if missing
// //       }));
// //       console.log(formattedBooks, "hellllll");

// //       setBook(formattedBooks);
// //       console.log(book, "bloggggg");
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchBook();
// //     // console.log(book, "skjcskhc");
// //   }, []);

// //   const [quantity, setQuantity] = useState(1);

// //   if (!book) {
// //     return <h2>Book not found</h2>;
// //   }

// //   return (
// //     <div className="bookinfo-main-section1">
// //       <div className="bookinfo-container">
// //         <div className="bookinfo-image-section">
// //           <img src={book.image} alt={book.title} />
// //         </div>

// //         <div className="bookinfo-details-section">
// //           <h1>{book.title}</h1>
// //           <div className="bookinfo-author">Author: <span>{book.author}</span></div>
// //           <div className="bookinfo-rating">{"⭐".repeat(book.rating)}</div>
// //           <div className="bookinfo-price">{book.price}</div>
// //           <p>{book.description}</p>

// //           <div className="bookinfo-quantity-buy">
// //             <input 
// //               type="number" 
// //               min="1" 
// //               max="99" 
// //               className="bookinfo-input-change"
// //               value={quantity}
// //               onChange={(e) => setQuantity(e.target.value)}
// //             />
// //             <Button title="Buy Now" />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BookInfo;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios"; // Import axios
// import "../style/BookInfo.css";
// import Button from "../../buttons/Button";

// const BookInfo = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null); // Define book state
//   const [quantity, setQuantity] = useState(1);

//   const fetchBook = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/book/get/${id}`
//       );

//       const bookArray = Array.isArray(response.data?.data)
//         ? response.data.data
//         : [];

//       const formattedBooks = bookArray.map((book) => ({
//         id: book._id,
//         title: book.title || "Untitled",
//         author: book.author || "Unknown", // Ensure author is included
//         description: book.description || "No description available.",
//         isbn: book.isbn || "No ISBN available",
//         category: book.category?.name || "Uncategorized",
//         price: book.price || "Price not available",
//         publishedYear: book.publishedYear || "Not specified",
//         image: book.image ? book.image.url : "/default-book.jpg", // Default image
//         rating: book.rating || 0, // Ensure rating is included
//       }));

//       if (formattedBooks.length > 0) {
//         setBook(formattedBooks[0]); // Set a single book
//       } else {
//         setBook(null);
//       }
//     } catch (error) {
//       console.error("Error fetching book:", error);
//       setBook(null);
//     }
//   };

//   useEffect(() => {
//     fetchBook();
//   }, [id]); // Fetch new book when ID changes

//   if (!book) {
//     return <h2>Book not found</h2>;
//   }

//   return (
//     <div className="bookinfo-main-section1">
//       <div className="bookinfo-container">
//         <div className="bookinfo-image-section">
//           <img src={book.image} alt={book.title} />
//         </div>

//         <div className="bookinfo-details-section">
//           <h1>{book.title}</h1>
//           <div className="bookinfo-author">Author: <span>{book.author}</span></div>
//           {/* <div className="bookinfo-rating">{"⭐".repeat(book.rating)}</div> */}
//           <div className="bookinfo-price">{book.price}</div>
//           <p>{book.description}</p>

//           <div className="bookinfo-quantity-buy">
//             <input 
//               type="number" 
//               min="1" 
//               max="99" 
//               className="bookinfo-input-change"
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//             />
//             <Button title="Buy Now" />
//           </div>
//         </div>
//       </div>
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

  const fetchBook = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/book/get/${id}`
      );
      
      const bookData = response.data?.data; // Assuming response contains book details directly
      console.log("Fetched book:", bookData);

      if (bookData) {
        setBook({
          id: bookData._id,
          title: bookData.title || "Untitled",
          author: bookData.author || "Unknown",
          description: bookData.description || "No description available.",
          isbn: bookData.isbn || "No ISBN available",
          category: bookData.category?.name || "Uncategorized",
          price: bookData.price ? `${bookData.price}` : "Price not available",
          publishedYear: bookData.publishedYear || "Not available",
          image: bookData.image?.url || blogImg1, // Use a default image if missing
          rating: bookData.rating || 0,
        });
      }
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };

  // const handlePurchase = async () => {
  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_BASE_URL}/user/purchase/initiate`,
  //       {
  //         userId:"67ccab6ec2430f8187f1a4b3",
  //         bookId: book.id,  
  //         quantity: quantity,
  //         // amount: parseFloat(book.price) * quantity, // Example price calculation
  //       }
  //     );

  //     if (response.data?.paymentUrl) {
  //       // Redirect to payment gateway URL
  //       window.location.href = response.data.paymentUrl;
  //     } else {
  //       alert("Purchase initiated successfully!");
  //     }
  //   } catch (error) {
  //     console.error("Error initiating purchase:", error);
  //     alert("Failed to initiate purchase. Please try again.");
  //   }
  // };

//   const handlePurchase = async () => {
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/user/purchase/initiate`,
//         {
//           userId: "67ccab6ec2430f8187f1a4b3",
//           bookId: book.id,
//           quantity: quantity,
//         }
//       );

//       const { data } = response;
//       console.log(data.data,"dataaaaa");
//       if (data.data.order) {
//         const options = {
//           key: process.env.REACT_APP_RAZORPAY_KEY, // Razorpay API Key
//           amount: data?.data?.order.amount * 100, // Amount in paisa (1 INR = 100 paisa)
//           currency: "INR",
//           name: "My Bookstore",
//           description: `Payment for ${book.title}`,
//           order_id: data?.data?.order.razorpayOrderId,
//           handler: async function (response) {
//             alert("Payment Successful!");
//             console.log("Payment Response:", response);
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
//       }
//     } catch (error) {
//       console.error("Error initiating purchase:", error);
//       console.log("Error Response:", error.response);
//       alert("Failed to initiate purchase. Please try again.");
//     }
// };


const handlePurchase = async () => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/purchase/initiate`,
      {
        userId: "67ccab6ec2430f8187f1a4b3",
        bookId: book.id,
        quantity: quantity,
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
                razorpayPaymentId: response.razorpay_payment_id,
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

const handleBorrow = async () => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/borrow/initiate`,
      {
        userId: "67ccab6ec2430f8187f1a4b3",
        bookId: book.id,
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
                razorpayPaymentId: response.razorpay_payment_id,
              }
            );

            if (verifyResponse.data.success) {
              alert("Payment Successful! Book borrowed successfully.");
            } else {
              alert("Payment Verification Failed! Please try again.");
            }
          } catch (error) {
            console.error("Payment Verification Error:", error);
            alert("Payment verification failed. Please try again.");
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
  }
};


  useEffect(() => {
    fetchBook();
  }, [id]);

  if (!book) {
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

          <div className="bookinfo-quantity-buy">
            <input
              type="number"
              min="1"
              max="99"
              className="bookinfo-input-change"
              value={quantity}
              // onChange={(e) => setQuantity(e.target.value)}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <Button title="Buy Now" onClick={handlePurchase} />
            <Button title="Borrow Now" onClick={handleBorrow} />
          </div>
        </div>
      </div>
      <Review productId={book.id} />
    </div>
  );
};

export default BookInfo;