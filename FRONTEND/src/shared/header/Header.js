import React, { useState } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getAuthUser, removeAuthUser } from '../../helper/storage';

const Header = () => {
  const auth = getAuthUser();
  const navigate = useNavigate();

  const Logout = () => {
    removeAuthUser();
    navigate('/login');
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">
            <b>BUS</b>
          </Navbar.Brand>
          <Nav className="me-auto">
          {auth && auth.role === 1 && (
            <>
            <Nav.Link href="/appointment">
              <b>Manage appointments and Destination</b>
            </Nav.Link>
            <Nav.Link href="/manage">
              <b>Manage Traveler</b>
            </Nav.Link>
            <Nav.Link href="/history">
              <b>Traveler History</b>
            </Nav.Link>
            <Nav.Link href="/approval">
              <b>Approval</b>
            </Nav.Link>
            </>
          )}
          {auth && auth.role === 0 && (
            <>
            <Nav.Link href="/history">
              <b>Traveler History</b>
            </Nav.Link>
            </>
          )}
            {/* unAuthenticated Route  */}
            {!auth? (
              <>  
                <Nav.Link href="/login">
                  <b>Login</b>
                </Nav.Link>
                <Nav.Link href="/register">
                  <b>Register</b>
                </Nav.Link>
                
              </>
            ):null}
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link onClick={Logout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* other routes */}
    </BrowserRouter>
  );
};

export default App;