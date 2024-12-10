import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
// import { FaSquareTwitter } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";

import { IoLogoLinkedin } from "react-icons/io5";

function Footer() {
  return (
    // <footer className="bg-[#7BD3EA] OpenSans py-10 w-full">
    // <footer className="bg-[#76d4d2] OpenSans py-10 w-full">
    <footer className="bg-[#375E90] text-white font-PTSerif py-4 w-full">
    <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 px-4 ml-10">
      {/* Company Info */}
      <div>
        <h3 className="text-xl font-bold mb-4">Evvi Planners</h3>
        <p className="w-48">
          Our store, where you can find the best deals on quality products.
        </p>
      </div>
  
      {/* Useful Links */}
      <div>
        <h3 className="text-xl font-bold mb-4">Useful Links</h3>
        <ul>
          <li className="mb-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          {/* <li className="mb-2">
            <Link to="/" className="hover:underline">
              Shop
            </Link>
          </li> */}
          <li className="mb-2">
            <Link to={'/About'} className="hover:underline">
              About Us
            </Link>
          </li>
          <li className="mb-2">
            <Link to={'/Contact'} className="hover:underline">
              Contact Us
            </Link>
          </li>
          {/* <li className="mb-2">
            <Link to={'/Admin/AdminLogin'} className="hover:underline">
              Admin
            </Link>
          </li> */}
        </ul>
      </div>
      {/* Support */}
      <div>
        <h3 className="text-xl font-bold mb-4">Support</h3>
        <ul>
          <li className="mb-2">
            <Link to={"/Support"} className="hover:underline">
              FAQ
            </Link>
          </li>
          {/* <li className="mb-2">
            <Link to={"/Support"} className="hover:underline">
              Shipping & Returns
            </Link>
          </li> */}
          <li className="mb-2">
            <Link to={"/Support"} className="hover:underline">
              Terms & Conditions
            </Link>
          </li>
          <li className="mb-2">
            <Link to={"/Support"} className="hover:underline">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
  
      {/* Social Media */}
      <div>
        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="hover:transition duration-300 ease-in-out transform hover:scale-110">
            <BsFacebook size={30} />
          </a>
          <a href="https://web.whatsapp.com/" className="hover:transition duration-300 ease-in-out transform hover:scale-110">
            <BsWhatsapp size={30} />
          </a>
          <a href="https://instagram.com" className="hover:transition duration-300 ease-in-out transform hover:scale-110">
            <GrInstagram size={30} />
          </a>
          <a href="https://linkedin.com" className="hover:transition duration-300 ease-in-out transform hover:scale-110">
            <IoLogoLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  
    {/* Footer Bottom */}
    <div className="flex border-t border-gray-700 mt-4 pt-2  justify-center items-center text-sm">
      <p>Powered by Evvi Solutions Pvt.Ltd</p><p>© 2024 All rights reserved.</p>
   

    </div>
  </footer>
  )
}

export default Footer