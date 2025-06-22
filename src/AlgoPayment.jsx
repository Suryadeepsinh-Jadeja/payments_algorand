import React, { useEffect, useState, useMemo } from "react";
import algosdk from "algosdk";
import { PeraWalletConnect } from "@perawallet/connect";

const algodToken = '';
const algodServer = 'https://testnet-api.algonode.cloud';
const algodPort = ''; // The port is included in the server URL

const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

const AlgoPayment = () => {
  const peraWallet = useMemo(() => new PeraWalletConnect({ chainId: "416002" }), []);
  const [accountAddress, setAccountAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const receiver = "ECJYSFKHAZI7LFF5WD2JYFH67GXYTFQ4M2MQ32ZM3HTIY3DYDQA6IUBGCU"; // Replace with your wallet
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
        amount: 1000000, // 1 ALGO (amount is in microAlgos)
        suggestedParams: params,
      });

      const singleTxn = [{ txn: txn, signers: [accountAddress] }];
      const signedTxn = await peraWallet.signTransaction([singleTxn]);
      const { txId } = await algodClient.sendRawTransaction(signedTxn).do();

      alert(`Transaction sent! TXID: ${txId}`);
    } catch (error) {
      console.error("Payment failed", error);
      alert("Payment failed. Check the console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-container">
      <h1>Algo Payments</h1>
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <>
          {isConnectedToPera ? (
            <>
              <p>Connected: {accountAddress}</p>
              <button onClick={sendPayment}>Pay 1 ALGO</button>
              <button onClick={handleDisconnectWallet}>Disconnect</button>
            </>
          ) : (
            <>
              <p>Connect your wallet to proceed.</p>
              <button onClick={handleConnectWallet}>Connect Pera Wallet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AlgoPayment; 