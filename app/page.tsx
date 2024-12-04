"use client";
import { useState } from "react";
import { web3, contract } from "./contract";

export default function Home() {
  const [account, setAccount] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const [baseURI, setBaseURI] = useState<string>("");
  const [mintNFT, setMintNFT] = useState<string>("");

  const connectWallet = async () => {
    if (web3 && contract) {
      try {
        const accounts = await web3.eth.requestAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error accessing accounts:", error);
      }
    } else {
      console.error("Web3 or contract is not initialized");
    }
  };

  const submitBaseURI = async () => {
    if (!baseURI || baseURI == "") {
      setStatus("Error: Base URI cannot be empty.");
      return;
    }

    try {
      // Call the setBaseURI function on the smart contract
      const tx = await contract.methods
        .setBaseURI(baseURI)
        .send({ from: account });
      setStatus("Base URI updated successfully!");
    } catch (error) {
      console.error("Error setting base URI:", error);
      setStatus("Error setting base URI");
    }    
  };

  const submitMintNFT = async () => {
    if (!mintNFT || mintNFT == "") {
      setStatus("Error: Address cannot be empty.");
      return;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">Booknify</h1>
        </div>
      </header>

      {/* Content */}
      {!account ? (
        <div className="flex flex-col lg:flex-row gap-[30px] mt-[20px] px-[30px] min-h-[80vh] justify-center items-center">
          <button className="btn btn-primary" onClick={connectWallet}>
            Connect Wallet
          </button>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-2">
          {/* Status Section*/}
          <div className="flex justify-center items-center mb-4">
            {status && (
              <p
                className={`mt-2 text-sm font-semibold ${
                  status.startsWith("Error") ? "text-red-500" : "text-green-600"
                }`}
              >
                {status}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section: Base URI and Mint NFT */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              {/* Base URI Section */}
              <div className="mb-8">
                <h2 className="text-lg font-bold mb-4">Base URI</h2>
                <input
                  type="text"
                  placeholder="URI"
                  value={baseURI || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setBaseURI(String(e.target.value) || "")
                  }
                  className="input input-bordered w-full mb-4"
                />
                <button className="btn btn-info w-full" onClick={submitBaseURI}>
                  Submit
                </button>
              </div>

              {/* Mint NFT Section */}
              <div>
                <h2 className="text-lg font-bold mb-4">Mint NFT</h2>
                <input
                  type="text"
                  placeholder="Address"
                  value={mintNFT || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMintNFT(String(e.target.value) || "")
                  }
                  className="input input-bordered w-full mb-4"
                />
                <button
                  className="btn btn-success w-full"
                  onClick={submitMintNFT}
                >
                  Submit
                </button>
              </div>
            </div>

            {/* Right Section: Information */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <p className="text-4xl font-semibold mb-4">
                {/* {balance || "Loading..."} */}
              </p>
              <p className="text-lg font-bold mb-4">Name :</p>
              <p className="text-lg font-bold mb-4">Symbol :</p>
              <p className="text-lg font-bold mb-4">Owner :</p>
              <hr className="w-full border-gray-300" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
