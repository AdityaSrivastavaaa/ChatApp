import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">let's Chat</span>
        <span className="title">Sign in</span>
        <form >
          <input type="email"  placeholder='email'/>
          <input type="password" placeholder='password'/>
          <button>Sign in</button>
        </form>
        <p>Do you have an account? <a href="">Register</a></p>
      </div>
    </div>
  )
}

export default Login