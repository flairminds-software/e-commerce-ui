import axios from "axios";
const BASE_URL = "http://192.168.0.157:5000"

export const getProducts = async()=>{
    
  const allProducts = await axios.get(BASE_URL + '/api/products')
  return allProducts  
}

export const viewCart = async()=>{
    
    const allProducts = await axios.get(BASE_URL + '/api/view_cart')
    return allProducts  
  }
  
export const login = async(email, pass) => {

  const response = await axios.post(BASE_URL+"/api/login",{'email' : email , 'password' : pass})
  return response.data
}
export const register = async(email, pass,name,phoneNumber) => {

  const response = await axios.post(BASE_URL+"/api/addCustomer",{'email' : email , 'password' : pass ,'name':name , 'mobile_no': phoneNumber})
  return response.data
}
 export default BASE_URL