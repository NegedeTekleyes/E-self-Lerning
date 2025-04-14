import SummaryChart from "../../../(components)/instructor/SummaryChart";
import ExpenseGrid from "../../../(components)/instructor/ExpenseGrid";

export default function DashboardPage() {
  // Placeholder data – replace with dynamic logic if needed
  const totalBalance = "12,300 ETB";
  const outBalance = "3,500 ETB";
  const courseBreakdown = [
    { course: "JavaScript Essentials", balance: "5,000 ETB" },
    { course: "React Masterclass", balance: "4,000 ETB" },
    { course: "Node.js API", balance: "3,300 ETB" },
  ];

  const importantInfos = [
    "New payment policy effective from May 1st.",
    "Ensure course content is updated before publishing.",
    "Certification will only be issued for completed courses.",
  ];

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Summary and Balance Breakdown */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Saving Summary</h2>
            <div className="text-sm text-gray-600">
              Total Balance: <span className="font-bold text-[#8E1616]">{totalBalance}</span>
            </div>
          </div>

          <SummaryChart />

          {/* Out Balance */}
          <div className="mt-6">
            <h3 className="text-md font-semibold mb-2">Out Balance</h3>
            <p className="text-gray-700">{outBalance}</p>
          </div>

          {/* Course-wise Balance */}
          <div className="mt-4">
            <h3 className="text-md font-semibold mb-2">Earnings by Course</h3>
            <ul className="space-y-1">
              {courseBreakdown.map((item, index) => (
                <li key={index} className="text-gray-700 flex justify-between">
                  <span>{item.course}</span>
                  <span className="font-medium">{item.balance}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Important Info */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4 text-[#8E1616]">Important Info</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
            {importantInfos.map((info, idx) => (
              <li key={idx}>{info}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Expense Grid Section */}
      <div className="mt-8">
        <ExpenseGrid />
      </div>
    </main>
  );
}
