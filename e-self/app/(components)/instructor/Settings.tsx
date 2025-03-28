"use client";

import { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState<boolean>(true);
  const [courseUpdates, setCourseUpdates] = useState<boolean>(true);

  const handleSave = () => {
    alert("Instructor settings updated successfully!");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-[#1D1616] mb-4">Instructor Settings</h2>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-gray-700">Enable Notifications</span>
        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
          className="cursor-pointer"
        />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-gray-700">Receive Course Updates</span>
        <input
          type="checkbox"
          checked={courseUpdates}
          onChange={() => setCourseUpdates(!courseUpdates)}
          className="cursor-pointer"
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-[#8E1616] text-white px-4 py-2 rounded hover:bg-[#D84040]"
      >
        Save Settings
      </button>
    </div>
  );
}
