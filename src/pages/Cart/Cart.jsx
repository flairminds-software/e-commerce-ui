import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { viewCart } from "../../services/api"

import "./cart.css";
export const Cart = (props) => {
  const { getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [cartData,setCartData]= useState([])

  useEffect(() => {
    // Fetch cart data from the API when the component mounts
    async function fetchCartData() {
      try {
        const response = await viewCart();
        setCartData(response.data); // Update cartData with the API response
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    }

    fetchCartData();
  }, [setCartData]);

  const removeFromCart = (itemId) => {
    const updatedCartData = cartData.filter((item) => item.id !== itemId);
    setCartData(updatedCartData);
  };

  // Check if cartData is an array before mapping over it
  if (!Array.isArray(cartData)) {
    return <h1>Your Shopping Cart is Empty</h1>;
  }

  return (
    <div className="cartparent">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {cartData.map((item) => (
          <CartItem data={item} key={item.id} removeFromCart={removeFromCart}/>
        ))}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
