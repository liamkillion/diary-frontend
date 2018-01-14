import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { services } from "./services";
import NewEntryContainer from "./containers/NewEntryContainer";
import EntriesContainer from "./containers/EntriesContainer";
import DashboardContainer from "./containers/DashboardContainer";

class App extends React.Component {
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

  handleLogin = user => {
    const currentUser = { currentUser: user };
    localStorage.setItem("token", user.token);
    this.setState({ auth: currentUser });
    console.log("handleLogin props", this.props);
    // this.state.history.push("/entries/new");
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} } });
  };
  //Login Router
  //
  render() {
    console.log("App", this.state);
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
            render={() => {
              return (
                <NewEntryContainer currentUser={this.state.auth.currentUser} />
              );
            }}
          />
          <Route
            path="/entries"
            render={() => {
              return <EntriesContainer />;
            }}
          />
          <Route
            path="/dashboard"
            render={() => {
              return <DashboardContainer />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
