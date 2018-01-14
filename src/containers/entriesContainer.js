import React from "react";
import Entry from "../components/Entry";
import { services } from "../services";

class EntriesContainer extends React.Component {
  compoentDidMount() {
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
  }

  render() {
    return (
      <div>
        <h1>EntriesContainer</h1>
        <Entry />
      </div>
    );
  }
}

export default EntriesContainer;
