import React, { Component, Fragment } from "react";
import "../Authorization.css";

class SignupSuccess extends Component {
  render() {
    return (
      <Fragment>
        <div className="auth-success">
          Signing up was very successful!
          <br />
          You can log in <a href="/login">here</a>.
        </div>
      </Fragment>
    );
  }
}

export default SignupSuccess;
