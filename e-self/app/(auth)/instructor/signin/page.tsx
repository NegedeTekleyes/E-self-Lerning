'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext'; 
import AuthForm from '@/components/AuthForm'; 

const InstructorSignIn = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleSignIn = (email: string, password: string) => {
    if (email && password) {
      login(email, 'instructor'); 
      router.push('/dashboard'); 
    } else {
      alert('Please enter email and password.');
    }
  };

  return (
    <AuthForm
      title="Instructor Sign In"
      buttonText="Sign In"
      linkHref="/instructor/signup"
      linkText="Sign Up"
      linkPrompt="Don't have an account?"
      onSubmit={handleSignIn}
    />
  );
};

export default InstructorSignIn;