'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext'; 
import AuthForm from '@/components/AuthForm'; 

const StudentSignUp = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleSignUp = (email: string, password: string, confirmPassword?: string) => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Add your actual sign-up logic here (e.g., API call to create user)
    login(email, 'student'); 
    router.push('/');
  };

  return (
    <AuthForm
      title="Student Sign Up"
      buttonText="Sign Up"
      linkHref="/student/signin"
      linkText="Log In"
      linkPrompt="Already have an account?"
      isSignUp={true}
      onSubmit={handleSignUp}
    />
  );
};

export default StudentSignUp;