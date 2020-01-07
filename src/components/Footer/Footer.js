import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Navbar, Button, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faStore, faLink } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <Fragment>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faStore} /> {""}
          Marketplace
        </Navbar.Brand>
        {/* <Nav>
        <Button variant="warning" href="https://github.com/MelissaDTH">
          <FontAwesomeIcon icon={faCode} /> {""}
          My GitHub
        </Button>
        <Button variant="warning" href="https://github.com/MelissaDTH">
          <FontAwesomeIcon icon={faLink} /> {""}
         My LinkedIn
        </Button>
        </Nav> */}
        <Nav>
            <Nav.Link href="/login">Log in</Nav.Link>
            <Nav.Link eventKey={2} href="/signup">
              Sign up
            </Nav.Link>
            <Button variant="warning" href="/cart">
              Cart
            </Button>
          </Nav>
      </Navbar>
    </Fragment>
  );
}

export default Footer;
