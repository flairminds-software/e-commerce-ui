import "./navbar.css";
import { ShoppingCart } from "phosphor-react";
import { Link, useNavigate} from "react-router-dom";
import React from "react";
import { logout } from "../../services/api";

const Navbar = ({ isLoggedin, sellerIsLoggedin, setisLoggedin, setSellerIsLoggedin }) => {
  const nav = useNavigate()
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const logoutResponse = await logout(); // Call the logout API
      if (logoutResponse === "Logout Successful") {
        nav("/");
        setSellerIsLoggedin(false);
        setisLoggedin(false);
      } else {
        alert("Unable to logout: " + logoutResponse);
      }
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Unable to logout. Please try again later.");
    }
  };

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
              onClick={handleLogout}
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
