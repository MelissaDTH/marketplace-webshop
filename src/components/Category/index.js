import React from "react";
import { getCategories } from "../../actions/categories";
import { connect } from "react-redux";
import CategoryList from "./CategoryList";

class CategoriesList extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return <CategoryList categories={this.props.categories} />;
  }
}

const mapStateToProps = ReduxState => ({
  categories: ReduxState.categories
});

export default connect(mapStateToProps, { getCategories })(CategoriesList);
