import React from 'react'
import Navbar from '../../components/Home/Navbar';
import Sidebar from '../../components/Home/Sidebar';
import Home_model from '../../components/Home/Home_model';
import Footer from '../../components/Home/Footer';


const Home = () => {
  return (
    <div>
       <Navbar />
       <Sidebar />
       <div className='home-content'>
        <Home_model />
        <div className='home-text'>
         Welcome to the new world of fashion. Experience an unrestricted fashion designs and create your own piece...<br/>
         
         <button className='play-button' onClick=''>Play</button>
        </div>
       </div>
       <Footer />
    </div>
  )
}

export default Home;