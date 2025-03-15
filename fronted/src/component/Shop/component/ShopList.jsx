// import React from "react";
// import "../style/ShopList.css"; // Import CSS for styling
// import Discover1 from "../../home/component/DiscoverBook";

// const books = [
//   {
//     id: 1,
//     title: "A Doctor in the House",
//     author: "Candy Carson",
//     rating: 5,
//     price: "$6.50 - $16.99",
//     image: '../../home/component/DiscoverBook',
//   },
//   {
//     id: 2,
//     title: "Design of the 20th Century",
//     author: "Carol Foster",
//     rating: 4,
//     price: "$10.99 - $20.00",
//     image: "https://via.placeholder.com/200x280",
//   },
//   {
//     id: 3,
//     title: "New Galaxy",
//     author: "Richard Mann",
//     rating: 5,
//     price: "$7.90 - $16.90",
//     image: "https://via.placeholder.com/200x280",
//   },
//   {
//     id: 4,
//     title: "The Long Road to Deep Silence",
//     author: "Richard Mann",
//     rating: 4,
//     price: "$12.00 - $22.00",
//     image: "https://via.placeholder.com/200x280",
//   },
//   {
//     id: 5,
//     title: "Burt Geller",
//     author: "Unknown Author",
//     rating: 3,
//     price: "$8.99 - $14.50",
//     image: "https://via.placeholder.com/200x280",
//   },
// ];

// const BookList = () => {
//   return (
//     <div className="book-list">
//       {books.map((book) => (
//         <div key={book.id} className="book-card">
//           <img src={book.image} alt={book.title} className="book-image" />
//           <h3 className="book-title">{book.title}</h3>
//           <p className="book-author">{book.author}</p>
//           <div className="book-rating">
//             {"★".repeat(book.rating)}
//             {"☆".repeat(5 - book.rating)}
//           </div>
//           <p className="book-price">{book.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookList;

import React, { useState, useEffect } from "react";
import "../../home/style/DiscoverBook.css";
// import Discover1 from "../images/discover-book1.jpg";
import Button from "../../buttons/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import blogImg1 from "../../home/images/discover-book1.jpg";
import PageTile from "../../pageTile/PageTile";

const ShopList = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("New Releases");
  // const filteredBooks = booksData.filter(book => book.category === activeCategory);
  const [book, setBook] = useState([]);

  const fetchBook = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/book/getAll`
      );
      const bookArray = Array.isArray(response.data?.data)
        ? response.data.data
        : [];
      console.log("response", response?.data?.data);

      // Check if response.data is an array or wrapped inside another object
      // const blogArray = Array.isArray(response.data)
      //   ? response.data
      //   : response.data?.data || [];
      // console.log(blogArray, "shhrreeee");

      // const formattedBlogs = blogArray.map((book) => ({
      //   ...book,
      //   id: book._id,
      //   image: book.image ? book.image.url : "" // Check if image exists // Ensure DataGrid has an id
      // }));

      const formattedBooks = bookArray.map((book) => ({
        id: book._id,
        title: book.title || "Untitled",

        description: book.description || "No description available.",
        isbn: book.isbn || "No isbn Available",
        category: book.category || book.category.name,
        price: book.price || "undefined",
        publishedYear: book.publishedYear || "Not",
        image: book.image ? book.image.url : blogImg1, // Use default image if missing
      }));
      console.log(formattedBooks, "hellllll");

      setBook(formattedBooks);
      console.log(book, "bloggggg");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <PageTile
        title="Shop"
        breadcrumbs={[
          { label: "Home", link: "/", active: false },
          { label: "About Us", active: true },
        ]}
      />
      <div className="discover-container">
        <div className="discover-wrap">
          <h2 className="main-heading">Discover Your Next Book</h2>
          <div className="category-filter">
            <ul className="filter-nav">
              {/* {categories.map((category, index) => (
              <li
                key={index}
                className={`filter-item ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </li>
            ))} */}
            </ul>
          </div>
          <div className="book-list">
            {book.map(
              (
                book // Show only the first 5 books
              ) => (
                <div
                  className="book-card"
                  key={book.id}
                  onClick={() => navigate(`/book-info/${book.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="book-image"
                  />
                  <h5 className="book-title">{book.title}</h5>
                  <p className="book-author">{book.author}</p>
                  <p className="book-price">{book.price}</p>
                  <p className="book-author">{book.publishedYear}</p>
                  <p
                    className="book-description"
                    data-full-description={book.description}
                  >
                    {book.description}
                  </p>
                  <p className="book-author">
                    <b>ISBN:</b> {book.isbn}
                  </p>
                </div>
              )
            )}
          </div>

          {/* <div className="btn-wrap">
          <Button
            title="Discover Your Book"
            name="more"
            onClick={() => navigate("/store")}
          />
        </div> */}
        </div>
      </div>
    </>
  );
};

export default ShopList;
