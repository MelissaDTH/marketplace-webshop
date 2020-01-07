import React, { Fragment } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";
import "./Carousel.css"

function CategoryCarousel() {
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
            <h2>Electronics</h2>
            <h6>Keep up with the latest in electronics and technology and save money with the great deals on Marketplace.</h6>
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
            <h2>Home & Garden</h2>
            <h6>When it comes to home improvement, look no further than the home and garden pages of Marketplace.</h6>
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
            <h2>Fashion</h2>
            <h6>
            Take the strain out of shopping with Marketplace. Find great deals on fashionable jeans, sweaters, suits and that look sharp and stylish.
            </h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>{" "}
    </Fragment>
  );
}

export default CategoryCarousel;
