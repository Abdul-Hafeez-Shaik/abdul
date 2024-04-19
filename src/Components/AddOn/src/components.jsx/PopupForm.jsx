import React, { useState } from 'react';

function PopupForm({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log('Name:', name);
    console.log('Email:', email);
    // Reset form fields
    setName('');
    setEmail('');
    // Close the popup form
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
       <div id='head'>
        <span>< button id='headbtn' className="close" onClick={onClose}>✖️</button></span>
       </div><hr />
        <div id='line1'>
            <p id='p1'>Fold Packing</p>
            <div id='qty'>
               <span><h5 id='h5'>Qty</h5></span>
               <span> <input id='inpval' type="text" value='1' /></span>
               <span id='cross'>✖️</span>
            </div>
            <div>
                <h5 id='h6'>Rate</h5>
                <input id='inpval' type="text" value='20' />
                <span id='equal'>
                🟰
            </span>
            </div>
            {/* <div id='equal'>
                🟰
            </div> */}
            <div>
                <h5>Total Amt</h5>
                <input id='inpval' type="text" value='20' />
            </div>
        </div><hr />
        <div id='line1'>
            <p id='p1'>Hanger Packing</p>
            <div id='qty'>
               <span><h5 id='h5'>Qty</h5></span>
               <span> <input id='inpval' type="text" value='1' /></span>
               <span id='cross'>✖️</span>
            </div>
            <div>
                <h5 id='h6'>Rate</h5>
                <input id='inpval' type="text" value='20' />
                <span id='equal'>
                🟰
            </span>
            </div>
            {/* <div id='equal'>
                🟰
            </div> */}
            <div>
                <h5>Total Amt</h5>
                <input id='inpval' type="text" value='20' />
            </div>
        </div> <hr />
        <div id='line1'>
            <p id='p1'>Spot cleaning</p>
            <div id='qty'>
               <span><h5 id='h5'>Qty</h5></span>
               <span> <input id='inpval' type="text" value='1' /></span>
               <span id='cross'>✖️</span>
            </div>
            <div>
                <h5 id='h6'>Rate</h5>
                <input id='inpval' type="text" value='20' />
                <span id='equal'>
                🟰
            </span>
            </div>
            {/* <div id='equal'>
                🟰
            </div> */}
            <div>
                <h5>Total Amt</h5>
                <input id='inpval' type="text" value='20' />
            </div>
        </div> <hr />
        <div id='line1'>
            <p id='p1'>Starching with L..</p>
            <div id='qty'>
               <span><h5 id='h5'>Qty</h5></span>
               <span> <input id='inpval' type="text" value='1' /></span>
               <span id='cross'>✖️</span>
            </div>
            <div>
                <h5 id='h6'>Rate</h5>
                <input id='inpval' type="text" value='20' />
                <span id='equal'>
                🟰
            </span>
            </div>
            {/* <div id='equal'>
                🟰
            </div> */}
            <div>
                <h5>Total Amt</h5>
                <input id='inpval' type="text" value='20' />
            </div>
        </div><hr />
        <div  id='line1'>
            <p id='p1'>Express Delivery..</p>
            <input id='inpval' className='line2btn' type="text" value='20' />
            <div id='line1'>
            <p id='p1'>Pickup & Deliver..</p>
            <input id='inpval' className='line2btn' type="text" value='20' />
        </div>
        </div><hr />
        <div id='line1'>
            <p id='p1'>Premium Packag..</p>
            <input id='inpval' className='line2btn' type="text" value='20' />
        </div><hr />
        <div id='foot'>
            <p>You can select maximum <strong>four top services</strong>.the price mentioned here for any would be added to the total bill as it is</p>
            <button id='footbtn'>Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default PopupForm;
