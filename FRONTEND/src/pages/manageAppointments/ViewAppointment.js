import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewAppointment = () => {
    const[appointments,setAppointment]=useState([]);
    let {ViewAppointment}= useParams();
    useEffect(()=>{

        fetch(`http://localhost:4000/appointments/${ViewAppointment}`)
        .then((res)=>res.json())
        .then((appointments)=>{
            setAppointment(appointments);
        })
    },[])   
    return (
        <>
         
        
        </>
    )
}

export default ViewAppointment