import React from "react";
import { services } from "../services";

class EntryTile extends React.Component {
  handleSelect = () => {
    services.entries.getEntry(this.props.entry.id).then(res => res.json());
    this.props.history.push(`/entries/${this.props.entry.id}`);
  };
  render() {
    return (
      <div className="card teal darken-1">
        <div className="card-content white-text">
          <p>Your post: {this.props.entry.content}</p>
          <p>Created at: {this.props.entry.created_at}</p>
        </div>
        <div className="card-action">
          <a onClick={this.handleSelect}>View Individually</a>
        </div>
      </div>
    );
  }
}

export default EntryTile;
