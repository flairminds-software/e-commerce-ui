import "./navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import React from "react";

const Navbar = ({ isLoggedin, sellerIsLoggedin }) => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        {isLoggedin|| sellerIsLoggedin ? (
          <>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Sign In</Link>
            <Link to="/Register">Register</Link>
            <Link to="/sellerlogin">Seller Login</Link>
            <Link to="/sellerRegister">Seller Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
