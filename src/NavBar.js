import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import team from './Images/team.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
     <Navbar  variant="dark" style={{width:'100%', backgroundColor: '#1f1f2e'}}>
        <Container>
          <Navbar.Brand><img src={team} alt='team' style={{height:'45px'}}></img></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
            <Link to="/" className='nav-link' style={{color:"white"}}><b>Team Allocation</b> </Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="/AddTeam" className='nav-link' style={{color:"white"}}><b>Add new Member</b></Link>
            </Nav.Link>
            <Nav.Link>
            <Link className='nav-link' to="/TeamAllocation" style={{color:"white"}}><b>Team Details</b></Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;
