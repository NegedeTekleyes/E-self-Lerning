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

const COLORS = ["#8E1616", "#D84040", "#FF9F66", "#FFC857", "#89CFF0", "#7D5BA6"];

type Student = {
  name: string;
  email: string;
  enrolledCourses: string[];
  category: "Beginner" | "Intermediate" | "Advanced";
  status: "Active" | "Inactive";
  enrolledDate: string;
  progress: number;
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
      progress: 75,
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      enrolledCourses: ["Node.js Mastery"],
      category: "Advanced",
      status: "Inactive",
      enrolledDate: "2024-11-22",
      progress: 40,
    },
    {
      name: "Tom Jerry",
      email: "tom@example.com",
      enrolledCourses: ["React Basics", "Video Editing"],
      category: "Intermediate",
      status: "Active",
      enrolledDate: "2025-01-10",
      progress: 55,
    },
    {
      name: "Aliya Ray",
      email: "aliya@example.com",
      enrolledCourses: ["Video Editing"],
      category: "Beginner",
      status: "Active",
      enrolledDate: "2025-03-02",
      progress: 90,
    },
    {
      name: "Tomy Jerry",
      email: "tomy@example.com",
      enrolledCourses: ["React Basics", "Video Editing"],
      category: "Intermediate",
      status: "Active",
      enrolledDate: "2025-01-10",
      progress: 55,
    },
    {
      name: "Aliooa Ray",
      email: "aliyua@example.com",
      enrolledCourses: ["Video Editing"],
      category: "Beginner",
      status: "Active",
      enrolledDate: "2025-03-02",
      progress: 90,
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
  }, [search, selectedCourse]);

  const courseStats = useMemo(() => {
    const map = new Map<string, number>();
    students.forEach((s) => {
      s.enrolledCourses.forEach((c) => {
        map.set(c, (map.get(c) || 0) + 1);
      });
    });
    return Array.from(map, ([name, count]) => ({ name, count }));
  }, [students]);

  const dailyEnrollments = useMemo(() => {
    const map = new Map<string, number>();
    students.forEach(({ enrolledDate }) => {
      const date = enrolledDate.split("T")[0];
      map.set(date, (map.get(date) || 0) + 1);
    });
    return Array.from(map, ([date, count]) => ({ date, count })).sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }, [students]);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <UserCircleIcon className="h-7 w-7 text-red-600" />
            Enrolled Students
          </h1>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Enrollment Analytics
            </h3>
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1 h-[28rem]">
                <h4 className="text-md font-semibold text-gray-600 mb-4">
                  Course Enrollment Distribution
                </h4>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={courseStats}
                      dataKey="count"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={130}
                      innerRadius={70}
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {courseStats.map((_, i) => (
                        <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 h-[28rem]">
                <h4 className="text-md font-semibold text-gray-600 mb-4">
                  Student Enrollment by Day
                </h4>
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentsList;