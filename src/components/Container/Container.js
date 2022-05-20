import React from 'react'
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
    <div>
        {dreamBike.length}
    </div>
  )
}

export default Container