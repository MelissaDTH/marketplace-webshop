import React from 'react'
import { Link } from "react-router-dom";

export default function CategoriesList(props) {
    console.log('props Categories?', props.Categories)
    return (
      <div>
        <h1>All the categories</h1>
        <ul>
          {!props.categories.length
            ? "Loading..."
            : props.categories.map(category => (
                <li key={category.id}>
                  <Link className="link" to={`/category/${category.id}/products/`}>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </Link>{" "}
                </li>
              ))}
        </ul>
      </div>
    );
  }
