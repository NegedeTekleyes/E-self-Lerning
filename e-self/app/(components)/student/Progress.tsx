import React from "react";

interface ProgressProps {
  value: number; // Progress percentage (0-100)
}

export const Progress: React.FC<ProgressProps> = ({ value }) => {
  return (
    <div className="w-full bg-gray-300 rounded-full h-3">
      <div
        className="bg-[#8E1616] h-3 rounded-full transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
