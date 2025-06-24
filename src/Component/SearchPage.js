import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './SearchPage.css';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Initialize search query from URL params
  React.useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/book-list?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    navigate(`/book-list?search=${encodeURIComponent(suggestion)}`);
  };

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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage; 