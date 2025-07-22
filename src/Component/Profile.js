import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './HomePage.css';

const Profile = () => {
  // Try to get user info from localStorage
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem('user'));
  } catch (e) {
    user = null;
  }

  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: 400, margin: '40px auto', background: '#fff', borderRadius: 12, padding: 32, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 24 }}>User Profile</h2>
        {user ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 80, marginBottom: 16 }}>👤</div>
            <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{user.name || user.fullName || user.email}</div>
            {user.email && <div style={{ color: '#888', marginBottom: 16 }}>{user.email}</div>}
            {/* Add more user info here if available */}
          </div>
        ) : (
          <div style={{ textAlign: 'center', color: '#d32f2f' }}>
            <p>You are not logged in.</p>
            <a href="/login" style={{ color: '#1976d2', textDecoration: 'underline' }}>Login</a>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile; 