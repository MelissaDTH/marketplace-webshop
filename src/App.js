import React, { Fragment } from "react";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/home">Marketplace</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown
              title="Product categories"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/products/1">
                Electronics
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/2">Kitchen</NavDropdown.Item>
              <NavDropdown.Item href="/products/3">Clothing</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Log in</Nav.Link>
            <Nav.Link eventKey={2} href="/signup">
              Sign up
            </Nav.Link>
            <Button href="/cart">Shopping Cart</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

export default App;
