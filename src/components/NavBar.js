import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function NavBar() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out');
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand>Lingwoah</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/plans">Plans</Nav.Link>
        <Nav.Link href="/calender">Calendar</Nav.Link>
        <Nav.Link href="/analytics">Analytics</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            User Email: {user && user.email}
            <Button variant="text" color="secondary" onClick={handleLogout} >
                Logout
              </Button>
          </Navbar.Text>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default NavBar
