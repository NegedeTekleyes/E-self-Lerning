"use client";
import React, { useMemo, useState } from "react";



import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  LineChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { UserCircleIcon } from "@heroicons/react/24/outline";

type Student = {
  name: string;
  email: string;
  enrolledCourses: string[]; // Course titles
  category: "Beginner" | "Intermediate" | "Advanced";
  status: "Active" | "Inactive";
  enrolledDate: string; // ISO string
  progress: number; // Progress as a percentage (0-100)
};

const StudentsList = () => {
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("all");

  const students: Student[] = [
    {
      name: "John Doe",
      email: "john@example.com",
      enrolledCourses: ["React Basics", "Node.js Mastery"],
      category: "Beginner",
      status: "Active",
      enrolledDate: "2024-12-15",
      progress: 75, // Example progress
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      enrolledCourses: ["Node.js Mastery"],
      category: "Advanced",
      status: "Inactive",
      enrolledDate: "2024-11-22",
      progress: 40, // Example progress
    },
    {
      name: "Tom Jerry",
      email: "tom@example.com",
      enrolledCourses: ["React Basics", "Video Editing"],
      category: "Intermediate",
      status: "Active",
      enrolledDate: "2025-01-10",
      progress: 55, // Example progress
    },
    {
      name: "Aliya Ray",
      email: "aliya@example.com",
      enrolledCourses: ["Video Editing"],
      category: "Beginner",
      status: "Active",
      enrolledDate: "2025-03-02",
      progress: 90, // Example progress
    },
    {
      name: "Tomy Jerry",
      email: "tomy@example.com",
      enrolledCourses: ["React Basics", "Video Editing"],
      category: "Intermediate",
      status: "Active",
      enrolledDate: "2025-01-10",
      progress: 55, // Example progress
    },
    {
      name: "Aliooa Ray",
      email: "aliyua@example.com",
      enrolledCourses: ["Video Editing"],
      category: "Beginner",
      status: "Active",
      enrolledDate: "2025-03-02",
      progress: 90, // Example progress
    },
  ];

  const allCourses = useMemo(() => {
    const courses = new Set<string>();
    students.forEach((s) => s.enrolledCourses.forEach((c) => courses.add(c)));
    return ["all", ...Array.from(courses)];
  }, [students]);

  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      const matchesSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.email.toLowerCase().includes(search.toLowerCase());
      const matchesCourse =
        selectedCourse === "all" || s.enrolledCourses.includes(selectedCourse);
      return matchesSearch && matchesCourse;
    });
  }, [search, selectedCourse, students]);

  const courseStats = useMemo(() => {
    const courseMap = new Map<string, number>();
    students.forEach((student) => {
      student.enrolledCourses.forEach((course) => {
        courseMap.set(course, (courseMap.get(course) || 0) + 1);
      });
    });
    return Array.from(courseMap, ([name, count]) => ({ name, count }));
  }, [students]);

  // Calculate student enrollment by day
  const dailyEnrollments = useMemo(() => {
    const dateMap = new Map<string, number>();
    students.forEach((student) => {
      const date = student.enrolledDate.split("T")[0]; // Extract the date portion
      dateMap.set(date, (dateMap.get(date) || 0) + 1);
    });
    return Array.from(dateMap, ([date, count]) => ({ date, count }));
  }, [students]);

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
            {allCourses.map((course) => (
              <button
                key={course}
                onClick={() => setSelectedCourse(course)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  selectedCourse === course
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {course}
              </button>
            ))}
          </div>
        </div>

            {/* Course Popularity Pie Chart */}
      <div className="bg-white rounded-lg p-6 shadow mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Course Popularity
        </h3>
        <div className="h-96 w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={courseStats}
                dataKey="count"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={60}
                fill="#8E1616"
                label
                isAnimationActive={true}
                animationDuration={1000}
              >
                {courseStats.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={['#8E1616', '#D84040', '#FF9F66', '#FFC857', '#89CFF0', '#7D5BA6'][index % 6]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>


        {/* Daily Student Enrollment Chart as Line Graph */}
        <div className="bg-white rounded-lg p-6 shadow mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Student Enrollment by Day
          </h3>
          <div className="h-96 w-full"> {/* Increased the height */}
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyEnrollments}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#8E1616" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="min-w-full bg-white text-sm text-left">
            <thead className="bg-gradient-to-r from-indigo-50 to-purple-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Enrolled Courses</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Enrolled Date</th>
                <th className="px-4 py-3 font-medium">Progress</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredStudents.map((student, index) => (
                <tr
                  key={index}
                  className="hover:bg-purple-50 transition-all duration-200"
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {student.name}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{student.email}</td>
                  <td className="px-4 py-3">
                    {student.enrolledCourses.map((course, i) => (
                      <span
                        key={i}
                        className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-semibold rounded-full mr-2 mb-1"
                      >
                        {course}
                      </span>
                    ))}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        student.category === "Beginner"
                          ? "bg-green-100 text-green-700"
                          : student.category === "Intermediate"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {student.category}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        student.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {new Date(student.enrolledDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{student.progress}%</span>
                  </td>
                </tr>
              ))}
              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center p-6 text-gray-400">
                    No students found.
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
