import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { deleteCartProduct, updateCartQuantity } from "../../services/api";

export const CartItem = (props) => {
  const { removeFromCart } = props;
  const { id, productName, price, productImage, availableQty } = props.data;
  const { cartItems } = useContext(ShopContext);
  const quantityOptions = Array.from(
    { length: availableQty },
    (_, i) => i + 1
  );

  const handleRemoveFromCart = async () => {
    try {
      // removeFromCart(id); // Update the frontend first
      const response = await deleteCartProduct(id);

      if (response?.msg === "Product Deleted Successfully"){
        removeFromCart(id);
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const handleQuantityChange = async (newValue) => {
    try {
      const response = await updateCartQuantity(id, newValue);
      console.log("Update quantity response:", response);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Price: ${price}</p>
        <div className="countHandler">
          <button
            className="removeFromCartBttn"
            onClick={handleRemoveFromCart}
          >
            Remove from Cart
          </button>
          <select
            value={cartItems[id]}
            onChange={(e) => {
              const newValue = Number(e.target.value);
              handleQuantityChange(newValue); // Call the new handler function
            }}
          >
            {quantityOptions.map((quantity) => (
              <option key={quantity} value={quantity}>
                {quantity}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
