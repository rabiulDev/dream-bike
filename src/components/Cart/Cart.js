import React from 'react'
import "./Cart.css"
const Cart = ({ addedBikes, choseAgain, hanleDreamBikeBtn}) => {
        
    return (
        <div>
            <h3 className='added-bikes'>Added Bikes</h3>
            <ul className='added-items'>
                {
                   addedBikes && addedBikes.map(addedBike => <li key={addedBike.id}>{addedBike.name}</li>)
                    
                }
                
            </ul>

            <button className='cart-btn' onClick= {hanleDreamBikeBtn}>Get Dream Bikes</button>
            <button className='cart-btn' onClick= {choseAgain}>Chose Again</button>
        </div>
    )
}

export default Cart