import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { services } from "./services";
import newEntryContainer from "./containers/newEntryContainer";
import entriesContainer from "./containers/entriesContainer";
import dashboardContainer from "./containers/dashboardContainer";

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
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} } });
  };
  //Login Router
  //
  render() {
    console.log("App state", this.state);
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
              return <newEntryContainer />;
            }}
          />
          <Route
            path="/entries"
            render={() => {
              return <entriesContainer />;
            }}
          />
          <Route
            path="/dashboard"
            render={() => {
              return <dashboardContainer />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
