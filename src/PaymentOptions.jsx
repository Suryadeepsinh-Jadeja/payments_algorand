import React from "react";

const PaymentOptions = ({ onSelect }) => (
  <div className="glass-container">
    <h1>Select Payment Method</h1>
    <button onClick={() => onSelect("bank")}>Bank Transfer / UPI</button>
    <button onClick={() => onSelect("crypto")}>Crypto (Algorand Wallet)</button>
  </div>
);

export default PaymentOptions; 