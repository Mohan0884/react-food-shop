import React from 'react';
import logo from './logo.png';
import './styles.css';

const Logo = () => (
  <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo' />
      <span>
        <b className='foodster'>Foodster</b>
      </span>
    </div>
     
  </div>
);

export default Logo;
