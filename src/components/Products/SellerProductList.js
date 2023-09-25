import React from "react";
import PropTypes from "prop-types";
import BASE_URL from "../../services/api";
import styles from "./SellerProductsList.module.css"

const SellerProductList = ({ products }) => {
  return (
    <div className="seller-product-list">
      <h3>Your Products:</h3>
        {products ? (
          products.map((product) => (
            <div className={styles["product"]}>
              <div className={styles["image"]}>
                <img
                  src={BASE_URL + product.productImage} // Set the image source
                  alt={product.productName}
                  style={{width:"auto", maxHeight:"inherit"}}
                />
              </div>
              <div className={styles["discription"]}>
                <h4>{product.productName}</h4>
                <p>
                  <strong>Brand Name:</strong> {product.brandName}
                </p>
                <p>
                  <strong>Description:</strong> {product.description}
                </p>
                <p>
                  <strong>Available Quantity:</strong> {product.availableQty}
                </p>
                <p>
                  <strong>Price:</strong> ${product.price}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
    </div>
  );
};

SellerProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SellerProductList;
