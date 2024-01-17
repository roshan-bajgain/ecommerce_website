import React, { useContext } from 'react'

import {ShopContext} from '../../context/shop-context'

export const Product = (props) => {
    const {id, name, price, image} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartsItemAmount = cartItems[id];
  return (
    <div className='product'>
        <img src={image} alt="Iphone image" />
        <div className='description'>
            <h3>{name}</h3>
            <h5>${price}</h5>
        </div>
        <button className='btn'onClick={()=> addToCart(id)}>Add to Cart {cartsItemAmount>0 && <>({cartsItemAmount})</>}</button>
    </div>
  )
}
