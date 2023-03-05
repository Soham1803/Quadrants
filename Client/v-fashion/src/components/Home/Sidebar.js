import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <button className='side-button app' style={{'height': '42px'}}>
          <img src='/assets/icons/application1.png' width='50px' className='side-imgs' />
        </button><br/>
        <button className='side-button lead' style={{'height': '42px'}}>
          <img src='/assets/icons/leaderboard1.png' width='50px' className='side-imgs'/>
        </button><br/>
        <button className='side-button store' style={{'height': '42px'}}>
          <img src='/assets/icons/store1.png' width='50px' className='side-imgs'/>
        </button>

    </div>
  )
}

export default Sidebar