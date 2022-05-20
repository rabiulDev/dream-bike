import React from 'react'
import "./Container.css"
import { useEffect, useState } from 'react';


const Container = () => {

  // BIKES DATA STORE//
  const [dreamBike, setDreamBike] = useState([]);

  // FETCH THE BIKES DATA//
  useEffect(()=>{
    fetch("fakeData.json")
    .then(res => res.json())
    .then(data => setDreamBike(data))
  },[])

  return (
    <div className='container'>
        <div className="bikes-container">
            
        </div>
        <div className="cart-container">

        </div>
    </div>
  )
}

export default Container