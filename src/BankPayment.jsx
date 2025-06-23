import React from "react";

const BankPayment = ({ onBack }) => (
  <div className="glass-container">
    <h1>Bank Transfer / UPI</h1>
    <div style={{ marginBottom: 24 }}>
      <p><b>Bank Name:</b> Your Bank Name</p>
      <p><b>Account Number:</b> 1234567890</p>
      <p><b>IFSC Code:</b> ABCD0123456</p>
      <p><b>UPI ID:</b> yourupi@bank</p>
    </div>
    {/* Animated QR placeholder */}
    <div className="qr-pulse" style={{ display: 'inline-block', marginBottom: 24 }}>
      <div style={{ width: 120, height: 120, background: 'white', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}>
        <span style={{ color: '#43cea2', fontWeight: 700, fontSize: 18 }}>UPI QR</span>
      </div>
    </div>
    <br />
    <button onClick={onBack}>Back</button>
  </div>
);

export default BankPayment; 