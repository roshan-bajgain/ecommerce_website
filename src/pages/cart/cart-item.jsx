import React from 'react'

export const CartItem = (props) => {
    const {id, name, price, image} = props.data;
  return (
    <div className='cartItem'>
        <img src={image} />
        <div className='description'>
            <p><b>{name}</b></p>
            <p>${price}</p>
        </div>
    </div>
  )
}
