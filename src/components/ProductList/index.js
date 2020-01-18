import React from "react";
import { loadCategory } from "../../actions/categories";
import { getProducts } from "../../actions/products";
import { addProduct } from "../../actions/cart";
import { connect } from "react-redux";
import ProductsList from "./ProductList";
import { Link } from "react-router-dom";
// import CreateProduct from '../'

class ProductsListContainer extends React.Component {
  componentDidMount() {
    this.props.getProducts(Number(this.props.match.params.categoryId));
  }

  render() {
    return (
      <div>
        <ProductsList
          category={this.props.category}
          products={this.props.products}
          selectProduct={this.selectProduct}
        />
        {this.props.login ? (
          <div>
            <h4>Start selling something</h4>

            {/* <CreateProduct categories={this.props.categories} /> */}
          </div>
        ) : (
          <div>
            <h4>Start selling something</h4>
            <Link to="/login">
              {" "}
              <h4>You have to be logged in to start selling a product</h4>{" "}
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ReduxState => {
  return {
    category: ReduxState.category,
    products: ReduxState.products,
    login: ReduxState.login
  };
};

const mapDispatchToProps = { loadCategory, getProducts, addProduct };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsListContainer);
