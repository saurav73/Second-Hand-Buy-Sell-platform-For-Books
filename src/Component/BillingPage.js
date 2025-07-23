import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useCart } from './CartContext';

const BillingPage = () => {
  const { cart, total } = useLocation().state || { cart: [], total: 0 };
  const { setCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleEsewaPayment = async () => {
    setLoading(true);
    // Simulate eSewa payment form submission
    // In a real application, you would redirect to eSewa's payment gateway
    const esewaParams = {
      amt: total,
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: total,
      pid: `ORDER_${Date.now()}`,
      scd: 'YOUR_ESEWA_MERCHANT_CODE', // Replace with your eSewa merchant code
      su: 'http://yourdomain.com/success', // Success URL
      fu: 'http://yourdomain.com/failure' // Failure URL
    };

    // eSewa payment form (simulated for client-side demo)
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://uat.esewa.com.np/epay/main'; // Use production URL for live: https://esewa.com.np/epay/main
    Object.entries(esewaParams).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });
    document.body.appendChild(form);
    form.submit();

    // For demo purposes, simulate payment success after 2 seconds
    setTimeout(() => {
      setLoading(false);
      // Clear cart on successful payment
      setCart([]);
      navigate('/success', { state: { message: 'Payment successful! Your order has been placed.' } });
    }, 2000);
  };

  return (
    <div className="billing-page">
      <Navbar />
      <main style={{ maxWidth: 800, margin: '40px auto', background: '#fff', borderRadius: 12, padding: 32 }}>
        <h2 style={{ textAlign: 'center', marginBottom: 32 }}>Billing Details</h2>
        {cart.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No items to checkout.</p>
        ) : (
          <>
            <h3>Order Summary</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 24 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #eee' }}>
                  <th style={{ textAlign: 'left', padding: 8 }}>Book</th>
                  <th style={{ textAlign: 'left', padding: 8 }}>Author</th>
                  <th style={{ textAlign: 'center', padding: 8 }}>Quantity</th>
                  <th style={{ textAlign: 'right', padding: 8 }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: 8 }}>{item.title}</td>
                    <td style={{ padding: 8 }}>{item.author}</td>
                    <td style={{ padding: 8, textAlign: 'center' }}>{item.quantity}</td>
                    <td style={{ padding: 8, textAlign: 'right' }}>Rs. {item.price * item.quantity}/-</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ textAlign: 'right', fontWeight: 'bold', fontSize: 18, marginBottom: 24 }}>
              Total: Rs. {total}/-
            </div>
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={handleEsewaPayment}
                disabled={loading}
                style={{
                  background: '#28a745',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 4,
                  padding: '12px 24px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontSize: 16,
                  opacity: loading ? 0.6 : 1
                }}
              >
                {loading ? 'Processing...' : 'Pay with eSewa'}
              </button>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BillingPage;