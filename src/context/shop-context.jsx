import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/api";

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
  let cart = {};
  for (const product of products) {
    cart[product.id] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from your API using the getProducts function
    getProducts()
      .then((response) => {
        setProducts(response.data);
        setCartItems(getDefaultCart(response.data));
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  // Define your cart-related functions here (addToCart, removeFromCart, updateCartItemCount, checkout)

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = products.find((product) => product.id === Number(itemId));
        if (itemInfo) {
          totalAmount += cartItems[itemId] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart(products));
  };

  const contextValue = {
    cartItems,
    products,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};