import React from 'react'
import {Navbar,Form,Nav,NavDropdown,FormControl}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ReactStars from "react-rating-stars-component";

const Filter = ({ratingSearch,setRatingSearch,titleSearch,setTitleSearch}) => {
    return (
        <div>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Movie-App</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" value={titleSearch} onChange={e=>setTitleSearch(e.target.value)}/>
      <ReactStars value={ratingSearch} onChange={setRatingSearch} />
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Filter
