import axios from "axios";
const BASE_URL = "http://localhost:5000";

export const getProducts = async () => {
  const allProducts = await axios.get(BASE_URL + "/api/products");
  return allProducts;
};

export const viewCart = async () => {
  const allProducts = await axios.get(BASE_URL + "/api/view_cart");
  return allProducts;
};

export const login = async (email, pass) => {
  const response = await axios.post(BASE_URL + "/api/customerLogin", {
    email: email,
    password: pass,
  });
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

export const sellerLogin = async (email, pass) => {
  const response = await axios.post(BASE_URL + "/api/sellerLogin", {
    email: email,
    password: pass,
  });
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

export const sellerAddProduct = async (productName, brandName, description, availableQty, price, image) => {
  const response = await axios.post(BASE_URL + "/api/seller/addProduct", {
    productName: productName,
    brandName: brandName,
    description: description,
    availableQty: availableQty,
    price: price,
    image: image,
  });
  return response.data;
};

export const  getSellerData = async () => {
  const allProducts = await axios.get(BASE_URL + "/api/viewSellerProduct",{withCredentials: true});
  return allProducts;
};
export default BASE_URL;
