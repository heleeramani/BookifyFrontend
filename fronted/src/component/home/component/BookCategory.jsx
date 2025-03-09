import React from "react";
import "../../home/style/BookCategories.css";
import dramaimage from "../../home/images/dramaimage.jpg";
import mystry from "../../home/images/mystry.jpg";
import novels from "../../home/images/novels.jpg";
import receipe from "../../home/images/receipe.jpg";
import Button from "../../buttons/Button";
import { useNavigate } from "react-router-dom";

const BookCategory = () => {
  const navigate = useNavigate();
  const categories = [
    { name: "Drama", count: 15, image: dramaimage },
    { name: "Mystery", count: 3, image: mystry },
    { name: "Novels", count: 11, image: novels },
    { name: "Recipe Books", count: 4, image: receipe },
  ];

  return (
    <div className="book-categories">
      <div className="inner-category">
        <h1>Choose Your Book!</h1>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.image} alt={category.name} />
              <h2>
                {category.name} <span>({category.count})</span>
              </h2>
            </div>
          ))}
        </div>
          <div className="btn-wrap">
            <Button title="Discover More Categories" name="more" onClick={() => navigate("/store")} />
          </div>
      </div>
    </div>
  );
};

export default BookCategory;
