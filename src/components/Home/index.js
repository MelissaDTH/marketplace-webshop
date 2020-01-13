import React, { Component } from "react";
import Home from "./Home";
import Carousel from "../Carousel/Carousel";
import ImageCards from "../ImageCardsHome/ImageCards"
import { connect } from "react-redux";

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Home />
        <ImageCards />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {};
};

export default connect(mapStateToProps)(HomeContainer);
