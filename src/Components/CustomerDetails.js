import React, { useState, useEffect } from 'react';
import clock from '../Assets/Images/clock.png';
import pendingOrders from '../Assets/Images/order-history.png';
import outStandingAmount from '../Assets/Images/saving.png';
import credits from '../Assets/Images/wallet.png';
import customerReview from '../Assets/Images/customer-review.png';
import loyaltyPoints from '../Assets/Images/card.png'
import '../Styles/customerDetails.css'

function CustomerDetails() {
  const [firstLetter, setFirstLetter] = useState('H');
  const [name, setName] = useState('Hafeez');
  const [address, setAddress] = useState('Hydernagar');
  const [mobileNumber, setMobileNumber] = useState('798136002');
  const [email, setEmail] = useState('hafeezJanu62@gmail.com');
  // const [randomColor, setRandomColor] = useState('');


  // const generateRandomColor = () => {
  //   return '#' + Math.floor(Math.random()*16777215).toString(16);
  // }
  // const circleStyle = {
  //   backgroundColor: randomColor
  // };
  // useEffect(() => {
  //   setRandomColor(generateRandomColor());
  // }, []);

  return (
    <div className='cd-main-container'>
      <div className='cd-nav-container'>
        <h1 className='cd-heading'>Customer Details</h1>  
      </div>
      <div className='cd-subs'>
        <div className='cd-subContainers'>
          <div className='cd-sub'>
            <div className='cd-name-circle'  >{firstLetter}</div>
            <h1 className='cd-name'>{name}</h1>
            <p className='cd-text'>{address}</p>
            <p className='cd-text'>{mobileNumber}</p>
            <p className='cd-text'>{email}</p>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className='cd-subContainers2'>
          <div className='cd-sub-cards'>
            <img src={clock} alt="" />
            <h2 className='cd-credits'>255 Day(s) ago</h2>
            <p className='cd-text'>Last Visit</p>
          </div>
          <div className='cd-sub-cards'>
            <img src={pendingOrders} alt="" />
            <h2 className='cd-credits'>255 Day(s) ago</h2>
            <p className='cd-text'>Pending Orders</p>
          </div>
          <div className='cd-sub-cards'>
            <img src={outStandingAmount} alt="" />
            <h2 className='cd-credits'>0.00</h2>
            <p className='cd-text'>Outstanding Amount</p>
          </div>
          <div className='cd-sub-cards'>
            <img src={credits} alt="" />
            <h2 className='cd-credits'>0</h2>
            <p className='cd-text'>Available Credits</p>
          </div>
          <div className='cd-sub-cards'>
            <img src={customerReview} alt="" />
            <h2 className='cd-credits'>0</h2>
            <p className='cd-text'>Customer Review</p>
          </div>
          <div className='cd-sub-cards'>
            <img src={loyaltyPoints} alt="" />
            <h2 className='cd-credits'>0</h2>
            <p className='cd-text'>Loyalty Points</p>
          </div>
        </div>
      </div>
      <div className='cd-buttons-container'>
        <div className='cd-buttons'>
          <button className='cd-edit-btn'>EDIT</button>
          <button className='cd-edit-btn'>Pending Orders / Payments</button>
        </div>
        <div className='cd-buttons'>
          <button className='cd-edit-btn'>Create Order Per Piece</button>
          <button className='cd-edit-btn'>Create Order Per Weight</button>
        </div>
      </div>
    </div>
  )
}

export default CustomerDetails