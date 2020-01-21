import React from "react";
import { Form, Button } from "react-bootstrap";
import './CreateProduct.css'

export default function CreateProductForm(props) {

return (
  <Form onSubmit={props.onSubmit} className="create-product-form">
    <Form.Group controlId="formProductName">
      <Form.Label>Product name</Form.Label>
      <Form.Control
        type="name"
        name="name"
        placeholder="Enter a name"
        onChange={props.onChange}
        value={props.values.name}
      />
    </Form.Group>
    <Form.Group controlId="formProductPicture">
      <Form.Label>Add picture (url)</Form.Label>
      <Form.Control
        type="picture"
        name="picture"
        placeholder="https://"
        onChange={props.onChange}
        value={props.values.picture}
      />
    </Form.Group>
    <Form.Group controlId="formProductPrice">
      <Form.Label>Price</Form.Label>
      <Form.Control
        type="price"
        name="price"
        placeholder="€ "
        onChange={props.onChange}
        value={props.values.price}
      />
    </Form.Group>
    <Form.Group controlId="formProductDescription">
      <Form.Label>Description</Form.Label>
      <Form.Control
        type="description"
        name="description"
        placeholder="Why are you selling this?"
        onChange={props.onChange}
        value={props.values.description}
      />
    </Form.Group>
    <Form.Group controlId="formProductColor">
      <Form.Label>Color of product</Form.Label>
      <Form.Control
        type="text"
        name="color"
        placeholder="color"
        onChange={props.onChange}
        value={props.values.color}
      />
    </Form.Group>

    <Button variant="warning" type="submit">
      Add product to selling list
    </Button>
  </Form>
);
}
