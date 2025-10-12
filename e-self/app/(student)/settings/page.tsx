"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { Button } from "@/components/ui/button";

export default function Settings() {
  const { user } = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <motion.div
        className="max-w-3xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-500 mt-2">
            Manage your account, preferences, and privacy.
          </p>
        </header>

        {/* Account Settings */}
        <motion.div
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-xl font-semibold text-[#8E1616] mb-4">
            Account Information
          </h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">Email:</span>
              <span>{user?.email || "Not set"}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Username:</span>
              <span>{user?.username || "Not set"}</span>
            </div>
          </div>
        </motion.div>

        {/* Preferences */}
        <motion.div
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-xl font-semibold text-[#8E1616] mb-4">
            Preferences
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center justify-between">
              <label htmlFor="notifications" className="font-medium">
                Email Notifications
              </label>
              <input
                id="notifications"
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="w-5 h-5 accent-red-600 cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="darkMode" className="font-medium">
                Dark Mode
              </label>
              <input
                id="darkMode"
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="w-5 h-5 accent-red-600 cursor-pointer"
              />
            </div>
          </div>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          className="bg-white rounded-xl shadow-sm border border-red-200 p-6"
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-xl font-semibold text-red-600 mb-4">
            Danger Zone
          </h2>
          <p className="text-gray-600 mb-4">
            Once you delete your account, all your data will be permanently
            removed. This action cannot be undone.
          </p>
          <Button
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={() => alert("Account deletion requested")}
          >
            Delete Account
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
