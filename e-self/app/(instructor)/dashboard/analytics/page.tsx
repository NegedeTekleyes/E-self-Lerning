"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  BarChart, Bar, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const COLORS = ["#8E1616", "#D84040", "#FF9F66", "#FFC857", "#89CFF0", "#7D5BA6"];

const mockEarnings = [
  { date: "Apr 10", total: 200 },
  { date: "Apr 11", total: 250 },
  { date: "Apr 12", total: 220 },
  { date: "Apr 13", total: 300 },
  { date: "Apr 14", total: 400 },
  { date: "Apr 15", total: 370 },
  { date: "Apr 16", total: 500 },
];

const mockCourses = [
  { name: "React Basics", earnings: 800 },
  { name: "Next.js Pro", earnings: 1200 },
  { name: "UI Design", earnings: 600 },
];

const enrollmentData = [
  { name: "React Basics", value: 50 },
  { name: "Next.js Pro", value: 80 },
  { name: "UI Design", value: 30 },
];

export default function InstructorAnalyticsPage() {
  const totalEarnings = useMemo(() => mockEarnings.reduce((acc, cur) => acc + cur.total, 0), []);
  const dailyDiff = mockEarnings[mockEarnings.length - 1].total - mockEarnings[mockEarnings.length - 2].total;

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-8">
      <motion.h1
        className="text-3xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Instructor Analytics
      </motion.h1>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[{
          title: "Total Earnings",
          value: `ETB ${totalEarnings}`,
          color: "bg-red-600"
        }, {
          title: "Change From Yesterday",
          value: `${dailyDiff >= 0 ? "+" : ""}${dailyDiff} ETB`,
          color: dailyDiff >= 0 ? "bg-green-500" : "bg-red-500"
        }, {
          title: "Top Earning Course",
          value: `${mockCourses[1].name} (ETB ${mockCourses[1].earnings})`,
          color: "bg-gray-800"
        }].map((card, i) => (
          <motion.div
            key={i}
            className={`rounded-xl shadow-lg p-6 text-white ${card.color} cursor-pointer hover:scale-105 transition-transform`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-sm">{card.title}</h3>
            <p className="text-xl font-bold mt-2">{card.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart: Earnings Over Time */}
        <Card className="overflow-x-auto">
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Earnings Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockEarnings}>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#8E1616" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart: Course Earnings */}
        <Card className="overflow-x-auto">
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Course Earnings</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockCourses}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="earnings" fill="#D84040" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Pie Chart: Enrollment Distribution */}
      <Card className="overflow-x-auto">
        <CardContent>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Enrollment Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={enrollmentData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {enrollmentData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
