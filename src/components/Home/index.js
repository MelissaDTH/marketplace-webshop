import React, { Component } from "react";
import Home from "./Home";
import Carousel from "../Carousel/Carousel";
import ImageCards from "../ImageCards/ImageCards"
import { connect } from "react-redux";

class HomeContainer extends Component {
  // selectPlant = id => {
  //   return this.props.dispatch(
  //     addPlant(this.props.plants.find(plant => plant.id === id))
  //   );
  // };

  // selectWishPlant = id => {
  //   return this.props.dispatch(
  //     addWishPlant(this.props.plants.find(plant => plant.id === id))
  //   );
  // };

  // componentDidMount() {
  //   this.props.dispatch(getPlants());
  // }

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
