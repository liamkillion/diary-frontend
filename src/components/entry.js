import React from "react";

class Entry extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.entry.content}</p>
      </div>
    );
  }
}

export default Entry;
