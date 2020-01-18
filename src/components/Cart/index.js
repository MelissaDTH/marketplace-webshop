import React, { Component } from "react";
import Cart from "./Cart";
import { connect } from "react-redux";

class CartContainer extends Component {
  render() {
    if (this.props.cart.total === 0) {
      return (
        <div>
          <h1 className="cart-title">
            <b>Shopping Cart</b>
          </h1>
          <h3 className="empty-cart">Your cart is currently empty.</h3>
        </div>
      );
    } else {
      return <Cart cart={this.props.cart} total={this.props.total} />;
    }
  }
}

const mapStateToProps = reduxState => {
  return {
    cart: reduxState.cart,
    total: reduxState.cart.total.toFixed(2)
  };
};

export default connect(mapStateToProps)(CartContainer);
