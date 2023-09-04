import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import BASE_URL from "../../services/api";

const Product = (props) => {
  const { id, productName, price, productImage, availableQty } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  console.log(id, productName, price, productImage);
  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={BASE_URL + productImage} />
      <div className="description">
        <p>
          <b>{productName} </b>
        </p>
        <p>${price}</p>
        {availableQty}
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

export default Product;
