import React from "react";
import "./ProductDetails.css";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addProduct } from "../../actions/cart";

function ProductDetails(props) {
  const product = props.product;
  // console.log("product", product);

  return (
    <div className="details">
      <div className="details_container">
        <div className="details_img-container">
          <img src={product.picture} height={250} alt="product" />
        </div>
        <div className="details_info">
          <h1 className="details-title">
            <b>{product.name}</b>
          </h1>
          <h3>
            <b>€ {product.price}</b>{" "}
          </h3>
          <p
            className={
              product.risk > 70
                ? "details-risk red"
                : product.risk > 20
                ? "details-risk yellow"
                : "details-risk green"
            }
          >
            <b>Fraud Risk: {product.risk}%</b> 
          </p>
          <Button
            variant="warning"
            className="add-to-cart"
            onClick={() => props.addProduct(product)}
          > Add to Cart
          </Button>
          <br/><br/>
        </div>
        
        <div className="product-descript">
          {" "}
          <p>
            <b>Seller:</b> {product.user.username}
            <br />
            <b>Color:</b> {product.color}
            <br />
            </p>
          <p>
            <b>Description by seller: </b>
            <br />
            {props.product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { addProduct })(ProductDetails);
