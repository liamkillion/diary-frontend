import React from "react";
import Entry from "../components/Entry";

class EntryContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>This Is the Entry Container, single entry goes here</h1>
        <Entry />
      </div>
    );
  }
}

export default EntryContainer;
