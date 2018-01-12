import React from "react";
import entry from "../components/entry";

class entriesContainer extends React.Component {
  compoentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      return {};
    } else {
    }
  }
  render() {
    return (
      <div>
        <h1>entriesContainer</h1>
        <entry />
      </div>
    );
  }
}

export default entriesContainer;
