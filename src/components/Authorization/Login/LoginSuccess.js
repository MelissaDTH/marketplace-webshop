import React, { Component, Fragment } from "react";
import "../Authorization.css";

class LoginSuccess extends Component {
  render() {
    return (
      <Fragment>
        <div className="auth-success">Logging in was very successful!
        <br />
        Go back to the <a href="/">homepage</a>.
        </div>
      </Fragment>
    );
  }
}

export default LoginSuccess;
