import React, { useEffect, useState } from "react";
import { getSellerData } from "../../services/api";
import SellerProductList from "../../components/Products/SellerProductList";

const SellerHome = () => {
  const [sellerData, setSellerData] = useState([]);

  useEffect(() => {
    async function fetchSellerData() {
      try {
        const response = await getSellerData();
        console.log(response.data);
        setSellerData(response.data);
      } catch (error) {
        console.error("Error fetching seller data:", error);
      }
    }

    fetchSellerData();
  }, []);

  return (
    <div style={{width:"96%", height:"100%", overflow:"auto"}}>
      <div>
        <SellerProductList products={sellerData}/>
      </div>
    </div>
  );
};

export default SellerHome;
