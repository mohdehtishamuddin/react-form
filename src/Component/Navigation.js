import React from 'react';
import './style.css';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className='home'>
          <NavLink className='nav' to="/">Home</NavLink>
          <NavLink className='nav' to="/about">About</NavLink>
       </div>
    );
}
 
export default Navigation;