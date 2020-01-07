import React, { Fragment } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";
import "./Carousel.css"

function Carous() {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item>
          <Link to="/electronics">
          <img
            className="d-block w-100 h-30"
            src="https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Electronics slide"
          />
          </Link>
          <Carousel.Caption>
            <h3>Electronics</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Link to="/home&garden">
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Home and garden slide"
          />
          </Link>
          <Carousel.Caption>
            <h3>Home & Garden</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Link to="/fashion">
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Fashion slide"
          />
          </Link>
          <Carousel.Caption>
            <h3>Fashion</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>{" "}
    </Fragment>
  );
}

export default Carous;
