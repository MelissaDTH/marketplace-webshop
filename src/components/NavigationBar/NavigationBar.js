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
              <NavDropdown.Item href="/category/1/products/">Home</NavDropdown.Item>
              <NavDropdown.Item href="/category/2/products/">Electronics</NavDropdown.Item>
              <NavDropdown.Item href="/category/3/products/">Plants and gardening</NavDropdown.Item>
              <NavDropdown.Item href="/category/4/products/">Fashion</NavDropdown.Item>
              <NavDropdown.Item href="/category/5/products/">Sporting Goods</NavDropdown.Item>
              <NavDropdown.Item href="/category/6/products/">
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
