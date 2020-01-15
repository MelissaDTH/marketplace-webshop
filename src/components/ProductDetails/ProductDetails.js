import React from 'react'
import './ProductDetails.css'
import { Button } from "react-bootstrap";

export default function ProductDetails(props) {
    console.log('product.user', props.product.user)
    return (
      <div className="details">
      <div className="details_container">
          <div className="details_img-container">
              <img src={props.product.picture} height={250}alt="product"/>
          </div>
          <div className="details__info">
              <h1 className="details-title"><b>{props.product.name}</b></h1>
              <p><b>Description by seller: </b><br />{props.product.description}</p>

              <h3><b>EUR {props.product.price}</b></h3>
              <p>Color: {props.product.color}
              </p>
              <Button variant="warning" className="details-btn">Add to Cart</Button>
              <p><b>Seller:{props.product.username}</b></p>

          </div>
      </div>
  </div>

    )
}