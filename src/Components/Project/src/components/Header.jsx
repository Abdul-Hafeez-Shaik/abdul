import React from 'react'
import './Header.css'

const Header = ({ handleItemClick,handleItemClick1,handleItemClick2,handleItemClick3,handleItemClick4,handleItemClick5,handleItemClick6,handleItemClick7,handleItemClick8,handleItemClick9,handlePopupOpen,activeButton }) => {
  return (
    <div id='row'>
      <div id='row1'>
        <ul id='ul1'>
            <li><button id='button1' >Dry Clean</button></li>
            <li><button id='button1'>Shoe Cleaning</button></li>
            <li><button id='button1'>Steam Iron</button></li>
            <li><button id='button1'>Free Shoe</button></li>
            <li><button id='button1'>Straching Dc</button></li>
            <li><button id='button1'>Straching</button></li>
            <li><button id='button1'>Home Cleaning</button></li>
        </ul><hr />
      </div>
      <div id='row2'>
        <ul id='ul2'>
            <li><button id='button1' onClick={() => handleItemClick([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])}>Men</button></li>
            <li><button id='button1' onClick={() => handleItemClick1([1,2,3,4,5,6,7,8,9,10,11,12,13,14])}>Women</button></li>
            <li><button id='button1' onClick={() => handleItemClick2([1,2,3,4,5,6,7,8,9,10,11,12,13,14])}>Kids</button></li>
            <li><button id='button1' onClick={() => handleItemClick3([1,2,3,4,5,6,7,8,9,10,11,12,13,14])}>Household</button></li>
            <li><button id='button1' onClick={() => handleItemClick4([1])}>Weight Based</button></li>
            <li><button id='button1' onClick={() => handleItemClick5([1,2,3,4,5,6,7,8,9,10,11,12,13,14])}>Others</button></li>
            <li><button id='button1' onClick={() => handlePopupOpen()} >Home Cleaning</button></li>
            <li><button id='button1' onClick={() => handleItemClick7([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])}>Shoes</button></li>
            <li><button id='button1' onClick={() => handleItemClick6([])}>Sanitization</button></li>
            <li><button id='button1' onClick={() => handleItemClick6([])}>Sanitization...</button></li>
        </ul><hr />
      </div>
      <div id='row3'>
       <button id='searchbtn'><img id='searchimg' src="./src/assets/images/search (1).png" alt="Search" height='30px' /></button><input id='input1' type="text" placeholder='Search garment to add'/>
      </div>
    </div>
  )
}

export default Header
