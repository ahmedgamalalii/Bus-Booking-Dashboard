/*import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
const UpdateTraveler = () => {
    const[travelers,setTraveler]=useState([]);
    useEffect(()=>{getAllTraveler( )},[]);
    let {id}= useParams();
    let navigate=useNavigate();
    const formSubmit=(e)=>{
        e.preventDefauconst UpdateTraveler=(traveler)=>{
            fetch(`http://localhost:4000/users/${traveler.id}`),{
                method: "PUT",
            })
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                setTraveler(data);
            });lt();

       /* axios.put(`http://localhost:4000/users/${id}`,{
            name,
            email,
            phone,
            password,
           headers: {
                token: auth.token,
            },
        }).then((data)=>{console.log(data)
        navigate('/manage')
        })
    }
    <>
    Update Traveler
    </>
    return (
       
        
         <Form  onSubmit={formSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>Name</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter From Destination" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>Email</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter To Destination" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>Phone</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter The Date" onChange={(e) => setPhone(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>Password</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter The Date" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
        <Button variant="primary" type="UpdateTraveler">
        Update Traveler
      </Button>
            </Form>
    );
};

export default UpdateTraveler;*/