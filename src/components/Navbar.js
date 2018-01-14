import React from "react";
import { withRouter } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    console.log("Navbar props", this.props);
    const loggedIn = !!this.props.currentUser.id;
    return (
      <nav>
        <div className="nav-wrapper">
          {loggedIn ? (
            <ul className="right hide-on-med-and-down">
              <li>{`Welcome ${this.props.currentUser.name}`}</li>
              <li>
                {" "}
                <button
                  onClick={() => {
                    this.props.history.push("/login");
                    this.props.handleLogout;
                  }}
                >
                  Log Out
                </button>
              </li>
            </ul>
          ) : (
            <ul className="right hide-on-med-and-down">
              <li>Welcome</li>
              <li>
                <button
                  onClick={() => {
                    this.props.history.push("/login");
                  }}
                >
                  Log In
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
