import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSellerData } from "../../services/api"; // You might need to create this function to fetch seller data
import Product from "../shop/product";

const SellerHome = ({ sellerIsLoggedIn }) => {
  const [sellerData, setSellerData] = useState({});                                                                      
  const [products, setproducts] = useState([]);

  useEffect(() => {
    // Fetch seller data here using an appropriate API call
    async function fetchSellerData() {
      try {
        const response = await getSellerData(); // Replace this with the actual API call
        setSellerData(response.data); // Assuming response.data contains the fetched data
      } catch (error) {
        console.error("Error fetching seller data:", error);
      }
    }

    fetchSellerData();
  }, []);

  return (
    <div>
      <h2>Welcome to the Seller Home Page</h2>
      {/* Display seller data here */}
      <p>Seller Name: {sellerData.name}</p>
      <p>Email: {sellerData.email}</p>
      {/* Add more data fields as needed */}
      <div className="products">
      {products.map(
          (
            product //explain 22:45
          ) => (
            <Product data={product} />
          )
        )}
      </div>
      <Link to="/seller/Upload">Upload</Link>
    </div>
  );
};

export default SellerHome;
