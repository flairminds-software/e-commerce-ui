import React, { useState } from "react";
import { sellerAddProduct } from "../../services/api";
import styles from "./sellerUpload.module.css";

const SellerUpload = () => {
  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [description, setDescription] = useState("");
  const [availableQty, setAvailableQty] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("brandName", brandName);
      formData.append("description", description);
      formData.append("availableQty", availableQty);
      formData.append("price", price);
      formData.append("image", imageFile);
      const response = await sellerAddProduct(formData);
  
      console.log(response);
      if(response?.msg === "Product added successfully"){
        alert(response.msg);
      }
      else{
        alert('Error: '+ response)
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className={styles["uploadpage"]}>
      <h2>Seller Upload Page</h2>
      <form className={styles["seller-upload-form"]} onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className={styles["product-name-input"]}
        />

        <label htmlFor="brandName">brand Name</label>
        <input
          type="text"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          className={styles["brand-name-input"]}
        />

        <label htmlFor="description">Product description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles["description-input"]}
        />

        <label htmlFor="availableQty">Available Quantity</label>
        <input
          type="text"
          value={availableQty}
          onChange={(e) => setAvailableQty(e.target.value)}
          className={styles["available-qty-input"]}
        />

        <label htmlFor="price">Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={styles["price-input"]}
        />

        <label htmlFor="image">Product Image</label>
        <input type="file" name="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit" className={styles["upload-button"]}>
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default SellerUpload;
