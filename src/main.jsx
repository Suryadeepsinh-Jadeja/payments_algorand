import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import PaymentOptions from "./PaymentOptions";
import BankPayment from "./BankPayment";
import AlgoPayment from "./AlgoPayment";
import "./index.css";

const TopBar = () => (
  <div className="topbar">
    <div className="topbar-logo">
      <span style={{fontSize: 28, marginRight: 10}}>💸</span>
      <span style={{fontWeight: 700, fontSize: 22, marginRight: 18}}>PayPortal</span>
      <a href="#" className="topbar-home-link">Home</a>
    </div>
    <nav className="topbar-nav">
      <a href="#">About</a>
      <a href="#">Blog</a>
    </nav>
    <button className="topbar-btn">DOWNLOAD APP</button>
  </div>
);

const App = () => {
  const [screen, setScreen] = useState("options");

  let accentCard = null;
  if (screen === "bank") accentCard = <BankPayment onBack={() => setScreen("options")} />;
  else if (screen === "crypto") accentCard = <AlgoPayment onBack={() => setScreen("options")} />;
  else accentCard = <PaymentOptions onSelect={setScreen} />;

  return (
    <div className="tablet-container">
      <TopBar />
      <div className="tablet-content">
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 420 }}>
          <h1 style={{fontSize: '2.6rem', lineHeight: 1.13, marginBottom: 24}}>Just 2 simple steps away<br />from making your payment</h1>
          <p style={{fontSize: '1.18rem', color: '#2a3a2b', maxWidth: 380}}>Choose your preferred payment method. We support both traditional and blockchain payments for your convenience.</p>
        </div>
        <div className="accent-card accent-card-centered">
          <div className="step">01</div>
          {accentCard}
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 