import React from "react";

class EntryInfo extends React.Component {
  render() {
    return (
      <div>
        <p>Location:</p>
        <p>40.705261,-74.0150895</p>
        <p>Weather:</p>
        <p>
          -459.67°F{" "}
          <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
        </p>
      </div>
    );
  }
}

export default EntryInfo;
