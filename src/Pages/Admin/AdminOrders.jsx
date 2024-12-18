import React, { useState } from 'react';
import Modal from '../../Components/Modal';

const orders = [
  {
    orderId: '123456',
    date: '2024-10-18',
    status: 'Delivered',
    total: '₹150',
    products: [
      { name: 'Product 1', imageUrl: 'https://via.placeholder.com/100', price: '₹50', vendorId: 'V001' },
      { name: 'Product 2', imageUrl: 'https://via.placeholder.com/100', price: '₹100', vendorId: 'V002' },
    ],
  },
  {
    orderId: '123457',
    date: '2024-10-10',
    status: 'Shipped',
    total: '₹1020',
    products: [
      { name: 'Product 3', imageUrl: 'https://via.placeholder.com/100', price: '₹1020', vendorId: 'V003' },
    ],
  },
  {
    orderId: '123485',
    date: '2024-10-23',
    status: 'Delivered',
    total: '₹500',
    products: [
      { name: 'Product 4', imageUrl: 'https://via.placeholder.com/100', price: '₹350', vendorId: 'V001' },
      { name: 'Product 5', imageUrl: 'https://via.placeholder.com/100', price: '₹150', vendorId: 'V002' },
    ],
  },
];

const  AdminOrders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);  // Set the selected order details
    setIsModalOpen(true);     // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);   // Clear the selected order when closing the modal
  };

  return (
    <div className=" h-full pt-2 mb-10">
      <h1 className="text-2xl font-bold text-gray-800  mt-2 mb-6"> Orders Details</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2 text-gray-600">Order ID</th>
              <th className="px-4 py-2 text-gray-600">Date</th>
              <th className="px-4 py-2 text-gray-600">Status</th>
              <th className="px-4 py-2 text-gray-600">Total</th>
              <th className="px-4 py-2 text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId} className="border-b">
                <td className="px-4 py-2">{order.orderId}</td>
                <td className="px-4 py-2">{order.date}</td>
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
                <td className="px-4 py-2">
                  <button
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
                    onClick={() => handleViewDetails(order)} // Open the modal with selected order details
                  >
                    View Details
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
          <div>
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
                    <p className="text-gray-600">Vendor ID: {product.vendorId}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={closeModal} // Close the modal
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