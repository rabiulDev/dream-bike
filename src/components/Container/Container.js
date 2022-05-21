import React from 'react'
import "./Container.css"
import { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';


const Container = () => {

  // BIKES DATA STORE//
  const [dreamBikes, setDreamBikes] = useState([]);

  // FETCH THE BIKES DATA//
  useEffect(()=>{
    fetch("fakeData.json")
    .then(res => res.json())
    .then(data => setDreamBikes(data))
  },[])

  return (
    <div className='container'>
        <div className="bikes-container">
            <h1 className='title'>Welcome to Your Dream Bikes World!!!!!!</h1>
            <div className="bike-shocase">
                {
                  dreamBikes.map(bike => <Bike key={bike.id} bike= {bike}></Bike>)
                }
            </div>
        </div>
        <div className="cart-container">
              
        </div>
    </div>
  )
}

export default Container