import React from "react";
import { loadCategory } from "../../actions/categories";
import { getProducts } from "../../actions/products";
import { connect } from "react-redux";
import ProductDetails from "./ProductDetails";

class ProductDetailsContainer extends React.Component {
    componentDidMount = () => {
      // const { categoryId } = this.props.match.params;
      this.props.getProducts();
    };
  
    render() {
      if (this.props.products.length === 0) {
        return <p>Loading...</p>;
      } else {
        const item = this.props.products.find(
          products => products.name === this.props.match.params.product
        );
        return (
          <div>
            <ProductDetails
              name={item.name}
              price={item.price}
              description={item.description}
              imgUrl={item.picture}
            />
          </div>
        );
      }
    }
  }
  
  const mapStateToProps = reduxState => {
    console.log('products?', reduxState.products);
    
    return {
      products: reduxState.products
    };
  };
  
  const mapDispatchToProps = { loadCategory, getProducts };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductDetailsContainer);
    