import React, { useState } from "react";
import { sellerAddProduct } from "../../services/api"; // Import the sellerAddProduct API
import axios from "axios"; // Import axios for image uploading
import BASE_URL from "../../services/api"; // Import BASE_URL from api.js

const SellerUpload = () => {
  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [description, setDescription] = useState("");
  const [availableQty, setAvailableQty] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null); // State to hold the selected image file

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the image file
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      // Upload the image first
    //   const imageResponse = await axios.post(BASE_URL + "/api/upload", formData);
    //   const imageUrl = imageResponse.data.url;

      // Call the API to add the product with the image URL
      const response = await sellerAddProduct(
        productName,
        brandName,
        description,
        availableQty,
        price,
        // imageUrl
      );

      console.log(response); // Assuming the API returns a response message
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <h2>Seller Upload Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <label htmlFor="brandName">brand Name</label>
        <input
          type="text"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        />

        <label htmlFor="description">Product description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="availableQty">Available Quantity</label>
        <input
          type="text"
          value={availableQty}
          onChange={(e) => setAvailableQty(e.target.value)}
        />

        <label htmlFor="price">Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {/* Add similar input fields for other form data */}
        <label htmlFor="image">Product Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Upload Product</button>
      </form>
    </div>
  );
};

export default SellerUpload;
