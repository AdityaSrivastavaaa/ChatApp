import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
    <span className='logo'>Let's Chat</span>
    <div className='user'>
     <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300" alt="img" />
     <span>Aditya</span>
     <button>Logout</button>
    </div>
    </div>
  )
}

export default Navbar
