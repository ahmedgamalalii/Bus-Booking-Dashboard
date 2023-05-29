import axios, { Axios } from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import { getAuthUser } from '../../helper/storage';
registerLocale('es', es)
const AddAppointment = () => {
    const [from,setFrom]=useState('');
    const [to,setTo]=useState('');
    const [date,setDate]=useState('');
    const [ticket_price,setPrice]=useState('');
    const [duration,setDuration]=useState('');
    const [time,setTime]=useState('');
    const[type,setType]=useState('');
    const[max_travelers,setMax]=useState('');
    const auth = getAuthUser();
    let navigate=useNavigate()
    const formSubmit=(e)=>{
        e.preventDefault();

        axios.post("http://localhost:4000/appointments/",{
            from,
            to,
            date,
            time,
            duration,
            ticket_price,
            type,
            max_travelers,
           /* headers: {
                token: auth.token,
            },*/
        }).then((data)=>{console.log(data)
        navigate('/appointment')
        })

       
    }
    <>
    Add appointment
    </>
    return (
        <Form  onSubmit={formSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>From</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter From Destination" onChange={(e) => setFrom(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>To</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter To Destination" onChange={(e) => setTo(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>Date</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter The Date" onChange={(e) => setDate(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>Time</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter The Time" onChange={(e) => setTime(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>Duration</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter The Duration" onChange={(e) => setDuration(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>Ticket Type</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter The type Of The Ticket" onChange={(e) => setType(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>Ticket Price</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter The Price Of The Ticket" onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>Max Travelers</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter The Price Of The Ticket" onChange={(e) => setMax(e.target.value)} />
            </Form.Group>
      
      <Button variant="primary" type="AddAppointment">
        Add Appointment & Destination
      </Button>
    </Form>
       
        
    );
};



export default AddAppointment;