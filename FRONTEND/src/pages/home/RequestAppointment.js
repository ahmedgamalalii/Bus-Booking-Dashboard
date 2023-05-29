import { React,useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image10 from './bus.jpeg' ;
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../home/homeGuest.css';
import { useParams } from "react-router-dom";
const RequestAppointment=()=> {
    
    const [products,setProduct] = useState([]);
    useEffect(() => { getAllProducts() }, []);
    let { id } = useParams();
    const getAllProducts=()=>{
        fetch(`http://localhost:4000/appointments/list/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setProduct(data);
        });
    }

    const Done=(product)=>{
        Swal.fire({
            title:`Done (;`,
        }) }
    return (
        <div className='home'>
           
            <div className='card'>
            {products.map((product) => {
                return (
                    <Card key={product.id} style={{ width: '18rem' }} >
                        <><Card.Img src={image10} variant="top" className='card_image' />
                        <Card.Body>
                            <Card.Title>
                            <br/>
                                <h4>From:<b>{product.from}</b></h4>
                                <h4>To:<b>{product.to}</b></h4>
                                
                                <h5>Date:<b>{product.date}</b></h5>
                                
                                <h5>Time: <b>{product.time}</b></h5>
                                
                                <h5>Type: <b>{product.type}</b></h5>
                            <br/>
                                
                               </Card.Title>
                                <div>
                                    <Button onClick={()=>Done(product)} variant="outline-success" >< Link  variant="outline-success" to={'/homeGuest/request'} className=" btn btn- btn-sm"> Book Now</Link></Button>{' '}
                                </div>
                        </Card.Body></>

                    </Card>
                )
            })}
            </div>
            
        </div>

    );
}

export default RequestAppointment;