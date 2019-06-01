import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faHatWizard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <NavDropdown title="My Account" id="basic-nav-dropdown">
      <NavDropdown.Item href="#past-orders">My Orders</NavDropdown.Item>
      <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#sign-out"><FontAwesomeIcon icon={faSignOutAlt} /> Sign Out</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#basket">My Basket <FontAwesomeIcon icon={faShoppingBasket} /></Nav.Link>
  </React.Fragment>
)

// Put these in the Account component
// <Nav.Link href="#change-password">Change Password</Nav.Link>
// <Nav.Link href="#sign-out">Sign Out</Nav.Link>
// <Nav.Link href="#past-orders">My Orders</Nav.Link>

const unauthenticatedOptions = (
  <React.Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </React.Fragment>
)

// add alwaysOptions back in if there is anything like a home link that should be shown in all cases.
// const alwaysOptions = (
//   <React.Fragment>
//     <Nav.Link href="#">Home</Nav.Link>
//   </React.Fragment>
// )

const Header = ({ user }) => (
  <header className="main-header">
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
      <Navbar.Brand className="nav-brand" href="#"><FontAwesomeIcon icon={faHatWizard} /> That Hat</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          { user && <span className="welcome-message">Hi there, {user.email.split('@')[0]}!</span>}
          { user ? authenticatedOptions : unauthenticatedOptions }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header
