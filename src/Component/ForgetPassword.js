import React, { useState } from 'react';
import './ForgetPassword.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send OTP here
  };

  return (
    <div className="fp-bg">
      <div className="fp-card">
        <h2 className="fp-title">Forget Password</h2>
        <p className="fp-desc">
          Enter your email for verification process. We will send you 4 digit to your email/Contact number
        </p>
        <form onSubmit={handleSubmit} className="fp-form">
          <label className="fp-label">Email/Contact number</label>
          <div className="fp-input-row">
            <span className="fp-icon">📧</span>
            <input
              type="text"
              className="fp-input"
              placeholder="Enter your Email account/ Number"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <span className="fp-icon">@</span>
          </div>
          <div className="fp-underline" />
          <button type="submit" className="fp-btn">Verify Your Account</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword; 