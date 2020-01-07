import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

// Containers
import HomeContainer from "./components/Home";


function App() {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" >Marketplace</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown
              title="Product categories"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/electronics">
                Electronics
              </NavDropdown.Item>
              <NavDropdown.Item href="/home&garden">Kitchen</NavDropdown.Item>
              <NavDropdown.Item href="/fashion">Clothing</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Log in</Nav.Link>
            <Nav.Link eventKey={2} href="/signup">
              Sign up
            </Nav.Link>
            <Button variant="warning" href="/cart">
              <FontAwesomeIcon icon={faCartPlus} /> {""}
              Cart
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Route exact path="/" component={HomeContainer} />
    </Fragment>
  );
}

export default App;
