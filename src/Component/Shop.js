import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './HomePage.css';

const Shop = () => {
  return (
    <div className="shop-page">
      <Navbar />
      <style>
        
      </style>

      <main>
  <div className="shop-header-center">
    <h1>Explore All Books Here</h1>
    <div className="filters">
      <label className="filter-option">
        <input type="checkbox" checked readOnly />
        <span>All</span>
      </label>
      <label className="filter-option">
        <input type="checkbox" readOnly />
        <span>Novel</span>
      </label>
      <label className="filter-option">
        <input type="checkbox" readOnly />
        <span>Translations</span>
      </label>
      <label className="filter-option">
        <input type="checkbox" readOnly />
        <span>Kids' Stories</span>
      </label>
    </div>
  </div>

        <div className="book-grid">
          {/* Row 1 */}
          <div className="book-card">
            <img
              src="https://m.media-amazon.com/images/I/41KM5Ox6nZL._SY445_SX342_.jpg"
              alt="Moby-Dick"
              className="book-image"
            />
            <h3>Moby-Dick</h3>
            <p className="author">Herman Melville</p>
            <p className="price">Rs. 350/-</p>
            <button className="add-to-cart">
              <span className="cart-icon">🛒</span> Add to Cart
            </button>
          </div>

          <div className="book-card">
            <img
              src="https://m.media-amazon.com/images/I/41bJBgkuW8L._SY445_SX342_.jpg"
              alt="Kafka on the Shore"
              className="book-image"
            />
            <h3>Kafka on the Shore</h3>
            <p className="author">Haruki Murakami</p>
            <p className="price">Rs. 450/-</p>
            <button className="add-to-cart">
              <span className="cart-icon">🛒</span> Add to Cart
            </button>
          </div>

          <div className="book-card">
            <img
              src="https://m.media-amazon.com/images/I/51KEJAS5ABL._SY445_SX342_.jpg"
              alt="A Fine Balance"
              className="book-image"
            />
            <h3>A Fine Balance</h3>
            <p className="author">Rohinton Mistry</p>
            <p className="price">Rs. 400/-</p>
            <button className="add-to-cart">
              <span className="cart-icon">🛒</span> Add to Cart
            </button>
          </div>

          <div className="book-card">
            <img
              src="https://m.media-amazon.com/images/I/51bLFdWZePL._SY445_SX342_.jpg"
              alt="The Book Thief"
              className="book-image"
            />
            <h3>The Book Thief</h3>
            <p className="author">Markus Zusak</p>
            <p className="price">Rs. 380/-</p>
            <button className="add-to-cart">
              <span className="cart-icon">🛒</span> Add to Cart
            </button>
          </div>

          {/* Row 2 */}
          <div className="book-card">
            <img
              src="https://m.media-amazon.com/images/I/51wbVQTpTgL._SY445_SX342_.jpg"
              alt="David Copperfield"
              className="book-image"
            />
            <h3>David Copperfield</h3>
            <p className="author">Charles Dickens</p>
            <p className="price">Rs. 320/-</p>
            <button className="add-to-cart">
              <span className="cart-icon">🛒</span> Add to Cart
            </button>
          </div>

          <div className="book-card">
            <img
              src="https://m.media-amazon.com/images/I/51Ga5GuElyL._SY445_SX342_.jpg"
              alt="In Custody"
              className="book-image"
            />
            <h3>In Custody</h3>
            <p className="author">Anita Desai</p>
            <p className="price">Rs. 290/-</p>
            <button className="add-to-cart">
              <span className="cart-icon">🛒</span> Add to Cart
            </button>
          </div>

          <div className="book-card">
            <img
              src="https://m.media-amazon.com/images/I/51AV9fPXLfL._SY445_SX342_.jpg"
              alt="The God of Small Things"
              className="book-image"
            />
            <h3>The God of Small Things</h3>
            <p className="author">Arundhati Roy</p>
            <p className="price">Rs. 370/-</p>
            <button className="add-to-cart">
              <span className="cart-icon">🛒</span> Add to Cart
            </button>
          </div>

          <div className="book-card">
            <img
              src="https://m.media-amazon.com/images/I/51Ib1OvpIeL._SY445_SX342_.jpg"
              alt="The Inheritance of Loss"
              className="book-image"
            />
            <h3>The Inheritance of Loss</h3>
            <p className="author">Kiran Desai</p>
            <p className="price">Rs. 340/-</p>
            <button className="add-to-cart">
              <span className="cart-icon">🛒</span> Add to Cart
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;