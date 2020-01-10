import React from "react";
import { loadCategory } from "../../actions/categories";
import { getProducts } from "../../actions/products";
import { connect } from "react-redux";
import ProductsList from "./ProductList";

class ProductsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadCategory(Number(this.props.match.params.id));
    this.props.getProducts(Number(this.props.match.params.id));
  }

  render() {
    return (
      <ProductsList
        category={this.props.category}
        products={this.props.products}
      />
    );
  }
}

const mapStateToProps = ReduxState => {
  console.log("MSTP?! from productlist", ReduxState.products);
  return {
    category: ReduxState.category,
    products: ReduxState.products
  };
};

const mapDispatchToProps = { loadCategory, getProducts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsListContainer);
