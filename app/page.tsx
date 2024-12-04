"use client";
import { useState } from "react";

export default function Home() {
  const [account, setAccount] = useState<string | null>(null);

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
          <button className="btn btn-primary">Connect Wallet</button>
        </div>
      ) : (
        <div>Dashboard</div>
      )}
    </div>
  );
}
