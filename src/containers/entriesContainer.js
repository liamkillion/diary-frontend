import React from "react";
import EntryTile from "../components/EntryTile";

class EntriesContainer extends React.Component {
  render() {
    const entries = this.props.currentUser.entries.map((entry, index) => {
      return (
        <EntryTile key={index} entry={entry} history={this.props.history} />
      );
    });
    return (
      <div className="container">
        <div className="row">{entries}</div>
      </div>
    );
  }
}

export default EntriesContainer;
