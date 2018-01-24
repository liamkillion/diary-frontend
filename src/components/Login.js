import React from "react";
import { services } from "../services/index";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      logincredentials: {
        email: "",
        password: ""
      },
      signupcredentials: {
        email: "",
        password: ""
      }
    };
  }

  handleLoginChange = event => {
    const logincredentials = {
      ...this.state.logincredentials,
      [event.target.name]: event.target.value
    };
    this.setState({ logincredentials: logincredentials });
  };

  handleSignUpChange = event => {
    const signupcredentials = {
      ...this.state.signupcredentials,
      [event.target.name]: event.target.value
    };
    this.setState({ signupcredentials: signupcredentials });
  };

  handleLoginSubmit = event => {
    event.preventDefault();
    services.auth
      .logIn(
        this.state.logincredentials.email,
        this.state.logincredentials.password
      )
      .then(res => {
        if (res.error) {
          this.setState({ error: res.error });
        } else {
          this.props.handleLogin(res);
        }
      });
  };

  handleSignUpSubmit = event => {
    event.preventDefault();
    services.auth
      .createUser(
        this.state.signupcredentials.email,
        this.state.signupcredentials.password
      )
      .then(res => {
        if (res.error) {
          this.setState({ error: res.error });
        } else {
          this.props.handleLogin(res);
        }
      });
  };

  render() {
    return (
      <div>
        {this.state.error ? <h1>Try Again</h1> : null}
        <form onSubmit={this.handleLoginSubmit}>
          <div>
            <h3>Sign In</h3>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.logincredentials.email}
              onChange={this.handleLoginChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={this.state.logincredentials.password}
              onChange={this.handleLoginChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <form onSubmit={this.handleSignUpSubmit}>
          <div>
            <h3>Sign Up</h3>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.signupcredentials.email}
              onChange={this.handleSignUpChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={this.state.signupcredentials.password}
              onChange={this.handleSignUpChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Login);
