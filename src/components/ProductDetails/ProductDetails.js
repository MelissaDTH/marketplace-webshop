import React from 'react'
import { Link } from "react-router-dom";
import './ProductDetails.css'

export default function ProductDetails(props) {
    return (
      <div className="details">
      <div className="details__container">
          <div className="details__img-container">
              <img src={props.imgUrl} />
          </div>
          <div className="details__info">
              <h1>{props.name}</h1>
              <h5>{props.description}</h5>

              <h3>{props.price}</h3>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec tristique ante eget sem maximus lobortis. Morbi et
                  accumsan ipsum. Integer enim dui, elementum sit amet
                  euismod sed, auctor quis eros. Integer a hendrerit ante.
              </p>
              <Link to="/" className="return">
                  Return
              </Link>
          </div>
      </div>
  </div>

    )
}