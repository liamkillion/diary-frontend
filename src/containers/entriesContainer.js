import React from "react";
import EntryTile from "../components/EntryTile";
import { services } from "../services";

class EntriesContainer extends React.Component {
  state = { auth: { currentUser: {} } };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      services.auth.getCurrentUser().then(user => {
        console.log("response fron current_user endpoint", user);
        const currentUser = { currentUser: user };
        this.setState({ auth: currentUser });
      });
    }
  }
  render() {
    const entries = this.state.currentUser.entries.map((entry, index) => {
      return (
        <EntryTile key={index} entry={entry} history={this.props.history} />
      );
    });
    return (
      <div>
        <div className="row">
          <div className="col s12 m6">{entries}</div>
        </div>
      </div>
    );
  }
}

export default EntriesContainer;
