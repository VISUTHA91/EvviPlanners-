import React from 'react'
// import Nav from '../Components/Nav';
import { Outlet } from 'react-router';
import AdminNav from '../Components/AdminNav';

function AdminLayout() {
    return (
        <>
        {/* <AdminNav /> */}
        <Outlet />
        </>
    )
}

export default AdminLayout