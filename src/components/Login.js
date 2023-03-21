import React, { useEffect } from 'react'
import './login.css'
import { login } from '../api/auth'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import env from "react-dotenv";


function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      navigate('/')
    }
  })
  const handleLogin = async () => {
    console.log(process.env.REACT_APP_MY_KEY)
    console.warn(email, password)
    const payload = {
      email,
      password
    }
    try {
      const result = await login('/login', payload)
      console.log(result)

      if (result.data.name) {
        localStorage.setItem("user", JSON.stringify
          (result))
        console.log(result.data.name)
        toast.success("login successfull", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        navigate('/')
      } else {
        toast.error("Plese enter Valid credentials", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }
    } catch (e) {
      console.error(e)
    }



  }
  return (
    <div className='login'>
    <h1>LOGIN PAGE</h1>
      <div className='content'>
      <div className='input-feilds'>
      <input type='text' className='inputbox' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} value={email}></input>
      <input type='text' className='inputbox' placeholder='Enter the Password' onChange={(e) => setPassword(e.target.value)} value={password}></input>
      <button onClick={handleLogin} type="button" className="appbutton" >Login</button>
      </div>
      </div>

    </div>
  )
}

export default Login
