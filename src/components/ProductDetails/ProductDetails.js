import React from 'react'
import { Link } from "react-router-dom";
import './ProductDetails.css'

export default function ProductDetails(props) {
    return (
      <div className="details">
      <div className="details__container">
          <div className="details__img-container">
              <img src={props.product.picture} height={250}alt="product"/>
          </div>
          <div className="details__info">
              <h1><b>{props.product.name}</b></h1>
              <h5>{props.product.description}</h5>

              <h3><b>EUR {props.product.price}</b></h3>
              <p>Color: {props.product.color}
              </p>
              <Link to="/category" className="return">
                  Return
              </Link>
          </div>
      </div>
  </div>

    )
}