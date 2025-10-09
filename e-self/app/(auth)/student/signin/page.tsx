'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext'; 
import AuthForm from '@/components/AuthForm'; 

const StudentSignIn = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleSignIn = (email: string, password: string) => {
    // Add your actual sign-in logic here (e.g., API call)
    if (email && password) {
      login(email, 'student'); 
      router.push('/');
    } else {
      alert('Please enter email and password.');
    }
  };

  return (
    <AuthForm
      title="Student Sign In"
      buttonText="Sign In"
      linkHref="/student/signup"
      linkText="Sign Up"
      linkPrompt="Don't have an account?"
      onSubmit={handleSignIn}
    />
  );
};

export default StudentSignIn;