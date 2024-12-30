import React from 'react'
import { Link } from 'react-router-dom'
import { Bar, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from "chart.js";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );


function MainContent() {
        // Data for charts
        const barData = {
          labels: ["Products", "Orders", "Users", "Out of Stock"],
          datasets: [
            {
              label: "Counts",
              backgroundColor: ["#10B981", "#EF4444", "#14B8A6", "#F59E0B"],
              data: [789654, 789654, 784521, 258],
            },
          ],
        };
      
        const pieData = {
          labels: ["Products", "Orders", "Users"],
          datasets: [
            {
              data: [789654, 789654, 784521],
              backgroundColor: ["#10B981", "#EF4444", "#14B8A6"],
              hoverOffset: 4,
            },
          ],
        };

  return (
  
  
    <div className="flex-grow p-2">
    <h1 className="text-3xl font-semibold mb-8">Dashboard</h1>

    {/* Summary Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-10">
      {/* Total Amount */}
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
        <div className="text-center text-xl">Sale Amount</div>
        <div className="text-center text-2xl font-bold">1824657</div>
      </div>

      {/* Products */}
      <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
        <div className="text-center text-xl">Products</div>
        <div className="text-center text-2xl font-bold">789654</div>
        <Link
          to="/Admin/AdminProductlist"
          className="block mt-4 text-center text-sm underline hover:text-gray-200"
        >
          View Details
        </Link>
      </div>

      {/* Orders */}
      <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
        <div className="text-center text-xl">Orders</div>
        <div className="text-center text-2xl font-bold">789654</div>
        <Link
          to="/Admin/AdminOrders"
          className="block mt-4 text-center text-sm underline hover:text-gray-200"
        >
          View Details
        </Link>
      </div>

      {/* Users */}
      <div className="bg-teal-500 text-white p-6 rounded-lg shadow-lg">
        <div className="text-center text-xl">Customers</div>
        <div className="text-center text-2xl font-bold">784521</div>
        <Link
          to="/Admin/Userlist"
          className="block mt-4 text-center text-sm underline hover:text-gray-200"
        >
          View Details
        </Link>
      </div>
    </div>

    {/* Charts Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Bar Chart */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Overview</h2>
        <Bar data={barData} />
      </div>

      {/* Pie Chart */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Distribution</h2>
        <Pie data={pieData} />
      </div>
    </div>
  </div>
  )
}

export default MainContent

  // <div>
    //      <div className="flex-grow p-10">
    //             <h1 className="text-3xl font-semibold mb-8">Dashboard</h1>

    //             <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
    //                 {/* Total Amount */}
    //                 <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
    //                     <div className="text-center text-xl">Total Amount</div>
    //                     <div className="text-center text-2xl font-bold">1824657</div>
    //                 </div>

    //                 {/* Products */}
    //                 <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
    //                     <div className="text-center text-xl">Products</div>
    //                     <div className="text-center text-2xl font-bold">789654</div>
    //                     <Link
    //                         to="/Admin/AdminProductlist"
    //                         className="block mt-4 text-center text-sm underline hover:text-gray-200"
    //                     >
    //                         View Details
    //                     </Link>
    //                 </div>

    //                 {/* Orders */}
    //                 <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
    //                     <div className="text-center text-xl">Orders</div>
    //                     <div className="text-center text-2xl font-bold">789654</div>
    //                     <Link
    //                         to="/Admin/AdminOrders"
    //                         className="block mt-4 text-center text-sm underline hover:text-gray-200"
    //                     >
    //                         View Details
    //                     </Link>
    //                 </div>

    //                 {/* Users */}
    //                 <div className="bg-teal-500 text-white p-6 rounded-lg shadow-lg">
    //                     <div className="text-center text-xl">Users</div>
    //                     <div className="text-center text-2xl font-bold">784521</div>
    //                     <Link
    //                         to="/Admin/Userlist"
    //                         className="block mt-4 text-center text-sm underline hover:text-gray-200"
    //                     >
    //                         View Details
    //                     </Link>
    //                 </div>

    //                 {/* Out of Stock */}
    //                 <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
    //                     <div className="text-center text-xl">Out of Stock</div>
    //                     <div className="text-center text-2xl font-bold">258</div>
    //                 </div>
    //             </div>
    //         </div>



    // </div>