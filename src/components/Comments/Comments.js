import React from "react";
import { Card } from "react-bootstrap";

export default function Comments(props) {
  console.log("props.comments", props.comments);

  return (
    <div className="comments-div">
      {!props.comments.length ? (
        <h2>Loading...</h2>
      ) : (
        props.comments.map(comments => (
          <div className="comments-card-container" key={comments.id}>
            <Card>
              <div className="comments-content">
                <h3>Comments</h3>
              <p><b>{comments.user.username}:</b></p>
                <p><i>{comments.comment}</i></p>
              </div>
            </Card>
          </div>
        ))
      )}
    </div>
  );
}
