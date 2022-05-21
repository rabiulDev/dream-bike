import React from 'react'
import "./Bike.css"
const Bike = ({bike}) => {
    const {img, name, price} = bike;
  return (
    <div>
        <div className="bike-container">
          <img src={img} alt="" />

          <div className="bike-info">
                <p>Name: {name}</p>
                <p>Price: ${price}</p>
          </div>
          <button className='btn'>Add To Cart</button>
        </div>
         
    </div>
  )
}

export default Bike