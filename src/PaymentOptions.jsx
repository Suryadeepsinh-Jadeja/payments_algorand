import React from "react";

const PaymentOptions = ({ onSelect }) => (
  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: 32, color: '#2a3a2b', textAlign: 'center' }}>
      Select Payment Method
    </h2>
    <button
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
        width: 300, margin: '0 auto 22px auto', fontSize: '1.13rem', fontWeight: 600,
        borderRadius: 32, padding: '18px 0', background: 'linear-gradient(90deg,#ff5f6d,#ffc371)', color: '#fff', border: 'none', boxShadow: '0 2px 12px rgba(255,95,109,0.10)', letterSpacing: 1.2
      }}
      onClick={() => onSelect("bank")}
    >
      <span role="img" aria-label="bank" style={{ fontSize: 26, marginLeft: 4 }}>🏦</span> IMPS / UPI
    </button>
    <button
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
        width: 300, margin: '0 auto 22px auto', fontSize: '1.13rem', fontWeight: 600,
        borderRadius: 32, padding: '18px 0', background: 'linear-gradient(90deg,#43cea2,#185a9d)', color: '#fff', border: 'none', boxShadow: '0 2px 12px rgba(67,206,162,0.10)', letterSpacing: 1.2
      }}
      onClick={() => onSelect("crypto")}
    >
      <span role="img" aria-label="crypto" style={{ fontSize: 26, marginLeft: 4 }}>🪙</span> CRYPTO (ALGORAND WALLET)
    </button>
    <button
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
        width: 300, margin: '0 auto', fontSize: '1.13rem', fontWeight: 600,
        borderRadius: 32, padding: '18px 0', background: 'linear-gradient(90deg,#ffb347,#1976d2)', color: '#fff', border: 'none', boxShadow: '0 2px 12px rgba(25,118,210,0.10)', letterSpacing: 1.2
      }}
      onClick={() => onSelect("ethereum")}
    >
      <span role="img" aria-label="eth" style={{ fontSize: 26, marginLeft: 4 }}>🦊</span> CRYPTO (ETHEREUM WALLET)
    </button>
  </div>
);

export default PaymentOptions; 