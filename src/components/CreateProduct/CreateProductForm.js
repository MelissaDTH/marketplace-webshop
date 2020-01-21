import React from "react";
import { Form, Button } from "react-bootstrap";

export default function CreateProductForm(props) {

return (
  <Form onSubmit={props.onSubmit} className="create-product-form">
    <Form.Group controlId="formProductName">
      <Form.Label>Product name</Form.Label>
      <Form.Control
        type="name"
        name="name"
        placeholder="Enter name"
        onChange={props.onChange}
        value={props.values.name}
      />
    </Form.Group>
    <Form.Group controlId="formProductPicture">
      <Form.Label>Add picture</Form.Label>
      <Form.Control
        type="picture"
        name="picture"
        placeholder="http://"
        onChange={props.onChange}
        value={props.values.picture}
      />
    </Form.Group>
    <Form.Group controlId="formProductPrice">
      <Form.Label>Price</Form.Label>
      <Form.Control
        type="price"
        name="price"
        placeholder="€ 00.00"
        onChange={props.onChange}
        value={props.values.price}
      />
    </Form.Group>
    <Form.Group controlId="formProductDescription">
      <Form.Label>description</Form.Label>
      <Form.Control
        type="description"
        name="description"
        placeholder="Why are you selling this?"
        onChange={props.onChange}
        value={props.values.description}
      />
    </Form.Group>
    <Form.Group controlId="formProductColor">
      <Form.Label>color</Form.Label>
      <Form.Control
        type="text"
        name="color"
        placeholder="add color"
        onChange={props.onChange}
        value={props.values.color}
      />
    </Form.Group>

    <Button variant="warning" type="submit">
      Create Product
    </Button>
  </Form>
);
}
