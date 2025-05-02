// context/AuthContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  role: 'student' | 'instructor';
  email: string;
  // Add other user properties as needed
}

interface AuthContextType {
  user: User | null;
  login: (email: string, role: 'student' | 'instructor') => void; // Modify login function
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, role: 'student' | 'instructor') => { // Modify login function
    setUser({ email, role });
    // Add logic to store tokens, etc.
  };

  const logout = () => {
    setUser(null);
    // Add logic to clear tokens, etc.
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};