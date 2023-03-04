import React from 'react'
import Navbar from '../../components/Home/Navbar';
import Home_model from '../../components/Home/Home_model';


const Home = () => {
  return (
    <div>
       <Navbar />
       <Home_model />
       <div className='home-text'>
        Welcome to the new world of fashion. Experience an unrestricted fashion designs and create your own piece...
       </div>
    </div>
  )
}

export default Home;