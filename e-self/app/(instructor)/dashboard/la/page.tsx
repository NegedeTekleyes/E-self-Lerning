import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Saving Summary */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Saving Summary</h2>
            <div className="relative">
              <button
                className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-expanded="false"
                aria-haspopup="true"
              >
                This month
                <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {/* Dropdown content (optional) */}
            </div>
          </div>
          {/* Placeholder for the line chart */}
          <div className="w-full h-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
            {/* Replace this with your actual chart component */}
            <span>Line Chart Placeholder</span>
          </div>
        </div>

        {/* Saving Goal */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Saving Goal</h2>
          </div>
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 8v1m0-8c-1.11 0-2.08.402-2.599 1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Target Achieved
              </div>
              <p className="text-lg font-semibold text-gray-800">$101.00</p>
            </div>
            <div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                This month Target
              </div>
              <p className="text-lg font-semibold text-gray-800">$821.00</p>
            </div>
          </div>
          {/* Placeholder for the gauge chart */}
          <div className="relative w-32 h-16 mx-auto">
            <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Simulate gauge needle */}
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-500 h-full rounded-full origin-bottom transition-transform duration-300"
                  style={{ width: '6px', transform: 'rotate(60deg)' }} // Adjust rotation based on progress
                ></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-semibold text-gray-700">
                  {/* Display percentage or progress */}
                  <span>{Math.round((101 / 821) * 100)}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-600 mt-2">Target vs Achievement</div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline w-full">
            Add New
          </button>
        </div>

        {/* Expenses Goals by Category */}
        <div className="bg-white rounded-lg shadow-md p-6 col-span-1 md:col-span-2 lg:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Expenses Goals by Category</h2>
            {/* Optional: Add more controls here */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Housing */}
            <div className="bg-green-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-green-500 text-white rounded-md flex items-center justify-center mr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-green-700">Housing</h3>
              </div>
              <p className="text-xl font-bold text-gray-800">$101.00</p>
              <button className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline text-sm w-full">
                Adjust
              </button>
            </div>

            {/* Feed */}
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-gray-500 text-white rounded-md flex items-center justify-center mr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v-1c0-1.1.9-2 2-2h12a2 2 0 012 2v1m-1 5h-.5m0 0H9m.00 0l-.5-.5M12 16.5l-4.5-4.5m0 0L12 7.5m0 0l4.5 4.5M12 16.5l4.5-4.5m-4.5 4.5v-2.5M12 7.5v2.5"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700">Feed</h3>
              </div>
              <p className="text-xl font-bold text-gray-800">$101.00</p>
              <button className="mt-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline text-sm w-full">
                Adjust
              </button>
            </div>

            {/* Transportation */}
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-gray-500 text-white rounded-md flex items-center justify-center mr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17l-5 5m0 0l5-5m-5 5v-5a1 1 0 011-1h3m9 1l-5 5m0 0l5-5m-5 5v-5a1 1 0 011-1h3m-9 0h9"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700">Transportation</h3>
              </div>
              <p className="text-xl font-bold text-gray-800">$101.00</p>
              <button className="mt-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline text-sm w-full">
                Adjust
              </button>
            </div>

            {/* Entertainment */}
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-gray-500 text-white rounded-md flex items-center justify-center mr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-2 4l-2 2m0 0l-2-2m2 2l2 2m-2-2l2-2"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700">Entertainment</h3>
              </div>
              <p className="text-xl font-bold text-gray-800">$101.00</p>
              <button className="mt-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline text-sm w-full">
                Adjust
              </button>
            </div>

            {/* Shopping */}
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-gray-500 text-white rounded-md flex items-center justify-center mr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700">Shopping</h3>
              </div>
              <p className="text-xl font-bold text-gray-800">$101.00</p>
              <button className="mt-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline text-sm w-full">
                Adjust
              </button>
            </div>

            {/* Others */}
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-gray-500 text-white rounded-md flex items-center justify-center mr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700">Others</h3>
              </div>
              <p className="text-xl font-bold text-gray-800">$101.00</p>
              <button className="mt-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline text-sm w-full">
                Adjust
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;