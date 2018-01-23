import React from "react";
import Emojify from "react-emojione";

class Entry extends React.Component {
  render() {
    const emojiCode = this.props.entry.mood;
    const location = `Latitude: ${this.props.entry.location[0]}, Longitude: ${
      this.props.entry.location[1]
    }`;
    const weather = this.props.entry.weather.summary;
    const temp = this.props.entry.weather.temperature;
    return (
      <div>
        <div className="card teal darken-1">
          <p>You wrote: {this.props.entry.content}</p>
          <p>Posted On: {this.props.entry.created_on_date}</p>
          <p>Location: {location}</p>
          <p>
            Mood:
            <Emojify>
              <span>{emojiCode}</span>
            </Emojify>
          </p>
          <p>
            Weather: {weather} at {temp}&#176;F
          </p>
        </div>
      </div>
    );
  }
}

export default Entry;
