import React from "react";
import "../style/Addwishlist.css";
import AddWishlist1 from "../images/addwishlistbook.jpg";



const products = [
  {
    id: 1,
    image: AddWishlist1,
    title: 'A Doctor in the House',
    author: 'Candy Carson',
    price: '$8.50 - $16.99',
  },
  {
    id: 2,
    image: AddWishlist1,
    title: 'Wildflower',
    author: 'Drew Angerer',
    price: '$10.99 - $20.00',
  },
  {
    id: 3,
    image: AddWishlist1,
    title: 'New Galaxy',
    author: 'Allan Green',
    price: '$7.50 - $16.99',
  },
  {
    id: 4,
    image: AddWishlist1,
    title: 'New Galaxy',
    author: 'Allan Green',
    price: '$7.50 - $16.99',
  },
];

const AddWishlist = () => {
  return (
    <div className="shop">
      {/* Header Section */}
      {/* <header className="header">
        <h1>Shop</h1>
        <nav className="breadcrumb">
          <a href="#">Home</a> &gt; <a href="#">Shop</a>
        </nav>
      </header> */}

      {/* Hero Section */}
      {/* <section className="hero">
        <div className="hero-content">
          <h2>Inspire Daily Reading</h2>
          <p>Visit Our Blog and Page. Find Daily Inspiration Quotes from the Best Authors!</p>
          <a href="#" className="button">Visit Our Blog</a>
        </div>
      </section> */}

      {/* Main Content */}
      <div className="container1">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Category</h3>
          <ul>
            <li><a href="#">All Categories</a></li>
            <li><a href="#">Uncategorized</a></li>
            <li><a href="#">Drama</a></li>
            <li><a href="#">Mystery</a></li>
            <li><a href="#">Novels</a></li>
            <li><a href="#">Recipe Books</a></li>
          </ul>

          <h3>Author</h3>
          <ul>
            <li><input type="checkbox" id="author1" /><label htmlFor="author1"> Burt Geller</label></li>
            <li><input type="checkbox" id="author2" /><label htmlFor="author2"> Candy Carson</label></li>
            <li><input type="checkbox" id="author3" /><label htmlFor="author3"> Drew Berrymore</label></li>
            <li><input type="checkbox" id="author4" /><label htmlFor="author4"> Karen Perry</label></li>
          </ul>

          <h3>Format</h3>
          <ul>
            <li><input type="checkbox" id="format1" /><label htmlFor="format1"> Online Book</label></li>
            <li><input type="checkbox" id="format2" /><label htmlFor="format2"> Paper Book</label></li>
          </ul>

          <h3>Price</h3>
          <input type="range" min="0" max="100" />
        </aside>

        {/* Products Section */}
        <main className="products">
          <div className="product-toolbar">
            <p>Showing 1–12 of {products.length} results</p>
            <select>
              <option>Sort by Default</option>
              <option>Sort by Popularity</option>
              <option>Sort by Price</option>
            </select>
          </div>

          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product">
                <img src={product.imgSrc} alt={product.title} />
                <h4>{product.title}</h4>
                <p>{product.author}</p>
                <p className="price">{product.price}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddWishlist;
