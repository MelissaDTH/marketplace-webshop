import React, { Component } from "react";
import Cart from "./Cart";
import { connect } from "react-redux";

class CartContainer extends Component {
  // deleteProduct = id => {
  //   return this.props.dispatch(removeProduct(id));
  // };

  render() {
    if (this.props.cart.length === 0) {
      return <p className="empty">Your cart is currently empty.</p>;
    } else {
      return (
          <Cart
            cart={this.props.cart}
            total={this.props.total}
          />
      );
    }
  }
}

const mapStateToProps = reduxState => {
  console.log('CART:', reduxState.cart);
  
  return {
    cart: reduxState.cart,
    total: reduxState.cart.total.toFixed(2)
  };
};

export default connect(mapStateToProps)(CartContainer);
