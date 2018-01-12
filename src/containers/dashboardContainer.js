import React from "react";

class dashboardContainer extends React.Component {
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
        <h1>dashboardContainer</h1>
      </div>
    );
  }
}

export default dashboardContainer;
