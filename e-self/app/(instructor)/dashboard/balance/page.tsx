"use client";

import React from "react";

export default function Balance() {
  const balance = 5320; // Example balance, replace with real data
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800">Earnings Balance</h1>
      <div className="mt-6">
        <p className="text-xl">Total Earnings: ${balance}</p>
        {/* You can add charts or other information here */}
      </div>
    </div>
  );
}
