// components/AuthForm.tsx
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

interface AuthFormProps {
  title: string;
  buttonText: string;
  linkHref: string;
  linkText: string;
  linkPrompt: string;
  isSignUp?: boolean; // Flag to indicate if it's a sign-up form
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
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardContent>
          <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder={isSignUp ? 'Enter password' : 'Enter your password'}
              />
            </div>
            {isSignUp && (
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="Confirm your password"
                />
              </div>
            )}
            <Button type="submit" className="w-full bg-[#8E1616] hover:bg-[#7a1212] text-white">
            {buttonText}
          </Button>

          </form>
          <p className="mt-4 text-center text-sm">
            {linkPrompt}{' '}
            <Link href={linkHref} className="text-primary hover:underline">
              {linkText}
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;