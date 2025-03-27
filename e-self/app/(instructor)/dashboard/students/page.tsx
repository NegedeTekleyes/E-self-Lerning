"use client";

import React from "react";

export default function StudentsList() {
  const students = [
    { name: "John Doe", email: "john@example.com", enrolledCourses: 3 },
    { name: "Jane Smith", email: "jane@example.com", enrolledCourses: 2 },
    // Example data, you would fetch real data
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800">Students List</h1>
      <table className="mt-6 w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-3 text-left">Name</th>
            <th className="border p-3 text-left">Email</th>
            <th className="border p-3 text-left">Enrolled Courses</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className="border p-3">{student.name}</td>
              <td className="border p-3">{student.email}</td>
              <td className="border p-3">{student.enrolledCourses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
