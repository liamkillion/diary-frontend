import React from "react";
import Entry from "../components/Entry";
import { services } from "../services";

class EntryContainer extends React.Component {
  state = {
    entry: ""
  };

  componentDidMount() {
    services.entries
      .getEntry(this.props.match.params.entry_id)
      .then(entry => this.setState({ entry }));
  }

  render() {
    console.log("EntryContainer state", this.state);
    console.log("EntryContainer props", this.props);
    console.log(this.state.entry.weather);
    console.log("WTF type is this location", typeof this.state.entry.location);
    return (
      <div>
        <button onClick={this.props.history.goBack}>Back To Entries</button>
        <h1>This Is the Entry Container, single entry goes here</h1>
        <Entry entry={this.state.entry} />
      </div>
    );
  }
}

export default EntryContainer;
