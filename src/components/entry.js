import React from "react";

class Entry extends React.Component {
  render() {
    return (
      <div>
        <p>Your post: {this.props.entry.content}</p>
        <p>Created at: {this.props.entry.created_at}</p>
      </div>
    );
  }
}

export default Entry;
