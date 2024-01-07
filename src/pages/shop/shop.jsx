import React from 'react'
import { PRODECTS } from '../../produts';
import { Product } from './product';
import "./shop.css";

export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shoptitle'><h1>WELCOME TO BAJGAIN SHOP</h1></div>
        <div className='products'>
            {PRODECTS.map((product)=> (
                <Product data={product} />
            ))}
        </div>
    </div>
  )
}
