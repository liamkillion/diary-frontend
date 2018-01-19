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
      .then(res => this.setState({ entry: res }));
  }

  render() {
    console.log("EntryContainer state", this.state);
    console.log("EntryContainer props", this.props);
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
