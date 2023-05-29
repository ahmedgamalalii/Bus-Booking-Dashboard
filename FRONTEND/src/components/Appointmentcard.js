import React from "react";
import Card from "react-bootstrap/Card";
import "../style/AppointmentCard.css";
import { Link } from "react-router-dom";
import image10 from '../pages/home/bus.jpeg' ;
import axios from "axios";
import { getAuthUser } from "../helper/storage";
const AppointmentCard = (props) => {
    const submitRequist = (e, route_id) => {
        e.preventDefault();
        const Id= getAuthUser();
            axios
              .post("http://localhost:4000/requests", {
                route_id:route_id,
                user_id:Id.id,
                withCredentials: true,
              })
              .then((response) => {
                if (response) {
                  console.log(response);
                  alert(response.data.msg);
                }
              })
              .catch((err) => alert(err.response.data.msg));
         
        
      };
    return (
    <div>
      <Card>
        <Card.Img src={image10} className="card-image" variant="top" />
        <Card.Body>
          <Card.Title> {props.from} </Card.Title>
          <Card.Title>{props.to}</Card.Title>
          <Card.Text>{props.date}</Card.Text>
          <Card.Text>{props.type}</Card.Text>
          
          <button
            type="submit"
            onClick={(event) => submitRequist(event, props.id)}
            
            className="viewButton"
          >
            Request
            {/* <Link> Request </Link> */}
          </button>
          
            
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default AppointmentCard;