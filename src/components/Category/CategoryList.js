import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import { Link } from "react-router-dom";
import "./CategoryList.css";
import { Link } from "react-router-dom";

export default function CategoriesList(props) {
  return (
    <div>
      <ul>
        {!props.categories.length
          ? "Loading..."
          : props.categories.map(category => (
              <div className="cat-list-card">
                <CardGroup >
                  <Card>
                    <Link to={`/category/${category.id}/products/`} className="cat-link">
                      <Card.Img variant="top" src={category.picture} />
                      </Link>
                      <Card.Body>
                      <Link to={`/category/${category.id}/products/`} className="cat-title-link">
                        <Card.Title className="cat-title">{category.name}</Card.Title>
                        </Link>
                        <Card.Text className="cat-description">{category.description}</Card.Text>
                      </Card.Body>
                  </Card>
                </CardGroup>
              </div>

              // <li key={category.id}>
              //   <Link className="link" to={`/category/${category.id}/products/`}>
              //     <h3>{category.name}</h3>
              //     <p>{category.description}</p>
              //   </Link>{" "}
              // </li>
            ))}
      </ul>
    </div>
  );
}
