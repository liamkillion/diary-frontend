import React from "react";
import { Row, Input, Button } from "react-materialize";
import { services } from "../services/";
import { connect } from "react-redux";

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

  handleSubmit = () => {
    this.props.dispatch({ type: "ASYNC_START" });
    services.auth.logIn(this.state.credentials).then(user => {
      localStorage.setItem("token", user.jwt);
      this.props.dispatch({ type: "SET_CURRENT_USER", user });
    });
  };

  render() {
    return (
      <div>
        {this.state.error ? <h1>Try Again</h1> : null}
        <Row>
          <label>Email</label>
          <Input type="text" name="email" onChange={this.handleChange} />
          <label>Password</label>
          <Input
            type="password"
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

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Login);
