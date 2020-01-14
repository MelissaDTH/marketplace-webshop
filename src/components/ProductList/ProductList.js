import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
import { Card, ListGroup, Button } from "react-bootstrap";
// import category from '../../reducers/category';

export default function ProductDetails(props) {
  return (
    <div className="product">
      {!props.products.length
        ? <h2>Loading...</h2>
        : props.products.map(product => (
            <div className="product-div">
              <Card>
                <ListGroup.Item className="listgroup">
                  <Link
                    className="product-link"
                    to={`/product/${product.id}/products/`}
                  >
                    <div>
                      <img src={product.picture} key={product.id}></img>
                    </div>
                    <div className="product-info-div">
                      <h3><b>{product.name}</b></h3>
                      <p className="product-descr">{product.description}</p>
                      <p><b>EUR {product.price}</b></p>
                      <p>Color: {product.color}</p>             <Button variant="warning">Add to Cart</Button>
                    </div>
                  </Link>{" "}
                </ListGroup.Item>
              </Card>
            </div>
          ))}
    </div>
  );
}
