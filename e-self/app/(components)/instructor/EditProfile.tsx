"use client";

import { useState } from "react";

export default function EditProfile() {
  const [name, setName] = useState<string>("Instructor Name");
  const [email, setEmail] = useState<string>("instructor@example.com");
  const [bio, setBio] = useState<string>("Experienced instructor in web development.");

  const handleSave = () => {
    alert("Instructor profile updated successfully!");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-[#1D1616] mb-4">Edit Instructor Profile</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-[#8E1616] text-white px-4 py-2 rounded hover:bg-[#D84040]"
      >
        Save Changes
      </button>
    </div>
  );
}
