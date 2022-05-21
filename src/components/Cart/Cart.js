import React from 'react'
import "./Cart.css"
const Cart = ({ addedBikes, moreThanFour, hanleDreamBikeBtn}) => {
        
    return (
        <div>
            <h3 className='added-bikes'>Added Bikes</h3>
            <ul className='added-items'>
                {
                   addedBikes && addedBikes.map(addedBike => <li key={addedBike.id}>{addedBike.name}</li>)
                    
                }
                {moreThanFour && <h5>You can only add 4 items.</h5> }
            </ul>

            <button className='cart-btn' onClick= {hanleDreamBikeBtn}>Get Dream Bikes</button>
        </div>
    )
}

export default Cart