import React from "react";
import { loadCategory } from "../../actions/categories";
import { getProducts } from "../../actions/products";
import { addProduct } from "../../actions/cart";
import { connect } from "react-redux";
import ProductsList from "./ProductList";
import { Link } from "react-router-dom";
import CreateProduct from "../CreateProduct";

class ProductsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadCategory(Number(this.props.match.params.categoryId));
    this.props.getProducts(Number(this.props.match.params.categoryId));
  }

  render() {
    return (
      <div>
        <ProductsList
          category={this.props.category}
          products={this.props.products}
        />
        {this.props.login ? (
          <div>
            <h3 className='product-sell-title'>Start selling something</h3>

            <CreateProduct
              category={this.props.category}
              categories={this.props.categories}
              products={this.props.products}
            />
          </div>
        ) : (
          <div>
            <h3 className='product-sell-title'>Start selling something</h3>
            <Link to="/login">
              {" "}
              <h4 className='login-to-sell-link'>Click here to log in and sell your items</h4>{" "}
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
