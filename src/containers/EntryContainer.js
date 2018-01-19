import React from "react";
import Entry from "../components/Entry";
import { services } from "../services";

class EntryContainer extends React.Component {
  state = {
    entry: ""
  };

  componentDidMount() {
    const entryId = this.props.history.location.pathname.last;
    const entry = services.entries.getEntry(entryId);
    this.setState({ entry });
  }

  render() {
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
