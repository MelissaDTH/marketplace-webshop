import React, { Fragment } from "react";
import { Button, Form } from "react-bootstrap";

export default function Login(props) {
  return (
    <Fragment>
      <h3 className="authorization-title">Log in</h3>

      <Form onSubmit={props.onSubmit} className="auth-form">
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={props.values.username}
            onChange={props.onChange}
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
            value={props.values.password}
            onChange={props.onChange}
            placeholder="Enter password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox"></Form.Group>
        <Button variant="warning" type="submit" className="auth-btn">
          LOGIN
        </Button>
        <p className="login-register">
          Don't have an account yet? <a href="/signup">Register now</a>
        </p>
      </Form>
    </Fragment>
  );
}
