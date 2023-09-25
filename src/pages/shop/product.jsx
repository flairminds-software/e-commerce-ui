import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import BASE_URL from "../../services/api";
import { addToCart as addToCartApi } from "../../services/api";

const Product = (props) => {
  const { id, productName, price, productImage, availableQty } = props.data;
  const { cartItems, addToCart } = useContext(ShopContext);
  const cartItemCount = cartItems[id];
  const [isAddToCartDisabled, setIsAddToCartDisabled] = useState(cartItemCount >= availableQty);

  useEffect(() => {
    setIsAddToCartDisabled(cartItemCount >= availableQty);
  }, [cartItemCount, availableQty]);

  const handleAddToCart = async () => {
    try {
      // Call the API function to add the item to the cart
      const response = await addToCartApi(id);
      console.log("Adding to cart response:", response);
      // Update the cart state in your context to refresh the quantity
      addToCart(id);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="product">
      <img src={BASE_URL + productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <p>Available Qty: {availableQty}</p>
      </div>
      <button className="addToCartBttn" onClick={handleAddToCart} disabled={isAddToCartDisabled}>
        {isAddToCartDisabled ? "Out of Stock" : `Add To Cart (${cartItemCount})`}
      </button>
    </div>
  );
};

export default Product;
