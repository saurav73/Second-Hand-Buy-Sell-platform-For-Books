import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import UsedBooksSection from './UsedBooksSection';
import NewCollection from './NewCollection';
import './HomePage.css';
import './UsedBooksSection.css';

const HomePage = () => {
  const navigate = useNavigate();

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
          {[
            {
              title: 'David Copperfield',
              author: 'Charles Dickens',
              image: 'https://images.saymedia-content.com/.image/t_share/MTc0NDEzMzQ2ODY1NDI0MDA2/david-copperfield-by-charles-dickens-a-book-review.jpg',
              category: 'Novel',
              price: 14.99,
              offer: 'Offer Ends December 31, 2024',
              description: 'A coming-of-age story chronicling the life of David Copperfield.'
            },
            {
              title: 'In Custody',
              author: 'Anita Desai',
              image: 'https://images.saymedia-content.com/.image/t_share/MTgxMzEyODAwMDQ2NDU3OTU5/multiple-journeys-taken-by-deven-in-anita-desais-in-custody.jpg',
              category: 'Novel',
              price: 13.49,
              offer: 'Offer Ends December 31, 2024',
              description: 'A teacher\'s literary journey with an aging Urdu poet.'
            },
            {
              title: 'It Ends With Us',
              author: 'Colleen Hoover',
              image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669512309i/63849929.jpg',
              category: 'Novel',
              price: 16.75,
              offer: 'Offer Ends December 31, 2024',
              description: 'A compelling tale of love, strength, and resilience.'
            },
            {
              title: 'The Book Thief',
              author: 'Markus Zusak',
              image: 'https://www.bookishelf.com/wp-content/uploads/2020/01/Book-Review-The-Book-Thief-by-Markus-Zusak-scaled.jpg',
              category: 'Novel',
              price: 15.25,
              offer: 'Offer Ends December 31, 2024',
              description: 'A young girl\'s relationship with books during Nazi Germany.'
            }
          ].map((book, idx) => (
            <div className="book-card" key={idx}>
              <img src={book.image} alt={book.title} className="book-image" />
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p>{book.description}</p>
              <p className="price">${book.price}</p>
              <button className="details-button" onClick={() => navigate('/view-details', { state: { book } })}>View Details</button>
            </div>
          ))}
        </div>
      </section>

      <NewCollection />

      <UsedBooksSection />

      <Footer />
    </div>
  );
};

export default HomePage;
