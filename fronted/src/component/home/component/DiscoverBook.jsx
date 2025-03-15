// import React, { useState } from "react";
// import "../style/DiscoverBook.css";
// import Discover1 from '../images/discover-book1.jpg';
// import Button from "../../buttons/Button";
// import { useNavigate } from "react-router-dom";

// const booksData = [
//   { id: 1, category: "New Releases", title: "A Banquet of Mouse", author: "Richard Mann", price: "$12.00 – $18.00", image: Discover1 },
//   { id: 2, category: "New Releases", title: "A Doctor in the House", author: "Candy Carson", price: "$6.50 – $16.99", image: Discover1 },
//   { id: 3, category: "New Releases", title: "Antony & Cleopatra", author: "Ken Clark", price: "$58.00", image: Discover1 },
//   { id: 4, category: "New Releases", title: "Brooklyn", author: "Jessica Ford", price: "$16.00", image: Discover1 },
//   { id: 5, category: "New Releases", title: "But Enough About Me", author: "Burt Reynolds", price: "$37.00", image: Discover1 },
//   { id: 6, category: "Best Sellers", title: "Hidden Figures", author: "Margot Lee Shetterly", price: "$25.00", image: Discover1 },
//   { id: 7, category: "Best Sellers", title: "The Martian", author: "Andy Weir", price: "$30.00", image: Discover1 },
//   { id: 8, category: "Award Winners", title: "The Night Circus", author: "Erin Morgenstern", price: "$22.50", image: Discover1 },
//   { id: 9, category: "Award Winners", title: "The Goldfinch", author: "Donna Tartt", price: "$29.00", image: Discover1 },
//   { id: 10, category: "Coming Soon", title: "The Silent Patient", author: "Alex Michaelides", price: "$19.99", image: Discover1 }
// ];

// const categories = ["New Releases", "Best Sellers", "Award Winners", "Coming Soon"];

// const DiscoverBook = () => {
//   const navigate = useNavigate();
//   const [activeCategory, setActiveCategory] = useState("New Releases");
//   const filteredBooks = booksData.filter(book => book.category === activeCategory);

//   return (
//     <div className="discover-container">
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
//         <div className="book-list">
//           {filteredBooks.map(book => (
//             <div className="book-card" key={book.id}>
//               <img src={book.image} alt={book.title} className="book-image" />
//               <h5 className="book-title">{book.title}</h5>
//               <p className="book-author">{book.author}</p>
//               <p className="book-price">{book.price}</p>
//             </div>
//           ))}
//         </div>
//         <div className="btn-wrap">
//           <Button title="Discover Your Book" name="more" onClick={() => navigate("/store")}/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DiscoverBook;

import React, { useState, useEffect } from "react";
import "../style/DiscoverBook.css";

import Button from "../../buttons/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import blogImg1 from "../images/discover-book1.jpg";

const DiscoverBook = () => {
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
    // console.log(book, "skjcskhc");
  }, []);

  return (
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
  {book.slice(0, 5).map((book) => ( // Show only the first 5 books
    <div
      className="book-card"
      key={book.id}
      onClick={() => navigate(`/book-info/${book.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img src={book.image} alt={book.title} className="book-image" />
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
  ))}
</div>

        <div className="btn-wrap">
          <Button
            title="Discover Your Book"
            name="more"
            onClick={() => navigate("/store")}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscoverBook;
