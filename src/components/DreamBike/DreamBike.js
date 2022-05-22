import React from 'react'
import "./DreamBike.css"

const DreamBike = ({showDreamBike}) => {
    if(showDreamBike.length !== 0){
  return (
    <div className='dream-bike'>
        <div>
            <h1>Dream Bike is...</h1>
            <img src={showDreamBike.img} alt="" />
            <h3>Name: {showDreamBike.name}</h3>
            <h4>Price: ${showDreamBike.price}</h4>
        </div>
    </div>
  )
}
}

export default DreamBike