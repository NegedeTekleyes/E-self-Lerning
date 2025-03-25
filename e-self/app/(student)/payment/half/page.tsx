"use client";

import { useRouter } from "next/navigation";

export default function HalfPaymentPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto p-6 max-w-lg text-center">
      <h1 className="text-3xl font-bold mb-6">Half Payment</h1>
      <p className="text-lg text-gray-700 mb-4">
        You are about to make a **half payment** for your selected courses.
      </p>
      <button
        className="bg-[#8E1616] text-white px-5 py-2 rounded hover:bg-[#D84040] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D84040] w-full"
      >
        Proceed to Payment
      </button>
      <button
        onClick={() => router.back()}
        className="mt-4 text-[#8E1616] hover:underline"
      >
        Back to Cart
      </button>
    </div>
  );
}
