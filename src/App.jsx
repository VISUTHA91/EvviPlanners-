import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import AdminLayout from './Layouts/AdminLayout'
import Home from './Pages/Home'
import ProductListpage from './Pages/ProductListpage'
import Productdetails from './Pages/Productdetails'
import AdminLogin from './Pages/Admin/AdminLogin'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import Userlist from './Pages/Admin/Userlist'
import ProductCreate from './Pages/Admin/ProductCreate'
import AdminProductList from './Pages/Admin/AdminProductList'
import AdminOrders from './Pages/Admin/AdminOrders'
import ScrollToTop from './Components/ScrollToTop'
import Cart from './Pages/Cart'
// import Cart from './Pages/Cart'

function App() {

  return (
    <>
  <BrowserRouter >
  <ScrollToTop />
  <Routes>
          <Route element={<RootLayout />} >
            <Route index element={<Home />} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/ProductList/:name' element={<ProductListpage/>} />
            <Route path='/Productdetails/:name' element={<Productdetails />} />
            <Route path='/Cart' element={<Cart/>} />
            {/* <Route path='/Cart' element={<Cart />} /> */}
            </Route>
            <Route element={<AdminLayout  />} >
        <Route index element={<AdminLogin />} />
        <Route path='/Admin' element={<AdminLogin/>} />
      <Route path='/Admin/AdminDashboard' element={<AdminDashboard />} />
       <Route path='/Admin/Userlist' element={<Userlist />} /> 
      <Route path='/Admin/ProductCreate' element={<ProductCreate />} />
      <Route path='/Admin/AdminProductList' element={<AdminProductList />} />
      <Route path='/Admin/AdminOrders' element={<AdminOrders />} /> 
        </Route>
            </Routes>  
  </BrowserRouter>
    </>
  )
}

export default App
