import { React, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image10 from '../home/bus.jpeg';
import { Link } from 'react-router-dom';
import '../home/homeGuest.css';
import axios from 'axios';
import Spinner from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import AppointmentCard from '../../components/Appointmentcard';
import { Alert } from 'bootstrap';
const HomeGuest = () => {
    const [data, setData] = useState({
        loading:true,
        results:[],
        err: null,
        reload:0,    });
    const [search, setSearch] = useState("")
    useEffect(() => {
        setData({...data,loading:true});

        axios.get(`http://localhost:4000/appointments/list`,{
            params:{
            search:search,
            },
        })
            .then((resp) => {
                console.log(resp);
                setData({...data,results:resp.data,loading:false,err:null})

            })
            .catch((err )=> 
            {
                setData({
                    ...data,loading:false,
                    err:"somthing went wrong",
                })
            });
    }, [data.reload])
    const searchData=(e)=>{
        e.preventDefault();
        setData({...data,reload:data.reload+1});
    };

    
    
    return (

        <div className="home-container p-5">
      {/* Loader  */}
      {data.loading === true && (
        <div className="text-center">
          
        </div>
      )}

      
      {data.loading === false && data.err == null && (
        <>
          {/* Filter  */}
          <Form onSubmit={searchData}>
            <Form.Group className="mb-3 d-flex">
              <Form.Control
                type="text"
                placeholder="Search Appointments"
                className="rounded-0"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-dark rounded-0">Search</button>
            </Form.Group>
          </Form>

          {/* LIST Appointment  */}
          <div className="row ">
            {data.results.map((data) => (
              <div className="col-3 card-movie-container" key={data.id}>
                <AppointmentCard
                  from={data.from}
                  to={data.to}
                  date={data.date}
                  type={data.type}
                  id={data.id}
                />
              </div>
            ))}
          </div>
        </>
      )}

      {/* ERRORS HANDLING  */}
      {data.loading === false && data.err != null && (
        <Alert variant="danger" className="p-2">
          {data.err}
        </Alert>
      )}

      {data.loading === false &&
        data.err == null &&
        data.results.length === 0 && (
          <Alert variant="info" className="p-2">
            No Appointments, please try again later !
          </Alert>
        )}
    </div>
  );
};

export default HomeGuest;