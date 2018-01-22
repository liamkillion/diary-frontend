import React from "react";
import { services } from "../services";

class DashboardContainer extends React.Component {
  state = { auth: { currentUser: {} } };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      services.auth.getCurrentUser().then(user => {
        console.log("response fron current_user endpoint", user);
        const currentUser = { currentUser: user };
        this.setState({ auth: currentUser });
      });
    }
  }

  render() {
    console.log("dashboard state", this.state);
    console.log("dashboard currentUser", this.state.auth.currentUser);
    console.log("dashboard entries", this.state.auth.currentUser.entries);
    const entries = this.state.auth.currentUser.entries;
    return (
      <div>
        <h1>Dashboard</h1>
        <ul>
          <li>Number of entries: </li>
          <li>Last Entry details: </li>
        </ul>
      </div>
    );
  }
}

export default DashboardContainer;
