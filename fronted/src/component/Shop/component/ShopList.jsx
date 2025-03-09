import React from "react";
import "../style/ShopList.css"; // Import CSS for styling
import Discover1 from "../../home/component/DiscoverBook";

const books = [
  {
    id: 1,
    title: "A Doctor in the House",
    author: "Candy Carson",
    rating: 5,
    price: "$6.50 - $16.99",
    image: '../../home/component/DiscoverBook',
  },
  {
    id: 2,
    title: "Design of the 20th Century",
    author: "Carol Foster",
    rating: 4,
    price: "$10.99 - $20.00",
    image: "https://via.placeholder.com/200x280",
  },
  {
    id: 3,
    title: "New Galaxy",
    author: "Richard Mann",
    rating: 5,
    price: "$7.90 - $16.90",
    image: "https://via.placeholder.com/200x280",
  },
  {
    id: 4,
    title: "The Long Road to Deep Silence",
    author: "Richard Mann",
    rating: 4,
    price: "$12.00 - $22.00",
    image: "https://via.placeholder.com/200x280",
  },
  {
    id: 5,
    title: "Burt Geller",
    author: "Unknown Author",
    rating: 3,
    price: "$8.99 - $14.50",
    image: "https://via.placeholder.com/200x280",
  },
];

const BookList = () => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.image} alt={book.title} className="book-image" />
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
          <div className="book-rating">
            {"★".repeat(book.rating)}
            {"☆".repeat(5 - book.rating)}
          </div>
          <p className="book-price">{book.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
