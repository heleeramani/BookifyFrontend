// // // // import React from "react";
// // // // import "../style/ShopList.css"; // Import CSS for styling
// // // // import Discover1 from "../../home/component/DiscoverBook";

// // // // const books = [
// // // //   {
// // // //     id: 1,
// // // //     title: "A Doctor in the House",
// // // //     author: "Candy Carson",
// // // //     rating: 5,
// // // //     price: "$6.50 - $16.99",
// // // //     image: '../../home/component/DiscoverBook',
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     title: "Design of the 20th Century",
// // // //     author: "Carol Foster",
// // // //     rating: 4,
// // // //     price: "$10.99 - $20.00",
// // // //     image: "https://via.placeholder.com/200x280",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     title: "New Galaxy",
// // // //     author: "Richard Mann",
// // // //     rating: 5,
// // // //     price: "$7.90 - $16.90",
// // // //     image: "https://via.placeholder.com/200x280",
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     title: "The Long Road to Deep Silence",
// // // //     author: "Richard Mann",
// // // //     rating: 4,
// // // //     price: "$12.00 - $22.00",
// // // //     image: "https://via.placeholder.com/200x280",
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     title: "Burt Geller",
// // // //     author: "Unknown Author",
// // // //     rating: 3,
// // // //     price: "$8.99 - $14.50",
// // // //     image: "https://via.placeholder.com/200x280",
// // // //   },
// // // // ];

// // // // const BookList = () => {
// // // //   return (
// // // //     <div className="book-list">
// // // //       {books.map((book) => (
// // // //         <div key={book.id} className="book-card">
// // // //           <img src={book.image} alt={book.title} className="book-image" />
// // // //           <h3 className="book-title">{book.title}</h3>
// // // //           <p className="book-author">{book.author}</p>
// // // //           <div className="book-rating">
// // // //             {"★".repeat(book.rating)}
// // // //             {"☆".repeat(5 - book.rating)}
// // // //           </div>
// // // //           <p className="book-price">{book.price}</p>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BookList;

// // // import React, { useState, useEffect } from "react";
// // // import "../../home/style/DiscoverBook.css";
// // // // import Discover1 from "../images/discover-book1.jpg";
// // // import Button from "../../buttons/Button";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import blogImg1 from "../../home/images/discover-book1.jpg";
// // // import PageTile from "../../pageTile/PageTile";

// // // const ShopList = () => {
// // //   const navigate = useNavigate();
// // //   const [activeCategory, setActiveCategory] = useState("New Releases");
// // //   // const filteredBooks = booksData.filter(book => book.category === activeCategory);
// // //   const [book, setBook] = useState([]);

// // //   const fetchBook = async () => {
// // //     try {
// // //       const response = await axios.get(
// // //         `${process.env.REACT_APP_BASE_URL}/user/book/getAll`
// // //       );
// // //       const bookArray = Array.isArray(response.data?.data)
// // //         ? response.data.data
// // //         : [];
// // //       console.log("response", response?.data?.data);

// // //       // Check if response.data is an array or wrapped inside another object
// // //       // const blogArray = Array.isArray(response.data)
// // //       //   ? response.data
// // //       //   : response.data?.data || [];
// // //       // console.log(blogArray, "shhrreeee");

// // //       // const formattedBlogs = blogArray.map((book) => ({
// // //       //   ...book,
// // //       //   id: book._id,
// // //       //   image: book.image ? book.image.url : "" // Check if image exists // Ensure DataGrid has an id
// // //       // }));

// // //       const formattedBooks = bookArray.map((book) => ({
// // //         id: book._id,
// // //         title: book.title || "Untitled",

// // //         description: book.description || "No description available.",
// // //         isbn: book.isbn || "No isbn Available",
// // //         category: book.category || book.category.name,
// // //         price: book.price || "undefined",
// // //         publishedYear: book.publishedYear || "Not",
// // //         image: book.image ? book.image.url : blogImg1, // Use default image if missing
// // //       }));
// // //       console.log(formattedBooks, "hellllll");

// // //       setBook(formattedBooks);
// // //       console.log(book, "bloggggg");
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchBook();
// // //   }, []);

// // //   return (
// // //     <>
// // //       <PageTile
// // //         title="Shop"
// // //         breadcrumbs={[
// // //           { label: "Home", link: "/", active: false },
// // //           { label: "About Us", active: true },
// // //         ]}
// // //       />
// // //       <div className="discover-container">
// // //         <div className="discover-wrap">
// // //           <h2 className="main-heading">Discover Your Next Book</h2>
// // //           <div className="category-filter">
// // //             <ul className="filter-nav">
// // //               {/* {categories.map((category, index) => (
// // //               <li
// // //                 key={index}
// // //                 className={`filter-item ${activeCategory === category ? "active" : ""}`}
// // //                 onClick={() => setActiveCategory(category)}
// // //               >
// // //                 {category}
// // //               </li>
// // //             ))} */}
// // //             </ul>
// // //           </div>
// // //           <div className="book-list">
// // //             {book.map(
// // //               (
// // //                 book // Show only the first 5 books
// // //               ) => (
// // //                 <div
// // //                   className="book-card"
// // //                   key={book.id}
// // //                   onClick={() => navigate(`/book-info/${book.id}`)}
// // //                   style={{ cursor: "pointer" }}
// // //                 >
// // //                   <img
// // //                     src={book.image}
// // //                     alt={book.title}
// // //                     className="book-image"
// // //                   />
// // //                   <h5 className="book-title">{book.title}</h5>
// // //                   <p className="book-author">{book.author}</p>
// // //                   <p className="book-price">{book.price}</p>
// // //                   <p className="book-author">{book.publishedYear}</p>
// // //                   <p
// // //                     className="book-description"
// // //                     data-full-description={book.description}
// // //                   >
// // //                     {book.description}
// // //                   </p>
// // //                   <p className="book-author">
// // //                     <b>ISBN:</b> {book.isbn}
// // //                   </p>
// // //                 </div>
// // //               )
// // //             )}
// // //           </div>

// // //           {/* <div className="btn-wrap">
// // //           <Button
// // //             title="Discover Your Book"
// // //             name="more"
// // //             onClick={() => navigate("/store")}
// // //           />
// // //         </div> */}
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default ShopList;

// // import { useState, useEffect } from "react";
// // import "../../home/style/DiscoverBook.css";
// // // import blogImg1 from "../../home/component/discover-book1.jpg";
// // import blogImg1 from "../../home/images/discover-book1.jpg";

// // import Button from "../../buttons/Button";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";



// // const DiscoverBook = () => {
// //   const navigate = useNavigate();
// //   const [activeCategory, setActiveCategory] = useState("New Releases");
// //   const [books, setBooks] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [alert, setAlert] = useState({
// //     open: false,
// //     message: "",
// //     severity: "",
// //   });
// //   const [wishlistLoading, setWishlistLoading] = useState({});

// //   // Define categories for filter
// //   const categories = [
// //     "New Releases",
// //     "Fiction",
// //     "Non-Fiction",
// //     "Science",
// //     "History",
// //   ];

// //   const fetchBooks = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await axios.get(
// //         `${process.env.REACT_APP_BASE_URL}/user/book/getAll`
// //       );

// //       const bookArray = Array.isArray(response.data?.data)
// //         ? response.data.data
// //         : [];

// //       const formattedBooks = bookArray.map((book) => ({
// //         id: book._id,
// //         title: book.title || "Untitled",
// //         author: book.author || "Unknown Author",
// //         description: book.description || "No description available.",
// //         isbn: book.isbn || "No ISBN Available",
// //         category: book.category?.name || book.category || "Uncategorized",
// //         price: book.price ? `$${book.price}` : "Price not available",
// //         publishedYear: book.publishedYear || "Year not available",
// //         image: book.image?.url || blogImg1, // Use default image if missing
// //         inWishlist: book.inWishlist || false,
// //       }));

// //       setBooks(formattedBooks);
// //     } catch (error) {
// //       console.error("Error fetching books:", error);
// //       setAlert({
// //         open: true,
// //         message: "Failed to load books. Please try again later.",
// //         severity: "error",
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchBooks();
// //   }, []);

// //   // Filter books based on active category
// //   const filteredBooks = activeCategory
// //     ? books.filter((book) => book.category === activeCategory)
// //     : books;

// //   // Display all books if filtered list is empty
// //   const displayBooks = filteredBooks.length > 0 ? filteredBooks : books;

// //   const handleAddBook = async (bookData) => {
// //     try {
// //       setLoading(true);

// //       // Validate required fields
// //       if (!bookData.title || !bookData.author || !bookData.category) {
// //         setAlert({
// //           open: true,
// //           message: "Title, author, and category are required",
// //           severity: "error",
// //         });
// //         return;
// //       }

// //       // Prepare book data
// //       const bookPayload = {
// //         bookId: bookData._id,
// //       };

// //       // Create new book
// //       const response = await axios.post(
// //         `${process.env.REACT_APP_BASE_URL}/admin/book/create`,
// //         bookPayload
// //       );

// //       setAlert({
// //         open: true,
// //         message: "Book added successfully",
// //         severity: "success",
// //       });

// //       // Refresh the book list
// //       fetchBooks();
// //     } catch (error) {
// //       console.error("Error saving book:", error);
// //       setAlert({
// //         open: true,
// //         message: `Failed to add book: ${
// //           error.response?.data?.message || error.message
// //         }`,
// //         severity: "error",
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Add to wishlist function
// //   const addToWishlist = async (bookId) => {
// //     try {
// //       // Set loading state for this specific book
// //       setWishlistLoading((prev) => ({ ...prev, [bookId]: true }));

// //       // Check if token exists first
// //       const token = localStorage.getItem("authToken");
// //       if (!token) {
// //         setAlert({
// //           open: true,
// //           message: "Please log in to add books to your wishlist",
// //           severity: "warning",
// //         });
// //         return;
// //       }

// //       // Make API call to add book to wishlist with proper token format
// //       const response = await axios.post(
// //         `${process.env.REACT_APP_BASE_URL}/user/wishlist/create`,
// //         { book: bookId }, // Changed from bookId to book to match backend expectation
// //         {
// //           headers: {
// //             Authorization: token, // No Bearer prefix, just the raw token
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );

// //       // Update the book in state to show it's in wishlist
// //       setBooks((prevBooks) =>
// //         prevBooks.map((book) =>
// //           book.id === bookId ? { ...book, inWishlist: true } : book
// //         )
// //       );

// //       setAlert({
// //         open: true,
// //         message: "Book added to wishlist successfully!",
// //         severity: "success",
// //       });
// //     } catch (error) {
// //       if (
// //         error.response?.status === 401 ||
// //         (error.message && error.message.includes("jwt"))
// //       ) {
// //         // Authentication error
// //         setAlert({
// //           open: true,
// //           message: "Authentication failed. Please log in again.",
// //           severity: "error",
// //         });
// //         // Optionally redirect to login
// //         // navigate('/login');
// //       } else {
// //         // Other errors
// //         console.error("Error adding book to wishlist:", error);
// //         setAlert({
// //           open: true,
// //           message: `Failed to add to wishlist: ${
// //             error.response?.data?.message || error.message
// //           }`,
// //           severity: "error",
// //         });
// //       }
// //     } finally {
// //       // Clear loading state for this book
// //       setWishlistLoading((prev) => ({ ...prev, [bookId]: false }));
// //     }
// //   };

// //   // Handle wishlist button click
// //   const handleWishlistClick = (e, bookId) => {
// //     e.stopPropagation(); // Prevent triggering the parent onClick that navigates
// //     addToWishlist(bookId);
// //   };

// //   // Function to dismiss alert
// //   const handleDismissAlert = () => {
// //     setAlert({ open: false, message: "", severity: "" });
// //   };

// //   return (
// //     <div className="discover-container">
// //       {alert.open && (
// //         <div className={`alert alert-${alert.severity}`}>
// //           {alert.message}
// //           <button className="alert-close" onClick={handleDismissAlert}>
// //             ×
// //           </button>
// //         </div>
// //       )}

// //       <div className="discover-wrap">
// //         <h2 className="main-heading">Discover Your Next Book</h2>

// //         <div className="category-filter">
// //           <ul className="filter-nav">
// //             {categories.map((category, index) => (
// //               <li
// //                 key={index}
// //                 className={`filter-item ${
// //                   activeCategory === category ? "active" : ""
// //                 }`}
// //                 onClick={() => setActiveCategory(category)}
// //               >
// //                 {category}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {loading ? (
// //           <div className="loading">Loading books...</div>
// //         ) : (
// //           <div className="book-list">
// //             {displayBooks.map((book) => (
// //               <div
// //                 className="book-card"
// //                 key={book.id}
// //                 onClick={() => navigate(`/book-info/${book.id}`)}
// //                 style={{ cursor: "pointer" }}
// //               >
// //                 <img src={book.image} alt={book.title} className="book-image" />
// //                 <div className="book-wishlist">
// //                   {/* <button
// //                     className={`wishlist-btn ${
// //                       book.inWishlist ? "wishlist-active" : ""
// //                     }`}
// //                     onClick={(e) => handleWishlistClick(e, book.id)}
// //                     disabled={wishlistLoading[book.id]}
// //                     title="Add to Wishlist"
// //                   > */}
// //                     {wishlistLoading[book.id] ? (
// //                       <span className="loading-icon">...</span>
// //                     ) : (
// //                       <span className="heart-icon">
// //                         {book.inWishlist ? "❤️" : "🤍"}
// //                       </span>
// //                     )}
// //                   {/* </button> */}
// //                 </div>
// //                 <h5 className="book-title">{book.title}</h5>
// //                 <p className="book-author">{book.author}</p>
// //                 <p className="book-price">{book.price}</p>
// //                 {/* <p className="book-year">{book.publishedYear}</p> */}
// //                 {/* <p
// //                   className="book-description"
// //                   data-full-description={book.description}
// //                 >
// //                   {book.description.length > 100
// //                     ? `${book.description.substring(0, 100)}...`
// //                     : book.description}
// //                 </p> */}
// //                 <p className="book-isbn">
// //                   <b>ISBN:</b> {book.isbn}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         {/* <div className="btn-wrap">
// //           <Button
// //             title="Discover More Books"
// //             name="more"
// //             onClick={() => navigate("/store")}
// ///           />
// //         </div> */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default DiscoverBook;


// import { useState, useEffect, useRef } from "react";
// import "../../home/style/DiscoverBook.css";

// import Button from "../../buttons/Button";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// // import blogImg1 from "../images/discover-book1.jpg";
// import blogImg1 from "../../home/images/discover-book1.jpg";

// const ShopList = () => {
//   const navigate = useNavigate();
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [books, setBooks] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [alert, setAlert] = useState({
//     open: false,
//     message: "",
//     severity: "",
//   });
//   const [wishlistLoading, setWishlistLoading] = useState({});
//   const categoryRef = useRef(null);

//   // Fetch categories from API
//   const fetchCategories = async () => {
//     try {
//       const authToken = localStorage.getItem("authToken");
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/category/get`,
//         {
//           headers: {
//             "Authorization": authToken,
//           },
//         }
//       );
      
//       if (response.data?.success && Array.isArray(response.data?.data)) {
//         setCategories(response.data.data);
//         // Set the first category as active by default if categories exist
//         if (response.data.data.length > 0) {
//           setActiveCategory(response.data.data[0].name);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//       setAlert({
//         open: true,
//         message: "Failed to load categories. Please try again later.",
//         severity: "error",
//       });
//     }
//   };

//   const fetchBooks = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/book/getAll`
//       );

//       const bookArray = Array.isArray(response.data?.data)
//         ? response.data.data
//         : [];

//       const formattedBooks = bookArray.map((book) => ({
//         id: book._id,
//         title: book.title || "Untitled",
//         author: book.author || "Unknown Author",
//         description: book.description || "No description available.",
//         isbn: book.isbn || "No ISBN Available",
//         category: book.category?.name || book.category || "Uncategorized",
//         price: book.price ? `${book.price}` : "Price not available",
//         publishedYear: book.publishedYear || "Year not available",
//         image: book.image?.url || blogImg1, // Use default image if missing
//         inWishlist: book.inWishlist || false,
//       }));

//       setBooks(formattedBooks);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//       setAlert({
//         open: true,
//         message: "Failed to load books. Please try again later.",
//         severity: "error",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//     fetchCategories();
//   }, []);

//   // Filter books based on active category
//   const filteredBooks = activeCategory
//     ? books.filter((book) => 
//         // Case-insensitive comparison for more robust filtering
//         book.category.toLowerCase() === activeCategory.toLowerCase())
//     : books;

//   // Scroll horizontally through categories
//   const scrollCategories = (direction) => {
//     if (categoryRef.current) {
//       const scrollAmount = direction === 'left' ? -200 : 200;
//       categoryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   // Add to wishlist function
//   const addToWishlist = async (bookId) => {
//     try {
//       // Set loading state for this specific book
//       setWishlistLoading((prev) => ({ ...prev, [bookId]: true }));

//       // Check if token exists first
//       const token = localStorage.getItem("authToken");
//       if (!token) {
//         setAlert({
//           open: true,
//           message: "Please log in to add books to your wishlist",
//           severity: "warning",
//         });
//         return;
//       }

//       // Make API call to add book to wishlist with proper token format
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/user/wishlist/create`,
//         { book: bookId }, 
//         {
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // Update the book in state to show it's in wishlist
//       setBooks((prevBooks) =>
//         prevBooks.map((book) =>
//           book.id === bookId ? { ...book, inWishlist: true } : book
//         )
//       );

//       setAlert({
//         open: true,
//         message: "Book added to wishlist successfully!",
//         severity: "success",
//       });
//     } catch (error) {
//       if (
//         error.response?.status === 401 ||
//         (error.message && error.message.includes("jwt"))
//       ) {
//         setAlert({
//           open: true,
//           message: "Authentication failed. Please log in again.",
//           severity: "error",
//         });
//       } else {
//         console.error("Error adding book to wishlist:", error);
//         setAlert({
//           open: true,
//           message: `Failed to add to wishlist: ${
//             error.response?.data?.message || error.message
//           }`,
//           severity: "error",
//         });
//       }
//     } finally {
//       // Clear loading state for this book
//       setWishlistLoading((prev) => ({ ...prev, [bookId]: false }));
//     }
//   };

//   // Handle wishlist button click
//   const handleWishlistClick = (e, bookId) => {
//     e.stopPropagation(); // Prevent triggering the parent onClick that navigates
//     addToWishlist(bookId);
//   };

//   // Function to dismiss alert
//   const handleDismissAlert = () => {
//     setAlert({ open: false, message: "", severity: "" });
//   };

//   // Handle "All Books" category option
//   const handleAllBooksClick = () => {
//     setActiveCategory(null);
//   };

//   return (
//     <div className="discover-container">
//       {alert.open && (
//         <div className={`alert alert-${alert.severity}`}>
//           {alert.message}
//           <button className="alert-close" onClick={handleDismissAlert}>
//             ×
//           </button>
//         </div>
//       )}

//       <div className="discover-wrap">
//         <h2 className="main-heading">Discover Your Next Book</h2>

//         <div className="category-filter-container">
//           <button 
//             className="category-scroll-button left"
//             onClick={() => scrollCategories('left')}
//           >
//             &lt;
//           </button>
          
//           <div className="category-filter" ref={categoryRef}>
//             <ul className="filter-nav">
//               <li
//                 className={`filter-item ${activeCategory === null ? "active" : ""}`}
//                 onClick={handleAllBooksClick}
//               >
//                 ALL BOOKS
//               </li>
//               {categories.map((category) => (
//                 <li
//                   key={category._id}
//                   className={`filter-item ${
//                     activeCategory === category.name ? "active" : ""
//                   }`}
//                   onClick={() => setActiveCategory(category.name)}
//                 >
//                   {category.name.toUpperCase()}
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           <button 
//             className="category-scroll-button right"
//             onClick={() => scrollCategories('right')}
//           >
//             &gt;
//           </button>
//         </div>

//         {loading ? (
//           <div className="loading">Loading books...</div>
//         ) : filteredBooks.length === 0 ? (
//           <div className="no-books-message">
//             <p>No books available in this category</p>
//             <Button 
//               title="Browse All Books" 
//               name="browse" 
//               onClick={handleAllBooksClick} 
//             />
//           </div>
//         ) : (
//           <>
//             <div className="book-list">
//               {filteredBooks.map((book) => (
//                 <div
//                   className="book-card"
//                   key={book.id}
//                   onClick={() => navigate(`/book-info/${book.id}`)}
//                 >
//                   <div className="book-image-container">
//                     <img src={book.image} alt={book.title} className="book-image" />
//                     <button 
//                       className="wishlist-button"
//                       onClick={(e) => handleWishlistClick(e, book.id)}
//                       disabled={wishlistLoading[book.id]}
//                     >
//                       {wishlistLoading[book.id] ? (
//                         <span className="loading-icon">...</span>
//                       ) : (
//                         <span className="heart-icon">
//                           {book.inWishlist ? "❤️" : "🤍"}
//                         </span>
//                       )}
//                     </button>
//                   </div>
//                   <div className="book-details">
//                     <h5 className="book-title">{book.title}</h5>
//                     <p className="book-author">{book.author}</p>
//                     <p className="book-price">{book.price}</p>
//                     <p className="book-isbn">ISBN: {book.isbn}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {/* <div className="btn-wrap">
//               <Button
//                 title="Discover More Books"
//                 name="more"
//                 onClick={() => navigate("/store")}
//                 className="discover-more-btn"
//               />
//             </div> */}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShopList;


// import { useState, useEffect, useRef } from "react";
// // import "../style/DiscoverBook.css";
// import Button from "../../buttons/Button";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// // import blogImg1 from "../images/discover-book1.jpg";
// import blogImg1 from "../../home/images/discover-book1.jpg";
// import "../../home/style/DiscoverBook.css";

// // Helper function to safely convert any value to a string
// const safeString = (value) => {
//   if (value === null || value === undefined) return "";
//   if (typeof value === "string") return value;
//   if (typeof value === "number" || typeof value === "boolean") return String(value);
//   return JSON.stringify(value);
// };

// const ShopList = () => {
//   const navigate = useNavigate();
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [books, setBooks] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [alert, setAlert] = useState({
//     open: false,
//     message: "",
//     severity: "",
//   });
//   const [wishlistLoading, setWishlistLoading] = useState({});
//   const categoryRef = useRef(null);

//   // Fetch categories from API
//   const fetchCategories = async () => {
//     try {
//       const authToken = localStorage.getItem("authToken");
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/category/get`,
//         {
//           headers: {
//             "Authorization": authToken,
//           },
//         }
//       );
      
//       if (response.data?.success && Array.isArray(response.data?.data)) {
//         // Clean category data before setting state
//         const cleanedCategories = response.data.data.map(category => ({
//           _id: category._id || String(Math.random()),
//           name: typeof category.name === 'string' ? category.name : 
//                 (category.name ? JSON.stringify(category.name) : 'Unknown')
//         }));
        
//         setCategories(cleanedCategories);
        
//         // Set the first category as active by default if categories exist
//         if (cleanedCategories.length > 0) {
//           setActiveCategory(cleanedCategories[0].name);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//       setAlert({
//         open: true,
//         message: "Failed to load categories. Please try again later.",
//         severity: "error",
//       });
//     }
//   };

//   const fetchBooks = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/book/getAll`
//       );

//       const bookArray = Array.isArray(response.data?.data)
//         ? response.data.data
//         : [];

//       // Log the first book to debug structure
//       if (bookArray.length > 0) {
//         console.log("First book structure:", JSON.stringify(bookArray[0], null, 2));
//       }

//       const formattedBooks = bookArray.map((book) => {
//         // Handle category - could be string, object with name, or something else
//         let categoryValue = "Uncategorized";
//         if (book.category) {
//           if (typeof book.category === 'object' && book.category.name) {
//             categoryValue = safeString(book.category.name);
//           } else if (typeof book.category === 'string') {
//             categoryValue = book.category;
//           } else {
//             categoryValue = "Uncategorized";
//           }
//         }

//         // Handle author - could be string, object with name fields, or something else
//         let authorValue = "Unknown Author";
//         if (book.author) {
//           if (typeof book.author === 'object') {
//             if (book.author.firstName || book.author.lastName) {
//               authorValue = `${book.author.firstName || ''} ${book.author.lastName || ''}`.trim();
//             } else if (book.author.name) {
//               authorValue = book.author.name;
//             } else {
//               authorValue = "Unknown Author";
//             }
//           } else if (typeof book.author === 'string') {
//             authorValue = book.author;
//           }
//         }

//         // Handle image - could be string URL, object with url property, or something else
//         let imageValue = blogImg1;
//         if (book.image) {
//           if (typeof book.image === 'object' && book.image.url) {
//             imageValue = book.image.url;
//           } else if (typeof book.image === 'string') {
//             imageValue = book.image;
//           }
//         }

//         return {
//           id: book._id || String(Math.random()),
//           title: safeString(book.title) || "Untitled",
//           author: authorValue,
//           description: safeString(book.description) || "No description available.",
//           isbn: safeString(book.isbn) || "No ISBN Available",
//           category: categoryValue,
//           price: safeString(book.price) || "Price not available",
//           publishedYear: safeString(book.publishedYear) || "Year not available",
//           image: imageValue,
//           inWishlist: !!book.inWishlist,
//         };
//       });

//       setBooks(formattedBooks);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//       setAlert({
//         open: true,
//         message: "Failed to load books. Please try again later.",
//         severity: "error",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//     fetchCategories();
//   }, []);

//   // Filter books based on active category
//   const filteredBooks = activeCategory
//     ? books.filter((book) => 
//         book.category.toLowerCase() === activeCategory.toLowerCase())
//     : books;

//   // Limit displayed books to 5
//   const displayedBooks = filteredBooks.slice(0, 5);

//   // Scroll horizontally through categories
//   const scrollCategories = (direction) => {
//     if (categoryRef.current) {
//       const scrollAmount = direction === 'left' ? -200 : 200;
//       categoryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   // Add to wishlist function
//   const addToWishlist = async (bookId) => {
//     try {
//       setWishlistLoading((prev) => ({ ...prev, [bookId]: true }));

//       const token = localStorage.getItem("authToken");
//       if (!token) {
//         setAlert({
//           open: true,
//           message: "Please log in to add books to your wishlist",
//           severity: "warning",
//         });
//         return;
//       }

//       await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/user/wishlist/create`,
//         { book: bookId }, 
//         {
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       setBooks((prevBooks) =>
//         prevBooks.map((book) =>
//           book.id === bookId ? { ...book, inWishlist: true } : book
//         )
//       );

//       setAlert({
//         open: true,
//         message: "Book added to wishlist successfully!",
//         severity: "success",
//       });
//     } catch (error) {
//       if (
//         error.response?.status === 401 ||
//         (error.message && error.message.includes("jwt"))
//       ) {
//         setAlert({
//           open: true,
//           message: "Authentication failed. Please log in again.",
//           severity: "error",
//         });
//       } else {
//         console.error("Error adding book to wishlist:", error);
//         setAlert({
//           open: true,
//           message: `Failed to add to wishlist: ${
//             error.response?.data?.message || error.message
//           }`,
//           severity: "error",
//         });
//       }
//     } finally {
//       setWishlistLoading((prev) => ({ ...prev, [bookId]: false }));
//     }
//   };

//   const handleWishlistClick = (e, bookId) => {
//     e.stopPropagation();
//     addToWishlist(bookId);
//   };

//   const handleDismissAlert = () => {
//     setAlert({ open: false, message: "", severity: "" });
//   };

//   const handleAllBooksClick = () => {
//     setActiveCategory(null);
//   };

//   const handleDiscoverMoreClick = () => {
//     navigate("/store");
//   };

//   return (
//     <div className="discover-container">
//       {alert.open && (
//         <div className={`alert alert-${alert.severity}`}>
//           {alert.message}
//           <button className="alert-close" onClick={handleDismissAlert}>
//             ×
//           </button>
//         </div>
//       )}

//       <div className="discover-wrap">
//         <h2 className="main-heading">Discover Your Next Book</h2>

//         <div className="category-filter-container">
//           <button 
//             className="category-scroll-button left"
//             onClick={() => scrollCategories('left')}
//           >
//             &lt;
//           </button>
          
//           <div className="category-filter" ref={categoryRef}>
//             <ul className="filter-nav">
//               <li
//                 className={`filter-item ${activeCategory === null ? "active" : ""}`}
//                 onClick={handleAllBooksClick}
//               >
//                 ALL BOOKS
//               </li>
//               {categories.map((category) => (
//                 <li
//                   key={category._id}
//                   className={`filter-item ${
//                     activeCategory === category.name ? "active" : ""
//                   }`}
//                   onClick={() => setActiveCategory(category.name)}
//                 >
//                   {category.name.toUpperCase()}
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           <button 
//             className="category-scroll-button right"
//             onClick={() => scrollCategories('right')}
//           >
//             &gt;
//           </button>
//         </div>

//         {loading ? (
//           <div className="loading">Loading books...</div>
//         // ) : displayedBooks.length === 0 ? (
//         //   <div className="no-books-message">
//         //     <p>No books available in this category</p>
//         //     <Button 
//         //       title="Browse All Books" 
//         //       name="browse" 
//         //       onClick={handleAllBooksClick} 
//         //     />
//         //   </div>
//         // ) 
//         ): (
//           <>
//             <div className="book-list">
//               {displayedBooks.map((book) => (
//                 <div
//                   className="book-card"
//                   key={book.id}
//                   onClick={() => navigate(`/book-info/${book.id}`)}
//                 >
//                   <div className="book-image-container">
//                     <img src={book.image} alt={book.title} className="book-image" />
//                     <button 
//                       className="wishlist-button"
//                       onClick={(e) => handleWishlistClick(e, book.id)}
//                       disabled={wishlistLoading[book.id]}
//                     >
//                       {wishlistLoading[book.id] ? (
//                         <span className="loading-icon">...</span>
//                       ) : (
//                         <span className="heart-icon">
//                           {book.inWishlist ? "❤️" : "🤍"}
//                         </span>
//                       )}
//                     </button>
//                   </div>
//                   <div className="book-details">
//                     <h5 className="book-title">{book.title}</h5>
//                     <p className="book-author">{book.author}</p>
//                     <p className="book-price">{book.price}</p>
//                     <p className="book-isbn">ISBN: {book.isbn}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             <div className="btn-wrap">
//               <Button
//                 title="Discover More Books"
//                 name="more"
//                 onClick={handleDiscoverMoreClick}
//                 className="discover-more-btn"
//               />
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShopList;


import { useState, useEffect, useRef } from "react";
// import "../style/DiscoverBook.css";
import Button from "../../buttons/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import blogImg1 from "../images/discover-book1.jpg";
import blogImg1 from "../../home/images/discover-book1.jpg";
import "../../home/style/DiscoverBook.css";

// Helper function to safely convert any value to a string
const safeString = (value) => {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return JSON.stringify(value);
};

const ShopList = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const [wishlistLoading, setWishlistLoading] = useState({});
  const categoryRef = useRef(null);

  // Fetch categories from API
  const fetchCategories = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/category/get`,
        {
          headers: {
            "Authorization": authToken,
          },
        }
      );
      
      if (response.data?.success && Array.isArray(response.data?.data)) {
        // Clean category data before setting state
        const cleanedCategories = response.data.data.map(category => ({
          _id: category._id || String(Math.random()),
          name: typeof category.name === 'string' ? category.name : 
                (category.name ? JSON.stringify(category.name) : 'Unknown')
        }));
        
        setCategories(cleanedCategories);
        
        // Set the first category as active by default if categories exist
        if (cleanedCategories.length > 0) {
          setActiveCategory(cleanedCategories[0].name);
        }
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setAlert({
        open: true,
        message: "Failed to load categories. Please try again later.",
        severity: "error",
      });
    }
  };

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/book/getAll`
      );

      const bookArray = Array.isArray(response.data?.data)
        ? response.data.data
        : [];

      // Log the first book to debug structure
      if (bookArray.length > 0) {
        console.log("First book structure:", JSON.stringify(bookArray[0], null, 2));
      }

      const formattedBooks = bookArray.map((book) => {
        // Handle category - could be string, object with name, or something else
        let categoryValue = "Uncategorized";
        if (book.category) {
          if (typeof book.category === 'object' && book.category.name) {
            categoryValue = safeString(book.category.name);
          } else if (typeof book.category === 'string') {
            categoryValue = book.category;
          } else {
            categoryValue = "Uncategorized";
          }
        }

        // Handle author - could be string, object with name fields, or something else
        let authorValue = "Unknown Author";
        if (book.author) {
          if (typeof book.author === 'object') {
            if (book.author.firstName || book.author.lastName) {
              authorValue = `${book.author.firstName || ''} ${book.author.lastName || ''}`.trim();
            } else if (book.author.name) {
              authorValue = book.author.name;
            } else {
              authorValue = "Unknown Author";
            }
          } else if (typeof book.author === 'string') {
            authorValue = book.author;
          }
        }

        // Handle image - could be string URL, object with url property, or something else
        let imageValue = blogImg1;
        if (book.image) {
          if (typeof book.image === 'object' && book.image.url) {
            imageValue = book.image.url;
          } else if (typeof book.image === 'string') {
            imageValue = book.image;
          }
        }

        return {
          id: book._id || String(Math.random()),
          title: safeString(book.title) || "Untitled",
          author: authorValue,
          description: safeString(book.description) || "No description available.",
          isbn: safeString(book.isbn) || "No ISBN Available",
          category: categoryValue,
          price: safeString(book.price) || "Price not available",
          publishedYear: safeString(book.publishedYear) || "Year not available",
          image: imageValue,
          inWishlist: !!book.inWishlist,
        };
      });

      setBooks(formattedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
      setAlert({
        open: true,
        message: "Failed to load books. Please try again later.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
    fetchCategories();
  }, []);

  // Filter books based on active category
  const filteredBooks = activeCategory
    ? books.filter((book) => 
        book.category.toLowerCase() === activeCategory.toLowerCase())
    : books;

  // Display all books instead of limiting to 5
  const displayedBooks = filteredBooks;

  // Scroll horizontally through categories
  const scrollCategories = (direction) => {
    if (categoryRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      categoryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Add to wishlist function
  const addToWishlist = async (bookId) => {
    try {
      setWishlistLoading((prev) => ({ ...prev, [bookId]: true }));

      const token = localStorage.getItem("authToken");
      if (!token) {
        setAlert({
          open: true,
          message: "Please log in to add books to your wishlist",
          severity: "warning",
        });
        return;
      }

      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/wishlist/create`,
        { book: bookId }, 
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === bookId ? { ...book, inWishlist: true } : book
        )
      );

      setAlert({
        open: true,
        message: "Book added to wishlist successfully!",
        severity: "success",
      });
    } catch (error) {
      if (
        error.response?.status === 401 ||
        (error.message && error.message.includes("jwt"))
      ) {
        setAlert({
          open: true,
          message: "Authentication failed. Please log in again.",
          severity: "error",
        });
      } else {
        console.error("Error adding book to wishlist:", error);
        setAlert({
          open: true,
          message: `Failed to add to wishlist: ${
            error.response?.data?.message || error.message
          }`,
          severity: "error",
        });
      }
    } finally {
      setWishlistLoading((prev) => ({ ...prev, [bookId]: false }));
    }
  };

  const handleWishlistClick = (e, bookId) => {
    e.stopPropagation();
    addToWishlist(bookId);
  };

  const handleDismissAlert = () => {
    setAlert({ open: false, message: "", severity: "" });
  };

  const handleAllBooksClick = () => {
    setActiveCategory(null);
  };

  const handleDiscoverMoreClick = () => {
    navigate("/store");
  };

  return (
    <div className="discover-container">
      {alert.open && (
        <div className={`alert alert-${alert.severity}`}>
          {alert.message}
          <button className="alert-close" onClick={handleDismissAlert}>
            ×
          </button>
        </div>
      )}

      <div className="discover-wrap">
        <h2 className="main-heading">Discover Your Next Book</h2>

        <div className="category-filter-container">
          <button 
            className="category-scroll-button left"
            onClick={() => scrollCategories('left')}
          >
            &lt;
          </button>
          
          <div className="category-filter" ref={categoryRef}>
            <ul className="filter-nav">
              <li
                className={`filter-item ${activeCategory === null ? "active" : ""}`}
                onClick={handleAllBooksClick}
              >
                ALL BOOKS
              </li>
              {categories.map((category) => (
                <li
                  key={category._id}
                  className={`filter-item ${
                    activeCategory === category.name ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category.name)}
                >
                  {category.name.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>
          
          <button 
            className="category-scroll-button right"
            onClick={() => scrollCategories('right')}
          >
            &gt;
          </button>
        </div>

        {loading ? (
          <div className="loading">Loading books...</div>
        ) : displayedBooks.length === 0 ? (
          <div className="no-books-message">
            <p>No books available in this category</p>
            <Button 
              title="Browse All Books" 
              name="browse" 
              onClick={handleAllBooksClick} 
            />
          </div>
        ) : (
          <>
            <div className="book-list">
              {displayedBooks.map((book) => (
                <div
                  className="book-card"
                  key={book.id}
                  onClick={() => navigate(`/book-info/${book.id}`)}
                >
                  <div className="book-image-container">
                    <img src={book.image} alt={book.title} className="book-image" />
                    <button 
                      className="wishlist-button"
                      onClick={(e) => handleWishlistClick(e, book.id)}
                      disabled={wishlistLoading[book.id]}
                    >
                      {wishlistLoading[book.id] ? (
                        <span className="loading-icon">...</span>
                      ) : (
                        <span className="heart-icon">
                          {book.inWishlist ? "❤️" : "🤍"}
                        </span>
                      )}
                    </button>
                  </div>
                  <div className="book-details">
                    <h5 className="book-title">{book.title}</h5>
                    <p className="book-author">{book.author}</p>
                    <p className="book-price">{book.price}</p>
                    <p className="book-isbn">ISBN: {book.isbn}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="btn-wrap">
              <Button
                title="Discover More Books"
                name="more"
                onClick={handleDiscoverMoreClick}
                className="discover-more-btn"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShopList;