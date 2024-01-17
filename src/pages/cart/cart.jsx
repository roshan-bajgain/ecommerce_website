import React, { useContext } from 'react'
import { PRODECTS } from '../../produts';
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item';
import './cart.css';

export const Cart = () => {
  const {cartItems} = useContext(ShopContext);
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODECTS.map((product)=>{
          if(cartItems[product.id] !== 0){
            return <CartItem data={product}/>
          }
        })}
      </div>
    </div>
  )
}
