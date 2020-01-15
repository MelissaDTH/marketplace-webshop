import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import './App.css'
// Containers
import NavigationBar from "./components/NavigationBar/NavigationBar";
import About from "./components/About";
import Signup from "./components/Authorization/Signup/Signup";
import LoginContainer from "./components/Authorization/Login/LoginContainer";
import HomeContainer from "./components/Home";
import Footer from "./components/Footer/Footer";
import SignupSuccess from "./components/Authorization/Signup/SignupSuccess";
import LoginSuccess from "./components/Authorization/Login/LoginSuccess";
import CategoryList from "./components/Category";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart/";

function App() {
  return (
    <div className='App'>
    <Fragment>
      <NavigationBar />
      <Route path="/" exact component={HomeContainer} />
      <Route path="/about" component={About} />
      <Route path="/signup-success" component={SignupSuccess} />
      <Route path="/login-success" component={LoginSuccess} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/category/" exact component={CategoryList} />
      <Route path="/category/:categoryId/" exact component={ProductList} />
      <Route path="/products/:productId/comments" exact component={ProductDetails} />
      <Route path="/cart" component={Cart} />
      <Footer />
    </Fragment>
    </div>
  );
}

export default App;
