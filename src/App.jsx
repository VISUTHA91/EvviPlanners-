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
import AdminCategory from './Pages/Admin/AdminCategory'
import MainContent from './Pages/Admin/MainContent'
import Contact from './Pages/Contact'
import Faq from './Pages/Faq'
import Support from './Pages/Support'

function App() {

  return (
    <>
  {/* <BrowserRouter >
  <ScrollToTop />
  <Routes>
          <Route element={<RootLayout />} >
            <Route index element={<Home />} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/ProductList/:name' element={<ProductListpage/>} />
            <Route path='/Productdetails/:name' element={<Productdetails />} />
            <Route path='/Cart' element={<Cart/>} />
           
            </Route>
          
    
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route index element={<MainContent />} />
        <Route path="/Admin" element={<AdminLogin />}>
          <Route path="AdminCategory" element={<AdminCategory />} />
          <Route path="ProductCreate" element={<ProductCreate />} />
          <Route path="AdminProductList" element={<AdminProductList />} />
          <Route path="AdminOrders" element={<AdminOrders />} />
          <Route path="Userlist" element={<Userlist />} />
        </Route>
            </Routes>  
  </BrowserRouter> */}

<BrowserRouter>
  <ScrollToTop />
  <Routes>
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/ProductList/:name' element={<ProductListpage />} />
      <Route path='/Productdetails/:name' element={<Productdetails />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path='/Contact'element={<Contact /> }/>
      <Route path='/Faq'element={<Faq /> }/>
      <Route path='/support'element={<Support /> }/>
    </Route>

    {/* Dashboard Layout */}
    <Route path="AdminDashboard" element={<AdminDashboard />}>
      {/* Default route */}
      <Route index element={<MainContent />} />
      <Route path="AdminCategory" element={<AdminCategory />} />
      <Route path="ProductCreate" element={<ProductCreate />} />
      <Route path="AdminProductList" element={<AdminProductList />} />
      <Route path="AdminOrders" element={<AdminOrders />} />
      <Route path="Userlist" element={<Userlist />} />
    </Route>

    <Route path="/Admin" element={<AdminLogin />} />
  </Routes>
</BrowserRouter>

    </>
  )
}

export default App


  {/* <Route element={<AdminLayout  />} >
        <Route path='/Admin' element={<AdminLogin/>} />
        <Route index element={<AdminLogin />} />
      <Route path='/AdminDashboard' element={<AdminDashboard />} />
      <Route path='/AdminCategory' element={<AdminCategory />} />
       <Route path='/Admin/Userlist' element={<Userlist />} /> 
      <Route path='/ProductCreate' element={<ProductCreate />} />
      <Route path='/Admin/AdminProductList' element={<AdminProductList />} />
      <Route path='/Admin/AdminOrders' element={<AdminOrders />} /> 
        </Route> */}