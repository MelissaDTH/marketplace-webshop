import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
import { Card, ListGroup, Button } from "react-bootstrap";
import { addProduct } from "../../actions/cart";
import { connect } from "react-redux";

function ProductList(props) {
  return (
    <div className="product">
      <h1 className="cat-title">{props.category.name}</h1>
      {!props.products.length ? (
        <h2>Loading...</h2>
      ) : (
        props.products.map((product) => (
          <div className="product-div" key={product.id}>
            <Card>
              <ListGroup.Item className="listgroup">
                <div>
                  <Link
                    className="product-link"
                    to={`/products/${product.id}/comments`}
                  >
                    <img src={product.picture} alt="product list"></img>
                  </Link>
                </div>
                <div className="product-info-div">
                  <Link
                    className="product-link"
                    to={`/products/${product.id}/comments`}
                  >
                    <h3 className="product-name">
                      <b>{product.name}</b>
                    </h3>
                    <div className="product-descr">
                      <p>{product.description}</p>
                      <h5>
                        <b>€ {product.price.toFixed(2)}</b>
                      </h5>
                      <p>
                        <i>Color: {product.color}</i>
                      </p>{" "}
                    </div>
                  </Link>
                  <Button
                    variant="warning"
                    className="add-to-cart"
                    onClick={() => props.addProduct(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </ListGroup.Item>
            </Card>
          </div>
        ))
      )}
    </div>
  );
}

export default connect(null, { addProduct })(ProductList);
