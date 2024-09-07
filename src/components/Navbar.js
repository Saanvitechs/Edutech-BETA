import React, { useContext, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../hooks/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from './images/trex_logo.png';

const CustomNavbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const username = localStorage.getItem('name');
  const [expanded, setExpanded] = useState(false); // State to handle navbar expansion

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleToggle = () => setExpanded(!expanded); // Toggle expand state

  const handleNavClick = () => setExpanded(false); // Close navbar on item click

  const handleDropdownClick = (e) => {
    e.stopPropagation(); // Prevent navbar from collapsing when dropdown is clicked
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="custom-navbar"
      expanded={expanded} // Control expanded state
      onToggle={handleToggle} // Handle toggle action
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-logo">
          <img
            src={logo}
            width="40"
            height="40"
            style={{ borderRadius: '10%' }}
            className="d-inline-block align-top"
            alt="Logo"
          />
          TREx
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav onClick={handleNavClick}>
            <Nav.Link as={Link} to="/resource">Resource</Nav.Link>
            <Nav.Link as={Link} to="/assignments">Check My Assignment</Nav.Link>
            <Nav.Link as={Link} to="/membership-plan">Plans</Nav.Link>

            {isAuthenticated ? (
              <NavDropdown
                title={<FontAwesomeIcon icon={faUserCircle} size="lg" />}
                id="profile-dropdown"
                align="end" // Replace alignRight with align="end"
                onClick={handleDropdownClick} // Handle dropdown click
              >
                <NavDropdown.Item as={Link} to="">{username}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/profile">View Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register" className="signup-link">Sign up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;