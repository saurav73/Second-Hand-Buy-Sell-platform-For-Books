import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './SearchPage.css';

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

const suggestions = [
  'Fiction',
  'Non-Fiction',
  'Science Fiction',
  'Romance',
  'Mystery',
  'Biography',
  'History',
  'Self-Help',
  'Children Books',
  'Academic'
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
      filterBooks(query);
    } else {
      setSearchQuery('');
      setFilteredBooks(booksData);
    }
    // eslint-disable-next-line
  }, [searchParams]);

  const filterBooks = (search) => {
    let filtered = booksData;
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(searchLower) ||
        book.author.toLowerCase().includes(searchLower) ||
        book.genre.toLowerCase().includes(searchLower) ||
        book.description.toLowerCase().includes(searchLower)
      );
    }
    setFilteredBooks(filtered);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      filterBooks(searchQuery.trim());
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    filterBooks(suggestion);
  };

  const handleViewDetails = (book) => {
    navigate('/view-details', { state: { book } });
  };

  return (
    <div className="search-page">
      <Navbar />
      <div className="search-content">
        <div className="search-hero">
          <h1>Find Your Perfect Book</h1>
          <p>
            Discover thousands of books across all genres. Search by title, author, 
            or explore our curated collections to find your next great read.
          </p>
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-container">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                className="search-input"
                placeholder="Search for books, authors, or genres..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="search-button"
                disabled={!searchQuery.trim()}
              >
                Search
              </button>
            </div>
          </form>

          {(!searchQuery || filteredBooks.length === booksData.length) && (
            <div className="search-suggestions">
              <h3>Popular Searches</h3>
              <div className="suggestion-tags">
                {suggestions.map((suggestion, index) => (
                  <span 
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="search-results">
        {filteredBooks.length === 0 ? (
          <div className="no-results">
            <h3>No books found</h3>
            <p>Try adjusting your search terms</p>
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
                    <button className="purchase-btn" onClick={() => handleViewDetails(book)}>View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage; 