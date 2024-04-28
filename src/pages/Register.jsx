import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">let's Chat</span>
        <span className="title">Register</span>
        <form >
          <input type="text" placeholder='display name' />
          <input type="email"  placeholder='email'/>
          <input type="password" placeholder='password'/>
          <input style={{display:"none"}} type="file" id='file'/>
          <label htmlFor="file">
            <img src="https://imgs.search.brave.com/ACQQzrwfcG24cbzPj526gudfwVeNz6WXvzr5fK9d0F4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni80NzM5LzQ3Mzkw/NjkucG5n" alt="add file" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Do you have an account? <a href="">Login</a></p>
      </div>
    </div>
  )
}

export default Register
