// import React, { useState } from 'react';
// import Modal from '../../Components/OrderModal';

// const orders = [
//   {
//     orderId: '123456',
//     date: '2024-10-18',
//     status: 'Delivered',
//     total: '₹150',
//     products: [
//       { name: 'Product 1', imageUrl: 'https://via.placeholder.com/100', price: '₹50', vendorId: 'V001' },
//       { name: 'Product 2', imageUrl: 'https://via.placeholder.com/100', price: '₹100', vendorId: 'V002' },
//     ],
//   },
//   {
//     orderId: '123457',
//     date: '2024-10-10',
//     status: 'Shipped',
//     total: '₹1020',
//     products: [
//       { name: 'Product 3', imageUrl: 'https://via.placeholder.com/100', price: '₹1020', vendorId: 'V003' },
//     ],
//   },
//   {
//     orderId: '123485',
//     date: '2024-10-23',
//     status: 'Delivered',
//     total: '₹500',
//     products: [
//       { name: 'Product 4', imageUrl: 'https://via.placeholder.com/100', price: '₹350', vendorId: 'V001' },
//       { name: 'Product 5', imageUrl: 'https://via.placeholder.com/100', price: '₹150', vendorId: 'V002' },
//     ],
//   },
// ];

// const  AdminOrders = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   const handleViewDetails = (order) => {
//     setSelectedOrder(order);  // Set the selected order details
//     setIsModalOpen(true);     // Open the modal
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedOrder(null);   // Clear the selected order when closing the modal
//   };

//   return (
//     <div className=" h-full pt-2 mb-10">
//       <h1 className="text-2xl font-bold text-gray-800  mt-2 mb-6"> Orders Details</h1>
//       <div className="bg-white rounded-lg shadow-md p-4">
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr className="bg-gray-200 text-left">
//               <th className="px-4 py-2 text-gray-600">Order ID</th>
//               <th className="px-4 py-2 text-gray-600">Date</th>
//               <th className="px-4 py-2 text-gray-600">Status</th>
//               <th className="px-4 py-2 text-gray-600">Total</th>
//               <th className="px-4 py-2 text-gray-600">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.orderId} className="border-b">
//                 <td className="px-4 py-2">{order.orderId}</td>
//                 <td className="px-4 py-2">{order.date}</td>
//                 <td className="px-4 py-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       order.status === 'Delivered'
//                         ? 'bg-green-500'
//                         : order.status === 'Shipped'
//                         ? 'bg-blue-500'
//                         : 'bg-yellow-500'
//                     }`}
//                   >
//                     {order.status}
//                   </span>
//                 </td>
//                 <td className="px-4 py-2">{order.total}</td>
//                 <td className="px-4 py-2">
//                   <button
//                     className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
//                     onClick={() => handleViewDetails(order)} // Open the modal with selected order details
//                   >
//                     View Details
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for showing order details */}
//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         {selectedOrder && (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Order Details for #{selectedOrder.orderId}</h2>
//             <div>
//               {selectedOrder.products.map((product, index) => (
//                 <div key={index} className="flex items-center mb-4 border-b pb-4">
//                   <img
//                     src={product.imageUrl}
//                     alt={product.name}
//                     className="w-24 h-24 object-cover rounded-md"
//                   />
//                   <div className="ml-4">
//                     <h3 className="text-lg font-semibold">{product.name}</h3>
//                     <p className="text-gray-600">Price: {product.price}</p>
//                     <p className="text-gray-600">Vendor ID: {product.vendorId}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button
//               className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
//               onClick={closeModal} // Close the modal
//             >
//               Close
//             </button>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default AdminOrders;

import React, { useState } from 'react';
import Modal from '../../Components/OrderModal';
import { jsPDF } from 'jspdf'; // Import jsPDF library for PDF generation
import { bigdreams, bigfloralgarden, biggoals, floral, floralparadise } from '../../assets/Image';

const orders = [
  {
    orderId: '123456',
    date: '2024-10-18',
    customerName:"John",
    numberofItems:"3",
    status: 'Delivered',
    total: '₹150',
    products: [
      { name: 'Product 1', imageUrl: 'https://via.placeholder.com/100', price: '₹50' },
      { name: 'Product 2', imageUrl: 'https://via.placeholder.com/100', price: '₹100'  },
      { name: 'Product 3', imageUrl: 'https://via.placeholder.com/100', price: '₹100'  },
    ],
  },
  {
    orderId: '123457',
    date: '2024-10-10',
    customerName:"John",
    numberofItems:"1",
    status: 'Shipped',
    total: '₹1020',
    products: [
      { name: 'Product 3', imageUrl: 'https://via.placeholder.com/100', price: '₹1020' },
    ],
  },
  {
    orderId: '123485',
    date: '2024-10-23',
    customerName:"John",
    numberofItems:"2",
    status: 'Delivered',
    total: '₹500',
    products: [
      { name: 'Product 4', imageUrl: 'https://via.placeholder.com/100', price: '₹350' },
      { name: 'Product 5', imageUrl: 'https://via.placeholder.com/100', price: '₹150' },
    ],
  },
  {
    orderId: '147885',
    date: '2024-10-23',
    customerName:"John",
    numberofItems:"5",
    status: 'Delivered',
    total: '₹500',
    products: [
      { name: 'Product 7', imageUrl: bigdreams, price: '₹350' },
      { name: 'Product 8', imageUrl: bigfloralgarden, price: '₹580' },
      { name: 'Product 9', imageUrl: floralparadise, price: '₹300' },
      { name: 'Product 4', imageUrl: floral, price: '₹850' },
      { name: 'Product 5', imageUrl: biggoals, price: '₹150' },
    ],
  },
  {
    orderId: '2478485',
    date: '2024-10-23',
    customerName:"John",
    numberofItems:"8",
    status: 'Delivered',
    total: '₹500',
    products: [
      { name: 'Product 4', imageUrl: bigdreams, price: '₹190' },
      { name: 'Product 5', imageUrl: bigfloralgarden, price: '₹1750' },
      { name: 'Product 6', imageUrl: floralparadise, price: '₹1550' },
      { name: 'Product 7', imageUrl: floralparadise, price: '₹100' },
      { name: 'Product 8', imageUrl: bigdreams, price: '₹150' },
      // { name: 'Product 9', imageUrl: bigfloralgarden, price: '₹960' },
      // { name: 'Product 10', imageUrl: bigdreams, price: '₹150' },
      // { name: 'Product 11', imageUrl: 'https://via.placeholder.com/100', price: '₹850' },
    ],
  },
  {
    orderId: '1247885',
    date: '2024-10-23',
    customerName:"John",
    numberofItems:"3",
    status: 'Delivered',
    total: '₹500',
    products: [
      { name: 'Product 4', imageUrl: 'bigfloralgarden', price: '₹350' },
      { name: 'Product 5', imageUrl: bigdreams, price: '₹150' },
      { name: 'Product 5', imageUrl: floralparadise, price: '₹850' },
    ],
  },
  {
    orderId: '357885',
    date: '2024-10-23',
    customerName:"John",
    numberofItems:"5",
    status: 'Delivered',
    total: '₹500',
    products: [
      { name: 'Product 4', imageUrl: bigdreams, price: '₹350' },
      { name: 'Product 5', imageUrl: bigfloralgarden, price: '₹150' },
    ],
  },
];

const AdminOrders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filterDate, setFilterDate] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(orders);

  // Open modal with order details
  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  // Handle date filtering
  const handleDateFilter = (e) => {
    const selectedDate = e.target.value;
    setFilterDate(selectedDate);

    if (selectedDate) {
      const filtered = orders.filter((order) =>
        order.date.startsWith(selectedDate) // Match by year, month, or full date
      );
      setFilteredOrders(filtered);
    } else {
      setFilteredOrders(orders); // Reset to all orders if no date is selected
    }
  };

  // Generate PDF invoice for a specific order
  const generateInvoice = (order) => {
    const doc = new jsPDF();

    // Invoice Header
    doc.setFontSize(16);
    doc.text('Order Invoice', 20, 20);
    doc.setFontSize(12);
    doc.text(`Order ID: ${order.orderId}`, 20, 30);
    doc.text(`Date: ${order.date}`, 20, 40);
    doc.text(`Total: ${order.total}`, 20, 50);

    // Order Products
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 0, 0);
    doc.setFontSize(14);
    doc.text('Products:', 20, 70);
    let yPosition = 80;
    order.products.forEach((product, index) => {
      doc.text(`${index + 1}. ${product.name} - ${product.price}`, 20, yPosition);
      yPosition += 10;
    });

    // Save PDF
    doc.save(`Invoice_${order.orderId}.pdf`);
  };

  return (
    <div className="h-full mb-10">
      <div className='flex justify-between'>
      <h1 className="text-2xl font-bold text-gray-800 mt-2 mb-6">Orders Details</h1>

      {/* Date Filter */}
      <div className="mb-4 flex items-center gap-4 mr-4">
        <label className="text-gray-600 font-semibold">Filter by Date:</label>
        <input
          type="date"
          value={filterDate}
          onChange={handleDateFilter}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2 text-gray-600">Order ID</th>
              <th className="px-4 py-2 text-gray-600">Date</th>
              <th className="px-4 py-2 text-gray-600">CustomerName</th>
              <th className="px-4 py-2 text-gray-600">No.of.Items</th>
              <th className="px-4 py-2 text-gray-600">Status</th>
              <th className="px-4 py-2 text-gray-600">Total</th>
              <th className="px-4 py-2 text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.orderId} className="border-b">
                <td className="px-4 py-2">{order.orderId}</td>
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2">{order.customerName}</td>
                <td className="px-4 py-2">{order.numberofItems}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      order.status === 'Delivered'
                        ? 'bg-green-500'
                        : order.status === 'Shipped'
                        ? 'bg-blue-500'
                        : 'bg-yellow-500'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2">{order.total}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
                    onClick={() => handleViewDetails(order)}
                  >
                    View
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    onClick={() => generateInvoice(order)}
                  >
                    Invoice
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for showing order details */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedOrder && (
    <div className="max-h-[80vh] overflow-y-auto p-4 bg-white rounded-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Order Details for #{selectedOrder.orderId}</h2>
            <div>
              {selectedOrder.products.map((product, index) => (
                <div key={index} className="flex items-center mb-4 border-b pb-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600">Price: {product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AdminOrders;
