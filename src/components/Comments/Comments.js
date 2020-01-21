import React from "react";
import "./Comments.css";

export default function Comments(props) {
  return (
    <div className="comments-div">
      <h3><strong>Comments</strong></h3>

      {!props.comments.length ? (
        <h6><i>There are no comments for this product</i></h6>
      ) : (
        props.comments.map(comments => (
          <div className="comments-card-container" key={comments.id}>
              <p className="comment-user">
                <b>{comments.user.username}:</b>
              </p>
              <p>
                <i>{comments.comment}</i>
              </p>
            </div>
        ))
      )}
    </div>
  );
}
