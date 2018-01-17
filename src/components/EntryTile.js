import React from "react";
import { services } from "../services";
import { Link, Route } from "react-router-dom";
import EntryContainer from "../containers/EntryContainer";

class EntryTile extends React.Component {
  render() {
    const date = new Date(this.props.entry.timestamp);
    const showDate = date.toDateString();
    const goPath = `/entries/${this.props.entry.id}`;
    return (
      <div className="card teal darken-1">
        <div className="card-content white-text">
          <p>Your post: {this.props.entry.content}</p>
          <p>Created at: {showDate}</p>
        </div>
        <div className="card-action">
          <Route
            path={goPath}
            render={() => {
              return <EntryContainer />;
            }}
          />
        </div>
      </div>
    );
  }
}

export default EntryTile;
