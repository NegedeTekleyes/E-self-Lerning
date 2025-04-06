"use client";

import React, { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { UserCircleIcon } from "@heroicons/react/24/outline";

type Student = {
  name: string;
  email: string;
  enrolledCourses: number;
  category: "Beginner" | "Intermediate" | "Advanced";
  favoriteCourse: string;
};

const StudentsList = () => {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const students: Student[] = [
    {
      name: "John Doe",
      email: "john@example.com",
      enrolledCourses: 3,
      category: "Beginner",
      favoriteCourse: "React Basics",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      enrolledCourses: 2,
      category: "Advanced",
      favoriteCourse: "Node.js Mastery",
    },
    {
      name: "Tom Jerry",
      email: "tom@example.com",
      enrolledCourses: 5,
      category: "Intermediate",
      favoriteCourse: "React Basics",
    },
    {
      name: "Aliya Ray",
      email: "aliya@example.com",
      enrolledCourses: 1,
      category: "Beginner",
      favoriteCourse: "Design Fundamentals",
    },
  ];

  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      const matchSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.email.toLowerCase().includes(search.toLowerCase());
      const matchCategory =
        filterCategory === "all" || s.category === filterCategory;
      return matchSearch && matchCategory;
    });
  }, [search, filterCategory, students]);

  const courseStats = useMemo(() => {
    const map = new Map<string, number>();
    students.forEach((s) => {
      map.set(s.favoriteCourse, (map.get(s.favoriteCourse) || 0) + 1);
    });
    return Array.from(map, ([name, count]) => ({ name, count }));
  }, [students]);

  const categories = ["all", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-4 sm:mb-0">
            <UserCircleIcon className="h-7 w-7 text-red-600" />
            Enrolled Students
          </h1>
        </div>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  filterCategory === cat
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Course Popularity
          </h3>
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
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="border p-3">#</th>
                <th className="border p-3">Name</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Enrolled</th>
                <th className="border p-3">Category</th>
                <th className="border p-3">Favorite Course</th>
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
              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center p-6 text-gray-500">
                    No students match the search/filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentsList;
