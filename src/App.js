import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Containers
import NavigationBar from "./components/NavigationBar/NavigationBar"
import HomeContainer from "./components/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Route exact path="/" component={HomeContainer} />
      <Footer />
    </Fragment>
  );
}

export default App;
