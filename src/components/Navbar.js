import React from "react";

class Navbar extends React.Component {
  render() {
    console.log("Navbar props", this.props);
    const loggedIn = !!this.props.currentUser.id;
    return (
      <div className="nav-wrapper">
        {loggedIn ? (
          <div>
            <p>{`Welcome${this.props.currentUser.name}`}</p>
            <button onClick={this.props.handleLogout}>Log Out</button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Navbar;
