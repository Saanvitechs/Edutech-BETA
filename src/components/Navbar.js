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

  // State to manage each dropdown visibility separately
  // const [isTestPrepDropdownOpen, setIsTestPrepDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Handlers for profile dropdown
  const handleProfileMouseEnter = () => setIsProfileDropdownOpen(true);
  const handleProfileMouseLeave = () => setIsProfileDropdownOpen(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-logo">
        <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
          TREx
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/assignments">Check My Assignment</Nav.Link>

            {isAuthenticated ? (
              <NavDropdown
                title={<FontAwesomeIcon icon={faUserCircle} size="lg" />}
                id="profile-dropdown"
                alignRight
                show={isProfileDropdownOpen}
                onMouseEnter={handleProfileMouseEnter}
                onMouseLeave={handleProfileMouseLeave}
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
