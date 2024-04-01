import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
function Update() {

  const { id } = useParams();
  const [data,setData] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:3000/users/'+id)
    .then(res => setData(res.data))
    .catch(err => console.log)
  }, [])
console.log(data);
  function handleSubmit (event){
    event.preventDefault()
    axios.put('http://localhost:3000/users/'+id,data)
    .then(res => {
      alert("data update successfully ! ");
      navigate('/')
    })

  }

  return (
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-light p-5'>
          <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="name">ID :</label>
                  <input type="text" name='Id' disabled className='form-control' value ={data.id}/>
              </div>
              <div>
                  <label htmlFor="name">Name :</label>
                  <input type="text" name='name' className='form-control' value ={data.name}
                  onChange={e=>setData({...data ,name : e.target.value})}/>
              </div>
              <div>
                  <label htmlFor="email">Email :</label>
                  <input type="text" name='email' className='form-control'value ={data.email} 
                   onChange={e=>setData({...data ,email : e.target.value})}/>
              </div>
              <div>
                  <label htmlFor="phone">Phone :</label>
                  <input type="number" name='phone' className='form-control' value ={data.phone}
                   onChange={e=>setData({...data ,phone : e.target.value})} />
              </div>
              <div>
                  <label htmlFor="image">Image :</label>
                  <input type="text" name='image' className='form-control'value ={data.image} 
                   onChange={e=>setData({...data ,image : e.target.value})}/>
              </div><br/>
              <button className='btn btn-info' type='submit'>Update</button>
          </form>
      </div>
  </div>
  )
}

export default Update;