export default function Hero() {
  return (
    <div className="relative">
      <img src="/full-stack.jpeg" alt="Hero Image" className="w-full h-96 object-cover" />
      <div className="absolute inset-0 flex items-center justify-center text-white text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Unlock Your Potential with E-Self</h1>
          <p className="text-lg">Learn new skills and advance your career.</p>
        </div>
      </div>
    </div>
  );
}