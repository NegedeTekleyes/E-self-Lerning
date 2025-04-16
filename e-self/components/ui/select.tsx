// app/components/ui/select.tsx
import React, { ReactNode } from "react";

interface SelectProps {
  children: ReactNode;
}

const Select: React.FC<SelectProps> = ({ children }) => {
  return <div className="relative">{children}</div>;
};

interface SelectContentProps {
  children: ReactNode;
}

const SelectContent: React.FC<SelectContentProps> = ({ children }) => {
  return (
    <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      {children}
    </div>
  );
};

interface SelectItemProps {
  value: string;
  onClick?: () => void;
  children: ReactNode;
}

const SelectItem: React.FC<SelectItemProps> = ({ value, onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-100"
      role="option"
      aria-selected={false}
      data-value={value}
    >
      <span className="block truncate">{children}</span>
    </div>
  );
};

interface SelectTriggerProps {
  onClick: () => void;
  children: ReactNode;
}

const SelectTrigger: React.FC<SelectTriggerProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-left text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus-visible:border-red-500"
      aria-haspopup="listbox"
      aria-expanded="false"
    >
      {children}
    </button>
  );
};

interface SelectValueProps {
  placeholder?: string;
  children: ReactNode;
}

const SelectValue: React.FC<SelectValueProps> = ({ placeholder, children }) => {
  return <span className="block truncate">{children || <span className="text-gray-500">{placeholder}</span>}</span>;
};

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };