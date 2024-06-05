import React from 'react'
import hero from '../images/illustration-hero.svg'
import musicIcon from '../images/icon-music.svg'

function ComponentCard() {
  return (
    <>
        <div className='card-component'>
          <img src={hero} alt=""/>
          <h1>Order Summary</h1>
          <p>You can now listen to millions of songs, 
            audiobooks, and podcasts on any device
            anywhere you like</p>   
          <div className='pricing'>
            <img src={musicIcon} alt=""/>
            <div className='price-plan'>
              <h5>Annual Plan</h5>
              <p>$59.99/year</p>
            </div>
            <button className='change-button' type="submit">Change</button>
          </div>   
          <button className='payment' type="submit">Proceed to Payment</button>   
          <button className='cancel' type="submit">Cancel Order</button> 
        </div>
    </>
  )
}

export default ComponentCard