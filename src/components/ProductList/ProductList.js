import React from 'react'
import { Link } from "react-router-dom";

export default function EventDetails(props) {
    return (
        <div>
            <h2>Showing the products of that category</h2>    
            {console.log('logging props.products', props.products)}
                   
            {!props.products.length
            ? "Loading..."
            : props.products.map(product => (
                <li key={product.id}>
                  <Link className="link" to={`/product/${product.id}/products/`}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </Link>{" "}
                </li>
              ))}
        </div>
    )
}