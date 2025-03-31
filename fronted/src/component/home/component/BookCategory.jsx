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


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../../home/style/BookCategories.css";
// import dramaimage from "../../home/images/dramaimage.jpg";
// import mystry from "../../home/images/mystry.jpg";
// import novels from "../../home/images/novels.jpg";
// import receipe from "../../home/images/receipe.jpg";
// import Button from "../../buttons/Button";
// import { useNavigate } from "react-router-dom";

// const BookCategory = () => {
//   const navigate = useNavigate();
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fallback images mapping
//   const categoryImages = {
//     "Drama": dramaimage,
//     "Mystery & Thriller": mystry,
//     "Mystery": mystry,
//     "Fiction": novels,
//     "Novel": novels,
//     "Novels": novels,
//     "Cooking & Food": receipe,
//     "Recipe Books": receipe,
//   };

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const authToken = localStorage.getItem("authToken");
//         if (!authToken) {
//           throw new Error("Authentication token not found");
//         }

//         setLoading(true);
        
//         // Fetch categories data
//         const response = await axios.get(
//           `${process.env.REACT_APP_BASE_URL}/user/category/get`,
//           {
//             headers: {
//               "Authorization": authToken,
//             },
//           }
//         );

//         if (!response.data.success) {
//           throw new Error(response.data.message || "Failed to fetch categories");
//         }

//         // Extract categories from the response
//         const categoriesData = response.data.data || [];
        
//         // Getting book counts for each category (optional)
//         const booksResponse = await axios.get(
//           `${process.env.REACT_APP_BASE_URL}/user/books/get`,
//           {
//             headers: {
//               "Authorization": authToken,
//             },
//           }
//         );
        
//         // Count books by category
//         const categoryCounts = {};
//         if (booksResponse.data.success) {
//           const books = booksResponse.data.data || [];
//           books.forEach(book => {
//             if (book.category) {
//               categoryCounts[book.category] = (categoryCounts[book.category] || 0) + 1;
//             }
//           });
//         }
        
//         // Map the API category data to our component's format
//         const processedCategories = categoriesData.map(category => ({
//           name: category.name,
//           count: categoryCounts[category.name] || 0,
//           image: categoryImages[category.name] || novels // Default to novels image if no match
//         }));
        
//         setCategories(processedCategories);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//         setError(err.message || "Failed to load categories. Please try again later.");
//         setLoading(false);
        
//         // Fallback to default categories if API fails
//         setCategories([
//           { name: "Drama", count: 15, image: dramaimage },
//           { name: "Mystery", count: 3, image: mystry },
//           { name: "Novels", count: 11, image: novels },
//           { name: "Recipe Books", count: 4, image: receipe },
//         ]);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div className="book-categories">
//       <div className="inner-category">
//         <h1>Choose Your Book!</h1>
        
//         {loading && <p className="loading-text">Loading categories...</p>}
        
//         {error && <p className="error-message">{error}</p>}
        
//         <div className="categories-grid">
//           {categories.slice(0, 4).map((category, index) => (
//             <div 
//               key={index} 
//               className="category-card"
//               onClick={() => navigate(`/store?category=${encodeURIComponent(category.name)}`)}
//             >
//               <img 
//                 src={category.image} 
//                 alt={category.name}
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = novels; // Fallback to novels image if load fails
//                 }}
//               />
//               <h2>
//                 {category.name} <span>({category.count})</span>
//               </h2>
//             </div>
//           ))}
//         </div>
        
//         <div className="btn-wrap">
//           <Button title="Discover More Categories" name="more" onClick={() => navigate("/store")} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookCategory;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../../home/style/BookCategories.css";
// import dramaimage from "../../home/images/dramaimage.jpg";
// import mystry from "../../home/images/mystry.jpg";
// import novels from "../../home/images/novels.jpg";
// import receipe from "../../home/images/receipe.jpg";
// import Button from "../../buttons/Button";
// import { useNavigate } from "react-router-dom";

// const BookCategory = () => {
//   const navigate = useNavigate();
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fallback images mapping
//   const categoryImages = {
//     "Drama": dramaimage,
//     "Mystery & Thriller": mystry,
//     "Mystery": mystry,
//     "Fiction": novels,
//     "Novel": novels,
//     "Novels": novels,
//     "Cooking & Food": receipe,
//     "Recipe Books": receipe,
//     "Comics": novels,
//     "Comics & Graphic Novels": novels,
//     "Poetry": novels,
//     "Horror": mystry,
//     "Romance": novels,
//     "Adventure": novels,
//     "Non-Fiction": novels,
//     "Travel & Adventure": novels,
//     "History": novels,
//     "Short Stories": novels,
//     "Biography & Autobiography": novels,
//     "Religion & Spirituality": novels,
//     "Fantasy": novels,
//     "Self-Help": novels,
//     "Education & Academic": novels,
//     "Health & Fitness": novels,
//     "Philosophy": novels,
//     "Science Fiction": novels,
//     "Children's Books": novels
//   };

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const authToken = localStorage.getItem("authToken");
//         if (!authToken) {
//           throw new Error("Authentication token not found");
//         }

//         setLoading(true);
        
//         // Fetch categories data
//         const response = await axios.get(
//           `${process.env.REACT_APP_BASE_URL}/user/category/get`,
//           {
//             headers: {
//               "Authorization": authToken,
//             },
//           }
//         );

//         if (!response.data.success) {
//           throw new Error(response.data.message || "Failed to fetch categories");
//         }

//         // Extract categories from the response
//         const categoriesData = response.data.data || [];
        
//         // Process categories with default count (we're not fetching from books API)
//         const processedCategories = categoriesData.map(category => ({
//           name: category.name,
//           count: 0, // Since we're not fetching book counts
//           image: categoryImages[category.name] || novels // Default to novels image if no match
//         }));
        
//         setCategories(processedCategories);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//         setError(err.message || "Failed to load categories. Please try again later.");
//         setLoading(false);
        
//         // Fallback to default categories if API fails
//         setCategories([
//           { name: "Drama", count: 15, image: dramaimage },
//           { name: "Mystery", count: 3, image: mystry },
//           { name: "Novels", count: 11, image: novels },
//           { name: "Recipe Books", count: 4, image: receipe },
//         ]);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div className="book-categories">
//       <div className="inner-category">
//         <h1>Choose Your Book!</h1>
        
//         {loading && <p className="loading-text">Loading categories...</p>}
        
//         {error && <p className="error-message">{error}</p>}
        
//         <div className="categories-grid">
//           {categories.slice(0, 4).map((category, index) => (
//             <div 
//               key={index} 
//               className="category-card"
//               onClick={() => navigate(`/store?category=${encodeURIComponent(category.name)}`)}
//             >
//               <img 
//                 src={category.image} 
//                 alt={category.name}
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = novels; // Fallback to novels image if load fails
//                 }}
//               />
//               <h2>
//                 {category.name} <span>({category.count})</span>
//               </h2>
//             </div>
//           ))}
//         </div>
        
//         <div className="btn-wrap">
//           <Button title="Discover More Categories" name="more" onClick={() => navigate("/store")} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookCategory;