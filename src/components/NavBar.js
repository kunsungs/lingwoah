import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand>Lingwoah</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/plans">Plans</Nav.Link>
        <Nav.Link href="#pricing">Calendar</Nav.Link>
        <Nav.Link href="#pricing">Analytics</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default NavBar