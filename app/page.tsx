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
    </div>
  );
}
