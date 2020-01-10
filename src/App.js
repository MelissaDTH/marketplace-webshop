import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Containers
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Signup from "./components/Authorization/Signup/Signup";
import LoginContainer from "./components/Authorization/Login/LoginContainer";
import HomeContainer from "./components/Home";
import Footer from "./components/Footer/Footer";
import SignupSuccess from "./components/Authorization/Signup/SignupSuccess";
import LoginSuccess from "./components/Authorization/Login/LoginSuccess";
import About from "./components/About";
import CategoryList from "./components/Category";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Route path="/" exact component={HomeContainer} />
      <Route path="/about" component={About} />
      <Route path="/signup-success" component={SignupSuccess} />
      <Route path="/login-success" component={LoginSuccess} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/category/" exact component={CategoryList} />
      <Route path="/category/:categoryId/products" exact component={ProductList} />
      <Footer />
    </Fragment>
  );
}

export default App;
