import React, { useState } from 'react';
import searchIcon from '../Assets/Images/loupe.png';
import profileIcon from '../Assets/Images/user.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import birthdayIcon from '../Assets/Images/birthday-cake.png'
import '../Styles/AddCustomer.css'
import Navbar from './NavBar';


function AddCustomer() {
  const [value, setValue] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [customerCode, setCustomerCode] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [areaLocation, setAreaLocation] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [preference, setPreference] = useState('');
  const [homeDelivery, setHomeDelivery] = useState('');

  const onChangePhoneInput = (phoneNumber) => {
    setValue(phoneNumber)
  } 
  const handleCustomerCodeChange = (e) => {
    setCustomerCode(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleAreaLocationChange = (e) => {
    setAreaLocation(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  const handlePhoneNumberChange = (phoneNumber) => {
    setPhoneNumber(phoneNumber);
  };

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  const handlePreferenceChange = (e) => {
    setPreference(e.target.value);
  };

  const handleHomeDeliveryChange = (e) => {
    setHomeDelivery(e.target.value);
  };
  const onChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className='add-customer-main-container'>
        <div className='add-customer-sub-container'>
          <div className='add-customer-top-bar'>
            <h1 className='add-customer-heading'>Create Customer/Update/Delete</h1>
          </div>
          <div>
            <div className='add-customer-sub'>
              <img className='add-customer-icons' src={searchIcon} alt="" />
              <input 
                type="text" 
                // id="txtCustomer" 
                className="add-customer-search-input" 
                placeholder="Search Customer here to Edit/Delete a Customer" 
                autoComplete="off" 
                spellCheck="false"
                value={searchInput}
                onChange={onChangeSearchInput}
              />
            </div>
            <div className='add-customer-dividing-container'>
              <div>
                <h1 className='add-customer-code-heading'>Customer Code</h1>
                <div className='add-customer-sub'>
                  <img className='add-customer-icons' src={profileIcon} alt="" />
                  <select className='add-customer-select' value={customerCode} onChange={handleCustomerCodeChange}>
                    <option value="Mr" key="Mr">Mr</option>
                    <option value="Mrs" key="Mrs">Mrs</option>
                    <option value="MS" key="MS">MS</option>
                    <option value="Dr" key="Dr">Dr</option>
                    <option value="M/S" key="M/S">M/S</option>
                    <option value="Pastor" key="Pastor">Pastor</option>
                    <option value="Deacon" key="Deacon">Deacon</option>
                    <option value="Deaconess" key="Deaconess">Deaconess</option>
                    <option value="Chief" key="Chief">Chief</option>
                    <option value="VIP" key="VIP">VIP</option>
                    <option value="HNI" key="HNI">HNI</option>
                    <option value="MLA" key="MLA">MLA</option>
                    <option value="Arch" key="Arch">Arch</option>
                    <option value="ADV" key="ADV">ADV</option>
                  </select>
                  <input 
                    type="name" 
                    // id="txtCustomer" 
                    className="add-customer-name-input" 
                    placeholder="Name" 
                    autoComplete="off" 
                    spellCheck="false"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className='add-customer-sub'>
                  <textarea className='add-customer-text-area' placeholder='Address' cols="30" rows="2" value={address}
                    onChange={handleAddressChange}></textarea>
                  {/* <textarea className='add-customer-text-area' placeholder='Area Location' cols="30" rows="2"></textarea> */}
                </div>
                <div className='add-customer-sub'>
                    <label htmlFor="state" className='add-customer-label'>State</label>
                    <select className='add-customer-state-select' value={state} onChange={handleStateChange}>
                      {/* <option value="0"></option> */}
                      <option value="35">Telangana</option>
                      <option value="29">Andaman and Nicobar Islands</option>
                      <option value="1">Andhra Pradesh</option>
                      <option value="2">Arunachal Pradesh</option>
                      <option value="3">Assam</option>
                      <option value="4">Bihar</option>
                      <option value="36">Chandigarh</option>
                      <option value="5">Chhattisgarh</option>
                      <option value="30">Dadar and Nagar Haveli</option>
                      <option value="31">Daman and Diu</option>
                      <option value="32">Delhi</option>
                      <option value="6">Goa</option>
                      <option value="7">Gujarat</option>
                      <option value="8">Haryana</option>
                      <option value="9">Himachal Pradesh</option>
                      <option value="10">Jammu and Kashmir</option>
                      <option value="11">Jharkhand</option>
                      <option value="12">Karnataka</option>
                      <option value="13">Kerala</option>
                      <option value="33">Lakshadweep</option>
                      <option value="14">Madhya Pradesh</option>
                      <option value="15">Maharashtra</option>
                      <option value="16">Manipur</option>
                      <option value="17">Meghalaya</option>
                      <option value="18">Mizoram</option>
                      <option value="19">Nagaland</option>
                      <option value="20">Odisha</option>
                      <option value="34">Puducherry</option>
                      <option value="21">Punjab</option>
                      <option value="22">Rajasthan</option>
                      <option value="23">Sikkim</option>
                      <option value="24">Tamil Nadu</option>
                      <option value="25">Tripura</option>
                      <option value="27">Uttar Pradesh</option>
                      <option value="26">Uttarakhand</option>
                      <option value="37">Uttarakhand</option>
                      <option value="28">West Bengal</option>
                    </select>
                    <label className='add-customer-label' htmlFor="pincode">Pincode</label>
                    <input 
                      type="number"  
                      className="add-customer-pincode-input" 
                      placeholder="Pincode" 
                      autoComplete="off" 
                      spellCheck="false"
                      id="pincode"
                      value={pincode}
                      onChange={handlePincodeChange}
                    />
                </div>
                <div className='add-customer-sub'>
                  <PhoneInput
                    country={'in'}
                    value={value}
                    onChange={onChangePhoneInput}
                    // autoFormat={false}
                  />
                </div>
                <div className='add-customer-subs'>
                  <div className='add-customer-sub'>
                    <img style={{height:'25px', width: '25px', padding: '4.5px'}} className='add-customer-icons' src={birthdayIcon} alt="" />
                    <input className='add-customer-state-select' style={{height: '30px'}} type="date" placeholder='BirthDay' value={birthday}
                      onChange={handleBirthdayChange} />
                  </div>
                    {/* <div className='add-customer-sub' style={{marginLeft: '5px'}}>
                      <label style={{width: '80px'}} className='add-customer-label2' value={preference} onChange={handlePreferenceChange}>Preference</label>
                      <select className='add-customer-state-select' style={{width: '160px'}}>
                        <option value="None" key="None">None</option>
                        <option value="Suit Shirt on hanger" key="Suit Shirt on hanger">Suit Shirt on hanger</option>
                        <option value="Medium Starch" key="medium starch">Medium Starch</option>
                        <option value="Hard Starch" key="hard starch">Hard Starch</option>
                        <option value="Light Starch" key="light starch">Light Starch</option>
                        <option value="No Starch" key="no starch">No Starch</option>
                        <option value="Flat Pressing" key="flat pressing">Flat Pressing</option>
                      </select>
                    </div> */}
                </div>
                <div className='add-customer-sub'>
                  <label className='add-customer-label2'>Home Delivery</label>
                  <select className='add-customer-state-select'  value={homeDelivery} onChange={handleHomeDeliveryChange}>
                    <option value="Yes" key="Yes">Yes</option>
                    <option value="No" key="No">No</option>
                  </select>
                </div>
                <div className='add-customer-sub'>
                  <button className='add-cus-save-btn'>Save</button>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddCustomer