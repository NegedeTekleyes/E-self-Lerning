
"use client";

import React, { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type Student = {
  name: string;
  email: string;
  enrolledCourses: number;
  category: "Beginner" | "Intermediate" | "Advanced";
  favoriteCourse: string;
};

export default function StudentsList() {
  const students: Student[] = [
    { name: "John Doe", email: "john@example.com", enrolledCourses: 3, category: "Beginner", favoriteCourse: "React Basics" },
    { name: "Jane Smith", email: "jane@example.com", enrolledCourses: 2, category: "Advanced", favoriteCourse: "Node.js Mastery" },
    { name: "Tom Jerry", email: "tom@example.com", enrolledCourses: 5, category: "Intermediate", favoriteCourse: "React Basics" },
    // Add more students as needed
  ];

  const [search, setSearch] = useState("");

  const filteredStudents = useMemo(() => {
    return students.filter(
      (s) =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, students]);

  const courseStats = useMemo(() => {
    const map = new Map<string, number>();
    students.forEach((s) => {
      map.set(s.favoriteCourse, (map.get(s.favoriteCourse) || 0) + 1);
    });
    return Array.from(map, ([name, count]) => ({ name, count }));
  }, [students]);

  const mostPopularCourse = courseStats.sort((a, b) => b.count - a.count)[0]?.name || "N/A";

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Students List</h1>

      {/* Search Box */}
      <div className="max-w-md">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      {/* Popular Course Display */}
      <div className="text-gray-700 text-sm">
        <strong>Most Popular Course:</strong> {mostPopularCourse}
      </div>

      {/* Chart */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={courseStats}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8E1616" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <table className="w-full border-collapse mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3">#</th>
            <th className="border p-3 text-left">Name</th>
            <th className="border p-3 text-left">Email</th>
            <th className="border p-3 text-left">Enrolled Courses</th>
            <th className="border p-3 text-left">Category</th>
            <th className="border p-3 text-left">Favorite Course</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border p-3">{index + 1}</td>
              <td className="border p-3">{student.name}</td>
              <td className="border p-3">{student.email}</td>
              <td className="border p-3">{student.enrolledCourses}</td>
              <td className="border p-3">{student.category}</td>
              <td className="border p-3">{student.favoriteCourse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
