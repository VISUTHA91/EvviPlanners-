import React, { useState } from 'react'
import { adminlogin } from '../../assets/Image';
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
        email: "",
        password: ""
      });
    
      const navigate = useNavigate()
    
      const handleChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
      };
    
    
      const registerUser = async (e) => {
        e.preventDefault();
        try {
        //   const data = await apiCalls.userLogin(user); // Correctly passing the 'user' object
        //   toast.success("Login Successful!");
        //   localStorage.setItem("authToken", data.token);
        //   localStorage.setItem("userData", JSON.stringify({ role: data.user.role ,name:data.user.name ,id:data.user.id}));
          navigate("/Admin/AdminDashboard")
        //   window.location.reload();
        } catch (error) {
        //   console.error("Login failed:", error.message || error);
        //   alert(data.message)
          navigate("/Signup")
        }
      };

  return (
      <>
      {/* <div className="flex flex-col w-full flex-wrap justify-center bg-fuchsia-00">
        <div className="pointer-events-none hidden select-none shadow-2xl md:block md:w-1/2 lg:w-1/2 rounded-tl-2xl rounded-bl-2xl mt-24">
          <img className="h-screen w-full object-cover opacity-90  rounded-tl-3xl rounded-bl-3xl" src={adminlogin} />
        </div>
        <div className="flex w-full flex-col md:w-1/2 lg:w-1/3 mt-24 shadow- bg-fuchsia-50 rounded-tr-3xl rounded-br-3xl">
          <div className="my-auto flex flex-col justify-center px-6 pt-8 sm:px-24 md:justify-start md:px-8 md:pt-0 lg:px-12">
            <p className="text-center text-3xl font-bold">Welcome</p>
            <p className="mt-2 text-center">Login to your account.</p>
            <form method="POST"

              onSubmit={(e) => {
                registerUser(e);
              }} 
              className="flex flex-col pt-3 md:pt-8">
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-lg border focus-within:border-transparent focus-within:ring-2 transition focus-within:ring-blue-600">
                  <span className="inline-flex items-center border-r border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                    <MdEmail />
                  </span>
                  <input type="email" id="email" name="email"
                   value={user.email}
                    onChange={handleChange}
                    className="w-full flex-1 appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400  focus:outline-none" placeholder="Email" />
                </div>
              </div>
              <div className="mb-12 flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-lg border focus-within:border-transparent focus-within:ring-2 transition focus-within:ring-blue-600">
                  <span className="inline-flex items-center border-r border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                    <FaUnlock />
                  </span>
                  <input type="password" id="password"  name="password"  value={user.password} 
                  onChange={handleChange}
                    className="w-full flex-1 appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400  focus:outline-none" placeholder="Password" />
                </div>
              </div>
              
              <button type="submit" className="w-full rounded-lg bg-blue-700 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition ease-in hover:bg-blue-600 focus:outline-none focus:ring-2">
                <span className="w-full"> Submit </span>
              </button>
            </form>
            <div className="pt-12 pb-12 text-center">
              <p className="whitespace-nowrap">
                Don't have an account?
                <a href="Signup" className="font-semibold underline"> Register here. </a>
              </p>
            </div>
          </div>
        </div>
      </div> */}

{/* <div className="flex  items-center justify-center bg-gradient-to-bl from-[#86efac] via-[#fcd34d] to-[#f9a8d4]"> */}
{/* <div className="flex h-screen items-center justify-center bg-gradient-to-b from-sky-400 to-sky-200"> */}
<div className="flex h-screen items-center justify-center bg-gradient-to-r from-orange-300 to-rose-300">
      {/* Image and Form Container */}
      <div className="w-full max-w-md p-1 mt-10 mb-16 rounded-lg shadow-[-2px_6px_16px_17px_rgba(0,_0,_0,_0.2)]">
        {/* Image Section */}
        <div className="flex items-center justify-center opacity-900">
          <img
            src={adminlogin}
            alt="AdminLogin"
            className="rounded-lg object-fit h-56 w-34"
          />
        </div>
        {/* Form Section */}
        <div className="p-4">
          <h2 className="text-2xl font-bold text-center text-gray-800">Welcome</h2>
          <p className="mt-2 text-center text-gray-600">Login to your account</p>

          <form className="space-y-4 mt-2" onSubmit={registerUser}>
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

          {/* Footer */}
          {/* <div className="text-center mt-6 text-gray-500 mb-2">
            <p>
              Don't have an account?{" "}
              <a href="Signup" className="text-blue-500 hover:underline">
                Register here
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminLogin