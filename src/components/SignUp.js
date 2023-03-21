import React,{useState,useEffect} from 'react'
import './SignUp.css'
import {Register} from '../api/auth'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Route, Routes,Redirect, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function SignUp() {
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const navigate=useNavigate()


  const registerUser= async function(){
    // const {name,password,email}=user
    // console.log(name,email,password)
    const payload={
      name,
      email,
      password
    }
    // console.log(payload)
    try{
      const {data} =  await Register('/register',payload)
      toast.success(data.message, {
        position:"top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      // alert(data.message)
      localStorage.setItem('token',data.token );
      localStorage.setItem('user',JSON.stringify(payload) );
      
    navigate('/')
    }catch(e){
      console.error(e)
    }

 
    //without axios 
    
    // const result=await fetch('http://localhost:3000/register',{method:'post',body:JSON.stringify({name,email,password}),headers:{'Content-Type': 'application/json'}})
    // result=await result.json()
    // console.log(result)
  }
  const token=localStorage.getItem('token')

  const notify = () => {
    
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER
    });
  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  })
  
  return (
    <div className="main">
      <div className="content">
        
        <h1>Register</h1>
        <div className="register">
        <div className="sign-up-container">
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="inputbox" placeholder="Enter Name" />
          <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}className="inputbox" placeholder="Enter Email" />
          <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} className="inputbox" placeholder="Enter Password" />
          <Button onClick={registerUser} variant="contained">Sign Up</Button>
          {/* <button onClick={registerUser} type="button" className="appbutton">Sign Up</button> */}
          </div>
        </div>
      </div>
         
    </div>
  )
}

export default SignUp
