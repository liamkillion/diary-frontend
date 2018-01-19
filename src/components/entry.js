import React from "react";

class Entry extends React.Component {
  render() {
    const date = new Date(this.props.entry.timestamp);
    const showDate = date.toDateString();
    return (
      <div>
        <div className="card teal darken-1">
          <p>{this.props.entry.content}</p>
          <p>Date: {showDate}</p>
        </div>
      </div>
    );
  }
}

export default Entry;
