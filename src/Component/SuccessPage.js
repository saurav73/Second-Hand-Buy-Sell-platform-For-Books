import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const SuccessPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <Navbar />
      <main style={{ maxWidth: 800, margin: '40px auto', background: '#fff', borderRadius: 12, padding: 32 }}>
        <h2 style={{ textAlign: 'center', marginBottom: 32 }}>Order Confirmation</h2>
        <p style={{ textAlign: 'center' }}>{state?.message || 'Thank you for your purchase!'}</p>
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <button
            onClick={() => navigate('/')}
            style={{
              background: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              padding: '8px 16px',
              cursor: 'pointer',
              fontSize: 16
            }}
          >
            Back to Home
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessPage;