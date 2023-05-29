import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

 const HeaderGuest = () => {
     return (
         
                 <>

                     <Navbar bg="dark" variant="dark">
                         <Container>
                      
                             <Navbar.Brand href="/"><b>BUS NA</b></Navbar.Brand>
                             <Nav className="me-auto">
                                <Nav.Link href="/login"><b>Login</b></Nav.Link>
                                <Nav.Link href="/register"><b>Register</b></Nav.Link>
                              
                             </Nav>
                             <Nav className="ms-auto">
                                <Nav.Link href=""><b>Logout</b></Nav.Link>
                             </Nav>

                         </Container>
                     </Navbar>
                    
                 </>


     )
}

export default HeaderGuest




