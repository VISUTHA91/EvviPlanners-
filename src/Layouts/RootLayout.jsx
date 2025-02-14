import React from 'react'
import Nav from '../Components/Nav';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

function RootLayout() {
  return (
    <>
    <Nav />
    <div className="pt-16">
    <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default RootLayout