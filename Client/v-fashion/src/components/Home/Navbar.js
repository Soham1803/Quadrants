import React from 'react';
import ConnectButton from './ConnectButton';
import Profile from './Profile';
import './home.css';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            SEKAI
            <div className='symbol'>
              <img src='/assets/icons/symbol.png' width={35} />
            </div>
        </div>
    
        
        <div className='nav-right'>
          
          <ConnectButton 
              text = "Connect wallet!"
              color = "red"
          />
          {/* < Profile /> */}
        </div>
    </div>
  )
}

export default Navbar;