import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Col, Form, Button } from "react-bootstrap";
import "./Checkout.css";

class CheckoutContainer extends Component {
  render() {
    return (
      <div className="checkout">
        <main>
          <h2 className="cart-title"><b>Shipping information</b></h2>
        </main>
        <Form className="checkout-form">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control placeholder="Enter first name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control placeholder="Enter last name" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Register as a new account" />
          </Form.Group>
          <h4 className="totalAmount-checkout">
            {" "}
            <b>TOTAL: €{this.props.total}</b>
          </h4>

          <Button type="submit" variant="warning" className="submit-checkout">
            {" "}
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    total: reduxState.cart.total.toFixed(2)
  };
};

export default connect(mapStateToProps)(CheckoutContainer);
