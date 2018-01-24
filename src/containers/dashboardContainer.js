import React from "react";
import { Link } from "react-router-dom";

class DashboardContainer extends React.Component {
  render() {
    const entries = this.props.currentUser.entries;
    const entriesLength = entries.length;
    const lastEntry = entries[entriesLength - 1];
    let lastEntryDate = "";
    let lastEntryLocation = "";
    let lastEntryWeather = "";
    let lastEntryTemp = "";
    let firstEntryDate = "";
    let joinDate = "";
    let goPath = "";
    if (lastEntry) {
      lastEntryLocation = `Latitude: ${lastEntry.location[0]}, Longitude: ${
        lastEntry.location[1]
      }`;
      lastEntryWeather = lastEntry.weather.summary;
      lastEntryTemp = lastEntry.weather.temperature;
      joinDate = this.props.currentUser.entries[0].created_on_date;
      goPath = `/entries/${lastEntry.id}`;
    }

    return (
      <div className="container">
        <h1>Dashboard</h1>

        <div className="row">
          <div className="col s5">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Latest Entry Details:</span>
                <ul>
                  <li>Date Posted: {lastEntryDate}</li>
                  <li>Posted From: {lastEntryLocation}</li>
                  <li>
                    Weather: {lastEntryWeather} at {lastEntryTemp}&#176;F
                  </li>
                </ul>
              </div>
              <div className="card-action">
                <Link to={goPath}>Check out this post!</Link>
              </div>
            </div>
          </div>
          <div className="col s7">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Overall Stats</span>
                <ul>
                  <li>Number of entries: {entriesLength}</li>
                  <li>Joined On: {joinDate}</li>
                  <li>More Stats:</li>
                  <li>More Stats:</li>
                  <li>More Stats:</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardContainer;
