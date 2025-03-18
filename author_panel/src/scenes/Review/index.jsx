// // // import axios from "axios";
// // // import React, { useEffect } from "react";

// // // const Review = () => {
// // //   const fetchBook = async () => {
// // //     try {
// // //       const authToken = localStorage.getItem("authToken");
// // //       const response = await axios.get(
// // //         `${process.env.REACT_APP_BASE_URL}/author/review/get`,
// // //         {
// // //           headers: {
// // //             Authorization: authToken,
// // //           },
// // //         }
// // //       );
// // //       // console.log("response", response?.data?.data);
// // //       console.log("response", response);

// // //       // Check if response.data is an array or wrapped inside another object
      
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchBook();
// // //     // console.log(book, "skjcskhc");
// // //   }, []);
// // //   // Sample review data - in a real application, this would come from props or an API
// // //   const reviews = [
// // //     {
// // //       id: 1,
// // //       reviewer: "John Smith",
// // //       date: "March 15, 2025",
// // //       rating: 4,
// // //       content:
// // //         "A masterpiece of American literature that captures the essence of the Jazz Age and the American Dream. Fitzgerald's prose is elegant and the characters are unforgettable. The story's exploration of wealth, love, and corruption remains relevant even today.",
// // //     },
// // //     {
// // //       id: 2,
// // //       reviewer: "Alice Johnson",
// // //       date: "March 10, 2025",
// // //       rating: 5,
// // //       content:
// // //         "This novel perfectly encapsulates the decadence and excess of the 1920s while exploring themes of hope, disillusionment, and the American Dream. Fitzgerald's writing is both beautiful and haunting. The characters, especially Gatsby himself, are complex and compelling.",
// // //     },
// // //     {
// // //       id: 3,
// // //       reviewer: "Michael Brown",
// // //       date: "March 5, 2025",
// // //       rating: 3,
// // //       content:
// // //         "While beautifully written, I found the characters somewhat difficult to empathize with. However, the novel's exploration of wealth and class in America remains powerful and relevant. The symbolism throughout the book is masterfully done.",
// // //     },
// // //   ];

// // //   // Function to generate star ratings
// // //   const renderStars = (rating) => {
// // //     let stars = "";
// // //     for (let i = 1; i <= 5; i++) {
// // //       stars += i <= rating ? "★" : "☆";
// // //     }
// // //     return stars;
// // //   };

// // //   return (
// // //     <div className="book-review-container">
// // //       <div className="book-info">
// // //         <div className="book-summary">
// // //           <h2 className="book-title">The Great Gatsby</h2>
// // //           <h3 className="book-author">by F. Scott Fitzgerald</h3>

// // //           <div className="book-rating">
// // //             <div className="stars">★★★★☆</div>
// // //             <span className="rating-text">4.0/5</span>
// // //             <span className="review-count">({reviews.length} reviews)</span>
// // //           </div>

// // //           <div className="book-description">
// // //             <p>
// // //               A novel by F. Scott Fitzgerald that follows a cast of characters
// // //               living in the fictional town of West Egg on prosperous Long Island
// // //               in the summer of 1922.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <h3 className="reviews-heading">Reader Reviews</h3>

// // //       <div className="reviews-list">
// // //         {reviews.map((review) => (
// // //           <div className="review-item" key={review.id}>
// // //             <div className="review-header">
// // //               <div className="reviewer-info">
// // //                 <span className="reviewer-name">{review.reviewer}</span>
// // //                 <span className="review-date">{review.date}</span>
// // //               </div>
// // //               <div className="review-rating">
// // //                 <span className="stars">{renderStars(review.rating)}</span>
// // //                 <span className="rating-value">{review.rating}/5</span>
// // //               </div>
// // //             </div>

// // //             <div className="review-content">
// // //               <p>{review.content}</p>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       <style jsx>{`
// // //         .book-review-container {
// // //           font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
// // //           max-width: 800px;
// // //           margin: 0 auto;
// // //           padding: 20px;
// // //         }

// // //         .book-info {
// // //           display: flex;
// // //           background-color: #ffffff;
// // //           border-radius: 12px;
// // //           box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
// // //           overflow: hidden;
// // //           padding: 24px;
// // //           margin-bottom: 32px;
// // //         }

// // //         .book-cover {
// // //           flex: 0 0 120px;
// // //           margin-right: 24px;
// // //         }

// // //         .book-cover img {
// // //           width: 100%;
// // //           height: auto;
// // //           border-radius: 6px;
// // //           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
// // //         }

// // //         .book-summary {
// // //           flex: 1;
// // //         }

// // //         .book-title {
// // //           color: #2c3e50;
// // //           font-size: 24px;
// // //           margin: 0 0 8px 0;
// // //         }

// // //         .book-author {
// // //           color: #7f8c8d;
// // //           font-size: 16px;
// // //           font-weight: 400;
// // //           font-style: italic;
// // //           margin: 0 0 16px 0;
// // //         }

// // //         .book-rating {
// // //           display: flex;
// // //           align-items: center;
// // //           margin-bottom: 16px;
// // //         }

// // //         .stars {
// // //           color: #f39c12;
// // //           font-size: 18px;
// // //           letter-spacing: -1px;
// // //         }

// // //         .rating-text {
// // //           margin-left: 8px;
// // //           color: #555;
// // //           font-size: 14px;
// // //           font-weight: 600;
// // //         }

// // //         .review-count {
// // //           margin-left: 8px;
// // //           color: #95a5a6;
// // //           font-size: 14px;
// // //         }

// // //         .book-description {
// // //           color: #34495e;
// // //           line-height: 1.6;
// // //           font-size: 15px;
// // //         }

// // //         .reviews-heading {
// // //           font-size: 18px;
// // //           color: #2c3e50;
// // //           margin: 24px 0 16px 0;
// // //           padding-bottom: 8px;
// // //           border-bottom: 1px solid #eee;
// // //         }

// // //         .reviews-list {
// // //           display: flex;
// // //           flex-direction: column;
// // //           gap: 16px;
// // //         }

// // //         .review-item {
// // //           background-color: #ffffff;
// // //           border-radius: 8px;
// // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
// // //           padding: 16px;
// // //         }

// // //         .review-header {
// // //           display: flex;
// // //           justify-content: space-between;
// // //           align-items: center;
// // //           margin-bottom: 12px;
// // //         }

// // //         .reviewer-info {
// // //           display: flex;
// // //           flex-direction: column;
// // //         }

// // //         .reviewer-name {
// // //           font-weight: 600;
// // //           color: #34495e;
// // //           font-size: 15px;
// // //         }

// // //         .review-date {
// // //           font-size: 12px;
// // //           color: #95a5a6;
// // //         }

// // //         .review-rating {
// // //           display: flex;
// // //           flex-direction: column;
// // //           align-items: flex-end;
// // //         }

// // //         .rating-value {
// // //           font-size: 12px;
// // //           color: #7f8c8d;
// // //           margin-top: 2px;
// // //         }

// // //         .review-content {
// // //           background-color: #f9f9f9;
// // //           padding: 16px;
// // //           border-radius: 6px;
// // //           border-left: 3px solid #3498db;
// // //         }

// // //         .review-content p {
// // //           color: #444;
// // //           line-height: 1.6;
// // //           margin: 0;
// // //           font-size: 14px;
// // //         }

// // //         @media (max-width: 600px) {
// // //           .book-info {
// // //             flex-direction: column;
// // //           }

// // //           .book-cover {
// // //             margin-right: 0;
// // //             margin-bottom: 20px;
// // //             max-width: 150px;
// // //             align-self: center;
// // //           }

// // //           .review-header {
// // //             flex-direction: column;
// // //             align-items: flex-start;
// // //             gap: 8px;
// // //           }

// // //           .review-rating {
// // //             align-items: flex-start;
// // //           }
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default Review;


// // import axios from "axios";
// // import React, { useEffect, useState } from "react";

// // const Review = () => {
// //   const [showReviews, setShowReviews] = useState(false);
// //   const [bookData, setBookData] = useState(null);

// //   const fetchBook = async () => {
// //     try {
// //       const authToken = localStorage.getItem("authToken");
// //       const response = await axios.get(
// //         `${process.env.REACT_APP_BASE_URL}/author/review/get`,
// //         {
// //           headers: {
// //             Authorization: authToken,
// //           },
// //         }
// //       );
// //       console.log("response", response);
// //       // Here you would set the bookData from the response
// //       // setBookData(response?.data?.data);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchBook();
// //   }, []);

// //   // Sample review data - in a real application, this would come from props or an API
// //   const reviews = [
// //     {
// //       id: 1,
// //       reviewer: "John Smith",
// //       date: "March 15, 2025",
// //       rating: 4,
// //       content:
// //         "A masterpiece of American literature that captures the essence of the Jazz Age and the American Dream. Fitzgerald's prose is elegant and the characters are unforgettable. The story's exploration of wealth, love, and corruption remains relevant even today.",
// //     },
// //     {
// //       id: 2,
// //       reviewer: "Alice Johnson",
// //       date: "March 10, 2025",
// //       rating: 5,
// //       content:
// //         "This novel perfectly encapsulates the decadence and excess of the 1920s while exploring themes of hope, disillusionment, and the American Dream. Fitzgerald's writing is both beautiful and haunting. The characters, especially Gatsby himself, are complex and compelling.",
// //     },
// //     {
// //       id: 3,
// //       reviewer: "Michael Brown",
// //       date: "March 5, 2025",
// //       rating: 3,
// //       content:
// //         "While beautifully written, I found the characters somewhat difficult to empathize with. However, the novel's exploration of wealth and class in America remains powerful and relevant. The symbolism throughout the book is masterfully done.",
// //     },
// //   ];

// //   // Function to generate star ratings
// //   const renderStars = (rating) => {
// //     let stars = "";
// //     for (let i = 1; i <= 5; i++) {
// //       stars += i <= rating ? "★" : "☆";
// //     }
// //     return stars;
// //   };

// //   // Toggle function for showing/hiding reviews
// //   const toggleReviews = () => {
// //     setShowReviews(!showReviews);
// //   };

// //   return (
// //     <div className="book-review-container">
// //       <div className="book-info">
// //         <div className="book-summary">
// //           <h2 
// //             className="book-title"
// //             onClick={toggleReviews}
// //             role="button"
// //             tabIndex={0}
// //           >
// //             The Great Gatsby
// //             <span className="click-indicator">
// //               {showReviews ? " ▼" : " ▶"}
// //             </span>
// //           </h2>
// //           <h3 className="book-author">by F. Scott Fitzgerald</h3>

// //           <div className="book-rating">
// //             <div className="stars">★★★★☆</div>
// //             <span className="rating-text">4.0/5</span>
// //             <span className="review-count">({reviews.length} reviews)</span>
// //           </div>

// //           <div className="book-description">
// //             <p>
// //               A novel by F. Scott Fitzgerald that follows a cast of characters
// //               living in the fictional town of West Egg on prosperous Long Island
// //               in the summer of 1922.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {showReviews && (
// //         <>
// //           <h3 className="reviews-heading">Reader Reviews</h3>

// //           <div className="reviews-list">
// //             {reviews.map((review) => (
// //               <div className="review-item" key={review.id}>
// //                 <div className="review-header">
// //                   <div className="reviewer-info">
// //                     <span className="reviewer-name">{review.reviewer}</span>
// //                     <span className="review-date">{review.date}</span>
// //                   </div>
// //                   <div className="review-rating">
// //                     <span className="stars">{renderStars(review.rating)}</span>
// //                     <span className="rating-value">{review.rating}/5</span>
// //                   </div>
// //                 </div>

// //                 <div className="review-content">
// //                   <p>{review.content}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </>
// //       )}

// //       <style jsx>{`
// //         .book-review-container {
// //           font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
// //           max-width: 800px;
// //           margin: 0 auto;
// //           padding: 20px;
// //         }

// //         .book-info {
// //           display: flex;
// //           background-color: #ffffff;
// //           border-radius: 12px;
// //           box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
// //           overflow: hidden;
// //           padding: 24px;
// //           margin-bottom: 32px;
// //         }

// //         .book-cover {
// //           flex: 0 0 120px;
// //           margin-right: 24px;
// //         }

// //         .book-cover img {
// //           width: 100%;
// //           height: auto;
// //           border-radius: 6px;
// //           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
// //         }

// //         .book-summary {
// //           flex: 1;
// //         }

// //         .book-title {
// //           color: #2c3e50;
// //           font-size: 24px;
// //           margin: 0 0 8px 0;
// //           cursor: pointer;
// //           display: inline-flex;
// //           align-items: center;
// //           user-select: none;
// //         }

// //         .book-title:hover {
// //           color: #3498db;
// //           text-decoration: underline;
// //         }

// //         .click-indicator {
// //           font-size: 16px;
// //           margin-left: 5px;
// //           color: #3498db;
// //         }

// //         .book-author {
// //           color: #7f8c8d;
// //           font-size: 16px;
// //           font-weight: 400;
// //           font-style: italic;
// //           margin: 0 0 16px 0;
// //         }

// //         .book-rating {
// //           display: flex;
// //           align-items: center;
// //           margin-bottom: 16px;
// //         }

// //         .stars {
// //           color: #f39c12;
// //           font-size: 18px;
// //           letter-spacing: -1px;
// //         }

// //         .rating-text {
// //           margin-left: 8px;
// //           color: #555;
// //           font-size: 14px;
// //           font-weight: 600;
// //         }

// //         .review-count {
// //           margin-left: 8px;
// //           color: #95a5a6;
// //           font-size: 14px;
// //         }

// //         .book-description {
// //           color: #34495e;
// //           line-height: 1.6;
// //           font-size: 15px;
// //         }

// //         .reviews-heading {
// //           font-size: 18px;
// //           color: #2c3e50;
// //           margin: 24px 0 16px 0;
// //           padding-bottom: 8px;
// //           border-bottom: 1px solid #eee;
// //         }

// //         .reviews-list {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 16px;
// //           animation: fadeIn 0.3s ease-in;
// //         }

// //         @keyframes fadeIn {
// //           from { opacity: 0; transform: translateY(-10px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }

// //         .review-item {
// //           background-color: #ffffff;
// //           border-radius: 8px;
// //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
// //           padding: 16px;
// //         }

// //         .review-header {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //           margin-bottom: 12px;
// //         }

// //         .reviewer-info {
// //           display: flex;
// //           flex-direction: column;
// //         }

// //         .reviewer-name {
// //           font-weight: 600;
// //           color: #34495e;
// //           font-size: 15px;
// //         }

// //         .review-date {
// //           font-size: 12px;
// //           color: #95a5a6;
// //         }

// //         .review-rating {
// //           display: flex;
// //           flex-direction: column;
// //           align-items: flex-end;
// //         }

// //         .rating-value {
// //           font-size: 12px;
// //           color: #7f8c8d;
// //           margin-top: 2px;
// //         }

// //         .review-content {
// //           background-color: #f9f9f9;
// //           padding: 16px;
// //           border-radius: 6px;
// //           border-left: 3px solid #3498db;
// //         }

// //         .review-content p {
// //           color: #444;
// //           line-height: 1.6;
// //           margin: 0;
// //           font-size: 14px;
// //         }

// //         @media (max-width: 600px) {
// //           .book-info {
// //             flex-direction: column;
// //           }

// //           .book-cover {
// //             margin-right: 0;
// //             margin-bottom: 20px;
// //             max-width: 150px;
// //             align-self: center;
// //           }

// //           .review-header {
// //             flex-direction: column;
// //             align-items: flex-start;
// //             gap: 8px;
// //           }

// //           .review-rating {
// //             align-items: flex-start;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default Review;

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Review = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [expandedBookId, setExpandedBookId] = useState(null);

//   const fetchBooks = async () => {
//     try {
//       setLoading(true);
//       const authToken = localStorage.getItem("authToken");
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/author/review/get`,
//         {
//           headers: {
//             Authorization: authToken,
//           },
//         }
//       );
      
//       if (response.data.success && Array.isArray(response.data.data)) {
//         setBooks(response.data.data);
//       } else {
//         setError("Invalid data format received from API");
//       }
//     } catch (error) {
//       console.log(error);
//       setError("Failed to fetch books");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   // Function to toggle reviews visibility for a specific book
//   const toggleReviews = (bookId) => {
//     if (expandedBookId === bookId) {
//       setExpandedBookId(null); // Close if already open
//     } else {
//       setExpandedBookId(bookId); // Open the clicked book
//     }
//   };

//   // Function to generate star ratings
//   const renderStars = (rating) => {
//     // Default to 0 if no rating provided
//     const numericRating = rating || 0;
//     let stars = "";
//     for (let i = 1; i <= 5; i++) {
//       stars += i <= numericRating ? "★" : "☆";
//     }
//     return stars;
//   };

//   // Function to format date to a readable format
//   const formatDate = (dateString) => {
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString('en-US', { 
//         year: 'numeric', 
//         month: 'long', 
//         day: 'numeric' 
//       });
//     } catch (e) {
//       return dateString;
//     }
//   };

//   // Function to format price from cents to dollars
//   const formatPrice = (priceInCents) => {
//     const price = priceInCents / 100;
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD'
//     }).format(price);
//   };

//   if (loading) {
//     return <div className="loading-state">Loading books...</div>;
//   }

//   if (error) {
//     return <div className="error-state">Error: {error}</div>;
//   }

//   if (books.length === 0) {
//     return <div className="empty-state">No books found</div>;
//   }

//   return (
//     <div className="books-container">
//       {books.map((book) => (
//         <div className="book-review-container" key={book._id}>
//           <div className="book-info">
//             <div className="book-summary">
//               <h2 
//                 className="book-title"
//                 onClick={() => toggleReviews(book._id)}
//                 role="button"
//                 tabIndex={0}
//               >
//                 {book.title}
//                 <span className="click-indicator">
//                   {expandedBookId === book._id ? " ▼" : " ▶"}
//                 </span>
//               </h2>
//               <h3 className="book-author">by {book.author}</h3>

//               <div className="book-rating">
//                 <div className="stars">{renderStars(book.reviewCount > 0 ? 4 : 0)}</div>
//                 <span className="rating-text">{book.reviewCount > 0 ? "4.0/5" : "No ratings"}</span>
//                 <span className="review-count">({book.reviewCount} reviews)</span>
//               </div>

//               <div className="book-meta">
//                 <span className="book-category">{book.category}</span>
//                 <span className="book-price">{formatPrice(book.price)}</span>
//               </div>

//               <div className="book-description">
//                 <p>{book.description}</p>
//               </div>
//             </div>
//           </div>

//           {expandedBookId === book._id && book.reviews && book.reviews.length > 0 && (
//             <>
//               <h3 className="reviews-heading">Reader Reviews</h3>

//               <div className="reviews-list">
//                 {book.reviews.map((review) => (
//                   <div className="review-item" key={review._id}>
//                     <div className="review-header">
//                       <div className="reviewer-info">
//                         <span className="reviewer-name">{review.user.email}</span>
//                         <span className="review-date">{formatDate(review.createdAt)}</span>
//                       </div>
//                     </div>

//                     <div className="review-content">
//                       <p>{review.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}

//           {expandedBookId === book._id && (!book.reviews || book.reviews.length === 0) && (
//             <div className="no-reviews">
//               No reviews available for this book.
//             </div>
//           )}
//         </div>
//       ))}

//       <style jsx>{`
//         .books-container {
//           display: flex;
//           flex-direction: column;
//           gap: 32px;
//           margin-bottom: 40px;
//         }

//         .loading-state, .error-state, .empty-state, .no-reviews {
//           padding: 20px;
//           text-align: center;
//           background-color: #f8f9fa;
//           border-radius: 8px;
//           margin: 20px 0;
//           color: #6c757d;
//         }

//         .error-state {
//           color: #dc3545;
//           background-color: #f8d7da;
//         }

//         .book-review-container {
//           font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//           max-width: 800px;
//           margin: 0 auto;
//           padding: 20px;
//           border-radius: 12px;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//           background-color: #fff;
//         }

//         .book-info {
//           display: flex;
//           border-radius: 12px;
//           overflow: hidden;
//           padding: 0 0 16px 0;
//           margin-bottom: 8px;
//           border-bottom: 1px solid #eee;
//         }

//         .book-cover {
//           flex: 0 0 120px;
//           margin-right: 24px;
//         }

//         .book-cover img {
//           width: 100%;
//           height: auto;
//           border-radius: 6px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
//         }

//         .book-summary {
//           flex: 1;
//         }

//         .book-title {
//           color: #2c3e50;
//           font-size: 24px;
//           margin: 0 0 8px 0;
//           cursor: pointer;
//           display: inline-flex;
//           align-items: center;
//           user-select: none;
//         }

//         .book-title:hover {
//           color: #3498db;
//           text-decoration: underline;
//         }

//         .click-indicator {
//           font-size: 16px;
//           margin-left: 5px;
//           color: #3498db;
//         }

//         .book-author {
//           color: #7f8c8d;
//           font-size: 16px;
//           font-weight: 400;
//           font-style: italic;
//           margin: 0 0 16px 0;
//         }

//         .book-rating {
//           display: flex;
//           align-items: center;
//           margin-bottom: 16px;
//         }

//         .stars {
//           color: #f39c12;
//           font-size: 18px;
//           letter-spacing: -1px;
//         }

//         .rating-text {
//           margin-left: 8px;
//           color: #555;
//           font-size: 14px;
//           font-weight: 600;
//         }

//         .review-count {
//           margin-left: 8px;
//           color: #95a5a6;
//           font-size: 14px;
//         }

//         .book-meta {
//           display: flex;
//           gap: 16px;
//           margin-bottom: 16px;
//         }

//         .book-category {
//           display: inline-block;
//           background-color: #e3f2fd;
//           color: #1976d2;
//           padding: 4px 10px;
//           border-radius: 16px;
//           font-size: 13px;
//           font-weight: 500;
//         }

//         .book-price {
//           font-weight: 600;
//           color: #2c3e50;
//         }

//         .book-description {
//           color: #34495e;
//           line-height: 1.6;
//           font-size: 15px;
//         }

//         .reviews-heading {
//           font-size: 18px;
//           color: #2c3e50;
//           margin: 24px 0 16px 0;
//           padding-bottom: 8px;
//           border-bottom: 1px solid #eee;
//         }

//         .reviews-list {
//           display: flex;
//           flex-direction: column;
//           gap: 16px;
//           animation: fadeIn 0.3s ease-in;
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .review-item {
//           background-color: #ffffff;
//           border-radius: 8px;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
//           padding: 16px;
//         }

//         .review-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 12px;
//         }

//         .reviewer-info {
//           display: flex;
//           flex-direction: column;
//         }

//         .reviewer-name {
//           font-weight: 600;
//           color: #34495e;
//           font-size: 15px;
//         }

//         .review-date {
//           font-size: 12px;
//           color: #95a5a6;
//         }

//         .review-content {
//           background-color: #f9f9f9;
//           padding: 16px;
//           border-radius: 6px;
//           border-left: 3px solid #3498db;
//         }

//         .review-content p {
//           color: #444;
//           line-height: 1.6;
//           margin: 0;
//           font-size: 14px;
//         }

//         @media (max-width: 600px) {
//           .book-info {
//             flex-direction: column;
//           }

//           .book-cover {
//             margin-right: 0;
//             margin-bottom: 20px;
//             max-width: 150px;
//             align-self: center;
//           }

//           .review-header {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 8px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Review;

import axios from "axios";
import React, { useEffect, useState } from "react";

const Review = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedBookId, setExpandedBookId] = useState(null);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/author/review/get`,
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      
      if (response.data.success && Array.isArray(response.data.data)) {
        setBooks(response.data.data);
      } else {
        setError("Invalid data format received from API");
      }
    } catch (error) {
      console.log(error);
      setError("Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Function to toggle reviews visibility for a specific book
  const toggleReviews = (bookId) => {
    if (expandedBookId === bookId) {
      setExpandedBookId(null); // Close if already open
    } else {
      setExpandedBookId(bookId); // Open the clicked book
    }
  };

  // Function to generate star ratings
  const renderStars = (rating) => {
    // Default to 0 if no rating provided
    const numericRating = rating || 0;
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += i <= numericRating ? "★" : "☆";
    }
    return stars;
  };

  // Function to format date to a readable format
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch (e) {
      return dateString;
    }
  };

  // Function to format price from cents to dollars
  const formatPrice = (priceInCents) => {
    const price = priceInCents / 100;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  if (loading) {
    return <div className="loading-state">Loading books...</div>;
  }

  if (error) {
    return <div className="error-state">Error: {error}</div>;
  }

  if (books.length === 0) {
    return <div className="empty-state">No books found</div>;
  }

  return (
    <div className="books-container">
      {books.map((book) => (
        <div className="book-review-container" key={book._id}>
          <div className="book-info">
            <div className="book-summary">
              <h2 
                className="book-title"
                onClick={() => toggleReviews(book._id)}
                role="button"
                tabIndex={0}
              >
                {book.title}
                <span className="click-indicator">
                  {expandedBookId === book._id ? " ▼" : " ▶"}
                </span>
              </h2>
              <h3 className="book-author">by {book.author}</h3>

              {/* <div className="book-rating">
                <div className="stars">{renderStars(book.reviewCount > 0 ? 4 : 0)}</div>
                <span className="rating-text">{book.reviewCount > 0 ? "4.0/5" : "No ratings"}</span>
                <span className="review-count">({book.reviewCount} reviews)</span>
              </div> */}

              <div className="book-meta">
                <span className="book-category">{book.category}</span>
                <span className="book-price">{formatPrice(book.price)}</span>
              </div>

              <div className="book-description">
                <p>{book.description}</p>
              </div>
            </div>
          </div>

          {expandedBookId === book._id && book.reviews && book.reviews.length > 0 && (
            <>
              <h3 className="reviews-heading">Reader Reviews</h3>

              <div className="reviews-list">
                {book.reviews.map((review) => (
                  <div className="review-item" key={review._id}>
                    <div className="review-header">
                      <div className="reviewer-info">
                        <span className="reviewer-name">{review.user.email}</span>
                        <span className="review-date">{formatDate(review.createdAt)}</span>
                      </div>
                    </div>

                    <div className="review-content">
                      <p>{review.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {expandedBookId === book._id && (!book.reviews || book.reviews.length === 0) && (
            <div className="no-reviews">
              No reviews available for this book.
            </div>
          )}
        </div>
      ))}

      <style jsx>{`
        .books-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-bottom: 40px;
          width: 100%;
          align-items: center;
        }

        .loading-state, .error-state, .empty-state, .no-reviews {
          padding: 20px;
          text-align: center;
          background-color: #f8f9fa;
          border-radius: 8px;
          margin: 20px 0;
          color: #6c757d;
          width: 100%;
          max-width: 800px;
        }

        .error-state {
          color: #dc3545;
          background-color: #f8d7da;
        }

        .book-review-container {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          width: 800px;
          margin: 0 auto;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          background-color: #fff;
        }

        .book-info {
          display: flex;
          border-radius: 12px;
          overflow: hidden;
          padding: 0 0 16px 0;
          margin-bottom: 8px;
          border-bottom: 1px solid #eee;
          width: 100%;
        }

        .book-summary {
          flex: 1;
          width: 100%;
        }

        .book-title {
          color: #2c3e50;
          font-size: 24px;
          margin: 0 0 8px 0;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          user-select: none;
        }

        .book-title:hover {
          color: #3498db;
          text-decoration: underline;
        }

        .click-indicator {
          font-size: 16px;
          margin-left: 5px;
          color: #3498db;
        }

        .book-author {
          color: #7f8c8d;
          font-size: 16px;
          font-weight: 400;
          font-style: italic;
          margin: 0 0 16px 0;
        }

        .book-rating {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
        }

        .stars {
          color: #f39c12;
          font-size: 18px;
          letter-spacing: -1px;
        }

        .rating-text {
          margin-left: 8px;
          color: #555;
          font-size: 14px;
          font-weight: 600;
        }

        .review-count {
          margin-left: 8px;
          color: #95a5a6;
          font-size: 14px;
        }

        .book-meta {
          display: flex;
          gap: 16px;
          margin-bottom: 16px;
        }

        .book-category {
          display: inline-block;
          background-color: #e3f2fd;
          color: #1976d2;
          padding: 4px 10px;
          border-radius: 16px;
          font-size: 13px;
          font-weight: 500;
        }

        .book-price {
          font-weight: 600;
          color: #2c3e50;
        }

        .book-description {
          color: #34495e;
          line-height: 1.6;
          font-size: 15px;
        }

        .reviews-heading {
          font-size: 18px;
          color: #2c3e50;
          margin: 24px 0 16px 0;
          padding-bottom: 8px;
          border-bottom: 1px solid #eee;
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          animation: fadeIn 0.3s ease-in;
          width: 100%;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .review-item {
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          padding: 16px;
          width: 100%;
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .reviewer-info {
          display: flex;
          flex-direction: column;
        }

        .reviewer-name {
          font-weight: 600;
          color: #34495e;
          font-size: 15px;
        }

        .review-date {
          font-size: 12px;
          color: #95a5a6;
        }

        .review-content {
          background-color: #f9f9f9;
          padding: 16px;
          border-radius: 6px;
          border-left: 3px solid #3498db;
          width: 100%;
        }

        .review-content p {
          color: #444;
          line-height: 1.6;
          margin: 0;
          font-size: 14px;
        }

        @media (max-width: 840px) {
          .book-review-container {
            width: calc(100% - 40px);
            max-width: 800px;
          }
        }
      `}</style>
    </div>
  );
};

export default Review;