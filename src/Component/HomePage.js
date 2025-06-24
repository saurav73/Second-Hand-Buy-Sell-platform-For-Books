import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import UsedBooksSection from './UsedBooksSection';
import NewCollection from './NewCollection';
import './HomePage.css';
import './UsedBooksSection.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      
      <section className="hero-section">
        <div className="overlay">
          <h1 className="fade-in">Welcome to Book Bridge</h1>
          <p className="fade-in delay-1">
            Connecting readers and book lovers across the world.
          </p>
          <div className="hero-actions fade-in delay-2">
            <input
              type="text"
              placeholder="Search a book..."
              className="hero-search"
            />
            <button className="join-button">Join Us</button>
          </div>
        </div>
      </section>

     
      <section className="best-picks fade-in delay-3">
        <h2>Our Best Picks</h2>
        <div className="book-grid">
        
          <div className="book-card">
            <img
              src="https://images.saymedia-content.com/.image/t_share/MTc0NDEzMzQ2ODY1NDI0MDA2/david-copperfield-by-charles-dickens-a-book-review.jpg"
              alt="David Copperfield"
              className="book-image"
            />
            <h3>David Copperfield</h3>
            <p>
              <strong>Author:</strong> Charles Dickens
            </p>
            <p>A coming-of-age story chronicling the life of David Copperfield.</p>
            <p className="price">$14.99</p>
            <button className="details-button">View Details</button>
          </div>

          <div className="book-card">
            <img
              src="https://images.saymedia-content.com/.image/t_share/MTgxMzEyODAwMDQ2NDU3OTU5/multiple-journeys-taken-by-deven-in-anita-desais-in-custody.jpg"
              alt="In Custody"
              className="book-image"
            />
            <h3>In Custody</h3>
            <p>
              <strong>Author:</strong> Anita Desai
            </p>
            <p>A teacher's literary journey with an aging Urdu poet.</p>
            <p className="price">$13.49</p>
            <button className="details-button">View Details</button>
          </div>

          <div className="book-card">
            <img
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669512309i/63849929.jpg"
              alt="It Ends With Us"
              className="book-image"
            />
            <h3>It Ends With Us</h3>
            <p>
              <strong>Author:</strong> Colleen Hoover
            </p>
            <p>A compelling tale of love, strength, and resilience.</p>
            <p className="price">$16.75</p>
            <button className="details-button">View Details</button>
          </div>

          <div className="book-card">
            <img
              src="https://www.bookishelf.com/wp-content/uploads/2020/01/Book-Review-The-Book-Thief-by-Markus-Zusak-scaled.jpg"
              alt="The Book Thief"
              className="book-image"
            />
            <h3>The Book Thief</h3>
            <p>
              <strong>Author:</strong> Markus Zusak
            </p>
            <p>A young girl's relationship with books during Nazi Germany.</p>
            <p className="price">$15.25</p>
            <button className="details-button">View Details</button>
          </div>
        </div>
      </section>

      <NewCollection />

      <UsedBooksSection />

      <Footer />
    </div>
  );
};

export default HomePage;
