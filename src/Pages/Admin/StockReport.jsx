// import React from "react";
// import { useState } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";
// const stockData = [
//   { id: "565601", name: "DatedPlanner", quantity: 70, price: 130, status: "Available" },
//   { id: "125GG5", name: "Planners", quantity: 60, price: 220, status: "Available" },
//   { id: "12UFG5", name: "Big Dreams", quantity: 0, price:150, status: "Out of Stock" },
//   { id: "12UFG5", name: "Black Floral", quantity: 70, price: 400, status: "Out of Stock" },
//   { id: "12UFG5", name: "LushForest", quantity: 20, price: 510, status: "Low" },
//   { id: "12UFG5", name: "Black Floral", quantity: 80, price: 300, status: "Out of Stock" },
//   { id: "12UFG5", name: "Marble Maze", quantity: 10, price: 200, status: "Low" },
// ];
// const statusColors = {
//   Available: "text-green-500",
//   Low: "text-yellow-500",
//   "Out of Stock": "text-red-500",
// };
// export default function StockReport() {
//   const [search, setSearch] = useState("");
//   const [filterStatus, setFilterStatus] = useState("");
//   const filteredStock = stockData.filter(
//     (item) =>
//       item.name.toLowerCase().includes(search.toLowerCase()) &&
//       (filterStatus ? item.status === filterStatus : true)
//   );
//   const handlePrint = () => {
//     window.print();
//   };
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold">Stock Details</h2>
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex justify-between items-center w-full">
//           <input 
//             type="text" 
//             placeholder="Search Product..." 
//             value={search} 
//             onChange={(e) => setSearch(e.target.value)} 
//             className="border rounded px-2 py-1"
//           />
//           <select 
//             onChange={(e) => setFilterStatus(e.target.value)} 
//             className="border rounded px-2 py-1"
//           >
//             <option value="">All</option>
//             {Object.keys(statusColors).map((status) => (
//               <option key={status} value={status}>{status}</option>
//             ))}
//           </select>
//         </div>
//         <div className="flex gap-2">
//         </div>
//       </div>
//       <div className=" h-[70vh] overflow-auto scrollbar-hide">
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-300 px-4 py-2">ID</th>
//             <th className="border border-gray-300 px-4 py-2">Product Name</th>
//             <th className="border border-gray-300 px-4 py-2">Quantity</th>
//             <th className="border border-gray-300 px-4 py-2">Price (pcs)</th>
//             <th className="border border-gray-300 px-4 py-2">Status</th>
//             <th className="border border-gray-300 px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredStock.map((item) => (
//             <tr key={item.id} className="text-center">
//               <td className="border border-gray-300 px-4 py-2 text-blue-600">#{item.id}</td>
//               <td className="border border-gray-300 px-4 py-2">{item.name}</td>
//               <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
//               <td className="border border-gray-300 px-4 py-2 font-bold">Rs. {item.price.toFixed(2)} </td>
//               <td className={`border border-gray-300 px-4 py-2 ${statusColors[item.status]}`}>{item.status}</td>
//               <td className="border border-gray-300 px-4 py-2 flex justify-center gap-2">
//                 <button className="text-blue-600 p-1 hover:text-blue-800">
//                   <FaEdit size={16} />
//                 </button>
//                 <button className="text-red-600 p-1 hover:text-red-800">
//                   <FaTrash size={16} />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const stockData = [
  { id: "565601", name: "DatedPlanner", quantity: 70, price: 130, status: "Available" },
  { id: "125GG5", name: "Planners", quantity: 60, price: 220, status: "Available" },
  { id: "12UFG5", name: "Big Dreams", quantity: 0, price: 150, status: "Out of Stock" },
  { id: "12UFG6", name: "Black Floral", quantity: 70, price: 400, status: "Out of Stock" },
  { id: "12UFG7", name: "LushForest", quantity: 20, price: 510, status: "Low" },
  { id: "12UFG8", name: "Marble Maze", quantity: 10, price: 200, status: "Low" },
];

const statusColors = {
  Available: "text-green-500",
  Low: "text-yellow-500",
  "Out of Stock": "text-red-500",
};

export default function StockReport() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [stocks, setStocks] = useState(stockData);
  const [editItem, setEditItem] = useState(null);
  
  const filteredStock = stocks.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterStatus ? item.status === filterStatus : true)
  );

  const handleEdit = (item) => {
    setEditItem(item);
  };
  
  const handleSave = () => {
    setStocks((prevStocks) =>
      prevStocks.map((stock) => (stock.id === editItem.id ? editItem : stock))
    );
    setEditItem(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Stock Details</h2>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <select
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="">All</option>
          {Object.keys(statusColors).map((status) => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </div>
      <div className="h-[70vh] overflow-auto scrollbar-hide">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Product Name</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Price (pcs)</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStock.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="border px-4 py-2 text-blue-600">#{item.id}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.quantity}</td>
                {/* <td className="border px-4 py-2 font-bold">Rs.{item.price.toFixed(2)}</td> */}
                <td className="border px-4 py-2 font-bold">
  Rs. {Number(item.price).toFixed(2)}
</td>
                <td className={`border px-4 py-2 ${statusColors[item.status]}`}>{item.status}</td>
                <td className="border px-4 py-2 flex justify-center gap-2">
                  <button
                    className="text-blue-600 p-1 hover:text-blue-800"
                    onClick={() => handleEdit(item)}
                  >
                    <FaEdit size={16} />
                  </button>
                  <button className="text-red-600 p-1 hover:text-red-800">
                    <FaTrash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Form Modal */}
      {editItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
            <label className="block mb-2">Product Name:</label>
            <input
              type="text"
              value={editItem.name}
              onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
              className="border rounded px-2 py-1 w-full mb-2"
            />
            <label className="block mb-2">Quantity:</label>
            <input
              type="number"
              value={editItem.quantity}
              onChange={(e) => setEditItem({ ...editItem, quantity: e.target.value })}
              className="border rounded px-2 py-1 w-full mb-2"
            />
            <label className="block mb-2">Price:</label>
            <input
              type="number"
              value={editItem.price}
              onChange={(e) => setEditItem({ ...editItem, price: Number(e.target.value) })}

              // onChange={(e) => setEditItem({ ...editItem, price: e.target.value })}
              className="border rounded px-2 py-1 w-full mb-2"
            />
            <label className="block mb-2">Status:</label>
            <select
              value={editItem.status}
              onChange={(e) => setEditItem({ ...editItem, status: e.target.value })}
              className="border rounded px-2 py-1 w-full mb-4"
            >
              {Object.keys(statusColors).map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 bg-gray-400 text-white rounded" onClick={() => setEditItem(null)}>Cancel</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}