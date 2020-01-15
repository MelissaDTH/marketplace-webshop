import React from "react";
import "./ProductDetails.css";
import { Button } from "react-bootstrap";

export default function ProductDetails(props) {
  // console.log('product.user', props.product.user)
  return (
    <div className="details">
      <div className="details_container">
        <div className="details_img-container">
          <img src={props.product.picture} height={250} alt="product" />
        </div>
        <div className="details__info">
          <h1 className="details-title">
            <b>{props.product.name}</b>
          </h1>
          <h3>
            <b>€ {props.product.price}</b>{" "}
          </h3>
          <p>
            <b>Color:</b> {props.product.color}
          </p>
          <p>
            <b>Seller:{props.product.username}</b>
          </p>
          <Button
            variant="warning"
            className="add-to-cart"
            onClick={() => props.selectProduct(props.id)}
          >
            Add to Cart
          </Button>
        </div>
        <br />
        <div className="product-descript">
          {" "}
          <p>
            <b>Description by seller: </b>
            <br />
            {props.product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
