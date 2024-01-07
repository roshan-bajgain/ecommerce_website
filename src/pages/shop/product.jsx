import React from 'react'

export const Product = (props) => {
    const {id, name, price, image} = props.data;
  return (
    <div className='product'>
        <img src={image} alt="Iphone image" />
        <div className='description'>
            <h3>{name}</h3>
            <h5>${price}</h5>
        </div>
    </div>
  )
}
