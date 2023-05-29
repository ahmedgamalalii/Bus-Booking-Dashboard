import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import { getAuthUser } from '../../helper/storage';
import { useParams } from "react-router-dom";
import { Alert } from 'bootstrap';


const UpdateAppointment = () => {
  let { id } = useParams();
  const auth = getAuthUser();
  const [update, setUpdate] = useState({
      from: "",
      to: "",
      date: "",
      ticket_price: "",
      time: "",
      duration: "",
      type: "",
      max_travelers: "",
    err: "",
    loading: false,
    reload: false,
    success: null,
  });

  const updateAppointment = (e) => {
    e.preventDefault();

    setUpdate({ ...update, loading: true });

    const formData = new FormData();
        formData.append("from", update.from);
        formData.append("to", update.to);
        formData.append("date", update.date);
        formData.append("ticket_price", update.ticket_price);
        formData.append("duration", update.duration);
        formData.append("time", update.time);
        formData.append("type", update.type);
        formData.append("max_travelers", update.max_travelers);
    axios
      .put("http://localhost:4000/appointments/update/" + id, formData, {
        headers: {
          
          "Content-Type": "multipart/form-data",
        },
      })
      .then((resp) => {
        setUpdate({
          ...update,
          loading: false,
          success: "Appointment updated successfully !",
          reload: update.reload + 1,
        });
      })
      .catch((err) => {
        console.log(err);
        setUpdate({
          ...update,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
          
        });
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/appointments/list/" + id)
      .then((resp) => {
        setUpdate({
          ...update,
            from: resp.data[0].from,
            to: resp.data[0].to,
            date: resp.data[0].date,
            ticket_price: resp.data[0].ticket_price,
            time: resp.data[0].time,
            duration: resp.data[0].duration,
            type: resp.data[0].type,
            max_travelers: resp.data[0].max_travelers,
        });
      })
      .catch((err) => {
        setUpdate({
          ...update,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
        });
      });
  }, [update.reload]);


    <>
    Update appointment
    </>
    return (
      <>
        <Form  onSubmit={updateAppointment}>
            {update.success && (
        <Alert variant="success" className="p-2">
          {update.success}
        </Alert>
      )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>From</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter From Destination" value={update.from}
            onChange={(e) => setUpdate({ ...update, from: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>To</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter To Destination" value={update.to}
            onChange={(e) => setUpdate({ ...update, to: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>Date</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter The Date" value={update.date}
            onChange={(e) => setUpdate({ ...update, date: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>Time</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter The Time" value={update.time}
            onChange={(e) => setUpdate({ ...update, time: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>Duration</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter The Duration" value={update.duration}
            onChange={(e) => setUpdate({ ...update, duration: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>Ticket Type</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter The type Of The Ticket"value={update.type}
            onChange={(e) => setUpdate({ ...update, type: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>Ticket Price</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter The Price Of The Ticket" value={update.ticket_price}
            onChange={(e) => setUpdate({ ...update, ticket_price: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='ProductName' className='form_label'><b><h4>Max Travelers</h4></b></Form.Label>
                <Form.Control type="text" placeholder="Enter The Price Of The Ticket" value={update.max_travelers}
            onChange={(e) => setUpdate({ ...update, max_travelers: e.target.value })} />
            </Form.Group>
      
      <Button variant="primary" type="UpdateAppointment">
        Update
      </Button>
    </Form>
       </>
        
    );
    

};




export default UpdateAppointment;