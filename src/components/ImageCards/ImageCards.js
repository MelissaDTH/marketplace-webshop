import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck"
import { Button } from "react-bootstrap";// import { Link } from "react-router-dom";

function CategoryCards() {
  return (
    <Fragment>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    <Card.Body>
    <Button variant="warning">Electronics</Button>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    <Card.Body>
    <Button variant="warning">Home & Garden</Button>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    <Card.Body>
      <Button variant="warning">Fashion</Button>
    </Card.Body>

  </Card>
</CardDeck>
    </Fragment>
  );
}

export default CategoryCards;
