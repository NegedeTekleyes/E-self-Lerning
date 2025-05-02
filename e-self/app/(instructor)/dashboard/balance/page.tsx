// app/(instructor)/dashboard/analytics/page.tsx
"use client";

import { useEffect, useState } from "react";
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const COLORS = ["#8E1616", "#D84040", "#1D1616", "#8884d8"];

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

export default function InstructorAnalyticsPage() {
  const totalEarnings = mockEarnings.reduce((acc, cur) => acc + cur.total, 0);
  const dailyDiff =
    mockEarnings[mockEarnings.length - 1].total -
    mockEarnings[mockEarnings.length - 2].total;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-[#1D1616]">Instructor Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Total Earnings</p>
            <h2 className="text-2xl font-semibold">ETB {totalEarnings}</h2>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Change From Yesterday</p>
            <h2 className={`text-2xl font-semibold ${dailyDiff >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {dailyDiff >= 0 ? "+" : ""}{dailyDiff} ETB
            </h2>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Top Earning Course</p>
            <h2 className="text-xl font-semibold">{mockCourses[1].name}</h2>
            <p className="text-sm text-gray-600">ETB {mockCourses[1].earnings}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart for daily earnings */}
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Earnings Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockEarnings}>
                <Line type="monotone" dataKey="total" stroke="#8E1616" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart for course earnings */}
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Course Earnings</h3>
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
    </div>
  );
}
