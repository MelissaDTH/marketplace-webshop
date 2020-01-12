import React from 'react'
import { Link } from "react-router-dom";
import './ProductList.css'

export default function EventDetails(props) {
    return (
        <div>
            <h2>All items</h2>    
            {!props.products.length
            ? "Loading..."
            : props.products.map(product => (
              <div className='product-div'>
                <li key={product.id}>
                  <Link className="product-link" to={`/product/${product.id}/products/`}>
                    <img src={product.picture}></img>
                    <h3>{product.name}</h3>
                    </Link>{" "}
                    <p>{product.description}</p>
                    <p>EUR {product.price}</p>
                    <p>Color: {product.color}</p>
                    <p>{product.userId.username}</p>
                </li>
                </div>
              ))}
        </div>
    )
}