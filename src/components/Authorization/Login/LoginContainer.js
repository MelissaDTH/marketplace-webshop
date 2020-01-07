import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../../actions/authentication'
import { Redirect } from "react-router-dom";
import Login from './Login'

class LoginContainer extends React.Component {
  state = { username: '', password: '' }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.username, this.state.password)

    this.setState({
      username: "",
      password: "",
    });
  }

  render() {
    // redirect to login-succes page if there's an JWT
    return this.props.token ?
      <Redirect to="/login-success" />
      :
      <Login
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
  }
}
const mapStateToProps = state => {
  return { token: state.login }
}

export default connect(mapStateToProps, { login })(LoginContainer)