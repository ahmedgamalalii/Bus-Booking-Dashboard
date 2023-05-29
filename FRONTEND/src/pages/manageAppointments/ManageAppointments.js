import React, { useState } from 'react'
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const ManageAppointments=() => {
    const[appointment,setAppointment]=useState([]);
    useEffect(()=>{getAllAppointments( )},[]);

    const getAllAppointments=()=>{
        fetch(`http://localhost:4000/appointments/list`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setAppointment(data);
        });
    }
    const deleteAppointment=(appointments)=>{
        Swal.fire({
            title:`Are You Sure To Delete ${appointments.id}?`,
            showCancelButton:true,
        }) .then((data)=> {
            if(data.isConfirmed){
                fetch(`http://localhost:4000/appointments/delete/${appointments.id}`,{
                    method: "DELETE",
                })
                .then((res)=> res.json())
                .then(()=>{
                    getAllAppointments();
                });
            }
        });

    
    };
    return (
        <div className='table'>
            <div>
                <h1>manage appointments</h1>
            </div>
            <div>
                < Link to={'/appointment/add'} className='btn btn-success'> Add new appointment</Link>
            </div>
            <Table striped bordered hover variant="dark" className='mt-5' >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th >from</th>
                        <th >to</th>
                        <th >date</th>
                        <th >duration</th>
                        <th >time</th>
                        <th >ticket price</th>
                        <th >max travelers</th>
                        <th >type</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {appointment.map((appointments)=>{
                        return(
                            <tr key={appointments.id}>
                        <td>{appointments.id}</td>
                        <td>{appointments.from}</td>
                        <td>{appointments.to}</td>
                        <td>{appointments.date}</td>
                        <td>{appointments.duration}</td>
                        <td>{appointments.time}</td>
                        <td>{appointments.ticket_price}</td>
                        <td>{appointments.max_travelers}</td>
                        <td>{appointments.type}</td>

                        <td>
                        < Link to={`/appointment/update/${appointments.id}`} className='btn btn-info btn-sm'> update</Link>
                           
                            <button className='btn btn-danger btn-sm' onClick={()=>deleteAppointment(appointments)}>Delete</button>
                        </td>

                    </tr>
                        )

                    })}
                    

                </tbody>
            </Table>

        </div>

    );
}

export default ManageAppointments;