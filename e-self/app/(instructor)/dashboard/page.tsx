// instructor/dashboard/page.tsx
import { useAuth } from '../../context/AuthContext';

export default function InstructorDashboard() {
  const { user } = useAuth();

  if (!user || user.role !== 'instructor') {
    return <p>You are not authorized to view this page.</p>;
  }

  return <h1>Welcome to the Instructor Dashboard!</h1>;
}