import React from "react";
import { getComments } from "../../actions/comments";
import { connect } from "react-redux";
import Comments from "./Comments";

class CommentsList extends React.Component {
  componentDidMount() {
    this.props.getComments(Number(this.props.productId));
  }

  render() {
    return (
      <Comments
      comments={this.props.comments} />
    );
  }
}

const mapStateToProps = ReduxState => {
  return {
    product: ReduxState.product,
    comments: ReduxState.comments
  };
};

const mapDispatchToProps = { getComments };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);
