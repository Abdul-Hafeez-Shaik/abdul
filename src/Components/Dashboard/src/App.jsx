import React from 'react'
import './App.css'
const App = () => {
  return (
    <div id='dashmain'>
    <div id='dashsub'>
      <div id='drop'>
        <div></div>
       <div id='drop1'>
        <button id='dropbtn'>Show Dashboard for</button>
        <select id='dropopt' name="">
      <option  value="">Laundry and Dry Cleaning</option>
        </select>
       </div>
       <div id='drop2'>
       <button id='dropbtn'>Comparision</button>
        <select name="" id='dropopt'>
      <option value="">This month vs Last month</option>
        </select>
       </div>
      </div>
    <div id='dashboard'>
    <div id='dashboard01'>
      <div id='row'>
       <div id='row1'>
        <span id='num'>4,326</span>
        <span id='num2'>Customers</span>
       </div>
      <img id='rowimg' src="./src/assets/images/row1/group.png" alt="img" />
      </div><hr />
      <div id='row'>
       <div id='row1'>
        <span id='num'>1,571</span>
        <span id='num2'>Active Customers</span>
       </div>
      <img src="./src/assets/images/row1/user.png" alt="img" />
      </div><hr />
      <div id='dashboardrow02'>
    <div id='row13'>
     <span id='num'>42</span>
     <span id='brac'>(73)</span><br />
     <span id='num2'>New Customers</span>
    </div>
    <div>
    <span>42.5%⬇️</span>
    <img src="./src/assets/images/row1/add-user.png" alt="img" />
    </div>
    </div>
      
     
    </div>
    <div id='dashboard02'>
    <div id='dashboardrow1'>
    <div id='row12'>
    <span id='inr'>INR</span>
     <span id='num1'>149565</span>
     <span id='brac'>(252,943)</span><br />
     <span id='num2'>Revenue</span>
    </div>
    <div>
    <span>40.9%⬇️</span>
    <img src="./src/assets/images/row1/statistics.png" alt="img" />
    </div>
    </div><hr />
    <div id='dashboardrow1'>
    <div id='row12'>
    <span></span>
     <span  id='num1'>115,344</span>
     <span id='brac'>(170,028)</span><br />
     <span id='num2'>Dry Cleaning</span>
    </div>
    <div>
    <span>32.2%⬇️</span>
    <img src="./src/assets/images/row1/statistics.png" alt="img" />
    </div>
    </div><hr />
    <div id='dashboardrow1'>
    <div id='row12'>
    <span></span>
     <span id='num1'>34,221</span>
     <span id='brac'>(82,915)</span><br />
     <span id='num2'>Laundry</span>
    </div>
    <div>
    <span>58.7%⬇️</span>
    <img src="./src/assets/images/row1/statistics.png" alt="img" />
    </div>
    </div>
    </div>
    <div id='dashboard03'>
    <div id='dashboardrow2'>
    <div id='row13'>
     <span  id='num1'>160</span>
     <span id='brac'>(290)</span><br />
     <span id='num2'>Orders</span>
    </div>
    <div id='per'>
    <span>44.8%⬇️</span>
    <img id='row1img' src="./src/assets/images/row1/truck.png" alt="img" />
    </div>
    </div><hr />
    <div id='dashboardrow2'>
    <div id='row13'>
     <span id='num1'>116</span>
     <span id='brac'>(172)</span><br />
     <span id='num2'>Dry Cleaning</span>
    </div>
    <div>
    <span>32.6%⬇️</span>
    <img src="./src/assets/images/row1/truck.png" alt="img" />
    </div>
    </div><hr />
    <div id='dashboardrow2'>
    <div id='row13'>
     <span id='num1'>44</span>
     <span id='brac'>(118)</span><br />
     <span id='num2'>Laundry</span>
    </div>
    <div>
    <span>62.7%⬇️</span>
    <img src="./src/assets/images/row1/truck.png" alt="img" />
    </div>
    </div>
    </div>
    </div>
    <div id='dashboard1'>
      <div id='thumbup'>
       <div id='feed1'>
        <img src="./src/assets/images/row2/like.png" alt="img" />
        <div id='feed01'>
        <span>0%</span>
        <span>Positive feedback</span>
        <span>This month:0</span>
        </div>
       </div>
      </div>
      <div id='thumbdown'>
      <div id='feed1'>
        <img src="./src/assets/images/row2/thumb-down.png" alt="img" />
        <div id='feed01'>
        <span>0%</span>
        <span>Negative feedback</span>
        <span>This month:0</span>
        </div>
       </div>
      </div>
    </div>
    <div id='dashboard2'>
    <h2>Feedback Analytics</h2><hr />
    <div id='feedback'>
      <div id='feedback1'>
      <p><img src="./src/assets/images/row3/send.png" alt="" /></p>
      <div id='feedback01'>
       <span>Feedback sent</span>
       <span>This month:143</span>
      </div>
      </div>
      <div id='feedback1'>
      <p><img src="./src/assets/images/row3/task.png" alt="" /></p>
      <div id='feedback01'>
       <span>Feedback Recieved</span>
       <span>This month:0 (0.00%)</span>
      </div>
      </div>
      <div id='feedback1'>
      <p><img src="./src/assets/images/row3/stats.png" alt="" /></p>
      <div id='feedback01'>
       <span>Feedback Score</span>
       <span>This month:0%</span>
      </div>
      </div>
    </div><hr />
    </div>
    </div>
    </div>
  )
}

export default App
