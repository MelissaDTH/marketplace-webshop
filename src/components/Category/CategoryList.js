import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./CategoryList.css";


export default function CategoriesList(props) {
  return (
    <div className="category-container">
        {!props.categories.length
          ? "Loading..."
          : props.categories.map(category => (
              <div className="cat-list-card">
                  <Card>
                    <Link to={`/category/${category.id}/products/`} className="image-card-link">
                      <Card.Img variant="top" src={category.picture} />
                      <Card.Body>
                      <Link to={`/category/${category.id}/products/`} className="cat-title-link">
                      <Button variant="warning" className="category-btn">{category.name}</Button>

                        {/* <Card.Title className="cat-title"><b>{category.name}</b></Card.Title> */}
                        </Link>
                        <Card.Text className="cat-description">{category.description}</Card.Text>
                      </Card.Body>
                      </Link>

                  </Card>
              </div>
            ))}
    </div>
  );
}
