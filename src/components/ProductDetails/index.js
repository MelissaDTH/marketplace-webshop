import React from "react";
import { getComments } from "../../actions/comments";
import { getOneProduct } from "../../actions/products";
import { connect } from "react-redux";
import ProductDetails from "./ProductDetails";

class ProductDetailsContainer extends React.Component {
  componentDidMount = () => {
    // const { categoryId } = this.props.match.params;
    this.props.getOneProduct(Number(this.props.match.params.productId));
    this.props.getComments(Number(this.props.match.params.productId));
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
        </div>
      );
    }
  }
}

const mapStateToProps = reduxState => {
  console.log("ONE product?", reduxState.product);

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
