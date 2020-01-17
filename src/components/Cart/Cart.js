import React from "react";
import "./Cart.css";
import { Card, ListGroup, _Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Cart.css";

export default function Cart(props) {
  const { cart } = props.cart;
  const cartProducts = Object.values(cart);

  return (
    <div className="cart">
      <h1><b>Shopping Cart </b></h1>

      <div className="cart-products">
        {cartProducts.map(product => (
          <div key={product.productId}>
            <Card>
              <ListGroup.Item className="listgroup-cart">
                <div className="card-cart">
                  <img
                    className="product-image-cart"
                    height={130}
                    width={160}
                    src={product.picture}
                    alt="product in cart"
                  />
                </div>
                <h4>Product: {product.name}</h4>
                <br />
                <h5>
                  <b> € {product.price} </b>
                </h5>
                <button>Delete from cart</button>
              </ListGroup.Item>
            </Card>
          </div>
        ))}
        <h4 className="total-amount">
          <b>TOTAL: € {props.total} </b>
        </h4>
        <Link to="/checkout">
              <button className="checkout-button">Go to checkout</button>
            </Link>

      </div>
    </div>
  );
}

{
  /* deleteProduct={props.deleteProduct} */
}

/* (product => (
                    <ProductDetails
                        deleteProduct={props.deleteProduct}
                        path={props.path}
                        name={product.name}
                        price={product.price}
                        picture={product.picture}
                        id={product.id}
                        key={product.id}
                    />
                ))} */
