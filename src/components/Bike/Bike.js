import React from 'react'

const Bike = ({bike}) => {
    const {img} = bike;
  return (
    <div>

         <img src={img} alt="" />
    </div>
  )
}

export default Bike