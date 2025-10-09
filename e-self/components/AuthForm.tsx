'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, UserPlus } from 'lucide-react';

interface AuthFormProps {
  title: string;
  buttonText: string;
  linkHref: string;
  linkText: string;
  linkPrompt: string;
  isSignUp?: boolean;
  onSubmit: (email: string, password: string, confirmPassword?: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  buttonText,
  linkHref,
  linkText,
  linkPrompt,
  isSignUp = false,
  onSubmit,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, isSignUp ? confirmPassword : undefined);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f7f7f7] to-[#e8e8e8] relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#8E1616]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#8E1616]/20 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Card className="w-full max-w-md p-8 shadow-2xl border border-gray-100 rounded-2xl backdrop-blur-sm bg-white/90">
          <CardContent>
            <h2 className="text-3xl font-bold text-center mb-6 text-[#1D1616]">{title}</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder={isSignUp ? 'Enter password' : 'Enter your password'}
                    className="pl-10"
                  />
                </div>
              </div>

              {isSignUp && (
                <div>
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
                  <div className="relative mt-1">
                    <UserPlus className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      placeholder="Confirm your password"
                      className="pl-10"
                    />
                  </div>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-[#8E1616] hover:bg-[#A61919] text-white font-semibold py-2 transition-all duration-200 rounded-lg shadow-md hover:shadow-lg"
              >
                {buttonText}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              {linkPrompt}{' '}
              <Link href={linkHref} className="text-[#8E1616] font-medium hover:underline">
                {linkText}
              </Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AuthForm;
