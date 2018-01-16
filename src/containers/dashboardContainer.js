import React from "react";
import { services } from "../services";

class DashboardContainer extends React.Component {
  state = {
    entries: []
  };
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    if (token) {
      // debugger;
      services.entries
        .getEntries()
        .then(entries =>
          entries.filter(entry => entry.userId === this.props.currentUser.id)
        )
        .then(entries => this.setState({ entries }));
    } else {
      this.props.history.push("/login");
    }
  };

  render() {
    return (
      <div>
        <h1>Dashboard</h1>

        <ul>
          <li>Number of entries: {this.state.entries.count}</li>
          <li>Last Entry was: {this.state.entries.last}</li>
        </ul>
      </div>
    );
  }
}

export default DashboardContainer;
