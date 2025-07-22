import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Component/assests/hand-keep-book-read-source-600nw-1127076767-removebg-preview.png';
import './HomePage.css';

const BookIcon = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M52 10H20C17.7909 10 16 11.7909 16 14V50C16 52.2091 17.7909 54 20 54H52C54.2091 54 56 52.2091 56 50V14C56 11.7909 54.2091 10 52 10Z" fill="#C8E6C9" />
    <path d="M20 10H52C54.2091 10 56 11.7909 56 14V50C56 52.2091 54.2091 54 52 54H20C17.7909 54 16 52.2091 16 50V14C16 11.7909 17.7909 10 20 10Z" stroke="#2E8B57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M36 22V46" stroke="#2E8B57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 28C28 24.6863 31.134 22 35 22C38.866 22 42 24.6863 42 28" stroke="#2E8B57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 20C8 14.4772 12.4772 10 18 10C23.5228 10 28 14.4772 28 20" stroke="#2E8B57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NotificationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.73 21A2 2 0 0 1 10.27 21" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 16.1 19 15 19H9C7.9 19 7 18.1 7 17V13H17Z" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Add UserProfileIcon SVG
const UserProfileIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" stroke="#374151" strokeWidth="2"/>
    <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orgDropdownOpen, setOrgDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const listBookRef = useRef(null);
  const modalRef = useRef(null);
  const orgDropdownRef = useRef(null);

  useEffect(() => {
    // Check login status on mount
    setIsLoggedIn(!!localStorage.getItem('user'));
    // Listen for login/logout in other tabs
    const handleStorage = () => setIsLoggedIn(!!localStorage.getItem('user'));
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Debug log
  console.log('Navbar isLoggedIn:', isLoggedIn, 'localStorage user:', localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleNavigation = (path) => {
    setIsModalOpen(false);
    setOrgDropdownOpen(false);
    navigate(path);
  };

  const toggleModal = (type) => {
    if (type === 'listBook') {
      setOrgDropdownOpen(false);
      setIsModalOpen(prev => !prev);
    } else if (type === 'org') {
      setIsModalOpen(false);
      setOrgDropdownOpen(prev => !prev);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target) && !listBookRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
      if (orgDropdownRef.current && !orgDropdownRef.current.contains(event.target) && !orgDropdownRef.current.contains(event.target)) {
        setOrgDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={() => handleNavigation('/')} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="Book Bridge Logo" className="logo" />
        <span className="brand-name">Book Bridge</span>
      </div>
      <ul className="nav-links">
        <li onClick={() => handleNavigation('/')}>Home</li>
        <li onClick={() => handleNavigation('/about')}>About</li>
        <li ref={listBookRef} className="dropdown" onClick={() => toggleModal('listBook')}>
          List a book <span className="arrow">▼</span>
          {isModalOpen && (
            <div ref={modalRef} className="list-book-dropdown">
              <div className="dropdown-left-panel" onClick={() => handleNavigation('/book-list')}>
                <div className="panel-content">
                  <div className="panel-title">List your Book</div>
                  <p className="panel-description">Sell, exchange, or donate your books to fellow readers and organizations.</p>
                </div>
                <BookIcon />
              </div>
              <div className="dropdown-right-panel">
                <div className="right-panel-item" onClick={() => handleNavigation('/book-sell')}>
                  <div className="right-panel-title">Sell a Book</div>
                  <div className="right-panel-subtitle">List your book for sale and earn money</div>
                </div>
                <div className="right-panel-item" onClick={() => handleNavigation('/book-exchange')}>
                  <div className="right-panel-title">Exchange a Book</div>
                  <div className="right-panel-subtitle">Swap your book for another one</div>
                </div>
                <div className="right-panel-item" onClick={() => handleNavigation('/book-donate')}>
                  <div className="right-panel-title">Donate a Book</div>
                  <div className="right-panel-subtitle">Donate your book to help others</div>
                </div>
              </div>
            </div>
          )}
        </li>
        <li ref={orgDropdownRef} className="dropdown" onClick={() => toggleModal('org')}>
          Organization <span className="arrow">▼</span>
          {orgDropdownOpen && (
            <div className="org-dropdown">
              <div className="org-item" onClick={() => handleNavigation('/register-organization')}>
                <span className="org-icon">🏢</span>
                <div>
                  <div className="org-title">Register Organization</div>
                  <div className="org-subtitle">Register your orphanage or educational organization</div>
                </div>
              </div>
              <div className="org-item" onClick={() => handleNavigation('/request-book')}>
                <span className="org-icon">📄</span>
                <div>
                  <div className="org-title">Request Books</div>
                  <div className="org-subtitle">Request book donations for your organization</div>
                </div>
              </div>
            </div>
          )}
        </li>
      </ul>
      <div className="navbar-right">
        <form onSubmit={handleSearch} className="search-container">
          <input 
            type="text" 
            placeholder="Search books..." 
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <span className="icon" onClick={() => handleNavigation('/notification')} style={{ cursor: 'pointer' }}>
          <NotificationIcon />
        </span>
        <span className="icon" onClick={() => handleNavigation('/cart')} style={{ cursor: 'pointer' }}>
          <CartIcon />
        </span>
        {/* User Profile Icon */}
        <span className="icon" onClick={() => handleNavigation('/profile')} style={{ cursor: 'pointer' }}>
          <UserProfileIcon />
        </span>
        {/* Login/Signup Buttons (show only if not logged in) */}
        {!isLoggedIn && (
          <>
            <button
              className="login-btn"
              style={{ marginLeft: 12, padding: '7px 18px', borderRadius: 6, border: '1px solid #1976d2', background: '#fff', color: '#1976d2', fontWeight: 500, cursor: 'pointer' }}
              onClick={() => handleNavigation('/login')}
              type="button"
            >
              Login
            </button>
            <button
              className="signup-btn"
              style={{ marginLeft: 8, padding: '7px 18px', borderRadius: 6, border: '1px solid #43a047', background: '#fff', color: '#43a047', fontWeight: 500, cursor: 'pointer' }}
              onClick={() => handleNavigation('/signup')}
              type="button"
            >
              Sign Up
            </button>
          </>
        )}
        {/* Logout Button (show only if logged in) */}
        {isLoggedIn && (
          <button
            className="logout-btn"
            style={{ marginLeft: 12, padding: '7px 18px', borderRadius: 6, border: '1px solid #d32f2f', background: '#fff', color: '#d32f2f', fontWeight: 500, cursor: 'pointer' }}
            onClick={handleLogout}
            type="button"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;





