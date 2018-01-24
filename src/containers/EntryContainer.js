import React from "react";
import Entry from "../components/Entry";
import { services } from "../services";

class EntryContainer extends React.Component {
  state = {
    entry: {
      id: "null",
      user_id: "null",
      content: "null",
      created_on_date: "null",
      location: "null",
      img_src: "null",
      mood: "null",
      created_at: "null",
      updated_at: "null",
      weather: "null"
    }
  };

  componentDidMount() {
    services.entries
      .getEntry(this.props.match.params.entry_id)
      .then(entry => this.setState({ entry }));
  }

  render() {
    return (
      <div>
        <button onClick={this.props.history.goBack}>Back To Entries</button>
        <Entry entry={this.state.entry} />
      </div>
    );
  }
}

export default EntryContainer;
