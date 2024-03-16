import React from 'react';
import Navbar from './NavBar';
import searchIcon from '../Assets/Images/loupe.png';
import profileIcon from '../Assets/Images/user.png';
import dashboardIcon from '../Assets/Images/dashboard (1).png';
import radioIcon from '../Assets/Images/radio.png'
import '../Styles/HomePage.css';
import {  useNavigate } from 'react-router-dom';


function HomePage() {

  const navigate = useNavigate();

  const addCustomer = () => {
    navigate('/addCustomer')
  }

  return (
    <>
      <Navbar />
      <div className='home-main-container'>
        <div className='home-sub-head-container'>
          <div className='home-text-radio-container'>
            <img className='home-radio-icon' src={radioIcon} alt="" />
            <p className='home-text'> Search Customer (Name, Mobile, Invoice, Customer Id, Membership Id) </p>
          </div>
          <div className='home-sub-container'>
            <div className=''> 
              <img className='home-search-icon' src={searchIcon} alt="" />
            </div>
            <div className='home-select-container'>
              <select className='home-select'>
                <option value="Name" key="">Name</option>
                <option value="mobile" key="">Mobile</option>
                <option value="Invoice" key="">Invoice</option>
                <option value="customerId" key="">Customer Id</option>
                <option value="MembershipId" key="">Membership Id</option>
              </select>
            </div>
            <div className='home-search-container'>
              <input 
                type="text" 
                // id="txtCustomer" 
                className="home-search-input" 
                placeholder="Search" 
                autocomplete="off" 
                spellcheck="false"
              />
            </div>
          </div>
          <div className='home-buttons-container'>
            <div className='home-button-container'>
              <button className='home-button' onClick={addCustomer}>Add New Customer</button>
              <img className='home-button-icon' src={profileIcon} alt="" />
            </div>
            <div className='home-button-container'>
              <button className='home-button'>Daily Dashboard</button>
              <img className='home-button-icon' src={dashboardIcon} alt="" />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default HomePage;
