import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Collection from './pages/Collection.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Orders from './pages/Orders.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Product from './pages/Product.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
 import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <>
    {/* <div className='px-4 sm:px-[5vw] md:px[7vw] lg:px[9vw]'>App my name</div> */}
    <ToastContainer></ToastContainer>
    <Navbar/>
    <SearchBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Collection' element={<Collection/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Cart' element={<Cart/>}/> 
      <Route path='/Contact' element={<Contact/>}/> 
      <Route path='/Login' element={<Login/>}/> 
      <Route path='/Orders' element={<Orders/>}/> 
      <Route path='/place-order' element={<PlaceOrder/>}/> 
      <Route path='/Product/:ProductId' element={<Product/>}/> 
    </Routes>
    <Footer/>
    </>
  )
}

export default App
