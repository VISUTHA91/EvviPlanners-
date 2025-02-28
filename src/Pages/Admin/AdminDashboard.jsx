// import React, { useState } from 'react'
// import MainContent from './MainContent';
// import AdminCategory from './AdminCategory';
// import AdminProductList from './AdminProductList';
// import Userlist from './Userlist';
// import AdminOrders from './AdminOrders';
// import { HiOutlineUserGroup } from "react-icons/hi";
// import { TbLayoutDashboard } from "react-icons/tb";
// import { FaShoppingBasket } from "react-icons/fa";
// import { GoPlus } from "react-icons/go";
// import { GrProductHunt } from "react-icons/gr";
// import { FaFirstOrder } from "react-icons/fa";
// import { MdReviews } from "react-icons/md";
// import { TbLogout2 } from "react-icons/tb";
// import ProductCreate from './ProductCreate';
// function AdminDashboard() {
//     const [currentPage, setCurrentPage] = useState('Maincontent');
//   const renderPageContent = () => {
//     switch (currentPage) {
//       case 'Maincontent':
//         return <MainContent />;
//       case 'Category':
//         return <AdminCategory />;
//         case 'ProductCreate':
//         return <ProductCreate />;
//       case 'Products':
//         return <AdminProductList />;
//       case 'Users':
//         return <Userlist />;
//       case 'Orders':
//         return <AdminOrders />;
//       default:
//         return <h2>Page not found</h2>;
//     }
//   };
//   return ( 
//      <div className="flex items-stretch">
//       {/* Side Content */}
//       <div className="w-58 bg-white shadow-[-2px_6px_16px_17px_rgba(0,_0,_0,_0.2)]">
// <div className="w-64 bg-white p-4">
//   <ul className="space-y-6">
//     <li>
//       <button
//         onClick={() => setCurrentPage("Maincontent")}
//         className="flex items-center gap-4 w-full p-2 text-lg font-semibold text-blue-600 rounded-lg hover:bg-blue-100 hover:text-blue-800 transition duration-200"
//       >
//         <TbLayoutDashboard className="text-2xl" />
//         Dashboard
//       </button>
//     </li>

//     {/* Category */}
//     <li>
//       <button
//         onClick={() => setCurrentPage("Category")}
//         className="flex items-center gap-4 w-full p-2 text-lg font-semibold text-blue-600 rounded-lg hover:bg-blue-100 hover:text-blue-800 transition duration-200"
//       >
//         <GrProductHunt className="text-2xl" />
//         Category
//       </button>
//     </li>

//     {/* Create Product */}
//     <li>
//       <button
//         onClick={() => setCurrentPage("ProductCreate")}
//         className="flex items-center gap-4 w-full p-2 text-lg font-semibold text-blue-600 rounded-lg hover:bg-blue-100 hover:text-blue-800 transition duration-200"
//       >
//         <GrProductHunt className="text-2xl" />
//         Create Product
//       </button>
//     </li>

//     {/* Product List */}
//     <li>
//       <button
//         onClick={() => setCurrentPage("Products")}
//         className="flex items-center gap-4 w-full p-2 text-lg font-semibold text-blue-600 rounded-lg hover:bg-blue-100 hover:text-blue-800 transition duration-200"
//       >
//         <GrProductHunt className="text-2xl" />
//         Products
//       </button>
//     </li>

//     {/* Orders */}
//     <li>
//       <button
//         onClick={() => setCurrentPage("Orders")}
//         className="flex items-center gap-4 w-full p-2 text-lg font-semibold text-blue-600 rounded-lg hover:bg-blue-100 hover:text-blue-800 transition duration-200"
//       >
//         <FaFirstOrder className="text-2xl" />
//         Orders
//       </button>
//     </li>

//     {/* Customers */}
//     <li>
//       <button
//         onClick={() => setCurrentPage("Users")}
//         className="flex items-center gap-4 w-full p-2 text-lg font-semibold text-blue-600 rounded-lg hover:bg-blue-100 hover:text-blue-800 transition duration-200"
//       >
//         <HiOutlineUserGroup className="text-2xl" />
//         Customers
//       </button>
//     </li>
//     <li>
//     <button
//         onClick={() => setCurrentPage("Users")}
//         className="flex items-center gap-4 w-full p-2 text-lg font-semibold text-blue-600 rounded-lg hover:bg-blue-100 hover:text-blue-800 transition duration-200"
//       >
//         {/* <HiOutlineUserGroup className="text-2xl" /> */}
//         <TbLogout2 className="text-2xl" />
//         LogOut
//       </button>
//     </li>
   
//   </ul>
// </div>
// </div>
//       {/* Main Content */}
//       <div className='mt-10 ml-16'>
//         {renderPageContent()}
//       </div>
//     </div>    
//   )
// }
// export default AdminDashboard
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbLayoutDashboard } from "react-icons/tb";
import { GrProductHunt } from "react-icons/gr";
import { FaFirstOrder } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";

function AdminDashboard() {
  return (
    <div className="flex items-stretch">
      {/* Side Content */}
      <div className="w-58 bg-white ">
      {/* shadow-[-2px_6px_16px_17px_rgba(0,_0,_0,_0.2)] */}
        <div className="w-64 bg-white p-4">
          <ul className="space-y-2">
            {/* Dashboard */}
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  `flex items-center gap-4 w-full p-2 text-lg font-semibold rounded-lg transition duration-200 ${
                    isActive ? "bg-blue-100 text-blue-800" : "text-blue-600 hover:bg-blue-100 hover:text-blue-800"
                  }`
                }
              >
                <TbLayoutDashboard className="text-2xl" />
                Dashboard
              </NavLink>
            </li>
            {/* Category */}
            <li>
              <NavLink
                to="AdminCategory"
                className={({ isActive }) =>
                  `flex items-center gap-4 w-full p-2 text-lg font-semibold rounded-lg transition duration-200 ${
                    isActive ? "bg-blue-100 text-blue-800" : "text-blue-600 hover:bg-blue-100 hover:text-blue-800"
                  }`
                }
              >
                <GrProductHunt className="text-2xl" />
                Category
              </NavLink>
            </li>
            {/* Create Product */}
            <li>
              <NavLink
                to="ProductCreate"
                className={({ isActive }) =>
                  `flex items-center gap-4 w-full p-2 text-lg font-semibold rounded-lg transition duration-200 ${
                    isActive ? "bg-blue-100 text-blue-800" : "text-blue-600 hover:bg-blue-100 hover:text-blue-800"
                  }`
                }
              >
                <GrProductHunt className="text-2xl" />
                Create Product
              </NavLink>
            </li>
            {/* Products */}
            <li>
              <NavLink
                to="AdminProductList"
                className={({ isActive }) =>
                  `flex items-center gap-4 w-full p-2 text-lg font-semibold rounded-lg transition duration-200 ${
                    isActive ? "bg-blue-100 text-blue-800" : "text-blue-600 hover:bg-blue-100 hover:text-blue-800"
                  }`
                }
              >
                <GrProductHunt className="text-2xl" />
                Products
              </NavLink>
            </li>
            {/* Orders */}
            <li>
              <NavLink
                to="AdminOrders"
                className={({ isActive }) =>
                  `flex items-center gap-4 w-full p-2 text-lg font-semibold rounded-lg transition duration-200 ${
                    isActive ? "bg-blue-100 text-blue-800" : "text-blue-600 hover:bg-blue-100 hover:text-blue-800"
                  }`
                }
              >
                <FaFirstOrder className="text-2xl" />
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="StockReport"
                className={({ isActive }) =>
                  `flex items-center gap-4 w-full p-2 text-lg font-semibold rounded-lg transition duration-200 ${
                    isActive ? "bg-blue-100 text-blue-800" : "text-blue-600 hover:bg-blue-100 hover:text-blue-800"
                  }`
                }
              >
                <FaFirstOrder className="text-2xl" />
                Stock Report
              </NavLink>
            </li>
            <li>
              <NavLink
                to="SalesReport"
                className={({ isActive }) =>
                  `flex items-center gap-4 w-full p-2 text-lg font-semibold rounded-lg transition duration-200 ${
                    isActive ? "bg-blue-100 text-blue-800" : "text-blue-600 hover:bg-blue-100 hover:text-blue-800"
                  }`
                }
              >
                <FaFirstOrder className="text-2xl" />
                Sales Report
              </NavLink>
            </li>
            {/* Customers */}
            <li>
              <NavLink
                to="Userlist"
                className={({ isActive }) =>
                  `flex items-center gap-4 w-full p-2 text-lg font-semibold rounded-lg transition duration-200 ${
                    isActive ? "bg-blue-100 text-blue-800" : "text-blue-600 hover:bg-blue-100 hover:text-blue-800"
                  }`
                }
              >
                <HiOutlineUserGroup className="text-2xl" />
                Customers
              </NavLink>
            </li>
            {/* Logout */}
            <li>
              <NavLink
              to="/Home"
                className="flex items-center gap-4 w-full p-2 text-lg font-semibold text-blue-600 rounded-lg hover:bg-blue-100 hover:text-blue-800 transition duration-200"
              >
                <TbLogout2 className="text-2xl" />
                Log Out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Main Content */}
      <div className="mt- ml-16 flex-1">
        <Outlet />
      </div>
    </div>
  );
}
export default AdminDashboard;

{/* <div className="w-64 h-screen bg-yellow-600 p-6 text-white">
  <ul className="space-y-6">
    <li>
      <button
        onClick={() => setCurrentPage("Maincontent")}
        className="flex items-center gap-4 w-full p-2 text-lg font-semibold rounded-lg hover:bg-yellow-500 transition duration-200"
      >
        <TbLayoutDashboard className="text-2xl" />
        Dashboard
      </button>
    </li>

    <li>
      <button
        onClick={() => setCurrentPage("Category")}
        className="flex items-center gap-4 w-full p-2 text-lg font-semibold rounded-lg hover:bg-yellow-500 transition duration-200"
      >
        <GrProductHunt className="text-2xl" />
        Category
      </button>
    </li>

    <li>
      <button
        onClick={() => setCurrentPage("Products")}
        className="flex items-center gap-4 w-full p-2 text-lg font-semibold rounded-lg hover:bg-yellow-500 transition duration-200"
      >
        <GrProductHunt className="text-2xl" />
        Create Product
      </button>
    </li>
    <li>
      <button
        onClick={() => setCurrentPage("Products")}
        className="flex items-center gap-4 w-full p-2 text-lg font-semibold rounded-lg hover:bg-yellow-500 transition duration-200"
      >
        <GrProductHunt className="text-2xl" />
        Products
      </button>
    </li>
    <li>
      <button
        onClick={() => setCurrentPage("Orders")}
        className="flex items-center gap-4 w-full p-2 text-lg font-semibold rounded-lg hover:bg-yellow-500 transition duration-200"
      >
        <FaFirstOrder className="text-2xl" />
        Orders
      </button>
    </li>
    <li>
      <button
        onClick={() => setCurrentPage("Users")}
        className="flex items-center gap-4 w-full p-2 text-lg font-semibold rounded-lg hover:bg-yellow-500 transition duration-200"
      >
        <HiOutlineUserGroup className="text-2xl" />
        Customers
      </button>
    </li>
  </ul>
</div> */}



      {/* <div className="w-58">
        <div className="w-58 h-screen bg-yellow-600 p-8 text-xl">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setCurrentPage('Maincontent')}
                className="flex items-center text-white hover:text-black gap-2">
                <TbLayoutDashboard />
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('Category')}
                className="flex items-center text-white hover:text-black gap-2">
                <GrProductHunt />
                Category
              </button>
            </li>
            <li>
              <div className="relative group">
                <button className="flex items-center text-white hover:text-black gap-2 transition duration-200"
                  // onClick={toggleDropdown}>
                  onClick={() => setCurrentPage('Products')}>
                  <GrProductHunt />
                  Create
                </button>
                </div>
            </li>
            <li>
              <div className="relative group">
                <button className="flex items-center text-white hover:text-black gap-2 transition duration-200"
                  // onClick={toggleDropdown}>
                  onClick={() => setCurrentPage('Products')}>
                  <GrProductHunt />
                  Products
                </button>
                </div>
            </li>

            <li>
              <button
                onClick={() => setCurrentPage('Orders')}
                className="flex items-center text-white hover:text-black gap-2"
              >
                <FaFirstOrder />
                Orders
              </button>
            </li>


            <li>
              <button
                onClick={() => setCurrentPage('Users')}
                className="flex items-center text-white hover:text-black gap-2"
              >
                <HiOutlineUserGroup />
                Customers
              </button>
            </li>
            </ul>
          {/* </nav> */}
        {/* </div> */}
      {/* </div> */} 


      {/* <div className="w-64 h-screen bg-[#375E90] text-white p-6 shadow-lg"> */}
{/* <div className="p-4 bg-white text-blue-600 text-xl font-bold flex items-center">
     Evvi Planners
  </div> */}