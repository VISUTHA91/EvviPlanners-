import React, { useRef, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Line, LineChart } from "recharts";


const SalesReport = () => {
  const printRef = useRef();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const data = [
    { day: "Tue", sales: 800 },
    { day: "Mon", sales: 400 },
    { day: "Wed", sales: 600 },
    { day: "Thu", sales: 700 },
    { day: "Fri", sales: 900 },
    { day: "Sat", sales: 1100 },
    { day: "Sun", sales: 1300 },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Sales Report</h2>
      <p className="text-gray-500">Here is the sales report of this month.</p>

      {/* Date Range & Print Button */}
      <div className="flex flex-wrap gap-4 my-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border px-4 py-2 rounded-md"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border px-4 py-2 rounded-md"
        />
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Print Report
        </button>
      </div>

      <div ref={printRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sales Overview */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold">Total Sales</h3>
          <p className="text-3xl font-bold">₹74,958.49</p>
          <p className="text-gray-500">₹7,395.37 in last month</p>
          <p className="mt-2 text-xl font-semibold">₹1,338.72 this week</p>
          <p className="text-green-500">↑ 4.63% vs. last week</p>
          {/* Sales Trend Graph (Mock) */}
          <div className="mt-4 h-20 bg-purple-100 rounded-md"> 
          <ResponsiveContainer width="100%" height={80}>  {/* Increased height */}
          <BarChart data={data}>
            <XAxis 
              dataKey="day" 
              tick={{ fontSize: 10 }} 
              interval={0} /* Ensures all days are shown */
            />
            <Tooltip />
            <Bar dataKey="sales" fill="#f472b6" radius={[5, 5, 0, 0]} barSize={15} />
          </BarChart>
        </ResponsiveContainer>
          {/* <ResponsiveContainer width="100%" height={50}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="sales" stroke="#f472b6" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer> */}
         {/* <ResponsiveContainer width="100%" height={50}>
          <LineChart data={data}>
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#f472b6" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer> */}
        </div>
        </div>

        {/* Most Sold Medicines */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold">Most Sold Products</h3>
          <p className="text-gray-500">In last 30 days</p>
          <div className="mt-4 space-y-3">
            {[
              { name: "Black Floral", value: 98 },
              { name: "LushForest", value: 73 },
              { name: "Big Dreams", value: 43 },
              { name: "Marble Maze", value: 29 },
              { name: "Planners", value: 18 },
            ].map((item) => (
              <div key={item.name}>
                <p className="font-medium">{item.name} ({item.value}%)</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${item.value}%`, backgroundColor: getColor(item.value) }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Function to assign colors based on value
const getColor = (value) => {
  if (value > 80) return "green";
  if (value > 60) return "yellow";
  if (value > 40) return "blue";
  return "pink";
};

export default SalesReport;
