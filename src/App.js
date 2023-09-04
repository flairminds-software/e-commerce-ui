import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar"
import React, { useState } from 'react'
import Shop from "./pages/shop/Shop";
import {Cart} from "./pages/Cart/Cart"
import { ShopContextProvider } from "./context/shop-context";
import {Register} from "./pages/login/Register"
import {Login} from "./pages/login/Login"
import {SellerLogin} from "./pages/SellerLogin/SellerLogin"
import {SellerRegister} from "./pages/SellerRegister/SellerRegister"
import SellerHome from "./pages/SellerHome/SellerHome";
import SellerUpload from "./pages/SellerUpload/SellerUpload";

const App = () => {
  const [isLoggedin,setisLoggedin]= useState(false)
  const [sellerIsLoggedin,setSellerIsLoggedin]= useState(false)
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar isLoggedin={isLoggedin} sellerIsLoggedin={sellerIsLoggedin} />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login setisLoggedin={setisLoggedin} />} />
          <Route path="/sellerlogin" element={<SellerLogin setSellerIsLoggedin={setSellerIsLoggedin} />} />
          <Route path="/sellerRegister" element={<SellerRegister />} />
          <Route path="/seller/Home" element={<SellerHome sellerIsLoggedIn={sellerIsLoggedin}/>} />
          <Route path="/seller/Upload" element={<SellerUpload />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App

