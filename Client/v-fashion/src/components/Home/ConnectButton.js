import React from 'react';
import './home.css';



const ConnectButton = ({ text, color }) => {
  return (
    <button 
      className='connect-button' 
      style={{bgcolor: color}}
    >
      {text}
    </button>
  )
}

export default ConnectButton;