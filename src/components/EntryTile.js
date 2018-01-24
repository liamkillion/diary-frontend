import React from "react";
import { Link } from "react-router-dom";

class EntryTile extends React.Component {
  render() {
    const date = new Date(this.props.entry.created_at);
    const showDate = date.toDateString();
    const goPath = `/entries/${this.props.entry.id}`;
    return (
      <Link to={goPath}>
        <div className="card teal darken-1 z-depth-4">
          <div className="card-content white-text">
            <p>Your post: {this.props.entry.content}</p>
            <p>Created at: {showDate}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default EntryTile;
