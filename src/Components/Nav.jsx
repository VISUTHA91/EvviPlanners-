import React from 'react'
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";


function Nav() {
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const aboutDropdownRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = React.useState(null); // State to track the open dropdown


    const handleMouseEnter = (dropdownName) => {
        setOpenDropdown(dropdownName);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };



    const Links = [
        // { name: "HOME", link: "/Home" },
        { name: "PLANNERS" },
        { name: "JOURNALS" },
        { name: "CALENDARS" },
        // { name: "CONTACT", link: "/Contact" },
    ];


    const toggleDropdown = (dropdownName) => {
        if (openDropdown === dropdownName) {
            setOpenDropdown(null); // Close if already open
        } else {
            setOpenDropdown(dropdownName); // Open the clicked dropdown
        }
    };

    const userDropdownRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
                setIsAboutDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [userDropdownRef]);
    return (
        <>
            <nav className='p-3 fixed w-full flex justify-between items-center shadow-lg z-40 transition-colors duration-500 text-black md:w-auto lg:w-full font-PTSerif bg-white'>
                {/* Logo */}
                <div className="font-bold text-black text-2xl cursor-pointer ml-2 flex items-center gap-1">
                    <Link to={'/'}> <p><span className=''>Evvi</span> </p></Link>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div onClick={() => setOpen(!open)} className="absolute right-5 top-5 cursor-pointer md:hidden">
                    {open ? (<IoMdClose size={28} />) : (<RxHamburgerMenu size={28} />)}
                </div>
                <ul
                    className={`md:flex md:items-center md:static bg-amber-200 md:bg-transparent z-[-1] md:z-auto left-0 w-full gap-20 md:w-auto transition-all duration-500 ease-in-out ${open ? 'top-16 p-6' : 'top-[-490px]'
                        } absolute`}>
                    {/* {Links.map((link) => (
                        <li
                            key={link.name}
                            className="relative md:ml-4 mt-4 md:mt-0 font-semibold"
                            onMouseEnter={() => link.name === "PLANNERS" && setIsAboutDropdownOpen(true)}
                            onMouseLeave={() => link.name === "PLANNERS" && setIsAboutDropdownOpen(false)}>
                            {link.name === "PLANNERS" ? (
                                <>
                                    <button className="hover:text-pink-400">{link.name}</button>
                                    {isAboutDropdownOpen && (
                                        <ul className="absolute left-0 py-2 w-48 rounded-md shadow-lg bg-white text-black z-20">
                                            <li>
                                                <Link
                                                    to={'/Productlist/gender/men'}
                                                    className="block px-4 py-2 hover:bg-pink-400 hover:text-white"
                                                    onClick={() => setIsAboutDropdownOpen(false)}
                                                >
                                                UnDated Planners
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to={'/Productlist/gender/women'}
                                                    className="block px-4 py-2 hover:bg-blue-400 hover:text-white"
                                                    onClick={() => setIsAboutDropdownOpen(false)}
                                                >
                                                    Dated Planners
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </>
                            ) : link.name === "CALENDARS" ? (
                                <>
                                    <button className="hover:text-pink-400">{link.name}</button>
                                    {isAboutDropdownOpen && (
                                        <ul className="absolute left-0 py-2 w-48 rounded-md shadow-lg bg-white text-black z-20">
                                            <li>
                                                <Link
                                                    to={'/Productlist/gender/men'}
                                                    className="block px-4 py-2 hover:bg-pink-400 hover:text-white"
                                                    onClick={() => setIsAboutDropdownOpen(false)}
                                                >
                                                Wall Calendar
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to={'/Productlist/gender/women'}
                                                    className="block px-4 py-2 hover:bg-blue-400 hover:text-white"
                                                    onClick={() => setIsAboutDropdownOpen(false)}
                                                >
                                                    Desk Calendar
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </>
                            ): (
                                <Link to={link.link} className="hover:text-blue-500 duration-500">
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))} */}
                    {Links.map((link) => (
                        <li
                            key={link.name}
                            className="relative md:ml-4 mt-4 md:mt-4 font-semibold"
                            onMouseEnter={() => handleMouseEnter(link.name)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {["PLANNERS", "CALENDARS"].includes(link.name) ? (
                                <>
                                    <button className="hover:text-blue-400 duration-500">{link.name}</button>
                                    {openDropdown === link.name && (
                                        <ul className="absolute left-0 py-2 w-40 -ml-6 rounded-md shadow-lg bg-white text-black z-20">
                                            {link.name === "PLANNERS" && (
                                                <>
                                                    <li>
                                                        <Link
                                                            to={`/ProductList/${link.name}`}
                                                            // key={product.id}
                                                            className="block px-2 py-2 hover:bg-blue-300 hover:text-white duration-500"
                                                            onClick={handleMouseLeave}
                                                    >
                                                            UnDated Planners
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to={`/ProductList/${link.name}`}
                                                            className="block px-2 py-2 hover:bg-blue-400 hover:text-white duration-500"
                                                            onClick={handleMouseLeave}
                                                        >
                                                            Dated Planners
                                                        </Link>
                                                    </li>
                                                </>
                                            )}
                                            {link.name === "CALENDARS" && (
                                                <>
                                                    <li>
                                                        <Link
                                                            to={`/ProductList/${link.name}`}
                                                            className="block px-4 py-2 hover:bg-blue-400 hover:text-white duration-500"
                                                            onClick={handleMouseLeave}
                                                        >
                                                            Wall Calendar
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to={`/ProductList/${link.name}`}
                                                            className="block px-4 py-2 hover:bg-blue-400 hover:text-white duration-500"
                                                            onClick={handleMouseLeave}
                                                        >
                                                            Desk Calendar
                                                        </Link>
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <Link to={`/ProductList/${link.name}`}
                                className="hover:text-blue-400 duration-500">
                                {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="flex  items-center text-white justify-between gap-2 lg:gap-6 mr-10">
                    {/* Search Bar */}
                    <div className="relative flex items-center w-full max-w-xs">
                        <input
                            id="q"
                            name="q"
                            className="w-full border rounded-xl py-2 pl-3 pr-10 placeholder-gray-500 text-sm focus:border-blue"
                            placeholder="Search Products"
                            type="text"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-indigo-600">
                            <IoIosSearch size={20} />
                        </button>
                    </div>

                    {/* Cart and User */}
                    <div className="flex items-center text-black lg:gap-8 gap-2 ">
                        {/* Cart Icon */}
                        <Link
                            to={'/Cart'}>
                            {/*  to={isAuthenticated ? '/Cart' : '/Signin'}> */}
                            {/* <Badge color="secondary" badgeContent={cartCount}> */}
                            <BsFillHandbagFill size={28} className="cursor-pointer" />
                            {/* <FaBagShopping size={28} className="cursor-pointer" /> */}

                            {/* </Badge> */}
                        </Link>

                        {/* User Dropdown */}
                        {/* {isAuthenticated ? (
                            <div className="relative" ref={userDropdownRef}>
                                <button onClick={toggleDropdown}
                                    className="text-white focus:outline-none">
                                    Welcome {user.name}
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-35 bg-white rounded-md shadow-lg">
                                        {user.role === 'admin' ? (
                                            <Link to={'/Admin/Dashboard'} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                Dashboard
                                            </Link>
                                        ) : (
                                            <Link to={'/User/ProfilePage'} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                Profile
                                            </Link>
                                        )}
                                        <a href="/" onClick={handleLogout} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout
                                        </a>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to={'/Signin'}>
                                <FaUserAlt size={28} className="cursor-pointer" />
                            </Link>
                        )} */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav