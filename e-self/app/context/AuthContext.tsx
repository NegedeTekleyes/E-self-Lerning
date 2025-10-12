'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  role: 'student' | 'instructor';
  email: string;
  username: string;
  profileImage: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, role: 'student' | 'instructor') => void;
  logout: () => void;
  updateUser: (data: Partial<User>) => void; 
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Simulated login
  const login = (email: string, role: 'student' | 'instructor') => {
    // Default values for now
    setUser({
      email,
      role,
      username: email.split('@')[0],
      profileImage: '/default-profile.png',
    });
  };

  const updateUser = (data: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...data } : prev));
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error(' useAuth must be used within an AuthProvider');
  return context;
};
