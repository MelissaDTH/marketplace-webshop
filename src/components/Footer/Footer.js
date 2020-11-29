import React, { Fragment } from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <Fragment>
      <footer className="footer-container">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="footer"
        >
          <Navbar.Brand href="/">
            <img
              src="/apple-icon.svg"
              height="30px"
              alt="webshop Marketplace icon"
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Navbar.Text>
              {new Date().getFullYear()} —<strong> Melissa 't Hart </strong>
            </Navbar.Text>
          </Nav>
          <Nav>
            <Button variant="warning" href="https://github.com/MelissaDTH">
              <FontAwesomeIcon icon={faCode} /> {""}
              My GitHub
            </Button>{" "}
            {"|"}
            <Button
              variant="warning"
              href="https://www.linkedin.com/in/melissathart/"
            >
              <FontAwesomeIcon icon={faLink} /> {""}
              My LinkedIn
            </Button>
          </Nav>
        </Navbar>
      </footer>
    </Fragment>
  );
}

export default Footer;
