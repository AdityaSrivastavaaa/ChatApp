import React from 'react'
import Cam from "../assets/icons8-video-call-50.png"
import Add from "../assets/icons8-add-administrator-50.png"
import More from "../assets/icons8-ellipsis-50.png"
import Messages from './Messages'
import Input from './Input'
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Aditya</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
