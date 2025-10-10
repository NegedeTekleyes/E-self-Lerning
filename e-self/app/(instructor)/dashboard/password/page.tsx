"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ChangePasswordPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleShow = (field: keyof typeof showPasswords) => {
    setShowPasswords({ ...showPasswords, [field]: !showPasswords[field] });
  };

  const getPasswordStrength = (password: string) => {
    if (password.length > 8 && /[A-Z]/.test(password) && /\d/.test(password)) return "strong";
    if (password.length >= 6) return "medium";
    if (password.length > 0) return "weak";
    return "";
  };

  const strength = useMemo(() => getPasswordStrength(formData.newPassword), [formData.newPassword]);

  const strengthColor = useMemo(() => {
    switch (strength) {
      case "weak": return "bg-red-500";
      case "medium": return "bg-yellow-400";
      case "strong": return "bg-green-500";
      default: return "bg-gray-300";
    }
  }, [strength]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.newPassword !== formData.confirmPassword) {
      setError("New password and confirm password do not match!");
      return;
    }

    if (strength === "weak") {
      setError("Password is too weak!");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Password changed successfully!");
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-start">
      <div className="w-full max-w-md">
        <motion.h1
          className="text-2xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Change Password
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-6 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Current Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <input
              type={showPasswords.current ? "text" : "password"}
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="button"
              onClick={() => toggleShow("current")}
              className="absolute top-8 right-3 text-gray-400 hover:text-gray-700"
            >
              {showPasswords.current ? "Hide" : "Show"}
            </button>
          </div>

          {/* New Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type={showPasswords.new ? "text" : "password"}
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="button"
              onClick={() => toggleShow("new")}
              className="absolute top-8 right-3 text-gray-400 hover:text-gray-700"
            >
              {showPasswords.new ? "Hide" : "Show"}
            </button>
            {/* Password Strength Bar */}
            {formData.newPassword && (
              <motion.div
                className={`h-1 mt-2 rounded ${strengthColor}`}
                initial={{ width: 0 }}
                animate={{ width: `${(strength === "weak" ? 33 : strength === "medium" ? 66 : 100)}%` }}
                transition={{ duration: 0.5 }}
              />
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <input
              type={showPasswords.confirm ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="button"
              onClick={() => toggleShow("confirm")}
              className="absolute top-8 right-3 text-gray-400 hover:text-gray-700"
            >
              {showPasswords.confirm ? "Hide" : "Show"}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <motion.p
              className="text-red-600 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.p>
          )}

          {/* Buttons */}
          <div className="flex gap-4 justify-end">
            <Button
              type="button"
              onClick={() => router.back()}
              className="bg-gray-200 text-gray-800 hover:bg-gray-300"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-red-600 hover:bg-red-500 text-white"
            >
              {isSubmitting ? "Updating..." : "Change Password"}
            </Button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
