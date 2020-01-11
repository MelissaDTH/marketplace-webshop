import React, { Fragment } from "react";
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faStore } from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faStore} /> {""}
          Marketplace
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/category">All categories</Nav.Link>

            <NavDropdown
              title="Product categories"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/category/1">Home</NavDropdown.Item>
              <NavDropdown.Item href="/category/2">Plants and gardening</NavDropdown.Item>
              <NavDropdown.Item href="/category/3">Electronics</NavDropdown.Item>
              <NavDropdown.Item href="/category/4">Sporting Goods</NavDropdown.Item>
              <NavDropdown.Item href="/category/5">Fashion</NavDropdown.Item>
              <NavDropdown.Item href="/category/6">
                Movies, Music and Games
              </NavDropdown.Item>
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
    </Fragment>
  );
}

export default NavigationBar;
