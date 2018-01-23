import React from "react";
import { services } from "../services";

class DashboardContainer extends React.Component {
  // http://maps.google.com/?q=-37.866963,144.980615
  // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.7148073018548!2d${}!3d${}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDUyJzAxLjEiUyAxNDTCsDU4JzUwLjIiRQ!5e0!3m2!1sen!2sus!4v1516725032790" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.7148073018548!2d144.9784263153204!3d-37.86696297974281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDUyJzAxLjEiUyAxNDTCsDU4JzUwLjIiRQ!5e0!3m2!1sen!2sus!4v1516725032790" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  render() {
    const entries = this.props.currentUser.entries;
    const entriesLength = entries.length;
    const lastEntry = entries[entriesLength - 1];
    console.log(entries);
    return (
      <div>
        <h1>Dashboard</h1>
        <ul>
          <li>Number of entries: {entriesLength}</li>
          <li>
            Last Entry details:
            <ul>
              <li>Date Posted: {lastEntry.created_on_date}</li>
              <li>Posted From: </li>
              <li>Temperature: </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default DashboardContainer;
