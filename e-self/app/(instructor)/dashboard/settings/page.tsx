"use client";

import React, { useState } from "react";

export default function Settings() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    console.log("Settings updated:", { email, password });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
      <form className="mt-6 space-y-4">
        <input
          type="email"
          placeholder="Update Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="Update Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <button
          type="button"
          onClick={handleSave}
          className="w-full py-3 bg-red-600 text-white rounded-lg"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}



