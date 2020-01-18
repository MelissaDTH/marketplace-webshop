import React from "react";
import { Button } from "react-bootstrap";

export default function CreateProductForm(props) {
  if (!props.products) return "Loading";

  return (
    <div>
      <h4>Add a new Product</h4>
      <br />
      <form onSubmit={props.onSubmit}>
        Product Name
        <br />
        <input
          name="name"
          type="text"
          value={props.values.name}
          onChange={props.onChange}
          placeholder="Enter event name"
        ></input>
                <input
          name="picture"
          type="text"
          value={props.values.picture}
          onChange={props.onChange}
          placeholder="Enter pic"
        ></input>
        <input
          name="price"
          type="text"
          value={props.values.price}
          onChange={props.onChange}
          placeholder="Enter event price"
        ></input>
        <input
          name="description"
          type="text"
          value={props.values.description}
          onChange={props.onChange}
          placeholder="Enter event description"
        ></input>
        <input
          name="color"
          type="text"
          value={props.values.color}
          onChange={props.onChange}
          placeholder="Enter event color"
        ></input>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
      </form>
    </div>
  );
}
