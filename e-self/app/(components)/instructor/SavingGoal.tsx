export default function SavingGoal() {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h2 className="text-xl font-semibold mb-4">Saving Goal</h2>
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center text-green-600 font-bold">
          88%
        </div>
        <p className="text-sm text-gray-500">Target in Achievement</p>
        <button className="text-sm text-blue-600 underline">Add Goal</button>
      </div>
    </div>
  );
}
