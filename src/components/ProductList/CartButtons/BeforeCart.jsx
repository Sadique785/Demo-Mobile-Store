import React from 'react'
import "./CartButtons.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart';


function BeforeCart() {
  const dispatch = useDispatch();

  return (
    <div className="before-cart">
        <button onClick={() => dispatch(addToCart())} className="add-cart-button" >Add to Cart</button>
    </div>
  )
}

export default BeforeCart