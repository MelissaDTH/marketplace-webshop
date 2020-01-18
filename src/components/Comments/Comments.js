import React from "react";
// import { Card } from "react-bootstrap";
import "./Comments.css";

export default function Comments(props) {
  return (
    <div className="comments-div">
      <h3>Comments</h3>

      {!props.comments.length ? (
        <h6><i>There are no comments for this product</i></h6>
      ) : (
        props.comments.map(comments => (
          <div className="comments-card-container" key={comments.id}>
            {/* <Card> */}
            <div className="comments-content">
              <p className="comment-user">
                <b>{comments.user.username}:</b>
              </p>
              <p>
                <i>{comments.comment}</i>
              </p>
            </div>
            {/* </Card> */}
          </div>
        ))
      )}
    </div>
  );
}
