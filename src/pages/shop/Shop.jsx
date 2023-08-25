import React, { useEffect, useState } from 'react'
import Product from './product'
import "./Shop.css"
import { getProducts } from '../../services/api'

const Shop = (props) => {
 
  const [products,setproducts] =useState([])
  
  useEffect(()=>{

    async function hello(){
    try{
     const allProducts= await getProducts()
     console.log(allProducts);
     setproducts(allProducts.data)
     
    }
    catch(error){
      console.log(error);
    }
  }

  hello()

  },[])

  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h2>GenZ Shop</h2>
      </div>

      {/* { console.log(products,"pro") */}
       <div className="products">
        {products.map((product) => (      //explain 22:45
          <Product data={product} />
        ))}
      </div> 
      
    </div>
  )
}

export default Shop
