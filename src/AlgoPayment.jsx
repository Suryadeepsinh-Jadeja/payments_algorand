import React, { useEffect, useState, useMemo } from "react";
import algosdk from "algosdk";
import { PeraWalletConnect } from "@perawallet/connect";

// Algod Client Setup (Testnet)
const algodToken = '';
const algodServer = 'https://testnet-api.algonode.cloud';
const algodPort = '';
const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

const AlgoPayment = () => {
  const peraWallet = useMemo(() => new PeraWalletConnect({ chainId: "4160" }), []);
  const [accountAddress, setAccountAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const receiver = "ECJYSFKHAZI7LFF5WD2JYFH67GXYTFQ4M2MQ32ZM3HTIY3DYDQA6IUBGCU"; // Replace with your address
  const isConnectedToPera = !!accountAddress;

  const handleDisconnectWallet = () => {
    peraWallet.disconnect();
    setAccountAddress(null);
  };

  useEffect(() => {
    peraWallet
      .reconnectSession()
      .then((accounts) => {
        peraWallet.connector?.on("disconnect", handleDisconnectWallet);
        if (accounts.length) {
          setAccountAddress(accounts[0]);
        }
      })
      .catch((e) => console.error(e));

    return () => {
      peraWallet.connector?.off("disconnect", handleDisconnectWallet);
    };
  }, [peraWallet]);

  const handleConnectWallet = () => {
    peraWallet
      .connect()
      .then((newAccounts) => {
        peraWallet.connector?.on("disconnect", handleDisconnectWallet);
        setAccountAddress(newAccounts[0]);
      })
      .catch((error) => {
        if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
          console.error(error);
        }
      });
  };

  const sendPayment = async () => {
    if (!accountAddress) {
      alert("Please connect your wallet first.");
      return;
    }

    setIsLoading(true);

    try {
      const params = await algodClient.getTransactionParams().do();

      const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        from: accountAddress,
        to: receiver,
        amount: 1000000, // 1 ALGO (in microAlgos)
        suggestedParams: params,
      });

      const singleTxn = [{ txn: txn, signers: [accountAddress] }];

      const signedTxn = await peraWallet.signTransaction(singleTxn);

      const rawSignedTx = signedTxn[0].signedTxn;

      const { txId } = await algodClient.sendRawTransaction(rawSignedTx).do();

      // Optional: Wait for confirmation
      await algosdk.waitForConfirmation(algodClient, txId, 4);

      alert(`✅ Transaction sent! TXID: ${txId}`);
    } catch (error) {
      console.error("Payment failed", error);
      alert("❌ Payment failed. Check the console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-container">
      <h1>💸 Algo Payments</h1>

      {isLoading ? (
        <div className="spinner">Processing...</div>
      ) : (
        <>
          {isConnectedToPera ? (
            <>
              <p>✅ Connected: {accountAddress}</p>
              <button onClick={sendPayment} disabled={isLoading}>Pay 1 ALGO</button>
              <button onClick={handleDisconnectWallet}>Disconnect</button>
            </>
          ) : (
            <>
              <p>🔗 Connect your wallet to proceed.</p>
              <button onClick={handleConnectWallet}>Connect Pera Wallet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AlgoPayment;
