import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import PaymentOptions from "./PaymentOptions";
import BankPayment from "./BankPayment";
import AlgoPayment from "./AlgoPayment";
import "./index.css";

const App = () => {
  const [screen, setScreen] = useState("options");

  if (screen === "bank") return <BankPayment onBack={() => setScreen("options")} />;
  if (screen === "crypto") return <AlgoPayment />;

  return <PaymentOptions onSelect={setScreen} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 