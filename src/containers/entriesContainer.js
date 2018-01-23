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
      <div>
        <div className="row">
          <div className="col s12 m6">{entries}</div>
        </div>
      </div>
    );
  }
}

export default EntriesContainer;
