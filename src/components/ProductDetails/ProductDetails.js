import React, { useState } from "react";
import "./ProductDetails.css";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addProduct } from "../../actions/cart";

function ProductDetails(props) {
  const product = props.product;

  return (
    <div className="details">
      <div className="details_container">
        <div className="details_img-container">
          <img src={product.picture} height={250} alt="product" />
          <h1 className="details-title">
            <b>{product.name}</b>
          </h1>
        </div>
        <div className="details_info">
          <h3>
            <b>€ {product.price}</b>{" "}
          </h3>
          <p
            className={
              product.risk > 49
                ? "details-risk red"
                : product.risk > 19
                ? "details-risk yellow"
                : "details-risk green"
            }
          >
            <b>Fraud Risk: {product.risk}%</b>
          </p>
          <Button
            variant="warning"
            className="add-to-cart"
            onClick={() => props.addProduct(product)}
          >
            {" "}
            Add to Cart
          </Button>
          <br />
          <br />
        </div>
        <div className="product-descript">
          {" "}
          <p>
            <b>Seller:</b> {product.user ? product.user.username : "anonymous"}
            <br />
            <b>Color:</b> {product.color}
            <br />
          </p>
          <p>
            <b>
              Description by {product.user ? product.user.username : "seller"}:{" "}
            </b>
            <br />
            {props.product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { addProduct })(ProductDetails);
