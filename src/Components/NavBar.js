import React, { useState } from 'react';
import '../Styles/navBar.css'
import HomeIcon from "../Assets/Images/home-button-for-interface.png";
import dashboardIcon from '../Assets/Images/dashboard (1).png';
import userIcon from '../Assets/Images/user.png';
import reportsIcon from '../Assets/Images/reports.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  }
  const goToAddCustomer = () => {
    navigate('/addCustomer');
  }
  return (
    <div className='nav-bar'>
      <div className='nav-container'>
        {/* <div>
            <img src="" alt="" />
        </div> */}
        <div className='icons-container'>
          <div className='icons-names'>
            <img onClick={goToHome} className='nav-icons' src={HomeIcon} alt="" />
            <p className='icon-name'>Home</p>
          </div>
          <div className='icons-names'>
            <img className='nav-icons' src={dashboardIcon} alt="" />
            <p className='icon-name'>Dashboard</p>
          </div>
          <div className='icons-names'>
            <img className='nav-icons' src={reportsIcon} alt="" />
            <p className='icon-name'>Reports</p>
          </div>
          <div className='icons-names'>
            <img onClick={goToAddCustomer} className='nav-icons' src={userIcon} alt="" />
            <p className='icon-name'>Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
