import React from "react";
import { Row, Input, Button } from "react-materialize";
import * as actions from "../actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      credentials: {
        email: "",
        password: ""
      }
    };
  }

  handleChange = event => {
    const newCredentials = {
      ...this.state.credentials,
      [event.target.name]: event.target.value
    };
    this.setState({ credentials: newCredentials });
  };

  handleSubmit = () => {};

  render() {
    return (
      <div>
        {this.state.error ? <h1>Try Again</h1> : null}
        <Row>
          <label>Email</label>
          <Input type="text" name="email" onChange={this.handleChange} />
          <label>Password</label>
          <Input
            type="text"
            name="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          <Button onClick={this.handleSubmit} waves="light">
            login
          </Button>
        </Row>
      </div>
    );
  }
}

export default Login;
