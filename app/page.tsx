"use client";
import { useState } from "react";
import { web3, contract } from "./contract";

export default function Home() {
  const [account, setAccount] = useState<string | null>(null);

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
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section: Mint and Burn */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              {/* Mint Section */}
              <div className="mb-8">
                <h2 className="text-lg font-bold mb-4">Base URI</h2>
                <input
                  type="text"
                  placeholder="URI"
                  // value={mintAmount || ""}
                  // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  //   setMintAmount(Number(e.target.value) || 0)
                  // }
                  className="input input-bordered w-full mb-4"
                />
                <button
                  className="btn btn-info w-full"
                  // onClick={mintTokens}
                >
                  Submit
                </button>
              </div>

              {/* Burn Section */}
              <div>
                <h2 className="text-lg font-bold mb-4">Mint NFT</h2>
                <input
                  type="text"
                  placeholder="Address"
                  // value={burnAmount || ""}
                  // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  //   setBurnAmount(Number(e.target.value) || 0)
                  // }
                  className="input input-bordered w-full mb-4"
                />
                <button
                  className="btn btn-success w-full"
                  // onClick={mintTokens}
                >
                  Submit
                </button>
              </div>
            </div>

            {/* Right Section: Token Balance */}
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
