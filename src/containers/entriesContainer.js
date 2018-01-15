import React from "react";
import Entry from "../components/Entry";
import { services } from "../services";

class EntriesContainer extends React.Component {
  state = {
    entries: []
  };
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    if (token) {
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
    const entries = this.state.entries.map((entry, index) => {
      return <Entry key={index} entry={entry} />;
    });
    return <div>{entries}</div>;
  }
}

export default EntriesContainer;
