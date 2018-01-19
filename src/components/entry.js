import React from "react";

class Entry extends React.Component {
  render() {
    var emojiSupported = (function() {
      var node = document.createElement("canvas");
      if (
        !node.getContext ||
        !node.getContext("2d") ||
        typeof node.getContext("2d").fillText !== "function"
      )
        return false;
      var ctx = node.getContext("2d");
      ctx.textBaseline = "top";
      ctx.font = "32px Arial";
      ctx.fillText("\ud83d\ude03", 0, 0);
      return ctx.getImageData(16, 16, 1, 1).data[0] !== 0;
    })();
    debugger;
    return (
      <div>
        <div className="card teal darken-1">
          <p>{this.props.entry.content}</p>
          <p>Created On Date: {this.props.entry.created_on_date}</p>
          <p>Location: {this.props.entry.location}</p>
          <p>Mood: {this.props.entry.mood}</p>
          <p>Weather: {this.props.entry.weather}</p>
        </div>
      </div>
    );
  }
}

export default Entry;
