import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Switch, Route, withRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import { services } from "./services";
import NewEntryContainer from "./containers/NewEntryContainer";
import EntriesContainer from "./containers/EntriesContainer";
import DashboardContainer from "./containers/DashboardContainer";
import EntryContainer from "./containers/EntryContainer";
import ReactS3 from "react-s3";

class App extends React.Component {
  state = { auth: { currentUser: { entries: [] } } };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      services.auth.getCurrentUser().then(user => {
        const currentUser = { currentUser: user };
        this.setState({ auth: currentUser });
      });
    }
  }

  handleLogin = user => {
    const currentUser = { currentUser: user };
    localStorage.setItem("token", user.token);
    this.setState({ auth: currentUser });
    this.props.history.push("/entries/new");
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} } });
  };

  handleCreateEntry = newEntry => {
    services.entries
      .createNewEntry(newEntry)
      .then(entries => this.setState({ auth: { currentUser: { entries } } }));
    this.props.history.push("/entries");
  };

  render() {
    return (
      <div className="App">
        <Navbar
          currentUser={this.state.auth.currentUser}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route
            path="/login"
            render={routerProps => {
              return <Login {...routerProps} handleLogin={this.handleLogin} />;
            }}
          />
          <Route
            path="/entries/new"
            render={routerProps => {
              return (
                <NewEntryContainer
                  {...routerProps}
                  currentUser={this.state.auth.currentUser}
                  refreshEntries={this.refreshEntries}
                  handleCreateEntry={this.handleCreateEntry}
                />
              );
            }}
          />
          <Route
            exact
            path="/entries"
            render={routerProps => {
              return (
                <EntriesContainer
                  {...routerProps}
                  currentUser={this.state.auth.currentUser}
                />
              );
            }}
          />
          <Route
            path="/dashboard"
            render={() => {
              return (
                <DashboardContainer currentUser={this.state.auth.currentUser} />
              );
            }}
          />
          <Route
            path="/entries/:entry_id"
            render={routerProps => <EntryContainer {...routerProps} />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
