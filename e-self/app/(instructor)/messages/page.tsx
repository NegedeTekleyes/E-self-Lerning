"use client";

import React from "react";

export default function Messages() {
  const messages = [
    { from: "Admin", subject: "Course Update", date: "2025-03-25" },
    { from: "Student", subject: "Course Feedback", date: "2025-03-24" },
    // Example data
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800">Messages</h1>
      <ul className="mt-6 space-y-4">
        {messages.map((message, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-semibold">{message.subject}</p>
            <p className="text-gray-600">From: {message.from}</p>
            <p className="text-gray-500 text-sm">{message.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
