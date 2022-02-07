import React from 'react';
import axios from 'axios';
import {v4} from "uuid";
import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link} from 'react-router-dom';

const pvKey = '9c2550ed-bad6-4af5-b216-f6748930bfc8';

const handleLogout = (e) => {
  e.preventDefault();
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  window.location.reload();
  console.log('clicked');
  //history.push('/your-route');
};

const onDelete = (e) => {
  e.preventDefault();
  axios
      .patch(  
        'https://api.chatengine.io/projects/people/',  
        { username: localStorage.getItem('username'), secret: v4() },  
        { headers: { 'Private-Key': pvKey } },  
      );
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  window.location.reload();
  console.log('deleted');
  //history.push('/your-route');
};


export default function Nov (){

  if (localStorage.getItem('username')) return(

  <Navbar bg="light" expand="lg">
  <Container >
    <Navbar.Brand href="#home">MeeT</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

        <Nav.Link to="/"><Link to="/chat">Chat</Link></Nav.Link>
        <Nav.Link to="/call"><Link to="/call">Initiate Call</Link></Nav.Link>
        
        <Nav.Link to="/" onClick={onDelete} ><Link>Delete Account</Link></Nav.Link>
        <Nav.Link to="/" onClick={handleLogout} ><Link>Logout</Link></Nav.Link>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
  else return(  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">MeeT</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    </Navbar.Collapse>
  </Container>
</Navbar>
    )




}