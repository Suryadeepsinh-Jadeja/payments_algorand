import React from "react";

const PaymentOptions = ({ onSelect }) => (
  <div className="glass-container">
    <h1 style={{ marginBottom: 36 }}>Select Payment Method</h1>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }} onClick={() => onSelect("bank")}> 
        <span role="img" aria-label="bank" style={{ fontSize: 28 }}>🏦</span> Bank Transfer / UPI
      </button>
      <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }} onClick={() => onSelect("crypto")}> 
        <span role="img" aria-label="crypto" style={{ fontSize: 28 }}>💸</span> Crypto (Algorand Wallet)
      </button>
    </div>
  </div>
);

export default PaymentOptions; 