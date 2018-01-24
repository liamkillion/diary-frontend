import React from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    const loggedIn = !!this.props.currentUser.id;
    return (
      <nav>
        <div className="nav-wrapper">
          {loggedIn ? (
            <ul className="right hide-on-med-and-down">
              <li>{`Welcome ${this.props.currentUser.name}`}</li>
              <li>
                <Link to={"/entries"}>
                  <div className="waves-effect waves-light btn">
                    All Entries
                  </div>
                </Link>
              </li>
              <li>
                <Link to={"/entries/new"}>
                  <div className="waves-effect waves-light btn">New Entry</div>
                </Link>
              </li>
              <li>
                <Link to={"/dashboard"}>
                  <div className="waves-effect waves-light btn">Dashboard</div>
                </Link>
              </li>
              <li>
                <div
                  className="waves-effect waves-light btn"
                  onClick={() => {
                    this.props.history.push("/login");
                    this.props.handleLogout;
                  }}
                >
                  Log Out
                </div>
              </li>
            </ul>
          ) : (
            <ul className="right hide-on-med-and-down">
              <li>Welcome</li>
              <li>
                <div
                  className="waves-effect waves-light btn"
                  onClick={() => {
                    this.props.history.push("/login");
                  }}
                >
                  Log In
                </div>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
