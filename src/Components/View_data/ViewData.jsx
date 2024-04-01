import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function ViewData() {
    const[columns,setColumns] = useState([]);
    const[records,setRecords]= useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res =>{
            setColumns(Object.keys(res.data[0]))
            // console.log(res.data);
            setRecords(res.data)
        })
    })


function handleDelete(id){

    const conf = window.confirm("Do you want to delete ?");
    if(conf){
        axios.delete('http://localhost:3000/users/'+id).then(res=> {
            alert('record has deleted');
            navigate('/')
        }).catch(err => console.log(err))
    }


}
  return (
    <>
    <div className='text-center'><Link to='/create' className='btn btn-primary  me-5 mt-3'>Create New </Link></div>
    <div className='container mt-1 d-flex justify-content-center align-items-center'>
        
        <Table className='d-flex justify-content-center align-items-center' >
            <tr>
                <thead className='table'>
                    <th>
                        ID
                    </th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Email</th>
                    <th>Phone No.</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        records.map((d,i)=>(
                            <tr key={i}>
                                <td className='ms-5'>{d.id}</td>
                                <td>{d.name}</td>
                                <td className='me-5'><img src={d.image} className="img-thumbnail" alt="dp" width={70} height={70}/>
                                </td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>
                                    <Link to={`/update/${d.id}`} className='btn btn-success btn-sm'>Update</Link>
                                    <button onClick={e => handleDelete(d.id)} className='btn btn-danger btn-sm ms-1 '>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </tr>
        </Table>
    </div>
    </>
  )
}

export default ViewData;