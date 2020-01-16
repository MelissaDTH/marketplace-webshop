import React, { Component } from "react";
import Cart from "./Cart";
import { connect } from "react-redux";
import { removeProduct } from "../../actions/cart";
import { Link } from "react-router-dom";

class CartContainer extends Component {
  deleteProduct = id => {
    return this.props.dispatch(removeProduct(id));
  };

  render() {
    if (this.props.cart.length === 0) {
      return <p className="empty">Your cart is currently empty.</p>;
    } else {
      return (
        <div className="cart">
          <div className="checkout">
            <p className="totalAmount">
              {" "}
              <b>
                The total amount is: €
                {/* {this.props.cart
                  .map(product => parseInt(product.price))
                  .reduce((acc, currentProduct) => acc + currentProduct, 0)} */}
              </b>
            </p>
            <Link to="/checkout">
              <button className="checkout-button">Go to checkout</button>
            </Link>
          </div>

          <Cart
            deleteProduct={this.deleteProduct}
            selectedProducts={this.props.cart}
            path={this.props.match.path}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = reduxState => {
  console.log('cart?', reduxState.cart);
  
  return {
    cart: reduxState.cart
  };
};

export default connect(mapStateToProps)(CartContainer);
