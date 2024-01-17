import React from 'react'
import { PRODECTS } from '../produts';
import { useState, createContext } from 'react';

export const ShopContext = createContext(null);

const Defaultcart = ()=> {
  let carts = {}
  for(let i=1; i<PRODECTS.length +1; i++){
    carts[i] = 0;
  }
  return carts;
}

export const ShopContextProvider = (props) => {
  const [cartItems, setcartItems] = useState(Defaultcart());

  const addToCart = (itemId)=> {
    setcartItems((prev)=> ({...prev, [itemId]: prev[itemId] +1}))
  }

  const removeToCart = (itemId)=> {
    setcartItems((prev)=>({...prev, [itemId]: prev[itemId] -1}))
  }

  const contextValue = {cartItems, addToCart, removeToCart};

  return (
    <ShopContext.Provider value ={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
