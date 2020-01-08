import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { signup } from "../../../actions/authentication";
import { Button, Form } from "react-bootstrap";
import '../Authorization.css'

class SignUp extends Component {
  state = {
    username: "",
    password: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.signup( this.state.username, this.state.password);
    this.props.history.push('/signup-success');
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Fragment>
      <h3 className="signup-title">Sign up</h3>

      <Form onSubmit={this.onSubmit} className="auth-form">
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            onChange={this.onChange}
            placeholder="Enter username"
          />
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={this.onChange}
            placeholder="Enter password"
          />
        </Form.Group>
        <Button variant="warning" type="submit" className="auth-btn">
          SIGN UP
        </Button>
        <p className="signup-register">
          Already have an account? <a href="/login">Log in here</a>
        </p>
      </Form>
      </Fragment>
    );
  }
}

export default connect(null, { signup })(SignUp);
