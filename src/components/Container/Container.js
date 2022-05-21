import React from 'react'
import "./Container.css"
import { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import Cart from '../Cart/Cart';


const Container = () => {

  // BIKES DATA STORE//
  const [dreamBikes, setDreamBikes] = useState([]);
  const [addedBikes, setAddedBikes] = useState([]);
  const [moreThanFour, setMoreThanFour] = useState(false)

  // FETCH THE BIKES DATA//
  useEffect(() => {
    fetch("fakeData.json")
      .then(res => res.json())
      .then(data => setDreamBikes(data))
  }, [])

  // HANDLE ADD TO CART BUTTON//
  const addToCartButton = (bike) => {

    if (addedBikes.length === 0) {
          setAddedBikes([bike])
        }
    
    else if(addedBikes.length < 4) {
        for (const addedBike of addedBikes ){
          const exist = addedBike;
          const previousState = addedBikes.filter(addedBike => addedBike.id !== bike.id)
          if(exist.id !== bike.id ){
            setAddedBikes([bike, ...previousState ])
          }
        }
       
    }
    else {
      setMoreThanFour(true)
    }
  }

  //GENERATE RANDOM NUMBER//
  const getRandomNumber = () => Math.floor(Math.random() * 12);

  // HANDLE GET THE DREAM BIKES BUTTON//
  const hanleDreamBikeBtn = () => {
    const radomNumber = getRandomNumber();
    if (addedBikes) {
      const luckyBike = addedBikes.find(addedBike => addedBike.id === radomNumber)
      console.log(luckyBike)
    }
    else {
      hanleDreamBikeBtn()
    }

  }


  return (
    <div className='container'>
      <div className="bikes-container">
        <h1 className='title'>Welcome to Your Dream Bikes World!!!!!!</h1>
        <div className="bike-shocase">
          {
            dreamBikes.map(bike => <Bike key={bike.id} bike={bike} addToCartButton={addToCartButton}></Bike>)
          }
        </div>
      </div>
      <div className="cart-container">
        <div className="position-relative">
          <div className="cart">
            <Cart addedBikes={addedBikes} moreThanFour={moreThanFour} hanleDreamBikeBtn={hanleDreamBikeBtn} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Container