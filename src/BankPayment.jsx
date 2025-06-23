import React from "react";

const BankPayment = ({ onBack }) => (
  <div className="glass-container">
    <h1>Bank Transfer / UPI</h1>
    <p><b>Bank Name:</b> Your Bank Name</p>
    <p><b>Account Number:</b> 1234567890</p>
    <p><b>IFSC Code:</b> ABCD0123456</p>
    <p><b>UPI ID:</b> yourupi@bank</p>
    {/* Optionally, add a UPI QR code image below */}
    {/* <img src="/path/to/your/upi-qr.png" alt="UPI QR" style={{maxWidth: 200}} /> */}
    <button onClick={onBack}>Back</button>
  </div>
);

export default BankPayment; 