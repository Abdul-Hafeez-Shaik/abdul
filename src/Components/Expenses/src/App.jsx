import React, { useState } from 'react';
import './App.css';

const App = () => {
  const initialFormData = {
    date: '',
    dropdownValue: '',
    text1: '',
    text2: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, like submit it to a server
    console.log(formData);
    // Reset the form data after submission
    setFormData(initialFormData);
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };
  const [formData1, setFormData1] = useState({
    secondDate: '',
    secondOption: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData1({
      ...formData1,
      [name]: value,
    });
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    // Here you can perform any actions with form data, like submitting it to an API or storing it in state
    console.log(formData1);
    // Reset form after submission
    setFormData1({
      secondDate: '',
      secondOption: '',
    });
  };

  return (
    <div id='exp'>
      <div id='main'>
        <div className='row1'>
          Receipt Entry
        </div>
        <form id='form' onSubmit={handleSubmit}>
          <label>
            <span id='text'><button id='text'> Date:</button></span>
            <input
              id='inp3'
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </label>
          <br /><br />
          <label>
            <span id='text'><button id='text'> Paid To:</button></span>
            <select
              id='inp1'
              name="dropdownValue"
              value={formData.dropdownValue}
              onChange={handleInputChange}
            >
             <option value="Advertisement Expenses">Advertisement Expenses</option>
              <option value="Business Promotion">Business Promotion</option>
              <option value="Cartage Inward">Cartage Inward</option>
              <option value="Cartage Outward">Cartage Outward</option>
          <option value="Chemical Expenses">Chemical Expenses</option>
          <option value="Cheque Deposit">Cheque Deposit</option>
          <option value="Cleaning Expenses">Cleaning Expenses</option>
          <option value="Commission Paid">Commission Paid</option>
          <option value="Compensation">Compensation</option>
          <option value="Courier Charges">Courier Charges</option>
          <option value="Electricity Charges">Electricity Charges</option>
          <option value="Hanger Purchase">Hanger Purchase</option>
          <option value="Internet Charges">Internet Charges</option>
          <option value=">Misc Charges">Misc Charges</option>
          <option value="Postage and Stamps">Postage and Stamps</option>
          <option value="Priniting and Stationary">Priniting and Stationary</option>
          <option value="Salary">Salary</option>
          <option value="Service Tax Paid">Service Tax Paid</option>
          <option value="Staff Welfare">Staff Welfare</option>
         <option value="Tag Purchase">Tag Purchase</option>
         <option value="Tea Expenses">Tea Expenses</option>
         <option value="Telephone Charges">Telephone Charges</option>
         <option value=">Wages">Wages</option>
            </select>
          </label>
          <button id='text'>Add new Sledger</button>
          <br /><br />
          <label>
            <span id='text'> <button id='text'>Amount:</button></span>
            <input
              id='inp2'
              type="text"
              name="text1"
              value={formData.text1}
              onChange={handleInputChange}
            />
          </label>
          <br /><br />
          <label>
            <span id='text'><button id='text'>  Narration:</button></span>
            <input
              id='inp'
              type="text"
              name="text2"
              value={formData.text2}
              onChange={handleInputChange}
            />
          </label>
          <br /><br />
          <button type="submit" id='text'>Submit</button>&nbsp;
          <button type="button" id='text' onClick={handleReset}>Reset</button>
        </form>
      </div><br />
      <div id='report'>
        <form id='form' onSubmit={handleSubmit1}>
          <label  htmlFor="secondDate">
            <span id='text'><button id='text'> Date:</button></span>
            <input
              id='secondDate'
              className='inp3'
              type="date"
              name="secondDate"
              value={formData1.secondOption}
              onChange={handleChange}
            />
          </label>
          <br /><br />
          <label htmlFor="secondOption">
            <span id='text'> <button id='text'>Paid To:</button></span>
            <select
              id='secondOption'
              className='inp2'
              name="secondOption"
              value={formData1.secondOption}
              onChange={handleChange}
            >
              <option value="">Advertisement Expenses</option>
              {/* Add other options here */}
              <option value="Advertisement Expenses">Advertisement Expenses</option>
              <option value="Business Promotion">Business Promotion</option>
              <option value="Cartage Inward">Cartage Inward</option>
              <option value="Cartage Outward">Cartage Outward</option>
          <option value="Chemical Expenses">Chemical Expenses</option>
          <option value="Cheque Deposit">Cheque Deposit</option>
          <option value="Cleaning Expenses">Cleaning Expenses</option>
          <option value="Commission Paid">Commission Paid</option>
          <option value="Compensation">Compensation</option>
          <option value="Courier Charges">Courier Charges</option>
          <option value="Electricity Charges">Electricity Charges</option>
          <option value="Hanger Purchase">Hanger Purchase</option>
          <option value="Internet Charges">Internet Charges</option>
          <option value=">Misc Charges">Misc Charges</option>
          <option value="Postage and Stamps">Postage and Stamps</option>
          <option value="Priniting and Stationary">Priniting and Stationary</option>
          <option value="Salary">Salary</option>
          <option value="Service Tax Paid">Service Tax Paid</option>
          <option value="Staff Welfare">Staff Welfare</option>
         <option value="Tag Purchase">Tag Purchase</option>
         <option value="Tea Expenses">Tea Expenses</option>
         <option value="Telephone Charges">Telephone Charges</option>
         <option value=">Wages">Wages</option>
            </select>
          </label>
          <br /><br />
          <button type="submit" id='text'>Submit</button>&nbsp;
          <button type="button" id='text' onClick={() => setFormData({ secondDate: '', secondOption: '' })}>
        Reset
      </button>
        </form>
      </div>
    </div>
  );
};

export default App;






{/* <option value="">Advertisement Expenses</option>
          <option value="">Advertisement Expenses</option>
          <option value="">Business Promotion</option>
          <option value="">Cartage Inward</option>
          <option value="">Cartage Outward</option>
          <option value="">Chemical Expenses</option>
          <option value="">Cheque Deposit</option>
          <option value="">Cleaning Expenses</option>
          <option value="">Commission Paid</option>
          <option value="">Compensation</option>
          <option value="">Courier Charges</option>
          <option value="">Electricity Charges</option>
          <option value="">Hanger Purchase</option>
          <option value="">Internet Charges</option>
          <option value="">Misc Charges</option>
          <option value="">Postage and Stamps</option>
          <option value="">Priniting and Stationar</option>
          <option value="">Salary</option>
          <option value="">Service Tax Paid</option>
          <option value="">Staff Welfare</option>
         <option value="">Tag Purchase</option>
         <option value="">Tea Expenses</option>
         <option value="">Telephone Charges</option>
         <option value="">Wages</option> */}