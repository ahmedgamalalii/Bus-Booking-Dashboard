import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {

  const Logout = () => {

  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to={"/home"}>
              BUS
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
          
                <Link className="nav-link" to={"/manage"}>
                  ManageTraveler
                </Link>
                <Link className="nav-link" to={"/history"}>
                  travelerHistory
                </Link>
                <Link className="nav-link" to={"/approval"}>
                  approval
                </Link>
                <Link className="nav-link" to={"/login"}>
                  login
                </Link>
                <Link className="nav-link" to={"/register"}>
                  register
                </Link>
              
            

            

           
                <Link className="nav-link" to={"/manage-movies"}>
                  Manage Movies
                </Link>

          </Nav>

          <Nav className="ms-auto">
           
            <Nav.Link onClick={Logout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;