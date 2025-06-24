import React, { useState } from 'react';
import './ForgetPassword.css';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (e, idx) => {
    const value = e.target.value.replace(/\D/, '');
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[idx] = value;
      setOtp(newOtp);
      // Move to next input
      if (value && idx < 3) {
        document.getElementById(`otp-input-${idx + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add OTP verification logic here
  };

  return (
    <div className="fp-bg">
      <div className="fp-card">
        <h2 className="fp-title">Enter OTP</h2>
        <p className="fp-desc">
          Please enter the 4-digit code sent to your email/contact number.
        </p>
        <form onSubmit={handleSubmit} className="fp-form" style={{alignItems:'center'}}>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', margin: '32px 0' }}>
            {otp.map((digit, idx) => (
              <input
                key={idx}
                id={`otp-input-${idx}`}
                type="text"
                maxLength={1}
                className="fp-input"
                style={{
                  width: '48px',
                  height: '48px',
                  textAlign: 'center',
                  fontSize: '1.5rem',
                  border: '2px solid #222',
                  borderRadius: '7px',
                  background: '#fff',
                }}
                value={digit}
                onChange={e => handleChange(e, idx)}
                required
              />
            ))}
          </div>
          <button type="submit" className="fp-btn">Verify OTP</button>
        </form>
      </div>
    </div>
  );
};

export default Otp; 