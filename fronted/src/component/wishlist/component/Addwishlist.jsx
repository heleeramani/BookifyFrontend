// // // // // import React from "react";
// // // // // import "../style/Addwishlist.css";
// // // // // import AddWishlist1 from "../images/addwishlistbook.jpg";

// // // // // const products = [
// // // // //   {
// // // // //     id: 1,
// // // // //     image: AddWishlist1,
// // // // //     title: 'A Doctor in the House',
// // // // //     author: 'Candy Carson',
// // // // //     price: '$8.50 - $16.99',
// // // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     image: AddWishlist1,
// // // // //     title: 'Wildflower',
// // // // //     author: 'Drew Angerer',
// // // // //     price: '$10.99 - $20.00',
// // // // //   },
// // // // //   {
// // // // //     id: 3,
// // // // //     image: AddWishlist1,
// // // // //     title: 'New Galaxy',
// // // // //     author: 'Allan Green',
// // // // //     price: '$7.50 - $16.99',
// // // // //   },
// // // // //   {
// // // // //     id: 4,
// // // // //     image: AddWishlist1,
// // // // //     title: 'New Galaxy',
// // // // //     author: 'Allan Green',
// // // // //     price: '$7.50 - $16.99',
// // // // //   },
// // // // // ];

// // // // // const AddWishlist = () => {
// // // // //   return (
// // // // //     <div className="shop">
// // // // //       {/* Header Section */}
// // // // //       {/* <header className="header">
// // // // //         <h1>Shop</h1>
// // // // //         <nav className="breadcrumb">
// // // // //           <a href="#">Home</a> &gt; <a href="#">Shop</a>
// // // // //         </nav>
// // // // //       </header> */}

// // // // //       {/* Hero Section */}
// // // // //       {/* <section className="hero">
// // // // //         <div className="hero-content">
// // // // //           <h2>Inspire Daily Reading</h2>
// // // // //           <p>Visit Our Blog and Page. Find Daily Inspiration Quotes from the Best Authors!</p>
// // // // //           <a href="#" className="button">Visit Our Blog</a>
// // // // //         </div>
// // // // //       </section> */}

// // // // //       {/* Main Content */}
// // // // //       <div className="container1">
// // // // //         {/* Sidebar */}
// // // // //         <aside className="sidebar">
// // // // //           <h3>Category</h3>
// // // // //           <ul>
// // // // //             <li><a href="#">All Categories</a></li>
// // // // //             <li><a href="#">Uncategorized</a></li>
// // // // //             <li><a href="#">Drama</a></li>
// // // // //             <li><a href="#">Mystery</a></li>
// // // // //             <li><a href="#">Novels</a></li>
// // // // //             <li><a href="#">Recipe Books</a></li>
// // // // //           </ul>

// // // // //           <h3>Author</h3>
// // // // //           <ul>
// // // // //             <li><input type="checkbox" id="author1" /><label htmlFor="author1"> Burt Geller</label></li>
// // // // //             <li><input type="checkbox" id="author2" /><label htmlFor="author2"> Candy Carson</label></li>
// // // // //             <li><input type="checkbox" id="author3" /><label htmlFor="author3"> Drew Berrymore</label></li>
// // // // //             <li><input type="checkbox" id="author4" /><label htmlFor="author4"> Karen Perry</label></li>
// // // // //           </ul>

// // // // //           <h3>Format</h3>
// // // // //           <ul>
// // // // //             <li><input type="checkbox" id="format1" /><label htmlFor="format1"> Online Book</label></li>
// // // // //             <li><input type="checkbox" id="format2" /><label htmlFor="format2"> Paper Book</label></li>
// // // // //           </ul>

// // // // //           <h3>Price</h3>
// // // // //           <input type="range" min="0" max="100" />
// // // // //         </aside>

// // // // //         {/* Products Section */}
// // // // //         <main className="products">
// // // // //           <div className="product-toolbar">
// // // // //             <p>Showing 1–12 of {products.length} results</p>
// // // // //             <select>
// // // // //               <option>Sort by Default</option>
// // // // //               <option>Sort by Popularity</option>
// // // // //               <option>Sort by Price</option>
// // // // //             </select>
// // // // //           </div>

// // // // //           <div className="product-grid">
// // // // //             {products.map(product => (
// // // // //               <div key={product.id} className="product">
// // // // //                 <img src={product.imgSrc} alt={product.title} />
// // // // //                 <h4>{product.title}</h4>
// // // // //                 <p>{product.author}</p>
// // // // //                 <p className="price">{product.price}</p>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </main>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AddWishlist;

// // // // // import { useState, useEffect } from "react";
// // // // // import "../style/DiscoverBook.css";

// // // // // import Button from "../../buttons/Button";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import axios from "axios";
// // // // // import blogImg1 from "../images/discover-book1.jpg";

// // // // // const Addwishlist = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const [activeCategory, setActiveCategory] = useState("New Releases");
// // // // //   const [books, setBooks] = useState([]);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [alert, setAlert] = useState({ open: false, message: "", severity: "" });
// // // // //   const [favoriteLoading, setFavoriteLoading] = useState({});

// // // // //   // Define categories for filter
// // // // //   const categories = ["New Releases", "Fiction", "Non-Fiction", "Science", "History"];

// // // // //   const fetchBooks = async () => {
// // // // //     try {
// // // // //       setLoading(true);
// // // // //       const response = await axios.get(
// // // // //         `${process.env.REACT_APP_BASE_URL}/user/book/getAll`
// // // // //       );

// // // // //       const bookArray = Array.isArray(response.data?.data)
// // // // //         ? response.data.data
// // // // //         : [];

// // // // //       const formattedBooks = bookArray.map((book) => ({
// // // // //         id: book._id,
// // // // //         title: book.title || "Untitled",
// // // // //         author: book.author || "Unknown Author",
// // // // //         description: book.description || "No description available.",
// // // // //         isbn: book.isbn || "No ISBN Available",
// // // // //         category: book.category?.name || book.category || "Uncategorized",
// // // // //         price: book.price ? `$${book.price}` : "Price not available",
// // // // //         publishedYear: book.publishedYear || "Year not available",
// // // // //         image: book.image?.url || blogImg1, // Use default image if missing
// // // // //         isFavorite: book.isFavorite || false
// // // // //       }));

// // // // //       setBooks(formattedBooks);
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching books:", error);
// // // // //       setAlert({
// // // // //         open: true,
// // // // //         message: "Failed to load books. Please try again later.",
// // // // //         severity: "error"
// // // // //       });
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchBooks();
// // // // //   }, []);

// // // // //   // Filter books based on active category
// // // // //   const filteredBooks = activeCategory
// // // // //     ? books.filter(book => book.category === activeCategory)
// // // // //     : books;

// // // // //   // Display all books if filtered list is empty
// // // // //   const displayBooks = filteredBooks.length > 0 ? filteredBooks : books;

// // // // //   const handleAddBook = async (bookData) => {
// // // // //     try {
// // // // //       setLoading(true);

// // // // //       // Validate required fields
// // // // //       if (!bookData.title || !bookData.author || !bookData.category) {
// // // // //         setAlert({
// // // // //           open: true,
// // // // //           message: "Title, author, and category are required",
// // // // //           severity: "error"
// // // // //         });
// // // // //         return;
// // // // //       }

// // // // //       // Prepare book data
// // // // //       const bookPayload = {
// // // // //         bookId: bookData._id
// // // // //       };

// // // // //       // Create new book
// // // // //       const response = await axios.post(
// // // // //         `${process.env.REACT_APP_BASE_URL}/admin/book/create`,
// // // // //         bookPayload
// // // // //       );

// // // // //       setAlert({
// // // // //         open: true,
// // // // //         message: "Book added successfully",
// // // // //         severity: "success"
// // // // //       });

// // // // //       // Refresh the book list
// // // // //       fetchBooks();

// // // // //     } catch (error) {
// // // // //       console.error("Error saving book:", error);
// // // // //       setAlert({
// // // // //         open: true,
// // // // //         message: `Failed to add book: ${error.response?.data?.message || error.message}`,
// // // // //         severity: "error"
// // // // //       });
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   // Add to favorites function
// // // // //   const addToFavorites = async (bookId) => {
// // // // //     try {
// // // // //       // Set loading state for this specific book
// // // // //       setFavoriteLoading(prev => ({ ...prev, [bookId]: true }));

// // // // //       // Make API call to add book to favorites
// // // // //       const response = await axios.post(
// // // // //         `${process.env.REACT_APP_BASE_URL}/user/wishlist/create`,
// // // // //         { bookId },
// // // // //         {
// // // // //           headers: {
// // // // //             'Authorization': `${localStorage.getItem('token')}`,
// // // // //             'Content-Type': 'application/json'
// // // // //           }
// // // // //         }
// // // // //       );

// // // // //       // Update the book in state to show it's a favorite
// // // // //       setBooks(prevBooks =>
// // // // //         prevBooks.map(book =>
// // // // //           book.id === bookId ? { ...book, isFavorite: true } : book
// // // // //         )
// // // // //       );

// // // // //       setAlert({
// // // // //         open: true,
// // // // //         message: "Book added to favorites successfully!",
// // // // //         severity: "success"
// // // // //       });

// // // // //     } catch (error) {
// // // // //       console.error("Error adding book to favorites:", error);
// // // // //       setAlert({
// // // // //         open: true,
// // // // //         message: `Failed to add to favorites: ${error.response?.data?.message || error.message}`,
// // // // //         severity: "error"
// // // // //       });
// // // // //     } finally {
// // // // //       // Clear loading state for this book
// // // // //       setFavoriteLoading(prev => ({ ...prev, [bookId]: false }));
// // // // //     }
// // // // //   };

// // // // //   // Handle favorite button click
// // // // //   const handleFavoriteClick = (e, bookId) => {
// // // // //     e.stopPropagation(); // Prevent triggering the parent onClick that navigates
// // // // //     addToFavorites(bookId);
// // // // //   };

// // // // //   return (
// // // // //     <div className="discover-container">
// // // // //       {alert.open && (
// // // // //         <div className={`alert alert-${alert.severity}`}>
// // // // //           {alert.message}
// // // // //         </div>
// // // // //       )}

// // // // //       <div className="discover-wrap">
// // // // //         <h2 className="main-heading">Discover Your Next Book</h2>

// // // // //         <div className="category-filter">
// // // // //           <ul className="filter-nav">
// // // // //             {categories.map((category, index) => (
// // // // //               <li
// // // // //                 key={index}
// // // // //                 className={`filter-item ${activeCategory === category ? "active" : ""}`}
// // // // //                 onClick={() => setActiveCategory(category)}
// // // // //               >
// // // // //                 {category}
// // // // //               </li>
// // // // //             ))}
// // // // //           </ul>
// // // // //         </div>

// // // // //         {loading ? (
// // // // //           <div className="loading">Loading books...</div>
// // // // //         ) : (
// // // // //           <div className="book-list">
// // // // //             {displayBooks.slice(0, 5).map((book) => (
// // // // //               <div
// // // // //                 className="book-card"
// // // // //                 key={book.id}
// // // // //                 onClick={() => navigate(`/book-info/${book.id}`)}
// // // // //                 style={{ cursor: "pointer" }}
// // // // //               >
// // // // //                 <img src={book.image} alt={book.title} className="book-image" />
// // // // //                 <div className="book-favorite">
// // // // //                   <button
// // // // //                     className={`favorite-btn ${book.isFavorite ? 'favorite-active' : ''}`}
// // // // //                     onClick={(e) => handleFavoriteClick(e, book.id)}
// // // // //                     disabled={favoriteLoading[book.id]}
// // // // //                   >
// // // // //                     {favoriteLoading[book.id] ? (
// // // // //                       <span className="loading-icon">...</span>
// // // // //                     ) : (
// // // // //                       <span className="heart-icon">{book.isFavorite ? '❤️' : '🤍'}</span>
// // // // //                     )}
// // // // //                   </button>
// // // // //                 </div>
// // // // //                 <h5 className="book-title">{book.title}</h5>
// // // // //                 <p className="book-author">{book.author}</p>
// // // // //                 <p className="book-price">{book.price}</p>
// // // // //                 <p className="book-year">{book.publishedYear}</p>
// // // // //                 <p
// // // // //                   className="book-description"
// // // // //                   data-full-description={book.description}
// // // // //                 >
// // // // //                   {book.description.length > 100
// // // // //                     ? `${book.description.substring(0, 100)}...`
// // // // //                     : book.description}
// // // // //                 </p>
// // // // //                 <p className="book-isbn">
// // // // //                   <b>ISBN:</b> {book.isbn}
// // // // //                 </p>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         )}

// // // // //         <div className="btn-wrap">
// // // // //           <Button
// // // // //             title="Discover More Books"
// // // // //             name="more"
// // // // //             onClick={() => navigate("/store")}
// // // // //           />
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Addwishlist;


// // // // // import { useState, useEffect } from "react";
// // // // // import "../../home/style/DiscoverBook.css";

// // // // // import Button from "../../buttons/Button";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import axios from "axios";
// // // // // // import blogImg1 from "../images/discover-book1.jpg";
// // // // // import blogImg1 from '../../home/images/discover-book1.jpg'
// // // // // const Addwishlist = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const [activeCategory, setActiveCategory] = useState("New Releases");
// // // // //   const [books, setBooks] = useState([]);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [alert, setAlert] = useState({ open: false, message: "", severity: "" });

// // // // //   // Define categories for filter
// // // // //   const categories = ["New Releases", "Fiction", "Non-Fiction", "Science", "History"];

// // // // //   const fetchBooks = async () => {
// // // // //     try {
// // // // //       setLoading(true);
// // // // //       const response = await axios.get(
// // // // //         `${process.env.REACT_APP_BASE_URL}/user/wishlist/getByUser`
// // // // //       );

// // // // //       const bookArray = Array.isArray(response.data?.data)
// // // // //         ? response.data.data
// // // // //         : [];

// // // // //       const formattedBooks = bookArray.map((book) => ({
// // // // //         id: book._id,
// // // // //         title: book.title || "Untitled",
// // // // //         author: book.author || "Unknown Author",
// // // // //         description: book.description || "No description available.",
// // // // //         isbn: book.isbn || "No ISBN Available",
// // // // //         category: book.category?.name || book.category || "Uncategorized",
// // // // //         price: book.price ? `$${book.price}` : "Price not available",
// // // // //         publishedYear: book.publishedYear || "Year not available",
// // // // //         image: book.image?.url || blogImg1, // Use default image if missing
// // // // //       }));

// // // // //       setBooks(formattedBooks);
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching books:", error);
// // // // //       setAlert({
// // // // //         open: true,
// // // // //         message: "Failed to load books. Please try again later.",
// // // // //         severity: "error"
// // // // //       });
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchBooks();
// // // // //   }, []);

// // // // //   // Filter books based on active category
// // // // //   const filteredBooks = activeCategory
// // // // //     ? books.filter(book => book.category === activeCategory)
// // // // //     : books;

// // // // //   // Display all books if filtered list is empty
// // // // //   const displayBooks = filteredBooks.length > 0 ? filteredBooks : books;

// // // // //   return (
// // // // //     <div className="discover-container">
// // // // //       {alert.open && (
// // // // //         <div className={`alert alert-${alert.severity}`}>
// // // // //           {alert.message}
// // // // //         </div>
// // // // //       )}

// // // // //       <div className="discover-wrap">
// // // // //         <h2 className="main-heading">Discover Your Next Book</h2>

// // // // //         <div className="category-filter">
// // // // //           <ul className="filter-nav">
// // // // //             {categories.map((category, index) => (
// // // // //               <li
// // // // //                 key={index}
// // // // //                 className={`filter-item ${activeCategory === category ? "active" : ""}`}
// // // // //                 onClick={() => setActiveCategory(category)}
// // // // //               >
// // // // //                 {category}
// // // // //               </li>
// // // // //             ))}
// // // // //           </ul>
// // // // //         </div>

// // // // //         {loading ? (
// // // // //           <div className="loading">Loading books...</div>
// // // // //         ) : (
// // // // //           <div className="book-list">
// // // // //             {displayBooks.slice(0, 5).map((book) => (
// // // // //               <div
// // // // //                 className="book-card"
// // // // //                 key={book.id}
// // // // //                 onClick={() => navigate(`/book-info/${book.id}`)}
// // // // //                 style={{ cursor: "pointer" }}
// // // // //               >
// // // // //                 <img src={book.image} alt={book.title} className="book-image" />
// // // // //                 <h5 className="book-title">{book.title}</h5>
// // // // //                 <p className="book-author">{book.author}</p>
// // // // //                 <p className="book-price">{book.price}</p>
// // // // //                 <p className="book-year">{book.publishedYear}</p>
// // // // //                 <p
// // // // //                   className="book-description"
// // // // //                   data-full-description={book.description}
// // // // //                 >
// // // // //                   {book.description.length > 100
// // // // //                     ? `${book.description.substring(0, 100)}...`
// // // // //                     : book.description}
// // // // //                 </p>
// // // // //                 <p className="book-isbn">
// // // // //                   <b>ISBN:</b> {book.isbn}
// // // // //                 </p>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         )}

// // // // //         <div className="btn-wrap">
// // // // //           <Button
// // // // //             title="Discover More Books"
// // // // //             name="more"
// // // // //             onClick={() => navigate("/store")}
// // // // //           />
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Addwishlist;

// // // // // import { useState, useEffect } from "react";
// // // // // import "../../home/style/DiscoverBook.css";

// // // // // import Button from "../../buttons/Button";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import axios from "axios";
// // // // // import blogImg1 from '../../home/images/discover-book1.jpg';

// // // // // const Addwishlist = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const [activeCategory, setActiveCategory] = useState("New Releases");
// // // // //   const [books, setBooks] = useState([]);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [alert, setAlert] = useState({ open: false, message: "", severity: "" });

// // // // //   // Define categories for filter
// // // // //   const categories = ["New Releases", "Fiction", "Non-Fiction", "Science", "History"];

// // // // //   const fetchBooks = async () => {
// // // // //     try {
// // // // //       setLoading(true);
      
// // // // //       // Get authToken from localStorage
// // // // //       const authToken = localStorage.getItem("authToken");
      
// // // // //       if (!authToken) {
// // // // //         setAlert({
// // // // //           open: true,
// // // // //           message: "Please log in to view your wishlist",
// // // // //           severity: "warning"
// // // // //         });
// // // // //         setLoading(false);
// // // // //         return;
// // // // //       }
      
// // // // //       const response = await axios.get(
// // // // //         `${process.env.REACT_APP_BASE_URL}/user/wishlist/getByUser`,
// // // // //         {
// // // // //           headers: {
// // // // //             Authorization: authToken,
// // // // //             "Content-Type": "application/json"
// // // // //           }
// // // // //         }
// // // // //       );

// // // // //       const bookArray = Array.isArray(response.data?.data)
// // // // //         ? response.data.data
// // // // //         : [];
// // // // //       console.log(bookArray, "bookArray");
      
// // // // //       const formattedBooks = bookArray.map((book) => ({
// // // // //         id: book._id,
// // // // //         title: book.title || "Untitled",
// // // // //         author: book.author || "Unknown Author",
// // // // //         description: book.description || "No description available.",
// // // // //         isbn: book.isbn || "No ISBN Available",
// // // // //         category: book.category?.name || book.category || "Uncategorized",
// // // // //         price: book.price ? `$${book.price}` : "Price not available",
// // // // //         publishedYear: book.publishedYear || "Year not available",
// // // // //         image: book.image?.url || blogImg1, // Use default image if missing
// // // // //       }));

// // // // //       setBooks(formattedBooks);
// // // // //       console.log(formattedBooks, "formattedBooks");
      
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching wishlist:", error);
      
// // // // //       if (error.response?.status === 401) {
// // // // //         setAlert({
// // // // //           open: true,
// // // // //           message: "Authentication failed. Please log in again.",
// // // // //           severity: "error"
// // // // //         });
// // // // //       } else {
// // // // //         setAlert({
// // // // //           open: true,
// // // // //           message: "Failed to load wishlist. Please try again later.",
// // // // //           severity: "error"
// // // // //         });
// // // // //       }
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchBooks();
// // // // //   }, []);

// // // // //   // Filter books based on active category
// // // // //   const filteredBooks = activeCategory
// // // // //     ? books.filter(book => book.category === activeCategory)
// // // // //     : books;

// // // // //   // Display all books if filtered list is empty
// // // // //   const displayBooks = filteredBooks.length > 0 ? filteredBooks : books;

// // // // //   // Function to dismiss alert
// // // // //   const handleDismissAlert = () => {
// // // // //     setAlert({ open: false, message: "", severity: "" });
// // // // //   };

// // // // //   return (
// // // // //     <div className="discover-container">
// // // // //       {alert.open && (
// // // // //         <div className={`alert alert-${alert.severity}`}>
// // // // //           {alert.message}
// // // // //           <button className="alert-close" onClick={handleDismissAlert}>×</button>
// // // // //         </div>
// // // // //       )}

// // // // //       <div className="discover-wrap">
// // // // //         <h2 className="main-heading">Your Wishlist</h2>

// // // // //         <div className="category-filter">
// // // // //           <ul className="filter-nav">
// // // // //             {categories.map((category, index) => (
// // // // //               <li
// // // // //                 key={index}
// // // // //                 className={`filter-item ${activeCategory === category ? "active" : ""}`}
// // // // //                 onClick={() => setActiveCategory(category)}
// // // // //               >
// // // // //                 {category}
// // // // //               </li>
// // // // //             ))}
// // // // //           </ul>
// // // // //         </div>

// // // // //         {loading ? (
// // // // //           <div className="loading">Loading wishlist...</div>
// // // // //         ) : (
// // // // //           <div className="book-list">
// // // // //             {displayBooks.length === 0 ? (
// // // // //               <div className="empty-wishlist">
// // // // //                 <p>Your wishlist is empty. Discover books to add to your collection!</p>
// // // // //               </div>
// // // // //             ) : (
// // // // //               displayBooks.map((book) => (
// // // // //                 <div
// // // // //                   className="book-card"
// // // // //                   key={book.id}
// // // // //                   onClick={() => navigate(`/book-info/${book.id}`)}
// // // // //                   style={{ cursor: "pointer" }}
// // // // //                 >
// // // // //                   <img src={book.image} alt={book.title} className="book-image" />
// // // // //                   <h5 className="book-title">{book.title}</h5>
// // // // //                   <p className="book-author">{book.author}</p>
// // // // //                   <p className="book-price">{book.price}</p>
// // // // //                   <p className="book-year">{book.publishedYear}</p>
// // // // //                   <p
// // // // //                     className="book-description"
// // // // //                     data-full-description={book.description}
// // // // //                   >
// // // // //                     {book.description.length > 100
// // // // //                       ? `${book.description.substring(0, 100)}...`
// // // // //                       : book.description}
// // // // //                   </p>
// // // // //                   <p className="book-isbn">
// // // // //                     <b>ISBN:</b> {book.isbn}
// // // // //                   </p>
// // // // //                 </div>
// // // // //               ))
// // // // //             )}
// // // // //           </div>
// // // // //         )}

// // // // //         <div className="btn-wrap">
// // // // //           <Button
// // // // //             title="Discover More Books"
// // // // //             name="more"
// // // // //             onClick={() => navigate("/store")}
// // // // //           />
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Addwishlist;



// // // // // MAINNNNNNNNNNNNNNNNNNNNN
// // // // // import { useState, useEffect } from "react";
// // // // // import "../../home/style/DiscoverBook.css";

// // // // // import Button from "../../buttons/Button";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import axios from "axios";
// // // // // import blogImg1 from '../../home/images/discover-book1.jpg';

// // // // // const Addwishlist = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const [activeCategory, setActiveCategory] = useState("New Releases");
// // // // //   const [books, setBooks] = useState([]);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [alert, setAlert] = useState({ open: false, message: "", severity: "" });

// // // // //   // Define categories for filter
// // // // //   const categories = ["New Releases", "Fiction", "Non-Fiction", "Science", "History"];

// // // // //   const fetchBooks = async () => {
// // // // //     try {
// // // // //       setLoading(true);
      
// // // // //       // Get authToken from localStorage
// // // // //       const authToken = localStorage.getItem("authToken");
      
// // // // //       if (!authToken) {
// // // // //         setAlert({
// // // // //           open: true,
// // // // //           message: "Please log in to view your wishlist",
// // // // //           severity: "warning"
// // // // //         });
// // // // //         setLoading(false);
// // // // //         return;
// // // // //       }
      
// // // // //       const response = await axios.get(
// // // // //         `${process.env.REACT_APP_BASE_URL}/user/wishlist/getByUser`,
// // // // //         {
// // // // //           headers: {
// // // // //             Authorization: authToken,
// // // // //             "Content-Type": "application/json"
// // // // //           }
// // // // //         }
// // // // //       );

// // // // //       const wishlistItems = Array.isArray(response.data?.data)
// // // // //         ? response.data.data
// // // // //         : [];
// // // // //       console.log(wishlistItems, "wishlistItems");
      
// // // // //       const formattedBooks = wishlistItems.map((wishlistItem) => {
// // // // //         // Access the book object from the wishlist item
// // // // //         const book = wishlistItem.book;
        
// // // // //         return {
// // // // //           id: book._id,
// // // // //           wishlistId: wishlistItem._id, // Store the wishlist item ID if needed
// // // // //           title: book.title || "Untitled",
// // // // //           author: book.author || "Unknown Author",
// // // // //           description: book.description || "No description available.",
// // // // //           isbn: book.isbn || "No ISBN Available",
// // // // //           category: book.category?.name || book.category || "Uncategorized",
// // // // //           price: book.price ? `$${book.price}` : "Price not available",
// // // // //           publishedYear: book.publishedYear || "Year not available",
// // // // //           image: book.image?.url || blogImg1, // Use default image if missing
// // // // //           addedAt: new Date(wishlistItem.addedAt).toLocaleDateString()
// // // // //         };
// // // // //       });

// // // // //       setBooks(formattedBooks);
// // // // //       console.log(formattedBooks, "formattedBooks");
      
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching wishlist:", error);
      
// // // // //       if (error.response?.status === 401) {
// // // // //         setAlert({
// // // // //           open: true,
// // // // //           message: "Authentication failed. Please log in again.",
// // // // //           severity: "error"
// // // // //         });
// // // // //       } else {
// // // // //         setAlert({
// // // // //           open: true,
// // // // //           message: "Failed to load wishlist. Please try again later.",
// // // // //           severity: "error"
// // // // //         });
// // // // //       }
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchBooks();
// // // // //   }, []);

// // // // //   // Filter books based on active category
// // // // //   const filteredBooks = activeCategory
// // // // //     ? books.filter(book => book.category === activeCategory)
// // // // //     : books;

// // // // //   // Display all books if filtered list is empty
// // // // //   const displayBooks = filteredBooks.length > 0 ? filteredBooks : books;

// // // // //   // Function to dismiss alert
// // // // //   const handleDismissAlert = () => {
// // // // //     setAlert({ open: false, message: "", severity: "" });
// // // // //   };

// // // // //   // Function to handle image errors
// // // // //   const handleImageError = (e) => {
// // // // //     e.target.src = blogImg1; // Fallback to default image
// // // // //   };

// // // // //   return (
// // // // //     <div className="discover-container">
// // // // //       {alert.open && (
// // // // //         <div className={`alert alert-${alert.severity}`}>
// // // // //           {alert.message}
// // // // //           <button className="alert-close" onClick={handleDismissAlert}>×</button>
// // // // //         </div>
// // // // //       )}

// // // // //       <div className="discover-wrap">
// // // // //         <h2 className="main-heading">Your Wishlist</h2>

// // // // //         <div className="category-filter">
// // // // //           <ul className="filter-nav">
// // // // //             {categories.map((category, index) => (
// // // // //               <li
// // // // //                 key={index}
// // // // //                 className={`filter-item ${activeCategory === category ? "active" : ""}`}
// // // // //                 onClick={() => setActiveCategory(category)}
// // // // //               >
// // // // //                 {category}
// // // // //               </li>
// // // // //             ))}
// // // // //           </ul>
// // // // //         </div>

// // // // //         {loading ? (
// // // // //           <div className="loading">Loading wishlist...</div>
// // // // //         ) : (
// // // // //           <div className="book-list">
// // // // //             {displayBooks.length === 0 ? (
// // // // //               <div className="empty-wishlist">
// // // // //                 <p>Your wishlist is empty. Discover books to add to your collection!</p>
// // // // //               </div>
// // // // //             ) : (
// // // // //               displayBooks.map((book) => (
// // // // //                 <div
// // // // //                   className="book-card"
// // // // //                   key={book.id}
// // // // //                   onClick={() => navigate(`/book-info/${book.id}`)}
// // // // //                   style={{ cursor: "pointer" }}
// // // // //                 >
// // // // //                   <img 
// // // // //                     src={book.image} 
// // // // //                     alt={book.title} 
// // // // //                     className="book-image" 
// // // // //                     onError={handleImageError}
// // // // //                   />
// // // // //                   <h5 className="book-title">{book.title}</h5>
// // // // //                   <p className="book-author">{book.author}</p>
// // // // //                   <p className="book-price">{book.price}</p>
// // // // //                   <p className="book-year">{book.publishedYear}</p>
// // // // //                   <p className="book-added">Added: {book.addedAt}</p>
// // // // //                   <p
// // // // //                     className="book-description"
// // // // //                     data-full-description={book.description}
// // // // //                   >
// // // // //                     {book.description.length > 100
// // // // //                       ? `${book.description.substring(0, 100)}...`
// // // // //                       : book.description}
// // // // //                   </p>
// // // // //                   <p className="book-isbn">
// // // // //                     <b>ISBN:</b> {book.isbn}
// // // // //                   </p>
// // // // //                 </div>
// // // // //               ))
// // // // //             )}
// // // // //           </div>
// // // // //         )}

// // // // //         <div className="btn-wrap">
// // // // //           <Button
// // // // //             title="Discover More Books"
// // // // //             name="more"
// // // // //             onClick={() => navigate("/store")}
// // // // //           />
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Addwishlist;


// // // // import { useState, useEffect } from "react";
// // // // import "../../home/style/DiscoverBook.css";

// // // // import Button from "../../buttons/Button";
// // // // import { useNavigate } from "react-router-dom";
// // // // import axios from "axios";
// // // // import blogImg1 from '../../home/images/discover-book1.jpg';

// // // // const Addwishlist = () => {
// // // //   const navigate = useNavigate();
// // // //   const [activeCategory, setActiveCategory] = useState("New Releases");
// // // //   const [books, setBooks] = useState([]);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [alert, setAlert] = useState({ open: false, message: "", severity: "" });

// // // //   // Define categories for filter
// // // //   const categories = ["New Releases", "Fiction", "Non-Fiction", "Science", "History"];

// // // //   const fetchBooks = async () => {
// // // //     try {
// // // //       setLoading(true);
      
// // // //       // Get authToken from localStorage
// // // //       const authToken = localStorage.getItem("authToken");
      
// // // //       if (!authToken) {
// // // //         setAlert({
// // // //           open: true,
// // // //           message: "Please log in to view your wishlist",
// // // //           severity: "warning"
// // // //         });
// // // //         setLoading(false);
// // // //         return;
// // // //       }
      
// // // //       const response = await axios.get(
// // // //         `${process.env.REACT_APP_BASE_URL}/user/wishlist/getByUser`,
// // // //         {
// // // //           headers: {
// // // //             Authorization: authToken,
// // // //             "Content-Type": "application/json"
// // // //           }
// // // //         }
// // // //       );

// // // //       const wishlistItems = Array.isArray(response.data?.data)
// // // //         ? response.data.data
// // // //         : [];
// // // //       console.log(wishlistItems, "wishlistItems");
      
// // // //       const formattedBooks = wishlistItems.map((wishlistItem) => {
// // // //         // Access the book object from the wishlist item
// // // //         const book = wishlistItem.book;
        
// // // //         return {
// // // //           id: book._id,
// // // //           wishlistId: wishlistItem._id, // Store the wishlist item ID if needed
// // // //           title: book.title || "Untitled",
// // // //           author: book.author || "Unknown Author",
// // // //           description: book.description || "No description available.",
// // // //           isbn: book.isbn || "No ISBN Available",
// // // //           category: book.category?.name || book.category || "Uncategorized",
// // // //           price: book.price ? `$${book.price}` : "Price not available",
// // // //           publishedYear: book.publishedYear || "Year not available",
// // // //           image: book.image?.url || blogImg1, // Use default image if missing
// // // //           addedAt: new Date(wishlistItem.addedAt).toLocaleDateString()
// // // //         };
// // // //       });

// // // //       setBooks(formattedBooks);
// // // //       console.log(formattedBooks, "formattedBooks");
      
// // // //     } catch (error) {
// // // //       console.error("Error fetching wishlist:", error);
      
// // // //       if (error.response?.status === 401) {
// // // //         setAlert({
// // // //           open: true,
// // // //           message: "Authentication failed. Please log in again.",
// // // //           severity: "error"
// // // //         });
// // // //       } else {
// // // //         setAlert({
// // // //           open: true,
// // // //           message: "Failed to load wishlist. Please try again later.",
// // // //           severity: "error"
// // // //         });
// // // //       }
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   // Function to remove book from wishlist
// // // //   const removeFromWishlist = async (wishlistId, bookTitle, event) => {
// // // //     // Prevent the click from bubbling up to the parent (book card)
// // // //     event.stopPropagation();
    
// // // //     try {
// // // //       setLoading(true);
      
// // // //       const authToken = localStorage.getItem("authToken");
      
// // // //       if (!authToken) {
// // // //         setAlert({
// // // //           open: true,
// // // //           message: "Please log in to remove items from your wishlist",
// // // //           severity: "warning"
// // // //         });
// // // //         setLoading(false);
// // // //         return;
// // // //       }
      
// // // //       // Send DELETE request to remove item from wishlist
// // // //       await axios.delete(
// // // //         `${process.env.REACT_APP_BASE_URL}/user/wishlist/delete/${wishlistId}`,
// // // //         {
// // // //           headers: {
// // // //             Authorization: authToken,
// // // //             "Content-Type": "application/json"
// // // //           }
// // // //         }
// // // //       );  
      
// // // //       // Remove book from local state
// // // //       setBooks(books.filter(book => book.wishlistId !== wishlistId));
      
// // // //       // Show success message
// // // //       setAlert({
// // // //         open: true,
// // // //         message: `"${bookTitle}" has been removed from your wishlist`,
// // // //         severity: "success"
// // // //       });
      
// // // //     } catch (error) {
// // // //       console.error("Error removing from wishlist:", error);
      
// // // //       if (error.response?.status === 401) {
// // // //         setAlert({
// // // //           open: true,
// // // //           message: "Authentication failed. Please log in again.",
// // // //           severity: "error"
// // // //         });
// // // //       } else {
// // // //         setAlert({
// // // //           open: true,
// // // //           message: "Failed to remove item. Please try again later.",
// // // //           severity: "error"
// // // //         });
// // // //       }
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchBooks();
// // // //   }, []);

// // // //   // Filter books based on active category
// // // //   const filteredBooks = activeCategory
// // // //     ? books.filter(book => book.category === activeCategory)
// // // //     : books;

// // // //   // Display all books if filtered list is empty
// // // //   const displayBooks = filteredBooks.length > 0 ? filteredBooks : books;

// // // //   // Function to dismiss alert
// // // //   const handleDismissAlert = () => {
// // // //     setAlert({ open: false, message: "", severity: "" });
// // // //   };

// // // //   // Function to handle image errors
// // // //   const handleImageError = (e) => {
// // // //     e.target.src = blogImg1; // Fallback to default image
// // // //   };

// // // //   return (
// // // //     <div className="discover-container">
// // // //       {alert.open && (
// // // //         <div className={`alert alert-${alert.severity}`}>
// // // //           {alert.message}
// // // //           <button className="alert-close" onClick={handleDismissAlert}>×</button>
// // // //         </div>
// // // //       )}

// // // //       <div className="discover-wrap">
// // // //         <h2 className="main-heading">Your Wishlist</h2>

// // // //         <div className="category-filter">
// // // //           <ul className="filter-nav">
// // // //             {categories.map((category, index) => (
// // // //               <li
// // // //                 key={index}
// // // //                 className={`filter-item ${activeCategory === category ? "active" : ""}`}
// // // //                 onClick={() => setActiveCategory(category)}
// // // //               >
// // // //                 {category}
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>

// // // //         {loading ? (
// // // //           <div className="loading">Loading wishlist...</div>
// // // //         ) : (
// // // //           <div className="book-list">
// // // //             {displayBooks.length === 0 ? (
// // // //               <div className="empty-wishlist">
// // // //                 <p>Your wishlist is empty. Discover books to add to your collection!</p>
// // // //               </div>
// // // //             ) : (
// // // //               displayBooks.map((book) => (
// // // //                 <div
// // // //                   className="book-card"
// // // //                   key={book.id}
// // // //                 >
// // // //                   <div 
// // // //                     className="book-card-content"
// // // //                     onClick={() => navigate(`/book-info/${book.id}`)}
// // // //                     style={{ cursor: "pointer" }}
// // // //                   >
// // // //                     <img 
// // // //                       src={book.image} 
// // // //                       alt={book.title} 
// // // //                       className="book-image" 
// // // //                       onError={handleImageError}
// // // //                     />
// // // //                     <h5 className="book-title">{book.title}</h5>
// // // //                     <p className="book-author">{book.author}</p>
// // // //                     <p className="book-price">{book.price}</p>
// // // //                     <p className="book-year">{book.publishedYear}</p>
// // // //                     <p className="book-added">Added: {book.addedAt}</p>
// // // //                     <p
// // // //                       className="book-description"
// // // //                       data-full-description={book.description}
// // // //                     >
// // // //                       {book.description.length > 100
// // // //                         ? `${book.description.substring(0, 100)}...`
// // // //                         : book.description}
// // // //                     </p>
// // // //                     <p className="book-isbn">
// // // //                       <b>ISBN:</b> {book.isbn}
// // // //                     </p>
// // // //                   </div>
// // // //                   <button 
// // // //                     className="remove-button"
// // // //                     onClick={(e) => removeFromWishlist(book.wishlistId, book.title, e)}
// // // //                     style={{
// // // //                       padding: "8px 12px",
// // // //                       backgroundColor: "#ff4d4f",
// // // //                       color: "white",
// // // //                       border: "none",
// // // //                       borderRadius: "4px",
// // // //                       cursor: "pointer",
// // // //                       margin: "10px 0",
// // // //                       width: "100%"
// // // //                     }}
// // // //                   >
// // // //                     Remove from Wishlist
// // // //                   </button>
// // // //                 </div>
// // // //               ))
// // // //             )}
// // // //           </div>
// // // //         )}

// // // //         <div className="btn-wrap">
// // // //           <Button
// // // //             title="Discover More Books"
// // // //             name="more"
// // // //             onClick={() => navigate("/store")}
// // // //           />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Addwishlist;

// // // import { useState, useEffect } from "react";
// // // import "../../home/style/DiscoverBook.css";

// // // import Button from "../../buttons/Button";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import blogImg1 from '../../home/images/discover-book1.jpg';

// // // const Addwishlist = () => {
// // //   const navigate = useNavigate();
// // //   const [activeCategory, setActiveCategory] = useState("New Releases");
// // //   const [books, setBooks] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [alert, setAlert] = useState({ open: false, message: "", severity: "" });

// // //   // Define categories for filter
// // //   const categories = ["New Releases", "Fiction", "Non-Fiction", "Science", "History"];

// // //   const fetchBooks = async () => {
// // //     try {
// // //       setLoading(true);
      
// // //       // Get authToken from localStorage
// // //       const authToken = localStorage.getItem("authToken");
      
// // //       if (!authToken) {
// // //         setAlert({
// // //           open: true,
// // //           message: "Please log in to view your wishlist",
// // //           severity: "warning"
// // //         });
// // //         setLoading(false);
// // //         return;
// // //       }
      
// // //       const response = await axios.get(
// // //         `${process.env.REACT_APP_BASE_URL}/user/wishlist/getByUser`,
// // //         {
// // //           headers: {
// // //             Authorization: authToken,
// // //             "Content-Type": "application/json"
// // //           }
// // //         }
// // //       );

// // //       const wishlistItems = Array.isArray(response.data?.data)
// // //         ? response.data.data
// // //         : [];
// // //       console.log(wishlistItems, "wishlistItems");
      
// // //       const formattedBooks = wishlistItems.map((wishlistItem) => {
// // //         // Access the book object from the wishlist item
// // //         const book = wishlistItem.book;
        
// // //         return {
// // //           id: book._id,
// // //           wishlistId: wishlistItem._id, // Store the wishlist item ID if needed
// // //           title: book.title || "Untitled",
// // //           author: book.author || "Unknown Author",
// // //           description: book.description || "No description available.",
// // //           isbn: book.isbn || "No ISBN Available",
// // //           category: book.category?.name || book.category || "Uncategorized",
// // //           price: book.price ? `$${book.price}` : "Price not available",
// // //           publishedYear: book.publishedYear || "Year not available",
// // //           image: book.image?.url || blogImg1, // Use default image if missing
// // //           addedAt: new Date(wishlistItem.addedAt).toLocaleDateString()
// // //         };
// // //       });

// // //       setBooks(formattedBooks);
// // //       console.log(formattedBooks, "formattedBooks");
      
// // //     } catch (error) {
// // //       console.error("Error fetching wishlist:", error);
      
// // //       if (error.response?.status === 401) {
// // //         setAlert({
// // //           open: true,
// // //           message: "Authentication failed. Please log in again.",
// // //           severity: "error"
// // //         });
// // //       } else {
// // //         setAlert({
// // //           open: true,
// // //           message: "Failed to load wishlist. Please try again later.",
// // //           severity: "error"
// // //         });
// // //       }
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Function to remove book from wishlist
// // //   const removeFromWishlist = async (wishlistId, bookTitle, event) => {
// // //     // Prevent the click from bubbling up to the parent (book card)
// // //     event.stopPropagation();
    
// // //     if (!wishlistId) {
// // //       setAlert({
// // //         open: true,
// // //         message: "Error: Missing wishlist ID",
// // //         severity: "error"
// // //       });
// // //       return;
// // //     }
    
// // //     try {
// // //       setLoading(true);
      
// // //       const authToken = localStorage.getItem("authToken");
      
// // //       if (!authToken) {
// // //         setAlert({
// // //           open: true,
// // //           message: "Please log in to remove items from your wishlist",
// // //           severity: "warning"
// // //         });
// // //         setLoading(false);
// // //         return;
// // //       }

// // //       // Pass wishlistId directly in the URL
// // //       await axios.delete(
// // //         `${process.env.REACT_APP_BASE_URL}/user/wishlist/${wishlistId}`,
// // //         {
// // //           headers: {
// // //             Authorization: authToken,
// // //             "Content-Type": "application/json"
// // //           }
// // //         }
// // //       );
      
// // //       // Remove book from local state
// // //       setBooks(books.filter(book => book.wishlistId !== wishlistId));
      
// // //       // Show success message
// // //       setAlert({
// // //         open: true,
// // //         message: `"${bookTitle}" has been removed from your wishlist`,
// // //         severity: "success"
// // //       });
      
// // //     } catch (error) {
// // //       console.error("Error removing from wishlist:", error);
      
// // //       const errorMessage = error.response?.data?.message || "Failed to remove item. Please try again later.";
      
// // //       setAlert({
// // //         open: true,
// // //         message: errorMessage,
// // //         severity: "error"
// // //       });
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchBooks();
// // //   }, []);

// // //   // Filter books based on active category
// // //   const filteredBooks = activeCategory
// // //     ? books.filter(book => book.category === activeCategory)
// // //     : books;

// // //   // Display all books if filtered list is empty
// // //   const displayBooks = filteredBooks.length > 0 ? filteredBooks : books;

// // //   // Function to dismiss alert
// // //   const handleDismissAlert = () => {
// // //     setAlert({ open: false, message: "", severity: "" });
// // //   };

// // //   // Function to handle image errors
// // //   const handleImageError = (e) => {
// // //     e.target.src = blogImg1; // Fallback to default image
// // //   };

// // //   return (
// // //     <div className="discover-container">
// // //       {alert.open && (
// // //         <div className={`alert alert-${alert.severity}`}>
// // //           {alert.message}
// // //           <button className="alert-close" onClick={handleDismissAlert}>×</button>
// // //         </div>
// // //       )}

// // //       <div className="discover-wrap">
// // //         <h2 className="main-heading">Your Wishlist</h2>

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

// // //         {loading ? (
// // //           <div className="loading">Loading wishlist...</div>
// // //         ) : (
// // //           <div className="book-list">
// // //             {displayBooks.length === 0 ? (
// // //               <div className="empty-wishlist">
// // //                 <p>Your wishlist is empty. Discover books to add to your collection!</p>
// // //               </div>
// // //             ) : (
// // //               displayBooks.map((book) => (
// // //                 <div
// // //                   className="book-card"
// // //                   key={book.id}
// // //                 >
// // //                   <div 
// // //                     className="book-card-content"
// // //                     onClick={() => navigate(`/book-info/${book.id}`)}
// // //                     style={{ cursor: "pointer" }}
// // //                   >
// // //                     <img 
// // //                       src={book.image} 
// // //                       alt={book.title} 
// // //                       className="book-image" 
// // //                       onError={handleImageError}
// // //                     />
// // //                     <h5 className="book-title">{book.title}</h5>
// // //                     <p className="book-author">{book.author}</p>
// // //                     <p className="book-price">{book.price}</p>
// // //                     <p className="book-year">{book.publishedYear}</p>
// // //                     <p className="book-added">Added: {book.addedAt}</p>
// // //                     <p
// // //                       className="book-description"
// // //                       data-full-description={book.description}
// // //                     >
// // //                       {book.description.length > 100
// // //                         ? `${book.description.substring(0, 100)}...`
// // //                         : book.description}
// // //                     </p>
// // //                     <p className="book-isbn">
// // //                       <b>ISBN:</b> {book.isbn}
// // //                     </p>
// // //                   </div>
// // //                   <button 
// // //                     className="remove-button"
// // //                     onClick={(e) => removeFromWishlist(book.wishlistId, book.title, e)}
// // //                     style={{
// // //                       padding: "8px 12px",
// // //                       backgroundColor: "#ff4d4f",
// // //                       color: "white",
// // //                       border: "none",
// // //                       borderRadius: "4px",
// // //                       cursor: "pointer",
// // //                       margin: "10px 0",
// // //                       width: "100%"
// // //                     }}
// // //                   >
// // //                     Remove from Wishlist
// // //                   </button>
// // //                 </div>
// // //               ))
// // //             )}
// // //           </div>
// // //         )}

// // //         <div className="btn-wrap">
// // //           <Button
// // //             title="Discover More Books"
// // //             name="more"
// // //             onClick={() => navigate("/store")}
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Addwishlist;

// // import { useState, useEffect } from "react";
// // import "../../home/style/DiscoverBook.css";

// // import Button from "../../buttons/Button";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import blogImg1 from '../../home/images/discover-book1.jpg';

// // const Addwishlist = () => {
// //   const navigate = useNavigate();
// //   const [activeCategory, setActiveCategory] = useState("New Releases");
// //   const [books, setBooks] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [alert, setAlert] = useState({ open: false, message: "", severity: "" });

// //   // Define categories for filter
// //   const categories = ["New Releases", "Fiction", "Non-Fiction", "Science", "History"];

// //   const fetchBooks = async () => {
// //     try {
// //       setLoading(true);
      
// //       // Get authToken from localStorage
// //       const authToken = localStorage.getItem("authToken");
      
// //       if (!authToken) {
// //         setAlert({
// //           open: true,
// //           message: "Please log in to view your wishlist",
// //           severity: "warning"
// //         });
// //         setLoading(false);
// //         return;
// //       }
      
// //       const response = await axios.get(
// //         `${process.env.REACT_APP_BASE_URL}/user/wishlist/getByUser`,
// //         {
// //           headers: {
// //             Authorization: authToken,
// //             "Content-Type": "application/json"
// //           }
// //         }
// //       );

// //       const wishlistItems = Array.isArray(response.data?.data)
// //         ? response.data.data
// //         : [];
// //       console.log(wishlistItems, "wishlistItems");
      
// //       const formattedBooks = wishlistItems.map((wishlistItem) => {
// //         // Access the book object from the wishlist item
// //         const book = wishlistItem.book;
        
// //         return {
// //           id: book._id,
// //           wId: wishlistItem._id, // Store the wishlist item ID if needed
// //           title: book.title || "Untitled",
// //           author: book.author || "Unknown Author",
// //           description: book.description || "No description available.",
// //           isbn: book.isbn || "No ISBN Available",
// //           category: book.category?.name || book.category || "Uncategorized",
// //           price: book.price ? `$${book.price}` : "Price not available",
// //           publishedYear: book.publishedYear || "Year not available",
// //           image: book.image?.url || blogImg1, // Use default image if missing
// //           addedAt: new Date(wishlistItem.addedAt).toLocaleDateString()
// //         };
// //       });

// //       setBooks(formattedBooks);
// //       console.log(formattedBooks, "formattedBooks");
      
// //     } catch (error) {
// //       console.error("Error fetching wishlist:", error);
      
// //       if (error.response?.status === 401) {
// //         setAlert({
// //           open: true,
// //           message: "Authentication failed. Please log in again.",
// //           severity: "error"
// //         });
// //       } else {
// //         setAlert({
// //           open: true,
// //           message: "Failed to load wishlist. Please try again later.",
// //           severity: "error"
// //         });
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Function to remove book from wishlist
// //   const removeFromWishlist = async (wId, bookTitle, event) => {
// //     // Prevent the click from bubbling up to the parent (book card)
// //     event.stopPropagation();
    
// //     if (!wId) {
// //       setAlert({
// //         open: true,
// //         message: "Error: Missing wishlist ID",
// //         severity: "error"
// //       });
// //       return;
// //     }
    
// //     try {
// //       setLoading(true);
      
// //       const authToken = localStorage.getItem("authToken");
      
// //       if (!authToken) {
// //         setAlert({
// //           open: true,
// //           message: "Please log in to remove items from your wishlist",
// //           severity: "warning"
// //         });
// //         setLoading(false);
// //         return;
// //       }

// //       // Method 1: Using DELETE with params
// //       await axios.delete(
// //         `${process.env.REACT_APP_BASE_URL}/user/wishlist/delete/${wId}`,
// //         {
// //           headers: {
// //             Authorization: authToken,
// //             "Content-Type": "application/json"
// //           }
// //         }
// //       );
      
// //       // Remove book from local state
// //       setBooks(books.filter(book => book.wId !== wId));
      
// //       // Show success message
// //       setAlert({
// //         open: true,
// //         message: `"${bookTitle}" has been removed from your wishlist`,
// //         severity: "success"
// //       });
      
// //     } catch (error) {
// //       console.error("Error removing from wishlist:", error);
      
// //       const errorMessage = error.response?.data?.message || "Failed to remove item. Please try again later.";
      
// //       setAlert({
// //         open: true,
// //         message: errorMessage,
// //         severity: "error"
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
// //     ? books.filter(book => book.category === activeCategory)
// //     : books;

// //   // Display all books if filtered list is empty
// //   const displayBooks = filteredBooks.length > 0 ? filteredBooks : books;

// //   // Function to dismiss alert
// //   const handleDismissAlert = () => {
// //     setAlert({ open: false, message: "", severity: "" });
// //   };

// //   // Function to handle image errors
// //   const handleImageError = (e) => {
// //     e.target.src = blogImg1; // Fallback to default image
// //   };

// //   return (
// //     <div className="discover-container">
// //       {alert.open && (
// //         <div className={`alert alert-${alert.severity}`}>
// //           {alert.message}
// //           <button className="alert-close" onClick={handleDismissAlert}>×</button>
// //         </div>
// //       )}

// //       <div className="discover-wrap">
// //         <h2 className="main-heading">Your Wishlist</h2>

// //         <div className="category-filter">
// //           <ul className="filter-nav">
// //             {categories.map((category, index) => (
// //               <li
// //                 key={index}
// //                 className={`filter-item ${activeCategory === category ? "active" : ""}`}
// //                 onClick={() => setActiveCategory(category)}
// //               >
// //                 {category}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {loading ? (
// //           <div className="loading">Loading wishlist...</div>
// //         ) : (
// //           <div className="book-list">
// //             {displayBooks.length === 0 ? (
// //               <div className="empty-wishlist">
// //                 <p>Your wishlist is empty. Discover books to add to your collection!</p>
// //               </div>
// //             ) : (
// //               displayBooks.map((book) => (
// //                 <div
// //                   className="book-card"
// //                   key={book.id}
// //                 >
// //                   <div 
// //                     className="book-card-content"
// //                     onClick={() => navigate(`/book-info/${book.id}`)}
// //                     style={{ cursor: "pointer" }}
// //                   >
// //                     <img 
// //                       src={book.image} 
// //                       alt={book.title} 
// //                       className="book-image" 
// //                       onError={handleImageError}
// //                     />
// //                     <h5 className="book-title">{book.title}</h5>
// //                     <p className="book-author">{book.author}</p>
// //                     <p className="book-price">{book.price}</p>
// //                     <p className="book-year">{book.publishedYear}</p>
// //                     <p className="book-added">Added: {book.addedAt}</p>
// //                     <p
// //                       className="book-description"
// //                       data-full-description={book.description}
// //                     >
// //                       {book.description.length > 100
// //                         ? `${book.description.substring(0, 100)}...`
// //                         : book.description}
// //                     </p>
// //                     <p className="book-isbn">
// //                       <b>ISBN:</b> {book.isbn}
// //                     </p>
// //                   </div>
// //                   <button 
// //                     className="remove-button"
// //                     onClick={(e) => removeFromWishlist(book.wId, book.title, e)}
// //                     style={{
// //                       padding: "8px 12px",
// //                       backgroundColor: "#ff4d4f",
// //                       color: "white",
// //                       border: "none",
// //                       borderRadius: "4px",
// //                       cursor: "pointer",
// //                       margin: "10px 0",
// //                       width: "100%"
// //                     }}
// //                   >
// //                     Remove from Wishlist
// //                   </button>
// //                 </div>
// //               ))
// //             )}
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

// // export default Addwishlist;

// // import { useState, useEffect, useRef } from "react";
// // import "../../home/style/DiscoverBook.css";

// // import Button from "../../buttons/Button";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import blogImg1 from '../../home/images/discover-book1.jpg';

// // const Addwishlist = () => {
// //   const navigate = useNavigate();
// //   const [activeCategory, setActiveCategory] = useState("New Releases");
// //   const [books, setBooks] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [alert, setAlert] = useState({ open: false, message: "", severity: "" });
// //   const categoryRef = useRef(null);

// //   // Define categories for filter
// //   const categories = ["New Releases", "Fiction", "Non-Fiction", "Science", "History"];

// //   const fetchBooks = async () => {
// //     try {
// //       setLoading(true);
      
// //       // Get authToken from localStorage
// //       const authToken = localStorage.getItem("authToken");
      
// //       if (!authToken) {
// //         setAlert({
// //           open: true,
// //           message: "Please log in to view your wishlist",
// //           severity: "warning"
// //         });
// //         setLoading(false);
// //         return;
// //       }
      
// //       const response = await axios.get(
// //         `${process.env.REACT_APP_BASE_URL}/user/wishlist/getByUser`,
// //         {
// //           headers: {
// //             Authorization: authToken,
// //             "Content-Type": "application/json"
// //           }
// //         }
// //       );

// //       const wishlistItems = Array.isArray(response.data?.data)
// //         ? response.data.data
// //         : [];
// //       console.log(wishlistItems, "wishlistItems");
      
// //       const formattedBooks = wishlistItems.map((wishlistItem) => {
// //         // Access the book object from the wishlist item
// //         const book = wishlistItem.book;
        
// //         return {
// //           id: book._id,
// //           wId: wishlistItem._id, // Store the wishlist item ID if needed
// //           title: book.title || "Untitled",
// //           author: book.author || "Unknown Author",
// //           description: book.description || "No description available.",
// //           isbn: book.isbn || "No ISBN Available",
// //           category: book.category?.name || book.category || "Uncategorized",
// //           price: book.price ? `$${book.price}` : "Price not available",
// //           publishedYear: book.publishedYear || "Year not available",
// //           image: book.image?.url || blogImg1, // Use default image if missing
// //           addedAt: new Date(wishlistItem.addedAt).toLocaleDateString()
// //         };
// //       });

// //       setBooks(formattedBooks);
// //       console.log(formattedBooks, "formattedBooks");
      
// //     } catch (error) {
// //       console.error("Error fetching wishlist:", error);
      
// //       if (error.response?.status === 401) {
// //         setAlert({
// //           open: true,
// //           message: "Authentication failed. Please log in again.",
// //           severity: "error"
// //         });
// //       } else {
// //         setAlert({
// //           open: true,
// //           message: "Failed to load wishlist. Please try again later.",
// //           severity: "error"
// //         });
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Function to remove book from wishlist
// //   const removeFromWishlist = async (wId, bookTitle, event) => {
// //     // Prevent the click from bubbling up to the parent (book card)
// //     event.stopPropagation();
    
// //     if (!wId) {
// //       setAlert({
// //         open: true,
// //         message: "Error: Missing wishlist ID",
// //         severity: "error"
// //       });
// //       return;
// //     }
    
// //     try {
// //       setLoading(true);
      
// //       const authToken = localStorage.getItem("authToken");
      
// //       if (!authToken) {
// //         setAlert({
// //           open: true,
// //           message: "Please log in to remove items from your wishlist",
// //           severity: "warning"
// //         });
// //         setLoading(false);
// //         return;
// //       }

// //       // Method 1: Using DELETE with params
// //       await axios.delete(
// //         `${process.env.REACT_APP_BASE_URL}/user/wishlist/delete/${wId}`,
// //         {
// //           headers: {
// //             Authorization: authToken,
// //             "Content-Type": "application/json"
// //           }
// //         }
// //       );
      
// //       // Remove book from local state
// //       setBooks(books.filter(book => book.wId !== wId));
      
// //       // Show success message
// //       setAlert({
// //         open: true,
// //         message: `"${bookTitle}" has been removed from your wishlist`,
// //         severity: "success"
// //       });
      
// //     } catch (error) {
// //       console.error("Error removing from wishlist:", error);
      
// //       const errorMessage = error.response?.data?.message || "Failed to remove item. Please try again later.";
      
// //       setAlert({
// //         open: true,
// //         message: errorMessage,
// //         severity: "error"
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
// //     ? books.filter(book => book.category.toLowerCase() === activeCategory.toLowerCase())
// //     : books;

// //   // Display all books if filtered list is empty
// //   const displayBooks = filteredBooks.length > 0 ? filteredBooks : books;

// //   // Function to dismiss alert
// //   const handleDismissAlert = () => {
// //     setAlert({ open: false, message: "", severity: "" });
// //   };

// //   // Function to handle image errors
// //   const handleImageError = (e) => {
// //     e.target.src = blogImg1; // Fallback to default image
// //   };

// //   // Scroll horizontally through categories
// //   const scrollCategories = (direction) => {
// //     if (categoryRef.current) {
// //       const scrollAmount = direction === 'left' ? -200 : 200;
// //       categoryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
// //     }
// //   };

// //   // Handle "All Books" category option
// //   const handleAllBooksClick = () => {
// //     setActiveCategory(null);
// //   };

// //   return (
// //     <div className="discover-container">
// //       {alert.open && (
// //         <div className={`alert alert-${alert.severity}`}>
// //           {alert.message}
// //           <button className="alert-close" onClick={handleDismissAlert}>×</button>
// //         </div>
// //       )}

// //       <div className="discover-wrap">
// //         <h2 className="main-heading">Your Wishlist</h2>

// //         <div className="category-filter-container">
// //           <button 
// //             className="category-scroll-button left"
// //             onClick={() => scrollCategories('left')}
// //           >
// //             &lt;
// //           </button>

// //           <div className="category-filter" ref={categoryRef}>
// //             <ul className="filter-nav">
// //               <li
// //                 className={`filter-item ${activeCategory === null ? "active" : ""}`}
// //                 onClick={handleAllBooksClick}
// //               >
// //                 ALL BOOKS
// //               </li>
// //               {categories.map((category, index) => (
// //                 <li
// //                   key={index}
// //                   className={`filter-item ${activeCategory === category ? "active" : ""}`}
// //                   onClick={() => setActiveCategory(category)}
// //                 >
// //                   {category.toUpperCase()}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           <button 
// //             className="category-scroll-button right"
// //             onClick={() => scrollCategories('right')}
// //           >
// //             &gt;
// //           </button>
// //         </div>

// //         {loading ? (
// //           <div className="loading">Loading wishlist...</div>
// //         ) : (
// //           <>
// //             <div className="book-list">
// //               {displayBooks.length === 0 ? (
// //                 <div className="no-books-message">
// //                   <p>Your wishlist is empty. Discover books to add to your collection!</p>
// //                   <Button 
// //                     title="Discover Books" 
// //                     name="discover" 
// //                     onClick={() => navigate("/store")} 
// //                   />
// //                 </div>
// //               ) : (
// //                 displayBooks.map((book) => (
// //                   <div
// //                     className="book-card"
// //                     key={book.id}
// //                     onClick={() => navigate(`/book-info/${book.id}`)}
// //                   >
// //                     <div className="book-image-container">
// //                       <img 
// //                         src={book.image} 
// //                         alt={book.title} 
// //                         className="book-image" 
// //                         onError={handleImageError}
// //                       />
// //                     </div>
// //                     <div className="book-details">
// //                       <h5 className="book-title">{book.title}</h5>
// //                       <p className="book-author">{book.author}</p>
// //                       <p className="book-price">{book.price}</p>
// //                       <p className="book-year">{book.publishedYear}</p>
// //                       <p className="book-added">Added: {book.addedAt}</p>
// //                       <p className="book-isbn">ISBN: {book.isbn}</p>
// //                     </div>
// //                     <button 
// //                       className="remove-button"
// //                       onClick={(e) => removeFromWishlist(book.wId, book.title, e)}
// //                     >
// //                       Remove from Wishlist
// //                     </button>
// //                   </div>
// //                 ))
// //               )}
// //             </div>

// //             {displayBooks.length > 0 && (
// //               <div className="btn-wrap">
// //                 <Button
// //                   title="Discover More Books"
// //                   name="more"
// //                   onClick={() => navigate("/store")}
// //                   className="discover-more-btn"
// //                 />
// //               </div>
// //             )}
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Addwishlist;

// import { useState, useEffect, useRef } from "react";
// import "../../home/style/DiscoverBook.css";

// import Button from "../../buttons/Button";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import blogImg1 from '../../home/images/discover-book1.jpg';

// const Addwishlist = () => {
//   const navigate = useNavigate();
//   const [activeCategory, setActiveCategory] = useState("New Releases");
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [alert, setAlert] = useState({ open: false, message: "", severity: "" });
//   const categoryRef = useRef(null);

//   // Define categories for filter
//   const categories = ["New Releases", "Fiction", "Non-Fiction", "Science", "History"];

//   const fetchBooks = async () => {
//     try {
//       setLoading(true);
      
//       // Get authToken from localStorage
//       const authToken = localStorage.getItem("authToken");
      
//       if (!authToken) {
//         setAlert({
//           open: true,
//           message: "Please log in to view your wishlist",
//           severity: "warning"
//         });
//         setLoading(false);
//         return;
//       }
      
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/wishlist/getByUser`,
//         {
//           headers: {
//             Authorization: authToken,
//             "Content-Type": "application/json"
//           }
//         }
//       );

//       const wishlistItems = Array.isArray(response.data?.data)
//         ? response.data.data
//         : [];
//       console.log(wishlistItems, "wishlistItems");
      
//       const formattedBooks = wishlistItems.map((wishlistItem) => {
//         // Access the book object from the wishlist item
//         const book = wishlistItem.book;
        
//         // Properly handle the image URL based on your API response format
//         let imageUrl = blogImg1; // Default fallback image
        
//         // Check if image object exists and has a url property
//         if (book.image && book.image.url) {
//           imageUrl = book.image.url;
//         } 
//         // If image is just a string URL (for backward compatibility)
//         else if (typeof book.image === 'string') {
//           imageUrl = book.image;
//         }
        
//         return {
//           id: book._id,
//           wId: wishlistItem._id, // Store the wishlist item ID if needed
//           title: book.title || "Untitled",
//           author: book.author || "Unknown Author",
//           description: book.description || "No description available.",
//           isbn: book.isbn || "No ISBN Available",
//           category: book.category?.name || book.category || "Uncategorized",
//           price: book.price ? `$${book.price}` : "Price not available",
//           publishedYear: book.publishedYear || "Year not available",
//           image: imageUrl, // Use the properly extracted image URL
//           addedAt: new Date(wishlistItem.addedAt).toLocaleDateString()
//         };
//       });

//       setBooks(formattedBooks);
//       console.log(formattedBooks, "formattedBooks");
      
//     } catch (error) {
//       console.error("Error fetching wishlist:", error);
      
//       if (error.response?.status === 401) {
//         setAlert({
//           open: true,
//           message: "Authentication failed. Please log in again.",
//           severity: "error"
//         });
//       } else {
//         setAlert({
//           open: true,
//           message: "Failed to load wishlist. Please try again later.",
//           severity: "error"
//         });
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to remove book from wishlist
//   const removeFromWishlist = async (wId, bookTitle, event) => {
//     // Prevent the click from bubbling up to the parent (book card)
//     event.stopPropagation();
    
//     if (!wId) {
//       setAlert({
//         open: true,
//         message: "Error: Missing wishlist ID",
//         severity: "error"
//       });
//       return;
//     }
    
//     try {
//       setLoading(true);
      
//       const authToken = localStorage.getItem("authToken");
      
//       if (!authToken) {
//         setAlert({
//           open: true,
//           message: "Please log in to remove items from your wishlist",
//           severity: "warning"
//         });
//         setLoading(false);
//         return;
//       }

//       // Method 1: Using DELETE with params
//       await axios.delete(
//         `${process.env.REACT_APP_BASE_URL}/user/wishlist/delete/${wId}`,
//         {
//           headers: {
//             Authorization: authToken,
//             "Content-Type": "application/json"
//           }
//         }
//       );
      
//       // Remove book from local state
//       setBooks(books.filter(book => book.wId !== wId));
      
//       // Show success message
//       setAlert({
//         open: true,
//         message: `"${bookTitle}" has been removed from your wishlist`,
//         severity: "success"
//       });
      
//     } catch (error) {
//       console.error("Error removing from wishlist:", error);
      
//       const errorMessage = error.response?.data?.message || "Failed to remove item. Please try again later.";
      
//       setAlert({
//         open: true,
//         message: errorMessage,
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
//     ? books.filter(book => book.category.toLowerCase() === activeCategory.toLowerCase())
//     : books;

//   // Display all books if filtered list is empty
//   const displayBooks = filteredBooks.length > 0 ? filteredBooks : books;

//   // Function to dismiss alert
//   const handleDismissAlert = () => {
//     setAlert({ open: false, message: "", severity: "" });
//   };

//   // Function to handle image errors
//   const handleImageError = (e) => {
//     e.target.src = blogImg1; // Fallback to default image
//   };

//   // Scroll horizontally through categories
//   const scrollCategories = (direction) => {
//     if (categoryRef.current) {
//       const scrollAmount = direction === 'left' ? -200 : 200;
//       categoryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
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
//           <button className="alert-close" onClick={handleDismissAlert}>×</button>
//         </div>
//       )}

//       <div className="discover-wrap">
//         <h2 className="main-heading">Your Wishlist</h2>

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
//               {categories.map((category, index) => (
//                 <li
//                   key={index}
//                   className={`filter-item ${activeCategory === category ? "active" : ""}`}
//                   onClick={() => setActiveCategory(category)}
//                 >
//                   {category.toUpperCase()}
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
//           <div className="loading">Loading wishlist...</div>
//         ) : (
//           <>
//             <div className="book-list">
//               {displayBooks.length === 0 ? (
//                 <div className="no-books-message">
//                   <p>Your wishlist is empty. Discover books to add to your collection!</p>
//                   <Button 
//                     title="Discover Books" 
//                     name="discover" 
//                     onClick={() => navigate("/store")} 
//                   />
//                 </div>
//               ) : (
//                 displayBooks.map((book) => (
//                   <div
//                     className="book-card"
//                     key={book.id}
//                     onClick={() => navigate(`/book-info/${book.id}`)}
//                   >
//                     <div className="book-image-container">
//                       <img 
//                         src={book.image} 
//                         alt={book.title} 
//                         className="book-image" 
//                         onError={handleImageError}
//                       />
//                     </div>
//                     <div className="book-details">
//                       <h5 className="book-title">{book.title}</h5>
//                       <p className="book-author">{book.author}</p>
//                       <p className="book-price">{book.price}</p>
//                       <p className="book-year">{book.publishedYear}</p>
//                       <p className="book-added">Added: {book.addedAt}</p>
//                       <p className="book-isbn">ISBN: {book.isbn}</p>
//                     </div>
//                     <button 
//                       className="remove-button"
//                       onClick={(e) => removeFromWishlist(book.wId, book.title, e)}
//                     >
//                       Remove from Wishlist
//                     </button>
//                   </div>
//                 ))
//               )}
//             </div>

//             {displayBooks.length > 0 && (
//               <div className="btn-wrap">
//                 <Button
//                   title="Discover More Books"
//                   name="more"
//                   onClick={() => navigate("/store")}
//                   className="discover-more-btn"
//                 />
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Addwishlist;

import { useState, useEffect, useRef } from "react";
import "../../home/style/DiscoverBook.css";

import Button from "../../buttons/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import blogImg1 from '../../home/images/discover-book1.jpg';

const Addwishlist = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("New Releases");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: "", severity: "" });
  const categoryRef = useRef(null);

  // Define categories for filter
  const categories = ["New Releases", "Fiction", "Non-Fiction", "Science", "History"];

  const fetchBooks = async () => {
    try {
      setLoading(true);
      
      // Get authToken from localStorage
      const authToken = localStorage.getItem("authToken");
      
      if (!authToken) {
        setAlert({
          open: true,
          message: "Please log in to view your wishlist",
          severity: "warning"
        });
        setLoading(false);
        return;
      }
      
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/wishlist/getByUser`,
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json"
          }
        }
      );

      const wishlistItems = Array.isArray(response.data?.data)
        ? response.data.data
        : [];
      console.log(wishlistItems, "wishlistItems");
      
      const formattedBooks = wishlistItems.map((wishlistItem) => {
        // Access the book object from the wishlist item
        const book = wishlistItem.book;
        
        // Get the correct image URL from the book object
        // Making sure to handle all possible data structures
        let imageUrl = blogImg1; // Default fallback image
        
        if (book.image && typeof book.image === 'object' && book.image.url) {
          // Case 1: API returns image as object with url property
          imageUrl = book.image.url;
        } else if (typeof book.image === 'string') {
          // Case 2: API returns image as direct string URL
          imageUrl = book.image;
        }
        
        return {
          id: book._id,
          wId: wishlistItem._id, // Store the wishlist item ID if needed
          title: book.title || "Untitled",
          author: book.author || "Unknown Author",
          description: book.description || "No description available.",
          isbn: book.isbn || "No ISBN Available",
          category: book.category?.name || book.category || "Uncategorized",
          price: book.price ? `${book.price}` : "Price not available",
          publishedYear: book.publishedYear || "Year not available",
          image: imageUrl, // Use the properly extracted image URL
          addedAt: new Date(wishlistItem.addedAt).toLocaleDateString()
        };
      });

      setBooks(formattedBooks);
      console.log(formattedBooks, "formattedBooks");
      
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      
      if (error.response?.status === 401) {
        setAlert({
          open: true,
          message: "Authentication failed. Please log in again.",
          severity: "error"
        });
      } else {
        setAlert({
          open: true,
          message: "Failed to load wishlist. Please try again later.",
          severity: "error"
        });
      }
    } finally {
      setLoading(false);
    }
  };

  // Function to remove book from wishlist
  const removeFromWishlist = async (wId, bookTitle, event) => {
    // Prevent the click from bubbling up to the parent (book card)
    event.stopPropagation();
    
    if (!wId) {
      setAlert({
        open: true,
        message: "Error: Missing wishlist ID",
        severity: "error"
      });
      return;
    }
    
    try {
      setLoading(true);
      
      const authToken = localStorage.getItem("authToken");
      
      if (!authToken) {
        setAlert({
          open: true,
          message: "Please log in to remove items from your wishlist",
          severity: "warning"
        });
        setLoading(false);
        return;
      }

      // Method 1: Using DELETE with params
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/user/wishlist/delete/${wId}`,
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json"
          }
        }
      );
      
      // Remove book from local state
      setBooks(books.filter(book => book.wId !== wId));
      
      // Show success message
      setAlert({
        open: true,
        message: `"${bookTitle}" has been removed from your wishlist`,
        severity: "success"
      });
      
    } catch (error) {
      console.error("Error removing from wishlist:", error);
      
      const errorMessage = error.response?.data?.message || "Failed to remove item. Please try again later.";
      
      setAlert({
        open: true,
        message: errorMessage,
        severity: "error"
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
    ? books.filter(book => book.category.toLowerCase() === activeCategory.toLowerCase())
    : books;

  // Display all books if filtered list is empty
  const displayBooks = filteredBooks.length > 0 ? filteredBooks : books;

  // Function to dismiss alert
  const handleDismissAlert = () => {
    setAlert({ open: false, message: "", severity: "" });
  };

  // Function to handle image errors
  const handleImageError = (e) => {
    e.target.src = blogImg1; // Fallback to default image
  };

  // Scroll horizontally through categories
  const scrollCategories = (direction) => {
    if (categoryRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      categoryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Handle "All Books" category option
  const handleAllBooksClick = () => {
    setActiveCategory(null);
  };

  return (
    <div className="discover-container">
      {alert.open && (
        <div className={`alert alert-${alert.severity}`}>
          {alert.message}
          <button className="alert-close" onClick={handleDismissAlert}>×</button>
        </div>
      )}

      <div className="discover-wrap">
        <h2 className="main-heading">Your Wishlist</h2>

        {/* <div className="category-filter-container">
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
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`filter-item ${activeCategory === category ? "active" : ""}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category.toUpperCase()}
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
        </div> */}

        {loading ? (
          <div className="loading">Loading wishlist...</div>
        ) : (
          <>
            <div className="book-list">
              {displayBooks.length === 0 ? (
                <div className="no-books-message">
                  <p>Your wishlist is empty. Discover books to add to your collection!</p>
                  <Button 
                    title="Discover Books" 
                    name="discover" 
                    onClick={() => navigate("/store")} 
                  />
                </div>
              ) : (
                displayBooks.map((book) => (
                  <div
                    className="book-card"
                    key={book.id}
                    onClick={() => navigate(`/book-info/${book.id}`)}
                  >
                    <div className="book-image-container">
                      <img 
                        src={book.image} 
                        alt={book.title} 
                        className="book-image" 
                        onError={handleImageError}
                      />
                    </div>
                    <div className="book-details">
                      <h5 className="book-title">{book.title}</h5>
                      <p className="book-author">{book.author}</p>
                      <p className="book-price">{book.price}</p>
                      <p className="book-year">{book.publishedYear}</p>
                      <p className="book-added">Added: {book.addedAt}</p>
                      <p className="book-isbn">ISBN: {book.isbn}</p>
                    </div>
                    <button 
                      className="remove-button"
                      onClick={(e) => removeFromWishlist(book.wId, book.title, e)}
                    >
                      Remove from Wishlist
                    </button>
                  </div>
                ))
              )}
            </div>

            {displayBooks.length > 0 && (
              <div className="btn-wrap">
                <Button
                  title="Discover More Books"
                  name="more"
                  onClick={() => navigate("/store")}
                  className="discover-more-btn"
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Addwishlist;