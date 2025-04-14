import SummaryChart from "../../../(components)/instructor/SummaryChart";
import SavingGoal from "../../../(components)/instructor/SavingGoal";
import ExpenseGrid from "../../../(components)/instructor/ExpenseGrid";

export default function DashboardPage() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Saving Summary</h2>
          <SummaryChart />
        </div>
        <SavingGoal />
      </div>

      <div className="mt-8">
        <ExpenseGrid />
      </div>
    </main>
  );
}
