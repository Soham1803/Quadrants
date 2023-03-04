import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <button className='button app' style={{'height': '42px'}}>
          <img src='/assets/icons/application1.png' width='50px'/>
        </button><br/>
        <button className='button lead' style={{'height': '42px'}}>
          <img src='/assets/icons/leaderboard1.png' width='50px'/>
        </button><br/>
        <button className='button store' style={{'height': '42px'}}>
          <img src='/assets/icons/store1.png' width='50px'/>
        </button>

    </div>
  )
}

export default Sidebar