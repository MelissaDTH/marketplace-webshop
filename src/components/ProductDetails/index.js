import React from "react";
import { getComments } from "../../actions/comments";
import { getOneProduct } from "../../actions/products";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProductDetails from "./ProductDetails";
import Comments from "../Comments/index";

class ProductDetailsContainer extends React.Component {
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
          />
          <br /> <br />
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
    comments: reduxState.comments
  };
};

const mapDispatchToProps = { getOneProduct, getComments };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailsContainer);
