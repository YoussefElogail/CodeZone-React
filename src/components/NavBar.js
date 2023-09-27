import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const productsCount  = useSelector(state => state.cart.length)
  
  
  return (
    <header>
      <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className='navbar-brand' >Cart App</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className='nav-link'>Products</Link>
            <Link to="/cart" className='nav-link'>{productsCount > 0 ? `Cart - ${productsCount}`:"Cart"}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default NavBar;
