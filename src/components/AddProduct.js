import React,{useState} from 'react'
import './Addproduct.css'
import {AddProduct} from '../api/auth'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useState } from 'react'


const AddProudct = () => {
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [category,setCategory]=useState('')
    const navigate=useNavigate()

  // userId=localStorage.getItem()

    const Add=async function(){
        console.log(name,price,category)
        const payload={
            name,
            price,
            category
            // userId
          }
          try{
            const result =await AddProduct('/add-product',payload)
            toast.success("Product Added Successfully", {
              position:"top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            });
            // alert(data.message)
            // localStorage.setItem('token',data.token );
            // localStorage.setItem('user',JSON.stringify(payload) );
            
          navigate('/')
          }catch(e){
            console.error(e)
          }
    
        }
       
    
    return (
        <div className="AddProudct">
            <h1>Add Product</h1>
            <input type="text" className="inputbox" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Product name"/>
            <input type="text" className="inputbox" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter Product Price"/>
            <input type="text" className="inputbox" value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder="Enter Product category"/>
            <button className="appbutton" onClick={Add}>Add This Product</button>
        </div>
    )
}
export default AddProudct