import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ImageCards.css";

function CategoryCards() {
  return (
    <div className="home-card">
      <CardDeck>
        <Card>
          <Link to="/category/2/products/" className="image-card-link">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          <Card.Body>
              <Button variant="warning">Electronics</Button>
            <br />
            Keep up with the latest in electronics and technology and save money
            with great deals. Shop with confidence and find the electronics you
            want for a great price on Marketplace.
          </Card.Body>
          </Link>
        </Card>
        <Card>
          <Link to="/category/1/products/" className="image-card-link">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
          <Card.Body>
              <Button variant="warning">Home</Button>
            <br />
            When it comes to home improvement, look no further than the home and
            garden pages of Marketplace. A wide range of home goods are just a
            mouse click away.
          </Card.Body>
          </Link>
        </Card>
        <Card>
          <Link to="/category/4/products/" className="image-card-link">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
          <Card.Body>
              <Button variant="warning">Fashion</Button>
            <br />
            Take the strain out of shopping with Marketplace. Find great deals
            on fashionable jeans, sweaters, suits and that look sharp and
            stylish.
          </Card.Body>
          </Link>

        </Card>
      </CardDeck>
    </div>
  );
}

export default CategoryCards;
