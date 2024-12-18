import React from 'react'
import { Link } from 'react-router-dom';


function AdminNav() {
  return (
    <>
    {/* <nav className="bg-gray-800 text-white"> */}
    <nav className="bg-[#375E90] text-white">
      <div className="container mx-auto flex justify-between items-center px-1 py-3">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/admin">Admin Panel</Link>
        </div>

        {/* Navigation Links */}
        {/* <div className="hidden md:flex space-x-6">
          <Link
            to="/admin/dashboard"
            className="hover:text-gray-300 transition duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/users"
            className="hover:text-gray-300 transition duration-300"
          >
            Users
          </Link>
          <Link
            to="/admin/orders"
            className="hover:text-gray-300 transition duration-300"
          >
            Orders
          </Link>
          <Link
            to="/admin/products"
            className="hover:text-gray-300 transition duration-300"
          >
            Products
          </Link>
        </div> */}

        {/* Logout Button */}
        {/* <button
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300"
          onClick={() => {
            alert("Logged out");
            // Add your logout logic here
          }}
        >
          Logout
        </button> */}

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => {
              alert("Toggle mobile menu");
              // Implement mobile menu toggle
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>    
    </>
  )
}

export default AdminNav