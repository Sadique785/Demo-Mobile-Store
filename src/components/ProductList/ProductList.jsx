import React, { useState } from 'react'
import products from "../../api/products.json"
import './ProductList.css'
import { useSelector, useDispatch } from "react-redux"
import BeforeCart from './CartButtons/BeforeCart'
import AfterCart from './CartButtons/AfterCart'


function ProductList() {

  const { cartCount } = useSelector((state) => state.cart );

  console.log(cartCount, '==cart')
  const addTocart = () => {
    setCount(1)
  };


  return (
    <section className="container">
      {products.map((product, key) =>(

        <div key={key} className="product-container">
          <img src={product?.image} alt="" />
        <h3>{product?.title} </h3>


        {cartCount > 0 ?  <AfterCart  /> : <BeforeCart /> }





        </div>
    ))}
    </section>
  )
}

export default ProductList