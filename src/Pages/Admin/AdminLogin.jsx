import React, { useState } from 'react'
import { admin } from '../../assets/Image';
import { MdEmail } from "react-icons/md";
import { FaUnlock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

 const user ={
    email:"admin@mail.com",
    password:"admin123"
 }

function AdminLogin() {
    const [user, setUser] = useState({
        email: "admin@mail.com",
        password: "admin123"
      });
    
      const navigate = useNavigate()
    
      const handleChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
      };
    
    
      const adminLogin = async (e) => {
        e.preventDefault();
        try {
        //   const data = await apiCalls.userLogin(user); // Correctly passing the 'user' object
        //   toast.success("Login Successful!");
        //   localStorage.setItem("authToken", data.token);
        //   localStorage.setItem("userData", JSON.stringify({ role: data.user.role ,name:data.user.name ,id:data.user.id}));
          navigate("/AdminDashboard");
        //   window.location.reload();
        } catch (error) {
        //   console.error("Login failed:", error.message || error);
        //   alert(data.message)
          navigate("/Signup")
        }
      };

  return (
      <>

<div className="flex h-screen items-center justify-center bg-gradient-to-r from-orange-300 to-rose-300">
      {/* Image and Form Container */}
      <div className="w-full max-w-md p-1 mt-6 mb-16 rounded-lg shadow-[-2px_6px_16px_17px_rgba(0,_0,_0,_0.2)]">
        {/* Image Section */}
        <div className="flex items-center justify-center opacity-900">
          <img
            src={admin}
            alt="AdminLogin"
            className="rounded-lg object-fit h-44 w-34 bg-gray-20"
          />
        </div>
        {/* Form Section */}
        <div className="p-4">
          <h2 className="text-2xl font-bold text-center text-gray-800">Welcome</h2>
          <p className="mt-2 text-center text-gray-600">Login to your account</p>
          <form className="space-y-4 mt-2" onSubmit={adminLogin}>
            {/* Email Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <MdEmail className="text-gray-400" />
              </span>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUnlock className="text-gray-400" />
              </span>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminLogin