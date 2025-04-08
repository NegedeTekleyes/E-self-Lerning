"use client";
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Invoice {
  number: string;
  to: string;
  date: string;
  amount: number;
  status: 'Due' | 'Paid' | 'Overdue';
}

interface Transaction {
  cardType: 'Mastercard' | 'VISA';
  name: string;
  expiry: string;
  amount: number;
}

const recentInvoices: Invoice[] = [
  { number: 'INV-0012', to: 'Bruno Marks', date: '10 Oct 2023 | 09:00 PM', amount: 1056, status: 'Due' },
  { number: 'INV-0015', to: 'Simon Orion', date: '11 Oct 2023 | 02:00 AM', amount: 1799, status: 'Paid' },
  { number: 'INV-0014', to: 'Annalisa', date: '12 Oct 2023 | 12:00 PM', amount: 1056, status: 'Paid' },
];

const recentTransactions: Transaction[] = [
  { cardType: 'Mastercard', name: 'Bruno Marks', expiry: 'Expiry 11/2023', amount: -192 },
  { cardType: 'VISA', name: 'Bruno Marks', expiry: 'Expiry 11/2023', amount: -110 },
];

const cashFlowData = {
  labels: ['Oct 10', 'Oct 11', 'Oct 12', 'Oct 13', 'Oct 14', 'Oct 15', 'Oct 16', 'Oct 17'],
  datasets: [
    {
      label: 'Profit',
      data: [20, 35, 25, 40, 30, 45, 35, 50],
      backgroundColor: '#a7f3d0', // Tailwind's green-200
    },
    {
      label: 'Income',
      data: [50, 60, 70, 65, 75, 80, 70, 85],
      backgroundColor: '#6ee7b7', // Tailwind's green-400
    },
    {
      label: 'Expand',
      data: [30, 25, 45, 25, 45, 35, 35, 20],
      backgroundColor: '#34d399', // Tailwind's green-600
    },
  ],
};

const CashFlowAnalytics = () => {
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Cash Flow analytics',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => `$${value}k`,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Cash Flow analytics</h2>
      <div className="flex items-center mb-2">
        <span className="text-2xl font-bold text-green-600">$524,231</span>
        <span className="ml-2 text-sm text-green-500">16.5%</span>
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-200 mr-1"></div>
          <span className="text-sm text-gray-600">Profit</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-400 mr-1"></div>
          <span className="text-sm text-gray-600">Income</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-600 mr-1"></div>
          <span className="text-sm text-gray-600">Expand</span>
        </div>
      </div>
      <div className="h-64">
        <Bar options={options} data={cashFlowData} />
      </div>
    </div>
  );
};

const RecentInvoiceBilling = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Invoice & Billing</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {recentInvoices.map((invoice) => (
            <tr key={invoice.number}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{invoice.number}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{invoice.to}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{invoice.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">${invoice.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    invoice.status === 'Due' ? 'bg-yellow-100 text-yellow-800' :
                    invoice.status === 'Paid' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}
                >
                  {invoice.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const RecentTransactions = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Transaction</h2>
    <ul className="space-y-3">
      {recentTransactions.map((transaction, index) => (
        <li key={index} className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {transaction.cardType === 'Mastercard' && (
              <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center">MC</div>
            )}
            {transaction.cardType === 'VISA' && (
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">VISA</div>
            )}
            <div>
              <p className="text-sm font-medium text-gray-900">{transaction.name}</p>
              <p className="text-xs text-gray-500">{transaction.expiry}</p>
            </div>
          </div>
          <span className={`text-sm font-semibold ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
            ${transaction.amount}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const Dashboard = () => (
  <div className="bg-gray-100 min-h-screen p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Balance</p>
            <p className="text-2xl font-bold text-gray-800">$1,200 USD</p>
          </div>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md">
            Transfer <span className="ml-1 text-sm">&#8594;</span>
          </button>
        </div>
      </div>

      {/* Cash Flow Analytics Component */}
      <CashFlowAnalytics />

      {/* Recent Invoice & Billing Component */}
      <RecentInvoiceBilling />

      {/* Recent Transactions Component */}
      <RecentTransactions />

      {/* Placeholder for the top right card */}
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-sm font-medium text-gray-500">Card Holder</p>
        <p className="text-lg font-semibold text-gray-800">Robert Burner</p>
        <p className="text-xs text-gray-500">**** **** **** 4567</p>
        <p className="text-xs text-gray-500">12/24</p>
      </div>

      {/* Placeholder for All Transactions */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">All Transaction</h2>
          <button className="text-indigo-500 text-sm font-semibold">All Transaction</button>
        </div>
        <ul>
          <li className="flex items-center justify-between py-2">
            <span className="text-gray-700">+ $192.00</span>
            <span className="text-gray-500 text-sm">10 Oct</span>
          </li>
          <li className="flex items-center justify-between py-2">
            <span className="text-gray-700">- $110.00</span>
            <span className="text-gray-500 text-sm">09 Oct</span>
          </li>
          {/* Add more transactions here */}
        </ul>
      </div>

      {/* Placeholder for Choose Recipient */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose Recipient</h2>
        {/* Add recipient selection UI here */}
      </div>
    </div>

    {/* Smaller Cash Flow Analytics for smaller screens */}
    <div className="fixed bottom-0 left-0 w-full bg-white shadow py-4 px-6 md:hidden">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">Cash Flow analytics</p>
          <div className="flex items-center">
            <span className="text-lg font-bold text-green-600">$524,231</span>
            <span className="ml-1 text-xs text-green-500">16.5%</span>
          </div>
        </div>
        {/* You could add a mini chart or a button to view full analytics */}
      </div>
    </div>
  </div>
);

export default Dashboard;