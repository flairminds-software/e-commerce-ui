import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import React, { useState } from 'react'
import Shop from "./pages/shop/Shop";
import {Cart} from "./pages/Cart/Cart"
import { ShopContextProvider } from "./context/shop-context";
import {Register} from "./pages/login/Register"
import {Login} from "./pages/login/Login"
// import {Register} from "./pages/login/Register"
 

const App = () => {
  const [isLoggedin,setisLoggedin]= useState(false)
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar isLoggedin={isLoggedin}/>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Register" element={<Register setisLoggedin={setisLoggedin} />} />
          <Route path="/login" element={<Login setisLoggedin={setisLoggedin} />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App

