import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./CategoryList.css";


export default function CategoriesList(props) {
  return (
    <div className="category-container">
      <h1 className='cat-title'> All categories</h1>
        {!props.categories.length
          ? "Loading..."
          : props.categories.map(category => (
              <div className="cat-list-card" key={category.id}>
                  <Card>
                    <Link to={`/category/${category.id}`} className="image-card-link">
                      <Card.Img variant="top" src={category.picture} />
                      </Link>
                      <Link to={`/category/${category.id}/`} className="cat-info-link">

                      <Card.Body>
                      <Button variant="warning" className="category-btn">{category.name}</Button>
                        <Card.Text className="cat-description">{category.description}</Card.Text>
                      </Card.Body>
                      </Link>

                  </Card>
              </div>
            ))}
    </div>
  );
}
