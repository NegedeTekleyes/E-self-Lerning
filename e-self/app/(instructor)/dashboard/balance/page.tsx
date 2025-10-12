"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

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

const enrollmentData = [
  { name: "React Basics", value: 50 },
  { name: "Next.js Pro", value: 80 },
  { name: "UI Design", value: 30 },
];

export default function InstructorAnalyticsPage() {
  const totalEarnings = mockEarnings.reduce((acc, cur) => acc + cur.total, 0);
  const dailyDiff =
    mockEarnings[mockEarnings.length - 1].total -
    mockEarnings[mockEarnings.length - 2].total;

  return (
    <div className="p-6 space-y-8 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Header Section */}
      <motion.div
        className="flex items-center justify-between flex-wrap gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-[#1D1616] tracking-tight">
          Instructor Analytics
        </h1>
        <div className="flex space-x-2">
          <button className="text-sm px-3 py-1 border rounded text-[#1D1616] hover:bg-gray-200 transition">
            This Week
          </button>
          <button className="text-sm px-3 py-1 border rounded text-[#1D1616] hover:bg-gray-200 transition">
            This Month
          </button>
        </div>
      </motion.div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Total Earnings",
            value: `ETB ${totalEarnings}`,
            color: "from-[#8E1616] to-[#D84040]",
          },
          {
            title: "Change From Yesterday",
            value: `${dailyDiff >= 0 ? "+" : ""}${dailyDiff} ETB`,
            color: dailyDiff >= 0 ? "from-green-600 to-emerald-400" : "from-red-600 to-rose-400",
          },
          {
            title: "Top Earning Course",
            value: `${mockCourses[1].name} — ETB ${mockCourses[1].earnings}`,
            color: "from-[#1D1616] to-[#8884d8]",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className={`bg-gradient-to-r ${card.color} text-white shadow-xl`}>
              <CardContent className="p-5">
                <p className="text-sm opacity-80">{card.title}</p>
                <h2 className="text-2xl font-semibold mt-1">{card.value}</h2>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="bg-white shadow-md hover:shadow-lg transition">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Earnings Over Time
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockEarnings}>
                  <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#8E1616"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                  <CartesianGrid stroke="#eee" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Card className="bg-white shadow-md hover:shadow-lg transition">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Course Earnings
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockCourses}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="earnings" fill="#D84040" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Pie Chart */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Card className="bg-white shadow-md hover:shadow-lg transition">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Enrollment Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={enrollmentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  {enrollmentData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
