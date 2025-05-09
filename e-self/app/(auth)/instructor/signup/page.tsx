// app/(auth)/instructor/signup/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext'; // Adjust the path as needed
import AuthForm from '@/components/AuthForm'; // Adjust the path as needed

const InstructorSignUp = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleSignUp = (email: string, password: string, confirmPassword?: string) => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Add your actual sign-up logic here (e.g., API call to create user)
    // For now, keeping the placeholder logic
    login(email, 'instructor'); // Assuming login handles the role and perhaps calls your signup API internally
    router.push('/dashboard'); // Redirect after successful signup
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