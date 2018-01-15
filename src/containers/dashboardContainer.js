import React from "react";
import { services } from "../services";

class DashboardContainer extends React.Component {
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    if (token) {
      services.auth.getCurrentUser().then(user => {
        console.log("response fron current_user endpoint", user);
        const currentUser = { currentUser: user };
        this.setState({ auth: currentUser });
      });
    } else {
      this.props.history.push("/login");
    }
  };
  render() {
    return (
      <div>
        <h1>DashboardContainer</h1>
      </div>
    );
  }
}

export default DashboardContainer;
