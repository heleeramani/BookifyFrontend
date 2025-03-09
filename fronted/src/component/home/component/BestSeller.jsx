import React from "react";
import "../style/BestSeller.css";
import BestSeller1 from "../images/discover-book1.jpg";
import Button from "../../buttons/Button";

const BestSeller = () => {
  const featuredBook = {
    id: 1,
    image: BestSeller1,
    title: "A Banquet of Mouse",
    subtitle: "It's just a book template | Read Book",
    author: "Richard Mann",
    description:
      "This delightful book is the latest in the series of Ladybird books which have been specially planned to help grown-ups with the world about them...",
    price: 14.99,
  };

  const newBooks = [
    {
      id: 1,
      image: BestSeller1,
      title: "The Strings of Murders",
      price: 36.0,
    },
    {
      id: 2,
      image: BestSeller1, // Replace with actual image
      title: "Only We Know",
      price: 42.0,
    },
    {
      id: 3,
      image: BestSeller1, // Replace with actual image
      title: "Antony & Cleopatra",
      price: 58.0,
    },
  ];

  return (
    <>
      <div className="main">
        <div className="app-container">
          <h1 className="section-title">Featured Bestsellers</h1>
          <div className="featured-book">
            <div className="featured-image">
              <img src={featuredBook.image} alt={featuredBook.title} />
            </div>
            <div className="featured-details">
              <h3 className="book-subtitle">{featuredBook.subtitle}</h3>
              <h2 className="book-title">{featuredBook.title}</h2>
              <p className="book-author">Author: {featuredBook.author}</p>
              <p className="book-description">{featuredBook.description}</p>
              <p className="book-price">
                Price: ${featuredBook.price.toFixed(2)}
              </p>
              <Button title="Shop Online" />
            </div>
          </div>
        </div>
        <div className="second-container">
          <h2 className="section-title">What's New</h2>
          <div className="new-books-list">
            {newBooks.map((book) => (
              <div className="new-book-item" key={book.id}>
                <img
                  src={book.image}
                  alt={book.title}
                  className="new-book-image"
                />
                <div className="inner-sub-text">
                  <h4 className="new-book-title">{book.title}</h4>
                  <p className="new-book-price">${book.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="anchor">
          <a href="#">View More</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
