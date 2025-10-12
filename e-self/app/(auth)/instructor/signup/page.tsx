'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext'; 
import AuthForm from '@/components/AuthForm'; 

const InstructorSignUp = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleSignUp = (email: string, password: string, confirmPassword?: string) => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    login(email, 'instructor'); 
    router.push('/dashboard'); 
  };

  return (
    <AuthForm
      title="Instructor Sign Up"
      buttonText="Sign Up"
      linkHref="/instructor/signin"
      linkText="Log In"
      linkPrompt="Already have an account?"
      isSignUp={true}
      onSubmit={handleSignUp}
    />
  );
};

export default InstructorSignUp;