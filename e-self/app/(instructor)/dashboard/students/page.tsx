"use client";

import React, { useMemo, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { studentData as studentsData, Student } from "@/app/data/student";

const COLORS = ["#8E1616", "#D84040", "#FF9F66", "#FFC857", "#89CFF0", "#7D5BA6"];

const StudentsList = () => {
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("all");

  const students: Student[] = studentsData.map((student) => ({
    name: student.name,
    email: student.email,
    enrolledCourses: student.enrolledCourses,
    category: student.category,
    status: student.status,
    progress: student.progress,
    enrolledDate: student.enrolledDate,
  }));

  const allCourses = useMemo(() => {
    const set = new Set<string>();
    students.forEach((s) => s.enrolledCourses.forEach((c) => set.add(c)));
    return ["all", ...Array.from(set)];
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
    const counts = new Map<string, number>();
    students.forEach((s) =>
      s.enrolledCourses.forEach((c) =>
        counts.set(c, (counts.get(c) || 0) + 1)
      )
    );
    return Array.from(counts, ([name, count]) => ({ name, count }));
  }, [students]);

  const dailyEnrollments = useMemo(() => {
    const map = new Map<string, number>();
    students.forEach(({ enrolledDate }) => {
      map.set(enrolledDate, (map.get(enrolledDate) || 0) + 1);
    });
    return Array.from(map, ([date, count]) => ({ date, count })).sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }, [students]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen p-6">
      <motion.div
        className="max-w-7xl mx-auto space-y-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.header
          className="flex items-center justify-between"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <UserCircleIcon className="h-8 w-8 text-red-600" />
            Enrolled Students
          </h1>
        </motion.header>

        {/* Search & Filter */}
        <motion.div
          className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
          <div className="flex gap-2 overflow-x-auto">
            {allCourses.map((course) => (
              <motion.button
                key={course}
                onClick={() => setSelectedCourse(course)}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition whitespace-nowrap ${
                  selectedCourse === course
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {course}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Analytics Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Pie Chart */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Course Enrollment Distribution
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={courseStats}
                      dataKey="count"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={120}
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {courseStats.map((_, i) => (
                        <Cell
                          key={`cell-${i}`}
                          fill={COLORS[i % COLORS.length]}
                          stroke="white"
                          strokeWidth={2}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Line Chart */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Student Enrollment by Day
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dailyEnrollments}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="count"
                      stroke="#D84040"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Students Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Card className="bg-white shadow-md hover:shadow-lg transition rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Student List
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm text-gray-700">
                  <thead className="bg-gray-100">
                    <tr>
                      {[
                        "Name",
                        "Email",
                        "Enrolled Courses",
                        "Category",
                        "Status",
                        "Enrolled Date",
                        "Progress",
                      ].map((header) => (
                        <th
                          key={header}
                          className="px-6 py-3 text-left font-medium uppercase tracking-wider text-gray-600"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student, i) => (
                      <motion.tr
                        key={student.email}
                        className="hover:bg-gray-50 transition"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.03 }}
                      >
                        <td className="px-6 py-3 font-medium">{student.name}</td>
                        <td className="px-6 py-3">{student.email}</td>
                        <td className="px-6 py-3">{student.enrolledCourses.join(", ")}</td>
                        <td className="px-6 py-3">{student.category}</td>
                        <td className="px-6 py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              student.status === "active"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {student.status}
                          </span>
                        </td>
                        <td className="px-6 py-3">{student.enrolledDate}</td>
                        <td className="px-6 py-3">{student.progress}%</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StudentsList;
