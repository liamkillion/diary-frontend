import React from "react";

class DashboardContainer extends React.Component {
  render() {
    const entries = this.props.currentUser.entries;
    const entriesLength = entries.length;
    const lastEntry = entries[entriesLength - 1];
    let lastEntryDate = "";
    let lastEntryLocation = "";
    let lastEntryWeather = "";
    let lastEntryTemp = "";
    if (lastEntry) {
      lastEntryDate = lastEntry.created_on_date;
      lastEntryLocation = `Latitude: ${lastEntry.location[0]}, Longitude: ${
        lastEntry.location[1]
      }`;
      lastEntryWeather = lastEntry.weather.summary;
      lastEntryTemp = lastEntry.weather.temperature;
    }

    return (
      <div>
        <h1>Dashboard</h1>
        <ul>
          <li>Number of entries: {entriesLength}</li>
          <li>
            Last Entry details:
            <ul>
              <li>Date Posted: {lastEntryDate}</li>
              <li>Posted From: {lastEntryLocation}</li>
              <li>
                Weather: {lastEntryWeather} at {lastEntryTemp}&#176;F
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default DashboardContainer;
