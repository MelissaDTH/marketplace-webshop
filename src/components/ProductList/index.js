import React from "react";
import { loadCategory } from "../../actions/categories";
import { getProducts } from "../../actions/products";
import { addProduct } from "../../actions/cart";
import { connect } from "react-redux";
import ProductsList from "./ProductList";

class ProductsListContainer extends React.Component {

  selectProduct = id => {
    console.log('this.props.products', this.props.products.find(product => product.productId === id));
    return this.props.addProduct(this.props.products.find(product => product.productId === id))
  }

  componentDidMount() {
    this.props.getProducts(Number(this.props.match.params.categoryId));
  }

  render() {
    return (
      <ProductsList
        category={this.props.category}
        products={this.props.products}
        selectProduct={this.selectProduct}
      />
    );
  }
}

const mapStateToProps = ReduxState => {
  return {
    category: ReduxState.category,
    products: ReduxState.products
  };
};

const mapDispatchToProps = { loadCategory, getProducts, addProduct };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsListContainer);
