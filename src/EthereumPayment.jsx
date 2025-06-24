import React, { useState } from "react";
import { ethers } from "ethers";

const RECEIVER = "0x000000000000000000000000000000000000dead"; // Replace with your ETH address

const EthereumPayment = ({ onBack }) => {
  const [account, setAccount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed!");
      return;
    }
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
    } catch (err) {
      alert("Connection failed");
    }
  };

  const sendPayment = async () => {
    if (!account) {
      alert("Connect your wallet first.");
      return;
    }
    setIsLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tx = await signer.sendTransaction({
        to: RECEIVER,
        value: ethers.utils.parseEther("0.01"),
      });
      await tx.wait();
      alert("✅ Payment sent! TX Hash: " + tx.hash);
    } catch (err) {
      alert("❌ Payment failed: " + (err?.message || err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-container">
      <h1>🦊 Ethereum Payment</h1>
      {isLoading ? (
        <div className="spinner">Processing...</div>
      ) : account ? (
        <>
          <p>✅ Connected: {account}</p>
          <button onClick={sendPayment}>Pay 0.01 ETH</button>
          <button onClick={() => setAccount(null)} style={{ marginLeft: 12 }}>Disconnect</button>
        </>
      ) : (
        <>
          <p>🔗 Connect your MetaMask wallet to proceed.</p>
          <button onClick={connectWallet}>Connect MetaMask</button>
        </>
      )}
      <button style={{ marginTop: 24 }} onClick={onBack}>Back</button>
    </div>
  );
};

export default EthereumPayment;
