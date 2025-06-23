import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import BankPayment from "./BankPayment";
import AlgoPayment from "./AlgoPayment";
import PaymentOptions from "./PaymentOptions";
import BrowserFrame from "./BrowserFrame";
import "./index.css";

const TopBar = () => (
  <div className="topbar">
    <div className="topbar-logo">
      <span style={{fontSize: 28, marginRight: 10}}>💸</span>
      <span style={{fontWeight: 700, fontSize: 22, marginRight: 18}}>AlgoPay</span>
      <a href="#" className="topbar-home-link">Home</a>
    </div>
    <nav className="topbar-nav">
      <a href="#">About</a>
      <a href="#">Blog</a>
    </nav>
    <button className="topbar-btn">Contact us</button>
  </div>
);

const PaymentIntro = () => (
  <div className="left-card">
    <h1>Your expert in the field of payments</h1>
    <p>Choose your preferred payment method. We support both traditional and blockchain payments for your convenience.</p>
    <button className="cta-btn">Discover advantages <span>→</span></button>
  </div>
);

const App = () => {
  const [screen, setScreen] = useState("options");

  let rightContent;
  if (screen === "bank") rightContent = <BankPayment onBack={() => setScreen("options")} />;
  else if (screen === "crypto") rightContent = <AlgoPayment onBack={() => setScreen("options")} />;
  else rightContent = <PaymentOptions onSelect={setScreen} />;

  return (
    <BrowserFrame>
      <div className="tablet-container">
        <TopBar />
        <div className="tablet-content">
          <PaymentIntro />
          <div className="right-cards">
            {rightContent}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 