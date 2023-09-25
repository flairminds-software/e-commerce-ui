import axios from "axios";
const BASE_URL = "http://localhost:5000";
// const BASE_URL = window.location.origin;

export const getProducts = async () => {
  const allProducts = await axios.get(BASE_URL + "/api/products");
  return allProducts;
};

export const login = async (email, pass) => {
  const response = await axios.post(BASE_URL + "/api/customerLogin", {
    email: email,
    password: pass,
  },{withCredentials: true});
  return response.data;
};

export const register = async (email, pass, name, phoneNumber, address) => {
  const response = await axios.post(BASE_URL + "/api/addCustomer", {
    email: email,
    password: pass,
    name: name,
    address: address,
    mobile_no: phoneNumber,
  });
  return response.data;
};

export const logout = async () => {
  try {
    const response = await axios.post(BASE_URL + "/api/customerLogout", null, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error; // Propagate the error
  }
};

export const addToCart = async (productId) => {
  try {
    const response = await axios.post(
      BASE_URL + "/api/addToCart",
      { productId },
      { withCredentials: true }
    );
    console.log("Add to Cart Response:", response.data); // Log the response
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

export const viewCart = async () => {
  const allProducts = await axios.get(BASE_URL + "/api/viewCart",{withCredentials: true});
  return allProducts;
};

export const deleteCartProduct = async (productId) => {
  try {
    const response = await axios.post(BASE_URL + "/api/deleteProduct", 
    {productId},
    {withCredentials: true});
    return response.data;
  } catch (error) {
    throw error; // Handle errors appropriately in your component
  }
};

export const updateCartQuantity = async (productId, productQty) => {
  try {
    const response = await axios.post(
      BASE_URL + "/api/updateCartQuantity",
      { id: productId, productQty },
      { withCredentials: true }
    );
    console.log("Update Cart Quantity Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating cart quantity:", error);
    throw error;
  }
};

export const sellerLogin = async (email, pass) => {
  const response = await axios.post(BASE_URL + "/api/sellerLogin", {
    email: email,
    password: pass,
  },{withCredentials: true});
  return response.data;
};

export const sellerRegister = async (email, pass, name, phoneNumber, address) => {
  const response = await axios.post(BASE_URL + "/api/addSeller", {
    email: email,
    password: pass,
    name: name,
    mobileNumber: phoneNumber,
    address: address,
  });
  return response.data;
};

export const sellerAddProduct = async (formData) => {
  const response = await axios.post(BASE_URL + "/api/seller/addProduct", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  });
  return response.data;
};

export const  getSellerData = async () => {
  const allProducts = await axios.get(BASE_URL + "/api/viewSellerProduct",{withCredentials: true});
  return allProducts;
};
export default BASE_URL;
