import React from "react";
import "../style/Category.css";
import Category1 from "../image/discover-book1.jpg";
import { useEffect, useState } from "react";

const Category = () => {
  const categories = [
    "All Categories",
    "Uncategorized",
    "Drama",
    "Mystery",
    "Novels",
    "Recipe Books",
  ];

  const authors = [
    "Burt Geller",
    "Candy Carson",
    "Drew Berrymore",
    "Karen Perry",
    "Jessica Ford",
    "Ken Clark",
    "Linda Hamilton",
    "Maria Lopez",
  ];

  const formats = ["Online Book", "Paper Book"];

  const products = [
    {
      id: 1,
      image: Category1,
      title: "A Doctor in the House",
      author: "Candy Carson",
      price: "$8.50 - $16.99",
    },
    {
      id: 2,
      image: Category1,
      title: "Wildflower",
      author: "Drew Angerer",
      price: "$10.99 - $20.00",
    },
    {
      id: 3,
      image: Category1,
      title: "New Galaxy",
      author: "Allan Green",
      price: "$7.50 - $16.99",
    },
    {
      id: 4,
      image: Category1,
      title: "New Galaxy",
      author: "Allan Green",
      price: "$7.50 - $16.99",
    },
  ];

  return (
    <div className="main-category-sec">
      {/* Main Content */}
      <div className="container">
        {/* Products Section */}
        <main className="products">
          <div className="product-toolbar">
            <p>Showing 1–12 of 22 results</p>
            <select>
              <option>Sort by Default</option>
              <option>Sort by Popularity</option>
              <option>Sort by Price</option>
            </select>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h4>{product.title}</h4>
                <p>{product.author}</p>
                <p className="price">{product.price}</p>
              </div>
            ))}
          </div>
        </main>
        <div className="sidebar-filter">
          <h3>Category</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <a href="#">{category}</a>
              </li>
            ))}
          </ul>

          <h3>Author</h3>
          <ul>
            {authors.map((author, index) => (
              <li key={index}>
                <input type="checkbox" id={`author${index}`} />
                <label htmlFor={`author${index}`}> {author}</label>
              </li>
            ))}
          </ul>

          <h3>Format</h3>
          <ul>
            {formats.map((format, index) => (
              <li key={index}>
                <input type="checkbox" id={`format${index}`} />
                <label htmlFor={`format${index}`}> {format}</label>
              </li>
            ))}
          </ul>

          <h3>Price</h3>
          <input type="range" min="0" max="100" />
        </div>
      </div>
    </div>
  );
};

export default Category;
