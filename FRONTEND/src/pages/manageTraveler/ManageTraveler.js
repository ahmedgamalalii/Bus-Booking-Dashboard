import React, { useState } from 'react'
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const ManageTraveler=() => {
    const[travelers,setTraveler]=useState([]);
    useEffect(()=>{getAllTraveler( )},[]);

    const getAllTraveler=()=>{
        fetch(`http://localhost:4000/users`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setTraveler(data);
        });
    }
    const deleteTraveler=(traveler)=>{
        Swal.fire({
            title:`Are You Sure To Delete ${traveler.name}?`,
            showCancelButton:true,
        }) .then((data)=> {
            if(data.isConfirmed){
                fetch(`http://localhost:4000/users/${traveler.id}`,{
                    method: "DELETE",
                })
                .then((res)=> res.json())
                .then(()=>{
                    getAllTraveler();
                });
            }
        });

    };
    return (
        <div className='table'>
            <div>
                <h1>manage traveler</h1>
            </div>
            
            <Table striped bordered hover variant="dark" className='mt-5' >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th >Traveler Name</th>
                        <th >Email</th>
                        <th colSpan={2} >phone number</th>

                    </tr>
                </thead>
                <tbody>
                    {Object.values(travelers).map((traveler)=>{
                        return(
                            <tr key={traveler.id}>
                        <td>{traveler.id}</td>
                        <td>{traveler.name}</td>
                        <td>{traveler.email}</td>
                        <td>{traveler.phone}</td>
                        
                        <td>
                            
                            < Link to={`/manage/${traveler.id}`} className='btn btn-info btn-sm'> Edit</Link>
                            <button className='btn btn-danger btn-sm' onClick={()=>deleteTraveler(traveler)}>Delete</button>
                        </td>

                    </tr>
                        )

                    })}
                    

                </tbody>
            </Table>

        </div>

    );
}

export default ManageTraveler;