import React from "react";
import { getComments } from "../../actions/comments";
import { getOneProduct } from "../../actions/products";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProductDetails from "./ProductDetails";
import Comments from "../Comments/index";
import { addProduct } from "../../actions/cart";

class ProductDetailsContainer extends React.Component {
  // selectProduct = productId => {
  //   return this.props.addProduct(this.props.products.find(product => product.productId === productId))
  // }

  componentDidMount = () => {
    const { productId } = this.props.match.params;
    this.props.getOneProduct(Number(productId));
  };

  render() {
    if (this.props.product.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <ProductDetails
            product={this.props.product}
            comments={this.props.comments}
            selectProduct={this.selectProduct}
          />
          <br />
          <Comments productId={this.props.match.params.productId} />
          {/* <Link to="/category" className="return">
            Return
          </Link> */}
        </div>
      );
    }
  }
}

const mapStateToProps = reduxState => {
  return {
    product: reduxState.product,
    products: reduxState.products,
    comments: reduxState.comments
  };
};

const mapDispatchToProps = { getOneProduct, getComments, addProduct };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailsContainer);
