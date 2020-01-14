import React, { Fragment } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";
import "./Carousel.css"

function CategoryCarousel() {
  return (
    <div className="carousel-div">
      <Carousel>
        <Carousel.Item>
          <Link to="/category/3/products/">
          <img
            className="d-block w-100 h-30"
            src="https://images.pexels.com/photos/1600130/pexels-photo-1600130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Plants slide"
          />
          <Carousel.Caption>
            <h2>Plants and Gardening</h2>
            <h5>Plants are a great way to make your house a better space to live in. You’ll find everything you need in and around your home to make it uniquely your own.</h5>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
        <Link to="/category/5/products/">
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/841132/pexels-photo-841132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Sport slide"
          />
          <Carousel.Caption>
            <h2>Sporting Goods</h2>
            <h5>Are you ready to play like a pro? No matter what your favorite sport is, Marketplace has the equipment you need to perform at your peak.</h5>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
        <Link to="/category/6/products/">
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="Movies, music and games slide"
          />
          <Carousel.Caption>
            <h2>Movies, music and games</h2>
            <h5>
            Turn your home into a theater-like experience with a new or refurbished TV by Samsung, LG, or Sharp. Or up your game with a new or refurbished video game console like the PS4 or Xbox One.
            </h5>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>{" "}
    </div>
  );
}

export default CategoryCarousel;
