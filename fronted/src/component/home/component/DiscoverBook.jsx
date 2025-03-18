// // // import React, { useState } from "react";
// // // import "../style/DiscoverBook.css";
// // // import Discover1 from '../images/discover-book1.jpg';
// // // import Button from "../../buttons/Button";
// // // import { useNavigate } from "react-router-dom";

// // // const booksData = [
// // //   { id: 1, category: "New Releases", title: "A Banquet of Mouse", author: "Richard Mann", price: "$12.00 – $18.00", image: Discover1 },
// // //   { id: 2, category: "New Releases", title: "A Doctor in the House", author: "Candy Carson", price: "$6.50 – $16.99", image: Discover1 },
// // //   { id: 3, category: "New Releases", title: "Antony & Cleopatra", author: "Ken Clark", price: "$58.00", image: Discover1 },
// // //   { id: 4, category: "New Releases", title: "Brooklyn", author: "Jessica Ford", price: "$16.00", image: Discover1 },
// // //   { id: 5, category: "New Releases", title: "But Enough About Me", author: "Burt Reynolds", price: "$37.00", image: Discover1 },
// // //   { id: 6, category: "Best Sellers", title: "Hidden Figures", author: "Margot Lee Shetterly", price: "$25.00", image: Discover1 },
// // //   { id: 7, category: "Best Sellers", title: "The Martian", author: "Andy Weir", price: "$30.00", image: Discover1 },
// // //   { id: 8, category: "Award Winners", title: "The Night Circus", author: "Erin Morgenstern", price: "$22.50", image: Discover1 },
// // //   { id: 9, category: "Award Winners", title: "The Goldfinch", author: "Donna Tartt", price: "$29.00", image: Discover1 },
// // //   { id: 10, category: "Coming Soon", title: "The Silent Patient", author: "Alex Michaelides", price: "$19.99", image: Discover1 }
// // // ];

// // // const categories = ["New Releases", "Best Sellers", "Award Winners", "Coming Soon"];

// // // const DiscoverBook = () => {
// // //   const navigate = useNavigate();
// // //   const [activeCategory, setActiveCategory] = useState("New Releases");
// // //   const filteredBooks = booksData.filter(book => book.category === activeCategory);

// // //   return (
// // //     <div className="discover-container">
// // //       <div className="discover-wrap">
// // //         <h2 className="main-heading">Discover Your Next Book</h2>
// // //         <div className="category-filter">
// // //           <ul className="filter-nav">
// // //             {categories.map((category, index) => (
// // //               <li
// // //                 key={index}
// // //                 className={`filter-item ${activeCategory === category ? "active" : ""}`}
// // //                 onClick={() => setActiveCategory(category)}
// // //               >
// // //                 {category}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </div>
// // //         <div className="book-list">
// // //           {filteredBooks.map(book => (
// // //             <div className="book-card" key={book.id}>
// // //               <img src={book.image} alt={book.title} className="book-image" />
// // //               <h5 className="book-title">{book.title}</h5>
// // //               <p className="book-author">{book.author}</p>
// // //               <p className="book-price">{book.price}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //         <div className="btn-wrap">
// // //           <Button title="Discover Your Book" name="more" onClick={() => navigate("/store")}/>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default DiscoverBook;

// // // import React, { useState, useEffect } from "react";
// // // import "../style/DiscoverBook.css";

// // // import Button from "../../buttons/Button";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import blogImg1 from "../images/discover-book1.jpg";

// // // const DiscoverBook = () => {
// // //   const navigate = useNavigate();
// // //   const [activeCategory, setActiveCategory] = useState("New Releases");
// // //   // const filteredBooks = booksData.filter(book => book.category === activeCategory);
// // //   const [book, setBook] = useState([]);
// // //   const [bookData, setBookData] = useState();
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
// // //     // console.log(book, "skjcskhc");
// // //   }, []);

// // //   const handleSubmit =async () => {
// // //       // Handle form submission here
// // //       console.log(bookData);
// // //       try{
// // //         setLoading(true);

// // //           // Validate required fields
// // //           // if (!bookData.title || !bookData.author || !bookData.category) {
// // //           //   setAlert({
// // //           //     open: true,
// // //           //     message: "Title, author, and category are required",
// // //           //     severity: "error"
// // //           //   });
// // //           //   return;
// // //           // }
// // //   //--------------------

// // //   //-------------------------------
// // //         // Prepare book data
// // //         const bookPayload = {
// // //           // title: bookData.title,
// // //           // author: bookData.author,
// // //           // isbn: bookData.isbn,
// // //           // category: bookData.category,
// // //           // price: bookData.price,
// // //           // publishYear: bookData.publishYear,
// // //           // publisher: bookData.publisher,
// // //           // description: bookData.description,
// // //           // totalCopy: bookData.totalCopy

// // //           bookId: bookData._id
// // //         };

// // //           // Create new book
// // //           response1 = await axios.post(
// // //             `${process.env.REACT_APP_BASE_URL}/admin/book/create`,
// // //             bookPayload
// // //           );
// // //           setAlert({
// // //             open: true,
// // //             message: "Book added successfully",
// // //             severity: "success"
// // //           });
// // //         }

// // //         // Refresh the book list
// // //         fetchBook();

// // //       }catch(err){
// // //         console.error("Error saving book:", error);
// // //       }finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //   return (
// // //     <div className="discover-container">
// // //       <div className="discover-wrap">
// // //         <h2 className="main-heading">Discover Your Next Book</h2>
// // //         <div className="category-filter">
// // //           <ul className="filter-nav">
// // //             {/* {categories.map((category, index) => (
// // //               <li
// // //                 key={index}
// // //                 className={`filter-item ${activeCategory === category ? "active" : ""}`}
// // //                 onClick={() => setActiveCategory(category)}
// // //               >
// // //                 {category}
// // //               </li>
// // //             ))} */}
// // //           </ul>
// // //         </div>
// // //         <div className="book-list">
// // //   {book.slice(0, 5).map((book) => ( // Show only the first 5 books
// // //     <div
// // //       className="book-card"
// // //       key={book.id}
// // //       onClick={() => navigate(`/book-info/${book.id}`)}
// // //       style={{ cursor: "pointer" }}
// // //     >
// // //       <img src={book.image} alt={book.title} className="book-image" />
// // //       <h5 className="book-title">{book.title}</h5>
// // //       <p className="book-author">{book.author}</p>
// // //       <p className="book-price">{book.price}</p>
// // //       <p className="book-author">{book.publishedYear}</p>
// // //       <p
// // //         className="book-description"
// // //         data-full-description={book.description}
// // //       >
// // //         {book.description}
// // //       </p>
// // //       <p className="book-author">
// // //         <b>ISBN:</b> {book.isbn}
// // //       </p>
// // //     </div>
// // //   ))}
// // // </div>

// // //         <div className="btn-wrap">
// // //           <Button
// // //             title="Discover Your Book"
// // //             name="more"
// // //             onClick={() => navigate("/store")}
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default DiscoverBook;

// // import { useState, useEffect } from "react";
// // import "../style/DiscoverBook.css";

// // import Button from "../../buttons/Button";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import blogImg1 from "../images/discover-book1.jpg";

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

// //   return (
// //     <div className="discover-container">
// //       {alert.open && (
// //         <div className={`alert alert-${alert.severity}`}>{alert.message}</div>
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
// //             {displayBooks.slice(0, 5).map((book) => (
// //               <div
// //                 className="book-card"
// //                 key={book.id}
// //                 onClick={() => navigate(`/book-info/${book.id}`)}
// //                 style={{ cursor: "pointer" }}
// //               >
// //                 <img src={book.image} alt={book.title} className="book-image" />
// //                 <h5 className="book-title">{book.title}</h5>
// //                 <p className="book-author">{book.author}</p>
// //                 <p className="book-price">{book.price}</p>
// //                 <p className="book-year">{book.publishedYear}</p>
// //                 <p
// //                   className="book-description"
// //                   data-full-description={book.description}
// //                 >
// //                   {book.description.length > 100
// //                     ? `${book.description.substring(0, 100)}...`
// //                     : book.description}
// //                 </p>
// //                 <p className="book-isbn">
// //                   <b>ISBN:</b> {book.isbn}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         <div className="btn-wrap">
// //           <Button
// //             title="Discover More Books"
// //             name="more"
// //             onClick={() => navigate("/store")}
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DiscoverBook;

// import { useState, useEffect } from "react";
// import "../style/DiscoverBook.css";

// import Button from "../../buttons/Button";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import blogImg1 from "../images/discover-book1.jpg";

// const DiscoverBook = () => {
//   const navigate = useNavigate();
//   const [activeCategory, setActiveCategory] = useState("New Releases");
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [alert, setAlert] = useState({ open: false, message: "", severity: "" });
//   const [favoriteLoading, setFavoriteLoading] = useState({});

//   // Define categories for filter
//   const categories = ["New Releases", "Fiction", "Non-Fiction", "Science", "History"];

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
//         price: book.price ? `$${book.price}` : "Price not available",
//         publishedYear: book.publishedYear || "Year not available",
//         image: book.image?.url || blogImg1, // Use default image if missing
//         isFavorite: book.isFavorite || false
//       }));

//       setBooks(formattedBooks);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//       setAlert({
//         open: true,
//         message: "Failed to load books. Please try again later.",
//         severity: "error"
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   // Filter books based on active category
//   const filteredBooks = activeCategory
//     ? books.filter(book => book.category === activeCategory)
//     : books;

//   // Display all books if filtered list is empty
//   const displayBooks = filteredBooks.length > 0 ? filteredBooks : books;

//   const handleAddBook = async (bookData) => {
//     try {
//       setLoading(true);

//       // Validate required fields
//       if (!bookData.title || !bookData.author || !bookData.category) {
//         setAlert({
//           open: true,
//           message: "Title, author, and category are required",
//           severity: "error"
//         });
//         return;
//       }

//       // Prepare book data
//       const bookPayload = {
//         bookId: bookData._id
//       };

//       // Create new book
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/admin/book/create`,
//         bookPayload
//       );

//       setAlert({
//         open: true,
//         message: "Book added successfully",
//         severity: "success"
//       });

//       // Refresh the book list
//       fetchBooks();

//     } catch (error) {
//       console.error("Error saving book:", error);
//       setAlert({
//         open: true,
//         message: `Failed to add book: ${error.response?.data?.message || error.message}`,
//         severity: "error"
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Add to favorites function
//   const addToFavorites = async (bookId) => {
//     try {
//       // Set loading state for this specific book
//       setFavoriteLoading(prev => ({ ...prev, [bookId]: true }));

//       // Make API call to add book to favorites
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/user/wishlist/create`,
//         { bookId },
//         {
//           headers: {
//             'Authorization': `${localStorage.getItem('token')}`,
//             'Content-Type': 'application/json'
//           }
//         }
//       );

//       // Update the book in state to show it's a favorite
//       setBooks(prevBooks =>
//         prevBooks.map(book =>
//           book.id === bookId ? { ...book, isFavorite: true } : book
//         )
//       );

//       setAlert({
//         open: true,
//         message: "Book added to favorites successfully!",
//         severity: "success"
//       });

//     } catch (error) {
//       console.error("Error adding book to favorites:", error);
//       setAlert({
//         open: true,
//         message: `Failed to add to favorites: ${error.response?.data?.message || error.message}`,
//         severity: "error"
//       });
//     } finally {
//       // Clear loading state for this book
//       setFavoriteLoading(prev => ({ ...prev, [bookId]: false }));
//     }
//   };

//   // Handle favorite button click
//   const handleFavoriteClick = (e, bookId) => {
//     e.stopPropagation(); // Prevent triggering the parent onClick that navigates
//     addToFavorites(bookId);
//   };

//   return (
//     <div className="discover-container">
//       {alert.open && (
//         <div className={`alert alert-${alert.severity}`}>
//           {alert.message}
//         </div>
//       )}

//       <div className="discover-wrap">
//         <h2 className="main-heading">Discover Your Next Book</h2>

//         <div className="category-filter">
//           <ul className="filter-nav">
//             {categories.map((category, index) => (
//               <li
//                 key={index}
//                 className={`filter-item ${activeCategory === category ? "active" : ""}`}
//                 onClick={() => setActiveCategory(category)}
//               >
//                 {category}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {loading ? (
//           <div className="loading">Loading books...</div>
//         ) : (
//           <div className="book-list">
//             {displayBooks.slice(0, 5).map((book) => (
//               <div
//                 className="book-card"
//                 key={book.id}
//                 onClick={() => navigate(`/book-info/${book.id}`)}
//                 style={{ cursor: "pointer" }}
//               >
//                 <img src={book.image} alt={book.title} className="book-image" />
//                 <div className="book-favorite">
//                   <button
//                     className={`favorite-btn ${book.isFavorite ? 'favorite-active' : ''}`}
//                     onClick={(e) => handleFavoriteClick(e, book.id)}
//                     disabled={favoriteLoading[book.id]}
//                   >
//                     {favoriteLoading[book.id] ? (
//                       <span className="loading-icon">...</span>
//                     ) : (
//                       <span className="heart-icon">{book.isFavorite ? '❤️' : '🤍'}</span>
//                     )}
//                   </button>
//                 </div>
//                 <h5 className="book-title">{book.title}</h5>
//                 <p className="book-author">{book.author}</p>
//                 <p className="book-price">{book.price}</p>
//                 <p className="book-year">{book.publishedYear}</p>
//                 <p
//                   className="book-description"
//                   data-full-description={book.description}
//                 >
//                   {book.description.length > 100
//                     ? `${book.description.substring(0, 100)}...`
//                     : book.description}
//                 </p>
//                 <p className="book-isbn">
//                   <b>ISBN:</b> {book.isbn}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}

//         <div className="btn-wrap">
//           <Button
//             title="Discover More Books"
//             name="more"
//             onClick={() => navigate("/store")}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DiscoverBook;

// import { useState, useEffect } from "react";
// import "../style/DiscoverBook.css";

// import Button from "../../buttons/Button";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import blogImg1 from "../images/discover-book1.jpg";

// const DiscoverBook = () => {
//   const navigate = useNavigate();
//   const [activeCategory, setActiveCategory] = useState("New Releases");
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [alert, setAlert] = useState({ open: false, message: "", severity: "" });
//   const [wishlistLoading, setWishlistLoading] = useState({});

//   // Define categories for filter
//   const categories = ["New Releases", "Fiction", "Non-Fiction", "Science", "History"];

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
//         price: book.price ? `$${book.price}` : "Price not available",
//         publishedYear: book.publishedYear || "Year not available",
//         image: book.image?.url || blogImg1, // Use default image if missing
//         inWishlist: book.inWishlist || false
//       }));

//       setBooks(formattedBooks);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//       setAlert({
//         open: true,
//         message: "Failed to load books. Please try again later.",
//         severity: "error"
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   // Filter books based on active category
//   const filteredBooks = activeCategory
//     ? books.filter(book => book.category === activeCategory)
//     : books;

//   // Display all books if filtered list is empty
//   const displayBooks = filteredBooks.length > 0 ? filteredBooks : books;

//   const handleAddBook = async (bookData) => {
//     try {
//       setLoading(true);

//       // Validate required fields
//       if (!bookData.title || !bookData.author || !bookData.category) {
//         setAlert({
//           open: true,
//           message: "Title, author, and category are required",
//           severity: "error"
//         });
//         return;
//       }

//       // Prepare book data
//       const bookPayload = {
//         bookId: bookData._id
//       };

//       // Create new book
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/admin/book/create`,
//         bookPayload
//       );

//       setAlert({
//         open: true,
//         message: "Book added successfully",
//         severity: "success"
//       });

//       // Refresh the book list
//       fetchBooks();

//     } catch (error) {
//       console.error("Error saving book:", error);
//       setAlert({
//         open: true,
//         message: `Failed to add book: ${error.response?.data?.message || error.message}`,
//         severity: "error"
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Add to wishlist function
//   const addToWishlist = async (bookId) => {
//     try {
//       // Set loading state for this specific book
//       setWishlistLoading(prev => ({ ...prev, [bookId]: true }));

//       // Check if token exists first
//       const token = localStorage.getItem('authToken');
//       if (!token) {
//         setAlert({
//           open: true,
//           message: "Please log in to add books to your wishlist",
//           severity: "warning"
//         });
//         return;
//       }

//       // Make API call to add book to wishlist with proper token format
//     // Make API call to add book to wishlist with proper token format
// const response = await axios.post(
//   `${process.env.REACT_APP_BASE_URL}/user/wishlist/create`,
//   { book

//    },
//   {
//     headers: {
//       'Authorization': `${token}`, // Add "Bearer " prefix here
//       'Content-Type': 'application/json'
//     }
//   }
// );

//       // Update the book in state to show it's in wishlist
//       setBooks(prevBooks =>
//         prevBooks.map(book =>
//           book.id === bookId ? { ...book, inWishlist: true } : book
//         )
//       );

//       setAlert({
//         open: true,
//         message: "Book added to wishlist successfully!",
//         severity: "success"
//       });

//     } catch (error) {
//       if (error.response?.status === 401 ||
//           (error.message && error.message.includes('jwt'))) {
//         // Authentication error
//         setAlert({
//           open: true,
//           message: "Authentication failed. Please log in again.",
//           severity: "error"
//         });
//         // Optionally redirect to login
//         // navigate('/login');
//       } else {
//         // Other errors
//         console.error("Error adding book to wishlist:", error);
//         setAlert({
//           open: true,
//           message: `Failed to add to wishlist: ${error.response?.data?.message || error.message}`,
//           severity: "error"
//         });
//       }
//     } finally {
//       // Clear loading state for this book
//       setWishlistLoading(prev => ({ ...prev, [bookId]: false }));
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

//   return (
//     <div className="discover-container">
//       {alert.open && (
//         <div className={`alert alert-${alert.severity}`}>
//           {alert.message}
//           <button className="alert-close" onClick={handleDismissAlert}>×</button>
//         </div>
//       )}

//       <div className="discover-wrap">
//         <h2 className="main-heading">Discover Your Next Book</h2>

//         <div className="category-filter">
//           <ul className="filter-nav">
//             {categories.map((category, index) => (
//               <li
//                 key={index}
//                 className={`filter-item ${activeCategory === category ? "active" : ""}`}
//                 onClick={() => setActiveCategory(category)}
//               >
//                 {category}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {loading ? (
//           <div className="loading">Loading books...</div>
//         ) : (
//           <div className="book-list">
//             {displayBooks.slice(0, 5).map((book) => (
//               <div
//                 className="book-card"
//                 key={book.id}
//                 onClick={() => navigate(`/book-info/${book.id}`)}
//                 style={{ cursor: "pointer" }}
//               >
//                 <img src={book.image} alt={book.title} className="book-image" />
//                 <div className="book-wishlist">
//                   <button
//                     className={`wishlist-btn ${book.inWishlist ? 'wishlist-active' : ''}`}
//                     onClick={(e) => handleWishlistClick(e, book.id)}
//                     disabled={wishlistLoading[book.id]}
//                     title="Add to Wishlist"
//                   >
//                     {wishlistLoading[book.id] ? (
//                       <span className="loading-icon">...</span>
//                     ) : (
//                       <span className="heart-icon">{book.inWishlist ? '❤️' : '🤍'}</span>
//                     )}
//                   </button>
//                 </div>
//                 <h5 className="book-title">{book.title}</h5>
//                 <p className="book-author">{book.author}</p>
//                 <p className="book-price">{book.price}</p>
//                 <p className="book-year">{book.publishedYear}</p>
//                 <p
//                   className="book-description"
//                   data-full-description={book.description}
//                 >
//                   {book.description.length > 100
//                     ? `${book.description.substring(0, 100)}...`
//                     : book.description}
//                 </p>
//                 <p className="book-isbn">
//                   <b>ISBN:</b> {book.isbn}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}

//         <div className="btn-wrap">
//           <Button
//             title="Discover More Books"
//             name="more"
//             onClick={() => navigate("/store")}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DiscoverBook;

import { useState, useEffect } from "react";
import "../style/DiscoverBook.css";

import Button from "../../buttons/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import blogImg1 from "../images/discover-book1.jpg";

const DiscoverBook = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("New Releases");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const [wishlistLoading, setWishlistLoading] = useState({});

  // Define categories for filter
  const categories = [
    "New Releases",
    "Fiction",
    "Non-Fiction",
    "Science",
    "History",
  ];

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/book/getAll`
      );

      const bookArray = Array.isArray(response.data?.data)
        ? response.data.data
        : [];

      const formattedBooks = bookArray.map((book) => ({
        id: book._id,
        title: book.title || "Untitled",
        author: book.author || "Unknown Author",
        description: book.description || "No description available.",
        isbn: book.isbn || "No ISBN Available",
        category: book.category?.name || book.category || "Uncategorized",
        price: book.price ? `$${book.price}` : "Price not available",
        publishedYear: book.publishedYear || "Year not available",
        image: book.image?.url || blogImg1, // Use default image if missing
        inWishlist: book.inWishlist || false,
      }));

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
  }, []);

  // Filter books based on active category
  const filteredBooks = activeCategory
    ? books.filter((book) => book.category === activeCategory)
    : books;

  // Display all books if filtered list is empty
  const displayBooks = filteredBooks.length > 0 ? filteredBooks : books;

  const handleAddBook = async (bookData) => {
    try {
      setLoading(true);

      // Validate required fields
      if (!bookData.title || !bookData.author || !bookData.category) {
        setAlert({
          open: true,
          message: "Title, author, and category are required",
          severity: "error",
        });
        return;
      }

      // Prepare book data
      const bookPayload = {
        bookId: bookData._id,
      };

      // Create new book
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/admin/book/create`,
        bookPayload
      );

      setAlert({
        open: true,
        message: "Book added successfully",
        severity: "success",
      });

      // Refresh the book list
      fetchBooks();
    } catch (error) {
      console.error("Error saving book:", error);
      setAlert({
        open: true,
        message: `Failed to add book: ${
          error.response?.data?.message || error.message
        }`,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Add to wishlist function
  const addToWishlist = async (bookId) => {
    try {
      // Set loading state for this specific book
      setWishlistLoading((prev) => ({ ...prev, [bookId]: true }));

      // Check if token exists first
      const token = localStorage.getItem("authToken");
      if (!token) {
        setAlert({
          open: true,
          message: "Please log in to add books to your wishlist",
          severity: "warning",
        });
        return;
      }

      // Make API call to add book to wishlist with proper token format
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/wishlist/create`,
        { book: bookId }, // Changed from bookId to book to match backend expectation
        {
          headers: {
            Authorization: token, // No Bearer prefix, just the raw token
            "Content-Type": "application/json",
          },
        }
      );

      // Update the book in state to show it's in wishlist
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
        // Authentication error
        setAlert({
          open: true,
          message: "Authentication failed. Please log in again.",
          severity: "error",
        });
        // Optionally redirect to login
        // navigate('/login');
      } else {
        // Other errors
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
      // Clear loading state for this book
      setWishlistLoading((prev) => ({ ...prev, [bookId]: false }));
    }
  };

  // Handle wishlist button click
  const handleWishlistClick = (e, bookId) => {
    e.stopPropagation(); // Prevent triggering the parent onClick that navigates
    addToWishlist(bookId);
  };

  // Function to dismiss alert
  const handleDismissAlert = () => {
    setAlert({ open: false, message: "", severity: "" });
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

        <div className="category-filter">
          <ul className="filter-nav">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`filter-item ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {loading ? (
          <div className="loading">Loading books...</div>
        ) : (
          <div className="book-list">
            {displayBooks.slice(0, 5).map((book) => (
              <div
                className="book-card"
                key={book.id}
                onClick={() => navigate(`/book-info/${book.id}`)}
                style={{ cursor: "pointer" }}
              >
                <img src={book.image} alt={book.title} className="book-image" />
                <div className="book-wishlist">
                  {/* <button
                    className={`wishlist-btn ${
                      book.inWishlist ? "wishlist-active" : ""
                    }`}
                    onClick={(e) => handleWishlistClick(e, book.id)}
                    disabled={wishlistLoading[book.id]}
                    title="Add to Wishlist"
                  > */}
                    {wishlistLoading[book.id] ? (
                      <span className="loading-icon">...</span>
                    ) : (
                      <span className="heart-icon">
                        {book.inWishlist ? "❤️" : "🤍"}
                      </span>
                    )}
                  {/* </button> */}
                </div>
                <h5 className="book-title">{book.title}</h5>
                <p className="book-author">{book.author}</p>
                <p className="book-price">{book.price}</p>
                {/* <p className="book-year">{book.publishedYear}</p> */}
                {/* <p
                  className="book-description"
                  data-full-description={book.description}
                >
                  {book.description.length > 100
                    ? `${book.description.substring(0, 100)}...`
                    : book.description}
                </p> */}
                <p className="book-isbn">
                  <b>ISBN:</b> {book.isbn}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="btn-wrap">
          <Button
            title="Discover More Books"
            name="more"
            onClick={() => navigate("/store")}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscoverBook;
