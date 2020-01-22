import React from "react";
import "./Cart.css";
import { connect } from "react-redux";
import { Card, ListGroup, Button } from "react-bootstrap";
import { removeProduct } from "../../actions/cart";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./Cart.css";

function Cart(props) {
  const { cart } = props.cart;
  const cartProducts = Object.values(cart);

  return (
    <div className="cart">
      <h2 className="cart-title">
        <b>Shopping Cart</b>
      </h2>
      <div className="cart-products">
        {cartProducts.map(product => (
          <div key={product.productId}>
            <Card>
              <ListGroup.Item className="listgroup-cart">
                <div className="card-cart">
                  <img
                    className="product-image-cart"
                    height={110}
                    width={140}
                    src={product.picture}
                    alt="product in cart"
                  />
                </div>
                <h4>{product.name}</h4>
                <p>Color: {product.color}</p>
                <h5>
                  <b> € {product.price.toFixed(2)} </b>
                  <Button
                    variant="warning"
                    className="trash-icon"
                    onClick={() => {
                      props.removeProduct(product);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </h5>
              </ListGroup.Item>
            </Card>
            <br />

          </div>
        ))}
        <h4 className="total-amount">
          <b>TOTAL: € {props.total} </b>
        </h4>
        <div className="checkout-btn">
        <Link to="/checkout">
        <Button type="submit" variant="warning" >
            {" "}
            Go to checkout
          </Button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { removeProduct })(Cart);
