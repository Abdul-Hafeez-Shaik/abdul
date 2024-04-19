// PopupForm.js
import React from 'react';
import './PopopForm.css'
const PopupForm = ({ handleClose }) => {
  return (
    <div id='popupmain'>
        <div id='pop1'>
        <div className="popup">
         <div className="popup-inner">
            <div id='pop0'>
              <h4 id='panel'>panel</h4>
              <span> <button id='close' onClick={handleClose}>✖️</button></span>
            </div><br />
       <div id='popinp1'>
       <button>Number of panels</button>
        <input type="text" />
       </div>
       <div id='popinp2'>
       <button>Number of panels</button>
        <input type="text" />
       </div><br />
       <div>
        Total Amount = 0.00
       </div><br />
        <button id='done' onClick={handleClose}>Done</button>
      </div>
      </div>
        </div>
   
    </div>
  );
}

export default PopupForm;
