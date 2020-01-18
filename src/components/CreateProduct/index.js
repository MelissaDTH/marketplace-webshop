import React from "react";
import { connect } from "react-redux";
import { createProduct } from "../../actions/products";
import CreateProductForm from "./CreateProductForm";

class CreateProductContainer extends React.Component {
  state = {
    name: "",
    picture: "",
    price: "",
    description: "",
    color: "",
    categoryId: this.props.categoryId
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createProduct(this.state);

    this.setState({
      name: "",
      picture: "",
      price: "",
      description: "",
      color: ""
      });
  };

  render() {
    return (
      <div>Hello World

      <CreateProductForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        categories={this.props.categories}
        products={this.props.products}
        categoryId={this.props.categoryId}
      />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    products: state.products
  };
}

const mapDispatchToProps = { createProduct };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProductContainer);