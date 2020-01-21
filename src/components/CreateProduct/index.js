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
    categoryId: this.props.category.id
  };

  onChange = event => {

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {    
    event.preventDefault();
    this.props.createProduct(
      this.state.name,
      this.state.picture,
      this.state.price,
      this.state.description,
      this.state.color,
      this.state.categoryId,
      this.props.login
      );

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
      <CreateProductForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        categories={this.props.categories}
      />
    );
  }
}

function mapStateToProps(state) {  
  return {
    categories: state.categories,
    category: state.category,
    products: state.products,
    login: state.login
  };
}

const mapDispatchToProps = { createProduct };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProductContainer);