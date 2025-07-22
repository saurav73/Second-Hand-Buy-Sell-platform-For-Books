import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useCart } from './CartContext';
import './Booklist.css';

// Sample book data 
const booksData = [
  { id: 101, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', description: 'A novel about the American dream.', price: 250, imageUrl: 'https://m.media-amazon.com/images/I/71FTb9X6wsL.jpg' },
  { id: 102, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', description: 'A powerful story of justice and innocence.', price: 280, imageUrl: 'https://m.media-amazon.com/images/I/81a4kCNuH+L.jpg' },
  { id: 103, title: 'Dune', author: 'Frank Herbert', genre: 'Sci-Fi', description: 'A futuristic world of sandworms and spice.', price: 350, imageUrl: 'https://m.media-amazon.com/images/I/81d+pLPM+0L.jpg' },
  { id: 104, title: 'Neuromancer', author: 'William Gibson', genre: 'Sci-Fi', description: 'The original cyberpunk novel.', price: 320, imageUrl: 'https://m.media-amazon.com/images/I/91N+8sWp2jL.jpg' },
  { id: 105, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', description: 'A fantasy adventure in Middle-earth.', price: 400, imageUrl: 'https://m.media-amazon.com/images/I/710+HcoP38L.jpg' },
  { id: 106, title: 'A Game of Thrones', author: 'George R.R. Martin', genre: 'Fantasy', description: 'The first book in a famous fantasy series.', price: 450, imageUrl: 'https://m.media-amazon.com/images/I/81V4RzJgPjL.jpg' },
  { id: 107, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', description: 'A classic romance novel about love and marriage.', price: 220, imageUrl: 'https://m.media-amazon.com/images/I/71Q1tPupKjL.jpg' },
  { id: 108, title: 'The Notebook', author: 'Nicholas Sparks', genre: 'Romance', description: 'A heartwarming love story that spans decades.', price: 180, imageUrl: 'https://m.media-amazon.com/images/I/81YzHKeWq7L.jpg' },
  { id: 109, title: 'Sherlock Holmes', author: 'Arthur Conan Doyle', genre: 'Mystery', description: 'The adventures of the world\'s greatest detective.', price: 300, imageUrl: 'https://m.media-amazon.com/images/I/71Q1tPupKjL.jpg' },
  { id: 110, title: 'Gone Girl', author: 'Gillian Flynn', genre: 'Mystery', description: 'A psychological thriller about a missing wife.', price: 280, imageUrl: 'https://m.media-amazon.com/images/I/81YzHKeWq7L.jpg' },
  { id: 111, title: 'A Brief History of Time', author: 'Stephen Hawking', genre: 'Science', description: 'Exploring the mysteries of the universe.', price: 320, imageUrl: 'https://m.media-amazon.com/images/I/71Q1tPupKjL.jpg' },
  { id: 112, title: 'The Origin of Species', author: 'Charles Darwin', genre: 'Science', description: 'The groundbreaking work on evolution.', price: 350, imageUrl: 'https://m.media-amazon.com/images/I/81YzHKeWq7L.jpg' },
  { id: 113, title: 'The Art of War', author: 'Sun Tzu', genre: 'History', description: 'Ancient Chinese military strategy and philosophy.', price: 200, imageUrl: 'https://m.media-amazon.com/images/I/71Q1tPupKjL.jpg' },
  { id: 114, title: 'Sapiens', author: 'Yuval Noah Harari', genre: 'History', description: 'A brief history of humankind.', price: 380, imageUrl: 'https://m.media-amazon.com/images/I/81YzHKeWq7L.jpg' },
  { id: 115, title: 'Steve Jobs', author: 'Walter Isaacson', genre: 'Biography', description: 'The biography of Apple\'s visionary founder.', price: 400, imageUrl: 'https://m.media-amazon.com/images/I/71Q1tPupKjL.jpg' },
  { id: 116, title: 'Einstein', author: 'Walter Isaacson', genre: 'Biography', description: 'The life and work of Albert Einstein.', price: 420, imageUrl: 'https://m.media-amazon.com/images/I/81YzHKeWq7L.jpg' },
];

const genres = ['All', 'Classic', 'Sci-Fi', 'Fantasy', 'Romance', 'Mystery', 'Science', 'History', 'Biography'];

const BookList = () => {
  const [activeGenre, setActiveGenre] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchQuery(search);
      filterBooks(search, activeGenre);
    } else {
      setSearchQuery('');
      filterBooks('', activeGenre);
    }
  }, [searchParams, activeGenre]);

  const filterBooks = (search, genre) => {
    let filtered = booksData;

    // Filter by search query
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(book => 
        book.title.toLowerCase().includes(searchLower) ||
        book.author.toLowerCase().includes(searchLower) ||
        book.genre.toLowerCase().includes(searchLower) ||
        book.description.toLowerCase().includes(searchLower)
      );
    }

    // Filter by genre
    if (genre !== 'All') {
      filtered = filtered.filter(book => book.genre === genre);
    }

    setFilteredBooks(filtered);
  };

  const handleGenreChange = (genre) => {
    setActiveGenre(genre);
    filterBooks(searchQuery, genre);
  };

  const handlePurchase = (book) => {
    // Check login status
    const user = localStorage.getItem('user');
    if (!user) {
      alert('Please login or signup to add items to your cart.');
      navigate('/login');
      return;
    }
    addToCart(book);
    navigate('/cart');
  };

  const clearSearch = () => {
    setSearchQuery('');
    setActiveGenre('All');
    setFilteredBooks(booksData);
    navigate('/book-list');
  };

  return (
    <div className="booklist-page">
      <Navbar />
      <main className="booklist-main">
        <h1 className="booklist-title">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'Explore Our Books'}
        </h1>
        
        {(searchQuery || activeGenre !== 'All') && (
          <div className="search-info">
            <p>
              {searchQuery && `Searching for: "${searchQuery}"`}
              {searchQuery && activeGenre !== 'All' && ' • '}
              {activeGenre !== 'All' && `Genre: ${activeGenre}`}
            </p>
            <button onClick={clearSearch} className="clear-filters-btn">
              Clear Filters
            </button>
          </div>
        )}

        <div className="genre-filters">
          {genres.map(genre => (
            <button
              key={genre}
              className={`genre-btn ${activeGenre === genre ? 'active' : ''}`}
              onClick={() => handleGenreChange(genre)}
            >
              {genre}
            </button>
          ))}
        </div>

        {filteredBooks.length === 0 ? (
          <div className="no-results">
            <h3>No books found</h3>
            <p>Try adjusting your search terms or genre filter</p>
            <button onClick={clearSearch} className="clear-filters-btn">
              Show All Books
            </button>
          </div>
        ) : (
          <div className="book-grid">
            {filteredBooks.map(book => (
              <div key={book.id} className="book-card-item">
                <img src={book.imageUrl} alt={book.title} className="book-card-image" />
                <div className="book-card-content">
                  <h3 className="book-card-title">{book.title}</h3>
                  <p className="book-card-author">{book.author}</p>
                  <p className="book-card-description">{book.description}</p>
                  <div className="book-card-footer">
                    <p className="book-card-price">Rs. {book.price}</p>
                    <button onClick={() => handlePurchase(book)} className="purchase-btn">Purchase</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BookList; 