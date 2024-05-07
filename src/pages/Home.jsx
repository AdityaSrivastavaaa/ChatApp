import React from 'react'
import Siderbar from "../components/Sidebar.jsx"
import Chat from '../components/Chat.jsx'
const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Siderbar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home
