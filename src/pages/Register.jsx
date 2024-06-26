import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth , storage} from "../firebase";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

const Register = () => {

  const [err , setErr] =  useState(false);

  const handleSubmit = async (e) =>{
     e.preventDefault()
     const displayName = e.target[0].value;
     const email = e.target[1].value;
     const password = e.target[2].value;
     const file = e.target[3].files[0];

  
try{
  const res = await createUserWithEmailAndPassword(auth, email, password)
  

const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:

uploadTask.on(

  (error) => {
    setErr(true);
  }, 
  () => {
    
    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL:downloadURL,
      })

await setDoc(doc(db,"users" , res.user.uid),{
  uid:res.user.id,
  displayName,
  email,
  photoURL:downloadURL,
})
    });
  }
);

}catch(err){
  setErr(true) 
}

  
  }
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">let's Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit} >
          <input type="text" placeholder='display name' />
          <input type="email"  placeholder='email'/>
          <input type="password" placeholder='password'/>
          <input style={{display:"none"}} type="file" id='file'/>
          <label htmlFor="file">
            <img src="https://imgs.search.brave.com/ACQQzrwfcG24cbzPj526gudfwVeNz6WXvzr5fK9d0F4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni80NzM5LzQ3Mzkw/NjkucG5n" alt="add file" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {err && <>Something went wrong.</>}
        </form>
        <p>Do you have an account? <a href="">Login</a></p>
      </div>
    </div>
  )
}

export default Register
