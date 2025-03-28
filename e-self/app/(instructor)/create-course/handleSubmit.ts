import { useRouter } from 'next/navigation';

export function handleSubmit(formData: any) {
  const router = useRouter();

  return (e: React.FormEvent) => {
    e.preventDefault();

    // Build query parameters for the new course page
    const queryParams = new URLSearchParams(formData).toString();

    // Redirect with query parameters
    router.push(`/new?${queryParams}`);
  };
}
