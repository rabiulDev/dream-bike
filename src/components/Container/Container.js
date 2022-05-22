import React from 'react'
import { useEffect, useState } from 'react';
import "./Container.css"
import Bike from '../Bike/Bike';
import Cart from '../Cart/Cart';
import DreamBike from '../DreamBike/DreamBike';


const Container = () => {

  // BIKES DATA STORE//
  const [dreamBikes, setDreamBikes] = useState([]);

  // ADDED TO CART BIKES DATA STORE//
  const [addedBikes, setAddedBikes] = useState([]);

  // THE DREAM BIKE STORE//
  const [dreamBike, setDreamBike] = useState([]);

  // CONDITION VALUE FOR CART ITEMS//
  const [moreThanFour, setMoreThanFour] = useState(false)

  // FETCH THE BIKES DATA//
  useEffect(() => {
    fetch("fakeData.json")
      .then(res => res.json())
      .then(data => setDreamBikes(data))
  }, [])


  // START HANDLE ADD TO CART BUTTON//
  const addToCartButton = (bike) => {

    if (addedBikes.length === 0) {
      setAddedBikes([bike])
    }
    else if (addedBikes.length < 4) {
      for (const addedBike of addedBikes) {
        const exist = addedBike;
        const previousState = addedBikes.filter(addedBike => addedBike.id !== bike.id)
        if (exist.id !== bike.id) {
          setAddedBikes([...previousState, bike])
        }
      }
    }
    else {
      setMoreThanFour(true)
    }
  }
  //END HANDLE ADD TO CART BUTTON//

  //-------!!!!!!!!!!!!!!!!!!!!!!!!-------//

  //GET RANDOM NUMBER FUNCTION START//
  const getRandomNum = (min, max) => {
    const rangeNum = max - min + 1;
    const randomNum = Math.random() * rangeNum;
    const result = Math.floor(randomNum) + min
    return result;
  }


  //GET RANDOM NUMBER FUNCTION END//

  //-------!!!!!!!!!!!!!!!!!!!!!!!!-------//

  // START HANDLE GET THE DREAM BIKES BUTTON//

  const hanleDreamBikeBtn = () => {
    if (addedBikes.length !== 0) {
      const index = getRandomNum(0, addedBikes.length - 1)
      setDreamBike(addedBikes[index])


    }
  }

  // END HANDLE GET THE DREAM BIKES BUTTON//

  return (
    <div>
      <h1 className='title'>Welcome to Your Dream Bikes World!!!!!!</h1>

      <DreamBike showDreamBike={dreamBike}></DreamBike>

      <div className='container'>
        <div className="bikes-container">

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
    </div>
  )
}

export default Container