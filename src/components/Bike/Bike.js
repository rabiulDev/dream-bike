import React from 'react'
import "./Bike.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Bike = ({bike, addToCartButton}) => {
    const {img, name, price} = bike;
  return (
    <div>
        <div className="bike-container">
          <img src={img} alt="" />

          <div className="bike-info">
                <p>Name: {name}</p>
                <p>Price: ${price}</p>
          </div>
          <button className='btn' onClick={()=> addToCartButton(bike)}>Add To Cart <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
         
    </div>
  )
}

export default Bike