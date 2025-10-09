"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Settings, User, CreditCard, Bell } from "lucide-react";

const InstructorSettingsPage: React.FC = () => {
  const [profileName] = useState("John Doe");
  const [profileBio] = useState(
    "Experienced educator in web development and design."
  );
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("+1 123 456 7890");
  const [teachingLanguage, setTeachingLanguage] = useState("English");
  const [preferredCategories, setPreferredCategories] = useState<string[]>([
    "Technology",
    "Design",
  ]);
  const [enrollmentAlerts, setEnrollmentAlerts] = useState(true);
  const [studentMessages, setStudentMessages] = useState(true);
  const [paymentUpdates, setPaymentUpdates] = useState(false);
  const [bankInfo] = useState("**** **** **** 1234");
  const [paymentMethod] = useState("Bank Transfer");

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const options = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setPreferredCategories(options);
  };

  const handleProfileEdit = () => alert("Edit Profile clicked");
  const handleChangePassword = () => alert("Change Password clicked");
  const handleViewEarnings = () => alert("View Earnings clicked");
  const handleSave = () => alert("Settings Saved!");
  const handleCancel = () => alert("Changes Cancelled!");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 px-4 py-8 sm:px-6 lg:px-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2 text-[#1D1616]">
            <Settings className="w-6 h-6 text-[#8E1616]" />
            Instructor Settings
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Manage your profile, preferences, and notifications.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-1 space-y-8"
        >
          {/* Profile Info */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src="/online.avif"
                alt="Profile"
                fill
                className="object-cover rounded-full shadow-md border-4 border-gray-100"
              />
            </div>
            <h2 className="text-xl font-semibold text-[#1D1616]">
              {profileName}
            </h2>
            <p className="text-sm text-gray-500 mt-1 mb-6">{profileBio}</p>
            <button
              onClick={handleProfileEdit}
              className="px-5 py-2 bg-[#8E1616] hover:bg-[#D84040] text-white rounded-md text-sm transition-all"
            >
              Edit Profile
            </button>
          </div>

          {/* Payment & Earnings */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="text-[#8E1616]" />
              <h2 className="text-lg font-semibold">Payment & Earnings</h2>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-500">Bank Information</p>
                <p className="font-medium">{bankInfo}</p>
              </div>
              <div>
                <p className="text-gray-500">Payment Method</p>
                <p className="font-medium">{paymentMethod}</p>
              </div>
            </div>
            <button
              onClick={handleViewEarnings}
              className="mt-4 w-full border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-100 transition-all"
            >
              View Earnings
            </button>
          </div>
        </motion.div>

        {/* Main Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Account Settings */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-center gap-2 mb-4">
              <User className="text-[#8E1616]" />
              <h2 className="text-lg font-semibold">Account Settings</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#8E1616] focus:border-[#8E1616] transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#8E1616] focus:border-[#8E1616] transition-all"
                />
              </div>
              <button
                onClick={handleChangePassword}
                className="mt-3 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition-all"
              >
                Change Password
              </button>
            </div>
          </div>

          {/* Teaching Preferences */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="text-[#8E1616]" />
              <h2 className="text-lg font-semibold">Teaching Preferences</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Teaching Language
                </label>
                <select
                  value={teachingLanguage}
                  onChange={(e) => setTeachingLanguage(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#8E1616] focus:border-[#8E1616] transition-all"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Preferred Course Categories
                </label>
                <select
                  multiple
                  value={preferredCategories}
                  onChange={handleCategoryChange}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 h-32 focus:ring-2 focus:ring-[#8E1616] focus:border-[#8E1616]"
                >
                  <option value="Technology">Technology</option>
                  <option value="Design">Design</option>
                  <option value="Business">Business</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Photography">Photography</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="text-[#8E1616]" />
              <h2 className="text-lg font-semibold">Notification Settings</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  label: "Enrollment Alerts",
                  checked: enrollmentAlerts,
                  toggle: () => setEnrollmentAlerts(!enrollmentAlerts),
                },
                {
                  label: "Student Messages",
                  checked: studentMessages,
                  toggle: () => setStudentMessages(!studentMessages),
                },
                {
                  label: "Payment Updates",
                  checked: paymentUpdates,
                  toggle: () => setPaymentUpdates(!paymentUpdates),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-gray-100 pb-2"
                >
                  <span className="text-sm font-medium text-gray-700">
                    {item.label}
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={item.toggle}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#8E1616] after:content-[''] after:absolute after:w-5 after:h-5 after:bg-white after:rounded-full after:top-[2px] after:left-[2px] peer-checked:after:translate-x-full after:transition-all"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-10 flex justify-end space-x-4">
        <button
          onClick={handleCancel}
          className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-all"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-[#8E1616] text-white rounded-md hover:bg-[#D84040] transition-all"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default InstructorSettingsPage;
