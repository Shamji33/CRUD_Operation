import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function Add() {
    const navigate = useNavigate();
    const [inputData,setInputData] = useState({
        name:'',
        email:'',
        phone:'',
        image:'',
    })
    
    function handelSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3000/users',inputData)
        .then(res=>{
            alert("Data Added Successfully!");
            navigate('/');
        }).catch(err => console.log(err));
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-5'>
            <form onSubmit={handelSubmit}>
                <div>
                    <label htmlFor="name">Name :</label>
                    <input type="text" name='name' className='form-control' onChange={e=>setInputData({...inputData,name:e.target.value})} />
                </div>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input type="text" name='email' className='form-control' onChange={e=>setInputData({...inputData,email:e.target.value})} />
                </div>
                <div>
                    <label htmlFor="phone">Phone :</label>
                    <input type="number" name='phone' className='form-control' onChange={e=>setInputData({...inputData,phone:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="image">Image :</label>
                    <input type="text" name='image' className='form-control' onChange={e=>setInputData({...inputData,image:e.target.value})} />
                </div><br/>
                <button className='btn btn-info' > Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Add;
