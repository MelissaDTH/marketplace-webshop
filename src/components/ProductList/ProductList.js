import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
import { Card, ListGroup, Button } from "react-bootstrap";
// import category from '../../reducers/category';

export default function ProductDetails(props) {  
  return (
    <div className="product">
      {!props.products.length ? (
        <h2>Loading...</h2>
      ) : (
        props.products.map(product => (
          <div className="product-div" key={product.id}>
            <Card >
              <ListGroup.Item className="listgroup">
                <Link
                  className="product-link"
                  to={`/products/${product.id}`}
                >
                  <div>                    
                    <img src={product.picture} alt="product list"></img>
                  </div>
                  <div className="product-info-div">
                    <h3>
                      <b>{product.name}</b>
                    </h3>
                    <p className="product-descr">{product.description}</p>
                    <h5>
                      <b>EUR {product.price}</b>
                    </h5>
                    <p>Color: {product.color}</p>{" "}
                    <Button variant="warning">Add to Cart</Button>
                  </div>
                </Link>{" "}
              </ListGroup.Item>
            </Card>
          </div>
        ))
      )}
    </div>
  );
}
