import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // BIKES DATA STORE//
  const [dreamBike, setDreamBike] = useState([]);

  // FETCH THE BIKES DATA//
  useEffect(()=>{
    fetch("fakeData.json")
    .then(res => res.json())
    .then(data => setDreamBike(data))
  },[])


  return (
    <div className="App">
        {dreamBike.length}
    </div>
  );
}

export default App;
