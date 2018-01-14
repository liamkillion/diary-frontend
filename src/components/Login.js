import React from "react";
import { services } from "../services/index";
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

  handleSubmit = event => {
    event.preventDefault();
    // console.log("Login props", this.props);
    // console.log("Login state", this.state);
    services.auth
      .logIn(this.state.credentials.email, this.state.credentials.password)
      .then(res => {
        if (res.error) {
          this.setState({ error: res.error });
        } else {
          this.props.handleLogin(res);
          this.props.history.push("/entries/new");
          console.log("Our user is", res);
        }
      });
  };

  render() {
    return (
      <div>
        {this.state.error ? <h1>Try Again</h1> : null}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>email</label>
            <input
              type="text"
              name="email"
              value={this.state.credentials.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Login);
